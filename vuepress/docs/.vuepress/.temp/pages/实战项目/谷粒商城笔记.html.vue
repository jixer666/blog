<template><div><h1 id="谷粒商城笔记" tabindex="-1"><a class="header-anchor" href="#谷粒商城笔记"><span>谷粒商城笔记</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-07-26</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<h2 id="elasticsearch全文检索" tabindex="-1"><a class="header-anchor" href="#elasticsearch全文检索"><span>ElasticSearch全文检索</span></a></h2>
<p>ElastciSearch 入门笔记单独整理成一篇笔记：<a href="../java/ElasticSearch入门.html">点击跳转</a></p>
<p>项目中在搜索商品的时候用到 ES 技术，笔者认为难点之处在于对 Java 操作 ES 的 API 语法的不熟悉</p>
<h2 id="nginx-搭建" tabindex="-1"><a class="header-anchor" href="#nginx-搭建"><span>Nginx 搭建</span></a></h2>
<p>访问链路：Nginx -&gt; 网关 -&gt; 具体服务</p>
<h3 id="host-配置" tabindex="-1"><a class="header-anchor" href="#host-配置"><span>Host 配置</span></a></h3>
<p>打开文件 <code v-pre>‪C:\Windows\System32\drivers\etc\hosts</code>，添加下行文字，保存并覆盖（需要用管理员权限）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">127.0.0.1 gulimall.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>原理：浏览器在访问 <code v-pre>gulimall.com</code> 这个网站的时候，会先从本机中的 Host 文件去查找是否存在，否存在就返回对应设置的 IP 地址；若不存在就去解析  <code v-pre>gulimall.com</code> 去获取真实的 IP 地址</p>
<h3 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置"><span>Nginx 配置</span></a></h3>
<p>作用：方向代理 + 负载均衡</p>
<p>注意：必须要添加 <code v-pre>proxy_set_header Host $host</code> ，否则在 <code v-pre>Nginx</code>  反向代理到网关是没有 <code v-pre>Host</code> 这个参数的，网关就匹配不到出现404错误</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">upstream</span> gulimall</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:88</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server_name</span>  gulimall.com</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">proxy_pass</span> http://gulimall</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网关配置" tabindex="-1"><a class="header-anchor" href="#网关配置"><span>网关配置</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">gateway</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">routes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> gulimall_host_route</span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//gulimall<span class="token punctuation">-</span>product</span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> Host=<span class="token important">**.gulimall.com</span><span class="token punctuation">,</span>gulimall.com <span class="token comment"># 根据 Host 进行断言</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目全链路流程" tabindex="-1"><a class="header-anchor" href="#项目全链路流程"><span>项目全链路流程</span></a></h3>
<p>请求 -&gt; nginx -&gt; 网关 -&gt; 服务</p>
<h2 id="性能与压力测试" tabindex="-1"><a class="header-anchor" href="#性能与压力测试"><span>性能与压力测试</span></a></h2>
<h3 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试"><span>性能测试</span></a></h3>
<p><strong>性能测试工具</strong></p>
<ul>
<li>jconsole</li>
<li>jvisualvm</li>
</ul>
<table>
<thead>
<tr>
<th>压测内容</th>
<th>压测线程数</th>
<th>吞吐量/s</th>
<th>90%响应时间</th>
<th>99%响应时间</th>
</tr>
</thead>
<tbody>
<tr>
<td>Nginx</td>
<td>50</td>
<td>1580</td>
<td>33</td>
<td>35</td>
</tr>
<tr>
<td>Gateway</td>
<td>50</td>
<td>10980</td>
<td>6</td>
<td>35</td>
</tr>
<tr>
<td>简单服务</td>
<td>50</td>
<td>15688</td>
<td>5</td>
<td>10</td>
</tr>
<tr>
<td>首页一级菜单渲染（DB+模板）</td>
<td>50</td>
<td>465</td>
<td>182</td>
<td>296</td>
</tr>
<tr>
<td>三级分类数据获取（DB）</td>
<td>50</td>
<td>8</td>
<td>6866</td>
<td>8240</td>
</tr>
<tr>
<td>首页全量数据获取</td>
<td>50</td>
<td>84</td>
<td>2387</td>
<td>4171</td>
</tr>
<tr>
<td>Nginx+Gateway</td>
<td>50</td>
<td>2201</td>
<td>29</td>
<td>48</td>
</tr>
<tr>
<td>Gateway+简单服务</td>
<td>50</td>
<td>1860</td>
<td>53</td>
<td>164</td>
</tr>
<tr>
<td>全链路</td>
<td>50</td>
<td>1809</td>
<td>58</td>
<td>172</td>
</tr>
</tbody>
</table>
<p>优化后</p>
<table>
<thead>
<tr>
<th>压测内容</th>
<th>压测线程数</th>
<th>吞吐量/s</th>
<th>90%响应时间</th>
<th>99%响应时间</th>
</tr>
</thead>
<tbody>
<tr>
<td>首页一级菜单渲染（加索引、该日志级别、加模板缓存）</td>
<td>50</td>
<td>1638</td>
<td>54</td>
<td>102</td>
</tr>
<tr>
<td>三级分类数据获取（加索引，改日志级别）</td>
<td>50</td>
<td>16</td>
<td>4347</td>
<td>4968</td>
</tr>
<tr>
<td>首页全量数据获取（加索引、该日志级别、加模板缓存、动静分离）</td>
<td>50</td>
<td>80</td>
<td>90</td>
<td>8316</td>
</tr>
<tr>
<td>三级分类数据获取（加索引，改日志级别、业务逻辑优化）</td>
<td>50</td>
<td>137</td>
<td>622</td>
<td>993</td>
</tr>
<tr>
<td>三级分类数据获取（加索引，改日志级别、业务逻辑优化、Redis缓存）</td>
<td>50</td>
<td>603</td>
<td>210</td>
<td>384</td>
</tr>
</tbody>
</table>
<p>由上表总结：</p>
<ul>
<li>中间件越多，性能消耗越大，大多都损失在了网络交互上</li>
<li>适当的增加 Xms 、Xmx 可以提升吞吐量</li>
<li>对于一个接口，做性能与压力测试是必要的，很多时候请求量小并不能反映出问题。在测试的时候，需要结合上面两个测试工具一起对堆内存区进行分析，根据压测情况适当增加或减少堆内存大小。其次，业务逻辑对于读多写少的场景，能加缓存尽量加缓存。最后，SQL 语句也需要不断优化，根据数据量来考虑是否增加索引</li>
</ul>
<h3 id="压力测试" tabindex="-1"><a class="header-anchor" href="#压力测试"><span>压力测试</span></a></h3>
<p><strong>常用的性能指标</strong></p>
<ul>
<li>
<p>HPS：每秒点击次数</p>
</li>
<li>
<p>TPS：系统每秒处理交易数</p>
</li>
<li>
<p>QPS：系统每秒处理查询次数</p>
<p>对于互联网业务中，如果某些业务有且仅有一个请求连接，那么TPS = QPS = HPS，一 般情况下用 TPS 来衡量整个业务流程，用 QPS 来衡量接口查询次数，用 HPS 来表 示对服务器单击请求</p>
</li>
<li>
<p>吞吐量：每秒钟系统能够处理的请求数、任务数</p>
</li>
<li>
<p>响应时间：服务处理一个请求或一个任务的耗时</p>
</li>
<li>
<p>错误率：一批请求中结果出错的请求所占比例</p>
</li>
</ul>
<p><strong>Jmeter 地址问题</strong></p>
<p>Jmeter 持续使用一段时间后会报错</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span>BindException</span><span class="token operator">:</span> <span class="token class-name">Address</span> already in use<span class="token operator">:</span> connect</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解决办法：</p>
<ul>
<li>cmd 中用 <code v-pre>regedit</code> 命令打开注册表</li>
<li>在 <code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters</code> 下：
<ul>
<li>右击 <code v-pre>parameters</code>，添加一个新的 <code v-pre>DWORD</code>，名字为 <code v-pre>MaxUserPort</code></li>
<li>然后双击 <code v-pre>MaxUserPort</code>，输入数值数据为65534，基数选择十进制</li>
</ul>
</li>
</ul>
<h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存"><span>缓存</span></a></h2>
<h3 id="缓存穿透、缓存击穿和缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存穿透、缓存击穿和缓存雪崩"><span>缓存穿透、缓存击穿和缓存雪崩</span></a></h3>
<p>这块内容笔记单独整理成一篇笔记：<a href="黑马点评.html">点击跳转</a></p>
<h3 id="redis分布式锁实现" tabindex="-1"><a class="header-anchor" href="#redis分布式锁实现"><span>Redis分布式锁实现</span></a></h3>
<p>这块内容笔记单独整理成一篇笔记：<a href="../java/单机版Redis分布式锁.html">点击跳转</a></p>
<h3 id="redission分布式锁入门" tabindex="-1"><a class="header-anchor" href="#redission分布式锁入门"><span>Redission分布式锁入门</span></a></h3>
<h4 id="看门狗机制" tabindex="-1"><a class="header-anchor" href="#看门狗机制"><span>看门狗机制</span></a></h4>
<p>作用：对使用 <code v-pre>lock</code> 方法的锁进行自动续期</p>
<p>Redission 的 <code v-pre>lock</code> 方法源代码中，若是没有传入值，就会创建一个定时任务，定时任务的默认时间是10s（看门狗的有效时间是30s，30 / 3 = 10），每10s会更新有效期。具体代码如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">renewExpiration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ExpirationEntry</span> ee <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ExpirationEntry</span><span class="token punctuation">)</span><span class="token constant">EXPIRATION_RENEWAL_MAP</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEntryName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>ee <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Timeout</span> task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commandExecutor<span class="token punctuation">.</span><span class="token function">getConnectionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newTimeout</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Timeout</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">ExpirationEntry</span> ent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ExpirationEntry</span><span class="token punctuation">)</span><span class="token class-name">RedissonLock</span><span class="token punctuation">.</span><span class="token constant">EXPIRATION_RENEWAL_MAP</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">RedissonLock</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEntryName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>ent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">Long</span> threadId <span class="token operator">=</span> ent<span class="token punctuation">.</span><span class="token function">getFirstThreadId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>threadId <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token class-name">RFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">RedissonLock</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renewExpirationAsync</span><span class="token punctuation">(</span>threadId<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置有效期</span></span>
<span class="line">                        future<span class="token punctuation">.</span><span class="token function">onComplete</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token class-name">RedissonLock</span><span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Can't update lock "</span> <span class="token operator">+</span> <span class="token class-name">RedissonLock</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" expiration"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token class-name">RedissonLock</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renewExpiration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>internalLockLeaseTime <span class="token operator">/</span> <span class="token number">3L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// internalLockLeaseTime默认是30s</span></span>
<span class="line">        ee<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读写锁" tabindex="-1"><a class="header-anchor" href="#读写锁"><span>读写锁</span></a></h4>
<p>读锁：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">ReadWriteLock</span> lock <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getReadWriteLock</span><span class="token punctuation">(</span><span class="token string">"test-wr-lock"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Lock</span> readLock <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>写锁：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">ReadWriteLock</span> lock <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getReadWriteLock</span><span class="token punctuation">(</span><span class="token string">"test-wr-lock"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Lock</span> writeLock <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：</p>
<ul>
<li>读-读：共享</li>
<li>读-写：互斥</li>
<li>写-写：互斥</li>
<li>写-读：互斥</li>
</ul>
<h4 id="信号量" tabindex="-1"><a class="header-anchor" href="#信号量"><span>信号量</span></a></h4>
<p>获取一个信号量：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">RSemaphore</span> semaphore <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getSemaphore</span><span class="token punctuation">(</span><span class="token string">"test-semaphore"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">semaphore<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 若获取不到就陷入阻塞</span></span>
<span class="line"><span class="token comment">// boolean b = semaphore.tryAcquire(); // 若获取不到就直接返回结果</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>释放一个信号量：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">RSemaphore</span> semaphore <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getSemaphore</span><span class="token punctuation">(</span><span class="token string">"test-semaphore"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">semaphore<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景：</p>
<ul>
<li>分布式限流</li>
</ul>
<h4 id="闭锁" tabindex="-1"><a class="header-anchor" href="#闭锁"><span>闭锁</span></a></h4>
<p>类似 <code v-pre>CountDownLatch</code>，要等锁全部释放才能继续执行，可以用信号量实现</p>
<h3 id="缓存一致性" tabindex="-1"><a class="header-anchor" href="#缓存一致性"><span>缓存一致性</span></a></h3>
<h4 id="双写模式" tabindex="-1"><a class="header-anchor" href="#双写模式"><span>双写模式</span></a></h4>
<p>在修改完数据库后，立刻取修改缓存，能够保证强一致性</p>
<p>缺点：高并发下容易出现脏数据，如下如所示：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-08-12_19-47-57.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-08-12_19-47-57.png"></p>
<h4 id="失效模式" tabindex="-1"><a class="header-anchor" href="#失效模式"><span>失效模式</span></a></h4>
<ul>
<li>
<p>方案一：修改完数据库后，删除缓存</p>
<p>缺点：高并发下容易出现脏数据，如下图所示：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-08-12_19-52-44.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-08-12_19-52-44.png"></p>
</li>
<li>
<p>方案二：删除完缓存后，修改数据库</p>
<p>缺点：容易出现脏数据</p>
<p>线程 A 删完缓存后，线程 B 来查询缓存，此时不存在，就去查询数据库，加入缓存。然后线程 A 才更数据库，缓存中已存放了更新之前的值</p>
</li>
</ul>
<p><strong>方案一解决方案</strong>：</p>
<p>Cancal 订阅 MySQL binlog 日志</p>
<p>原理：数据库表更新字段信息后会写入 binlog 日志，用 Cancal 去监听 binlog，发送 MQ 来删除对应数据缓存</p>
<p><strong>方案二解决方案</strong></p>
<p>延时双删</p>
<p>再删除完缓存，修改完数据库后，延时一段时间（时间大于读数据 + 写缓存，一般为3~5秒），再去删除缓存。在删除缓存但未修改数据库期间，其他线程查询数据库向缓存中加入了旧数据，N 秒后会再次被删除</p>
<h3 id="springcache" tabindex="-1"><a class="header-anchor" href="#springcache"><span>SpringCache</span></a></h3>
<h4 id="四种注解" tabindex="-1"><a class="header-anchor" href="#四种注解"><span>四种注解</span></a></h4>
<p>SpringCache 有四种注解如下：</p>
<ul>
<li>
<p>@Cacheable：缓存方法返回的数据，key 这里设置的是方法名（也可以设置为方法的某一个参数，更具有灵活性），value 用于分组</p>
<p>用法：<code v-pre>@Cacheable(value = &quot;categoryCache&quot;, key=&quot;#root.method.name&quot;)</code></p>
</li>
<li>
<p>@CachePut：更新缓存为方法返回的数据</p>
<p>用法：<code v-pre>@CachePut(value = &quot;categoryCache&quot;, key=&quot;'getCache'&quot;)</code></p>
</li>
<li>
<p>@CacheEvict：删除缓存</p>
<p>用法：<code v-pre>@CacheEvict(value = &quot;categoryCache&quot;, key=&quot;'getCategoryListWithSpringCache'&quot;)</code></p>
</li>
<li>
<p>@Caching：组合操作</p>
<p>用法：进行多个缓存删除</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Caching</span><span class="token punctuation">(</span>evict <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"categoryCache"</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">"'getCategoryListWithSpringCache'"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"categoryCache"</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">"'getCache'"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 上面的多次删除的注解等同于下面，删除同一种 value 的所有缓存</span></span>
<span class="line"><span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"categoryCache"</span><span class="token punctuation">,</span> allEntries <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="自定义缓存配置" tabindex="-1"><a class="header-anchor" href="#自定义缓存配置"><span>自定义缓存配置</span></a></h4>
<p>这里以 Redis 缓存为例，参考 <code v-pre>autoconfigure/cache/RedisCacheConfiguration</code> 的 <code v-pre>determineConfiguration</code> 方法的配置，自定义缓存的过期时间、缓存前缀和缓存序列化方式等</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@EnableCaching</span></span>
<span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">CacheProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCacheConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">RedisCacheConfiguration</span> <span class="token function">redisCacheConfiguration</span><span class="token punctuation">(</span><span class="token class-name">CacheProperties</span> cacheProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">RedisCacheConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">.</span><span class="token function">defaultCacheConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        config<span class="token punctuation">.</span><span class="token function">serializeKeysWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        config<span class="token punctuation">.</span><span class="token function">serializeValuesWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">CacheProperties<span class="token punctuation">.</span>Redis</span> redisProperties <span class="token operator">=</span> cacheProperties<span class="token punctuation">.</span><span class="token function">getRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>redisProperties<span class="token punctuation">.</span><span class="token function">getTimeToLive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            config <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">entryTtl</span><span class="token punctuation">(</span>redisProperties<span class="token punctuation">.</span><span class="token function">getTimeToLive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>redisProperties<span class="token punctuation">.</span><span class="token function">getKeyPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            config <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">prefixKeysWith</span><span class="token punctuation">(</span>redisProperties<span class="token punctuation">.</span><span class="token function">getKeyPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>redisProperties<span class="token punctuation">.</span><span class="token function">isCacheNullValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            config <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">disableCachingNullValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>redisProperties<span class="token punctuation">.</span><span class="token function">isUseKeyPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            config <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">disableKeyPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> config<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h4>
<p>SpringCache 适用于读多写少、一致性要求不高的场景</p>
<p>对于缓存三剑客问题：</p>
<ul>
<li>
<p>缓存穿透：加配置 <code v-pre>spring.cache.redis.cache-null-values=true</code>解决</p>
</li>
<li>
<p>缓存击穿：单机模式上注解加 <code v-pre>@Cacheable(value = &quot;categoryCache&quot;, key=&quot;#root.method.name&quot;, sync = true)</code> 可以解决，本质上使用 synchronized 来锁住获取方法，源码如下，但分布式下无法解决</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> valueLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Cache<span class="token punctuation">.</span>ValueWrapper</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">T</span> value <span class="token operator">=</span> <span class="token function">valueFromLoader</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> valueLoader<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>缓存雪崩问题：加随机的过期时间，还需要特殊化定制</p>
</li>
</ul>
<h2 id="thymeleaf" tabindex="-1"><a class="header-anchor" href="#thymeleaf"><span>Thymeleaf</span></a></h2>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h3>
<ul>
<li>th:each：遍历元素</li>
<li>th:attr：设置属性（比如新设置一个变量并赋值、自定义样式等）</li>
<li>th:value：设置值（比如输入框）</li>
<li>th:text：设置显示内容</li>
<li>th:utext：设置显示内容（带有 html 格式）</li>
<li>th:with：局部变量声明</li>
</ul>
<p>项目具体使用见 gulimall-search 模块下的 list.html 文件</p>
<h3 id="页面静态化过程" tabindex="-1"><a class="header-anchor" href="#页面静态化过程"><span>页面静态化过程</span></a></h3>
<p>1、先在 <code v-pre>resources/tempaltes/list.html</code> 中配置页面模块</p>
<p>2、css、js 等静态文件放在 nginx 文件夹中，list.html 文件中的静态资源引用改为 nginx 下的相对路径</p>
<p>3、添加 host 文件域名配置</p>
<p>4、添加网关转发</p>
<p>5、配置 nginx 路由转发</p>
<p>请求一进来，参考 <strong>Nginx 搭建中的项目全链路流程</strong></p>
<h3 id="model和redirectattributes" tabindex="-1"><a class="header-anchor" href="#model和redirectattributes"><span>Model和RedirectAttributes</span></a></h3>
<p>Model 在重定向的时候会丢失数据，原因：请求302重定向后重新调用请求后数据会丢失</p>
<p>RedirectAttributes 在重定向的时候不会丢失数据，原因：RedirectAttributes 会将数据暂存到 session，然后请求302重定向后重新调用请求从 session 获取数据</p>
<p>具体代码见：<code v-pre>gulimall-auth</code> 模块下的 <code v-pre>LoginController</code> 文件里的 <code v-pre>register</code> 方法</p>
<h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程"><span>线程</span></a></h2>
<h3 id="threadpoolexecutor-线程池" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-线程池"><span>ThreadPoolExecutor 线程池</span></a></h3>
<p>这块内容笔记单独整理成一篇笔记：<a href="../java/ThreadPoolExecutor源码解读.html">点击跳转</a></p>
<h3 id="completablefuture-异步编排" tabindex="-1"><a class="header-anchor" href="#completablefuture-异步编排"><span>CompletableFuture 异步编排</span></a></h3>
<p>1、无返回值</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无返回结果"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、有返回值</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有返回结果"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、完成时回调</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有返回结果"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">whenComplete</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> exception<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"休眠结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 异步处理</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有返回结果"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">whenCompleteAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> exception<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"休眠结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、数据转换（类似于 stream 流的 map）</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">thenApply</span><span class="token punctuation">(</span>result <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"转换前: "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">"结果是: "</span> <span class="token operator">+</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、 合并两个结果</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future1 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future2 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> combined <span class="token operator">=</span> future1<span class="token punctuation">.</span><span class="token function">thenCombine</span><span class="token punctuation">(</span>future2<span class="token punctuation">,</span> <span class="token punctuation">(</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结果1: "</span> <span class="token operator">+</span> result1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 结果1: 10</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结果2: "</span> <span class="token operator">+</span> result2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 结果2: 20</span></span>
<span class="line">    <span class="token keyword">return</span> result1 <span class="token operator">+</span> result2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>combined<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 30</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、处理异常</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有返回结果"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exceptionally</span><span class="token punctuation">(</span>throwable <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"异常"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、第3点和第6点结合，在完成后处理，也能处理异常，必须要有返回值</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有返回结果"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"异常："</span> <span class="token operator">+</span> error<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、A、B 两个线程，A 执行完后在执行 B</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token comment">// 不需要A返回值</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenRun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 需要A返回值</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenAccept</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二，任务一返回值："</span> <span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 处理A返回值</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenApply</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二，任务一返回值："</span> <span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">"新结果，"</span> <span class="token operator">+</span> res<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、A、B 两个线程，在两个线程同时执行完后执行 C</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token comment">// A、B有返回值</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f1 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f2 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">f1<span class="token punctuation">.</span><span class="token function">thenAcceptBoth</span><span class="token punctuation">(</span>f2<span class="token punctuation">,</span> <span class="token punctuation">(</span>r1<span class="token punctuation">,</span> r2<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一结果："</span> <span class="token operator">+</span> r1 <span class="token operator">+</span> <span class="token string">"，任务二结果："</span> <span class="token operator">+</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// A、B无返回值</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> ff1 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> ff2 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ff1<span class="token punctuation">.</span><span class="token function">runAfterBoth</span><span class="token punctuation">(</span>ff2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一和任务二完成"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10、A、B 两个线程，在两个线程只要其中一个执行完后执行 C</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f1 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f2 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 无需返回值</span></span>
<span class="line">f1<span class="token punctuation">.</span><span class="token function">runAfterEither</span><span class="token punctuation">(</span>f2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一或者任二其中一个处理完成"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 有返回值</span></span>
<span class="line">f1<span class="token punctuation">.</span><span class="token function">acceptEither</span><span class="token punctuation">(</span>f2<span class="token punctuation">,</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一或者任二其中一个处理完成，处理结果："</span> <span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// res输出1</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 处理为新结果</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> f1<span class="token punctuation">.</span><span class="token function">applyToEither</span><span class="token punctuation">(</span>f2<span class="token punctuation">,</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一或者任二其中一个处理完成，处理结果："</span> <span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// res输出1</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">"新结果"</span> <span class="token operator">+</span> res<span class="token punctuation">;</span> <span class="token comment">// 输出 新结果1</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12、A、B、C 三个线程同时执行完、或者只有一个执行才继续执行</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f1 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f2 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> f3 <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 三个任务都执行完</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">allOf</span><span class="token punctuation">(</span>f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 三个任务其中一个执行完</span></span>
<span class="line"><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">anyOf</span><span class="token punctuation">(</span>f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"所有任务都执行完成"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用场景</strong></p>
<p>项目中在查询商品详情使用了异步编排，具体见 <code v-pre>gulimall-product</code> 模块下的 <code v-pre>ItemController</code> 代码文件</p>
<h2 id="github-第三方登录" tabindex="-1"><a class="header-anchor" href="#github-第三方登录"><span>Github 第三方登录</span></a></h2>
<p>第三方登录流程图：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-02_21-25-13.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-02_21-25-13.png"></p>
<p>在 Github 中，新增一个自己的 OAuth2 APP，地址：<a href="https://github.com/settings/applications" target="_blank" rel="noopener noreferrer">Authorized OAuth Apps</a>，获取到 client id 和 client secret</p>
<p>调用步骤</p>
<ul>
<li>
<p>调用 <code v-pre>https://github.com/login/oauth/authorize?client_id=Ov23liZptJL6EpzSBc1g&amp;redirect_uri=http://auth.gulimall.com/oauth2/github/callback&amp;state=123Xdad&amp;scope=userC3d12</code> GET请求，等用户授权后，会自动调用回调地址</p>
</li>
<li>
<p>调用 <code v-pre>https://github.com/login/oauth/access_token</code> POST 请求，传入以下格式的 json 数据获取 access_token</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">buildAccessTokenMap</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> reqMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    reqMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    reqMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"redirect_uri"</span><span class="token punctuation">,</span> githubCallback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    reqMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"client_id"</span><span class="token punctuation">,</span> githubClientId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    reqMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"client_secret"</span><span class="token punctuation">,</span> githubClientSecret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> reqMap<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>调用 <code v-pre>https://api.github.com/user</code> GET 请求，请求头带上 <code v-pre>Authorization: token xxxxx</code>，来获取用户信息</p>
</li>
<li>
<p>注意：请求头均为 JSON 格式 <code v-pre>Accept: application/json</code></p>
</li>
</ul>
<h2 id="session-共享问题" tabindex="-1"><a class="header-anchor" href="#session-共享问题"><span>Session 共享问题</span></a></h2>
<p>登录成功后，将用户信息存在 session 中，但是因为 session 本质上是一个本地的 map，存在以下问题：</p>
<ul>
<li>相同服务，不同实例之间无法共享</li>
<li>不同服务之前无法共享</li>
</ul>
<p>登陆后需要将 <code v-pre>JESSSION</code> 信息返回给浏览器，浏览器存放在 cookie，下一次带着 cookie 就能够知道用户的身份</p>
<p>相同服务，不同实例之间无法共享，有以下方法：</p>
<h3 id="不同实例无法共享解决办法" tabindex="-1"><a class="header-anchor" href="#不同实例无法共享解决办法"><span>不同实例无法共享解决办法</span></a></h3>
<h4 id="session-复制" tabindex="-1"><a class="header-anchor" href="#session-复制"><span>Session 复制</span></a></h4>
<p>原理：多个 tomcat 之间采用同步方法来保证每个 tomcat 的 session 一致</p>
<p>优点：tomcat 原生支持，操作简单只需要修改配置文件</p>
<p>缺点：</p>
<ul>
<li>同步需要占用网络带宽，会降低业务的处理能力</li>
<li>若一个台 tomcat session 内存有 1g，那么 100 台内存需要 100g。可以水平拓展，但受到内存限制</li>
</ul>
<h4 id="客服端存储" tabindex="-1"><a class="header-anchor" href="#客服端存储"><span>客服端存储</span></a></h4>
<p>原理：将保存用户信息的 session 存在 cookie 中返回前端</p>
<p>优点：简单</p>
<p>缺点：</p>
<ul>
<li>不安全，存在用户信息篡改等问题</li>
<li>若用户信息很多，传输需要占用网络带宽，并且受到 cookie 最大长度限制，最多只能 4k</li>
</ul>
<p>不采用此方法</p>
<h4 id="hash-一致性" tabindex="-1"><a class="header-anchor" href="#hash-一致性"><span>hash 一致性</span></a></h4>
<p>原理：每个用户 IP 或者业务字段 ID 计算 hash 值，然后模当前的实例数量，算出从哪一个实例中获取用户下信息</p>
<p>优点：</p>
<ul>
<li>简单只需要修改 nginx 配置</li>
<li>支持水平拓展</li>
</ul>
<h4 id="redis-统一存储" tabindex="-1"><a class="header-anchor" href="#redis-统一存储"><span>Redis 统一存储</span></a></h4>
<p>原理：将序列化的 session 信息保存在 Redis 中</p>
<p>优点：</p>
<ul>
<li>重启无需担心数据丢失</li>
<li>支持水平拓展</li>
</ul>
<p>缺点：查询数据增加一次网络调用</p>
<p><strong>本次采用此方法</strong></p>
<p>添加 SpringSession 依赖，无需改动之前的对 session 操作代码，具体见 <code v-pre>gulimall-auth</code> 模块下的 <code v-pre>OAuth2Controller</code> 类</p>
<p>将 JDK 序列化器更换为 Json 序列化配置</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Bean</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">springSessionDefaultRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Redis 自动续期</strong></p>
<p>页面上每一次操作都会自动刷新 Redis 中 session 的有效期</p>
<h3 id="不同服务无法共享解决办法" tabindex="-1"><a class="header-anchor" href="#不同服务无法共享解决办法"><span>不同服务无法共享解决办法</span></a></h3>
<p>将 cookie 作用域设置为父域名：gulimall.com 即可</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Bean</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">CookieSerializer</span> <span class="token function">cookieSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">DefaultCookieSerializer</span> defaultCookieSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultCookieSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 使用父域名，解决不同服务session不共享的问题</span></span>
<span class="line">    defaultCookieSerializer<span class="token punctuation">.</span><span class="token function">setDomainName</span><span class="token punctuation">(</span><span class="token string">"gulimall.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    defaultCookieSerializer<span class="token punctuation">.</span><span class="token function">setCookieName</span><span class="token punctuation">(</span><span class="token string">"GULIMALLSESSION"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> defaultCookieSerializer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springsession-原理" tabindex="-1"><a class="header-anchor" href="#springsession-原理"><span>SpringSession 原理</span></a></h3>
<p>使用拦截器，将原有的 HttpSession 替换为包装的对 Redis 操作的 Session 对象，代码如下：</p>
<p><code v-pre>SessionRepositoryFilter</code> 类</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilterInternal</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">    request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">SESSION_REPOSITORY_ATTR</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sessionRepository<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">SessionRepositoryFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">></span></span><span class="token punctuation">.</span>SessionRepositoryRequestWrapper wrappedRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SessionRepositoryRequestWrapper</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>servletContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">SessionRepositoryFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">></span></span><span class="token punctuation">.</span>SessionRepositoryResponseWrapper wrappedResponse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SessionRepositoryResponseWrapper</span><span class="token punctuation">(</span>wrappedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 传递的是包装后的类</span></span>
<span class="line">        filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>wrappedRequest<span class="token punctuation">,</span> wrappedResponse<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">        wrappedRequest<span class="token punctuation">.</span><span class="token function">commitSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用到了装饰器设计模式</p>
<p>我们在获取 session 的时候，通过在方法参数中写入 <code v-pre>HttpSession session</code> 或者 <code v-pre>HttpServletRequest request</code> 的 <code v-pre>request.getSession()</code> ，这里获取到的就是已经包装后的 session，操作全是对 redis 进行的</p>
<h2 id="sso-单点登录" tabindex="-1"><a class="header-anchor" href="#sso-单点登录"><span>SSO 单点登录</span></a></h2>
<p>SSO 单点登录流程见这篇笔记：<a href="../java/SSO单点登录.html">点击跳转</a></p>
<p>项目中采用 session + cookie 的方式实现，具体代码见：<code v-pre>gulimall-test-sso-server</code>、<code v-pre>gulimall-test-sso-client1</code>  和 <code v-pre>gulimall-test-sso-client2</code> 模块</p>
<h2 id="redis-数据结构的使用" tabindex="-1"><a class="header-anchor" href="#redis-数据结构的使用"><span>Redis 数据结构的使用</span></a></h2>
<p>1、String 类型：session 信息</p>
<p>2、Hash 类型：购物车信息</p>
<h2 id="rabbitmq-消息队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq-消息队列"><span>RabbitMQ 消息队列</span></a></h2>
<p>RabbitMQ 消息队列学习笔记见：<a href="../mq/RabbitMQ学习笔记.html">点击跳转</a></p>
<h3 id="消息堆积、丢失和重复" tabindex="-1"><a class="header-anchor" href="#消息堆积、丢失和重复"><span>消息堆积、丢失和重复</span></a></h3>
<p>这部分应用场景是提交订单的时候用了延时队列，可能会出现以上的几种情况，解决办法见如下</p>
<p><strong>1、消息丢失</strong></p>
<ul>
<li>
<p>生产者发送消息因网络原因导致发送失败，可以加一个消息发送记录表来存放消息记录，做个定时任务扫描未发送成功状态的数据进行重试</p>
</li>
<li>
<p>消息到达 Broker，但在存放到队列中失败，可以在后端开启确认回调机制，对回调失败的进行重试，具体代码见 <code v-pre>gulimall-order</code> 模块的 config 文件夹下的 <code v-pre>GulimallMQConfig</code></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line">rabbitTemplate<span class="token punctuation">.</span><span class="token function">setConfirmCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>消息消费的时候出错，可以开启手动 ACK 机制</p>
</li>
</ul>
<p><strong>2、消息重复</strong></p>
<ul>
<li>添加消息处理记录表，对每一条处理成功的消息的 ID 的进行记录</li>
<li>查询的时候做幂等性处理，例如只查询出未处理的订单</li>
</ul>
<p><strong>3、消息堆积</strong></p>
<ul>
<li>消费者消费能力不行、生产者宕机或者某一瞬间发送的消息过多导致，可以添加消费者数量</li>
<li>还可以把队列的消息全部取出来存放数据库，让 MQ 能够正常消费数据，然后专门做一个服务处理存放在数据库的消息</li>
</ul>
<h2 id="openfeign-远程调用请求头失效" tabindex="-1"><a class="header-anchor" href="#openfeign-远程调用请求头失效"><span>OpenFeign 远程调用请求头失效</span></a></h2>
<p>订单模块（带有登录信息）远程调用购物车模块（无登录信息），没有带上登录信息，排查原因发现请求头中并未带上订单模块的 cookie 信息，源码分析如下：</p>
<p>SynchronousMethodHandler 类</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"> <span class="token class-name">Object</span> <span class="token function">executeAndDecode</span><span class="token punctuation">(</span><span class="token class-name">RequestTemplate</span> template<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token class-name">Request</span> request <span class="token operator">=</span> <span class="token function">targetRequest</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     logger<span class="token punctuation">.</span><span class="token function">logRequest</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token class-name">Response</span> response<span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token comment">// 执行调用</span></span>
<span class="line">     response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       logger<span class="token punctuation">.</span><span class="token function">logIOException</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token function">elapsedTime</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">     <span class="token keyword">throw</span> <span class="token function">errorExecuting</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token comment">// 省略</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>断点看出远程调用请求会封装成一个 RequestTemplate 对象，包含了请求路径、请求头等信息，template 是一个请求对象，有请求路径，但无请求头 cookie，所以请求过去就无用户信息</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-04_20-12-03.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-04_20-12-03.png"></p>
<p>图上所展示的是经过一些列拦截器列表操作对请求头进行拦截，发现此处并未拦截器，于是可以在此入手对请求头进行修改</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-04_20-11-18.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-04_20-11-18.png"></p>
<p>可以看出拦截器的赋值是有一个创建方法，于是可以创建一个 <code v-pre>RequestInterceptor</code> 的 bean 对象来进行注入，代码如下</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GulimallFeignConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">"requestInterceptor"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">RequestInterceptor</span> <span class="token function">requestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RequestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token annotation punctuation">@Override</span></span>
<span class="line">            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">RequestTemplate</span> template<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 拿到当前线程的请求头，本质上是一个ThreadLocal</span></span>
<span class="line">                <span class="token class-name">ServletRequestAttributes</span> requestAttributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token class-name">String</span> cookie <span class="token operator">=</span> requestAttributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"Cookie"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 放入cookie到template请求中</span></span>
<span class="line">                template<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">"Cookie"</span><span class="token punctuation">,</span> cookie<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终断点结果，可以看见已经成功赋值 cookie 信息</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-04_20-27-14.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-04_20-27-14.png"></p>
<p>代码见 <code v-pre>gulimall-order</code> 模块下 OrderWebController 的 toTrade 接口</p>
<h2 id="订单提交重复提交" tabindex="-1"><a class="header-anchor" href="#订单提交重复提交"><span>订单提交重复提交</span></a></h2>
<p>在并发下，为了防止重复订单，采用防重令牌机制</p>
<p>一进页面生成令牌，提交订单带上令牌：先校验令牌，在提交订单</p>
<p>校验令牌使用 Lua 脚本，先是查询出来，在做比较，若一致就删除，保证查询和删除是原子性操作，Lua 脚本如下：</p>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code><span class="line"><span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span> <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">'del'</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token number">0</span> <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>代码见 <code v-pre>gulimall-order</code> 模块下 <code v-pre>OrderServiceImpl</code> 下的 <code v-pre>submitOrder</code> 方法</p>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2>
<h3 id="本地事务" tabindex="-1"><a class="header-anchor" href="#本地事务"><span>本地事务</span></a></h3>
<p>注意以下几点：</p>
<ul>
<li>事务异常传播</li>
<li>都需要走代理对象</li>
</ul>
<p>案例一：生效</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>  <span class="token comment">// 事务A开始</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"222"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 在事务A中</span></span>
<span class="line">    <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 自调用，test1的@Transactional不生效，仍在事务A中</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"333"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 在事务A中（但不会执行到）</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>  <span class="token comment">// 这个注解被忽略！</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"111"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 在事务A中</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 异常抛出到save()方法</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 事务A回滚 - 所有操作(id=2, id=1)都回滚</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例二：生效</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"222"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"333"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 无论是 private 还是 public 都生效</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"111"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例二：不生效</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"222"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"333"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    orderDao<span class="token punctuation">.</span><span class="token function">saveTest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"111"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多事务失效情况见文章：<a href="https://blog.csdn.net/hanjiaqian/article/details/120501741" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/hanjiaqian/article/details/120501741</a></p>
<h3 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务"><span>分布式事务</span></a></h3>
<p>不同服务之间，因某一个或多个服务出现问题（网络等原因），需要这链路上的所有服务都要进行回滚，要么全部成功，要么全部失败</p>
<p>分布式事务分为两种：</p>
<ul>
<li>
<p>刚性事务：遵循 ACID 原则，强一致性</p>
</li>
<li>
<p>柔性事务：遵循 BASE 理论，最终一致性</p>
</li>
</ul>
<p>分布式事务实现四种方案如下</p>
<h4 id="_2pc-模式-刚性事务" tabindex="-1"><a class="header-anchor" href="#_2pc-模式-刚性事务"><span>2PC 模式（刚性事务）</span></a></h4>
<p>2PC 又叫 XA Transactions，是一个两阶段提交协议</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-16_13-38-38.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-16_13-38-38.png"></p>
<p>第一阶段：事务协调器要求每个涉及到事务的数据库预提交此操作，并反映是 否可以提交</p>
<p>第二阶段：事务协调器要求每个数据库提交数据</p>
<p>其中，如果有任何一个数据库否决此次提交，那么所有数据库都会被要求回滚它们在此事务 中的那部分信息</p>
<p>优点：</p>
<ul>
<li>XA 协议实现简单，一旦商业数据库实现了 XA 协议，使用分布式事务的成本也比较低。</li>
</ul>
<p>缺点：</p>
<ul>
<li><strong>性能不理想</strong>，特别是在交易下单链路，往往并发量很高，XA 无法满足高并发场景</li>
<li>目前在商业数据库支持的比较理想，在 MySQL 数据库中支持的不太理想（MySQL 的 XA 实现，没有记录预提交阶段日志，主备切换回导致主库与备库数据不一致）</li>
</ul>
<p>3PC 模式是将 2PC 模式的第一阶段分成了两个阶段：先是询问是否能够提交，然后才是准备数据预提交</p>
<h4 id="tcc-事务补偿型方案-柔性事务" tabindex="-1"><a class="header-anchor" href="#tcc-事务补偿型方案-柔性事务"><span>TCC 事务补偿型方案（柔性事务）</span></a></h4>
<p>TCC 模式：把自定义的分支事务纳入到全局事务管理中</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-16_13-52-19.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-16_13-52-19.png"></p>
<p>一阶段 prepare 行为：调用自定义的 prepare 逻辑</p>
<p>二阶段 commit 行为：调用自定义的 commit 逻辑</p>
<p>三阶段 rollback 行为：调用自定义的 rollback 逻辑</p>
<blockquote>
<p>说白了 TCC 事务补偿就是 3PC 的手动版</p>
</blockquote>
<h4 id="最大努力通知型方案-柔性事务" tabindex="-1"><a class="header-anchor" href="#最大努力通知型方案-柔性事务"><span>最大努力通知型方案（柔性事务）</span></a></h4>
<p>对服务进行通知，但不一定能够保证通知成功，但会提供可查询操作接口进行核对</p>
<p>例如支付宝支付成功回调接口就是一种最大努力通知型</p>
<h4 id="可靠消息-最终一致性方案-异步确保型" tabindex="-1"><a class="header-anchor" href="#可靠消息-最终一致性方案-异步确保型"><span>可靠消息 + 最终一致性方案（异步确保型）</span></a></h4>
<p>服务在发生错误的时候回向 MQ 发送消息，然后服务就从 MQ 中收到这些消息，进行回滚</p>
<h3 id="cap-定理" tabindex="-1"><a class="header-anchor" href="#cap-定理"><span>CAP 定理</span></a></h3>
<ul>
<li>
<p><strong>一致性</strong>（Consistency）</p>
<p>分布式事务一致性的三个概念：</p>
<ul>
<li>强一致性：必须保证任何时刻都是一致的</li>
<li>弱一致性：允许出现部分不一致</li>
<li>最终一致性：数据在一段时间后，最终保证一致</li>
</ul>
</li>
<li>
<p><strong>可用性</strong>（Availability）</p>
</li>
<li>
<p><strong>分区容错性</strong>（Partition tolerance）：大多数分布式系统都分布在多个子网络。每个子网络就叫做一个区（partition）。 分区容错的意思是，区间通信可能失败。比如，一台服务器放在中国，另一台服务 器放在美国，这就是两个区，它们之间可能无法通信。</p>
</li>
</ul>
<p>分布式系统一般组合是 CP 或 AP，分区容错性是必须要要有的，一致性和可用性无法同时拥有，所以也就是<strong>无法三者兼顾</strong></p>
<p><strong>Raft 算法</strong></p>
<p>// todo 待补充</p>
<h3 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论"><span>BASE 理论</span></a></h3>
<p>BASE 理论是对 CAP 定理的延伸，思想是无法做到强一致性，就允许弱一致性，但最终要达到<strong>最终一致性</strong></p>
<p>BASE 是指：</p>
<ul>
<li>
<p><strong>基本可用</strong>（BasicallyAvailable）：允许出现损失部分功能可用性（响应时间、功能等），但要保证总体可用</p>
<p>例如：购物网站在双十一时，为了保护系统的稳定性， 部分消费者可能会被引导到一个降级页面</p>
</li>
<li>
<p><strong>软状态</strong>（ SoftState）：允许系统存在中间状态，而该中间状态不会影响系统整体可用性。分布式存储中一般一份数据会有多个副本，允许不同副本同步的延时就是软状态的体 现</p>
<p>例如：一个状态有成功和失败两种状态，现在加一个中间状态正在进行中，这就是软状态</p>
</li>
<li>
<p><strong>最终一致性</strong>（ EventualConsistency）：系统中的数据经过一段时间后数据是一致的</p>
</li>
</ul>
<h2 id="延时队列" tabindex="-1"><a class="header-anchor" href="#延时队列"><span>延时队列</span></a></h2>
<p>也叫死信队列，本项目在订单对库存进行锁定的时候回发送一条消息到转换机到死信队列，过一段时间再将这个消息发送到转换机转发到普通队列</p>
<p>相关概念：</p>
<ul>
<li>TTL：消息的存活时间，消息一段时间未被消费就是死信消息</li>
<li>DLX：死信交换机</li>
</ul>
<p>实现方式有两种，分别如下：</p>
<h3 id="基于消息过期时间" tabindex="-1"><a class="header-anchor" href="#基于消息过期时间"><span>基于消息过期时间</span></a></h3>
<p>流程图如下：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-17_21-40-52.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-17_21-40-52.png"></p>
<h3 id="基于延时队列过期时间" tabindex="-1"><a class="header-anchor" href="#基于延时队列过期时间"><span>基于延时队列过期时间</span></a></h3>
<p>流程图如下：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-17_21-38-56.png" alt="https://gitee.com/lijunxi666/picture-bed/raw/master/gulimall/Snipaste_2025-11-17_21-38-56.png"></p>
<p>本项目采用此方案，原因：基于消息过期时间是惰性检查机制，若有三条消息分别ABC，过期时间分别为5、2、1分钟，因为第一条消息的过期时间是5分钟，所以只有当5分钟后才会进行过期检查一次，然后才会将第一条回收，接着对比第二条发现也过期了就也回收，同理第三条也过期也回收，弊端就是BC消息无需等5分钟回收</p>
<h2 id="支付宝支付回调" tabindex="-1"><a class="header-anchor" href="#支付宝支付回调"><span>支付宝支付回调</span></a></h2>
<p>支付宝沙箱地址：<a href="https://openhome.alipay.com/develop/sandbox/account" target="_blank" rel="noopener noreferrer">https://openhome.alipay.com/develop/sandbox/account</a></p>
<p>代码见 <code v-pre>gulimall-order</code> 模块下的 <code v-pre>AliPayConfig</code> 类文件</p>
<h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3>
<p>1、在支付宝支付页面长时间不支付，订单都过期了，然后才支付也支付成功</p>
<ul>
<li>设置支付宝支付超时时间 <code v-pre>timeout_express</code></li>
<li>在订单过期消费的时候，调用支付宝的自动关单</li>
</ul>
<p>2、因网络问题，导致支付回调没收到，页面上一直显示未支付，导致用户多次发送支付请求</p>
<ul>
<li>回调做接口好幂等性校验</li>
<li>查询订单列表的时候对于未支付订单，需要多一次调用支付宝接口来获取真实的支付状态</li>
<li>对账：每天晚上定时任务去读取今天的所有支付记录，然后对重复的支付进行退款处理。或者设计一个人工退款的入口手动退款</li>
</ul>
<h2 id="秒杀" tabindex="-1"><a class="header-anchor" href="#秒杀"><span>秒杀</span></a></h2>
<h3 id="商品上架预热" tabindex="-1"><a class="header-anchor" href="#商品上架预热"><span>商品上架预热</span></a></h3>
<p>做个定时任务，在秒杀开始前一天晚上进行执行，对秒杀的商品进行预热</p>
<h4 id="幂等性校验" tabindex="-1"><a class="header-anchor" href="#幂等性校验"><span>幂等性校验</span></a></h4>
<p>采用分布式锁来处理多服务下的定时任务在同一时间执行的并发问题，并且对重复缓存进行了校验，若已存在缓存，就不会执行</p>
<p>代码见 <code v-pre>order-seckill</code> 模块下的 SeckillTask 定时任务</p>
<h3 id="下单秒杀" tabindex="-1"><a class="header-anchor" href="#下单秒杀"><span>下单秒杀</span></a></h3>
<p>秒杀后处理方式有两种</p>
<ul>
<li>秒杀成后放入购物车，然后和常规的商品一样从购物车下单，这种是将流量分散到各个服务，万一购物车服务接受不了这么大的流量就 G 了</li>
<li>秒杀后直接快速创建订单</li>
</ul>
<p>考虑的点：</p>
<ul>
<li>多服务部署、单一职责，避免一个服务挂了出现整个系统不可用的情况</li>
<li>动静分离，CDN 网络分担集群压力</li>
<li>秒杀接口加密</li>
<li>前端限流 + Nginx 限流 + 后端限流</li>
<li>商品信息和库存提前预热</li>
<li>恶意高频请求拦截</li>
<li>消息队列创建订单信息进行削峰</li>
<li>服务之前做好熔断和降级</li>
<li>前端秒杀前加入验证码，将大流量分散为各个小流量</li>
</ul>
<h2 id="限流、熔断和降级" tabindex="-1"><a class="header-anchor" href="#限流、熔断和降级"><span>限流、熔断和降级</span></a></h2>
<p>配置信息：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">transport</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># sentinel启动的地址</span></span>
<span class="line">        <span class="token key atrule">dashboard</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8333</span></span>
<span class="line">        <span class="token comment"># 传输通信地址</span></span>
<span class="line">        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8719</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties"><pre v-pre><code><span class="line"><span class="token comment"># sentinel监控地址</span></span>
<span class="line"><span class="token key attr-name">management.endpoints.web.exposure.exclude</span><span class="token punctuation">=</span><span class="token value attr-value">*</span></span>
<span class="line"><span class="token comment"># sentinel链路监控</span></span>
<span class="line"><span class="token key attr-name">feign.sentinel.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义错误返回错误信息：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GulimallSentinelConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 自定义错误响应</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">GulimallSentinelConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">WebCallbackManager</span><span class="token punctuation">.</span><span class="token function">setUrlBlockHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UrlBlockHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token annotation punctuation">@Override</span></span>
<span class="line">            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">blocked</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">R</span> result <span class="token operator">=</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                httpServletResponse<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"application/json;charset=UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                httpServletResponse<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>远程调用熔断配置</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"gulimall-seckill"</span><span class="token punctuation">,</span> fallback <span class="token operator">=</span> <span class="token class-name">SeckillCallbackHandler</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SeckillFeignService</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SeckillCallbackHandler</span> <span class="token keyword">implements</span> <span class="token class-name">SeckillFeignService</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SeckillSkuVo</span><span class="token punctuation">></span></span> <span class="token function">getSkuSeckillInfo</span><span class="token punctuation">(</span><span class="token class-name">Long</span> skuId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"熔断方法调用"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"触发熔断，秒杀服务远程调用出错"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 可参考熔断文档自定义熔断规则</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对某一个方法进行熔断配置</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"getSkuItemBySkuIdResource"</span><span class="token punctuation">,</span> blockHandler <span class="token operator">=</span> <span class="token string">"getSkuItemBySkuIdCallback"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">SkuVo</span> <span class="token function">getSkuItemBySkuId</span><span class="token punctuation">(</span><span class="token class-name">Long</span> skuId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 省略</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">SkuVo</span> <span class="token function">getSkuItemBySkuIdCallback</span><span class="token punctuation">(</span><span class="token class-name">Long</span> skuId<span class="token punctuation">,</span> <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"远程调用出错：%s %s%n"</span><span class="token punctuation">,</span> skuId<span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SkuVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 还有更多的使用方法，见熔断使用文档</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用文档：</p>
<ul>
<li>流控规则使用文档：<a href="https://sentinelguard.io/zh-cn/docs/flow-control.html" target="_blank" rel="noopener noreferrer">https://sentinelguard.io/zh-cn/docs/flow-control.html</a></li>
<li>熔断降级规则使用文档：<a href="https://sentinelguard.io/zh-cn/docs/circuit-breaking.html" target="_blank" rel="noopener noreferrer">https://sentinelguard.io/zh-cn/docs/circuit-breaking.html</a></li>
</ul>
<h2 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪"><span>链路追踪</span></a></h2>
<p>添加依赖见 <code v-pre>gulimall-common</code></p>
<p>添加配置信息</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">zipkin</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">base-url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>9411/</span>
<span class="line">    <span class="token comment"># 关闭服务发现</span></span>
<span class="line">    <span class="token key atrule">discovery-client-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">    <span class="token key atrule">sender</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> web</span>
<span class="line">  <span class="token key atrule">sleuth</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">sampler</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 配置采样器</span></span>
<span class="line">      <span class="token key atrule">probability</span><span class="token punctuation">:</span> <span class="token number">1.0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


