import{_ as s,c as i,a as l,o as a}from"./app-BKm_FHq2.js";const e={};function c(d,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="牛客小白月赛91" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛91"><span>牛客小白月赛91</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-04-29</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> ### Bingbong的化学世界 <p>找出几个图形不同的点，根据不同的点来输出就很简单了</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	char n[7][7];</span>
<span class="line">	for(int i = 0; i &lt; 6; i++){</span>
<span class="line">		for(int j = 0; j &lt; 7; j++){</span>
<span class="line">			cin &gt;&gt; n[i][j];</span>
<span class="line">		}</span>
<span class="line">	}	</span>
<span class="line">	if(n[0][3] == &#39;.&#39;) cout &lt;&lt; &quot;o&quot; &lt;&lt; endl;</span>
<span class="line">	else if(n[5][3] == &#39;.&#39;) cout &lt;&lt; &quot;m&quot; &lt;&lt; endl;</span>
<span class="line">	else cout &lt;&lt; &quot;p&quot; &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bingbong的数数世界" tabindex="-1"><a class="header-anchor" href="#bingbong的数数世界"><span>Bingbong的数数世界</span></a></h3><p>思维题，需要我们找出最终的胜利者</p><p>只要这个数是奇数并且这个数除以2的结果也是偶数的话就是<code>Bing</code>，否则就是<code>Bong</code></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		if(b / 2 % 2 == 1 || b % 2 == 1){</span>
<span class="line">			cout &lt;&lt; &quot;Bing&quot; &lt;&lt; endl;</span>
<span class="line">		} else {</span>
<span class="line">			cout &lt;&lt; &quot;Bong&quot; &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bingbong的蛋仔世界" tabindex="-1"><a class="header-anchor" href="#bingbong的蛋仔世界"><span>Bingbong的蛋仔世界</span></a></h3><p>这题一看到需要向四个方位移动，我立马就想到了DFS，可是仔细读题后发现后并不需要。</p><p>只需要判断某个点是否能在边界消失完到达中心点即可；该点到中心点的距离 = 横坐标之差 + 纵坐标之差</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b &gt;&gt; x;</span>
<span class="line">	int midx = a / 2, midy = b / 2;</span>
<span class="line">	int mcot = max(midx, midy);</span>
<span class="line">	while(x --){</span>
<span class="line">		int n1, n2;</span>
<span class="line">		cin &gt;&gt; n1 &gt;&gt; n2;</span>
<span class="line">		n1 --, n2 --;</span>
<span class="line">		int cot = fabs(n1 - midx) + fabs(n2 - midy);</span>
<span class="line">		if(cot &lt;= mcot) res ++;</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bingbong的奇偶世界" tabindex="-1"><a class="header-anchor" href="#bingbong的奇偶世界"><span>Bingbong的奇偶世界</span></a></h3><p><s>每次到差不多第三，四个题的位置总是会卡</s>，这题我赛时的思路和题解的思路大差不差，估计某处细节没考虑不到导致一直卡。</p><p>思路：比如当前点为<code>i</code>，那么这点之前的所有满足条件的个数有<code>pow(i - 1, 2) + 1 - 含有前导0的数</code> ，每次循环遍历的时候都需要判断是否是0、奇数、偶数。并且在每次循环的时候就需要维护<code>pow</code>和<code>前导0的数</code>这两个值，不能直接通过<code>pow</code>来计算因为会超时，我感觉我g应该就出在这里。</p><p>我的代码</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line">int mod = 1e9 + 7;</span>
<span class="line">ll n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	ll cot = 1, cc = 1;</span>
<span class="line">	char c;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		cin &gt;&gt; c;</span>
<span class="line">		if((c - &#39;0&#39;) % 2 == 0){</span>
<span class="line">			n[i] = (n[i - 1] + cc + 1 - cot) % mod;</span>
<span class="line">			if(c == &#39;0&#39;){</span>
<span class="line">				cot = cot * 2 % mod;</span>
<span class="line">			}</span>
<span class="line">		} else {</span>
<span class="line">			n[i] = n[i - 1];</span>
<span class="line">		}</span>
<span class="line">		cc = cc * 2 % mod;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; n[a] &lt;&lt; endl; </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正解</p><p>思路是每次循环的时候就去掉了0的前导数的值，当不是0的时候就直接相加，不需要想我的思路那样单独来减，容易出错。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line">int mod = 1e9 + 7;</span>
<span class="line">ll n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	ll cot = 0, cc = 0;</span>
<span class="line">	char c;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		cin &gt;&gt; c;</span>
<span class="line">		if(c == &#39;0&#39;){</span>
<span class="line">			cot = (cot + cc + 1) % mod;</span>
<span class="line">			cc = cc * 2 % mod; </span>
<span class="line">		} else if((c - &#39;0&#39;) % 2 == 0){</span>
<span class="line">			cot = (cot + cc + 1) % mod;;</span>
<span class="line">			cc = (cc * 2 + 1) % mod; </span>
<span class="line">		} else {</span>
<span class="line">			cc = (cc * 2 + 1) % mod;</span>
<span class="line">		}</span>
<span class="line"></span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; cot &lt;&lt; endl; </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)])])}const p=s(e,[["render",c]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E7%89%9B%E5%AE%A2%E5%B0%8F%E7%99%BD%E6%9C%88%E8%B5%9B91.html","title":"牛客小白月赛91","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Bingbong的数数世界","slug":"bingbong的数数世界","link":"#bingbong的数数世界","children":[]},{"level":3,"title":"Bingbong的蛋仔世界","slug":"bingbong的蛋仔世界","link":"#bingbong的蛋仔世界","children":[]},{"level":3,"title":"Bingbong的奇偶世界","slug":"bingbong的奇偶世界","link":"#bingbong的奇偶世界","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/牛客小白月赛91.md"}');export{p as comp,v as data};
