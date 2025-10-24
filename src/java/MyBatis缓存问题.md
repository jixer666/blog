# MyBaits 缓存问题

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-10-24</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## 问题

笔者在项目使用 MyBatis 对数据进行查询，对于多次出现的同一个查询，想走 MyBatis 一级缓存，可出现了缓存失效的情况

## 代码

忽略笔者对方法的取名，下面方法的主要作用就是分别进行了两次查询

```java
@Override
public void deleteMsg(MsgDeleteReq req, String uid) {
    req.checkParams();
    AssertUtil.isNotEmpty(uid, "用户ID不能为空");
    ImMessage imMessage = imMessageService.selectImMessageById(req.getMsgId());
    
    AssertUtil.nonNull(imMessage, "消息不存在");
    imMessageService.deleteImMessage(req.getMsgId(), uid);
}

@Override
public void deleteImMessage(String msgId, String uid) {
    AssertUtil.isNotEmpty(uid, "用户ID不能为空");
    AssertUtil.isNotEmpty(msgId, "消息ID不能为空");
    ImMessage imMessage = selectImMessageById(msgId);
    imMessage.addDelRange(uid);
}
```

## 解决办法

排查问题，更改日志级别为 `trace`，查看控制台发现两次查询不是用一个 `sqlsession`，两次查询不是在同一个会话中进行，不在同一个会话一级缓存就失效了

解决办法：`deleteMsg` 方法加上 `@Transactional(readOnly = true)` 注解，保证在同一个事务中，但这种注解只适用于全是查询的情况

## 拓展

### 一级缓存

默认自动开启

生效条件：

- 必须是同一个会话（`sqlsession`）
- xxxxxxxxxx public class Main {    public static void main(String[] args) {        Context context = new Context();        context.setObj(3);        ContextHolder.set(context);​        ContextHolderUtil.run(() -> {            Context context1 = ContextHolder.getIsNotNull();            context1.setObj(2);            System.out.println(ContextHolder.get().getObj());        }).needNew().go();​        System.out.println(ContextHolder.get());​        ContextHolderUtil.run(() -> {            Context context1 = ContextHolder.getIsNotNull();            context1.setObj(1);            System.out.println(ContextHolder.get().getObj());        }).needNew().go();​        System.out.println(ContextHolder.get());    }}java
- 在两次或者多次查询过程中间没有更新、插入和删除的操作

原理：每一次查询都会先去查询是否有缓存，若无缓存，就会去执行 sql 语句，执行后会放入一个 `CacheKey` 为 key，执行结果为 value 的 map 中，代码如下：

```java
list = resultHandler == null ? (List)this.localCache.getObject(key) : null; //查询缓存
if (list != null) {
    // 走缓存
    this.handleLocallyCachedOutputParameters(ms, key, parameter, boundSql);
} else {
    list = this.queryFromDatabase(ms, parameter, rowBounds, resultHandler, key, boundSql);
}
```

```java
private <E> List<E> queryFromDatabase(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, CacheKey key, BoundSql boundSql) throws SQLException {
    this.localCache.putObject(key, ExecutionPlaceholder.EXECUTION_PLACEHOLDER);
    List list;
    try {
        list = this.doQuery(ms, parameter, rowBounds, resultHandler, boundSql);
    } finally {
        this.localCache.removeObject(key);
    }
    // 放入缓存
    this.localCache.putObject(key, list);
    if (ms.getStatementType() == StatementType.CALLABLE) {
        this.localOutputParameterCache.putObject(key, parameter);
    }
    return list;
}
```

`CacheKey` 对象格式如下图所示：

![](https://gitee.com/lijunxi666/picture-bed/raw/master/mybatis-cache/20251024165243_37_2.png)

对于更新、插入、删除操作，会执行清除全部缓存的操作，代码如下：

```java
public void clearLocalCache() {
    if (!this.closed) {
        this.localCache.clear();
        this.localOutputParameterCache.clear();
    }
}
```

### 二级缓存

二级缓存的开启是需要在对应的 `mapper.xml` 文件中加入`<cache></cache>` 

生效条件：

- 写入缓存的时机是在当前会话结束（若是平常的 Web 应用就是一次请求结束），目的是防止命中的就是其它线程会话未完成的脏数据
- 调用的是同一个 statement  也是 mapper 接口中的同一个方法
- SQL 和 参数必须一致
- 如果 `readWrite=true`，实体对像必须实现 `Serializable` 接口，目的是为了防止和一级缓存一样拿到的是对象的引用而在造成的数据不安全问题，序列化后拿到的就不是一个引用

二级缓存清除：

- 对于更新、插入、删除操作，会执行清除全部缓存的操作，是只会删除某个 namespace 级别下的，而一级缓存会全部删除

- 在查询的 xml 中添加 `flushCache="true"`，如下代码所示
  ```xml
  <select flushCache="true"></select>
  ```

## 参考文章

- [https://blog.csdn.net/foxException/article/details/109203040](https://blog.csdn.net/foxException/article/details/109203040)
