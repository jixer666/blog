import{_ as s,c as i,a as l,o as a}from"./app-B9IyngIV.js";const e={};function d(t,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="牛客小白月赛92" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛92"><span>牛客小白月赛92</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-05-04</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> 本次算法赛主题是MC，一下就来兴趣了 <h2 id="获得木头" tabindex="-1"><a class="header-anchor" href="#获得木头"><span>获得木头</span></a></h2><p>签到题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z, res;</span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	cout &lt;&lt; a * 8 &lt;&lt; endl;	</span>
<span class="line">   </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="采矿时间到" tabindex="-1"><a class="header-anchor" href="#采矿时间到"><span>采矿时间到！</span></a></h2><p>wa了一次，这题坑点在于会有一种这样的情况</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#################*##</span>
<span class="line">#########*##########</span>
<span class="line">....................</span>
<span class="line">#####*######**######</span>
<span class="line">#*##########*#######</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最外层和最内层都有矿石，此时就只需要消耗2体力就能够挖到两个矿石</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z, res;</span>
<span class="line"> char v[1010][1010];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int idx = 0;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	for(int i = 0; i &lt; 5; i++){</span>
<span class="line">		for(int j = 0; j &lt; a; j++){</span>
<span class="line">			cin &gt;&gt; v[i][j];</span>
<span class="line">			if(v[i][j] == &#39;*&#39;) idx ++;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	int cot = 0, res = 0;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		if(v[1][i] == &#39;*&#39;) cot ++;</span>
<span class="line">		if(v[3][i] == &#39;*&#39;) cot ++; </span>
<span class="line">	} </span>
<span class="line">	if(cot &gt; b){</span>
<span class="line">		cout &lt;&lt; b &lt;&lt; endl;</span>
<span class="line">		return 0; </span>
<span class="line">	}</span>
<span class="line">	int cc = (b - cot) / 2;</span>
<span class="line">	cout &lt;&lt; min(cc, idx - cot) + cot &lt;&lt; endl;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="耕种时间到" tabindex="-1"><a class="header-anchor" href="#耕种时间到"><span>耕种时间到！</span></a></h2><p>这题是个模拟题，很容易想到模拟的过程</p><p>我在赛时把分解的过程直接化了，简单的想成了小麦种子的数量为<code>收割次数总次数 * 2</code>，正解是<code>pow(2, 收割次数总次数 )</code></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int idx = 0;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	vector&lt;int&gt; v(a);</span>
<span class="line">	unordered_map&lt;int, ll&gt; m; </span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		cin &gt;&gt; v[i];</span>
<span class="line">	}</span>
<span class="line">	cin &gt;&gt; b;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		ll idx = 0, cnt = 1;</span>
<span class="line">		while(v[i] &gt; b){</span>
<span class="line">			v[i] = ceil(v[i] * 1.0 / 3);</span>
<span class="line">			idx ++;</span>
<span class="line">			cnt *= 2;</span>
<span class="line">		}</span>
<span class="line">		if(v[i] == b){</span>
<span class="line">			m[idx] += cnt;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	ll res = 0;</span>
<span class="line">	for(auto i: m){</span>
<span class="line">		res = max(res, i.second);</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="探索的时光" tabindex="-1"><a class="header-anchor" href="#探索的时光"><span>探索的时光</span></a></h2><p>这题我想了很多思考思路：</p><ul><li><p>前缀和</p></li><li><p>dp</p></li><li><p>推公式，找规律</p></li></ul><p>但是都没法实现，问题就出在了推公式，吃了没文化的亏。正解也是推公式，我遇到求和符合就卡了，不知道怎么化简</p><p>最终推出来的结论：（@为+号）</p><p><img src="https://img2.imgtp.com/2024/05/04/ycrX8KeI.png" alt=""></p><p>你以为这就结束了？这题还需要注意坑点是数据范围！！！</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z, res;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	vector&lt;int&gt; v(a + 1);</span>
<span class="line">	ll all = 0, all2 = 0, all3 = 0, res = 0x3f3f3f3f3f3f3f3f;</span>
<span class="line">	for(ll i = 1; i &lt;= a; i++){</span>
<span class="line">		cin &gt;&gt; v[i];</span>
<span class="line">		all += v[i];</span>
<span class="line">		all2 += i * v[i];</span>
<span class="line">		all3 += i * i * v[i];</span>
<span class="line">	}</span>
<span class="line">	for(ll i = 1; i &lt;= a; i++){</span>
<span class="line">		res = min(res, i * i * all + all3 - 2 * i * all2);</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl; </span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="来硬的" tabindex="-1"><a class="header-anchor" href="#来硬的"><span>来硬的</span></a></h2><p>背包问题</p><p>首先从数据范围上很容易看出是DP问题，需要双循环更新</p><p><s>其次我知道它是DP，但我设计不出来状态转移方程，淦</s></p><p>设计状态：<code>dp[i][j][0/1]</code> 表示前i个煤炭，获得j个矿石的最短时间，0/1表示是否使用过魔法</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">struct p{</span>
<span class="line">	int x, y;</span>
<span class="line">}n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;vector&lt;vector&lt;ll&gt;&gt;&gt; dp(a + 1, vector&lt;vector&lt;ll&gt;&gt;(b + 1, vector&lt;ll&gt;(2, 0x3f3f3f3f3f3f3f3f)));</span>
<span class="line">	dp[0][0][0] = 0;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		cin &gt;&gt; n[i].x &gt;&gt; n[i].y;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 1;  i &lt;= a; i++){</span>
<span class="line">		for(int j = 0; j &lt;= b; j++){</span>
<span class="line">			dp[i][j][0] = min(dp[i - 1][j][0], dp[i - 1][max(j - n[i].x, 0)][0] + n[i].y);</span>
<span class="line">			dp[i][j][1] = min({dp[i - 1][j][1], dp[i - 1][max(j - n[i].x * 2, 0)][0] + n[i].y / 2, dp[i - 1][max(j - n[i].x, 0)][1] + n[i].y});</span>
<span class="line">		} </span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	cout &lt;&lt; min(dp[a][b][1], dp[a][b][0]) &lt;&lt; endl;	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const p=s(e,[["render",d]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E7%89%9B%E5%AE%A2%E5%B0%8F%E7%99%BD%E6%9C%88%E8%B5%9B92.html","title":"牛客小白月赛92","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"获得木头","slug":"获得木头","link":"#获得木头","children":[]},{"level":2,"title":"采矿时间到！","slug":"采矿时间到","link":"#采矿时间到","children":[]},{"level":2,"title":"耕种时间到！","slug":"耕种时间到","link":"#耕种时间到","children":[]},{"level":2,"title":"探索的时光","slug":"探索的时光","link":"#探索的时光","children":[]},{"level":2,"title":"来硬的","slug":"来硬的","link":"#来硬的","children":[]}],"git":{},"filePathRelative":"算法/牛客小白月赛92.md"}');export{p as comp,v as data};
