import{_ as s,c as i,a,o as l}from"./app-C3KrGAW2.js";const e={};function d(c,n){return l(),i("div",null,[...n[0]||(n[0]=[a(`<h1 id="acwing基础课" tabindex="-1"><a class="header-anchor" href="#acwing基础课"><span>Acwing基础课</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-01-16</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> ## 基础算法 <h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序"><span>快速排序</span></a></h3><h4 id="acwing-785-快速排序" tabindex="-1"><a class="header-anchor" href="#acwing-785-快速排序"><span>AcWing 785. 快速排序</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">	vector&lt;int&gt; v;</span>
<span class="line">    int a;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        int m;</span>
<span class="line">        cin &gt;&gt; m;</span>
<span class="line">        v.push_back(m);</span>
<span class="line">    }</span>
<span class="line">    sort(v.begin(), v.end());</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        cout &lt;&lt; v[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">  return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第k个数" tabindex="-1"><a class="header-anchor" href="#第k个数"><span>第k个数</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">    vector&lt;int&gt; v;</span>
<span class="line">    int a, b;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        int m;</span>
<span class="line">        cin &gt;&gt; m;</span>
<span class="line">        v.push_back(m);</span>
<span class="line">    }</span>
<span class="line">    sort(v.begin(), v.end());</span>
<span class="line">    cout &lt;&lt; v[b-1];</span>
<span class="line"></span>
<span class="line">  return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序"><span>归并排序</span></a></h3><h4 id="acwing-787-归并排序" tabindex="-1"><a class="header-anchor" href="#acwing-787-归并排序"><span>AcWing 787. 归并排序</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">	vector&lt;int&gt; v;</span>
<span class="line">    int a;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        int m;</span>
<span class="line">        cin &gt;&gt; m;</span>
<span class="line">        v.push_back(m);</span>
<span class="line">    }</span>
<span class="line">    sort(v.begin(), v.end());</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        cout &lt;&lt; v[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">  return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二分" tabindex="-1"><a class="header-anchor" href="#二分"><span>二分</span></a></h3><p>可以直接用STL中的lower_bound和upper_bound</p><ul><li>lower_bound(n, n+a, target)</li><li>upper_bound(n, n+a, target)</li></ul><p><strong>举例</strong>（转载：<a href="https://blog.csdn.net/qq_40160605/article/details/80150252" target="_blank" rel="noopener noreferrer">博客链接</a>）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">const int maxn=100000+10;</span>
<span class="line">const int INF=2*int(1e9)+10;</span>
<span class="line">#define LL long long</span>
<span class="line">int cmd(int a,int b){</span>
<span class="line">	return a&gt;b;</span>
<span class="line">}</span>
<span class="line">int main(){</span>
<span class="line">	int num[6]={1,2,4,7,15,34}; </span>
<span class="line">	sort(num,num+6);                           //按从小到大排序 </span>
<span class="line">	int pos1=lower_bound(num,num+6,7)-num;    //返回数组中第一个大于或等于被查数的值 </span>
<span class="line">	int pos2=upper_bound(num,num+6,7)-num;    //返回数组中第一个大于被查数的值</span>
<span class="line">	cout&lt;&lt;pos1&lt;&lt;&quot; &quot;&lt;&lt;num[pos1]&lt;&lt;endl;</span>
<span class="line">	cout&lt;&lt;pos2&lt;&lt;&quot; &quot;&lt;&lt;num[pos2]&lt;&lt;endl;</span>
<span class="line">	sort(num,num+6,cmd);                      //按从大到小排序</span>
<span class="line">	int pos3=lower_bound(num,num+6,7,greater&lt;int&gt;())-num;  //返回数组中第一个小于或等于被查数的值 </span>
<span class="line">	int pos4=upper_bound(num,num+6,7,greater&lt;int&gt;())-num;  //返回数组中第一个小于被查数的值 </span>
<span class="line">	cout&lt;&lt;pos3&lt;&lt;&quot; &quot;&lt;&lt;num[pos3]&lt;&lt;endl;</span>
<span class="line">	cout&lt;&lt;pos4&lt;&lt;&quot; &quot;&lt;&lt;num[pos4]&lt;&lt;endl;</span>
<span class="line">	return 0;	</span>
<span class="line">} </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-789-数的范围" tabindex="-1"><a class="header-anchor" href="#acwing-789-数的范围"><span>AcWing 789. 数的范围</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">int n[100010];</span>
<span class="line">int a, b;</span>
<span class="line"></span>
<span class="line">// 左边距</span>
<span class="line">int get_l(int x){</span>
<span class="line">    int l = 0, r = a - 1;</span>
<span class="line">    while(l &lt; r){</span>
<span class="line">        int mid = (l + r ) / 2;</span>
<span class="line">        if(n[mid] &gt;= x) r = mid;</span>
<span class="line">        else l = mid + 1;</span>
<span class="line">    }</span>
<span class="line">    return l;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 右边距</span>
<span class="line"> int get_r(int x){</span>
<span class="line">    int l = 0, r = a - 1;</span>
<span class="line">    while(l &lt; r){</span>
<span class="line">    	int mid = (l + r + 1) / 2;</span>
<span class="line">        if(n[mid] &lt;= x) l = mid;</span>
<span class="line">        else r = mid - 1;</span>
<span class="line">    }</span>
<span class="line">    return r;</span>
<span class="line"> }</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; a; i++) cin &gt;&gt; n[i];</span>
<span class="line">    for(int i = 0; i &lt; b; i++){</span>
<span class="line">        int m;</span>
<span class="line">        cin &gt;&gt; m;</span>
<span class="line">        int l = get_l(m);</span>
<span class="line">        if(n[l] != m) cout &lt;&lt; -1 &lt;&lt; &quot; &quot; &lt;&lt; -1 &lt;&lt; endl;</span>
<span class="line">		else {</span>
<span class="line">			int r = get_r(m);</span>
<span class="line">			if(n[r] != m) cout &lt;&lt; -1 &lt;&lt; &quot; &quot; &lt;&lt; -1 &lt;&lt; endl;</span>
<span class="line">			else cout &lt;&lt; l &lt;&lt; &quot; &quot; &lt;&lt; r &lt;&lt; endl; </span>
<span class="line">		} </span>
<span class="line">    }</span>
<span class="line">	</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-790-数的三次方根" tabindex="-1"><a class="header-anchor" href="#acwing-790-数的三次方根"><span>AcWing 790. 数的三次方根</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">double getS(double x){</span>
<span class="line">    return x * x * x;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">double fun(double x){</span>
<span class="line">    double l = -10000, r = 10000;</span>
<span class="line">    while(l &lt; r){</span>
<span class="line">        double mid = (l + r) / 2;</span>
<span class="line">        double res = getS(mid);</span>
<span class="line">        if(fabs(res - x) &lt; 0.0000000001){</span>
<span class="line">        	return mid;</span>
<span class="line">		}</span>
<span class="line">        if(res &lt;= x) l = mid;</span>
<span class="line">        else r = mid;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    double a;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">	printf(&quot;%.6lf&quot;, fun(a));</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高精度" tabindex="-1"><a class="header-anchor" href="#高精度"><span>高精度</span></a></h3><h4 id="acwing-791-高精度加法" tabindex="-1"><a class="header-anchor" href="#acwing-791-高精度加法"><span>AcWing 791. 高精度加法</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a = int(input())</span>
<span class="line">b = int(input())</span>
<span class="line">print(a + b)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-792-高精度减法" tabindex="-1"><a class="header-anchor" href="#acwing-792-高精度减法"><span>AcWing 792. 高精度减法</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a = int(input())</span>
<span class="line">b = int(input())</span>
<span class="line">print(a - b)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-793-高精度乘法" tabindex="-1"><a class="header-anchor" href="#acwing-793-高精度乘法"><span>AcWing 793. 高精度乘法</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a = int(input())</span>
<span class="line">b = int(input())</span>
<span class="line">print(a * b)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-794-高精度除法" tabindex="-1"><a class="header-anchor" href="#acwing-794-高精度除法"><span>AcWing 794. 高精度除法</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a = int(input())</span>
<span class="line">b = int(input())</span>
<span class="line">print(a // b)</span>
<span class="line">print(a % b)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前缀和与差分" tabindex="-1"><a class="header-anchor" href="#前缀和与差分"><span>前缀和与差分</span></a></h3><h4 id="acwing-795-前缀和" tabindex="-1"><a class="header-anchor" href="#acwing-795-前缀和"><span>AcWing 795. 前缀和</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[N], m[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, b;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 1; i &lt;= a; i++){</span>
<span class="line">       cin &gt;&gt; n[i];</span>
<span class="line">       m[i] = n[i] + m[i - 1];</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    while(b--){</span>
<span class="line">        int x, y;</span>
<span class="line">        cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">        cout &lt;&lt; m[y] - m[x - 1] &lt;&lt; endl;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-796-子矩阵的和" tabindex="-1"><a class="header-anchor" href="#acwing-796-子矩阵的和"><span>AcWing 796. 子矩阵的和</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[1001][1001], m[1001][1001];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, b, c;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;</span>
<span class="line">    for(int i = 1; i &lt;= a; i++){</span>
<span class="line">        for(int j = 1; j &lt;= b; j++){</span>
<span class="line">            cin &gt;&gt; n[i][j];</span>
<span class="line">            m[i][j] = n[i][j] + m[i-1][j] + m[i][j-1] - m[i-1][j-1];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    while(c--){</span>
<span class="line">        int q, w, e, r;</span>
<span class="line">        cin &gt;&gt; q &gt;&gt; w &gt;&gt; e &gt;&gt; r;</span>
<span class="line">        cout &lt;&lt; m[e][r] + m[q-1][w-1] - m[q-1][r] - m[e][w-1] &lt;&lt; endl;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-797-差分" tabindex="-1"><a class="header-anchor" href="#acwing-797-差分"><span>AcWing 797. 差分</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[N], m[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">   int a, b;</span>
<span class="line">   cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">   for(int i = 1; i &lt;= a; i++){</span>
<span class="line">       cin &gt;&gt; n[i];</span>
<span class="line">       m[i] = n[i] - n[i-1];</span>
<span class="line">   }</span>
<span class="line">   while(b--){</span>
<span class="line">       int x, y ,z;</span>
<span class="line">       cin &gt;&gt; x &gt;&gt; y &gt;&gt; z;</span>
<span class="line">       m[x] += z;</span>
<span class="line">       m[y+1] -= z;</span>
<span class="line">   }</span>
<span class="line">   for(int i = 1; i &lt;= a; i++){</span>
<span class="line">       n[i] = m[i] + n[i-1];</span>
<span class="line">       cout &lt;&lt; n[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">   }</span>
<span class="line">   </span>
<span class="line">   return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-798-差分矩阵" tabindex="-1"><a class="header-anchor" href="#acwing-798-差分矩阵"><span>AcWing 798. 差分矩阵</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[1010][1010], m[1010][1010];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  </span>
<span class="line">   int a, b, c;</span>
<span class="line">   cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;</span>
<span class="line">   for(int i = 1; i &lt;= a; i++){</span>
<span class="line">       for(int j = 1; j &lt;= b; j++){</span>
<span class="line">           cin &gt;&gt; n[i][j];</span>
<span class="line">           m[i][j] = n[i][j] - n[i-1][j] - n[i][j-1] + n[i-1][j-1];</span>
<span class="line">       }</span>
<span class="line">   }</span>
<span class="line">   while(c--){</span>
<span class="line">       int q, w, e, r, t;</span>
<span class="line">       cin &gt;&gt; q &gt;&gt; w &gt;&gt; e &gt;&gt; r &gt;&gt; t;</span>
<span class="line">       m[q][w] += t;</span>
<span class="line">       m[e+1][r+1] += t;</span>
<span class="line">       m[e+1][w] -= t;</span>
<span class="line">       m[q][r+1] -= t;</span>
<span class="line">   }</span>
<span class="line">  for(int i = 1; i &lt;= a; i++){</span>
<span class="line">      for(int j = 1; j &lt;= b; j++){</span>
<span class="line">          n[i][j] = n[i-1][j] + n[i][j-1] - n[i-1][j-1] + m[i][j];</span>
<span class="line">          cout &lt;&lt; n[i][j] &lt;&lt; &quot; &quot;;</span>
<span class="line">      }</span>
<span class="line">      cout &lt;&lt; endl;</span>
<span class="line">  }</span>
<span class="line">   </span>
<span class="line">   return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针算法" tabindex="-1"><a class="header-anchor" href="#双指针算法"><span>双指针算法</span></a></h3><h4 id="acwing-799-最长连续不重复子序列" tabindex="-1"><a class="header-anchor" href="#acwing-799-最长连续不重复子序列"><span>AcWing 799. 最长连续不重复子序列</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, l, r, res = 0;</span>
<span class="line">    map&lt;int, int&gt; is;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    for(int i = 0, j = 0; i &lt; a; i++){</span>
<span class="line">        cin &gt;&gt; n[i];</span>
<span class="line">        is[n[i]] ++;</span>
<span class="line">        while(is[n[i]] &gt; 1){</span>
<span class="line">            is[n[j]] --;</span>
<span class="line">            j ++;</span>
<span class="line">        }</span>
<span class="line">        res = max(res, i - j + 1);</span>
<span class="line">    }</span>
<span class="line">    cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">  </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-800-数组元素的目标和" tabindex="-1"><a class="header-anchor" href="#acwing-800-数组元素的目标和"><span>AcWing 800. 数组元素的目标和</span></a></h4><p>哈希方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[N], m[N];</span>
<span class="line">unordered_map&lt;int, int&gt; ump;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, b, c, r1 = 0, r2 = 0;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;</span>
<span class="line">    for(int i = 0; i &lt; a; i++) {</span>
<span class="line">        cin &gt;&gt; n[i];</span>
<span class="line">        ump[n[i]] = i;</span>
<span class="line">    }</span>
<span class="line">    for(int j = 0; j &lt; b; j++) {</span>
<span class="line">        cin &gt;&gt; m[j];</span>
<span class="line">        if(ump.count(c - m[j])){</span>
<span class="line">            r1 = ump[c - m[j]], r2 = j;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    cout &lt;&lt; r1 &lt;&lt; &quot; &quot; &lt;&lt; r2 &lt;&lt; endl;</span>
<span class="line">  </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-2816-判断子序列" tabindex="-1"><a class="header-anchor" href="#acwing-2816-判断子序列"><span>AcWing 2816. 判断子序列</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int n[N], m[N];</span>
<span class="line">unordered_map&lt;int, int&gt; ump;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, b;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; a; i++) cin &gt;&gt; n[i];</span>
<span class="line">    for(int j = 0; j &lt; b; j++) cin &gt;&gt; m[j];</span>
<span class="line">   </span>
<span class="line">    int x = 0, y = 0;</span>
<span class="line">    while(x &lt; a &amp;&amp; y &lt; b){</span>
<span class="line">        if(n[x] == m[y]) x ++;</span>
<span class="line">        y ++;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    if(x == a) cout &lt;&lt; &quot;Yes&quot; &lt;&lt; endl;</span>
<span class="line">    else cout &lt;&lt; &quot;No&quot; &lt;&lt; endl;</span>
<span class="line">  </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算"><span>位运算</span></a></h3><h4 id="acwing-801-二进制中1的个数" tabindex="-1"><a class="header-anchor" href="#acwing-801-二进制中1的个数"><span>AcWing 801. 二进制中1的个数</span></a></h4><blockquote><p>小知识：n的二进制表示中第k位是几？<br> 答案：n &gt;&gt; k &amp; 1<br> n右移k位&amp;1后得出二进制数的最后一位</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">// 返回x的最后一位1</span>
<span class="line">// 比如10010的最后一位就是10</span>
<span class="line">int lowbit(int x){</span>
<span class="line">    return x &amp; -x;    </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">        </span>
<span class="line">    int a, b, res;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        cin &gt;&gt; b;</span>
<span class="line">        res = 0;</span>
<span class="line">        while(b){</span>
<span class="line">            b -= lowbit(b);</span>
<span class="line">            res ++;</span>
<span class="line">        }</span>
<span class="line">        cout &lt;&lt; res &lt;&lt; &quot; &quot;;</span>
<span class="line">    }</span>
<span class="line">        </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="离散化" tabindex="-1"><a class="header-anchor" href="#离散化"><span>离散化</span></a></h3><h4 id="acwing-802-区间和" tabindex="-1"><a class="header-anchor" href="#acwing-802-区间和"><span>AcWing 802. 区间和</span></a></h4><blockquote><p>小知识<br> 离散化：将100，2000，30000，4000000映射为1，2，3，4的过程</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">// 此处不是1e5+10</span>
<span class="line">// 极端情况下第一排输入会有1e5的数据，第二排会有2e5的数据</span>
<span class="line">const int N = 3e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int s[N], f[N];</span>
<span class="line"></span>
<span class="line">vector&lt;int&gt; v;</span>
<span class="line">vector&lt;pair&lt;int, int&gt; &gt; q, w;</span>
<span class="line">// 二分查找元素下标</span>
<span class="line">int find(int x){</span>
<span class="line">    int l = 0, r = v.size() - 1;</span>
<span class="line">    while(l &lt; r){</span>
<span class="line">        int mid = l + r &gt;&gt; 1;</span>
<span class="line">        if(v[mid] &gt;= x) r = mid;</span>
<span class="line">        else l = mid + 1;</span>
<span class="line">    }</span>
<span class="line">    return l + 1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, b, m, n;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">        q.push_back({m, n});</span>
<span class="line">        v.push_back(m);</span>
<span class="line">    }</span>
<span class="line">    for(int j = 0; j &lt; b; j++){</span>
<span class="line">        cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">        w.push_back({m, n});</span>
<span class="line">        v.push_back(m);</span>
<span class="line">        v.push_back(n);</span>
<span class="line">    }</span>
<span class="line">    sort(v.begin(), v.end());</span>
<span class="line">    // 去重</span>
<span class="line">    v.erase(unique(v.begin(), v.end()), v.end());</span>
<span class="line">    // 离散化处理</span>
<span class="line">    for(auto i: q){</span>
<span class="line">        int x = find(i.first);</span>
<span class="line">        s[x] += i.second;</span>
<span class="line">    }</span>
<span class="line">    // 预处理前缀和</span>
<span class="line">    for(int i = 1; i &lt;= v.size(); i++){</span>
<span class="line">        f[i] = f[i-1] + s[i];</span>
<span class="line">    }</span>
<span class="line">    // 查询结果</span>
<span class="line">    for(auto i: w){</span>
<span class="line">        int l = find(i.first), r = find(i.second);</span>
<span class="line">        cout &lt;&lt; f[r] - f[l-1] &lt;&lt; endl;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://www.lijunxi.site:4000/api/file/download/6261dfbb-afd5-42b9-bcdf-46091f5b8e0f.jpg" alt="图片描述"></p><p>数据范围分析</p><h3 id="区间合并" tabindex="-1"><a class="header-anchor" href="#区间合并"><span>区间合并</span></a></h3><h4 id="acwing-803-区间合并" tabindex="-1"><a class="header-anchor" href="#acwing-803-区间合并"><span>AcWing 803. 区间合并</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ; </span>
<span class="line"></span>
<span class="line">struct point{</span>
<span class="line">    int x, y;</span>
<span class="line">} n[N];</span>
<span class="line"></span>
<span class="line">bool cmp(point a, point b){</span>
<span class="line">    if(a.x == b.x) return a.y &lt; b.y;</span>
<span class="line">    return a.x &lt; b.x;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, idx = 0;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    for(int i = 0; i &lt; a; i++) cin &gt;&gt; n[i].x &gt;&gt; n[i].y;</span>
<span class="line">    sort(n, n+a, cmp);</span>
<span class="line">    int langm = n[0].y;</span>
<span class="line">    for(int i = 1; i &lt; a; i++){</span>
<span class="line">        langm = max(langm, n[i-1].y);</span>
<span class="line">        if(langm &lt; n[i].x) idx++;</span>
<span class="line">    }</span>
<span class="line">    cout &lt;&lt; idx + 1 &lt;&lt; endl;</span>
<span class="line">  </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><h3 id="单链表" tabindex="-1"><a class="header-anchor" href="#单链表"><span>单链表</span></a></h3><h4 id="acwing-826-单链表" tabindex="-1"><a class="header-anchor" href="#acwing-826-单链表"><span>AcWing 826. 单链表</span></a></h4><p>数组模拟单链表</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">// 头指针（用下表指针辅助），下标指针</span>
<span class="line">int hidx = -1, idx = 0;</span>
<span class="line">// 元素值，元素下表</span>
<span class="line">int n[N], ne[N];</span>
<span class="line"></span>
<span class="line">void insert(int k, int x){</span>
<span class="line">    // 新节点值赋值</span>
<span class="line">    n[idx] = x;</span>
<span class="line">    // 将新结点下一个结点赋值为插入位置的下一个结点</span>
<span class="line">    ne[idx] = ne[k];</span>
<span class="line">    // 将插入位置的一下个节点指向新节点</span>
<span class="line">    ne[k] = idx;</span>
<span class="line">    idx++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void addHead(int x){</span>
<span class="line">    // 头节点赋值</span>
<span class="line">    n[idx] = x;</span>
<span class="line">    // 指向头指针</span>
<span class="line">    ne[idx] = hidx;</span>
<span class="line">    // 更改头指针为当前下表</span>
<span class="line">    hidx = idx;</span>
<span class="line">    idx++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void del(int idx){</span>
<span class="line">    ne[idx] = ne[ne[idx]];   </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int x, k, num; </span>
<span class="line">    char s;</span>
<span class="line">    cin &gt;&gt; x;</span>
<span class="line">    while(x--){</span>
<span class="line">        cin &gt;&gt; s;</span>
<span class="line">        if(s == &#39;H&#39;){</span>
<span class="line">            cin &gt;&gt; num;</span>
<span class="line">            addHead(num);</span>
<span class="line">        }</span>
<span class="line">        else if(s == &#39;D&#39;){</span>
<span class="line">            cin &gt;&gt; k;</span>
<span class="line">            //判断是否删除的为头节点</span>
<span class="line">            if(!k) hidx = ne[hidx];  </span>
<span class="line">            del(k-1);</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            cin &gt;&gt; k &gt;&gt; num;</span>
<span class="line">            insert(k-1, num);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    while(hidx != -1){</span>
<span class="line">        cout &lt;&lt; n[hidx] &lt;&lt; &quot; &quot;;</span>
<span class="line">        hidx = ne[hidx];</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双链表" tabindex="-1"><a class="header-anchor" href="#双链表"><span>双链表</span></a></h3><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h3><h4 id="acacwing-3302-表达式求值" tabindex="-1"><a class="header-anchor" href="#acacwing-3302-表达式求值"><span>AcAcWing 3302. 表达式求值</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">stack&lt;int&gt; s;</span>
<span class="line">stack&lt;char&gt; f;</span>
<span class="line">unordered_map&lt;char, int&gt; ump;</span>
<span class="line"></span>
<span class="line">void init_map(){</span>
<span class="line">	ump[&#39;*&#39;] = 2;</span>
<span class="line">	ump[&#39;/&#39;] = 2;</span>
<span class="line">	ump[&#39;+&#39;] = 1;</span>
<span class="line">	ump[&#39;-&#39;] = 1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void eval(){</span>
<span class="line">	int num = 0;</span>
<span class="line">	int x = s.top(); s.pop();</span>
<span class="line">	int y = s.top(); s.pop();</span>
<span class="line">	char op = f.top(); f.pop();</span>
<span class="line">	if(op == &#39;+&#39;) num = x + y;</span>
<span class="line">	else if(op == &#39;-&#39;) num = y - x;</span>
<span class="line">	else if(op == &#39;*&#39;) num = x * y;</span>
<span class="line">	else num = y / x;</span>
<span class="line">	s.push(num);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    init_map();</span>
<span class="line">    string str;</span>
<span class="line">    int num, idx = 0;</span>
<span class="line">    char c;</span>
<span class="line">    cin &gt;&gt; str;</span>
<span class="line">    int len = str.size();</span>
<span class="line">    for(int i = 0; i &lt; len; i++){</span>
<span class="line">        if(str[i] &gt;= &#39;0&#39; &amp;&amp; str[i] &lt;= &#39;9&#39;){</span>
<span class="line">            idx = i;</span>
<span class="line">            num = 0;</span>
<span class="line">            while(str[idx] &gt;= &#39;0&#39; &amp;&amp; str[idx] &lt;= &#39;9&#39; &amp;&amp; idx &lt; len){</span>
<span class="line">                num = num * 10 + str[idx] - &#39;0&#39;;</span>
<span class="line">                idx++; </span>
<span class="line">            }</span>
<span class="line">            s.push(num);</span>
<span class="line">            i = idx - 1;</span>
<span class="line">        }</span>
<span class="line">        else if(str[i] == &#39;(&#39;) f.push(str[i]);</span>
<span class="line">        else if(str[i] == &#39;)&#39;){</span>
<span class="line">       		while(f.size() &amp;&amp; s.size() &gt;= 2 &amp;&amp; ump[str[i]] &lt;= ump[f.top()] &amp;&amp; f.top() != &#39;(&#39;) eval();</span>
<span class="line">       		f.pop();</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">        	while(f.size() &amp;&amp; s.size() &gt;= 2 &amp;&amp; ump[str[i]] &lt;= ump[f.top()]) eval();</span>
<span class="line">            f.push(str[i]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    while(f.size()) eval();</span>
<span class="line">	cout &lt;&lt; s.top() &lt;&lt; endl; </span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h3><h4 id="acwing-829-模拟队列" tabindex="-1"><a class="header-anchor" href="#acwing-829-模拟队列"><span>AcWing 829. 模拟队列</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">queue&lt;int&gt; q;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int a, num;</span>
<span class="line">    string s;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    while(a--){</span>
<span class="line">        cin &gt;&gt; s;</span>
<span class="line">        if(s == &quot;push&quot;){</span>
<span class="line">            cin &gt;&gt; num;</span>
<span class="line">            q.push(num);</span>
<span class="line">        }</span>
<span class="line">        else if(s == &quot;pop&quot;){</span>
<span class="line">            q.pop();</span>
<span class="line">        }</span>
<span class="line">        else if(s == &quot;empty&quot;){</span>
<span class="line">            if(q.empty()) cout &lt;&lt;&quot;YES&quot;&lt;&lt;endl;</span>
<span class="line">            else cout &lt;&lt;&quot;NO&quot; &lt;&lt; endl;</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            cout &lt;&lt; q.front() &lt;&lt; endl;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">   </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单调栈" tabindex="-1"><a class="header-anchor" href="#单调栈"><span>单调栈</span></a></h3><h4 id="acwing-830-单调栈" tabindex="-1"><a class="header-anchor" href="#acwing-830-单调栈"><span>AcWing 830. 单调栈</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">stack&lt;int&gt; s;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, num;</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    for(int i = 0; i &lt; a; i++) {</span>
<span class="line">        cin &gt;&gt; num;</span>
<span class="line">        while(s.size() &amp;&amp; s.top() &gt;= num) s.pop();</span>
<span class="line">        if(!s.size()) cout &lt;&lt; -1 &lt;&lt; &quot; &quot;;</span>
<span class="line">        else cout &lt;&lt; s.top() &lt;&lt; &quot; &quot;;</span>
<span class="line">        s.push(num);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单调队列" tabindex="-1"><a class="header-anchor" href="#单调队列"><span>单调队列</span></a></h3><h4 id="acwing-154-滑动窗口" tabindex="-1"><a class="header-anchor" href="#acwing-154-滑动窗口"><span>AcWing 154. 滑动窗口</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;iostream&gt;</span>
<span class="line">#include&lt;algorithm&gt;</span>
<span class="line">#include&lt;deque&gt;</span>
<span class="line">#include&lt;vector&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e6 + 10 ;</span>
<span class="line"></span>
<span class="line">// deque没法直接获取下表的元素值，所以需要用一个数组来维护 </span>
<span class="line">int n[N];</span>
<span class="line">deque&lt;int&gt; dq; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  </span>
<span class="line">    int a, b, num;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 1; i &lt;= a; i++) cin &gt;&gt; n[i];</span>
<span class="line">    for(int i = 1; i &lt;= a; i++){</span>
<span class="line">    	// 当尾元素比n[i]大时，需要弹出 </span>
<span class="line">    	while(dq.size() &amp;&amp; n[dq.back()] &gt; n[i]) dq.pop_back();</span>
<span class="line">    	dq.push_back(i);</span>
<span class="line">    	// 当队列的个数满足b时们需要弹出首元素</span>
<span class="line">		// 这里不能用dq.size()来判断是否满足个数，因为可能出现首元素到i之间有些元素已经弹出了但size总数任然小于b情况 </span>
<span class="line">    	if(dq.size() &amp;&amp; i - dq.front() &gt;= b) dq.pop_front();</span>
<span class="line">    	// 当i大于b时候就能开始输出了，这里也不能用dq.size()来判断，因为存在整个过程都小于b的情况，这样就没有输出了 </span>
<span class="line">		if(i &gt;= b) cout &lt;&lt; n[dq.front()] &lt;&lt; &quot; &quot;;</span>
<span class="line">	}</span>
<span class="line">	dq.clear();</span>
<span class="line">	puts(&quot;&quot;);</span>
<span class="line">      for(int i = 1; i &lt;= a; i++){</span>
<span class="line">    	while(dq.size() &amp;&amp; n[dq.back()] &lt; n[i]) dq.pop_back();</span>
<span class="line">    	dq.push_back(i);</span>
<span class="line">    	if(dq.size() &amp;&amp; i - dq.front() &gt;= b) dq.pop_front();</span>
<span class="line">		if(i &gt;= b) cout &lt;&lt; n[dq.front()] &lt;&lt; &quot; &quot;;</span>
<span class="line">	}</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp"><span>KMP</span></a></h3><h3 id="tire" tabindex="-1"><a class="header-anchor" href="#tire"><span>Tire</span></a></h3><h4 id="acwing-835-trie字符串统计" tabindex="-1"><a class="header-anchor" href="#acwing-835-trie字符串统计"><span>AcWing 835. Trie字符串统计</span></a></h4><blockquote><p>Trie树（字典树）：高效存储和查找字符串集合的数据结合</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;iostream&gt;</span>
<span class="line">#include&lt;algorithm&gt;</span>
<span class="line">#include&lt;deque&gt;</span>
<span class="line">#include&lt;vector&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line"></span>
<span class="line">// son[][]存储子节点的位置，分支最多26条</span>
<span class="line">// cnt[]存储以某节点结尾的字符串个数（同时也起标记作用）</span>
<span class="line">// idx表示当前要插入的节点是第几个,每创建一个节点值+1</span>
<span class="line">int son[N][26], cnt[N], idx = 0;</span>
<span class="line"></span>
<span class="line">void insert(string str){</span>
<span class="line">	// 类似指针，指向当前节点</span>
<span class="line">	int p = 0;</span>
<span class="line">	for(int i = 0; i &lt; str.size(); i++){</span>
<span class="line">		int s = str[i] - &#39;a&#39;;</span>
<span class="line">		// 该字符不存在就创建一个 </span>
<span class="line">		if(!son[p][s]) son[p][s] = ++idx;</span>
<span class="line">		// 	p指向下一个节点</span>
<span class="line">		p = son[p][s];</span>
<span class="line">	}</span>
<span class="line">	// 统计字符串个数 </span>
<span class="line">	cnt[p] ++;</span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">int query(string str){</span>
<span class="line">	int p = 0;</span>
<span class="line">	for(int i = 0; i &lt; str.size(); i++){</span>
<span class="line">		int s = str[i] - &#39;a&#39;;</span>
<span class="line">		if(!son[p][s]) return 0;</span>
<span class="line">		p = son[p][s]; </span>
<span class="line">	}</span>
<span class="line">	return cnt[p];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line"> </span>
<span class="line">	int a;</span>
<span class="line">	char c;</span>
<span class="line">	string str;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		cin &gt;&gt; c;</span>
<span class="line">		cin &gt;&gt; str;</span>
<span class="line">		if(c == &#39;I&#39;) insert(str);</span>
<span class="line">		else cout &lt;&lt; query(str) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-143-最大异或对" tabindex="-1"><a class="header-anchor" href="#acwing-143-最大异或对"><span>AcWing 143. 最大异或对</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;iostream&gt;</span>
<span class="line">#include&lt;algorithm&gt;</span>
<span class="line">#include&lt;deque&gt;</span>
<span class="line">#include&lt;vector&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">// 最多有1e5个数，每个数的二进制数有31位，极限情况下就1e5 * 31</span>
<span class="line">const int N = 31e5 + 10 ;</span>
<span class="line"></span>
<span class="line">int son[N][2], n[N], idx = 0;</span>
<span class="line"></span>
<span class="line">// 将数字插入trie树中 </span>
<span class="line">void insert(int x){</span>
<span class="line">	int p = 0;</span>
<span class="line">	// 数的范围为小于2e31次方 </span>
<span class="line">	for(int i = 30; i &gt;= 0; i --){</span>
<span class="line">		int s = x &gt;&gt; i &amp; 1;</span>
<span class="line">		if(!son[p][s]) son[p][s] = ++idx;</span>
<span class="line">		p = son[p][s];</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int x){</span>
<span class="line">	int p = 0, res = 0;</span>
<span class="line">	for(int i = 30; i &gt;= 0; i--){</span>
<span class="line">		// x二进制第i位上的数 </span>
<span class="line">		int s = x &gt;&gt; i &amp; 1;</span>
<span class="line">		// 若存在相反的数 </span>
<span class="line">		if(son[p][!s]){</span>
<span class="line">			p = son[p][!s];</span>
<span class="line">			// 1左移i位就是2^(30-i)次方 </span>
<span class="line">			res += 1 &lt;&lt; i;</span>
<span class="line">		}</span>
<span class="line">		else{</span>
<span class="line">			p = son[p][s];</span>
<span class="line">			res += 0 &lt;&lt; i;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return res;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line"></span>
<span class="line">	int a, res = 0;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 0; i &lt; a; i++) {</span>
<span class="line">		cin &gt;&gt; n[i];</span>
<span class="line">		insert(n[i]);</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; a; i++) res = max(res, query(n[i]));</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并查集" tabindex="-1"><a class="header-anchor" href="#并查集"><span>并查集</span></a></h3><h4 id="acwing-836-合并集合" tabindex="-1"><a class="header-anchor" href="#acwing-836-合并集合"><span>AcWing 836. 合并集合</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;iostream&gt;</span>
<span class="line">#include&lt;algorithm&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10 ;</span>
<span class="line">int n[N];</span>
<span class="line"></span>
<span class="line">// 找到祖宗结点</span>
<span class="line">int find(int x){</span>
<span class="line">    // 修改结点，避免重复查找</span>
<span class="line">   if(n[x] != x) n[x] = find(n[x]);</span>
<span class="line">   return n[x];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int a, b;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; a; i++) n[i] = i;</span>
<span class="line">    for(int i = 0; i &lt; b; i++){</span>
<span class="line">        char x;</span>
<span class="line">        int o, p;</span>
<span class="line">        cin &gt;&gt; x &gt;&gt; o &gt;&gt; p;</span>
<span class="line">        if(x == &#39;M&#39;){</span>
<span class="line">            n[find(o)] = find(p);</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            if(find(o) == find(p)) cout &lt;&lt; &quot;Yes&quot; &lt;&lt; endl;</span>
<span class="line">            else cout &lt;&lt; &quot;No&quot; &lt;&lt; endl;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">     </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆"><span>堆</span></a></h3><blockquote><p>堆：优先队列</p></blockquote><h4 id="acwing-838-堆排序" tabindex="-1"><a class="header-anchor" href="#acwing-838-堆排序"><span>AcWing 838. 堆排序</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">int n[N];</span>
<span class="line">// 从小到大排序，从大到小就为less&lt;int&gt;，与sort相反</span>
<span class="line">priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; pq;</span>
<span class="line">int main(){</span>
<span class="line">    </span>
<span class="line">    int a, b, num;</span>
<span class="line">    cin&gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; a; i++){</span>
<span class="line">        cin &gt;&gt; num;</span>
<span class="line">        pq.push(num);</span>
<span class="line">    }</span>
<span class="line">    int idx = 0;</span>
<span class="line">    while(idx != b){</span>
<span class="line">        idx ++;</span>
<span class="line">        cout &lt;&lt; pq.top() &lt;&lt; &quot; &quot;;</span>
<span class="line">        pq.pop();</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h3><h2 id="搜索与图论" tabindex="-1"><a class="header-anchor" href="#搜索与图论"><span>搜索与图论</span></a></h2><h3 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs"><span>DFS</span></a></h3><h4 id="acwing-842-排列数字" tabindex="-1"><a class="header-anchor" href="#acwing-842-排列数字"><span>AcWing 842. 排列数字</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">    </span>
<span class="line">int a;</span>
<span class="line">int is[N];</span>
<span class="line">vector&lt;int&gt; v;</span>
<span class="line"></span>
<span class="line">void dfs(int x){</span>
<span class="line">    if(x == 0) return; </span>
<span class="line">    if(v.size() == a){</span>
<span class="line">    	for(int i = 0; i &lt; a; i++) cout &lt;&lt; v[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">    	cout &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		if(!is[i]){</span>
<span class="line">			is[i] = 1;</span>
<span class="line">			v.push_back(i);</span>
<span class="line">			dfs(i);</span>
<span class="line">			v.pop_back();</span>
<span class="line">			is[i] = 0;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    dfs(a);</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-843-n-皇后问题" tabindex="-1"><a class="header-anchor" href="#acwing-843-n-皇后问题"><span>AcWing 843. n-皇后问题</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">    </span>
<span class="line">int a;</span>
<span class="line">char n[11][11];</span>
<span class="line">int l[11], xie[11], fx[11];</span>
<span class="line"></span>
<span class="line">void print(){</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= a; j++){</span>
<span class="line">			cout &lt;&lt; n[i][j];</span>
<span class="line">		}</span>
<span class="line">		puts(&quot;&quot;);</span>
<span class="line">	}</span>
<span class="line">	puts(&quot;&quot;);</span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">void dfs(int x){</span>
<span class="line">	if(x == a + 1){</span>
<span class="line">		print();</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">    for(int i = 1; i &lt;= a; i++){</span>
<span class="line">    	// 	i - x + a是为了避免出现下标是负数的情况 </span>
<span class="line">    	if(!l[i] &amp;&amp; !xie[i - x + a] &amp;&amp; !fx[i + x]){</span>
<span class="line">    		n[x][i] = &#39;Q&#39;;</span>
<span class="line">    		xie[i - x + a] = 1;</span>
<span class="line">    		fx[i + x] = 1;</span>
<span class="line">    		l[i] = 1;</span>
<span class="line">    		dfs(x + 1);</span>
<span class="line">    		n[x][i] = &#39;.&#39;;</span>
<span class="line">    		xie[i - x + a] = 0;</span>
<span class="line">    		fx[i + x] = 0;</span>
<span class="line">    		l[i] = 0;</span>
<span class="line">		}</span>
<span class="line">	</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  	</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= a; j++){</span>
<span class="line">			n[i][j] = &#39;.&#39;;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">    dfs(1);</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs"><span>BFS</span></a></h3><h4 id="acwing-844-走迷宫" tabindex="-1"><a class="header-anchor" href="#acwing-844-走迷宫"><span>AcWing 844. 走迷宫</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">int a, b;</span>
<span class="line">int n[1010][1010], is[1001][1001];</span>
<span class="line">int ix[4] = {1, -1, 0 ,0}, iy[4] = {0, 0, 1, -1};</span>
<span class="line"></span>
<span class="line">void bfs(int x, int y){</span>
<span class="line">    queue&lt;pair&lt;int, int&gt;&gt; q;</span>
<span class="line">    map&lt;pair&lt;int, int&gt;, int&gt; mp;</span>
<span class="line">    q.push({0, 0});</span>
<span class="line">    mp[{0, 0}] = 0;</span>
<span class="line">    while(!q.empty()){</span>
<span class="line">    	auto top = q.front();</span>
<span class="line">    	q.pop();</span>
<span class="line">    	int xx = top.first, yy = top.second;</span>
<span class="line">    	if(xx == a - 1 &amp;&amp; yy == b - 1){</span>
<span class="line">    		cout &lt;&lt; mp[{xx, yy}] &lt;&lt; endl;</span>
<span class="line">    		return;</span>
<span class="line">		}</span>
<span class="line">		for(int i = 0; i &lt; 4; i++){</span>
<span class="line">			int x = xx + ix[i], y = yy + iy[i];</span>
<span class="line">			if(!n[x][y] &amp;&amp; !is[x][y] &amp;&amp; x &gt;= 0 &amp;&amp; x &lt; a &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; b){</span>
<span class="line">				is[x][y] = 1;</span>
<span class="line">				q.push({x, y});</span>
<span class="line">				mp[{x, y}] = mp[{xx, yy}] + 1;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  	</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">	    for(int j = 0; j &lt; b; j++){</span>
<span class="line">	        cin &gt;&gt; n[i][j];</span>
<span class="line">	    }</span>
<span class="line">	}</span>
<span class="line">	bfs(0, 0);</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树与图的深度优先遍历" tabindex="-1"><a class="header-anchor" href="#树与图的深度优先遍历"><span>树与图的深度优先遍历</span></a></h3><h4 id="acwing-846-树的重心" tabindex="-1"><a class="header-anchor" href="#acwing-846-树的重心"><span>AcWing 846. 树的重心</span></a></h4><p>图的存储采用数组模拟邻接表</p><p>思路：邻接表dfs</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 2e5 + 10;</span>
<span class="line"></span>
<span class="line">// 邻接表头结点 </span>
<span class="line">int h[N];</span>
<span class="line">// 存储元素 </span>
<span class="line">int e[N];</span>
<span class="line">// 下个节点值</span>
<span class="line">int ne[N];</span>
<span class="line">// 结点是否访问过</span>
<span class="line">int st[N]; </span>
<span class="line">// 单链表指针 </span>
<span class="line">int idx = 0; </span>
<span class="line">int a, ans = N; </span>
<span class="line"></span>
<span class="line">void add(int x, int y){</span>
<span class="line">	e[idx] = y, ne[idx] = h[x], h[x] = idx++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int dfs(int x){</span>
<span class="line">	int res = 0, sum = 1;</span>
<span class="line">	st[x] = 1;	</span>
<span class="line">	for(int i = h[x]; i != -1; i = ne[i]){</span>
<span class="line">		int j = e[i];</span>
<span class="line">		if(!st[j]){</span>
<span class="line">			int s = dfs(j);</span>
<span class="line">			// 子图最大结点数 </span>
<span class="line">			res = max(res, s);</span>
<span class="line">			// j为根的节点总数 </span>
<span class="line">			sum += s;		</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	// a - sum：另一部分的节点总数 </span>
<span class="line">	res = max(res, a - sum);</span>
<span class="line">	// 选取最小的最大结点数 </span>
<span class="line">	ans = min(ans, res);</span>
<span class="line">	return sum;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  	//初始化h数组 -1表示尾节</span>
<span class="line">	memset(h, -1, sizeof h); </span>
<span class="line">    cin.tie(0);cout.tie(0);ios::sync_with_stdio(false);</span>
<span class="line">    cin &gt;&gt; a;</span>
<span class="line">    // 创建邻接表 </span>
<span class="line">    for(int i = 0; i &lt; a - 1; i++){</span>
<span class="line">    	int m, n;</span>
<span class="line">    	cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">    	add(m, n);</span>
<span class="line">    	add(n, m);</span>
<span class="line">	}</span>
<span class="line">    dfs(1);</span>
<span class="line">    cout &lt;&lt; ans &lt;&lt; endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树与图的广度优先遍历" tabindex="-1"><a class="header-anchor" href="#树与图的广度优先遍历"><span>树与图的广度优先遍历</span></a></h3><h4 id="acwing-847-图中点的层次" tabindex="-1"><a class="header-anchor" href="#acwing-847-图中点的层次"><span>AcWing 847. 图中点的层次</span></a></h4><p>思路：邻接表bfs</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 2e5 + 10;</span>
<span class="line"></span>
<span class="line">// 邻接表头结点 </span>
<span class="line">int h[N];</span>
<span class="line">// 存储元素 </span>
<span class="line">int e[N];</span>
<span class="line">// 下个节点值</span>
<span class="line">int ne[N];</span>
<span class="line">// 结点是否访问过</span>
<span class="line">int st[N]; </span>
<span class="line">// 单链表指针 </span>
<span class="line">int idx = 0; </span>
<span class="line">int a, b, ans = N; </span>
<span class="line"></span>
<span class="line">void add(int x, int y){</span>
<span class="line">	e[idx] = y, ne[idx] = h[x], h[x] = idx, idx ++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void dfs(int x){</span>
<span class="line">    queue&lt;pair&lt;int, int&gt;&gt; q;</span>
<span class="line">    map&lt;pair&lt;int, int&gt;, int&gt; ump;</span>
<span class="line">    q.push({1, 1});</span>
<span class="line">    ump[{1, 1}] = 0;</span>
<span class="line">    while(!q.empty()){</span>
<span class="line">        auto top = q.front();</span>
<span class="line">        q.pop();</span>
<span class="line">        int xx = top.first, yy = top.second;</span>
<span class="line">        if(yy == a){</span>
<span class="line">        	cout &lt;&lt; ump[{xx, yy}] &lt;&lt; endl;</span>
<span class="line">        	return;</span>
<span class="line">		}</span>
<span class="line">		for(int i = h[yy]; i != -1; i = ne[i]){</span>
<span class="line">			if(ump.find({yy, e[i]}) == ump.end()){</span>
<span class="line">				q.push({yy, e[i]});</span>
<span class="line">				ump[{yy, e[i]}] = ump[{xx, yy}] + 1;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">    }   </span>
<span class="line">	cout &lt;&lt; -1 &lt;&lt; endl; </span>
<span class="line"> </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  	//初始化h数组 -1表示尾节</span>
<span class="line">	memset(h, -1, sizeof h); </span>
<span class="line">    cin.tie(0);cout.tie(0);ios::sync_with_stdio(false);</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    // 创建邻接表 </span>
<span class="line">    for(int i = 0; i &lt; b; i++){</span>
<span class="line">    	int m, n;</span>
<span class="line">    	cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">    	add(m, n);</span>
<span class="line">	}</span>
<span class="line">    dfs(1);</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序"><span>拓扑排序</span></a></h3><h4 id="acwing-848-有向图的拓扑序列" tabindex="-1"><a class="header-anchor" href="#acwing-848-有向图的拓扑序列"><span>AcWing 848. 有向图的拓扑序列</span></a></h4><p>思路：邻接表找入度为0的结点</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">int h[N], e[N], ne[N], idx, a, b;</span>
<span class="line">queue&lt;int&gt; q;</span>
<span class="line">// 保存各个点的入度</span>
<span class="line">int d[N]; </span>
<span class="line">// v存放答案</span>
<span class="line">vector&lt;int&gt; v;</span>
<span class="line"></span>
<span class="line">void add(int x, int y){</span>
<span class="line">    e[idx] = y, ne[idx] = h[x], h[x] = idx++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">bool topsort(){</span>
<span class="line">    // 找出入读为0的点</span>
<span class="line">    for(int i = 1; i &lt;= a; i++){</span>
<span class="line">    	if(!d[i]) q.push(i); </span>
<span class="line">	}	</span>
<span class="line">	while(q.size()){</span>
<span class="line">		int top = q.front();</span>
<span class="line">		q.pop();</span>
<span class="line">		v.push_back(top);</span>
<span class="line">		// 每次循环减去一条边</span>
<span class="line">		for(int i = h[top]; i != -1; i = ne[i]){</span>
<span class="line">			int j = e[i];</span>
<span class="line">			d[j] --;</span>
<span class="line">			// 当减去后的入读为0则入队列</span>
<span class="line">			if(!d[j]) q.push(j);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return v.size() == a;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">  	</span>
<span class="line">  	memset(h, -1, sizeof h);</span>
<span class="line">  	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">  	while(b--){</span>
<span class="line">  	    int x, y;</span>
<span class="line">  	    cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">  	    add(x, y);</span>
<span class="line">  	    d[y] ++;</span>
<span class="line">  	}</span>
<span class="line">  	if(topsort()){</span>
<span class="line">  		for(int i = 0; i &lt; v.size(); i++) cout &lt;&lt; v[i] &lt;&lt; &quot; &quot;;</span>
<span class="line">	}</span>
<span class="line">	else puts(&quot;-1&quot;);</span>
<span class="line">  	</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dijkstra" tabindex="-1"><a class="header-anchor" href="#dijkstra"><span>Dijkstra</span></a></h3><p>稠密图：临界矩阵（点较少）<br> 稀疏图：邻接表（点较多）</p><h4 id="acwing-849-dijkstra求最短路-i" tabindex="-1"><a class="header-anchor" href="#acwing-849-dijkstra求最短路-i"><span>AcWing 849. Dijkstra求最短路 I</span></a></h4><p><strong>朴素版（暴力）</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">int m, n;</span>
<span class="line">// 为稠密阵所以用邻接矩阵存储</span>
<span class="line">int num[501][501];</span>
<span class="line">// 用于记录每一个点距离第一个点的距离</span>
<span class="line">int dis[N];</span>
<span class="line">// 用于记录该点的最短距离是否已经确定</span>
<span class="line">int st[N];</span>
<span class="line"></span>
<span class="line">int dijkstra(){</span>
<span class="line">	memset(dis, 0x3f3f3f3f, sizeof dis);</span>
<span class="line">	dis[1] = 0;</span>
<span class="line">	for(int i = 0; i &lt; m; i++){</span>
<span class="line">		int t = -1;</span>
<span class="line">		// 找到没有确定最短路径的节点中距离源点最近的点t </span>
<span class="line">		for(int j = 1; j &lt;= m; j++){</span>
<span class="line">			if(!st[j] &amp;&amp; (t == -1 || dis[t] &gt; dis[j])){</span>
<span class="line">				t = j;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		st[t] = 1;</span>
<span class="line">		// 更新到其他点的距离 </span>
<span class="line">		for(int k = 1; k &lt;= m; k++){</span>
<span class="line">			dis[k] = min(dis[k], dis[t] + num[t][k]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	if(dis[m]==0x3f3f3f3f) return -1;</span>
<span class="line">    return dis[m];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	memset(num, 0x3f3f3f3f, sizeof num);</span>
<span class="line">	cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">	for(int i = 0; i &lt; n; i++){</span>
<span class="line">		int x, y, z;</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y &gt;&gt; z;</span>
<span class="line">		num[x][y] = min(num[x][y], z);</span>
<span class="line">	}</span>
<span class="line">  	cout &lt;&lt; dijkstra() &lt;&lt; endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-850-dijkstra求最短路-ii" tabindex="-1"><a class="header-anchor" href="#acwing-850-dijkstra求最短路-ii"><span>AcWing 850. Dijkstra求最短路 II</span></a></h4><p><strong>临界表法</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"> </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e6 + 10;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line"></span>
<span class="line">int e[N], ne[N], idx, h[N], dis[N], st[N];</span>
<span class="line">int w[N]; // 存放权重 </span>
<span class="line">int a, b;</span>
<span class="line"></span>
<span class="line">void add(int x, int y, int z){</span>
<span class="line">	w[idx] = z, e[idx] = y, ne[idx] = h[x], h[x] = idx++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int dj(){</span>
<span class="line">	memset(dis, 0x3f3f3f3f, sizeof dis);</span>
<span class="line">	priority_queue&lt;PII, vector&lt;PII&gt;, greater&lt;PII&gt;&gt; heap;</span>
<span class="line">	// 插入距离和结点编号 </span>
<span class="line">	heap.push({0, 1});</span>
<span class="line">	while(!heap.empty()){</span>
<span class="line">		auto top = heap.top();</span>
<span class="line">		heap.pop();</span>
<span class="line">		int x = top.second, y = top.first;</span>
<span class="line">		if(st[x]) continue;</span>
<span class="line">		st[x] = 1;</span>
<span class="line">		// 遍历该节点的每个临界结点，给每个选出最短距离 </span>
<span class="line">		for(int i = h[x]; i != -1; i = ne[i]){</span>
<span class="line">			int j = e[i];</span>
<span class="line">			if(dis[j] &gt; dis[x] + w[i]){</span>
<span class="line">				dis[j] = dis[x] + w[i];</span>
<span class="line">				heap.push({dis[j], j});</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	if(dis[a] == 0x3f3f3f3f) return -1;</span>
<span class="line">	return dis[a];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	memset(h, -1, sizeof h);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	while(b--){</span>
<span class="line">		int x, y, z;</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y &gt;&gt; z;</span>
<span class="line">		add(x, y, z);</span>
<span class="line">		add(y, x, z);</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; dj() &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="floyd" tabindex="-1"><a class="header-anchor" href="#floyd"><span>Floyd</span></a></h3><p>与迪杰斯特拉的区别：</p><ul><li>迪杰斯特拉算法适用于非负权，用于查找1到n 的最短距离，数据范围大</li><li>弗洛伊德算法适用于含有负权，用于查找每个点之间的最短距离，数据范围较少</li></ul><h4 id="acwing-854-floyd求最短路" tabindex="-1"><a class="header-anchor" href="#acwing-854-floyd求最短路"><span>AcWing 854. Floyd求最短路</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e6 + 10;</span>
<span class="line">const int INF = 0x3f3f3f3f;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line"></span>
<span class="line">int n, m, k;</span>
<span class="line">int e[201][201];</span>
<span class="line"></span>
<span class="line">void floyd(){</span>
<span class="line">	//  f[i, j, k]表示从i走到j的路径上除i和j点外只经过1到k的点的所有路径的最短距离。那么f[i, j, k] = min(f[i, j, k - 1), f[i, k, k - 1] + f[k, j, k - 1]。</span>
<span class="line">    // 因此在计算第k层的f[i, j]的时候必须先将第k - 1层的所有状态计算出来，所以需要把k放在最外层。 </span>
<span class="line">	for(int k = 1; k &lt;= n; k++){</span>
<span class="line">		for(int i = 1; i &lt;= n; i++){</span>
<span class="line">			for(int j = 1; j &lt;= n; j++){</span>
<span class="line">				e[i][j] = min(e[i][j], e[i][k] + e[k][j]);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	cin &gt;&gt; n &gt;&gt; m &gt;&gt; k; </span>
<span class="line">	for(int i = 1; i &lt;= n; i++){</span>
<span class="line">		for(int j = 1; j &lt;= n; j++){</span>
<span class="line">			if(i == j) e[i][j] = 0;</span>
<span class="line">			else e[i][j] = INF;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; m; i++){</span>
<span class="line">		int x, y, z;</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y &gt;&gt; z;</span>
<span class="line">		e[x][y] = min(e[x][y], z);</span>
<span class="line">	}</span>
<span class="line">	floyd();</span>
<span class="line">	while(k--){</span>
<span class="line">		int x, y;</span>
<span class="line">		cin &gt;&gt; x &gt;&gt; y;</span>
<span class="line">		// 不能e[x][y] == INF，原因是INF是一个确定的值，并非真正的无穷大，会随着其他数值而受到影响，t大于某个与INF相同数量级的数即可 </span>
<span class="line">		if(e[x][y] &gt; INF / 2) cout &lt;&lt; &quot;impossible&quot;&lt;&lt;endl;</span>
<span class="line">		else cout &lt;&lt; e[x][y] &lt;&lt;endl;</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数学知识" tabindex="-1"><a class="header-anchor" href="#数学知识"><span>数学知识</span></a></h2><h3 id="质数" tabindex="-1"><a class="header-anchor" href="#质数"><span>质数</span></a></h3><h4 id="acwing-867-分解质因数" tabindex="-1"><a class="header-anchor" href="#acwing-867-分解质因数"><span>AcWing 867. 分解质因数</span></a></h4><p>主要需要开方来避免超时</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	</span>
<span class="line">	int n, m;</span>
<span class="line">	cin &gt;&gt; n;</span>
<span class="line">	while(n--){</span>
<span class="line">		cin &gt;&gt; m;</span>
<span class="line">		int mm = m, flag = 0;</span>
<span class="line">		for(int i = 2; i &lt;= m / i; i++){</span>
<span class="line">			int idx = 0;</span>
<span class="line">			while(mm % i == 0){</span>
<span class="line">				idx ++;</span>
<span class="line">				mm /= i;</span>
<span class="line">			}</span>
<span class="line">			if(idx != 0){</span>
<span class="line">			    flag = 1;</span>
<span class="line">			    cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; idx &lt;&lt; endl;</span>
<span class="line">			} </span>
<span class="line">		}</span>
<span class="line">		if(flag){</span>
<span class="line">	        if(mm != 1) cout &lt;&lt; mm &lt;&lt; &quot; &quot; &lt;&lt; 1 &lt;&lt; endl;</span>
<span class="line">	        cout &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">		else {</span>
<span class="line">		    cout &lt;&lt; m &lt;&lt; &quot; &quot; &lt;&lt; 1 &lt;&lt; endl;</span>
<span class="line">		    cout &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-868-筛质数" tabindex="-1"><a class="header-anchor" href="#acwing-868-筛质数"><span>AcWing 868. 筛质数</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e6 + 10;</span>
<span class="line">int n[N], st[N], idx;</span>
<span class="line"></span>
<span class="line">void init(){</span>
<span class="line">	for(int i = 2; i &lt;= N; i++){</span>
<span class="line">		if(!st[i]) n[idx++] = i;</span>
<span class="line">		for(int j = 0; n[j] &lt;= N / i; j++){</span>
<span class="line">			st[n[j] * i] = 1;</span>
<span class="line">			if(i % n[j] == 0) break;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	init();</span>
<span class="line">	int a, res = 0;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 2; i &lt;= a; i++){</span>
<span class="line">		if(!st[i]){</span>
<span class="line">			res ++;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="约数" tabindex="-1"><a class="header-anchor" href="#约数"><span>约数</span></a></h3><p><img src="http://www.lijunxi.site:4000/api/file/download/bd17a18c-0c3c-475c-87f2-30830d333ee3.png" alt="图片描述"></p><h4 id="acwing-870-约数个数" tabindex="-1"><a class="header-anchor" href="#acwing-870-约数个数"><span>AcWing 870. 约数个数</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 7;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	set&lt;int&gt; s;</span>
<span class="line">	map&lt;int, int&gt; mp;</span>
<span class="line">	ll a, b, res = 1;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		cin &gt;&gt; b;</span>
<span class="line">		int xx = b;</span>
<span class="line">		for(int i = 2; i &lt;= b / i; i++){</span>
<span class="line">			while(xx % i == 0){</span>
<span class="line">				xx /= i; </span>
<span class="line">				mp[i] ++;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">                // x的最大公约数可能大于sqrt(x);</span>
<span class="line">		if(xx &gt; 1) mp[xx] ++;</span>
<span class="line">	}</span>
<span class="line">	for(auto i: mp){</span>
<span class="line">		res = (res * (i.second + 1)) % M; </span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-871-约数之和" tabindex="-1"><a class="header-anchor" href="#acwing-871-约数之和"><span>AcWing 871. 约数之和</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 7;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	map&lt;ll, ll&gt; mp;</span>
<span class="line">	int a;</span>
<span class="line">	ll res = 1;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		int m;</span>
<span class="line">		cin &gt;&gt; m;</span>
<span class="line">		int c = m;</span>
<span class="line">		for(int i = 2; i &lt;= m / i; i++){</span>
<span class="line">			ll cot = 0;</span>
<span class="line">			while(c % i == 0){</span>
<span class="line">				c /= i;</span>
<span class="line">				mp[i] ++;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		if(c &gt; 1) mp[c] ++;	</span>
<span class="line">	}</span>
<span class="line">	for(auto i: mp){</span>
<span class="line">		ll x = i.first, y = i.second, cot1 = 1, cot2 = 1;</span>
<span class="line">		while(y--){ </span>
<span class="line">			cot2 = cot2 * x % M;</span>
<span class="line">			cot1 = (cot1 + cot2) % M;</span>
<span class="line">		}</span>
<span class="line">		res = (res * cot1) % M;</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-872-最大公约数" tabindex="-1"><a class="header-anchor" href="#acwing-872-最大公约数"><span>AcWing 872. 最大公约数</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 7;</span>
<span class="line">// 最大公约数</span>
<span class="line">ll fun1(int x, int y){</span>
<span class="line">	return y ? fun1(y, x % y) : x;</span>
<span class="line">}</span>
<span class="line">// 最小公倍数</span>
<span class="line">ll fun2(int x, int y){</span>
<span class="line">	return x * fun1(x, y) / y;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	</span>
<span class="line">	int a;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		int m, n;</span>
<span class="line">		cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">		cout &lt;&lt; fun1(m, n) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="欧拉函数" tabindex="-1"><a class="header-anchor" href="#欧拉函数"><span>欧拉函数</span></a></h3><blockquote><p>1∼N 中与 N 互质的数的个数被称为欧拉函数，称为O(n)<br> 若N = p1^a*p2^b*p3^c*.....<br> 则O(N) = N * (p1-1)/p1 * (p2-1)/p2 * (p3-1)/p3 *.....</p></blockquote><h4 id="acwing-873-欧拉函数" tabindex="-1"><a class="header-anchor" href="#acwing-873-欧拉函数"><span>AcWing 873. 欧拉函数</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10, M = 1e9 + 7;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	</span>
<span class="line">	int a;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		int m;</span>
<span class="line">		cin &gt;&gt; m;</span>
<span class="line">		ll res = m; </span>
<span class="line">		map&lt;int, ll&gt; mp;</span>
<span class="line">		for(int i = 2; i &lt;= m / i; i++){</span>
<span class="line">			while(m % i == 0){</span>
<span class="line">				m /= i;</span>
<span class="line">				mp[i] ++;</span>
<span class="line">			} </span>
<span class="line">		}</span>
<span class="line">		if(m &gt; 1) mp[m] ++;</span>
<span class="line">		for(auto i: mp){</span>
<span class="line">			int x = i.first;</span>
<span class="line">			res = res * (x - 1) / x;</span>
<span class="line">		} </span>
<span class="line">		cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合数" tabindex="-1"><a class="header-anchor" href="#组合数"><span>组合数</span></a></h3><h4 id="acwing-885-求组合数-i" tabindex="-1"><a class="header-anchor" href="#acwing-885-求组合数-i"><span>AcWing 885. 求组合数 I</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e6 + 10, M = 1e9 + 7;</span>
<span class="line"></span>
<span class="line">int e[2010][2010];</span>
<span class="line"></span>
<span class="line">void init(){</span>
<span class="line">    // 类似于DP</span>
<span class="line">    // e[i][j]就代表的是Cij</span>
<span class="line">	for(int i = 0; i &lt; 2010; i++){</span>
<span class="line">		for(int j = 0; j &lt;= i; j++){</span>
<span class="line">		    // Ci0为1</span>
<span class="line">			if(!j) e[i][j] = 1;</span>
<span class="line">			else e[i][j] = (e[i-1][j-1] + e[i-1][j]) % M;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	</span>
<span class="line">	init(); </span>
<span class="line">	int a;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	while(a--){</span>
<span class="line">		int m, n;</span>
<span class="line">		cin &gt;&gt; m &gt;&gt; n;</span>
<span class="line">		cout &lt;&lt; e[m][n] &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容斥原理" tabindex="-1"><a class="header-anchor" href="#容斥原理"><span>容斥原理</span></a></h3><h4 id="acwing-890-能被整除的数" tabindex="-1"><a class="header-anchor" href="#acwing-890-能被整除的数"><span>AcWing 890. 能被整除的数</span></a></h4><p>若给出的待求的数组都是互质</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">int v[20];</span>
<span class="line">int main(){</span>
<span class="line"></span>
<span class="line">    int a, b, res = 0;</span>
<span class="line">    cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">    for(int i = 0; i &lt; b; i ++){</span>
<span class="line">        cin &gt;&gt; v[i];</span>
<span class="line">    }</span>
<span class="line">    for(int i = 1; i &lt; 1 &lt;&lt; b; i ++){</span>
<span class="line">        int cot = 0, t = 1;</span>
<span class="line">        for(int j = 0; j &lt; b; j ++){</span>
<span class="line">            if(i &gt;&gt; j &amp; 1){</span>
<span class="line">                cot ++;</span>
<span class="line">                if((ll) t * v[j] &gt; a){</span>
<span class="line">                    t = -1;</span>
<span class="line">                    break;</span>
<span class="line">                }</span>
<span class="line">                t *= v[j];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if(t != -1){</span>
<span class="line">            if(cot % 2 == 0){</span>
<span class="line">                res -= a / t;</span>
<span class="line">            } else {</span>
<span class="line">                res += a / t;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    cout &lt;&lt; res &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>否则，修改乘积为求最小公倍数</p><p>参考Leetcode：<a href="https://leetcode.cn/problems/kth-smallest-amount-with-single-denomination-combination/" target="_blank" rel="noopener noreferrer">单面值组合的第 K 小金额</a></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int len;</span>
<span class="line">    long long fun(long long x, vector&lt;int&gt;&amp; v){</span>
<span class="line">        long long res = 0;</span>
<span class="line">        for(int i = 1; i &lt; 1 &lt;&lt; len; i++){</span>
<span class="line">            long long cot = 0, t = 1;</span>
<span class="line">            for(int j = 0; j &lt; len; j++){</span>
<span class="line">                if(i &gt;&gt; j &amp; 1){</span>
<span class="line">                    long long ccc = t / gcd(t, v[j]) * v[j]; //《-------------修改这里</span>
<span class="line">                    if(ccc &gt; x){</span>
<span class="line">                        t = -1;</span>
<span class="line">                        break;</span>
<span class="line">                    }</span>
<span class="line">                    cot ++;</span>
<span class="line">                    t = ccc;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            if(t != -1){</span>
<span class="line">                if(cot % 2 == 1) res += x / t;</span>
<span class="line">                else res -= x / t;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">    long long findKthSmallest(vector&lt;int&gt;&amp; coins, int k) {</span>
<span class="line">        len = coins.size();</span>
<span class="line">        long long l = 1, r = 1e12;</span>
<span class="line">        while(l &lt; r){</span>
<span class="line">            long long mid = (l + r) &gt;&gt; 1;</span>
<span class="line">            if(fun(mid, coins) &gt;= k) r = mid;</span>
<span class="line">            else l = mid + 1;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return l;</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h2><h3 id="记忆化搜索" tabindex="-1"><a class="header-anchor" href="#记忆化搜索"><span>记忆化搜索</span></a></h3><h4 id="acwing-901-滑雪" tabindex="-1"><a class="header-anchor" href="#acwing-901-滑雪"><span>AcWing 901. 滑雪</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int N = 1e5 + 10;</span>
<span class="line">int a, b;</span>
<span class="line">int n[310][310], cot[310][310];</span>
<span class="line">int ix[4] = {-1,0,1,0};</span>
<span class="line">int iy[4] = {0,1,0,-1};</span>
<span class="line"></span>
<span class="line">int dfs(int x, int y){</span>
<span class="line">	if(cot[x][y] != -1) return cot[x][y];</span>
<span class="line">	cot[x][y] = 1;</span>
<span class="line">	for(int i = 0; i &lt; 4; i++){</span>
<span class="line">		int xx = ix[i] + x, yy = iy[i] + y;</span>
<span class="line">		if(xx &gt;= 1 &amp;&amp; xx &lt;= a &amp;&amp; yy &gt;= 1 &amp;&amp; yy &lt;= b &amp;&amp; n[x][y] &gt; n[xx][yy]){</span>
<span class="line">			cot[x][y] = max(cot[x][y], dfs(xx, yy) + 1);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return cot[x][y];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    memset(cot, -1, sizeof cot);</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			cin &gt;&gt; n[i][j];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	int ans = 0;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			ans = max(ans, dfs(i, j));</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; ans &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线性dp" tabindex="-1"><a class="header-anchor" href="#线性dp"><span>线性DP</span></a></h3><h4 id="acwing-898-数字三角形" tabindex="-1"><a class="header-anchor" href="#acwing-898-数字三角形"><span>AcWing 898. 数字三角形</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 510, M = 1e5 + 10;	</span>
<span class="line">int n[N][N]; </span>
<span class="line">int cot[N][N];</span>
<span class="line">int a;</span>
<span class="line"></span>
<span class="line">int dfs(int x, int y){</span>
<span class="line">	if(x &lt; 1 || x &gt; a || y &lt; 1 || y &gt; a) return 0;</span>
<span class="line">	if(cot[x][y] != -1) return cot[x][y];</span>
<span class="line">	int _1 = dfs(x + 1, y), _2 = dfs(x + 1, y + 1);</span>
<span class="line">	cot[x][y] = max(_1, _2) + n[x][y]; </span>
<span class="line">	return cot[x][y]; </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	memset(cot, -1, sizeof cot);</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= i; j++){</span>
<span class="line">			cin &gt;&gt; n[i][j];	</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; dfs(1, 1) &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-896-最长上升子序列" tabindex="-1"><a class="header-anchor" href="#acwing-896-最长上升子序列"><span>AcWing 896. 最长上升子序列</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e5 + 10, M = 1e5 + 10;</span>
<span class="line">int n[N];</span>
<span class="line">int a;</span>
<span class="line">vector&lt;int&gt; v; </span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line"></span>
<span class="line">	int a;</span>
<span class="line">	cin &gt;&gt; a;</span>
<span class="line">	for(int i = 0; i &lt; a; i++) cin &gt;&gt; n[i];</span>
<span class="line">	for(int i = 0; i &lt; a; i++){</span>
<span class="line">		if(v.empty() || n[i] &gt; v.back()){</span>
<span class="line">			v.push_back(n[i]);</span>
<span class="line">		}</span>
<span class="line">		else{</span>
<span class="line">			*lower_bound(v.begin(), v.end(), n[i]) = n[i];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; v.size() &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="acwing-897-最长公共子序列" tabindex="-1"><a class="header-anchor" href="#acwing-897-最长公共子序列"><span>AcWing 897. 最长公共子序列</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt; </span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int N = 1e5 + 10, M = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">char n1[N], n2[N];</span>
<span class="line">// n[i][j]记录前i个n1和前j个n2的公共子串的最大长度</span>
<span class="line">int n[1010][1010];</span>
<span class="line"> </span>
<span class="line">int main(){</span>
<span class="line">	</span>
<span class="line">	int a, b;</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b &gt;&gt; n1 + 1 &gt;&gt; n2 + 1;</span>
<span class="line">	for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			if(n1[i] == n2[j]){</span>
<span class="line">				n[i][j] = n[i-1][j-1] + 1;</span>
<span class="line">			}</span>
<span class="line">			else{</span>
<span class="line">				n[i][j] = max(n[i-1][j], n[i][j-1]);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">		for(int i = 1; i &lt;= a; i++){</span>
<span class="line">		for(int j = 1; j &lt;= b; j++){</span>
<span class="line">			cout &lt;&lt; n[i][j] &lt;&lt; &quot; &quot;;</span>
<span class="line">		}</span>
<span class="line">		cout &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	cout &lt;&lt; n[a][b] &lt;&lt; endl;</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,167)])])}const t=s(e,[["render",d]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/Acwing%E5%9F%BA%E7%A1%80%E8%AF%BE.html","title":"Acwing基础课","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]},{"level":3,"title":"归并排序","slug":"归并排序","link":"#归并排序","children":[]},{"level":3,"title":"二分","slug":"二分","link":"#二分","children":[]},{"level":3,"title":"高精度","slug":"高精度","link":"#高精度","children":[]},{"level":3,"title":"前缀和与差分","slug":"前缀和与差分","link":"#前缀和与差分","children":[]},{"level":3,"title":"双指针算法","slug":"双指针算法","link":"#双指针算法","children":[]},{"level":3,"title":"位运算","slug":"位运算","link":"#位运算","children":[]},{"level":3,"title":"离散化","slug":"离散化","link":"#离散化","children":[]},{"level":3,"title":"区间合并","slug":"区间合并","link":"#区间合并","children":[]},{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[{"level":3,"title":"单链表","slug":"单链表","link":"#单链表","children":[]},{"level":3,"title":"双链表","slug":"双链表","link":"#双链表","children":[]},{"level":3,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":3,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":3,"title":"单调栈","slug":"单调栈","link":"#单调栈","children":[]},{"level":3,"title":"单调队列","slug":"单调队列","link":"#单调队列","children":[]},{"level":3,"title":"KMP","slug":"kmp","link":"#kmp","children":[]},{"level":3,"title":"Tire","slug":"tire","link":"#tire","children":[]},{"level":3,"title":"并查集","slug":"并查集","link":"#并查集","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":3,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]}]},{"level":2,"title":"搜索与图论","slug":"搜索与图论","link":"#搜索与图论","children":[{"level":3,"title":"DFS","slug":"dfs","link":"#dfs","children":[]},{"level":3,"title":"BFS","slug":"bfs","link":"#bfs","children":[]},{"level":3,"title":"树与图的深度优先遍历","slug":"树与图的深度优先遍历","link":"#树与图的深度优先遍历","children":[]},{"level":3,"title":"树与图的广度优先遍历","slug":"树与图的广度优先遍历","link":"#树与图的广度优先遍历","children":[]},{"level":3,"title":"拓扑排序","slug":"拓扑排序","link":"#拓扑排序","children":[]},{"level":3,"title":"Dijkstra","slug":"dijkstra","link":"#dijkstra","children":[]},{"level":3,"title":"Floyd","slug":"floyd","link":"#floyd","children":[]}]},{"level":2,"title":"数学知识","slug":"数学知识","link":"#数学知识","children":[{"level":3,"title":"质数","slug":"质数","link":"#质数","children":[]},{"level":3,"title":"约数","slug":"约数","link":"#约数","children":[]},{"level":3,"title":"欧拉函数","slug":"欧拉函数","link":"#欧拉函数","children":[]},{"level":3,"title":"组合数","slug":"组合数","link":"#组合数","children":[]},{"level":3,"title":"容斥原理","slug":"容斥原理","link":"#容斥原理","children":[]}]},{"level":2,"title":"动态规划","slug":"动态规划","link":"#动态规划","children":[{"level":3,"title":"记忆化搜索","slug":"记忆化搜索","link":"#记忆化搜索","children":[]},{"level":3,"title":"线性DP","slug":"线性dp","link":"#线性dp","children":[]}]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/Acwing基础课.md"}');export{t as comp,v as data};
