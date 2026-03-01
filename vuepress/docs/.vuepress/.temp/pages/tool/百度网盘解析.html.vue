<template><div><h1 id="百度网盘解析" tabindex="-1"><a class="header-anchor" href="#百度网盘解析"><span>百度网盘解析</span></a></h1>
<h2 id="接口文档" tabindex="-1"><a class="header-anchor" href="#接口文档"><span>接口文档</span></a></h2>
<h3 id="提取分享文件" tabindex="-1"><a class="header-anchor" href="#提取分享文件"><span>提取分享文件</span></a></h3>
<p>【POST】https://pan.baidu.com/share/verify</p>
<p>请求参数</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">surl=4eS6087W-_siGRLp_1EeIA</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>表单参数</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>pwd</td>
<td>xxxxx</td>
</tr>
</tbody>
</table>
<p>返回结果</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"errno"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"err_msg"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"request_id"</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"randsk"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会将 <code v-pre>BDCLND</code> 和 <code v-pre>PANPSC</code> 设置到 Cookie 中</p>
<h3 id="获取分享文件列表" tabindex="-1"><a class="header-anchor" href="#获取分享文件列表"><span>获取分享文件列表</span></a></h3>
<p>【GET】https://pan.baidu.com/share/list</p>
<p>请求参数</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">page=1&amp;num=20&amp;order=time&amp;shorturl=YQGvmKh0DaOMA39KDc3fcQ&amp;root=1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cookie</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">BDCLND=xxx;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>返回结果</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"errno"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"request_id"</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"server_time"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"cfrom_id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"hitrisk"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"appeal_status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"is_zombie"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vip_point"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vip_level"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"svip10_id"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vip_type"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"sharetype"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"view_visited"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"view_limit"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"expired_type"</span><span class="token operator">:</span> <span class="token number">365</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"6"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_int8"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"fs_id"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"isdir"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"local_ctime"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"local_mtime"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"md5"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/data/app"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_ctime"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_filename"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_mtime"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"share_id"</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"uk"</span><span class="token operator">:</span> xxxx</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取分享文件的下载地址" tabindex="-1"><a class="header-anchor" href="#获取分享文件的下载地址"><span>获取分享文件的下载地址</span></a></h3>
<p>【POST】https://pan.baidu.com/api/sharedownload</p>
<p>请求参数</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://pan.baidu.com/api/sharedownload?sign=a25723edb9faae6ae7e81c039293317678c7426a&amp;timestamp=1752064660&amp;channel=chunlei&amp;web=1&amp;app_id=250528&amp;bdstoken=50696cec2249f2fdbd9879bf7bbc74bb&amp;clienttype=0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>表单数据</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>encrypt</td>
<td>0</td>
</tr>
<tr>
<td>extra</td>
<td>{&quot;sekey&quot;: &quot;xxxx&quot;}</td>
</tr>
<tr>
<td>product</td>
<td>share</td>
</tr>
<tr>
<td>uk</td>
<td>xxxx</td>
</tr>
<tr>
<td>primaryid</td>
<td>xxxx</td>
</tr>
<tr>
<td>fid_list</td>
<td>[xxxx]</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>extra：获取 Cookie 中的 BDCLND 参数或 Localstorage 中的 xxxx_bdclnd 参数（xxx 是分享链接中的 s 后面的部分）</p>
<p>贴上从 <code v-pre>download-all.js</code> 中查找 extra 参数的代码</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"> <span class="token function-variable function">ajaxGetDlinkShare</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">encrypt</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">              <span class="token punctuation">,</span> a <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">              <span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token string">"doc-share"</span> <span class="token operator">===</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pageInfo<span class="token punctuation">.</span>currentSubProduct</span>
<span class="line">              <span class="token punctuation">,</span> d <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">DOC_URL_DLINK_SHARE</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">URL_DLINK_SHARE</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>locals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"public"</span><span class="token punctuation">,</span> <span class="token string">"share_uk"</span><span class="token punctuation">,</span> <span class="token string">"shareid"</span><span class="token punctuation">,</span> <span class="token string">"sign"</span><span class="token punctuation">,</span> <span class="token string">"timestamp"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">u<span class="token punctuation">,</span> p<span class="token punctuation">,</span> l<span class="token punctuation">,</span> g<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">===</span> u <span class="token operator">||</span> c <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>u<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">var</span> h <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"/s/"</span><span class="token punctuation">)</span></span>
<span class="line">                      <span class="token punctuation">,</span> y <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"_bdclnd"</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token string">"BDCLND"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 核心点</span></span>
<span class="line">                    r<span class="token punctuation">.</span>extra <span class="token operator">=</span> o<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">sekey</span><span class="token operator">:</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">...</span> <span class="token comment">// 省略</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>uk 和 primaryid：从获取分享文件列表返回中获取</p>
</li>
<li>
<p>fid_list：分享的文件列表中的 fs_id</p>
</li>
</ul>
<p>返回结果</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"errno"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"request_id"</span><span class="token operator">:</span> <span class="token number">9014214548178239172</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"server_time"</span><span class="token operator">:</span> <span class="token number">1752061496</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"category"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"delete_fs_id"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_int3"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_int8"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_tinyint1"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_tinyint2"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_tinyint3"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"extent_tinyint4"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"file_key"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"file_tag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"fs_id"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"headurl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"is_scene"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"isdir"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"local_ctime"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"local_mtime"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"md5"</span><span class="token operator">:</span> <span class="token string">"xxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"oper_id"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"owner_id"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"owner_type"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/MyExcel.xlsx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"path_md5"</span><span class="token operator">:</span> <span class="token string">"xxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"privacy"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"real_category"</span><span class="token operator">:</span> <span class="token string">"xlsx/docx/pptx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_atime"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_ctime"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_filename"</span><span class="token operator">:</span> <span class="token string">"MyExcel.xlsx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"server_mtime"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"share"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"size"</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"tkbind_id"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"videotag"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"wpfile"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"dlink"</span><span class="token operator">:</span> <span class="token string">"xxxxxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"thumbs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"url1"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"url2"</span><span class="token operator">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"url3"</span><span class="token operator">:</span> <span class="token string">"xxx"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"docpreview"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"resource_type"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"isenum"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"context"</span><span class="token operator">:</span> <span class="token string">"xxxx"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span>	</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理"><span>实现原理</span></a></h2>
<p>用户输入分享链接，系统调用获取分享文件接口，列出分享的文件，由用户自己选择下载一个或者多个文件，系统将这些文件保存在自己的一个 SVIP 账号里，由 SVIP 账号获取不限速的下载链接地址</p>
<h2 id="参考网站" tabindex="-1"><a class="header-anchor" href="#参考网站"><span>参考网站</span></a></h2>
<ul>
<li><a href="https://zi5oqdul6ex.feishu.cn/docx/UT8vd1Nbvo6ZqkxszVucqu8Unsg" target="_blank" rel="noopener noreferrer">https://zi5oqdul6ex.feishu.cn/docx/UT8vd1Nbvo6ZqkxszVucqu8Unsg</a></li>
<li><a href="https://github.com/yuantuo666/baiduwp-php" target="_blank" rel="noopener noreferrer">https://github.com/yuantuo666/baiduwp-php</a></li>
</ul>
</div></template>


