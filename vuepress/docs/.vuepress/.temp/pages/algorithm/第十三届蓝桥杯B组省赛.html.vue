<template><div><h1 id="第十三届蓝桥杯b组省赛" tabindex="-1"><a class="header-anchor" href="#第十三届蓝桥杯b组省赛"><span>第十三届蓝桥杯B组省赛</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-04-08</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
## 九进制转十进制
<p>进制转换题</p>
<p>2 + 2 * 9 + 2 * 9 * 9 + 2 * 9 *9 * 9</p>
<h2 id="顺子日期" tabindex="-1"><a class="header-anchor" href="#顺子日期"><span>顺子日期</span></a></h2>
<p>模拟、枚举题</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b; </span>
<span class="line">int n[13] = {0, 31, 28, 31,30,31,30,31,31,30,31,30,31};</span>
<span class="line"></span>
<span class="line">bool fun(string kk){</span>
<span class="line">	bool flag = 0;</span>
<span class="line">	int idx = 1;</span>
<span class="line">		for(int j = 1; j &lt; kk.size(); j++){</span>
<span class="line">			if(kk[j] - '0' == kk[j - 1] - '0' + 1 ){</span>
<span class="line">				idx ++;</span>
<span class="line">			}else {</span>
<span class="line">				if(idx == 3) {</span>
<span class="line">					flag = 1;</span>
<span class="line">					break;</span>
<span class="line">				}</span>
<span class="line">				idx = 1;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">    	// 注意没遍历完的也需要确认idx是否大于等于3</span>
<span class="line">		return idx &gt;= 3 ? true : flag;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int res = 0;</span>
<span class="line">	for(int i = 1; i &lt;= 12; i++){</span>
<span class="line">		int num = 20220000 + i * 100, idx = 0, flag = 0;</span>
<span class="line">		for(int j = 1; j &lt;= n[i]; j++){</span>
<span class="line">			int cot = num + j;</span>
<span class="line">			string kk = to_string(cot);</span>
<span class="line">			if(fun(kk)){</span>
<span class="line">				res ++;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="刷题统计" tabindex="-1"><a class="header-anchor" href="#刷题统计"><span>刷题统计</span></a></h2>
<p>模拟题，这题唯一需要注意的就是数据范围，需要long long类型</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	ll m, a, b;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b &gt;&gt; m;</span>
<span class="line">	ll kk = a * 5 + 2 * b; </span>
<span class="line">	ll kk3 = m % kk;</span>
<span class="line">	ll res = m / kk * 7;</span>
<span class="line">	if(kk3 &lt;= a * 5){</span>
<span class="line">		res += (ll) ceil(kk3 * 1.0 / a);</span>
<span class="line">	} else {</span>
<span class="line">		res += 5 + (ll)ceil((kk3 - a * 5) * 1.0 / b);</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修剪灌木" tabindex="-1"><a class="header-anchor" href="#修剪灌木"><span>修剪灌木</span></a></h2>
<p>思维题</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int x;</span>
<span class="line">	cin &gt;&gt; x;</span>
<span class="line">	for(int i = 1; i &lt;= x; i++){</span>
<span class="line">		cout &lt;&lt; max(2 * (x - i), 2 * (i - 1)) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计子矩阵" tabindex="-1"><a class="header-anchor" href="#统计子矩阵"><span>统计子矩阵</span></a></h2>
<p>前缀和、双指针题</p>
<p>思路：先求出二维数组的前缀和，用双循环遍历每个数，此时我们需要用另一个数来比较出当前范围的和。</p>
<p>我们可以发现若另一个数和遍历的数的范围和小于k，那么这个数的左边的数的范围和也是小于k的。于是就可以将另一个数设置在最右边，不断让这个数的列减少行增加来算出满足条件的个数，此时时间复杂度优化至O(n^3)，能过。</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res = N;</span>
<span class="line">int v[501][501], n[501][501];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	ll k, res = 0;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b &gt;&gt; k;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			cin &gt;&gt; v[i][j];	</span>
<span class="line">			v[i][j] = v[i-1][j] + v[i][j-1] - v[i-1][j-1] + v[i][j];</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line">	</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			int r = b;</span>
<span class="line">			for(int l = i; l &lt;= a; l++){</span>
<span class="line">				while(r &gt;= j &amp;&amp; v[l][r] - v[i - 1][r] - v[l][j - 1] + v[i - 1][j - 1] &gt; k){</span>
<span class="line">					r --;</span>
<span class="line">				}</span>
<span class="line">				if(j &gt; r){</span>
<span class="line">					break;</span>
<span class="line">				}</span>
<span class="line">				res += r - j + 1;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;	</span>
<span class="line">}	</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="积木画" tabindex="-1"><a class="header-anchor" href="#积木画"><span>积木画</span></a></h2>
<p>动态规划题</p>
<p>这题很难推出状态的转移方程</p>
<p>假设当前点为i，用v[i]表示当前满足的个数</p>
<ul>
<li>若i-1全部铺满，则v[i] = v[i-1]</li>
<li>若i-1一个都没有铺，则v[i] = v[i - 2]</li>
<li>若i-1只铺满了一半，则v[i] = v[i - 3] * 2，同理也可以推出 v[i] = v[i - 4] * 2</li>
</ul>
<p>于是：</p>
<p>v[i] = v[i - 1] + v[i - 2] + v[i - 3] * 2 + v[i - 4] * 2 + ... + 2 * v[1]</p>
<p>v[i - 1] = v[i - 2] + v[i - 3] + v[i - 4] * 2 + ... + 2 * v[1]</p>
<p>两式相减得出：<strong>v[i] = v[i - 1] * 2 + v[i - 3]</strong></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res = N;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	vector&lt;int&gt; v(a);</span>
<span class="line">	v[1] = 1, v[2] = 2, v[3] = 5;  </span>
<span class="line">	for(int i = 4; i &lt;= a; i++){</span>
<span class="line">		v[i] = (2 * v[i - 1] % 1000000007  + v[i - 3] % 1000000007) % 1000000007;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; v[a] &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扫雷" tabindex="-1"><a class="header-anchor" href="#扫雷"><span>扫雷</span></a></h2>
<p>BFS 暴力法能过 40% 的样例</p>
<p>优化是在队列遍历的进行二分查找，<s>我就不会了</s></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res;</span>
<span class="line">struct p{</span>
<span class="line">	int x, y, num;</span>
<span class="line">}n[N],v[N];</span>
<span class="line">int flag[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">    scanf(&quot;%d%d&quot;,&amp;a, &amp;b);</span>
<span class="line">    queue&lt;pair&lt;int, int&gt;&gt; q;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">    	scanf(&quot;%lld%lld%lld&quot;,&amp;n[i].x, &amp;n[i].y, &amp;n[i].num);</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; b; i++){</span>
<span class="line">		scanf(&quot;%lld%lld%lld&quot;,&amp;v[i].x, &amp;v[i].y, &amp;v[i].num);</span>
<span class="line">		q.push({i, 1});	</span>
<span class="line">	}</span>
<span class="line">	while(!q.empty()){</span>
<span class="line">		auto top = q.front();</span>
<span class="line">		q.pop();</span>
<span class="line">		int f = top.first, s = top.second;</span>
<span class="line">		int xx, yy, rr;</span>
<span class="line">		if(s == 1){</span>
<span class="line">			xx = v[f].x, yy = v[f].y, rr = v[f].num;</span>
<span class="line">		} else {</span>
<span class="line">			xx = n[f].x, yy = n[f].y, rr = n[f].num;</span>
<span class="line">		}</span>
<span class="line">		for(int i = 0; i &lt; a; i++){</span>
<span class="line">			if(!flag[i] &amp;&amp; (ll)(n[i].x - xx)*(n[i].x - xx) + (ll)(n[i].y - yy) * (n[i].y - yy) &lt;= (ll)rr*rr){</span>
<span class="line">				flag[i] = 1;</span>
<span class="line">				q.push({i, 2});</span>
<span class="line">				res ++;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">	}</span>
<span class="line">	printf(&quot;%d&quot;, res);</span>
<span class="line">		</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="李白打酒加强版" tabindex="-1"><a class="header-anchor" href="#李白打酒加强版"><span>李白打酒加强版</span></a></h2>
<p>记忆化搜索 + 剪枝</p>
<p>此题不难想到用DFS，可是只用用DFS的话注意题干条件：<strong>由于答案很大，输出模1000000007</strong>，这时候就需要用其他条件辅助</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b;</span>
<span class="line">long long res = 0;</span>
<span class="line">ll n[101][101][101];</span>
<span class="line">int mod = 1000000007;</span>
<span class="line"></span>
<span class="line">int dfs(int x, int y, int num){</span>
<span class="line">    // num + a - x &gt;  b - y 剪枝，满足当前剩余的数加上需要相乘的数必须小于需要相减的数</span>
<span class="line">    if(x &gt; a || y &gt; b || num &lt; 0 || num + a - x &gt; b - y){</span>
<span class="line">        return 0;</span>
<span class="line">    }</span>
<span class="line">    if(x == a &amp;&amp; y == b - 1 &amp;&amp; num == 1){</span>
<span class="line">        return 1;</span>
<span class="line">    }</span>
<span class="line">    if(n[x][y][num]){</span>
<span class="line">    	return n[x][y][num];</span>
<span class="line">	}</span>
<span class="line">	if(num &gt; 0){</span>
<span class="line">		n[x][y][num] = (dfs(x + 1, y, num * 2) % mod + dfs(x, y + 1, num - 1) % mod) % mod;</span>
<span class="line">	} else {</span>
<span class="line">		n[x][y][num] = dfs(x + 1, y, num * 2) % mod;</span>
<span class="line">	}</span>
<span class="line">	return n[x][y][num];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    cout &lt;&lt; dfs(0, 0, 2) &lt;&lt; endl;</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


