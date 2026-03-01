import{_ as s,c as i,a as l,o as a}from"./app-B9IyngIV.js";const e={};function t(c,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="_2022年算法队选拔赛" tabindex="-1"><a class="header-anchor" href="#_2022年算法队选拔赛"><span>2022年算法队选拔赛</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-05-09</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div><p>回顾大二打的算法队选拔的算法赛</p><p>感觉现在做起来很轻松，练题还是有效果的</p><p>题目地址：https://vjudge.net/contest/513277</p><h2 id="a-numbers" tabindex="-1"><a class="header-anchor" href="#a-numbers"><span>A - Numbers</span></a></h2><p>签到题，很清除的记得当时没看清楚题要求，输出化简后的格式，一直没化简....</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z, res;</span>
<span class="line"></span>
<span class="line">int fun(int x, int y){</span>
<span class="line">	return y ? fun(y, x % y) : x;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 2; i &lt;= a - 1; i ++){</span>
<span class="line">		int num = a;</span>
<span class="line">		while(num){</span>
<span class="line">			res += num % i;</span>
<span class="line">			num /= i;</span>
<span class="line">		} </span>
<span class="line">	}</span>
<span class="line">	int cc = fun(res, a - 2);</span>
<span class="line">	cout &lt;&lt; res / cc &lt;&lt; &quot;/&quot; &lt;&lt; (a - 2) / cc &lt;&lt; endl; </span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b-表达式求值" tabindex="-1"><a class="header-anchor" href="#b-表达式求值"><span>B - 表达式求值</span></a></h2><p>不用考虑括号写起来就很nice</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z;</span>
<span class="line">ll res;</span>
<span class="line">stack&lt;ll&gt; s1;</span>
<span class="line">stack&lt;char&gt; s2;</span>
<span class="line">unordered_map&lt;char, int&gt; ump;</span>
<span class="line"></span>
<span class="line">void init(){</span>
<span class="line">	ump[&#39;+&#39;] = 1;</span>
<span class="line">	ump[&#39;*&#39;] = 2;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void fun(char c){</span>
<span class="line">	while(s2.size() &amp;&amp; s1.size() &gt;= 2 &amp;&amp; ump[s2.top()] &gt;= ump[c]){</span>
<span class="line">		ll num1 = s1.top(), cot = 0;</span>
<span class="line">		s1.pop();</span>
<span class="line">		ll num2 = s1.top();</span>
<span class="line">		s1.pop();</span>
<span class="line">		char c = s2.top();</span>
<span class="line">		s2.pop();</span>
<span class="line">		if(c == &#39;+&#39;) cot = num1 + num2;</span>
<span class="line">		else cot = num1 * num2;</span>
<span class="line">		s1.push(cot);</span>
<span class="line">	}	</span>
<span class="line">	s2.push(c);	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void end(){</span>
<span class="line">	while(s2.size() &amp;&amp; s1.size() &gt;= 2){</span>
<span class="line">		ll num1 = s1.top(), cot = 0;</span>
<span class="line">		s1.pop();</span>
<span class="line">		ll num2 = s1.top();</span>
<span class="line">		s1.pop();</span>
<span class="line">		char c = s2.top();</span>
<span class="line">		s2.pop();</span>
<span class="line">		if(c == &#39;+&#39;) cot = num1 + num2;</span>
<span class="line">		else cot = num1 * num2;</span>
<span class="line">		s1.push(cot);</span>
<span class="line">	}	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	init();</span>
<span class="line">	string str;</span>
<span class="line">	cin &gt;&gt; str;</span>
<span class="line">	for(int i = 0; i &lt; str.size(); i++){</span>
<span class="line">		int idx = i;</span>
<span class="line">		ll num = 0;</span>
<span class="line">		while(str[idx] &gt;= &#39;0&#39; &amp;&amp; str[idx] &lt;= &#39;9&#39;){</span>
<span class="line">			num = num * 10 + str[idx] - &#39;0&#39;;</span>
<span class="line">			idx ++;</span>
<span class="line">		}</span>
<span class="line">		if(num != 0){</span>
<span class="line">			s1.push(num);</span>
<span class="line">			i = idx - 1;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">		if(str[i] == &#39;+&#39; || str[i] == &#39;*&#39;){</span>
<span class="line">			fun(str[i]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	end();</span>
<span class="line">	cout &lt;&lt; s1.top() % 10000 &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-t-primes" tabindex="-1"><a class="header-anchor" href="#c-t-primes"><span>C - T-primes</span></a></h2><p>数据量很大，需要用到质数筛</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z, res;</span>
<span class="line">int n[N], st[N], idx;</span>
<span class="line"></span>
<span class="line">void init(){</span>
<span class="line">	st[1] = 1;</span>
<span class="line">	for(int i = 2; i &lt;= N; i ++){</span>
<span class="line">		if(!st[i]) n[idx ++] = i; </span>
<span class="line">		for(int j = 0; n[j] &lt;= N / i; j ++){</span>
<span class="line">			st[n[j] * i] = 1;</span>
<span class="line">			if(i % n[j] == 0) break;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	init();</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		ll num;</span>
<span class="line">		cin &gt;&gt; num;</span>
<span class="line">		ll cc = sqrt(num);</span>
<span class="line">		if(cc * cc == num &amp;&amp; !st[cc]){</span>
<span class="line">			cout &lt;&lt; &quot;YES&quot; &lt;&lt; endl; </span>
<span class="line">		} else {</span>
<span class="line">			cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">    </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="d-new-year-s-number" tabindex="-1"><a class="header-anchor" href="#d-new-year-s-number"><span>D - New Year&#39;s Number</span></a></h2><p>签到题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		int flag = 0;</span>
<span class="line">		for(int i = 0; i &lt;= b / 2020; i ++){</span>
<span class="line">			int f = 0;</span>
<span class="line">			for(int j = 0; j &lt;= b / 2021; j ++){</span>
<span class="line">				int cc = i * 2020 + j * 2021;</span>
<span class="line">				if(cc &gt; b){</span>
<span class="line">					break;</span>
<span class="line">				} else if(cc == b){</span>
<span class="line">					f = 1;</span>
<span class="line">					flag = 1;</span>
<span class="line">					break;</span>
<span class="line">				} </span>
<span class="line">			}</span>
<span class="line">			if(f){</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		if(flag) cout &lt;&lt; &quot;YES&quot; &lt;&lt; endl;</span>
<span class="line">		else cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;</span>
<span class="line">	} </span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="e-最小新整数" tabindex="-1"><a class="header-anchor" href="#e-最小新整数"><span>E - 最小新整数</span></a></h2><p>单调栈</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, z, res;</span>
<span class="line"></span>
<span class="line">string get(stack&lt;char&gt; s){</span>
<span class="line">	string res = &quot;&quot;;</span>
<span class="line">	while(s.size()){</span>
<span class="line">		res = s.top() + res;</span>
<span class="line">		s.pop();</span>
<span class="line">	} </span>
<span class="line">	return res;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	string str;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; str &gt;&gt; x;</span>
<span class="line">		stack&lt;char&gt; s;</span>
<span class="line">		int len = str.size(), cot = 0;</span>
<span class="line">		for(int i = 0; i &lt; len; i++){</span>
<span class="line">			while(!s.empty() &amp;&amp; s.top() &gt; str[i] &amp;&amp; cot &lt; x){</span>
<span class="line">				cot ++;</span>
<span class="line">				s.pop();</span>
<span class="line">			}</span>
<span class="line">			s.push(str[i]);</span>
<span class="line">		}</span>
<span class="line">		if(cot == x){</span>
<span class="line">			cout &lt;&lt; get(s) &lt;&lt; endl;</span>
<span class="line">		} else {</span>
<span class="line">			int num = x - cot;</span>
<span class="line">			string str = get(s);</span>
<span class="line">			for(int i = 0; i &lt; str.size() - num; i++){</span>
<span class="line">				cout &lt;&lt; str[i];</span>
<span class="line">			}</span>
<span class="line">			cout &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">    </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="f-count" tabindex="-1"><a class="header-anchor" href="#f-count"><span>F - Count</span></a></h2><p>矩阵快速幂</p>`,22)])])}const p=s(e,[["render",t]]),v=JSON.parse(`{"path":"/%E7%AE%97%E6%B3%95/2022%E5%B9%B4%E7%AE%97%E6%B3%95%E9%98%9F%E9%80%89%E6%8B%94%E8%B5%9B.html","title":"2022年算法队选拔赛","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"A - Numbers","slug":"a-numbers","link":"#a-numbers","children":[]},{"level":2,"title":"B - 表达式求值","slug":"b-表达式求值","link":"#b-表达式求值","children":[]},{"level":2,"title":"C - T-primes","slug":"c-t-primes","link":"#c-t-primes","children":[]},{"level":2,"title":"D - New Year's Number","slug":"d-new-year-s-number","link":"#d-new-year-s-number","children":[]},{"level":2,"title":"E - 最小新整数","slug":"e-最小新整数","link":"#e-最小新整数","children":[]},{"level":2,"title":"F - Count","slug":"f-count","link":"#f-count","children":[]}],"git":{},"filePathRelative":"算法/2022年算法队选拔赛.md"}`);export{p as comp,v as data};
