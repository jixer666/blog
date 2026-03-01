<template><div><h1 id="牛客小白月赛88" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛88"><span>牛客小白月赛88</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-03-11</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
老年人康复训练第一场
<p>链接：https://ac.nowcoder.com/acm/contest/77299</p>
<h2 id="超级闪光牛可乐" tabindex="-1"><a class="header-anchor" href="#超级闪光牛可乐"><span>超级闪光牛可乐</span></a></h2>
<blockquote>
<p>思路：只用根据最大值来判断即可</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	int a, n;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; n;</span>
<span class="line">	if(n == 0){</span>
<span class="line">		cout &lt;&lt; 0 &lt;&lt; endl;</span>
<span class="line">		return 0;</span>
<span class="line">	}</span>
<span class="line">	int max_ = 0;</span>
<span class="line">	char maxc;</span>
<span class="line">	for(int i = 0; i &lt; n; i++){</span>
<span class="line">		char c;</span>
<span class="line">		int x;</span>
<span class="line">		cin &gt;&gt; c &gt;&gt; x;</span>
<span class="line">		if(x &gt; max_){</span>
<span class="line">			max_ = x;</span>
<span class="line">			maxc = c;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	int cc = ceil(a * 1.0 / max_);</span>
<span class="line">	if(cc &gt; 1000) cout &lt;&lt; -1 &lt;&lt; endl;</span>
<span class="line">	else if (cc == 0){</span>
<span class="line">		cout &lt;&lt; maxc &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	else {</span>
<span class="line">		string str = &quot;&quot;;</span>
<span class="line">		for(int i = 0; i &lt; cc; i++) str += maxc;</span>
<span class="line">		cout &lt;&lt; str &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	 </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="人列计算机" tabindex="-1"><a class="header-anchor" href="#人列计算机"><span>人列计算机</span></a></h2>
<blockquote>
<p>简单模拟</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	char n[6][11];</span>
<span class="line">	for(int i = 0; i &lt; 5; i++){</span>
<span class="line">		string str;</span>
<span class="line">		getline(cin, str);</span>
<span class="line">		for(int j = 0; j &lt; str.size(); j++){</span>
<span class="line">			n[i][j] = str[j];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	if(n[2][5] == '&amp;'){</span>
<span class="line">		char a = n[1][0], b = n[3][0];</span>
<span class="line">		cout &lt;&lt; ((a - '0') &amp; (b - '0')) &lt;&lt; endl;</span>
<span class="line">	} else if(n[2][5] == '='){</span>
<span class="line">		char a = n[1][0], b = n[3][0];</span>
<span class="line">		cout &lt;&lt; ((a - '0') | (b - '0')) &lt;&lt; endl;</span>
<span class="line">	} else {</span>
<span class="line">		char a = n[2][0];</span>
<span class="line">		cout &lt;&lt; ((a - '0') == 1 ? 0 : 1) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	 </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间管理大师" tabindex="-1"><a class="header-anchor" href="#时间管理大师"><span>时间管理大师</span></a></h2>
<blockquote>
<p>简单模拟</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">struct p{</span>
<span class="line">	int x, y;</span>
<span class="line">}n[1001];</span>
<span class="line"></span>
<span class="line">set&lt;pair&lt;int, int&gt;&gt; s;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	int a, idx = 0;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		int x, y;</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		if(y &lt; 1){</span>
<span class="line">			s.insert({x-1, 60 + (y - 1)});</span>
<span class="line">		} else {</span>
<span class="line">			s.insert({x, y-1});</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		if(y &lt; 3){</span>
<span class="line">			s.insert({x-1, 60 + (y - 3)});</span>
<span class="line">		} else {</span>
<span class="line">			s.insert({x, y-3});</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		if(y &lt; 5){</span>
<span class="line">			s.insert({x-1, 60 + (y - 5)});</span>
<span class="line">		} else {</span>
<span class="line">			s.insert({x, y-5});</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	cout &lt;&lt; s.size() &lt;&lt; endl;</span>
<span class="line">	for(auto i: s){</span>
<span class="line">		cout &lt;&lt; i.first &lt;&lt; &quot; &quot; &lt;&lt; i.second &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	 </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="我不是大富翁" tabindex="-1"><a class="header-anchor" href="#我不是大富翁"><span>我不是大富翁</span></a></h2>
<blockquote>
<p>好家伙，从这就开始上强度了。一开始使用bfs和set模拟两种方法都超时；看题解需要使用二维dp。</p>
<p>思路：不断刷新数组v的状态</p>
</blockquote>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">int a, b;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;int&gt; v(a), n[5001];</span>
<span class="line">	for(int i = 0; i &lt; b; i++){</span>
<span class="line">		cin &gt;&gt; n[i]; </span>
<span class="line">	}</span>
<span class="line">	v[0] = 1;</span>
<span class="line">	for(int i = 0; i &lt; b; i++){</span>
<span class="line">		vector&lt;int&gt; tmp(a);</span>
<span class="line">		n[i] %= a;</span>
<span class="line">		for(int j = 0; j &lt; a; j++){</span>
<span class="line">			if(v[j] == 1){</span>
<span class="line">				tmp[(j + n[i]) % a] = 1;</span>
<span class="line">				tmp[(j - n[i] + a) % a] = 1;</span>
<span class="line">			}</span>
<span class="line">		}	</span>
<span class="line">		v.swap(tmp);</span>
<span class="line">	}</span>
<span class="line">	if(v[0] == 1){</span>
<span class="line">		cout &lt;&lt; &quot;YES&quot; &lt;&lt; endl;</span>
<span class="line">	} else{</span>
<span class="line">		cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	 </span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


