<template><div><h1 id="内部通讯发送消息死锁问题" tabindex="-1"><a class="header-anchor" href="#内部通讯发送消息死锁问题"><span>内部通讯发送消息死锁问题</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-10-28</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<h2 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景"><span>问题背景</span></a></h2>
<p>公司的 IM 内部通讯在发送消息，数据量不是很大大约1000条左右，因为发送一条消息消息，包含了很多的对数据库 SqlServer 表操作逻辑，所以在成功推送了7、8条数据后出现了死锁问题</p>
<h2 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h2>
<p>首先是对死锁的分析，死锁产生的四个条件：</p>
<ul>
<li>互斥条件</li>
<li>不可剥夺条件</li>
<li>请求和保持条件</li>
<li>循环等待条件</li>
</ul>
<p>笔者问题代码整个过程代码如下：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/im-deadlock/b8620da4eeee8db754b3accde0b928eb.png" alt=""></p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/im-deadlock/f718d85b4e14d331d3996864dd929a4e.png" alt=""></p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/im-deadlock/6973a3c45c99c4f6112d87aa8a6abc34.png" alt=""></p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/im-deadlock/4e95ef5d1570e1d392ff2976d443348f.png" alt=""></p>
<p>整个过程的逻辑就是，使用了 for 循环依次发送每个消息，对于每个消息，先要进行保存，然后再异步进行推送</p>
<p>报错如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">org.springframework.dao.DeadlockLoserDataAccessException: </span>
<span class="line">### Error querying database.  Cause: com.microsoft.sqlserver.jdbc.SQLServerException: 事务(进程 ID 69)与另一个进程被死锁在 锁 资源上，并且已被选作死锁牺牲品。请重新运行该事务。</span>
<span class="line">### The error may exist in file [D:\project\chem_chat\chem_server\target\classes\mapper\ai\chat\ImMessageMapper.xml]</span>
<span class="line">### The error may involve com.lierchem.ai.chat.mapper.ImMessageMapper.selectImMessageById</span>
<span class="line">### The error occurred while handling results</span>
<span class="line">### SQL: select id, msgtype, content, roomid, createby, createtime, replyid, status, keyword, delrange from immessage               where id = ?</span>
<span class="line">### Cause: com.microsoft.sqlserver.jdbc.SQLServerException: 事务(进程 ID 69)与另一个进程被死锁在 锁 资源上，并且已被选作死锁牺牲品。请重新运行该事务。</span>
<span class="line">; 事务(进程 ID 69)与另一个进程被死锁在 锁 资源上，并且已被选作死锁牺牲品。请重新运行该事务。; nested exception is com.microsoft.sqlserver.jdbc.SQLServerException: 事务(进程 ID 69)与另一个进程被死锁在 锁 资源上，并且已被选作死锁牺牲品。请重新运行该事务。</span>
<span class="line">	at org.springframework.jdbc.support.SQLErrorCodeSQLExceptionTranslator.doTranslate(SQLErrorCodeSQLExceptionTranslator.java:271)</span>
<span class="line">	at org.springframework.jdbc.support.AbstractFallbackSQLExceptionTranslator.translate(AbstractFallbackSQLExceptionTranslator.java:70)</span>
<span class="line">// 堆栈信息已省略</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到是在查询的时候出现了死锁</p>
<p>**为什么查询会出现死锁呢？**整个过程的逻辑是顺序执行的，先是保存，等保存完了才执行的查询，按照我的理解，保存的加的排他锁已经被释放掉了，并不会影响查询的共享锁，而且下一次的循环操作的又是另一组数据，并不是同一行，并不会影响当前的数据</p>
<p>笔者从这里就感觉到了很奇怪，于是打开了 Navicat 模拟一下事务下 Sql 对查询 Sql 的影响，发现具体在一个事务的下，只要这个事务没执行完，关于事务里的所有涉及的表都没法进行任何操作，<strong>锁由行级锁升级成为了表级锁，将整个表锁住了</strong>！具体的 Sql 如下：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token keyword">BEGIN</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test <span class="token punctuation">(</span>id<span class="token punctuation">,</span> content<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'311'</span><span class="token punctuation">,</span> <span class="token string">'12312'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 检查当前持有的锁</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">    request_session_id<span class="token punctuation">,</span></span>
<span class="line">    resource_type<span class="token punctuation">,</span></span>
<span class="line">    resource_description<span class="token punctuation">,</span></span>
<span class="line">    request_mode<span class="token punctuation">,</span></span>
<span class="line">    request_status</span>
<span class="line"><span class="token keyword">FROM</span> sys<span class="token punctuation">.</span>dm_tran_locks</span>
<span class="line"><span class="token keyword">WHERE</span> resource_type <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">'KEY'</span><span class="token punctuation">,</span> <span class="token string">'PAGE'</span><span class="token punctuation">,</span> <span class="token string">'OBJECT'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出，Object表示使用的是表锁 </span></span>
<span class="line"><span class="token number">65</span> OBJECT X <span class="token keyword">GRANT</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token string">'1231'</span> <span class="token comment">// 被阻塞</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>笔者将表的锁升级改为禁用，也会自动升级为表锁，好神奇</p>
<p>由此可推断出笔者代码符合死锁产生的互斥的条件</p>
<h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h2>
<p>1、首先就是对代码逻辑的修改，之前对于一条相同数据的获取笔者使用了多次走数据库查询，修改为直接由第一次查询完后带来，不用重复查询</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"> <span class="token annotation punctuation">@Override</span></span>
<span class="line"> <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">ChatSendMsgReq</span> req<span class="token punctuation">,</span> <span class="token class-name">String</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token class-name">AbstractWebsocketMsgHandler</span> handler <span class="token operator">=</span> <span class="token class-name">WebsocketMsgHandlerFactory</span><span class="token punctuation">.</span><span class="token function">getByType</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getMsgtype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token class-name">ImMessage</span> msg <span class="token operator">=</span> handler<span class="token punctuation">.</span><span class="token function">checkAndSaveMsg</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token comment">// 直接带入，后续操作无需再次查询</span></span>
<span class="line">     applicationEventPublisher<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MessagePushEvent</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token keyword">return</span> msg<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、其次对于保存，由于笔者对整个方法使用 <code v-pre>@Transactional</code> 进行了事务控制，事务的粒度比较大，改为只对数据库操作的部分加上事务</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token class-name">ImMessage</span> <span class="token function">checkAndSaveMsg</span><span class="token punctuation">(</span><span class="token class-name">ChatSendMsgReq</span> request<span class="token punctuation">,</span> <span class="token class-name">String</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">T</span> body <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toBean</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//统一校验</span></span>
<span class="line">    <span class="token class-name">AssertUtil</span><span class="token punctuation">.</span><span class="token function">allCheckValidateThrow</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//子类扩展校验</span></span>
<span class="line">    <span class="token function">checkMsg</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getRoomid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ImMessage</span> insert <span class="token operator">=</span> <span class="token class-name">ImMessage</span><span class="token punctuation">.</span><span class="token function">buildMsgSave</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> uid<span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> transactionTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>status <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//统一保存</span></span>
<span class="line">        imMessageMapper<span class="token punctuation">.</span><span class="token function">insertImMessage</span><span class="token punctuation">(</span>insert<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//消息其他处理</span></span>
<span class="line">        <span class="token function">handleMsg</span><span class="token punctuation">(</span>insert<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> insert<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后就是会话更新逻辑，笔者之前做法是通过定时任务，每隔5秒就调用后端接口去更新会话最新读取时间，造成了大量的无效请求，浪费了系统的资源，改为只有自己主动发送消息和接受到消息才进行读取</p>
<p>4、最后就是新增重试机制，对于发送失败的数据进行重试，最多重试3次</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>failList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>retryCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ImRoomSingle</span><span class="token punctuation">></span></span> tempList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ImRoomSingle</span> imRoomSingle <span class="token operator">:</span> failList<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">                chatService<span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">AppMsg</span><span class="token punctuation">.</span><span class="token function">buildAppMsgChatReq</span><span class="token punctuation">(</span>imRoomSingle<span class="token punctuation">.</span><span class="token function">getRoomid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> appMsg<span class="token punctuation">)</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"【重试】发送消息失败，原因：{}"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                tempList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>imRoomSingle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    failList<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    failList <span class="token operator">=</span> tempList<span class="token punctuation">;</span></span>
<span class="line">    retryCount <span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


