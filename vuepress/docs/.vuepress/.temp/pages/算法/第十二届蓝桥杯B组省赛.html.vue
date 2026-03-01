<template><div><h1 id="第十二届蓝桥杯-b-组省赛" tabindex="-1"><a class="header-anchor" href="#第十二届蓝桥杯-b-组省赛"><span>第十二届蓝桥杯 B 组省赛</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-01-17</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<h2 id="空间" tabindex="-1"><a class="header-anchor" href="#空间"><span>空间</span></a></h2>
<p>单位换算题</p>
<p>1比特 = 8位</p>
<p>256 * 1024 * 1024 / 4</p>
<h2 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片"><span>卡片</span></a></h2>
<p>模拟题</p>
<p>需要注意的的是答案是输出能够拼到多少，而不是拼完的那个数，所以需要答案 - 1</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int n[10];</span>
<span class="line">	for(int i = 0; i &lt;= 9; i++){</span>
<span class="line">		n[i] = 2021;</span>
<span class="line">	}	</span>
<span class="line">	int idx = 1;</span>
<span class="line">	while(true){</span>
<span class="line">		int c = idx, flag = 0;</span>
<span class="line">		while(c){</span>
<span class="line">			if(n[c % 10] == 0){</span>
<span class="line">				cout &lt;&lt; idx - 1 &lt;&lt; endl;</span>
<span class="line">				flag = 1;</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">			n[c % 10] --;</span>
<span class="line">			c /= 10;</span>
<span class="line">		}</span>
<span class="line">		if(flag){</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">		idx ++;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直线" tabindex="-1"><a class="header-anchor" href="#直线"><span>直线</span></a></h2>
<p>模拟、数学题</p>
<p>需要注意直线的公式：y = kx + b</p>
<p>斜率：k = (y1 - y2) / (x1 - x2)</p>
<p>截距：b = (y1 * x2 - y2 * x1) / (x2 - x1)</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line">map&lt;pair&lt;double, double&gt;, int&gt; mp;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	int res = 0;</span>
<span class="line">	for(int i = 0; i &lt; 20; i++){</span>
<span class="line">		res ++;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; 21; i++){</span>
<span class="line">		res ++;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	for(int i = 0; i &lt; 20; i++){</span>
<span class="line">		for(int j = 0; j &lt; 21; j++){</span>
<span class="line">			for(int x = i + 1; x &lt; 20; x++){</span>
<span class="line">				for(int y = 0; y &lt; 21; y++){</span>
<span class="line">					if(i != x &amp;&amp; j != y){</span>
<span class="line">						double num = (j - y) * 1.0 / (i - x);	</span>
<span class="line">						double val = (i * y - j * x) * 1.0 / (i - x);</span>
<span class="line">						if(mp.find({num, val}) == mp.end()){</span>
<span class="line">							mp[{num, val}] = 1;</span>
<span class="line">							res ++;</span>
<span class="line">						}</span>
<span class="line">					}</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="货物摆放" tabindex="-1"><a class="header-anchor" href="#货物摆放"><span>货物摆放</span></a></h2>
<p>枚举、数学知识<strong>因数</strong>题</p>
<p>找出2021041820210418所有的因数，从因数中找出满足条件的即可，极大的缩减了遍历范围</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line">map&lt;pair&lt;ll, ll&gt;, ll&gt; map;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	 vector&lt;ll&gt; v;</span>
<span class="line">    </span>
<span class="line">    ll a = 2021041820210418;</span>
<span class="line">    ll res = 0;</span>
<span class="line">    </span>
<span class="line">    for(ll i = 1; i * i &lt;= a; i++){</span>
<span class="line">        if(a % i == 0) {</span>
<span class="line">            v.push_back(i);    </span>
<span class="line">            if(i * i != a){</span>
<span class="line">                v.push_back(a / i);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    for(ll i = 0; i &lt; v.size(); i++){</span>
<span class="line">        for(ll j = 0; j &lt; v.size(); j++){</span>
<span class="line">            for(ll m = 0; m &lt; v.size(); m++){    </span>
<span class="line">                if(v[i] * v[j] * v[m] == a) res++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line">    cout &lt;&lt; res;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h2>
<p>图论、数学知识题</p>
<p>迪杰斯特拉模板题，最小公倍数模板</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line">map&lt;pair&lt;ll, ll&gt;, ll&gt; map;</span>
<span class="line">int w[N], idx, h[N], ne[N], e[N], dis[N], st[N];</span>
<span class="line"></span>
<span class="line">void add(int x, int y, int z){</span>
<span class="line">	e[idx] = y, w[idx] = z, ne[idx] = h[x], h[x] = idx ++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int fun1(int x, int y){</span>
<span class="line">	return y == 0 ? x : fun1(y, x % y);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int fun2(int x, int y){</span>
<span class="line">	return x / fun1(x, y) * y;	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int dj(){</span>
<span class="line">	memset(dis, 0x3f3f3f3f, sizeof dis);</span>
<span class="line">	priority_queue&lt;PII, vector&lt;PII&gt;, greater&lt;PII&gt;&gt; pq;</span>
<span class="line">	pq.push({1, 0});</span>
<span class="line">	while(!pq.empty()){</span>
<span class="line">		auto top = pq.top();</span>
<span class="line">		pq.pop();</span>
<span class="line">		int x = top.first, y = top.second;</span>
<span class="line">		if(st[x]) continue;</span>
<span class="line">		st[x] = 1;</span>
<span class="line">		for(int i = h[x]; i != -1; i = ne[i]){</span>
<span class="line">			int j = e[i];</span>
<span class="line">			if(dis[j] &gt; y + w[i]){</span>
<span class="line">				dis[j] = y + w[i];</span>
<span class="line">				pq.push({j, dis[j]});</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	if(dis[2021] == 0x3f3f3f3f) return -1;</span>
<span class="line">    return dis[2021];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	memset(h, -1, sizeof h);</span>
<span class="line"></span>
<span class="line">	for(int i = 1; i &lt;= 2021; i++){</span>
<span class="line">		for(int j = i + 1; j &lt;= 2021; j++){</span>
<span class="line">			if(j - i &lt;= 21){</span>
<span class="line">				int c = fun2(i, j);</span>
<span class="line">				add(i, j, c);</span>
<span class="line">				add(j, i, c);	</span>
<span class="line">			} else {</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	} </span>
<span class="line">	cout &lt;&lt; dj();</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间显示" tabindex="-1"><a class="header-anchor" href="#时间显示"><span>时间显示</span></a></h2>
<p>单位换算题</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	ll num;</span>
<span class="line">	cin &gt;&gt; num;</span>
<span class="line">	int dv = 1000 * 3600 * 24;</span>
<span class="line">	num = num % dv;</span>
<span class="line">	int sv = num / 1000;</span>
<span class="line">	int h = sv / 3600;</span>
<span class="line">	int m = sv % 3600 / 60;</span>
<span class="line">	int s = sv % 3600 % 60;</span>
<span class="line">	printf(&quot;%02d:%02d:%02d\n&quot;, h, m, s);</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="砝码称重" tabindex="-1"><a class="header-anchor" href="#砝码称重"><span>砝码称重</span></a></h2>
<p>set模拟DFS遍历，巧解此题</p>
<p>正解为动态规划</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	vector&lt;int&gt; v(a);</span>
<span class="line">	set&lt;int&gt; s;</span>
<span class="line">	for(int i = 0; i &lt; a; i++) cin &gt;&gt; v[i];</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		set&lt;int&gt; ss;</span>
<span class="line">		for(int j: s){</span>
<span class="line">			ss.insert(j + v[i]);</span>
<span class="line">			if(j - v[i] &gt; 0) ss.insert(j - v[i]);</span>
<span class="line">			if(v[i] - j &gt; 0) ss.insert(v[i] - j);</span>
<span class="line">		}</span>
<span class="line">		for(int j: ss){</span>
<span class="line">			s.insert(j);	</span>
<span class="line">		}</span>
<span class="line">		s.insert(v[i]);</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; s.size() &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="杨辉三角形" tabindex="-1"><a class="header-anchor" href="#杨辉三角形"><span>杨辉三角形</span></a></h2>
<p>技巧、二分题</p>
<p>暴力能够 40% 的分数</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line"></span>
<span class="line">map&lt;PII, int&gt; mp; </span>
<span class="line">map&lt;int, int&gt; smp;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	if(a == 1){</span>
<span class="line">		cout &lt;&lt; 1 &lt;&lt; endl;</span>
<span class="line">		return 0;</span>
<span class="line">	}</span>
<span class="line">	mp[{1, 1}] = 1;</span>
<span class="line">	int flag = 0;</span>
<span class="line">	ll res = 1;</span>
<span class="line">	for(int i = 2; ;i++){</span>
<span class="line">		for(int j = 1; j &lt;= i;j ++){</span>
<span class="line">			int cot;</span>
<span class="line">			if(j == 1){</span>
<span class="line">				cot = 1; </span>
<span class="line">			} else {</span>
<span class="line">				cot = mp[{i - 1, j}] + mp[{i - 1, j - 1}];</span>
<span class="line">			}</span>
<span class="line">			res ++;</span>
<span class="line">			mp[{i, j}] = cot;</span>
<span class="line">			if(cot == a &amp;&amp; smp.find(cot) == smp.end()){</span>
<span class="line">				flag = 1;</span>
<span class="line">				cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		if(flag){</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向排序" tabindex="-1"><a class="header-anchor" href="#双向排序"><span>双向排序</span></a></h2>
<p>sort暴力能够 60% 题</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	for(int i = 0; i &lt; a; i++) n[i] = i + 1;</span>
<span class="line">	while(b --){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		if(x == 0){</span>
<span class="line">			sort(n, n + y, greater&lt;int&gt;());</span>
<span class="line">		} else {</span>
<span class="line">			sort(n + y - 1, n + a);</span>
<span class="line">		}</span>
<span class="line"></span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	for(int i = 0; i &lt; a; i++) cout &lt;&lt; n[i] &lt;&lt; &quot; &quot;; </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


