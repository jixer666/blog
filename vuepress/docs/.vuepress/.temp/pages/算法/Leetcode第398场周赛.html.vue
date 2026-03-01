<template><div><h1 id="leetcode第398场周赛" tabindex="-1"><a class="header-anchor" href="#leetcode第398场周赛"><span>Leetcode第398场周赛</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-05-20</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
## 3151. 特殊数组 I
<p>简单模拟</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    bool isArraySpecial(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int len = nums.size();</span>
<span class="line">        if(len == 1){</span>
<span class="line">            return true;</span>
<span class="line">        }</span>
<span class="line">        for(int i = 1; i &lt; len; i++){</span>
<span class="line">            if(nums[i] % 2 == nums[i - 1] % 2){</span>
<span class="line">                return false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊数组-ii" tabindex="-1"><a class="header-anchor" href="#特殊数组-ii"><span>特殊数组 II</span></a></h2>
<p>前缀和处理相邻特殊元素总数</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;bool&gt; isArraySpecial(vector&lt;int&gt;&amp; nums, vector&lt;vector&lt;int&gt;&gt;&amp; queries) {</span>
<span class="line">        int len = nums.size();</span>
<span class="line">        vector&lt;bool&gt; res;</span>
<span class="line">        if(len == 1){</span>
<span class="line">            for(int i = 0; i &lt; queries.size(); i++){</span>
<span class="line">                res.push_back(true);</span>
<span class="line">            }</span>
<span class="line">            return res;</span>
<span class="line">        }</span>
<span class="line">        vector&lt;int&gt; v(len + 1);</span>
<span class="line">        v[0] = 0;</span>
<span class="line">        for(int i = 1; i &lt; len; i++){</span>
<span class="line">            if(nums[i] % 2 == nums[i - 1] % 2){</span>
<span class="line">                v[i] = v[i - 1] + 1;</span>
<span class="line">            } else {</span>
<span class="line">                v[i] = v[i - 1];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        for(int i = 0; i &lt; queries.size(); i++){</span>
<span class="line">            if(v[queries[i][1]] - v[queries[i][0]] == 0){</span>
<span class="line">                res.push_back(true);</span>
<span class="line">            } else {</span>
<span class="line">                res.push_back(false);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有数对中数位不同之和" tabindex="-1"><a class="header-anchor" href="#所有数对中数位不同之和"><span>所有数对中数位不同之和</span></a></h2>
<p>拆分位运算贡献</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long n[100010][20];</span>
<span class="line">    long long sumDigitDifferences(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int len = nums.size();</span>
<span class="line">        long long res = 0;</span>
<span class="line">        for(int i = 0; i &lt; len; i++){</span>
<span class="line">            int cc = nums[i], idx = 0;</span>
<span class="line">            while(cc){</span>
<span class="line">                int j = cc % 10;</span>
<span class="line">                res += i * 1ll - n[idx][j];</span>
<span class="line">                cc /= 10;   </span>
<span class="line">                n[idx][j] ++;</span>
<span class="line">                idx ++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="到达第-k-级台阶的方案数" tabindex="-1"><a class="header-anchor" href="#到达第-k-级台阶的方案数"><span>到达第 K 级台阶的方案数</span></a></h2>
<p>记忆化搜索</p>
<p>灵神这题做法是用记忆存储的元素与以往题目不一样，使用 <code v-pre>long long p = (long long) x &lt;&lt; 10 | num &lt;&lt; 1 | f; </code>来确定元素的唯一性，这个做法tql，换我来做就需要用个二维数组来标志</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    unordered_map&lt;long long, int&gt; ump;</span>
<span class="line">    int dfs(int x, int num, bool f, int k){</span>
<span class="line">        if(x &gt; k + 1 || x &lt; 0){</span>
<span class="line">            return 0;</span>
<span class="line">        }</span>
<span class="line">        long long p = (long long) x &lt;&lt; 10 | num &lt;&lt; 1 | f;</span>
<span class="line">        if(ump.find(p) != ump.end()){</span>
<span class="line">            return ump[p];</span>
<span class="line">        }</span>
<span class="line">        int ss = (x == k);</span>
<span class="line">        ss += dfs(x + (1 &lt;&lt; num), num + 1, false, k);</span>
<span class="line">        if(!f){</span>
<span class="line">            ss += dfs(x - 1, num, true, k);</span>
<span class="line">        }</span>
<span class="line">        ump[p] = ss;</span>
<span class="line">        return ss;</span>
<span class="line">    }</span>
<span class="line">    int waysToReachStair(int k) {</span>
<span class="line">        return dfs(1, 0, false, k);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


