import{_ as s,c as i,a as l,o as a}from"./app-C3KrGAW2.js";const e={};function t(c,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="牛客小白月赛84" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛84"><span>牛客小白月赛84</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-05-08</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> ## 打靶 <p>签到题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		cin &gt;&gt; b &gt;&gt; x &gt;&gt; y &gt;&gt; z;</span>
<span class="line">		if(y &gt; z){</span>
<span class="line">			cout &lt;&lt; &quot;No&quot; &lt;&lt; endl;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; (b - x &gt;= z - y ? &quot;Yes&quot; : &quot;No&quot;) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小蓝的疑惑" tabindex="-1"><a class="header-anchor" href="#小蓝的疑惑"><span>小蓝的疑惑</span></a></h2><p>只有 gcd % gcd == 0 的数才有答案，否则输出-1</p><p>找出规律可以知道，要让a最小，那么只有最大公约数为a的时候最小；要让b也最小 ，a和b的最小公倍数为x，只有b为最小公倍数的时候最小</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
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
<span class="line">	while(a--){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		if(y % x != 0){</span>
<span class="line">			cout &lt;&lt; -1 &lt;&lt; endl;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		cout &lt;&lt; x &lt;&lt; &quot; &quot; &lt;&lt; y &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k级序列" tabindex="-1"><a class="header-anchor" href="#k级序列"><span>k级序列</span></a></h2><p>设当前下标为i，分两种情况</p><ul><li>当前数比前一个数大的时候，就取 min(v[i - 1], v[i] - k);</li><li>当前数比前一个数小的时候 <ul><li>若 v[i] + k 任然小于 v[i - 1] 就是不满足条件的输出No</li><li>否则，就取 min(v[i] + k, v[i - 1]);</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		vector&lt;int&gt; v(x);</span>
<span class="line">		for(int i = 0; i &lt; x; i++){</span>
<span class="line">			cin &gt;&gt; v[i];</span>
<span class="line">		}</span>
<span class="line">		if(x == 1){</span>
<span class="line">			cout &lt;&lt; &quot;Yes&quot; &lt;&lt; endl;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">		int flag = 1;</span>
<span class="line">		v[0] -= y; </span>
<span class="line">		for(int i = 1; i &lt; x; i++){</span>
<span class="line">			if(v[i] &gt;= v[i - 1]){</span>
<span class="line">				v[i] = max(v[i] - y, v[i - 1]);</span>
<span class="line">			} else {</span>
<span class="line">				if(v[i] + y &lt; v[i - 1]){</span>
<span class="line">					flag = 0;</span>
<span class="line">					break;	</span>
<span class="line">				}</span>
<span class="line">				v[i] = min(v[i] + y, v[i - 1]);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; (flag ? &quot;Yes&quot; : &quot;No&quot;) &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse"><span>Reverse</span></a></h2><p>先遍历找出现在有多少连续的1段，设置为 res。两端分分开判断，其次判断中间区间</p><p>设当左右下标为x，y，分情况讨论，这里只讨论 v[x] != v[y]，因为相等的情况一致讨论没意义</p><ul><li>若 x == 1，若判断 v[x] == 1并且 v[y + 1] == v[x]，就需要 res--；若 v[x] == 0 并且 v[y + 1] != v[x]，则 res ++;</li><li>若 y == a，判断同上</li><li>若 v[x - 1] == v[x] 并且 v[y] == v[y + 1]，则 res --; 若v[x - 1] != v[x] 并且 v[y] != v[y + 1]，则 res ++;</li></ul><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int res = 0, flag = 0;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;char&gt; v(a);</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		cin &gt;&gt; v[i];</span>
<span class="line">		if(v[i] == &#39;1&#39; &amp;&amp; !flag){</span>
<span class="line">			res ++, flag = 1;</span>
<span class="line">		} else if(v[i ] == &#39;0&#39;) flag = 0;</span>
<span class="line">	}</span>
<span class="line">	while(b --){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		int cot = res;</span>
<span class="line">		if(v[x] != v[y]){</span>
<span class="line">			if(x == 1){</span>
<span class="line">				if(y != a &amp;&amp; v[x] == &#39;0&#39; &amp;&amp; v[y + 1] != v[x]) cot ++;</span>
<span class="line">				else if(y != a &amp;&amp; v[x] == &#39;1&#39; &amp;&amp; v[y + 1] == v[x]) cot --;</span>
<span class="line">			} else if(y == a){</span>
<span class="line">				if(x != 1 &amp;&amp; v[y] == &#39;0&#39; &amp;&amp; v[x - 1] != v[y]) cot ++;	</span>
<span class="line">				else if(x != 1 &amp;&amp; v[y] == &#39;1&#39; &amp;&amp; v[x - 1] == v[y]) cot --;			</span>
<span class="line">			} else {</span>
<span class="line">				if(v[x - 1] == v[x] &amp;&amp; v[y] == v[y + 1]){</span>
<span class="line">					cot ++; </span>
<span class="line">				} else if(v[x - 1] != v[x] &amp;&amp; v[y] != v[y + 1]){</span>
<span class="line">					cot --;</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; cot &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dog-vs-cat" tabindex="-1"><a class="header-anchor" href="#dog-vs-cat"><span>Dog vs Cat</span></a></h2><p>这题也是需要分开讨论，难就难在需要讨论个数为2的特殊情况</p><ul><li>当个数为2的时候 <ul><li>若两个数相差1，且最小的不是0，输出 Cat</li><li>否则输出Dog</li></ul></li><li>其他情况：算出所有数与1的差之和，设为 res；计算数组个数的一半，若是奇数需要 / 2 + 1，设为 cc；计算 res + cc 是否是奇数，若是奇数输出 Dog，否则输出 Cat</li></ul><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int a;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		vector&lt;int&gt; v(b);</span>
<span class="line">		ll res = 0;</span>
<span class="line">		int cot = 0;</span>
<span class="line">		for(int i = 0; i &lt; b; i++){</span>
<span class="line">			cin &gt;&gt; v[i];</span>
<span class="line">			if(v[i] != 0){</span>
<span class="line">				res += v[i] - 1;</span>
<span class="line">			} else {</span>
<span class="line">				cot ++;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		if(b == 2){</span>
<span class="line">            sort(v.begin(),v.end());</span>
<span class="line">			if(v[0] &amp;&amp; v[0] + 1 == v[1]) cout &lt;&lt; &quot;Cat&quot; &lt;&lt; endl;</span>
<span class="line">			else cout &lt;&lt; &quot;Dog&quot; &lt;&lt; endl;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">        </span>
<span class="line">        int ban;</span>
<span class="line">        if(b % 2 == 0) ban = b / 2;</span>
<span class="line">        else ban = b / 2 + 1;</span>
<span class="line">		if(cot &gt;= ban){</span>
<span class="line">			cout &lt;&lt; &quot;Dog&quot; &lt;&lt; endl;</span>
<span class="line">		} else {</span>
<span class="line">			int cc = ban - cot;</span>
<span class="line">			if((res + cc) % 2 == 0) cout &lt;&lt; &quot;Cat&quot; &lt;&lt; endl;</span>
<span class="line">			else cout &lt;&lt; &quot;Dog&quot; &lt;&lt; endl; </span>
<span class="line">		}</span>
<span class="line">	</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22)])])}const p=s(e,[["render",t]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E7%89%9B%E5%AE%A2%E5%B0%8F%E7%99%BD%E6%9C%88%E8%B5%9B84.html","title":"牛客小白月赛84","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"小蓝的疑惑","slug":"小蓝的疑惑","link":"#小蓝的疑惑","children":[]},{"level":2,"title":"k级序列","slug":"k级序列","link":"#k级序列","children":[]},{"level":2,"title":"Reverse","slug":"reverse","link":"#reverse","children":[]},{"level":2,"title":"Dog vs Cat","slug":"dog-vs-cat","link":"#dog-vs-cat","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/牛客小白月赛84.md"}');export{p as comp,v as data};
