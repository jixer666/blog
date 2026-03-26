import{_ as s,c as i,a as l,o as a}from"./app-C3KrGAW2.js";const e={};function t(d,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="_2023年团体程序设计天梯赛" tabindex="-1"><a class="header-anchor" href="#_2023年团体程序设计天梯赛"><span>2023年团体程序设计天梯赛</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-07-27</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> ## **L1-089 最好的文档** <div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">    printf(&quot;Good code is its own best documentation.&quot;); </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-090-什么是机器学习" tabindex="-1"><a class="header-anchor" href="#l1-090-什么是机器学习"><span><strong>L1-090 什么是机器学习</strong></span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	res = a + b;</span>
<span class="line">	cout &lt;&lt; res - 16 &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; res - 3 &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; res - 1 &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl; </span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-091-程序员买包子" tabindex="-1"><a class="header-anchor" href="#l1-091-程序员买包子"><span><strong>L1-091 程序员买包子</strong></span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	string x;</span>
<span class="line">	int n, m, k;</span>
<span class="line">	cin &gt;&gt; n &gt;&gt; x &gt;&gt; m &gt;&gt; k;</span>
<span class="line">	if(k == n){</span>
<span class="line">		cout &lt;&lt; &quot;mei you mai &quot; &lt;&lt; x &lt;&lt; &quot; de&quot; &lt;&lt; endl;</span>
<span class="line">	} else if(k == m){</span>
<span class="line">		cout &lt;&lt; &quot;kan dao le mai &quot; &lt;&lt; x &lt;&lt; &quot; de&quot; &lt;&lt; endl;</span>
<span class="line">	} else cout &lt;&lt; &quot;wang le zhao mai &quot; &lt;&lt; x &lt;&lt; &quot; de&quot; &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-092-进化论" tabindex="-1"><a class="header-anchor" href="#l1-092-进化论"><span><strong>L1-092 进化论</strong></span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int x;</span>
<span class="line">	cin &gt;&gt; x;</span>
<span class="line">	while(x--){</span>
<span class="line">		int m, n, k;</span>
<span class="line">		cin &gt;&gt; m &gt;&gt; n &gt;&gt; k;</span>
<span class="line">		if(m * n == k) cout &lt;&lt; &quot;Lv Yan&quot; &lt;&lt; endl;</span>
<span class="line">		else if(m + n == k) cout &lt;&lt; &quot;Tu Dou&quot; &lt;&lt; endl;</span>
<span class="line">		else cout &lt;&lt; &quot;zhe du shi sha ya!&quot; &lt;&lt; endl; </span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-093-猜帽子游戏" tabindex="-1"><a class="header-anchor" href="#l1-093-猜帽子游戏"><span><strong>L1-093 猜帽子游戏</strong></span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int x;</span>
<span class="line">	cin &gt;&gt; x;</span>
<span class="line">	vector&lt;int&gt; v(x);</span>
<span class="line">	for(int i = 0; i &lt; x; i++) cin &gt;&gt; v[i];</span>
<span class="line">	int y;</span>
<span class="line">	cin &gt;&gt; y;</span>
<span class="line">	while(y--){</span>
<span class="line">		int cot = 0, flag = 1;</span>
<span class="line">		for(int i = 0; i &lt; x; i++){</span>
<span class="line">			int num;</span>
<span class="line">			cin &gt;&gt; num;</span>
<span class="line">			if(num == 0) cot ++;</span>
<span class="line">			if(num != 0 &amp;&amp; num != v[i]) flag = 0;</span>
<span class="line">		}</span>
<span class="line">		if(flag &amp;&amp; cot != x) cout &lt;&lt; &quot;Da Jiang!!!&quot; &lt;&lt; endl;</span>
<span class="line">		 else cout &lt;&lt; &quot;Ai Ya&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-094-剪切粘贴" tabindex="-1"><a class="header-anchor" href="#l1-094-剪切粘贴"><span><strong>L1-094 剪切粘贴</strong></span></a></h2><p>这题是最花费时间的，难度不难，就是字符串的边界取值太折磨人了</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	string str;</span>
<span class="line">	cin &gt;&gt; str &gt;&gt; a;</span>
<span class="line">	int len = str.size();</span>
<span class="line">	while(a--){</span>
<span class="line">		string s1, s2;</span>
<span class="line">		int m, n;</span>
<span class="line">		cin &gt;&gt; m &gt;&gt; n &gt;&gt; s1 &gt;&gt; s2;</span>
<span class="line">		string sq = str.substr(m - 1, n - m + 1);</span>
<span class="line">		string res_ = str.substr(0, m - 1) + str.substr(n, len);</span>
<span class="line">		string all = s1 + s2;</span>
<span class="line">		int f = res_.find(s1), s = res_.find(s2), fs = res_.find(all);</span>
<span class="line">		if(fs == -1){</span>
<span class="line">			str = res_ + sq;</span>
<span class="line">		} else {</span>
<span class="line">			string ss1 = res_.substr(0, fs), ss2 = res_.substr(fs + all.size(), res_.size());</span>
<span class="line">			str = ss1 + s1 + sq + s2 + ss2;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; str &lt;&lt; endl; </span>
<span class="line">    </span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-095-分寝室" tabindex="-1"><a class="header-anchor" href="#l1-095-分寝室"><span><strong>L1-095 分寝室</strong></span></a></h2><p>这题没考虑到 <code>不允许单人住一间寝室</code> 这一条件和浮点数问题(分母为0了)。</p><p>加个边界判断<code>i &lt;= x - 1</code> 解决了浮点数问题，<code> a != i &amp;&amp; b != x - i</code> 解决单人住一间的问题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	res = 100010; </span>
<span class="line">	int x, r = 0, l = 0;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b &gt;&gt; x;</span>
<span class="line">	for(int i = 1; i &lt;= x - 1; i++){</span>
<span class="line">		if(a % i == 0 &amp;&amp; b % (x - i) == 0 &amp;&amp; a != i &amp;&amp; b != x - i){</span>
<span class="line">			int cot = fabs(a / i - b / (x - i)); </span>
<span class="line">			if(cot &lt; res){</span>
<span class="line">				res = cot;</span>
<span class="line">				r = i, l = x - i;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	if(l == 0 &amp;&amp; r == 0) cout &lt;&lt; &quot;No Solution&quot; &lt;&lt; endl;</span>
<span class="line">	else cout &lt;&lt; r &lt;&lt; &quot; &quot; &lt;&lt; l &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l1-096-谁管谁叫爹" tabindex="-1"><a class="header-anchor" href="#l1-096-谁管谁叫爹"><span><strong>L1-096 谁管谁叫爹</strong></span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, res; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int x;</span>
<span class="line">	cin &gt;&gt; x;</span>
<span class="line">	while(x --){</span>
<span class="line">		char res;</span>
<span class="line">		int cot = 0, flag = 0;</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">		int a_ = a, b_ = b;</span>
<span class="line">		while(a_){</span>
<span class="line">			cot += a_ % 10;</span>
<span class="line">			a_ /= 10;</span>
<span class="line">		}</span>
<span class="line">		if(b % cot == 0){</span>
<span class="line">			res = &#39;B&#39;;</span>
<span class="line">			flag ++;</span>
<span class="line">		}</span>
<span class="line">		cot = 0;</span>
<span class="line">		while(b_){</span>
<span class="line">			cot += b_ % 10;</span>
<span class="line">			b_ /= 10;	</span>
<span class="line">		}</span>
<span class="line">		if(a % cot == 0){</span>
<span class="line">			res = &#39;A&#39;;</span>
<span class="line">			flag ++;	</span>
<span class="line">		} </span>
<span class="line">		if(flag == 1){</span>
<span class="line">			cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">		} else {</span>
<span class="line">			cout &lt;&lt;  (a &gt; b ? &quot;A&quot; : &quot;B&quot;) &lt;&lt; endl ; </span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l2-045-堆宝塔" tabindex="-1"><a class="header-anchor" href="#l2-045-堆宝塔"><span><strong>L2-045 堆宝塔</strong></span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b; </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int num = 0, maxx = 0;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	stack&lt;int&gt; s, s2;</span>
<span class="line">	vector&lt;int&gt; v(a);</span>
<span class="line">	for(int i = 0; i &lt; a; i++) cin &gt;&gt; v[i];</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		if(!s.empty()){</span>
<span class="line">			if(s.top() &gt; v[i]) s.push(v[i]);</span>
<span class="line">			else {</span>
<span class="line">				if(s2.size()){</span>
<span class="line">					if(s2.top() &lt; v[i]){</span>
<span class="line">						s2.push(v[i]);</span>
<span class="line">					} else {</span>
<span class="line">						int cot = 0;</span>
<span class="line">						while(s.size()){</span>
<span class="line">							s.pop();</span>
<span class="line">							cot ++;</span>
<span class="line">						}</span>
<span class="line">						maxx = max(maxx, cot);</span>
<span class="line">						num ++;</span>
<span class="line">						while(s2.size() &amp;&amp; s2.top() &gt; v[i]){</span>
<span class="line">							s.push(s2.top());</span>
<span class="line">							s2.pop();	</span>
<span class="line">						}</span>
<span class="line">						s.push(v[i]);</span>
<span class="line">					}</span>
<span class="line">				} else {</span>
<span class="line">					s2.push(v[i]);</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">		} else {</span>
<span class="line">			s.push(v[i]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	int cot = s.size();</span>
<span class="line">	if(cot){</span>
<span class="line">		num ++;</span>
<span class="line">		maxx = max(maxx, cot);</span>
<span class="line">	}</span>
<span class="line">	cot = s2.size();</span>
<span class="line">	if(cot){</span>
<span class="line">		num ++;</span>
<span class="line">		maxx = max(maxx, cot); </span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; num &lt;&lt; &quot; &quot; &lt;&lt; maxx &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l2-046-天梯赛的赛场安排" tabindex="-1"><a class="header-anchor" href="#l2-046-天梯赛的赛场安排"><span><strong>L2-046 天梯赛的赛场安排</strong></span></a></h2><p>理解题意还是能混点分的</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b; </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	int res = 0;</span>
<span class="line">	priority_queue&lt;int&gt; q;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		string str;</span>
<span class="line">		int num;</span>
<span class="line">		cin &gt;&gt; str &gt;&gt; num;</span>
<span class="line">		q.push(num % b);</span>
<span class="line">		res += num / b;</span>
<span class="line">		cout &lt;&lt; str &lt;&lt; &quot; &quot; &lt;&lt; ceil(num * 1.0 / b) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	int cot = 0, flag = 1;</span>
<span class="line">	while(q.size()){</span>
<span class="line">		int num = q.top();</span>
<span class="line">		q.pop();</span>
<span class="line">		if(cot + num &lt;= b){</span>
<span class="line">			cot += num;</span>
<span class="line">			flag = 1;</span>
<span class="line">		} else {</span>
<span class="line">			res ++;</span>
<span class="line">			cot = num;</span>
<span class="line">			flag = 0;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	if(!flag){</span>
<span class="line">		res ++;</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line"> </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="l2-048-寻宝图" tabindex="-1"><a class="header-anchor" href="#l2-048-寻宝图"><span><strong>L2-048 寻宝图</strong></span></a></h2><p>dfs模板题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\\n&quot;)</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, flag; </span>
<span class="line">char n[1000][1000];</span>
<span class="line">int st[1000][1000];</span>
<span class="line"></span>
<span class="line">void dfs(int x, int y){</span>
<span class="line">	if(n[x][y] &gt; &#39;1&#39;){</span>
<span class="line">		flag = 1;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	for(int i = 0; i &lt; 4; i++){</span>
<span class="line">		int xx = ix[i] + x, yy = iy[i] + y;</span>
<span class="line">		if(xx &gt;= 0 &amp;&amp; xx &lt; a &amp;&amp; yy &gt;= 0 &amp;&amp; yy &lt; b &amp;&amp; !st[xx][yy] &amp;&amp; n[xx][yy] &gt;= &#39;1&#39;){</span>
<span class="line">			st[xx][yy] = 1;</span>
<span class="line">			dfs(xx, yy);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	int res = 0, cot = 0;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		for(int j = 0; j &lt; b; j++){</span>
<span class="line">			cin &gt;&gt; n[i][j];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		for(int j = 0; j &lt; b; j++){</span>
<span class="line">			if(n[i][j] &gt;= &#39;1&#39; &amp;&amp; !st[i][j]){</span>
<span class="line">				flag = 0;</span>
<span class="line">				st[i][j] = 1;</span>
<span class="line">				dfs(i, j);</span>
<span class="line">				res ++;</span>
<span class="line">				if(flag){</span>
<span class="line">					cot ++;</span>
<span class="line">				}</span>
<span class="line">			} </span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; &quot; &quot; &lt;&lt; cot &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const p=s(e,[["render",t]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/2023%E5%B9%B4%E5%9B%A2%E4%BD%93%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E5%A4%A9%E6%A2%AF%E8%B5%9B.html","title":"2023年团体程序设计天梯赛","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"L1-090 什么是机器学习","slug":"l1-090-什么是机器学习","link":"#l1-090-什么是机器学习","children":[]},{"level":2,"title":"L1-091 程序员买包子","slug":"l1-091-程序员买包子","link":"#l1-091-程序员买包子","children":[]},{"level":2,"title":"L1-092 进化论","slug":"l1-092-进化论","link":"#l1-092-进化论","children":[]},{"level":2,"title":"L1-093 猜帽子游戏","slug":"l1-093-猜帽子游戏","link":"#l1-093-猜帽子游戏","children":[]},{"level":2,"title":"L1-094 剪切粘贴","slug":"l1-094-剪切粘贴","link":"#l1-094-剪切粘贴","children":[]},{"level":2,"title":"L1-095 分寝室","slug":"l1-095-分寝室","link":"#l1-095-分寝室","children":[]},{"level":2,"title":"L1-096 谁管谁叫爹","slug":"l1-096-谁管谁叫爹","link":"#l1-096-谁管谁叫爹","children":[]},{"level":2,"title":"L2-045 堆宝塔","slug":"l2-045-堆宝塔","link":"#l2-045-堆宝塔","children":[]},{"level":2,"title":"L2-046 天梯赛的赛场安排","slug":"l2-046-天梯赛的赛场安排","link":"#l2-046-天梯赛的赛场安排","children":[]},{"level":2,"title":"L2-048 寻宝图","slug":"l2-048-寻宝图","link":"#l2-048-寻宝图","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":3,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"79eec738f6a7524e515e4fe9f201ca1fff237c08","time":1753533208000,"email":"2770063826@qq.com","author":"lijunxi","message":"add gulimall etc."},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/2023年团体程序设计天梯赛.md"}');export{p as comp,v as data};
