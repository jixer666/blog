<template><div><h1 id="netty部署问题梳理" tabindex="-1"><a class="header-anchor" href="#netty部署问题梳理"><span>Netty部署问题梳理</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-12-18</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<p>最近笔者将人工客服写好了，需要打包上测试环境，遇到诸多问题，记一下</p>
<p>因为技术栈用的 Netty 框架，它会新开一个端口来专门用于处理 Websocket 连接</p>
<h2 id="部署方案" tabindex="-1"><a class="header-anchor" href="#部署方案"><span>部署方案</span></a></h2>
<h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h3>
<p>公司的测试环境只有一台服务器，笔者需要部署两个不同的系统，这两个不同的系统用的是同一套代码，两个系统的 Netty 的端口不能重复，所以就不能写死，需要写在配置文件中，通过 Springboot 启动命令带参数来动态设置这个端口值</p>
<h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h3>
<p>前端的部署过程异常坎坷，如下：</p>
<ul>
<li>
<p>考虑到系统有开发、测试、生产三个环境，打算将后端服务的 Websocket 不同环境的 IP 地址写在 <code v-pre>.env</code> 的配置文件中。在调试过程中，发现测试和生产环境不但内网 IP 可以进入，外网 IP 也能进入，所以在前端配置文中写后端地址行不通，写的话只能写一个，要么外网，要么内网</p>
</li>
<li>
<p>在参考了 Nginx 代理转发后，考虑到通过访问前端地址，请求到 Nginx 来进行反向代理，由 Nginx 来决定是哪一个地址。所有的 Websocket 连接加上统一的前缀 <code v-pre>/netty</code>，Nginx 根据这个前缀来进行转发到后端服务的 ws 地址，这下解决了内网和外网的问题</p>
</li>
<li>
<p>在部署好测试环境后，去建立 Websocket  连接，发现连接不上，看前端控制台报错是因为测试环境是 https 协议，而 Websocket 连接是 ws 协议，需要改为 wss 协议，于是又得回到 <code v-pre>.env</code> 的配置文件去更改</p>
</li>
<li>
<p>再改完后，重新部署，去访问客服页面，页面进不去了，根据控制台报错和打印日志分析到是用户权限路径懒加载的问题，代码如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">loadView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@/views/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>view<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> resolve<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用 import 实现生产环境的路由懒加载</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@/views/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>view<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件判断在测试环境下走的是下方懒加载，在开发和生产走的是上方判断。查阅资料可知，<code v-pre>VUE_APP_NODE_ENV</code> 的默认值由以下因素决定：</p>
<ul>
<li><code v-pre>npm run serve</code> / <code v-pre>npm run dev</code> → <code v-pre>development</code> 环境</li>
<li><code v-pre>npm run build</code> → <code v-pre>production</code> 环境</li>
<li><code v-pre>npm run test</code> → <code v-pre>test</code> 环境</li>
</ul>
<p>为了解决这个问题，笔者在 <code v-pre>.env</code> 的配置文件将 <code v-pre>VUE_APP_NODE_ENV</code> 的值进行了覆盖，所有的都暂时写成了 <code v-pre>development</code> ，再次打包部署，页面成功打开</p>
</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>这次部署 Netty，本以为想以往一样，打个包，往服务器一丢就完事，没想到实际考虑的地方很多，修改加调试了整整2天才勉强部署成功。特此记录，避免下次再掉同一个坑里了</p>
</div></template>


