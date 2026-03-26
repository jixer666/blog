import{_ as s,c as i,a as l,o as a}from"./app-C3KrGAW2.js";const e={};function t(d,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="牛客小白月赛86" tabindex="-1"><a class="header-anchor" href="#牛客小白月赛86"><span>牛客小白月赛86</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-04-23</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> ABC题能够轻松通过，后面的题就卡了 <h2 id="水盐平衡" tabindex="-1"><a class="header-anchor" href="#水盐平衡"><span>水盐平衡</span></a></h2><p>简单模拟题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">	int num;</span>
<span class="line">	cin &gt;&gt; num;</span>
<span class="line">	while(num --){</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		double _1 = a * 1.0 / b, _2 = x * 1.0 / y;</span>
<span class="line">		if(_1 &gt; _2) cout &lt;&lt; &quot;S&quot; &lt;&lt; endl;</span>
<span class="line">		else cout &lt;&lt; &quot;Y&quot; &lt;&lt; endl; </span>
<span class="line">	} </span>
<span class="line">		</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="水平考试" tabindex="-1"><a class="header-anchor" href="#水平考试"><span>水平考试</span></a></h2><p>这题有个巧妙的地方在于多选题不会出现得分为5的情况，因为不可能出现部分正确，只要有部分正确小灰灰就会把他修改为全部正确</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">	int num;</span>
<span class="line">	cin &gt;&gt; num;</span>
<span class="line">	while(num --){</span>
<span class="line">		string s1, s2;</span>
<span class="line">		cin &gt;&gt; s1 &gt;&gt; s2;</span>
<span class="line">		int len1 = s1.size(), len2 = s2.size();</span>
<span class="line">		if(len1 &gt; len2){</span>
<span class="line">			cout &lt;&lt; 0 &lt;&lt; endl;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">		if(len2 == 1){</span>
<span class="line">			if(s1[0] == s2[0]) cout &lt;&lt; &quot;10&quot; &lt;&lt; endl;</span>
<span class="line">			else cout &lt;&lt; &quot;0&quot; &lt;&lt; endl;</span>
<span class="line">			continue;</span>
<span class="line">		}</span>
<span class="line">		unordered_map&lt;char, int&gt; ump;</span>
<span class="line">		for(int i = 0; i &lt; len2; i++){</span>
<span class="line">			ump[s2[i]] ++;</span>
<span class="line">		}</span>
<span class="line">		int flag = 0, flag2 = 1;</span>
<span class="line">		for(int i = 0; i &lt; len1; i++){</span>
<span class="line">			if(!ump[s1[i]]){</span>
<span class="line">				flag2 = 0;</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		if(flag2){</span>
<span class="line">			cout &lt;&lt; 10 &lt;&lt; endl;</span>
<span class="line">		} else {</span>
<span class="line">			cout &lt;&lt; 0 &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">//		flag = 0, flag2 = 1;</span>
<span class="line">//		for(int i = 0; i &lt; len1; i++){</span>
<span class="line">//			if(ump[s1[i]]){</span>
<span class="line">//				flag = 1;	</span>
<span class="line">//			} else {</span>
<span class="line">//				flag2 = 0;</span>
<span class="line">//			}</span>
<span class="line">//		}</span>
<span class="line">//		if(flag &amp;&amp; !flag2){</span>
<span class="line">//			cout &lt;&lt; 0 &lt;&lt; endl;</span>
<span class="line">//		} else if(flag &amp;&amp; flag2){</span>
<span class="line">//			cout &lt;&lt; 5 &lt;&lt; endl;</span>
<span class="line">//		} else cout &lt;&lt; 0 &lt;&lt; endl;</span>
<span class="line">	} </span>
<span class="line">	</span>
<span class="line">		</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组段数" tabindex="-1"><a class="header-anchor" href="#数组段数"><span>数组段数</span></a></h2><p>模拟题，需要注意的点是若是出现当前下标的和和上一位数的和一致的时候，就说明这段是相同，需要向前找到不一致的和</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;int&gt; v(a + 1), m(a + 1);</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		cin &gt;&gt; v[i];</span>
<span class="line">		if(i == 1){</span>
<span class="line">			m[i] = 1;</span>
<span class="line">		} else {</span>
<span class="line">			if(v[i] == v[i - 1]){</span>
<span class="line">				m[i] = m[i - 1];	</span>
<span class="line">			} else {</span>
<span class="line">				m[i] = m[i - 1] + 1;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">//	for(int i = 1; i &lt;= a; i++) cout &lt;&lt; m[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">//	cout &lt;&lt; endl;</span>
<span class="line">	while(b --){</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		while(v[x] == v[x - 1]){</span>
<span class="line">			x --;</span>
<span class="line">		}</span>
<span class="line">//		cout &lt;&lt; x &lt;&lt; &quot; &quot; &lt;&lt; y &lt;&lt; &quot; &quot; &lt;&lt; m[x] &lt;&lt; &quot; &quot; &lt;&lt; m[y] &lt;&lt; endl;</span>
<span class="line">		cout &lt;&lt; m[y] - m[x - 1] &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="剪纸游戏" tabindex="-1"><a class="header-anchor" href="#剪纸游戏"><span>剪纸游戏</span></a></h2><p>这题我的思路是默认当前点位最小x和最小y的值，然后BFS遍历，找出最大x和最大y，然后计算这块区间的所有坐标是否都标记过了。但是后面看题解发现这样是不对的。若是出现 <code>_|</code> 这种的图形就会统计出错，我的思路会将其算成一个长方形，但显然不是。</p><p>正解：BFS同时算出最小x，最小y，最大x，最大y，并统计标记过了的数量，通过计算这块区间数量是否等于BFS遍历标记的数量，若相同就说明是长方形，否则就不是。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y, res;</span>
<span class="line">char v[1010][1010];</span>
<span class="line">int st[1010][1010];</span>
<span class="line">int mmx, mmy, iix, iiy;</span>
<span class="line"></span>
<span class="line">int dfs(int x, int y){</span>
<span class="line">	mmx = max(mmx, x);</span>
<span class="line">	mmy = max(mmy, y);</span>
<span class="line">	iix = min(iix, x);</span>
<span class="line">	iiy = min(iiy, y);</span>
<span class="line">	int cot = 0;</span>
<span class="line">	for(int i = 0; i &lt; 4; i++){</span>
<span class="line">		int xx = x + ix[i], yy = y + iy[i];</span>
<span class="line">		if(xx &gt;= 1 &amp;&amp; xx &lt;= a &amp;&amp; yy &gt;= 1 &amp;&amp; yy &lt;= b &amp;&amp; !st[xx][yy] &amp;&amp; v[xx][yy] == &#39;.&#39;){</span>
<span class="line">			st[xx][yy] = 1;</span>
<span class="line">			cot += dfs(xx, yy) + 1;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return cot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int check(int x, int y, int ex, int ey){</span>
<span class="line">	for(int i = x; i &lt;= ex; i++){</span>
<span class="line">		for(int j = y; j &lt;= ey; j++){</span>
<span class="line">			if(!st[i][j]){</span>
<span class="line">				return 0;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return 1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			cin &gt;&gt; v[i][j];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	 for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			if(v[i][j] == &#39;.&#39; &amp;&amp; !st[i][j]){</span>
<span class="line">				mmx = 0, mmy = 0, iix = i, iiy = j;</span>
<span class="line">				st[i][j] = 1;</span>
<span class="line">				int cot = dfs(i, j) + 1;</span>
<span class="line">				if(cot == (mmx - iix + 1) * (mmy - iiy + 1)){</span>
<span class="line">					res ++; </span>
<span class="line">				}</span>
<span class="line">//				cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; j &lt;&lt; &quot; &quot; &lt;&lt; mmx &lt;&lt; &quot; &quot; &lt;&lt; mmy &lt;&lt; &quot; &quot; &lt;&lt; iix &lt;&lt; &quot; &quot; &lt;&lt; iiy &lt;&lt; &quot; &quot; &lt;&lt; cot &lt;&lt; endl;</span>
<span class="line">//				if(check(i, j, mmx, mmy)){</span>
<span class="line">//					cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; j &lt;&lt; &quot; &quot; &lt;&lt; mmx &lt;&lt; &quot; &quot; &lt;&lt; mmy &lt;&lt; endl;</span>
<span class="line">//					res ++;</span>
<span class="line">//				}</span>
<span class="line">			}		</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可口蛋糕" tabindex="-1"><a class="header-anchor" href="#可口蛋糕"><span>可口蛋糕</span></a></h2><p>前缀和+双指针+小贪心题</p><p>用l，r代表两个双指针，先找出r（第一个出现大于W的下标），不断维护 v[r] - v[l] 大于等于W的区间，找出最小可口值的前缀和（贪心），用前缀和算出区间的饱腹值，得出最大的一个。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define endl &quot;\\n&quot;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 10;</span>
<span class="line">int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};</span>
<span class="line">int a, b, x, y;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	vector&lt;ll&gt; v(a + 1), m(a + 1);</span>
<span class="line">	v[0] = 0, m[0] = 0;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++) cin &gt;&gt; v[i], v[i] += v[i - 1];</span>
<span class="line">	for(int i = 1; i &lt;= a; i++) cin &gt;&gt; m[i], m[i] += m[i - 1];</span>
<span class="line">	ll l = 0, r = 0, minn = 1e18, res = -1e18;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		if(v[i] &gt;= b){</span>
<span class="line">			r = i;</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	while(r &lt;= a){</span>
<span class="line">//		cout &lt;&lt; v[r] &lt;&lt; &quot; &quot; &lt;&lt; v[l] &lt;&lt; endl;</span>
<span class="line">		while(v[r] - v[l] &gt;= b){</span>
<span class="line">			minn = min(minn, m[l]); </span>
<span class="line">			l ++;</span>
<span class="line">		}</span>
<span class="line">//		cout &lt;&lt; minn &lt;&lt; &quot; &quot; &lt;&lt; m[r] &lt;&lt; &quot; &quot; &lt;&lt; m[r] - minn &lt;&lt; endl;</span>
<span class="line">		res = max(res, m[r] - minn);</span>
<span class="line">		r ++;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">		</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)])])}const p=s(e,[["render",t]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E7%89%9B%E5%AE%A2%E5%B0%8F%E7%99%BD%E6%9C%88%E8%B5%9B86.html","title":"牛客小白月赛86","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"水盐平衡","slug":"水盐平衡","link":"#水盐平衡","children":[]},{"level":2,"title":"水平考试","slug":"水平考试","link":"#水平考试","children":[]},{"level":2,"title":"数组段数","slug":"数组段数","link":"#数组段数","children":[]},{"level":2,"title":"剪纸游戏","slug":"剪纸游戏","link":"#剪纸游戏","children":[]},{"level":2,"title":"可口蛋糕","slug":"可口蛋糕","link":"#可口蛋糕","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/牛客小白月赛86.md"}');export{p as comp,v as data};
