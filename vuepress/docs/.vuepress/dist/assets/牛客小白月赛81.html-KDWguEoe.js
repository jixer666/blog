import{_ as s,c as i,a as l,o as a}from"./app-C3KrGAW2.js";const e={};function t(c,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="牛客小白月赛81" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛81"><span>牛客小白月赛81</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-04-09</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div><p>做了几道练手题，感觉有一两道题颇有收获，于记一笔</p><h2 id="小辰打比赛" tabindex="-1"><a class="header-anchor" href="#小辰打比赛"><span>小辰打比赛</span></a></h2><p>贪心秒了</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;int&gt; v(a);</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		cin &gt;&gt; v[i];</span>
<span class="line">	} </span>
<span class="line">	</span>
<span class="line">	sort(v.begin(), v.end());</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		if(v[i] &lt; b) res += v[i];</span>
<span class="line">		else break;</span>
<span class="line">	} </span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小辰的圣剑" tabindex="-1"><a class="header-anchor" href="#小辰的圣剑"><span>小辰的圣剑</span></a></h2><p>这题卡了半天，后面发现数据范围很小，两个循环暴力拿下</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">//int a, b, x, y, res;</span>
<span class="line">//int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	ll n, m, u, res = 0;</span>
<span class="line">	cin &gt;&gt; n &gt;&gt; m &gt;&gt; u;</span>
<span class="line">	vector&lt;int&gt; v(n), n1(n);</span>
<span class="line">	for(int i = 0; i &lt; n; i++) cin &gt;&gt; v[i];</span>
<span class="line">	for(int i = 0; i &lt; n; i++) cin &gt;&gt; n1[i];</span>
<span class="line">	for(int i = 0; i &lt; n; i++){</span>
<span class="line">		ll cot = 0, lj = 0, ry = 0;</span>
<span class="line">		for(int j = i; j &lt; n; j++){</span>
<span class="line">			if(v[j] + lj &lt;= m &amp;&amp; n1[j] + ry &lt;= u){</span>
<span class="line">				cot ++;</span>
<span class="line">				lj += v[j];</span>
<span class="line">				ry += n1[j];</span>
<span class="line">			} else {</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		res = max(res, cot);</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="陶陶学算术" tabindex="-1"><a class="header-anchor" href="#陶陶学算术"><span>陶陶学算术</span></a></h2><p>这题参考题解，数据范围很大，除的话会超出范围，<s>我一直卡在这不知道范围问题</s></p><p>我们需要对这个公式进行改变</p><p>res1 = x1x2x3/y1y2y3 = A / B</p><p>res2 = i1i2i3/j1j2j3 = C / D</p><p>=&gt; A * D = B * C ，将除法转为乘法并用long long存放</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	ll cot1 = 1, cot2 = 1;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		if(x == 1) cot1 = cot1 * y % M;</span>
<span class="line">		else cot2 = cot2 * y % M; </span>
<span class="line">	}</span>
<span class="line">	cin &gt;&gt; b;</span>
<span class="line">	while(b --){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		if(x == 1) cot2 = cot2 * y % M;</span>
<span class="line">		else cot1 = cot1 * y % M; </span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; (cot1 == cot2 ? &quot;YES&quot; : &quot;NO&quot;) &lt;&lt; endl;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小辰的借钱计划" tabindex="-1"><a class="header-anchor" href="#小辰的借钱计划"><span>小辰的借钱计划</span></a></h2><p>这题用到数学期望，不会</p><p>期望 = 1 / 符号条件的 * 符合条件的数</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		int idx = 0;</span>
<span class="line">		for(int i = 1; i &lt;= x - y; i++){</span>
<span class="line">			if(y % i == 0 || i % y == 0){</span>
<span class="line">				idx ++;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		double w = 0.0, ra = 1.0 / idx;</span>
<span class="line">		for(int i = 1; i &lt;= x - y; i++){</span>
<span class="line">			if(y % i == 0 || i % y == 0){</span>
<span class="line">				w += i * ra;</span>
<span class="line">			}	</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; (w &gt; y ? &quot;YES&quot;:&quot;NO&quot;) &lt;&lt; endl;	</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)])])}const p=s(e,[["render",t]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E7%89%9B%E5%AE%A2%E5%B0%8F%E7%99%BD%E6%9C%88%E8%B5%9B81.html","title":"牛客小白月赛81","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"小辰打比赛","slug":"小辰打比赛","link":"#小辰打比赛","children":[]},{"level":2,"title":"小辰的圣剑","slug":"小辰的圣剑","link":"#小辰的圣剑","children":[]},{"level":2,"title":"陶陶学算术","slug":"陶陶学算术","link":"#陶陶学算术","children":[]},{"level":2,"title":"小辰的借钱计划","slug":"小辰的借钱计划","link":"#小辰的借钱计划","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/牛客小白月赛81.md"}');export{p as comp,v as data};
