import{_ as n,c as i,a,o as e}from"./app-BKm_FHq2.js";const l={};function c(d,s){return e(),i("div",null,[...s[0]||(s[0]=[a(`<h1 id="leetcode第396场周赛" tabindex="-1"><a class="header-anchor" href="#leetcode第396场周赛"><span>Leetcode第396场周赛</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-05-05</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> 本次比赛WA嘛了，最后3分钟把第三题解了，一直错本来都打算放弃了，突然就给我对了。 <p>字符串这方面还是太弱了，本场基本都是字符串的题目.....</p><h2 id="有效单词" tabindex="-1"><a class="header-anchor" href="#有效单词"><span>有效单词</span></a></h2><p>签到题，如果数组元素较多的的化建议用循环做</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    bool isValid(string word) {</span>
<span class="line">        int len = word.size();</span>
<span class="line">        if(len &lt; 3){</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        int f1 = 0, f2 = 0;</span>
<span class="line">        for(int i = 0; i &lt; len; i++){</span>
<span class="line">            char c = word[i];</span>
<span class="line">            if(c == &#39;a&#39; || c == &#39;e&#39; || c == &#39;i&#39; || c ==&#39;o&#39; || c == &#39;u&#39; ||</span>
<span class="line">              c == &#39;A&#39; || c == &#39;E&#39; || c == &#39;I&#39; || c ==&#39;O&#39; || c == &#39;U&#39; ){</span>
<span class="line">                f1 = 1;</span>
<span class="line">            } else {</span>
<span class="line">                if(c &gt;= &#39;a&#39; &amp;&amp; c &lt;= &#39;z&#39; || c &gt;= &#39;0&#39; &amp;&amp; c &lt;= &#39;9&#39; || c &gt;= &#39;A&#39; &amp;&amp; c &lt;= &#39;Z&#39;){</span>
<span class="line">                    if(c &gt;= &#39;a&#39; &amp;&amp; c &lt;= &#39;z&#39; ||  c &gt;= &#39;A&#39; &amp;&amp; c &lt;= &#39;Z&#39;){</span>
<span class="line">                         f2 = 1;</span>
<span class="line">                    }</span>
<span class="line">                } else {</span>
<span class="line">                    return false;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if(f1 &amp;&amp; f2) return true;</span>
<span class="line">        else return false;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k-周期字符串需要的最少操作次数" tabindex="-1"><a class="header-anchor" href="#k-周期字符串需要的最少操作次数"><span>K 周期字符串需要的最少操作次数</span></a></h2><p>一开始没读懂题目，后面发现不必要考虑两个字符串相隔的位置</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minimumOperationsToMakeKPeriodic(string word, int k) {</span>
<span class="line">        int len = word.size(), maxlen = 0, cot = 0, idx = 0;</span>
<span class="line">        string mstr = &quot;&quot;;</span>
<span class="line">        unordered_map&lt;string, int&gt; ump;</span>
<span class="line">        for(int i = 0;  i &lt; len; i++){</span>
<span class="line">            string ss = word.substr(i, k);</span>
<span class="line">            ump[ss] ++;</span>
<span class="line">            if(ump[ss] &gt; maxlen){</span>
<span class="line">                maxlen = ump[ss];</span>
<span class="line">                mstr = ss;</span>
<span class="line">            }</span>
<span class="line">            i += k - 1;</span>
<span class="line">        }</span>
<span class="line">        idx = 0;</span>
<span class="line">        for(int i = 0;  i &lt; len; i++){</span>
<span class="line">            string ss = word.substr(i, k);</span>
<span class="line">            if(ss == mstr){</span>
<span class="line">                cot ++;</span>
<span class="line">            }</span>
<span class="line">            i += k - 1;</span>
<span class="line">        }</span>
<span class="line">        return (len - cot * k) / k;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同位字符串连接的最小长度" tabindex="-1"><a class="header-anchor" href="#同位字符串连接的最小长度"><span>同位字符串连接的最小长度</span></a></h2><p>通过求出每个元素的个数，然后求出所有个数的最大公约数来判断可以分为多少组，从而求出每组的个数</p><p>个人感觉这题的数据量不是很多，我这个思路遇多多少少是有点问题的</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int fun(int x, int y){</span>
<span class="line">        return y == 0? x : fun(y, x % y);</span>
<span class="line">    }</span>
<span class="line">    int minAnagramLength(string s) {</span>
<span class="line">        set&lt;char&gt; ss;</span>
<span class="line">        int len = s.size();</span>
<span class="line">        unordered_map&lt;char, int&gt; ump;</span>
<span class="line">        int cot = INT_MAX, f = 0, cot2 = 0, bf = 0;</span>
<span class="line">        for(int i = 0; i &lt; len; i++){</span>
<span class="line">            ump[s[i]] ++;</span>
<span class="line">        }</span>
<span class="line">        for(auto item : ump){</span>
<span class="line">            if(bf == 0){</span>
<span class="line">                bf = item.second;</span>
<span class="line">            } else {</span>
<span class="line">                cot = min(cot, fun(bf, item.second));</span>
<span class="line">                bf = item.second;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return cot != INT_MAX ? len / cot: len / bf;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使数组中所有元素相等的最小开销" tabindex="-1"><a class="header-anchor" href="#使数组中所有元素相等的最小开销"><span>使数组中所有元素相等的最小开销</span></a></h2><p>待补充</p>`,16)])])}const r=n(l,[["render",c]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/Leetcode%E7%AC%AC396%E5%9C%BA%E5%91%A8%E8%B5%9B.html","title":"Leetcode第396场周赛","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"有效单词","slug":"有效单词","link":"#有效单词","children":[]},{"level":2,"title":"K 周期字符串需要的最少操作次数","slug":"k-周期字符串需要的最少操作次数","link":"#k-周期字符串需要的最少操作次数","children":[]},{"level":2,"title":"同位字符串连接的最小长度","slug":"同位字符串连接的最小长度","link":"#同位字符串连接的最小长度","children":[]},{"level":2,"title":"使数组中所有元素相等的最小开销","slug":"使数组中所有元素相等的最小开销","link":"#使数组中所有元素相等的最小开销","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/Leetcode第396场周赛.md"}');export{r as comp,v as data};
