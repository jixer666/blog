# MallChat项目笔记

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-02-08</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## 微信扫码登录

### 准备

#### 工具

> 误区：微信扫码登录每个人都可以，不是只有认证号才行。测试阶段可以用测试接口来进行测试，只不过项目部署后才需要认证使用
>
> 注意：微信回调接口需要开启内网穿透

- 微信公众号的开发者账号：[点击此处进行注册](https://mp.weixin.qq.com/)
- 内网穿透工具：[点击此处注册](https://natapp.cn/)

#### 引入依赖

```xml
<dependency>
    <groupId>com.github.binarywang</groupId>
    <artifactId>weixin-java-mp</artifactId>
    <version>4.4.0</version>
</dependency>
```

#### 配置文件

这里配置文件参考Binary Wang的代码

```yml
wx:
  mp:
    callback: ${mallchat.wx.callback} # 回调地址
    configs:
      - appId: ${mallchat.wx.appId} # 第一个公众号的appid
        secret: ${mallchat.wx.secret} # 公众号的appsecret
        token: ${mallchat.wx.token} # 接口配置里的Token值
        aesKey: ${mallchat.wx.aesKey} # 接口配置里的EncodingAESKey值
```

WxMpProperties.java

```java
@Data
@ConfigurationProperties(prefix = "wx.mp")
public class WxMpProperties {
    /**
     * 是否使用redis存储access token
     */
    private boolean useRedis;

    /**
     * redis 配置
     */
    private RedisConfig redisConfig;

    @Data
    public static class RedisConfig {
        /**
         * redis服务器 主机地址
         */
        private String host;

        /**
         * redis服务器 端口号
         */
        private Integer port;

        /**
         * redis服务器 密码
         */
        private String password;

        /**
         * redis 服务连接超时时间
         */
        private Integer timeout;
    }

    /**
     * 多个公众号配置信息
     */
    private List<MpConfig> configs;

    @Data
    public static class MpConfig {
        /**
         * 设置微信公众号的appid
         */
        private String appId;

        /**
         * 设置微信公众号的app secret
         */
        private String secret;

        /**
         * 设置微信公众号的token
         */
        private String token;

        /**
         * 设置微信公众号的EncodingAESKey
         */
        private String aesKey;
    }

    @Override
    public String toString() {
        return JSONUtil.toJsonStr(this);
    }
}
```

WxMpConfiguration.java

```java
@AllArgsConstructor
@Configuration
@EnableConfigurationProperties(WxMpProperties.class)
public class WxMpConfiguration {
    private final LogHandler logHandler;
    private final MsgHandler msgHandler;
    private final SubscribeHandler subscribeHandler;
    private final ScanHandler scanHandler;
    private final WxMpProperties properties;

    @Bean
    public WxMpService wxMpService() {
        // 代码里 getConfigs()处报错的同学，请注意仔细阅读项目说明，你的IDE需要引入lombok插件！！！！
        final List<WxMpProperties.MpConfig> configs = this.properties.getConfigs();
        if (configs == null) {
            throw new RuntimeException("大哥，拜托先看下项目首页的说明（readme文件），添加下相关配置，注意别配错了！");
        }

        WxMpService service = new WxMpServiceImpl();
        service.setMultiConfigStorages(configs
                .stream().map(a -> {
                    WxMpDefaultConfigImpl configStorage;
                    configStorage = new WxMpDefaultConfigImpl();

                    configStorage.setAppId(a.getAppId());
                    configStorage.setSecret(a.getSecret());
                    configStorage.setToken(a.getToken());
                    configStorage.setAesKey(a.getAesKey());
                    return configStorage;
                }).collect(Collectors.toMap(WxMpDefaultConfigImpl::getAppId, a -> a, (o, n) -> o)));
        return service;
    }

    @Bean
    public WxMpMessageRouter messageRouter(WxMpService wxMpService) {
        final WxMpMessageRouter newRouter = new WxMpMessageRouter(wxMpService);

        // 记录所有事件的日志 （异步执行）
        newRouter.rule().handler(this.logHandler).next();

        // 关注事件
        newRouter.rule().async(false).msgType(EVENT).event(SUBSCRIBE).handler(this.subscribeHandler).end();

        // 扫码事件
        newRouter.rule().async(false).msgType(EVENT).event(EventType.SCAN).handler(this.scanHandler).end();

        // 默认
        newRouter.rule().async(false).handler(this.msgHandler).end();

        return newRouter;
    }

}
```

#### 配置消息处理器

AbstractHandler.java

```java
public abstract class AbstractHandler implements WxMpMessageHandler {
    protected Logger logger = LoggerFactory.getLogger(getClass());
}
```

LogHandler.java（日志）

```java
@Component
@Slf4j
public class LogHandler extends AbstractHandler {
    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage,
                                    Map<String, Object> context, WxMpService wxMpService,
                                    WxSessionManager sessionManager) {
        log.info("\n接收到请求消息，内容：{}", JSONUtil.toJsonStr(wxMessage));
        return null;
    }
}
```

MsgHandler.java

```java
@Component
public class MsgHandler extends AbstractHandler {

    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage,
                                    Map<String, Object> context, WxMpService weixinService,
                                    WxSessionManager sessionManager) {

        return null;
    }
}
```

ScanHandler.java

```java
@Component
public class ScanHandler extends AbstractHandler {

    @Autowired
    private WxMsgService wxMsgService;

    /**
     * 处理用户扫码【不是第一次】
     */
    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMpXmlMessage, Map<String, Object> map,
                                    WxMpService wxMpService, WxSessionManager wxSessionManager) throws WxErrorException {
        // 扫码事件处理
        return wxMsgService.scan(wxMpService, wxMpXmlMessage);
    }
}
```

SubscribeHandler.java

```java
@Component
public class SubscribeHandler extends AbstractHandler {
    @Autowired
    private WxMsgService wxMsgService;

    /**
     * 扫描登录二维码后第一次进入需要关注公众号
     * @param wxMessage
     * @param context
     * @param weixinService
     * @param sessionManager
     * @return
     * @throws WxErrorException
     */
    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage,
                                    Map<String, Object> context, WxMpService weixinService,
                                    WxSessionManager sessionManager) throws WxErrorException {

        this.logger.info("新关注用户 OPENID: " + wxMessage.getFromUser());

        WxMpXmlOutMessage responseResult = null;
        try {
            responseResult = this.handleSpecial(weixinService, wxMessage);
        } catch (Exception e) {
            this.logger.error(e.getMessage(), e);
        }

        if (responseResult != null) {
            return responseResult;
        }

        try {
            return new TextBuilder().build("感谢关注", wxMessage, weixinService);
        } catch (Exception e) {
            this.logger.error(e.getMessage(), e);
        }

        return null;
    }

    /**
     * 处理特殊请求，比如如果是扫码进来的，可以做相应处理
     */
    private WxMpXmlOutMessage handleSpecial(WxMpService weixinService, WxMpXmlMessage wxMessage)
            throws Exception {
        return wxMsgService.scan(weixinService, wxMessage);
    }

}
```

### 执行过程

#### 1、获取登录二维码

```java
public void handleLoginReq(Channel channel) {
  // 生成登录随机码
  Integer code = generateLoginCode(channel);
  // 微信生成带参二维码
  WxMpQrCodeTicket wxMpQrCodeTicket = null;
  try {
      wxMpQrCodeTicket = wxMpService.getQrcodeService().qrCodeCreateTmpTicket(code, (int) DURATION.getSeconds());
  } catch (WxErrorException e) {
      e.printStackTrace();
  }
  // 把二维码推送前端
  sendMsg(channel, WebSocketAdapter.buildResp(wxMpQrCodeTicket));
}
```

这里我是对二维码做了过期策略，`wxMpQrCodeTicket.getUrl()`就是带参二维码的地址，通过草料二维码生成器便能生成一个二维码

#### 2、公众号返回登录授权

在`ScanHandler`类的`handle`方法中写入，专门处理扫码登录事件

```java
String openid = wxMpXmlMessage.getFromUser();
Integer code = getEventKey(wxMpXmlMessage);
if (ObjectUtil.isNull(code)){
    return null;
}

// 保存用户信息
User user = userDao.getByOpenId(openid);
boolean registered = Objects.nonNull(user);
boolean authorized = registered && StrUtil.isNotBlank(user.getName());
if (registered && authorized){
	// 用户已经注册了，直接返回用户+token信息
    webSocketService.scanLoginSuccess(code, user.getId());
    return null;
}
if (!registered){
    // 未写入数据库
    User insert = UserAdapter.buildUserSave(openid);
    userService.register(insert);
}
WAIT_AUTHORIZE_MAP.put(openid, code);
// 通知前端正在等待认证
webSocketService.waitAuthorize(code);
// 拼接URL，获取认证地址
String authorizeUrl = String.format(URL, wxMpService.getWxMpConfigStorage().getAppId(), URLDecoder.decode(callback + "wx/portal/public/callBack"));
return TextBuilder.build("请点击登录：<a href=\"" + authorizeUrl + "\">登录</a>", wxMpXmlMessage, wxMpService);
```

当用户扫码并关注成功后，会自动弹出消息

> 请点击登录：[登录]()

用户点击登录后，会跳转到`"https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"`微信授权页面，需要传入appid和回调接口地址，授权成功后将带着code参数访问给定的回调接口

#### 3、微信调用给定的回调接口

```java
@GetMapping("/callBack")
public RedirectView callBack(@RequestParam String code) {
    try {
        // 根据code获取token
        WxOAuth2AccessToken accessToken = wxMpService.getOAuth2Service().getAccessToken(code);
        // 根据token获取用户信息
        WxOAuth2UserInfo userInfo = wxMpService.getOAuth2Service().getUserInfo(accessToken, "zh_CN");
        wxMsgService.authorize(userInfo);
    } catch (Exception e) {
        log.error("callBack error", e);
    }
    RedirectView redirectView = new RedirectView();
    redirectView.setUrl("https://mp.weixin.qq.com/s/m1SRsBG96kLJW5mPe4AVGA");
    return redirectView;
}
```

通过回调传来的code获取token，通过token来获取微信用户信息【只有昵称和头像】

` wxMsgService.authorize(userInfo)`将用户不全的信息【用户头像，昵称】进行更新，并生成token进行返回

就这样，前端就拿到了后端传来的token

## 用户认证技术Token方案

Token 的生成方式通常有以下几种：

- **随机字符串**：可以使用一些随机数生成算法，如 **UUID**、**Snowflake(雪花算法)** 等来生成一个随机的字符串作为 Token。由于随机字符串本身就是随机分布的，因此具有很高的安全性。
- **JWT**（JSON Web Token）：JWT 是一种基于 JSON 格式的开放标准（RFC 7519），用于在多方之间安全地传输信息。它将用户身份信息和权限等相关信息编码成一个 JSON 对象，并通过数字签名或者加密等方式进行验证和保护。JWT 除了可以用于 Token 登录外，还可以用于 API 认证、单点登录等场景。
- **SessionID**。

通常的Token在服务器端的实现方式有这几个：

1. 用SessionID实现Token的功能
2. 使用Json Web Token (JWT)
3. 中心化存储Token

下面分析一下各个存储方式的优缺点。

### Cookie + Session 登录

HTTP 是一种**无状态的协议**。

无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。即我们给服务器发送 HTTP 请求之后，服务器根据请求返回数据，但不会记录任何信息。

为了解决 HTTP 无状态的问题，出现了 Cookie。

Cookie 是服务器端发送给客户端的一段特殊信息，这些信息以文本的方式存放在客户端，客户端每次向服务器端发送请求时都会带上这些特殊信息。

![](https://s11.ax1x.com/2024/02/01/pFMooHx.png)

**认证流程：**

1. 前端输入账号密码，提交给后端
2. 后端验证成功后，创建一个`Session`。`Session`是一种服务器端保存用户会话信息的机制，用于识别多次请求之间的逻辑关系。
3. 后端将`Session ID`（通常是一个随机的字符串）返回给前端，并通过 `Cookie` 的方式将`Session ID`保存在浏览器中。这样就可以保证当用户再次发送请求时，后端可以通过该 `Session ID `来识别用户身份，并完成相关的操作。
4. 在后续的请求中，浏览器会自动将保存的 `Cookie `信息发送到后端进行验证，如果` Session ID`有效，则返回相应的数据。如果 `Session ID `失效或者不存在，则需要重新登录获取新的 `Session ID`。
5. 用户退出时，后端要删除对应的`Session`信息

#### Cookie的设置原理

cookie的简单之处，在于前端是无感知的，无需额外开发。这是http协议的约定，后端可以通过返回的报文，将cookie设置进网页，网页下次请求也会**自动携带**。`SetCookie` 命令

![](https://s11.ax1x.com/2024/02/01/pFMoHUK.png)

#### 缺点

- 跨域问题：由于 Cookie 只能在同域名下共享，因此跨域访问时无法访问到对应的 Cookie 信息。这时，可能需要采用一些其他的跨域解决方案，如 JSONP、CORS 等。
- 扩展性问题：由于 Session 信息存储在服务器端，当系统扩展到多台服务器时，需要采用一些集中式的 Session 管理方案，否则会出现 Session 不一致或者丢失等问题。
- 一些移动设备和浏览器可能会禁用 Cookie 和 Session 机制，这会导致无法正常登录

#### 总结

- 给服务器的`sessionID`其实就相当于是一个`token`，只不过前端是无感知的设置进`cookie`的，这种方案 通常适用于后台。
- 由于cookie的一些限制，这个token最好还是由前端**主动保存**比如保存到**localStorage**。登录的时候主动从**请求头**携带。
- 由于现在都是集群部署，token的关系保存，最好又是**集中化管理**，或者**无状态化管理**

### JWT实现token

简单来说JWT就是通过可逆加密算法，生成一串包含用户、过期时间等关键信息的Token，每次请求服务器拿到这个Token解密出来就能得到用户信息，从而判断用户状态。

![](https://s11.ax1x.com/2024/02/01/pFMob4O.png)

#### 优点

1. JWT的最大特点是**服务器不保存会话状态，**无论哪个服务器**解析**出来的Token信息都一样，而且不需要做任何查询操作，省掉了数据库/Redis的开销

#### 缺点

1. 正式因为JWT的特点，使用期间不可能取消令牌或更改令牌的权限，一旦JWT签发，在有效期内将会一直有效。
2. 无法主动更新Token的有效性，只要用户传回来的Token没有过期，服务器就会认为这个用户操作是有效的。比如一下这个场景：某用户被封禁，此时该用户所有操作都应该被禁止，但是由于之前发给用户的JWT Token还没有过期，服务器仍然认为该用户操作合法。有一个解决方案是维护一张JWT黑名单表，只有没在表上的用户的JWT是有效的。**但是随之而来又有一个问题便是这个JWT黑名单表存在哪里。存在服务器，那么又要搞多服务器同步。存在关系数据库，那么查数据库效率又低。存在Redis，则又回到了Token丢失问题。** 
3. 其实解析JWT Token也是消耗服务器CPU的

#### 总结

1. 由于jwt是无状态的，它一发布开始，就意味着固定了过期时间。我们没法对他做**失效**，没法实现**续期**，它的好处也是显而易见的。不需要任何一个中心化的地方去保存它，管理它，查询它，比对它。

### 双token方案

双token是为了**解决jwt的续期**问题的。由于jwt一颁布，就意味着在指定时间内能够通行。

1. 如果给的有**效期过长**，风险是比较大的，服务器失去了掌控力。在这期间如果想让用户失效，或者是有人盗取了token。都可以胡作非为好久。
2. 如果给的有**效期过短**，用户经常需要重新登录，体验也很不好。
3. 如果**中心化管理**用户状态，也就是每次解析jwt token之后，还需要去中心化比对能否通过。这样又违背了初衷。增加每次**认证的耗时**

双token分为`access_token`和`refresh_token`。一般`access_token`的有效期可以设置为10分钟，`refresh_token`的有效期可以设置为7天。用户每次请求都用`access_token`，如果前端发现请求401，也就是过期了，就用`refresh_token`去重新申请一个`access_token`。继续请求。

这里的关键在于，`refresh_token`申请`access_token`的时候，用户是无感知的，前后端的框架自动去更新这个新的`access_token`。

还有一个点在申请`access_token`的时候，后端这时候会去校验用户的状态等问题，如果发现用户被禁用了，就申请不到token了。

#### 总结

双token是一个多方平衡的完美方案。它希望对用户的认证有所**掌控**，又不希望每次的检验会增加**耗时**。它不想给用户**过长的授权时间**，又不想用户因此**频繁登录**影响体验。因此变成了每隔一段`access_token`的过期时间，都会重新掌控局面，进行重新认证的复杂判断。

### 中心管理token

JWT碰巧有去中心化的特性，但为了能够控制它的**上下线**，**主动下线** ，**登录续期**等功能。我们依然可以对它进行中心化的管理。

~~这也是抹茶当前采用的方式(参考的大佬文章)~~。依赖redis中心化管理uid-》token的信息。确保一个uid只有一个有效的token。用户登录后，每一次认证都会解析出uid，并请求redis进行token比对。并且异步判断有效期小于一天，进行续期。

> 有人说为啥不用uuid做token呢，既然都是redis中心存储，用uuid还可以少一次解析。

如果用uuid，前端每一次请求除了带上uuid还需要带上uid。

因为单纯用uuid，黑客很有可能不断遍历uuid去撞库，碰巧撞到有关联的在线用户。而如果将uuid和uid一起比对，哪怕uuid碰巧撞到了登录的用户，还需要确保是相同的uid。这个概率会降低非常之多。

用jwt的话，正好包含了uid，让前端传起来方便，所以就这么选择了。

大家明白了其中的差别，到时候就懂得怎么去对线面试官的。其实我们用jwt，但是却没怎么用到它的特性。本质上这样的场景用个uuid就差不多了

## 分布式锁

Redisson是架设在Redis基础上的一个Java驻内存数据网格（In-Memory Data Grid）。充分的利用了Redis键值数据库提供的一系列优势，基于Java实用工具包中常用接口，为使用者提供了一系列具有分布式特性的常用工具类。使得原本作为协调单机多线程并发程序的工具包获得了协调分布式多机多线程并发系统的能力，大大降低了设计和研发大规模分布式系统的难度。同时结合各富特色的分布式服务，更进一步简化了分布式环境中程序相互之间的协作。

**依赖**

```xml
<dependency>
      <groupId>org.redisson</groupId>
      <artifactId>redisson-spring-boot-starter</artifactId>
</dependency>
```

使用Redission实现分布式很简单

比如就一个简单的发放物品

```java
RLock lock = redissonClient.getLock("acquireItem" + idempotent);
boolean b = lock.tryLock();
AssertUtil.isTrue(b, "请求太频繁了");
try {
    // 是否已经获取了
    UserBackpack userBackpack = userBackpackDao.getByIdempotent(idempotent);
    if (Objects.nonNull(userBackpack)){
        return;
    }
    // 发放物品
    UserBackpack insert = UserBackpackAdapter.buildUserBackpack(uid, itemId, idempotent);
    userBackpackDao.save(insert);
} finally {
    lock.unlock();
}
```

通过`redissonClient.getLock(key)`获取锁对象，用`lock.tryLock()`就能获取锁，用`lock.unlock()`就能释放锁

现在对这个redisson的锁的部分进行封装，分别使用使用**编程式**的方法和**注解**方法进行改造，简化逻辑代码

### 编程式

新建一个`LockService`来实现分布式锁的公共部分

```java
@Service
public class LockService {

    @Autowired
    private RedissonClient redissonClient;

    /**
     *
     * @param key
     * @param waiteTime
     * @param timeUnit
     * @param supplier 只有出参没有入参, Function：既有出参又有入参
     * @param <T>
     * @return
     */
    @SneakyThrows
    public <T> T executeWithLock(String key, int waiteTime, TimeUnit timeUnit, Supplier<T> supplier) {
        RLock lock = redissonClient.getLock(key);
        boolean b = lock.tryLock(waiteTime, timeUnit);
        if (!b){
            throw new BusinessException(CommonErrorEnum.LOCK_LIMIT);
        }
        try {
            return supplier.get();
        } finally {
            lock.unlock();
        }
    }

    public <T> T executeWithLock(String key, Supplier<T> supplier) {
        return executeWithLock(key, -1, TimeUnit.MILLISECONDS, supplier);
    }

    /**
     *
     * @param key
     * @param runnable 既不传参，也不返参
     * @param <T>
     * @return
     * @throws InterruptedException
     */
    public <T> T executeWithLock(String key, Runnable runnable) {
        return executeWithLock(key, -1, TimeUnit.MILLISECONDS, () -> {
            runnable.run();
            return null;
        });
    }
}
```

这里对`executeWithLock`方法进行了重载，能够适应多种加锁的场景【可以实现有返回值的，无返回值，既有出参又有入参的】

说明一下`Supplier`：只有出参没有入参，`Function`：既有出参又有入参，`Runnable`：既不传参，也不返参

`executeWithLock`方法实现了分布式的公共部分，具体的代码逻辑由`supplier.get()`实现，也就是通过参数传入，需要我们自己来写

**编程式的修改代码如下**

```java
lockService.executeWithLock("acquireItem" + idempotent, () -> {
    // 是否已经获取了
    UserBackpack userBackpack = userBackpackDao.getByIdempotent(idempotent);
    if (Objects.nonNull(userBackpack)){
        return;
    }
    // 发放物品
    UserBackpack insert = UserBackpackAdapter.buildUserBackpack(uid, itemId, idempotent);
    userBackpackDao.save(insert);
});
```

比原先相比代码量减少了，可复用性提高了

### 注解

新建一个分布式注解`RedissonLock`

```java
@Retention(RetentionPolicy.RUNTIME) // 运行时生效
@Target(ElementType.METHOD) // 作用在方法上
public @interface RedissonLock {

    /**
     * key的前缀
     * @return
     */
    String prefixKey() default "";

    /**
     * EL表达式
     * @return
     */
    String key();

    /**
     * 等待锁时间，默认不等待
     * @return
     */
    int waitTime() default -1;

    /**
     * 时间单位，默认毫秒
     * @return
     */
    TimeUnit timeUnit() default TimeUnit.MILLISECONDS;
}
```

对这个注解进行切面

```java
@Component
@Aspect
@Order(0) // 确保在事务注解之前先执行，分布式在事务外
public class RedissonLockAspect {

    @Autowired
    private LockService lockService;

    @Around("@annotation(redissonLock)")
    public Object around(ProceedingJoinPoint joinPoint, RedissonLock redissonLock) {
        Method method = ((MethodSignature) joinPoint.getSignature()).getMethod();
        String prefix = StrUtil.isBlank(redissonLock.prefixKey()) ? SpElUtils.getMethodKey(method) : redissonLock.prefixKey();
        String key = SpElUtils.parseSpEl(method, joinPoint.getArgs(), redissonLock.key());
        return lockService.executeWithLock(prefix + ":" + key, redissonLock.waitTime(), redissonLock.timeUnit(), joinPoint::proceed);
    }
}
```

prefix为前缀，若没有给定，就需要通过`method.getDeclaringClass() + "#" + method.getName()`为默认的前缀

key为关键字，需要通过给定的**EL表达式**来进行匹配【会将给定的key和方法的参数名称进行匹配，若一致就写入`EvaluationContext（类似于map，键为方法参数名称，值为方法参数的值）`中】，用`parser.parseExpression`解析EL表达式，返回解析结果

具体的匹配代码如下

SpElUtils：EL表达式工具

```java
public class SpElUtils {
    private static final ExpressionParser parser = new SpelExpressionParser();
    private static final DefaultParameterNameDiscoverer parameterNameDiscoverer = new DefaultParameterNameDiscoverer();

    public static String parseSpEl(Method method, Object[] args, String spEl) {
        String[] params = Optional.ofNullable(parameterNameDiscoverer.getParameterNames(method)).orElse(new String[]{});//解析参数名
        EvaluationContext context = new StandardEvaluationContext();//el解析需要的上下文对象
        for (int i = 0; i < params.length; i++) {
            context.setVariable(params[i], args[i]);//所有参数都作为原材料扔进去
        }
        Expression expression = parser.parseExpression(spEl);
        return expression.getValue(context, String.class);
    }

    public static String getMethodKey(Method method) {
        return method.getDeclaringClass() + "#" + method.getName();
    }
}
```

注解切面的最后就是将解析出来的key，waitTime，timeUnit，joinPoint::proceed(自己写的逻辑)当作参数传入`lockService.executeWithLock()`自己写的编程式方法中

**使用注解方法修改的代码如下**

```java
@Override
public void acquireItem(Long uid, Long itemId, IdempotentEnum idempotentEnum, String businessId) {
    // 幂等号
    String idempotent = getIdempotent(uid, itemId, businessId);

    // 分布式注解方法
    userBackpackService.doAcquire(uid, itemId, idempotent);
}

@Transactional
@RedissonLock(key = "#idempotent", waitTime = 5000)
public void doAcquire(Long uid, Long itemId, String idempotent) {
    // 是否已经获取了
    UserBackpack userBackpack = userBackpackDao.getByIdempotent(idempotent);
    if (Objects.nonNull(userBackpack)) {
        return;
    }
    // 发放物品
    UserBackpack insert = UserBackpackAdapter.buildUserBackpack(uid, itemId, idempotent);
    userBackpackDao.save(insert);
}
```

## IP归属地

### 具体流程

IP归属地是社交网站常用的功能，实现起来非常简单

大致步骤：hutool工具类解析出ip地址 -> 通过淘宝的接口获取归属地 -> 更新数据库

本项目是在**登录之后**，**带token请求http**，**带token连接ws**，这几处进行ip解析

### 核心代码

```java
private void loginSuccess(Channel channel, User user, String token) {
    // 保存用户channel和uid对应关系
    WSChannelExtraDTO wsChannelExtraDTO = ONLINE_WS_MAP.get(channel);
    wsChannelExtraDTO.setUid(user.getId());
    // 给前端推送消息
    sendMsg(channel, WebSocketAdapter.buildResp(user, token));
    // 用户上线事件
    user.setLastOptTime(LocalDateTime.now());
    user.refreshIp(NettyUtil.getAttr(channel, NettyUtil.IP));
    applicationEventPublisher.publishEvent(new UserOnlineEvent(this, user));
}
```

User实体

```java
@Data
@EqualsAndHashCode(callSuper = false)
@TableName(value = "user", autoResultMap = true)
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户id
     */
      @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 用户昵称
     */
    @TableField("name")
    private String name;

    /**
     * 用户头像
     */
    @TableField("avatar")
    private String avatar;

    /**
     * 性别 1为男性，2为女性
     */
    @TableField("sex")
    private Integer sex;

    /**
     * 微信openid用户标识
     */
    @TableField("open_id")
    private String openId;

    /**
     * 在线状态 1在线 2离线
     */
    @TableField("active_status")
    private Integer activeStatus;

    /**
     * 最后上下线时间
     */
    @TableField("last_opt_time")
    private LocalDateTime lastOptTime;

    /**
     * ip信息
     */
    @TableField(value = "ip_info", typeHandler = JacksonTypeHandler.class)
    private IpInfo ipInfo;

    /**
     * 佩戴的徽章id
     */
    @TableField("item_id")
    private Long itemId;

    /**
     * 使用状态 0.正常 1拉黑
     */
    @TableField("status")
    private Integer status;

    /**
     * 创建时间
     */
    @TableField("create_time")
    private LocalDateTime createTime;

    /**
     * 修改时间
     */
    @TableField("update_time")
    private LocalDateTime updateTime;


    public void refreshIp(String attr) {
        if (ipInfo == null){
            ipInfo = new IpInfo();
        }
        ipInfo.refreshIp(attr);
    }
}
```

IpInfo实体

```java
@Data
public class IpInfo implements Serializable {

    // 注册的ip
    private String createIp;

    // 注册时ip的详情
    private IpDetail ipDetail;

    // 更新的ip
    private String updateIp;

    // 更新时的ip详情
    private IpDetail updateIpDetail;

    public void refreshIp(String ip) {
        if (StrUtil.isBlank(ip)){
            return;
        }
        if (StrUtil.isBlank(createIp)){
            createIp = ip;
        }
        updateIp = ip;
    }

    public String needRefreshIp() {
        boolean needRefresh = Optional.ofNullable(updateIpDetail)
                .map(IpDetail::getIp)
                .filter(item -> Objects.equals(updateIp, item))
                .isPresent(); // 判断结果是否是null

        return needRefresh ? null : updateIp;
    }

    public void refreshIpDetail(IpDetail ipDetail) {
        if (Objects.equals(ipDetail.getIp(), createIp)){
            this.ipDetail = ipDetail;
        }
        if (Objects.equals(ipDetail.getIp(), updateIp)){
            this.updateIpDetail = ipDetail;
        }

    }
}
```

`refreshIp`是对当前登录的ip进行刷新，有个关键点就是先对注册ip进行判断，注册的ip无就需要对注册的ip进行赋值，其次在是更新的ip

在用户登录成功后，通过` applicationEventPublisher.publishEvent(new UserOnlineEvent(this, user));`发送异步消息SpringEvent，通过一个事件监听来接受

```java
@Component
public class UserOnlineListener {

    @Autowired
    private UserDao userDao;

    @Autowired
    private IpService ipService;

    @Async // 异步执行
    @EventListener(classes = UserOnlineEvent.class)
    public void userOnline(UserOnlineEvent event){
        User user = event.getUser();
        // 更新用户信息【Ip，是否登录等】
        User update = new User();
        update.setId(user.getId());
        update.setLastOptTime(user.getLastOptTime());
        update.setIpInfo(user.getIpInfo());
        update.setActiveStatus(UserActiveStatusEnum.ONLINE.getType());
        userDao.updateById(update);
        // 用户IP解析
        ipService.refreshDetailAsync(user.getId());

    }
}
```

这里是对用户的信息做了更新【最后一次登录事件，登录状态，IP信息】，用`ipService.refreshDetailAsync(user.getId())`实现对IP的异步刷新解析

```java
@Service
@Slf4j
public class IpServiceImpl implements IpService {

    private static ExecutorService executor = new ThreadPoolExecutor(1, 1,
            0L, TimeUnit.MILLISECONDS,
            new LinkedBlockingQueue<Runnable>(500), new NamedThreadFactory("refresh-ipDetail", false));

    @Autowired
    private UserDao userDao;

    @Override
    public void refreshDetailAsync(Long id) {
        executor.execute(() -> {
            User user = userDao.getById(id);
            IpInfo ipInfo = user.getIpInfo();
            if (Objects.isNull(ipInfo)){
                return;
            }
            // 判断是否需要刷新ip详情
            String ip = ipInfo.needRefreshIp();
            if (StrUtil.isBlank(ip)){
                // 更新ip和更新ip一致无需刷新
                return;
            }

            // 获取ip详情
            IpDetail ipDetail = tryGetIpDetailOrNull(ip);
            if (Objects.nonNull(ipDetail)){
                // 刷新ipInfo的详情
                ipInfo.refreshIpDetail(ipDetail);
                // 更新ip详情
                User update = new User();
                update.setIpInfo(ipInfo);
                update.setId(id);
                userDao.updateById(update);
            }
        });
    }

    private IpDetail tryGetIpDetailOrNull(String ip) {
        for (int i = 0; i < 3; i++){
            IpDetail ipDetail = getIpDetailOrNull(ip);
            if (Objects.nonNull(ipDetail)){
                return ipDetail;
            }
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e){
                log.error("tryGetIpDetailOrNull InterruptedException", e);
            }
        }
        return null;
    }

    private IpDetail getIpDetailOrNull(String ip) {
        String body = HttpUtil.get("https://ip.taobao.com/outGetIpInfo?ip=" + ip + "&accessKey=alibaba-inc");
        try {
            ApiResult<IpDetail> result = JSONUtil.toBean(body, new TypeReference<ApiResult<IpDetail>>() {
            }, false);
            if (result.isSuccess()) {
                return result.getData();
            }
        } catch (Exception e) {
            return null;
        }

        return null;
    }
}
```

在实现方法`refreshDetailAsync`中，使用了线程池来进行异步排队处理，设置了最大容量为1个，并且设置了`refresh-ipDetail`线程前缀来便于排查出问题

通过`needRefreshIp`判断是否需要刷新，若需要刷新就返回要刷新的ip地址，否则就返回null；是否刷新的判断依据是用用户当前数据库已经保存的IP解析的地址和当前登录的ip地址进行对比，若一致就返回null，否则就返回当前的登录的ip地址

`tryGetIpDetailOrNull`方法是尝试获取ip解析信息，有3次机会，每次执行完有2秒的睡眠时间

`refreshIpDetail`方法是刷新当前用户的ip解析信息，通过ip进行判断是注册ip还是更新ip，从而进行赋值

## 黑名单功能

### 具体流程

实现黑名单功能就是将用户的ip和id放在黑名单数据库中，通过拦截器判断登陆的用户是否在名单中，从而决定是否拦截通过

本项目中的黑名单功能需要用到权限，权限管理多用于b端项目，对于c端来说，权限没有到那么复杂的级别。因此权限设计只涉及到了用户身份

![](https://cdn.nlark.com/yuque/0/2023/png/26318626/1686979132303-1934c4b2-943f-45d3-b892-a78a228e4821.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_109%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fresize%2Cw_1280%2Climit_0)

**流程**：登录的时候返回角色 -> 管理拉黑【判断权限】-> 推送给前端消息 -> 写入黑名单表， 修改状态【SpringEvent事件异步处理】 -> 拉黑用户拦截

### **核心代码**

判断用户是否具有某个权限，用来set巧妙处理

```java
@Service
public class RoleDao implements IRoleService {

    @Autowired
    private UserCache userCache;

    @Override
    public boolean isPower(Long uid, RoleEnum roleEnum) {
        // 获取用户所有权限
        Set<Long> roleSet = userCache.getRoleSet(uid);

        return isAdmin(roleSet) || roleSet.contains(roleEnum.getId());
    }

    private boolean isAdmin(Set<Long> roleSet){
        return roleSet.contains(RoleEnum.ADMIN.getId());
    }
}
```

将用户写入黑名单，并且通过SpringEvent发送异步事件处理黑名单事件

```java
 @Override
 @Transactional(rollbackFor = Exception.class)
 public void black(BlackReq blackReq) {
     // 将id写入黑名单
     Long uid = blackReq.getUid();
     Black black = new Black();
     black.setType(BlackTypeEnum.UID.getId());
     black.setTarget(uid.toString());
     blackDao.save(black);
    // 将ip写入黑名单
    User user = userDao.getById(uid);
    blackIp(Optional.ofNullable(user.getIpInfo().getCreateIp()).orElse(null));
    blackIp(Optional.ofNullable(user.getIpInfo().getUpdateIp()).orElse(null));

    applicationEventPublisher.publishEvent(new UserBlackEvent(this, user));
}

/**
 * 封禁IP
 *
 * @param ip
 */
private void blackIp(String ip) {
    if (StrUtil.isBlank(ip)) {
        return;
    }

    try {
        Black insert = new Black();
        insert.setTarget(ip);
        insert.setType(BlackTypeEnum.IP.getId());
        blackDao.save(insert);
    } catch (Exception e) {

    }
}
```

监听黑名单事件并作处理【推送前端消息，更新用户状态，清空黑名单缓存列表(拦截器处理的时候会用到)】

```java
@Component
public class UserBlackListener {

    @Autowired
    private WebSocketService webSocketService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private UserCache userCache;

    /**
     * 推送前端消息
     * @param event
     */
    @Async // 异步执行
    @TransactionalEventListener(classes = UserBlackEvent.class, phase = TransactionPhase.AFTER_COMMIT)
    public void sendMsg(UserBlackEvent event){
        User user = event.getUser();
        webSocketService.sendMsgToAll(WebSocketAdapter.buildBlack(user));
    }

    /**
     * 更新用户状态
     * @param event
     */
    @Async // 异步执行
    @TransactionalEventListener(classes = UserBlackEvent.class, phase = TransactionPhase.AFTER_COMMIT)
    public void changeActivity(UserBlackEvent event){
        User user = event.getUser();
        userDao.invalidUid(user.getId());
    }

    /**
     * 清空黑名单缓存
     * @param event
     */
    @Async // 异步执行
    @TransactionalEventListener(classes = UserBlackEvent.class, phase = TransactionPhase.AFTER_COMMIT)
    public void clearBlackList(UserBlackEvent event){
        userCache.evictBlack();
    }
}
```

推送给前端所有用户这里用到了线程池，加快处理效率

```java
@Autowired
private ThreadPoolTaskExecutor threadPoolTaskExecutor;

@Override
public void sendMsgToAll(WSBaseResp<?> resp) {
    ONLINE_WS_MAP.forEach(((channel, wsChannelExtraDTO) -> {
        // 使用线程池，加快发送速度
        threadPoolTaskExecutor.execute(() -> {
            sendMsg(channel, resp);
        });
    }));
}
```

## 游标翻页

游标翻页更适用于一页一页跳转的场景，而对于跳页反转（例如第一页跳到第五页就不适用）

本项目为聊天项目，适合适用游标翻页

### 深翻页问题

普通翻页前端一般会有个分页条。能够指定一页的**条数**，以及任意选择查看**第几页**。

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1685187350715-ec688988-ee5a-426e-88ea-dbb85f6aac22.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

对应的参数就是`pageNo`和`pageSize`

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1685187427310-3e189d14-a215-4dbf-b86d-5badf5bd5a12.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

假设前端想要查看第11页的内容，传的值`pageNo`=11，`pageSize`=10

其中`100`代表需要跳过的条数，`10`代表跳过指定条数后，往后需要再取的条数。

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1685188112380-ab4f8dec-f339-451b-87eb-2ae6ae1bfbe1.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

对应图片就是这样的一个效果，需要在数据库的位置先读出100条，然后**丢弃**。丢弃完100条后，再继续取10条**选用**。

如果我们翻页到了很深的地方，比如读到了第1000页，对应的sql语句就是`select * from table limit 10000,10`

需要先查询10000条进行丢弃，再取那么个10条选用。这个效率也太低了，

>  我们经常需要定时任务全量去跑一张表的数据，普通翻页去跑的话，到后面数据量大的时候，就会越跑越慢，这就是深翻页带来的问题。

**解决办法**

目前的问题在于每次翻页都需要花时间扫描一些不需要的记录，然后丢弃。那么是不是可以优化这个步骤呢？

以后不论第几页，我们都不需要跳过一些值。直接取`limit 0,10`。这样语句变成了`select * from table limit 0,10`

取到的是1-10这些记录，取不到我们想要的101-110，没关系，再加一个条件`select * from table where id>100 order by id limit 0,10`

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1685188635346-68f634f3-3276-4f87-8788-4691ec990d83.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

只要id这个字段有索引，就能直接定位到101这个字段，然后去10条记录。以后无论翻页到多大，通过索引直接定位到读取的位置，效率基本是一样的。这个`id>100`就是我们的游标，这就是**游标翻页。**

### 游标介绍

游标翻页可以完美的解决深翻页问题，依赖的就是我们的游标，即`cursor`。针对mysql的游标翻页，我们需要通过`cursor`快速定位到指定记录，意味着游标必须添加索引。

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1685189222316-cf64fcf1-da85-46f0-b6b0-4088cd66b89e.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_15%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

前端之前传的`pageNo`字段改成了`cursor`字段。`cursor`是上一次查询结果的位置，作为下一次查询的游标，由后端返回

我们来模拟一次前后端的翻页交互

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1685189899438-884c817d-0ee5-4b7d-a540-6be3bb135975.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_19%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

随着翻页的持续，游标不断往翻页的方向推进。

**所以游标翻页不适合跳页，只能不断的往下翻。更适合C端的列表场景**

### 总结

游标翻页的`优点`：

1.解决深翻页问题

2.解决频繁变动的列表翻页问题。

`缺点`：

1.无法跳页，只能不断往下翻

游标翻页更适合c端场景，用户只能不断下滑翻页。

普通翻页更适合B端场景。用户能看见总页数，能随意跳页

## 前后端资源懒加载

### 选用原因

#### 带宽占用

对于项目中的个别请求，有时候会有大量冗余和重复的消息。特别是用户的`头像`，`名称`，`佩戴徽章`，这些东西，基本都是重复的，但是我们每一次的消息推送，成员上下线，都需要携带。

对于这些数据，其实我们只想知道消息的拥有者是谁，也就是uid。其他的头像，徽章，这些我们之前都有，但是他们却占据了消息体的大部分内容，有效载荷太少。

在压测的时候发现了很多时候我们的**瓶颈就在带宽**上。而带宽都被头像的url给占用了。

#### 代码复杂度

如果每次因为一个简单的消息推送，就要去写一套复杂的代码，去加载用户的名称，以及徽章相关的信息。都会增大后端代码的复杂度。

每次组装vo数据，都得去查出用户的关联信息，进行组装。哪怕是可以复用这段代码，但是相应的性能损耗，也是不可避免的。

### 解决办法

#### 图片路径协议优化

前后端可以将用户头像遵循一种固定的路径协议，比如`https://img.mallchat.cn/avatar/{uid}.png`;

这样只给前端uid，他自己就能组装出用户头像了

#### 懒加载时间点

前端在什么场景下会请求后端进行信息懒加载，每次请求后端，需要更新自己库里的懒加载时间`lastModifyTime`

- 没数据加载
- 数据过期加载（校验）：`lastModifyTime`小于数据库存的`lastModifyTime`
- 主动加载（校验）：例如用户主动点击头像查询信息

### 总结

了解到了项目的**瓶颈**，大多是来源带宽不足。为了**节省带宽**，同时简化后端的逻辑，我们设计了一套**前后端资源懒加载的交互框架**。他有三个懒加载的**时间点**，同时保证了**及时性**，以及**最终一致性**。这个框架的核心就是**lastModifyTime**字段的定义。有了它，只要没有变动，后端都可以不返回用户信息，又能节省一大部分带宽。并且为了不需要展示的字段不返回null。我们用了一个json的注解，又节省了一小部分带宽。

## 批量缓存框架

缓存通常有两种使用方式，一种是Cache-Aside，一种是cache-through。也就是旁路缓存和缓存即数据源。

一般一种用于读，另一种用于读写。

### 盘路缓存

我们通常用的都是旁路缓存模式

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1696084655149-bf1c5c2b-3626-45b2-8b43-0d9268f5a6bc.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

GET缓存获取不到，就LOAD加载数据库，再将数据库写回redis缓存。

盘路缓存也有很好用的框架，比如spring-cache。只需要写load逻辑。加上个注解，就能实现盘路缓存的效果。

**缺点**：在极端情况下。我需要获取一批用户的信息，碰巧所有用户的缓存都失效了，都需全部重新加载。那么这样一个本来性能很高的循环，就等同于全部查了数据库，缓存一点儿作用都没了。

### 批量缓存查询

对于这种批量查询缓存的需求，传统的旁路缓存框架无法达到我们的需求。我们需要让他能够批量的get or load。

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1696085632392-3b47a5e4-9700-4702-9ede-bef81682e82e.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

类似这张图，批量的get。发现没有的数据，再批量的load一次，这样和redis以及数据库的交互都只会有一次。

**具体代码**

```java
/**
 * 获取用户信息，盘路缓存模式
 */
public Map<Long, User> getUserInfoBatch(Set<Long> uids) {
    //批量组装key
    List<String> keys = uids.stream().map(a -> RedisKey.getKey(RedisKey.USER_INFO_STRING, a)).collect(Collectors.toList());
    //批量get
    List<User> mget = RedisUtils.mget(keys, User.class);
    Map<Long, User> map = mget.stream().filter(Objects::nonNull).collect(Collectors.toMap(User::getId, Function.identity()));
    //发现差集——还需要load更新的uid
    List<Long> needLoadUidList = uids.stream().filter(a -> !map.containsKey(a)).collect(Collectors.toList());
    if (CollUtil.isNotEmpty(needLoadUidList)) {
        //批量load
        List<User> needLoadUserList = userDao.listByIds(needLoadUidList);
        Map<String, User> redisMap = needLoadUserList.stream().collect(Collectors.toMap(a -> RedisKey.getKey(RedisKey.USER_INFO_STRING, a.getId()), Function.identity()));
        RedisUtils.mset(redisMap, 5 * 60);
        //加载回redis
        map.putAll(needLoadUserList.stream().collect(Collectors.toMap(User::getId, Function.identity())));
    }
    return map;
}
```

我们在很多处都要用到这个接口，所以就需要对这个批量查询缓存进行封装

这时候又要轮到我们的常规抽象环节了

![img](https://cdn.nlark.com/yuque/0/2023/png/26318626/1696085827579-fa03f689-bdb1-476e-b53f-a291b3314660.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_TWFsbENoYXQ%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

黄色代表可复用的流程，红色代表个性化的代码。

### 批量缓存框架

先创建批量缓存框架的接口

接口

```java
public interface BatchCache<IN, OUT> {
    /**
     * 获取单个
     */
    OUT get(IN req);

    /**
     * 获取批量
     */
    Map<IN, OUT> getBatch(List<IN> req);

    /**
     * 修改删除单个
     */
    void delete(IN req);

    /**
     * 修改删除多个
     */
    void deleteBatch(List<IN> req);
}
```

再通过抽象类，定义好骨架

抽象类

```java
public abstract class AbstractRedisStringCache<IN, OUT> implements BatchCache<IN, OUT> {

    private Class<OUT> outClass;

    protected AbstractRedisStringCache() {
        ParameterizedType genericSuperclass = (ParameterizedType) this.getClass().getGenericSuperclass();
        this.outClass = (Class<OUT>) genericSuperclass.getActualTypeArguments()[1];
    }

    protected abstract String getKey(IN req);

    protected abstract Long getExpireSeconds();

    protected abstract Map<IN, OUT> load(List<IN> req);

    @Override
    public OUT get(IN req) {
        return getBatch(Collections.singletonList(req)).get(req);
    }

    @Override
    public Map<IN, OUT> getBatch(List<IN> req) {
        if (CollectionUtil.isEmpty(req)) {//防御性编程
            return new HashMap<>();
        }
        //去重
        req = req.stream().distinct().collect(Collectors.toList());
        //组装key
        List<String> keys = req.stream().map(this::getKey).collect(Collectors.toList());
        //批量get
        List<OUT> valueList = RedisUtils.mget(keys, outClass);
        //差集计算
        List<IN> loadReqs = new ArrayList<>();
        for (int i = 0; i < valueList.size(); i++) {
            if (Objects.isNull(valueList.get(i))) {
                loadReqs.add(req.get(i));
            }
        }
        Map<IN, OUT> load = new HashMap<>();
        //不足的重新加载进redis
        if (CollectionUtil.isNotEmpty(loadReqs)) {
            //批量load
            load = load(loadReqs);
            Map<String, OUT> loadMap = load.entrySet().stream()
                    .map(a -> Pair.of(getKey(a.getKey()), a.getValue()))
                    .collect(Collectors.toMap(Pair::getFirst, Pair::getSecond));
            RedisUtils.mset(loadMap, getExpireSeconds());
        }

        //组装最后的结果
        Map<IN, OUT> resultMap = new HashMap<>();
        for (int i = 0; i < req.size(); i++) {
            IN in = req.get(i);
            OUT out = Optional.ofNullable(valueList.get(i))
                    .orElse(load.get(in));
            resultMap.put(in, out);
        }
        return resultMap;
    }

    @Override
    public void delete(IN req) {
        deleteBatch(Collections.singletonList(req));
    }

    @Override
    public void deleteBatch(List<IN> req) {
        List<String> keys = req.stream().map(this::getKey).collect(Collectors.toList());
        RedisUtils.del(keys);
    }
}
```

这时候你就会发现，写一个批量的旁路缓存有多简单。

具体实现

```java
@Component
public class UserInfoCache extends AbstractRedisStringCache<Long, User> {
    @Autowired
    private UserDao userDao;

    @Override
    protected String getKey(Long uid) {
        return RedisKey.getKey(RedisKey.USER_INFO_STRING, uid);
    }

    @Override
    protected Long getExpireSeconds() {
        return 5 * 60L;
    }

    @Override
    protected Map<Long, User> load(List<Long> uidList) {
        List<User> needLoadUserList = userDao.listByIds(uidList);
        return needLoadUserList.stream().collect(Collectors.toMap(User::getId, Function.identity()));
    }
}
```
