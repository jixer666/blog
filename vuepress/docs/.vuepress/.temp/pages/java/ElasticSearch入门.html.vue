<template><div><h1 id="elasticsearch-入门" tabindex="-1"><a class="header-anchor" href="#elasticsearch-入门"><span>ElasticSearch 入门</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-7-19</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<p><strong>你知道的，为了搜索</strong></p>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2>
<h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h3>
<p>名词：相当于 MySQL 中的数据库</p>
<p>动词：索引一个文档，相当于 MySQL 中的 INSERT 关键字</p>
<p>倒排索引：相当于 MySQL 中的 B+ 树索引结构</p>
<h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h3>
<p>相当于数据库中的表</p>
<h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h3>
<p>相当于数据库中的字段</p>
<h3 id="相关性得分" tabindex="-1"><a class="header-anchor" href="#相关性得分"><span>相关性得分</span></a></h3>
<p>相关性得分：即每个文档跟查询的匹配程度</p>
<p>执行命令会按照相关性得分进行降序排序</p>
<p>例如：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   ...</span>
<span class="line">   <span class="token property">"hits"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"total"</span><span class="token operator">:</span>      <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"max_score"</span><span class="token operator">:</span>  <span class="token number">0.16273327</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"hits"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">         <span class="token punctuation">{</span></span>
<span class="line">            ...</span>
<span class="line">            <span class="token property">"_score"</span><span class="token operator">:</span>         <span class="token number">0.16273327</span><span class="token punctuation">,</span>  <span class="token comment">// 相关性得分</span></span>
<span class="line">            <span class="token property">"_source"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">             ...</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token punctuation">{</span></span>
<span class="line">            ...</span>
<span class="line">            <span class="token property">"_score"</span><span class="token operator">:</span>         <span class="token number">0.016878016</span><span class="token punctuation">,</span> </span>
<span class="line">            <span class="token property">"_source"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              ...</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2>
<ul>
<li>
<p>GET /_cat/nodes：查看所有节点</p>
</li>
<li>
<p>GET /_cat/health：查看 ES 健康状况</p>
</li>
<li>
<p>GET /_cat/master：查看主节点</p>
</li>
<li>
<p>GET /_cat/indices：查看所有索引</p>
</li>
<li>
<p>PUT /megacorp/employee/1：索引文档</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"first_name"</span> <span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"last_name"</span> <span class="token operator">:</span>  <span class="token string">"Smith"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"age"</span> <span class="token operator">:</span>        <span class="token number">25</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"about"</span> <span class="token operator">:</span>      <span class="token string">"I love to go rock climbing"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"interests"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"sports"</span><span class="token punctuation">,</span> <span class="token string">"music"</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>megacorp：索引名词</li>
<li>employee：类型名词</li>
<li>1：文档 ID</li>
</ul>
</li>
<li>
<p>GET /megacorp/employee/1：查询文档 ID 为1的员工</p>
</li>
<li>
<p>GET /megacorp/employee/_search：查询索引 megacorp 下所有类型为 employee 的文档</p>
<p>添加高级搜索条件：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"query"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"match"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"last_name"</span> <span class="token operator">:</span> <span class="token string">"smith Alin"</span>  <span class="token comment">// 搜索 last_name 中包含 smith 或 Alin 的文档</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"range"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"age"</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"gt"</span> <span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span> </span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"match_phrase"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"about"</span> <span class="token operator">:</span> <span class="token string">"rock climbing"</span> <span class="token comment">// 短语搜索：搜索 last_name 中包含 rock climbing 的文档</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token property">"highlight"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"fields"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"about"</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 搜索结果中的 about 字段高亮</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="深入搜索" tabindex="-1"><a class="header-anchor" href="#深入搜索"><span>深入搜索</span></a></h2>
<h3 id="精确搜索" tabindex="-1"><a class="header-anchor" href="#精确搜索"><span>精确搜索</span></a></h3>
<p>单个值</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"query"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    	<span class="token property">"term"</span> <span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">        	<span class="token property">"age"</span> <span class="token operator">:</span> <span class="token number">25</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个值</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"query"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    	<span class="token property">"term"</span> <span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">        	<span class="token property">"age"</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多条件搜索" tabindex="-1"><a class="header-anchor" href="#多条件搜索"><span>多条件搜索</span></a></h3>
<p>布尔过滤器：由下面三个部分组成 <code v-pre>should</code>、<code v-pre>must</code>、<code v-pre>must_not</code></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"should"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 相当于 MySQL 查询的 OR </span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 相当于 MySQL 查询的 AND </span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"first_name"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"must_not"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 相当于 MySQL 查询的 NOT </span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"last_name"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="范围搜索" tabindex="-1"><a class="header-anchor" href="#范围搜索"><span>范围搜索</span></a></h3>
<p><code v-pre>range</code> 可供组合的选项如下：</p>
<ul>
<li><code v-pre>gt</code>: <code v-pre>&gt;</code> 大于</li>
<li><code v-pre>lt</code>: <code v-pre>&lt;</code> 小于</li>
<li><code v-pre>gte</code>: <code v-pre>&gt;=</code> 大于或等于</li>
<li><code v-pre>lte</code>: <code v-pre>&lt;=</code> 小于或等于</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"age"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"gte"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"lte"</span><span class="token operator">:</span> <span class="token number">25</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理-null-值" tabindex="-1"><a class="header-anchor" href="#处理-null-值"><span>处理 NULL 值</span></a></h3>
<p>不存在 NULL</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"exists"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"last_name"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存在 NULL</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"missing"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"last_name"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语句提升权重" tabindex="-1"><a class="header-anchor" href="#语句提升权重"><span>语句提升权重</span></a></h3>
<p>自定义权重值</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"should"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"age"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token property">"boost"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"age"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token property">"boost"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2>
<p>https://www.elastic.co/guide/cn/elasticsearch/guide/current</p>
</div></template>


