<template><div><h1 id="牛客小白月赛85" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛85"><span>牛客小白月赛85</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-04-18</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<p>本场比赛做下来大多都是思维题，就当是锻炼思维了</p>
<h2 id="accept" tabindex="-1"><a class="header-anchor" href="#accept"><span>ACCEPT</span></a></h2>
<p>签到题，一开始想复杂了，想依次循环遍历来计算每个字母出现的次数，再取出最小的次数。在对于C的次数的取值上费了很长一段时间，后面灵光一线，几行代码搞定</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\n&quot;)</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b; </span>
<span class="line"></span>
<span class="line">int check(unordered_map&lt;char, int&gt; ump){</span>
<span class="line">	return min(ump['A'], min(ump['C'] / 2, min(ump['E'], min(ump['P'], ump['T']))));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a --){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		string str;</span>
<span class="line">		cin &gt;&gt; str;</span>
<span class="line">		int res = INT_MAX, cot = 0;</span>
<span class="line">		char minc;</span>
<span class="line">		unordered_map&lt;char, int&gt; ump; </span>
<span class="line">		for(int i = 0; i &lt; b; i++){</span>
<span class="line">			ump[str[i]] ++;</span>
<span class="line">//			if(ump[str[i]] == 1) cot ++;</span>
<span class="line">//			if(ump[str[i]] == 2 &amp;&amp; str[i] == 'C') cot ++;</span>
<span class="line">//			if(ump[str[i]] &gt; res){</span>
<span class="line">//				</span>
<span class="line">//				if(str[i] == 'C'){</span>
<span class="line">//					if(str[i] == minc &amp;&amp; ump[str[i]] % 2 == 0) res ++;</span>
<span class="line">//				} else{</span>
<span class="line">//					if(str[i] == minc) res ++; </span>
<span class="line">//				}</span>
<span class="line">//				</span>
<span class="line">//			} else if(res &gt; ump[str[i]]){</span>
<span class="line">//				minc = str[i];</span>
<span class="line">//				if(str[i] == 'C') res = 0;</span>
<span class="line">//				else res = ump[str[i]];	</span>
<span class="line">//			}</span>
<span class="line">//			if(str[i] == 'C'){</span>
<span class="line">//				if(minc == 'C' &amp;&amp; ump[str[i]] % 2 == 0) res ++;</span>
<span class="line">//				else res = min(res, ump[str[i]] / 2);</span>
<span class="line">//			} else {</span>
<span class="line">//				res = min(ump[str[i]], res);</span>
<span class="line">//			}</span>
<span class="line">//			cout &lt;&lt; res &lt;&lt; &quot; &quot;&lt;&lt; ump[str[i]]&lt;&lt;&quot; &quot;&lt;&lt;minc &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; check(ump) &lt;&lt; endl;</span>
<span class="line">//		if(cot &lt; 6) cout &lt;&lt; 0 &lt;&lt; endl;</span>
<span class="line">//		else cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line"> </span>
<span class="line">	return 0;</span>
<span class="line">}	</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="咕呱蛙" tabindex="-1"><a class="header-anchor" href="#咕呱蛙"><span>咕呱蛙</span></a></h2>
<p>这题就是看思维了，从前几个满足条件的数中找出规律，只有 4i + 2 和 4i + 3的数满足条件，于是考虑这两个数出现位置</p>
<p>对于 4i + 2，直接就是 2n，对于4i + 3，也是很快知道为 2n + 1</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\n&quot;)</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">   	ll x;</span>
<span class="line">   	cin &gt;&gt; x;</span>
<span class="line">	if(x % 2 == 0) cout &lt;&lt; 2 * x &lt;&lt; endl;</span>
<span class="line">	else cout &lt;&lt; 2 * x  + 1 &lt;&lt; endl; </span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="得分显示" tabindex="-1"><a class="header-anchor" href="#得分显示"><span>得分显示</span></a></h2>
<p>这题题意很简单，但是很难想到一点就是，因为是递增的，所以后面出现的数x对于前面出现n个数满足，每次增加都不能超过x/n。</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define line printf(&quot;------\n&quot;)</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">  	cin &gt;&gt; a;</span>
<span class="line">  	int num;</span>
<span class="line">  	double res = 1e9 + 1;</span>
<span class="line">  	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">  		cin &gt;&gt; num;	</span>
<span class="line">  		res = min(res, (num + 0.9999999999999) / i);</span>
<span class="line">	}</span>
<span class="line">	printf(&quot;%.10lf&quot;, res);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阿里马马与四十大盗" tabindex="-1"><a class="header-anchor" href="#阿里马马与四十大盗"><span>阿里马马与四十大盗</span></a></h2>
<p>这题用了贪心的思想，对于某个0补充到最大值后，若后面的数之和都小于这个最大值，则后面的0就不用管了无需补充；于是这个某个0之前的0都需要补充到最大值</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef unsigned long long ull;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b;</span>
<span class="line">int v[N];</span>
<span class="line">ll m[N];</span>
<span class="line">ll fun(int x){</span>
<span class="line">	return m[a] - m[x];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	ll res = 0, is = 0, cot = b, flag = 0;</span>
<span class="line">	for(int i = 1; i &lt;= a; i ++){</span>
<span class="line">		cin &gt;&gt; v[i]; 	</span>
<span class="line">	}</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		m[i] = m[i - 1] + v[i];</span>
<span class="line">	}</span>
<span class="line">	for(int i = 1; i &lt;= a - 1; i ++){ </span>
<span class="line">		if(v[i] == 0){</span>
<span class="line">			res += b - cot;</span>
<span class="line">			cot = b; 	</span>
<span class="line">			if(cot &gt; fun(i)){</span>
<span class="line">				cout &lt;&lt; res + a - 1 &lt;&lt; endl;</span>
<span class="line">				return 0;</span>
<span class="line">			}</span>
<span class="line">		} else {</span>
<span class="line">			cot -= v[i];</span>
<span class="line">			if(cot &lt;= 0){</span>
<span class="line">				cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;</span>
<span class="line">				return 0;</span>
<span class="line">			}</span>
<span class="line">		}		</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; res + a - 1 &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


