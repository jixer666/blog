<template><div><h1 id="第十四届蓝桥杯b组国赛" tabindex="-1"><a class="header-anchor" href="#第十四届蓝桥杯b组国赛"><span>第十四届蓝桥杯B组国赛</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-05-05</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
## 子2023
<p>有两种方法，一种暴力枚举，一种动态规划</p>
<p>暴力枚举：需要等一两分钟</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	string str = &quot;&quot;;</span>
<span class="line">	for(int i = 1; i &lt;= 2023; i++){</span>
<span class="line">		string ss = to_string(i);</span>
<span class="line">		for(int j = 0 ; j &lt; ss.size(); j++){</span>
<span class="line">			if(ss[j] == '2' || ss[j] == '0' || ss[j] == '3'){</span>
<span class="line">				str += ss[j];</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line">	int len = str.size();</span>
<span class="line">	ll res = 0;</span>
<span class="line">	for(int i = 0; i &lt; len; i++){</span>
<span class="line">		if(str[i] != '2') continue;</span>
<span class="line">		for(int j = i + 1; j &lt; len; j ++){</span>
<span class="line">			if(str[j] != '0') continue;</span>
<span class="line">			for(int z = j + 1; z &lt; len; z ++){</span>
<span class="line">				if(str[z] != '2') continue;</span>
<span class="line">				for(int x = z + 1; x &lt; len; x ++){</span>
<span class="line">					if(str[x] != '3') continue;</span>
<span class="line">					if(str[i] == '2' &amp;&amp; str[j] == '0' &amp;&amp; str[z] == '2' &amp;&amp; str[x] == '3'){</span>
<span class="line">						res ++;</span>
<span class="line">					}</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态规划</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line">ll dp[5];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	string str = &quot;&quot;;</span>
<span class="line">	for(int i = 1; i &lt;= 2023; i++){</span>
<span class="line">		string ss = to_string(i);</span>
<span class="line">		for(int j = 0 ; j &lt; ss.size(); j++){</span>
<span class="line">			if(ss[j] == '2' || ss[j] == '0' || ss[j] == '3'){</span>
<span class="line">				str += ss[j];</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line">	int len = str.size();</span>
<span class="line">	for(int i = 0; i &lt; len; i++){</span>
<span class="line">		if(str[i] == '2'){</span>
<span class="line">			dp[1] ++;</span>
<span class="line">			dp[3] += dp[2]; </span>
<span class="line">		} else if(str[i] == '0'){</span>
<span class="line">			dp[2] += dp[1];</span>
<span class="line">		} else if(str[i] == '3'){</span>
<span class="line">			dp[4] += dp[3]; </span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; dp[4] &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="班级活动" tabindex="-1"><a class="header-anchor" href="#班级活动"><span>班级活动</span></a></h2>
<p>本题需要注意一下几点：</p>
<ul>
<li>重复学生数量小于没有重复的数量</li>
<li>重复学生数量大于没有重复数量，且重复数量为偶数</li>
<li>重复学生数量大于没有重复数量，且重复数量为奇数</li>
</ul>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;a</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	unordered_map&lt;int, int&gt; ump;</span>
<span class="line">	int idx = 0, idx2 = 0;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		int num;</span>
<span class="line">		cin &gt;&gt; num;</span>
<span class="line">		ump[num] ++;</span>
<span class="line">		if(ump[num] == 2){</span>
<span class="line">			idx ++;</span>
<span class="line">		} else if(ump[num] &gt; 2){</span>
<span class="line">			idx2 ++;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	int cc = a - idx * 2 - idx2;</span>
<span class="line">	if(cc &gt;= idx2){</span>
<span class="line">		cout &lt;&lt; idx2 + (cc - idx2) / 2 &lt;&lt; endl;</span>
<span class="line">	} else {</span>
<span class="line">		cout &lt;&lt; idx2 &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并数列" tabindex="-1"><a class="header-anchor" href="#合并数列"><span>合并数列</span></a></h2>
<p>双指针，一个指向A数组最左边，一个指向B数组最左边，同时向右移动。遇到一致的跳过，不一致的停下来只让该一个指针移动直到相同为止</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;int&gt; v1(a), v2(b);</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		cin &gt;&gt; v1[i];</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; b; i++){</span>
<span class="line">		cin &gt;&gt; v2[i];</span>
<span class="line">	}</span>
<span class="line">	int idx1 = 0, idx2 = 0, res = 0;</span>
<span class="line">	while(idx1 &lt; a){</span>
<span class="line">		int num1 = v1[idx1], num2 = v2[idx2];</span>
<span class="line">		while(num1 != num2){</span>
<span class="line">			if(num1 &gt; num2){</span>
<span class="line">				idx2 ++;</span>
<span class="line">				num2 += v2[idx2];</span>
<span class="line">			} else {</span>
<span class="line">				idx1 ++;</span>
<span class="line">				num1 += v1[idx1];</span>
<span class="line">			}</span>
<span class="line">			res ++;</span>
<span class="line">		}</span>
<span class="line">		idx1 ++;</span>
<span class="line">		idx2 ++;</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ab路线" tabindex="-1"><a class="header-anchor" href="#ab路线"><span>AB路线</span></a></h2>
<p>BFS模板题，注意以下测试数据</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">2 2 10</span>
<span class="line">AA</span>
<span class="line">AB</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案为10
这题需要标记 <strong>走过且走的次数的点</strong>，走过的点只要次数不一致还可以再次走，所以需要用到三维数组st来标记</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">endl</span> <span class="token string">"\n"</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ll<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">></span> PII<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1e6</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> ix<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> iy<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">char</span> n<span class="token punctuation">[</span><span class="token number">1010</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1010</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> st<span class="token punctuation">[</span><span class="token number">1010</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1010</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">p</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> cot<span class="token punctuation">,</span> cc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	</span>
<span class="line">	queue<span class="token operator">&lt;</span>p<span class="token operator">></span> q<span class="token punctuation">;</span></span>
<span class="line">	q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	st<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">auto</span> top <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">int</span> x <span class="token operator">=</span> top<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> top<span class="token punctuation">.</span>y<span class="token punctuation">,</span> cot <span class="token operator">=</span> top<span class="token punctuation">.</span>cot<span class="token punctuation">,</span> cc <span class="token operator">=</span> top<span class="token punctuation">.</span>cc<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> a <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">==</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">			res <span class="token operator">=</span> cc<span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">int</span> xx <span class="token operator">=</span> x <span class="token operator">+</span> ix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> yy <span class="token operator">=</span> y <span class="token operator">+</span> iy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">if</span><span class="token punctuation">(</span>xx <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> xx <span class="token operator">&lt;</span> a <span class="token operator">&amp;&amp;</span> yy <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> yy <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">if</span><span class="token punctuation">(</span>cot <span class="token operator">==</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">					<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> n<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span> <span class="token operator">||</span> st<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">					st<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">					q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>xx<span class="token punctuation">,</span> yy<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> cc <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span> <span class="token operator">==</span> n<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">					<span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span><span class="token punctuation">[</span>cot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">					st<span class="token punctuation">[</span>xx<span class="token punctuation">]</span><span class="token punctuation">[</span>yy<span class="token punctuation">]</span><span class="token punctuation">[</span>cot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">					q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>xx<span class="token punctuation">,</span> yy<span class="token punctuation">,</span> cot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cc <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">				<span class="token punctuation">}</span> </span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span>	</span>
<span class="line">	</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cout<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cin <span class="token operator">>></span> a <span class="token operator">>></span> b <span class="token operator">>></span> x<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> b<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">			cin <span class="token operator">>></span> n<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token function">bfs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>	</span>
<span class="line">	</span>
<span class="line">	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抓娃娃" tabindex="-1"><a class="header-anchor" href="#抓娃娃"><span>抓娃娃</span></a></h2>
<p>用前缀和的思想来做</p>
<p>根据给出的线段的两个点，求出中点，在求助中点数组的前缀和</p>
<p>注意：因为 l，r两个点相加除2后可能出现小数，所以这里需要变通一下改为乘2</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 2e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		n[x + y] ++;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt;= N; i++){</span>
<span class="line">		n[i] += n[i - 1];</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; b; i++){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		cout &lt;&lt; n[2 * y] - n[x * 2 - 1] &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">} </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


