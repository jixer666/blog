<template><div><h1 id="第十四届蓝桥杯b组省赛" tabindex="-1"><a class="header-anchor" href="#第十四届蓝桥杯b组省赛"><span>第十四届蓝桥杯B组省赛</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-03-12</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<h2 id="日期统计" tabindex="-1"><a class="header-anchor" href="#日期统计"><span>日期统计</span></a></h2>
<blockquote>
<p>此题蓝桥杯官网没说清除，子序列按道理来说应该是连续的，而这个题却不是</p>
<p>思路：暴力法遍历8个数，找出符合条件的即可</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">int a, b;</span>
<span class="line">int n[101];</span>
<span class="line"></span>
<span class="line">int v[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};</span>
<span class="line"></span>
<span class="line">set&lt;int&gt; s;</span>
<span class="line">int main(){</span>
<span class="line">	int res = 0;</span>
<span class="line">	for(int i = 0; i &lt; 100; i++) cin &gt;&gt; n[i];</span>
<span class="line">	for(int i = 0; i &lt; 100; i++){</span>
<span class="line">		if(n[i] == 2){</span>
<span class="line">			for(int i2 = i + 1; i2 &lt; 100; i2++){</span>
<span class="line">				if(n[i2] == 0){</span>
<span class="line">					for(int i3 = i2 + 1; i3 &lt; 100; i3++){</span>
<span class="line">						if(n[i3] == 2){</span>
<span class="line">							for(int i4 = i3 + 1; i4 &lt; 100; i4++){</span>
<span class="line">								if(n[i4] == 3){</span>
<span class="line">									for(int i5 = i4 + 1; i5 &lt; 100; i5++){</span>
<span class="line">										for(int i6 = i5 + 1; i6 &lt; 100; i6++){</span>
<span class="line">											for(int i7 = i6 + 1; i7 &lt; 100; i7++){</span>
<span class="line">												for(int i8 = i7 + 1; i8 &lt; 100; i8++){</span>
<span class="line">													int moth = n[i5] * 10 + n[i6], day = n[i7] * 10 + n[i8];</span>
<span class="line">													if(moth &gt;= 1 &amp;&amp; moth &lt;= 12 &amp;&amp; day &gt;= 1 &amp;&amp; day &lt;= v[moth]){</span>
<span class="line">														if(s.find(moth * 100 + day) == s.end()){</span>
<span class="line">															s.insert(moth * 100 + day);</span>
<span class="line">														}</span>
<span class="line">													}</span>
<span class="line">												}	</span>
<span class="line">											}</span>
<span class="line">										}</span>
<span class="line">									}</span>
<span class="line">								}</span>
<span class="line">							}	</span>
<span class="line">						}</span>
<span class="line">					}	</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; s.size() &lt;&lt; endl;</span>
<span class="line">	 </span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01串的熵" tabindex="-1"><a class="header-anchor" href="#_01串的熵"><span>01串的熵</span></a></h2>
<p>暴力枚举</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#include&lt;math.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int res = 0;</span>
<span class="line">	int cot = 23333333;</span>
<span class="line">	for(int i = 1; i &lt; cot; i++){</span>
<span class="line">		int j = cot - i;</span>
<span class="line">		double a = 1.0 * i / cot;</span>
<span class="line">		double b = 1.0 * j / cot;</span>
<span class="line">		double res = -a * log2(a) * i - b * log2(b) * j;  	 </span>
<span class="line">		if(fabs(res - 11625907.5798) &lt; 0.0001){</span>
<span class="line">			cout &lt;&lt; min(i, cot - i) &lt;&lt; endl;</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="冶炼金属" tabindex="-1"><a class="header-anchor" href="#冶炼金属"><span>冶炼金属</span></a></h2>
<blockquote>
<p>唯一会做的简单题。。。</p>
<p>思路：每次循环都求出最大和最小的边界，注意考虑最大最小边界【根据题意笔画一下】</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	</span>
<span class="line">	int a, _max = 1e9, _min = 0;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		int x, y;</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		_max = min(_max, x / y);</span>
<span class="line">		_min = max(_min, x / (y + 1) + 1); </span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; _min &lt;&lt; &quot; &quot; &lt;&lt; _max &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="飞机降落" tabindex="-1"><a class="header-anchor" href="#飞机降落"><span>飞机降落</span></a></h2>
<blockquote>
<p>原先第一看就使用贪心，后看题解需使用 DFS + 剪枝（原因是因为数据范围只有10）</p>
<p>思路：从下标0开始搜索，每次搜索都遍历一次数组，从第一个没遍历到的下标下手，继续搜索，这里需要用额外的数组标识是否已经遍历过了。当搜索的下标到最后时，也就是下标等于数组时，就说明能完成降落，因为如果无法完成降落，就不会进行下一次的搜索</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">int a, b;</span>
<span class="line">bool res = false;</span>
<span class="line">int flag[11];</span>
<span class="line"></span>
<span class="line">struct p{</span>
<span class="line">	int x, y, z;</span>
<span class="line">} n[11];</span>
<span class="line"></span>
<span class="line">void dfs(int x, int s){</span>
<span class="line">	if(res){</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	if(x == b){</span>
<span class="line">		res = true;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; b; i++){</span>
<span class="line">		if(!flag[i] &amp;&amp; s &lt;= n[i].x + n[i].y){</span>
<span class="line">			flag[i] = 1;</span>
<span class="line">            // 此处用了一点点贪心，尽可能保证本次的开始是满足条件的</span>
<span class="line">            // 也就是必须都要满足时间是从上一次结束和这一次开始，取个最大值就行</span>
<span class="line">			dfs(x + 1, max(s, n[i].x) + n[i].z);</span>
<span class="line">			flag[i] = 0;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">   	cin &gt;&gt; a;</span>
<span class="line">   	while(a--){</span>
<span class="line">   		res = false;</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		for(int i = 0; i &lt; b; i++) cin &gt;&gt; n[i].x &gt;&gt; n[i].y &gt;&gt; n[i].z;</span>
<span class="line">		dfs(0, 0);</span>
<span class="line">		if(res) cout &lt;&lt; &quot;YES&quot; &lt;&lt; endl;</span>
<span class="line">		else cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接龙数列" tabindex="-1"><a class="header-anchor" href="#接龙数列"><span>接龙数列</span></a></h2>
<blockquote>
<p>最少删除数 = 总长度- 最长接龙数总长度</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b; </span>
<span class="line">int dp[10];</span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	int res = 0;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		string num;</span>
<span class="line">		cin &gt;&gt; num;</span>
<span class="line">		int x = num[0] - '0', y = num[num.size() - 1] - '0';</span>
<span class="line">		dp[y] = max(dp[x] + 1, dp[y]);</span>
<span class="line">		res = max(res, dp[y]);</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; a - res &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子串简写" tabindex="-1"><a class="header-anchor" href="#子串简写"><span>子串简写</span></a></h2>
<p>此题唯一需要注意的是数据范围需要用 long long</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[9] = {1,-1,0,0}, iy[9] = {0,0,1,-1};</span>
<span class="line">int a, b;</span>
<span class="line">int n[5001][5001];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	string str;</span>
<span class="line">	char x, y;</span>
<span class="line">	cin &gt;&gt; str &gt;&gt; x &gt;&gt; y;</span>
<span class="line">	ll len = str.size(), cot = 0, res = 0;</span>
<span class="line">	queue&lt;int&gt; pq;</span>
<span class="line">	for(int i = 0; i &lt; len; i++){</span>
<span class="line">		if(str[i] == x) pq.push(i);</span>
<span class="line">		else if(str[i] == y){</span>
<span class="line">			res += cot;</span>
<span class="line">			while(pq.size() &amp;&amp; i - pq.front() + 1 &gt;= a){</span>
<span class="line">				cot ++;</span>
<span class="line">				pq.pop();</span>
<span class="line">				res ++;</span>
<span class="line">			}</span>
<span class="line">			</span>
<span class="line">		} </span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="个人感受" tabindex="-1"><a class="header-anchor" href="#个人感受"><span>个人感受</span></a></h2>
<p>重温一下去年蓝桥杯省赛，依稀记得去年只做了一个C题，一些题用暴力骗分，填空题全军覆没</p>
<p>现在任感觉难度颇高，技术有待提高</p>
</div></template>


