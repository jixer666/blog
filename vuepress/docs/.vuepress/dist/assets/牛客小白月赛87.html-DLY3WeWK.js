import{_ as s,c as i,a as l,o as a}from"./app-B9IyngIV.js";const e={};function d(t,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="牛客小白月赛87" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛87"><span>牛客小白月赛87</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-04-25</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> ## 小苯的石子游戏 <p>模拟两者选石头，判断最终结果</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res = 0;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		vector&lt;int&gt; v(b + 1);</span>
<span class="line">		int l = 0, r = 0;</span>
<span class="line">		for(int i = 1; i &lt;= b; i++) {</span>
<span class="line">			cin &gt;&gt; v[i];</span>
<span class="line">		} </span>
<span class="line">		int idx = 1;</span>
<span class="line">		for(int i = b; i &gt;= 1; i --){</span>
<span class="line">			if(idx % 2 == 1) l += v[i];</span>
<span class="line">			else r += v[i];</span>
<span class="line">			idx ++;</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; (l &gt; r ? &quot;Alice&quot; : &quot;Bob&quot;) &lt;&lt; endl;</span>
<span class="line">	} </span>
<span class="line">			</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小苯的排序疑惑" tabindex="-1"><a class="header-anchor" href="#小苯的排序疑惑"><span>小苯的排序疑惑</span></a></h2><p>思维题，只需对数组的两边值进行考虑</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res = 0;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		vector&lt;int&gt; v(b);</span>
<span class="line">		int minn = INT_MAX, maxx = 0; </span>
<span class="line">		for(int i = 0; i &lt; b; i++) {</span>
<span class="line">			cin &gt;&gt; v[i];</span>
<span class="line">			if(i != 0){</span>
<span class="line">				minn = min(minn, v[i]);</span>
<span class="line">			}</span>
<span class="line">			if(i != b - 1){</span>
<span class="line">				maxx = max(maxx, v[i]);</span>
<span class="line">			}</span>
<span class="line">		} </span>
<span class="line">		cout &lt;&lt; (v[0] &lt;= minn || v[b - 1] &gt;= maxx ? &quot;YES&quot; : &quot;NO&quot;) &lt;&lt; endl;</span>
<span class="line">	} </span>
<span class="line">			</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小苯的ide括号问题-easy" tabindex="-1"><a class="header-anchor" href="#小苯的ide括号问题-easy"><span>小苯的IDE括号问题（easy）</span></a></h2><p>使用两字符数组分别模拟 <code>I</code> 前后两个字符串的操作</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res = 0;</span>
<span class="line">string str, s;</span>
<span class="line">char v[N], m[N]; </span>
<span class="line">int len1, len2, c1, c2;</span>
<span class="line"></span>
<span class="line">void fun1(){</span>
<span class="line">	if(len1 &gt;= 0 &amp;&amp; len2 &lt; c2){</span>
<span class="line">		if(v[len1] == &#39;(&#39; &amp;&amp; m[len2] == &#39;)&#39;){</span>
<span class="line">			len1 --;</span>
<span class="line">			len2 ++;</span>
<span class="line">		} else {</span>
<span class="line">			len1 --;</span>
<span class="line">		}	</span>
<span class="line">	} else {</span>
<span class="line">		len1 --;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void fun2(){</span>
<span class="line">	len2 ++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	cin &gt;&gt; str;</span>
<span class="line">	int idx = 0, len = str.size();</span>
<span class="line">	for(int i = 0; i &lt; len; i++){</span>
<span class="line">		if(str[i] == &#39;I&#39;){</span>
<span class="line">			idx = i;</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">		v[i] = str[i];</span>
<span class="line">		c1 ++;</span>
<span class="line">	}</span>
<span class="line">	for(int i = idx + 1; i &lt; len; i++){</span>
<span class="line">		m[i - idx - 1] = str[i];</span>
<span class="line">		c2 ++;</span>
<span class="line">	}</span>
<span class="line">	len1 = c1 - 1, len2 = 0;</span>
<span class="line">	while(b --){</span>
<span class="line">		cin &gt;&gt; s;</span>
<span class="line">		if(s[0] == &#39;b&#39;){</span>
<span class="line">			fun1();</span>
<span class="line">		} else {</span>
<span class="line">			fun2();</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line"></span>
<span class="line">	for(int i = 0; i &lt;= len1; i++) cout &lt;&lt; v[i];</span>
<span class="line">	cout &lt;&lt; &quot;I&quot;;</span>
<span class="line">	for(int i = len2; i &lt; c2; i++) cout &lt;&lt; m[i]; </span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小苯的ide括号问题-hard" tabindex="-1"><a class="header-anchor" href="#小苯的ide括号问题-hard"><span>小苯的IDE括号问题（hard）</span></a></h2><p>这题与前一题的区别在于操作数增加了两个左移和右移，若再次使用数组的话不好模拟（需要遍历），于是采用两个双端队列进模拟（上一题也可以使用双端队列进行模拟）</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res = 0;</span>
<span class="line">string str, s;</span>
<span class="line">deque&lt;char&gt; d1, d2;</span>
<span class="line"></span>
<span class="line">void fun1(){</span>
<span class="line">	int len1 = d1.size(), len2 = d2.size();</span>
<span class="line">	if(len1 &amp;&amp; len2){</span>
<span class="line">		if(d1.back() == &#39;(&#39; &amp;&amp; d2.front() == &#39;)&#39;){</span>
<span class="line">			d1.pop_back();</span>
<span class="line">			d2.pop_front();</span>
<span class="line">		} else {</span>
<span class="line">			d1.pop_back();</span>
<span class="line">		}</span>
<span class="line">	} else if(len1) {</span>
<span class="line">		d1.pop_back();</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void fun2(){</span>
<span class="line">	if(d2.size()){</span>
<span class="line">		d2.pop_front();</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void fun3(){</span>
<span class="line">	if(d1.size()){</span>
<span class="line">		char c = d1.back();</span>
<span class="line">		d1.pop_back(); </span>
<span class="line">		d2.push_front(c);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void fun4(){</span>
<span class="line">	if(d2.size()){</span>
<span class="line">		char c = d2.front();</span>
<span class="line">		d2.pop_front();</span>
<span class="line">		d1.push_back(c);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	cin &gt;&gt; str;</span>
<span class="line">	int idx = 0, len = a;</span>
<span class="line">	for(int i = 0; i &lt; len; i++){</span>
<span class="line">		if(str[i] == &#39;I&#39;){</span>
<span class="line">			idx = i;</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">		d1.push_back(str[i]); </span>
<span class="line">	}</span>
<span class="line">	for(int i = idx + 1; i &lt; len; i++){</span>
<span class="line">		d2.push_back(str[i]);</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	while(b --){</span>
<span class="line">		cin &gt;&gt; s;</span>
<span class="line">		if(s[0] == &#39;b&#39;){</span>
<span class="line">			fun1();</span>
<span class="line">		} else if(s[0] == &#39;d&#39;){</span>
<span class="line">			fun2();</span>
<span class="line">		} else if(s[0] == &#39;&lt;&#39;){</span>
<span class="line">			fun3();</span>
<span class="line">		} else{</span>
<span class="line">			fun4();</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line"></span>
<span class="line">	while(d1.size()){</span>
<span class="line">		cout &lt;&lt; d1.front();</span>
<span class="line">		d1.pop_front();</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; &quot;I&quot;;</span>
<span class="line">	while(d2.size()){</span>
<span class="line">		cout &lt;&lt; d2.front();</span>
<span class="line">		d2.pop_front();</span>
<span class="line">	}</span>
<span class="line">		</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小苯的数组构造" tabindex="-1"><a class="header-anchor" href="#小苯的数组构造"><span>小苯的数组构造</span></a></h2><p>遍历每个数，找出每个数前的各个最大值（不断维护），相减即可</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	vector&lt;ll&gt; v(a + 1);</span>
<span class="line">	v[0] = -10e9 - 10;</span>
<span class="line">	int flag = 1; </span>
<span class="line">	for(int i = 1; i &lt;= a; i++) {</span>
<span class="line">		cin &gt;&gt; v[i];</span>
<span class="line">		if(i != 0 &amp;&amp; v[i] &lt; v[i - 1]){</span>
<span class="line">			flag = 0;</span>
<span class="line">		} 	</span>
<span class="line">	}</span>
<span class="line">	if(flag) {</span>
<span class="line">		for(int i = 1; i &lt;= a; i++){</span>
<span class="line">			cout &lt;&lt; 1 &lt;&lt; &quot; &quot;;</span>
<span class="line">		}</span>
<span class="line">		return 0;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		if(v[i] &gt;= v[i - 1]) cout &lt;&lt; 0 &lt;&lt; &quot; &quot;;</span>
<span class="line">		else {</span>
<span class="line">			cout &lt;&lt; v[i - 1] - v[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">			v[i] = v[i - 1];</span>
<span class="line">		}</span>
<span class="line">	}	</span>
<span class="line">			</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小苯的数组切分" tabindex="-1"><a class="header-anchor" href="#小苯的数组切分"><span>小苯的数组切分</span></a></h2><p>思维题，分别考虑 &amp; ^ | 这三种运算符</p><ul><li>对于 &amp;，无论有多少个数相互 &amp; 操作，结果都是越来越小</li><li>对于 ^，若有两个相同的数进行 ^，则结果为0</li></ul><p>只要知道上面这两个，那么就可以确定右端点这一个数进行 &amp;，剩下的 0, a - 1区间就用维护出 ^ 和 | 这两种操作的最大之和，加上右端点的值就是结果</p><blockquote><p>对于维护 0, a - 1这个区间，可以考虑先遍历 0 , a - 1，对每个数进行取 ^ 运算得到一个结果l，再反向遍历 a - 1, 0 若想不让这个数取 ^，可以对 l 对这个数进行取 ^ ，因为开始已经取过一边了，再取一边就是0相当于没取。</p></blockquote><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	ll res = 0;</span>
<span class="line">	vector&lt;int&gt; v(a);</span>
<span class="line">	for(int i = 0; i &lt; a; i++) cin &gt;&gt; v[i]; </span>
<span class="line">	ll l = v[0], r = v[a - 2];</span>
<span class="line">	for(int i = 1; i &lt; a - 1; i++) l ^= v[i];</span>
<span class="line">	for(int i = a - 2; i &gt;= 0; i--){</span>
<span class="line">		l ^= v[i];</span>
<span class="line">		r |= v[i];</span>
<span class="line">		res = max(res, l + r);</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	cout &lt;&lt; res + v[a - 1] &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)])])}const p=s(e,[["render",d]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E7%89%9B%E5%AE%A2%E5%B0%8F%E7%99%BD%E6%9C%88%E8%B5%9B87.html","title":"牛客小白月赛87","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"小苯的排序疑惑","slug":"小苯的排序疑惑","link":"#小苯的排序疑惑","children":[]},{"level":2,"title":"小苯的IDE括号问题（easy）","slug":"小苯的ide括号问题-easy","link":"#小苯的ide括号问题-easy","children":[]},{"level":2,"title":"小苯的IDE括号问题（hard）","slug":"小苯的ide括号问题-hard","link":"#小苯的ide括号问题-hard","children":[]},{"level":2,"title":"小苯的数组构造","slug":"小苯的数组构造","link":"#小苯的数组构造","children":[]},{"level":2,"title":"小苯的数组切分","slug":"小苯的数组切分","link":"#小苯的数组切分","children":[]}],"git":{},"filePathRelative":"算法/牛客小白月赛87.md"}');export{p as comp,v as data};
