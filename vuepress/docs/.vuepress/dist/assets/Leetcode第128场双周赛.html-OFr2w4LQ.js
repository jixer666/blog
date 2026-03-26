import{_ as n,c as i,a as e,o as a}from"./app-C3KrGAW2.js";const l={};function d(p,s){return a(),i("div",null,[...s[0]||(s[0]=[e(`<h1 id="leetcode第128场双周赛" tabindex="-1"><a class="header-anchor" href="#leetcode第128场双周赛"><span>Leetcode第128场双周赛</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-05-01</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div> 今日刷哔哩哔哩小羊肖恩大神10分钟都没到就AK了本场比赛，于是就想来试着做下 <h2 id="字符串的分数" tabindex="-1"><a class="header-anchor" href="#字符串的分数"><span>字符串的分数</span></a></h2><p>求相邻字母的ASCALL码值之和</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int scoreOfString(string s) {</span>
<span class="line">        int res = 0;</span>
<span class="line">        for(int i = 1; i &lt; s.size(); i++){</span>
<span class="line">            res += fabs(s[i] - s[i - 1]);</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="覆盖所有点的最少矩形数目" tabindex="-1"><a class="header-anchor" href="#覆盖所有点的最少矩形数目"><span>覆盖所有点的最少矩形数目</span></a></h2><p>一眼贪心，只用考虑横坐标</p><div class="language-c++\\ line-numbers-mode" data-highlighter="prismjs" data-ext="c++\\"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minRectanglesToCoverPoints(vector&lt;vector&lt;int&gt;&gt;&amp; points, int w) {</span>
<span class="line">        int cot = 0, res = 0;</span>
<span class="line">        vector&lt;int&gt; v;</span>
<span class="line">        for(int i = 0; i &lt; points.size(); i++){</span>
<span class="line">            v.push_back(points[i][0]);</span>
<span class="line">        }</span>
<span class="line">        int len = v.size();</span>
<span class="line">        sort(v.begin(), v.end());</span>
<span class="line">        cot = -1e9 - 10;</span>
<span class="line">        for(int i = 0; i &lt; len; i++){</span>
<span class="line">            if(v[i] - cot &gt; w){</span>
<span class="line">                cot = v[i];</span>
<span class="line">                res ++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问消失节点的最少时间" tabindex="-1"><a class="header-anchor" href="#访问消失节点的最少时间"><span>访问消失节点的最少时间</span></a></h2><p>Djakarta模板题，这里提供两种做法，一种参考灵神的，一种是yxc模板的。</p><p>参考灵神做法</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; minimumTime(int n, vector&lt;vector&lt;int&gt;&gt;&amp; edges, vector&lt;int&gt;&amp; disappear) {</span>
<span class="line">        vector&lt;vector&lt;pair&lt;int, int&gt;&gt;&gt; g(n);</span>
<span class="line">        for(int i = 0; i &lt; edges.size(); i++){</span>
<span class="line">            g[edges[i][0]].push_back({edges[i][1], edges[i][2]});</span>
<span class="line">            g[edges[i][1]].push_back({edges[i][0], edges[i][2]});</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; dis(n, 0x3f3f3f3f);</span>
<span class="line">        vector&lt;bool&gt; st(n ,false);</span>
<span class="line">        priority_queue&lt;pair&lt;int, int&gt;, vector&lt;pair&lt;int, int&gt;&gt;, greater&lt;pair&lt;int, int&gt;&gt;&gt; pq;</span>
<span class="line">        dis[0] = 0;</span>
<span class="line">        pq.push({0, 0});</span>
<span class="line">        while(!pq.empty()){</span>
<span class="line">            auto [len, xx] = pq.top();</span>
<span class="line">            pq.pop();</span>
<span class="line">            if(st[xx]) continue;</span>
<span class="line">            st[xx] = 1;</span>
<span class="line">            for(auto [_ne, _w] : g[xx]){</span>
<span class="line">                if(dis[_ne] &gt; len + _w  &amp;&amp; len + _w &lt; disappear[_ne]){</span>
<span class="line">                    dis[_ne] = len + _w;</span>
<span class="line">                    pq.push({dis[_ne], _ne});</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        for(int i = 0; i &lt; n; i++){</span>
<span class="line">            if(dis[i] == 0x3f3f3f3f) dis[i] = -1;</span>
<span class="line">        }</span>
<span class="line">       </span>
<span class="line">        return dis;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yxc模板做法</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">const int N = 1e6 + 10;</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int n[N], ne[N], w[N], h[N], dis[N], st[N], idx;</span>
<span class="line">    void dj(vector&lt;int&gt;&amp; disappear){</span>
<span class="line">        memset(dis, 0x3f3f3f3f, sizeof dis);</span>
<span class="line">        priority_queue&lt;pair&lt;int, int&gt;, vector&lt;pair&lt;int, int&gt;&gt;, greater&lt;pair&lt;int, int&gt;&gt;&gt; pq;</span>
<span class="line">        dis[0] = 0;</span>
<span class="line">        pq.push({0, 0});</span>
<span class="line">        while(pq.size()){</span>
<span class="line">            auto top = pq.top();</span>
<span class="line">            pq.pop();</span>
<span class="line">            int yy = top.first, xx = top.second;</span>
<span class="line">            if(st[xx]) continue;</span>
<span class="line">            st[xx] = 1;</span>
<span class="line">            for(int i = h[xx]; i != -1; i = ne[i]){</span>
<span class="line">                int j = n[i];</span>
<span class="line">                if(dis[j] &gt; yy + w[i] &amp;&amp; yy + w[i] &lt; disappear[j]){</span>
<span class="line">                    dis[j] = yy + w[i];</span>
<span class="line">                    pq.push({dis[j], j});</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    void add(int x, int y, int z){</span>
<span class="line">        n[idx] = y, w[idx] = z, ne[idx] = h[x], h[x] = idx ++;</span>
<span class="line">    }</span>
<span class="line">    vector&lt;int&gt; minimumTime(int n, vector&lt;vector&lt;int&gt;&gt;&amp; edges, vector&lt;int&gt;&amp; disappear) {</span>
<span class="line">        memset(h, -1, sizeof h);</span>
<span class="line">        for(int i = 0; i &lt; edges.size(); i++){</span>
<span class="line">            add(edges[i][0], edges[i][1], edges[i][2]);</span>
<span class="line">            add(edges[i][1], edges[i][0], edges[i][2]);</span>
<span class="line">        }</span>
<span class="line">        dj(disappear);</span>
<span class="line">        vector&lt;int&gt; res;</span>
<span class="line">        for(int i = 0; i &lt; n; i ++){</span>
<span class="line">            res.push_back((dis[i] ==  0x3f3f3f3f ? -1 : dis[i]));</span>
<span class="line">        }</span>
<span class="line">       </span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="边界元素是最大值的子数组数目" tabindex="-1"><a class="header-anchor" href="#边界元素是最大值的子数组数目"><span>边界元素是最大值的子数组数目</span></a></h2><p>这题只要想到单调栈就很好做啦</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long numberOfSubarrays(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        long long res = 0;</span>
<span class="line">        int len = nums.size();</span>
<span class="line">        stack&lt;int&gt; s;</span>
<span class="line">        vector&lt;int&gt; v(len, 0);</span>
<span class="line">        for(int i = 0; i &lt; len; i++){</span>
<span class="line">            v[i] ++;</span>
<span class="line">            while(!s.empty() &amp;&amp; nums[s.top()] &lt; nums[i]){</span>
<span class="line">                s.pop();</span>
<span class="line">            }</span>
<span class="line">            if(!s.empty() &amp;&amp; nums[s.top()] == nums[i]){</span>
<span class="line">                v[i] = v[s.top()] + 1;</span>
<span class="line">            }</span>
<span class="line">            res += v[i];</span>
<span class="line">            s.push(i);</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)])])}const r=n(l,[["render",d]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/Leetcode%E7%AC%AC128%E5%9C%BA%E5%8F%8C%E5%91%A8%E8%B5%9B.html","title":"Leetcode第128场双周赛","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"字符串的分数","slug":"字符串的分数","link":"#字符串的分数","children":[]},{"level":2,"title":"覆盖所有点的最少矩形数目","slug":"覆盖所有点的最少矩形数目","link":"#覆盖所有点的最少矩形数目","children":[]},{"level":2,"title":"访问消失节点的最少时间","slug":"访问消失节点的最少时间","link":"#访问消失节点的最少时间","children":[]},{"level":2,"title":"边界元素是最大值的子数组数目","slug":"边界元素是最大值的子数组数目","link":"#边界元素是最大值的子数组数目","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"算法/Leetcode第128场双周赛.md"}');export{r as comp,v as data};
