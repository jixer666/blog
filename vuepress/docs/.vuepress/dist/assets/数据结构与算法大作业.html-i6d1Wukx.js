import{_ as s,c as i,a as l,o as a}from"./app-BKm_FHq2.js";const e={};function t(d,n){return a(),i("div",null,[...n[0]||(n[0]=[l(`<h1 id="数据结构与算法大作业" tabindex="-1"><a class="header-anchor" href="#数据结构与算法大作业"><span>数据结构与算法大作业</span></a></h1><div style="background:#f8f9fa;padding:12px 16px;border-left:3px solid #4CAF50;margin-bottom:16px;border-radius:0 4px 4px 0;font-size:0.9rem;"><div style="display:flex;align-items:center;gap:30px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">📅</span><span>2024-01-17</span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:#666;">✍️</span><span>Jixer</span></div></div></div><h2 id="校园导航" tabindex="-1"><a class="header-anchor" href="#校园导航"><span>校园导航</span></a></h2><blockquote><p>作者QQ：2770063826</p></blockquote><h2 id="图形手稿" tabindex="-1"><a class="header-anchor" href="#图形手稿"><span>图形手稿</span></a></h2><p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/algorithm/d809ddebb8dd0c38cbebfb55867a65a1.png" alt="图片描述"></p><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define ok 1 </span>
<span class="line">#define error -1</span>
<span class="line">#define null &quot;no&quot;</span>
<span class="line">#define MAX 100000</span>
<span class="line">#define N 100</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">struct p{</span>
<span class="line">	string name;  // 结点名称 </span>
<span class="line">	string info;  // 结点信息 </span>
<span class="line">	int flag;  // 结点是否被删除 </span>
<span class="line">}n[N];</span>
<span class="line"></span>
<span class="line">int point[N][N]; // point存放两点之间的距离 </span>
<span class="line">int vertexNum, arcNum; // vertexNum点数， arcNum边数</span>
<span class="line"></span>
<span class="line">// 查找景点对应下标 </span>
<span class="line">int get_int(string str){  </span>
<span class="line">	for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">		if(n[i].name == str) return i;</span>
<span class="line">	}</span>
<span class="line">	return error;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 查找下标对应景点 </span>
<span class="line">string get_string(int x){</span>
<span class="line">	for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">		if(i == x) return n[i].name;</span>
<span class="line">	}</span>
<span class="line">	return null;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 初始化输入 </span>
<span class="line">int file_scanf(){</span>
<span class="line">	freopen(&quot;graph.txt&quot;, &quot;r&quot;, stdin); //从文件输入 </span>
<span class="line">	cin &gt;&gt; vertexNum &gt;&gt; arcNum;</span>
<span class="line">	for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">		cin &gt;&gt; n[i].name &gt;&gt; n[i].info;	</span>
<span class="line">		n[i].flag = 1;</span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; vertexNum; i++){ </span>
<span class="line">		for(int j = 0; j &lt; vertexNum; j++) </span>
<span class="line">			point[i][j] = MAX;  // 给矩阵赋初值 </span>
<span class="line">	}</span>
<span class="line">	for(int i = 0; i &lt; arcNum; i++){</span>
<span class="line">		string a, b;</span>
<span class="line">		int c, x, y;</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;</span>
<span class="line">		x = get_int(a);</span>
<span class="line">		y = get_int(b);</span>
<span class="line">		point[x][y] = c; // 给矩阵赋值 </span>
<span class="line">		point[y][x] = c;  </span>
<span class="line">	} </span>
<span class="line">	freopen(&quot;CON&quot;,&quot;r&quot;,stdin);  // 关闭文件输入 </span>
<span class="line">	return ok;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 找前驱结点，结果放到path数组中 </span>
<span class="line">void dijkstra(string s1, string s2, int path[], int &amp;min_dis){</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	int y = get_int(s2);</span>
<span class="line">	int dis[N], s[N], final[N];</span>
<span class="line">	for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">		final[i] = 0;</span>
<span class="line">		dis[i] = point[x][i];</span>
<span class="line">		if(dis[i] != MAX) path[i] = x; </span>
<span class="line">        else path[i] = -1;</span>
<span class="line">	}</span>
<span class="line">	s[0] = x;</span>
<span class="line">	final[x] = 1;</span>
<span class="line">	int flag = 1;</span>
<span class="line">	while(flag &lt; vertexNum){</span>
<span class="line">		int k = 0, minn = MAX;</span>
<span class="line">		for(int i = 0;i &lt; vertexNum; i++){</span>
<span class="line">			if(i == x) continue;</span>
<span class="line">			if(!final[i] &amp;&amp; dis[i] &lt; minn){</span>
<span class="line">				k = i;</span>
<span class="line">				minn = dis[i];</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		s[flag++] = k;</span>
<span class="line">		final[k] = 1;</span>
<span class="line">		for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">			if(!final[i] &amp;&amp; dis[i] &gt; dis[k] + point[k][i]){</span>
<span class="line">				dis[i] = dis[k] + point[k][i];</span>
<span class="line">				path[i] = k;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	min_dis = dis[y];  // 存入最短长度 </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 找最短路径</span>
<span class="line">void get_path(int x, int y, int path[], int min_path[], int&amp; i){</span>
<span class="line">	if(x == y) return;</span>
<span class="line">	min_path[i++] = path[y];  // 此时的path[y]就存放的该时刻的最短路径 </span>
<span class="line">	get_path(x, path[y], path, min_path, i);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 格式化输出最短路径 </span>
<span class="line">void query(string s1, string s2, int path[], int min_dis){</span>
<span class="line">	int min_path[N];  // min_path数组存放最短路径的最终结果 </span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	int y = get_int(s2);</span>
<span class="line">	int i = 0;</span>
<span class="line">	min_path[i++] = y; // 从终点开始往根据数组值前找起点，存入min_path中</span>
<span class="line">	get_path(x, y, path, min_path, i); </span>
<span class="line">	cout &lt;&lt; &quot;最短路径：&quot;;</span>
<span class="line">	for(int j = i - 1; j &gt;= 0; j--){  // 逆序输出min_path即可 </span>
<span class="line">		int w = min_path[j];</span>
<span class="line">		if(j == 0) cout &lt;&lt; get_string(w) &lt;&lt; endl;		</span>
<span class="line">		else cout &lt;&lt; get_string(min_path[j]) &lt;&lt; &quot;-&gt;&quot;;</span>
<span class="line">	} </span>
<span class="line">	cout &lt;&lt; &quot;最短长度：&quot; &lt;&lt; min_dis &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 查询地点及相关信息 </span>
<span class="line">void query_point(){</span>
<span class="line">	string s1;</span>
<span class="line">	cout &lt;&lt; &quot;请输入要查询的地点&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1;</span>
<span class="line">	int w = get_int(s1);</span>
<span class="line">	if(w == error || n[w].flag == 0){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;不存在！&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; n[w].name &lt;&lt; &quot;：&quot; &lt;&lt; n[w].info &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 查询两点之间的最短路径 </span>
<span class="line">void ask_path(){</span>
<span class="line">	string s1, s2;</span>
<span class="line">	cout &lt;&lt; &quot;请输入要问路的地点&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1 &gt;&gt; s2;</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	int y = get_int(s2);</span>
<span class="line">	if(x == error || n[x].flag == 0){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;不存在！&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	if(y == error || n[y].flag == 0){</span>
<span class="line">		cout &lt;&lt; s2 &lt;&lt; &quot;不存在！&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	int min_dis = 0;</span>
<span class="line">	int path[N];</span>
<span class="line">	dijkstra(s1, s2, path, min_dis);</span>
<span class="line">	if(min_dis == MAX){</span>
<span class="line">		cout &lt;&lt; &quot;该路径不存在&quot; &lt;&lt; endl;</span>
<span class="line">		return; </span>
<span class="line">	}</span>
<span class="line">	query(s1, s2, path, min_dis);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 插入一个结点 </span>
<span class="line">void insert_point(){</span>
<span class="line">	string s1, s2;</span>
<span class="line">	cout &lt;&lt; &quot;请输入将要增加的一个景点及相关信息&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1 &gt;&gt; s2;</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	int y = get_int(s2);</span>
<span class="line">	if(x == error &amp;&amp; y == error){</span>
<span class="line">		n[vertexNum].name = s1;</span>
<span class="line">		n[vertexNum].info = s2;</span>
<span class="line">		n[vertexNum].flag = 1;</span>
<span class="line">		for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">			point[vertexNum][i] = MAX; // 与该结点无关的点均为最大值 </span>
<span class="line">			point[i][vertexNum] = MAX;</span>
<span class="line">		}</span>
<span class="line">		vertexNum++;</span>
<span class="line">		cout &lt;&lt; &quot;增加景点成功&quot; &lt;&lt; endl;	</span>
<span class="line">	}</span>
<span class="line">	else if(n[x].name == s1 &amp;&amp; n[x].flag == 1){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;景点已经存在&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	else if(n[y].name == s2 &amp;&amp; n[y].flag == 1){</span>
<span class="line">		cout &lt;&lt; s2 &lt;&lt; &quot;景点已经存在&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 更新一个结点 </span>
<span class="line">void update_point(){</span>
<span class="line">	string s1, s2, s3;</span>
<span class="line">	cout &lt;&lt; &quot;请输入将要修改的景点&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1;</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	if(x == error || n[x].flag == 0){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;不存在！&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	cout &lt;&lt; &quot;请输入修改过后的景点及其相关信息&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s2 &gt;&gt; s3;</span>
<span class="line">	n[x].name = s2;</span>
<span class="line">	n[x].info = s3;</span>
<span class="line">	cout &lt;&lt; &quot;修改成功&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 插入一条路径 </span>
<span class="line">void insert_path(){</span>
<span class="line">	string s1, s2;</span>
<span class="line">	int dis;</span>
<span class="line">	cout &lt;&lt; &quot;请输入将要增加的一条路径&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1 &gt;&gt; s2 &gt;&gt; dis;</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	int y = get_int(s2);</span>
<span class="line">	if(x == error || n[x].flag == 0){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;不存在&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	if(y == error || n[y].flag == 0){</span>
<span class="line">		cout &lt;&lt; s2 &lt;&lt; &quot;不存在&quot; &lt;&lt; endl;</span>
<span class="line">		return; </span>
<span class="line">	}</span>
<span class="line">	point[x][y] = dis;</span>
<span class="line">	point[y][x] = dis;</span>
<span class="line">	cout &lt;&lt; &quot;增加路径成功&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 删除景点</span>
<span class="line">void remove_point() {</span>
<span class="line">	string s1;</span>
<span class="line">	cout &lt;&lt; &quot;请输入将要删除的景点&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1;</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	if(x == error || n[x].flag == 0){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;不存在！&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	} </span>
<span class="line">	for(int i = 0; i &lt; vertexNum; i++){</span>
<span class="line">		point[x][i] = MAX;</span>
<span class="line">		point[i][x] = MAX;</span>
<span class="line">	}</span>
<span class="line">	n[x].flag = 0;</span>
<span class="line">	cout &lt;&lt; &quot;删除景点成功&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 删除一条路径 </span>
<span class="line">void remove_path(){</span>
<span class="line">	string s1, s2;</span>
<span class="line">	cout &lt;&lt; &quot;请输入需要删除的一条路径&quot; &lt;&lt; endl;</span>
<span class="line">	cin &gt;&gt; s1 &gt;&gt; s2;</span>
<span class="line">	int x = get_int(s1);</span>
<span class="line">	int y = get_int(s2);</span>
<span class="line">	if(x == error || n[x].flag == 0){</span>
<span class="line">		cout &lt;&lt; s1 &lt;&lt; &quot;景点不存在&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	if(y == error || n[y].flag == 0){</span>
<span class="line">		cout &lt;&lt; s2 &lt;&lt; &quot;景点不存在&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	if(point[x][y] == MAX){</span>
<span class="line">		cout &lt;&lt; &quot;该路径不存在&quot; &lt;&lt; endl;</span>
<span class="line">		return;</span>
<span class="line">	}</span>
<span class="line">	point[x][y] = MAX;</span>
<span class="line">	point[y][x] = MAX;</span>
<span class="line">	cout &lt;&lt; &quot;删除路径成功&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 功能选择 </span>
<span class="line">void my_choose(int x){</span>
<span class="line">	if(x == 1) query_point();</span>
<span class="line">	else if(x == 2) ask_path();</span>
<span class="line">	else if(x == 3) insert_point();</span>
<span class="line">	else if(x == 4) update_point();</span>
<span class="line">	else if(x == 5) insert_path();</span>
<span class="line">	else if(x == 6) remove_point();</span>
<span class="line">	else if(x == 7) remove_path();</span>
<span class="line">	else if(x == 8){</span>
<span class="line">		cout &lt;&lt; &quot;退出成功&quot; &lt;&lt; endl;</span>
<span class="line">		exit(0);</span>
<span class="line">	}</span>
<span class="line">	else cout &lt;&lt; &quot;无该选项，请重新输入&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 菜单 </span>
<span class="line">void menu(){</span>
<span class="line">	cout &lt;&lt; &quot;***************欢迎来到四川轻化工大学***************&quot; &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;1.	查询景点信息&quot; &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt; &quot;2.	问路查询&quot; &lt;&lt; endl;	</span>
<span class="line">	cout &lt;&lt;	&quot;3.	增加一个景点及相关信息&quot; &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt;	&quot;4.	修改一个景点及相关信息&quot;	&lt;&lt;endl;</span>
<span class="line">	cout &lt;&lt;	&quot;5.	增加一条新的路径&quot; &lt;&lt; endl;	</span>
<span class="line">	cout &lt;&lt;	&quot;6.	删除一个点及相关信息&quot; &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt;	&quot;7.	删除一条路径&quot; &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt;	&quot;8.	退出&quot; &lt;&lt; endl;</span>
<span class="line">	cout &lt;&lt;	&quot;***************轻化工校园导游系统***************&quot; &lt;&lt; endl;</span>
<span class="line">    cout &lt;&lt; &quot;请选择需要的服务(1-8)：&quot; &lt;&lt; endl;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	file_scanf();</span>
<span class="line">	while(1){</span>
<span class="line">		menu();</span>
<span class="line">		int id;</span>
<span class="line">		cin &gt;&gt; id;</span>
<span class="line">		my_choose(id);</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试数据" tabindex="-1"><a class="header-anchor" href="#测试数据"><span>测试数据</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">9 16</span>
<span class="line">图书馆 藏书丰富，知识的海洋</span>
<span class="line">计算机学院A6 电脑多，学术探讨聚集地</span>
<span class="line">南大门 学校南门出入口</span>
<span class="line">西门 学生车辆进出校园</span>
<span class="line">五粮液网球国际中心  网球场上感受同学们的意气风发</span>
<span class="line">综合楼 综合办公区域</span>
<span class="line">品正食府C1 饭菜美味，种类多样</span>
<span class="line">器美园 理工男聚集地</span>
<span class="line">令雅园 有留学生，感受异国文化</span>
<span class="line">南大门 品正食府C1 300</span>
<span class="line">南大门 计算机学院A6 400</span>
<span class="line">南大门 西门 500</span>
<span class="line">品正食府C1 计算机学院A6 200</span>
<span class="line">计算机学院A6 图书馆 100</span>
<span class="line">图书馆 器美园 200</span>
<span class="line">器美园 五粮液网球国际中心  200</span>
<span class="line">图书馆 令雅园 200</span>
<span class="line">器美园 令雅园 300</span>
<span class="line">西门 五粮液网球国际中心 200</span>
<span class="line">计算机学院A6 西门 400</span>
<span class="line">计算机学院A6 令雅园 250</span>
<span class="line">南大门 综合楼 200</span>
<span class="line">综合楼 西门 400</span>
<span class="line">图书馆 西门 400</span>
<span class="line">图书馆 五粮液网球国际中心  300</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哈夫曼树" tabindex="-1"><a class="header-anchor" href="#哈夫曼树"><span>哈夫曼树</span></a></h2><blockquote><p>作者QQ：1594359733</p></blockquote><h2 id="源码-1" tabindex="-1"><a class="header-anchor" href="#源码-1"><span>源码</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;stdio.h&gt;</span>
<span class="line">#include&lt;windows.h&gt;</span>
<span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define MAX 100</span>
<span class="line">struct SS{</span>
<span class="line">	char c;</span>
<span class="line">	int n;</span>
<span class="line"></span>
<span class="line">}charnum[MAX];                        				//统计所有字符的数量</span>
<span class="line"></span>
<span class="line">typedef struct {									// 定义Huffman树结点结构</span>
<span class="line">    char data;         								// 结点值</span>
<span class="line">    int weight;        								// 权重</span>
<span class="line">    int parent;        								// 父结点</span>
<span class="line">    int lchild;      								// 左孩子</span>
<span class="line">    int rchild;      								// 右孩子</span>
<span class="line">//    string er;										//二进制编码 </span>
<span class="line">}HTNode;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">typedef struct {     			// 定义Huffman编码结构</span>
<span class="line">    char cd[MAX]; </span>
<span class="line">    int start; </span>
<span class="line">}HCode;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">bool cmp(SS a,SS b){</span>
<span class="line">	return a.n&lt;b.n;                   				//按照字符数量排序</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">void CreatHT(HTNode *HT, int n){</span>
<span class="line">	int i,k,l,r;</span>
<span class="line">	int m1, m2;</span>
<span class="line">    for(i = 1;i&lt;2*n; i++) </span>
<span class="line">        HT[i].parent = HT[i].lchild = HT[i].rchild = 0;						// 初始化</span>
<span class="line">    for(i = n+1; i&lt;2*n; i++) {    											// 构造Huffman树</span>
<span class="line">        m1 = m2 = 0x7fff;													// m1取最小权重，m2取次小权重</span>
<span class="line">        int lnode = 0,rnode = 0;     										// lnode, rnode分别取两个最小权重的结点位置</span>
<span class="line">        for( k=1; k&lt;i; k++)</span>
<span class="line">		{	if(HT[k].parent==0)</span>
<span class="line">			{</span>
<span class="line">				if(HT[k].weight&lt;m1) {</span>
<span class="line">	                m2 = m1;</span>
<span class="line">					rnode=lnode;</span>
<span class="line">					m1 = HT[k].weight;</span>
<span class="line">					lnode=k;</span>
<span class="line">				}</span>
<span class="line">				else if(HT[k].weight&lt;m2) {</span>
<span class="line">					m2 = HT[k].weight;</span>
<span class="line">					rnode = k;</span>
<span class="line">				}</span>
<span class="line">            }</span>
<span class="line">		}</span>
<span class="line">        HT[lnode].parent = i;</span>
<span class="line">		HT[rnode].parent = i;</span>
<span class="line">		HT[i].weight =  HT[lnode].weight+HT[rnode].weight;</span>
<span class="line">		HT[i].lchild = lnode;</span>
<span class="line">		HT[i].rchild = rnode;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void CreatHCode(HTNode *HT, HCode *hcd, int n ){</span>
<span class="line">	int i, f, c;</span>
<span class="line">	HCode hc;</span>
<span class="line">    for(i=1; i&lt;=n; i++) </span>
<span class="line">    {</span>
<span class="line">		hc.start = n;</span>
<span class="line">        c = i;</span>
<span class="line">        f = HT[i].parent;</span>
<span class="line">        while( f!=0 ) {</span>
<span class="line">            if(HT[f].lchild==c)   										// c是f的左孩子，编码取&#39;0&#39;，否则取&#39;1&#39;</span>
<span class="line">                hc.cd[--hc.start]=&#39;0&#39;;</span>
<span class="line">            else</span>
<span class="line">                hc.cd[--hc.start]=&#39;1&#39;;</span>
<span class="line">            c = f;														// 向根结点方向搜索</span>
<span class="line">			f = HT[f].parent;</span>
<span class="line">        }</span>
<span class="line">		hcd[i]= hc;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">void Made_01(HTNode *HT, HCode *hcd, int n, map&lt;char,string&gt; &amp;mp){</span>
<span class="line">	int i,k;</span>
<span class="line">	string re = &quot;&quot;;</span>
<span class="line">	for(i = 1; i&lt;=n; i++){</span>
<span class="line">		re = &quot;&quot;;</span>
<span class="line">		for(k=hcd[i].start; k&lt;n; k++)re+=hcd[i].cd[k];			</span>
<span class="line">		mp[HT[i].data] = re;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">string sout(map&lt;char,string&gt; mp1,string S_01){						//转回的字符串 </span>
<span class="line">	string s1 = &quot;&quot;;int i = 0;														//单个字符的哈夫曼编码</span>
<span class="line">	string s_out = &quot;&quot;;</span>
<span class="line">	while(S_01[i]!=&#39;\\0&#39;){											//遍历哈夫曼编码得到原字符串 </span>
<span class="line">		s1+=S_01[i++];</span>
<span class="line">		for(map&lt;char,string&gt;::iterator it = mp1.begin();it!=mp1.end();it++){</span>
<span class="line">			if(it-&gt;second==s1){</span>
<span class="line">				s_out+=it-&gt;first;</span>
<span class="line">				s1 = &quot;&quot;;</span>
<span class="line">				break;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return s_out;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void print(){</span>
<span class="line">	cout&lt;&lt;endl;</span>
<span class="line">    for(int i = 0;i&lt;32;i++)cout&lt;&lt;&quot; &quot;;</span>
<span class="line">    cout&lt;&lt;&quot;--------------欢迎使用文章压缩解码文件！--------------&quot;&lt;&lt;endl; </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int print1(string &amp;s){																						//输入开始提示界面以及选择s字符串 </span>
<span class="line">	cout&lt;&lt;&quot;功能有：1.自行输入字符串     2.直接使用测试数据    0.退出程序&quot;&lt;&lt;endl;</span>
<span class="line">	string x;</span>
<span class="line">	cout&lt;&lt;&quot;请输入操作指令：&quot;;</span>
<span class="line">//	string s;</span>
<span class="line">	cin&gt;&gt; x;</span>
<span class="line">	</span>
<span class="line">	if(x==&quot;0&quot;){cout&lt;&lt;&quot;已退出程序\\n&quot;;return 0;}</span>
<span class="line">	else if(x==&quot;2&quot;)s = &quot;Four Words to Make Life Worth.\\nwhile Over the years as I&#39;ve sought out ideas, principles and strategies to life&#39;s challenges, I&#39;ve come acrocharnum four simple words that can make living worthwhile. First, life is worthwhile if you learn. What you don&#39;t know will hurt you. You have to have learning to exist, let alone succeed. Life is worthwhile if you learn from your own experiences - negative or positive. We learn to do it right by first sometimes doing it wrong. We call that a positive negative. We also learn from other people&#39;s experience, both positive and negative. Second, life is worthwhile if you try. You can&#39;t just learn; now you have to try something to see if you can do it. Try to make a difference, try to make some progrecharnum, try to learn a new skill, try to learn a new sport. It doesn&#39;t mean you can do everything, but there are a lot of things you can do, if you just try. Try your best and go all out. Third, life is worthwhile if you stay. You have to stay from spring until harvest. Sometimes calamity comes and then it is worth wrapping it up. But just don&#39;t end in the middle. Maybe on the next project you pacharnum, but on this one, if you signed up, see it through. And lastly, life is worthwhile if you care. If you care at all you will get some results, if you care enough you can get incredible results. Care enough to make a difference. Care enough to turn somebody around. Care enough to start a new enterprise. Care enough to set some records. Care enough to win.&quot;;</span>
<span class="line">	else if(x==&quot;1&quot;){</span>
<span class="line">		cout&lt;&lt;&quot;请输入要压缩的字符串：&quot;;</span>
<span class="line">		getchar();</span>
<span class="line">		getline(cin,s);</span>
<span class="line">	}</span>
<span class="line">	else {</span>
<span class="line">		cout&lt;&lt;&quot;输入错误!\\n&quot;;</span>
<span class="line">		return -1;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">void print2(string S_01,string s_out,string s){																		//按照要求输出 </span>
<span class="line">	cout&lt;&lt;&quot;\\t输入1查看哈夫曼编码\\n\\t输入2查看解码后的字符串\\n\\t输入3查看原字符串\\n\\t输入4判断解码后的字符串与原字符型是否一致\\n\\t输入0退出本次转码&quot;&lt;&lt;endl;</span>
<span class="line">	string a;</span>
<span class="line">	while(1){</span>
<span class="line">		cout&lt;&lt;&quot;   请输入指令：&quot;;</span>
<span class="line">		cin&gt;&gt;a;</span>
<span class="line">		if(a==&quot;0&quot;){</span>
<span class="line">			memset(charnum,0,sizeof(charnum));</span>
<span class="line">			break;</span>
<span class="line">		}</span>
<span class="line">		else if(a==&quot;1&quot;)cout&lt;&lt;&quot;哈夫曼编码为：\\n&quot;&lt;&lt;S_01&lt;&lt;endl;</span>
<span class="line">		else if(a==&quot;2&quot;)cout&lt;&lt;&quot;解码后的字符串为：\\n&quot;&lt;&lt;s_out&lt;&lt;endl;</span>
<span class="line">		else if(a==&quot;3&quot;)cout&lt;&lt;&quot;原字符串为：\\n&quot;&lt;&lt;s&lt;&lt;endl; </span>
<span class="line">		else if(a==&quot;4&quot;)cout&lt;&lt;&quot;原字符串与解码后一致？&quot;&lt;&lt;(s==s_out ? &quot;YES&quot; : &quot;NO&quot;)&lt;&lt;endl; </span>
<span class="line">		else cout&lt;&lt;&quot;输入错误！\\n&quot;;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">    HTNode HT[2*MAX-1];</span>
<span class="line">    HCode hcd[MAX];print(); </span>
<span class="line">	while(1){</span>
<span class="line">		string s;int fofo = print1(s);</span>
<span class="line">		if(fofo==-1)continue;</span>
<span class="line">		else if(fofo==0)break;</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		map&lt;char,int&gt; mp;</span>
<span class="line">		int len = s.size();</span>
<span class="line">		for(int i = 0;i&lt;len;i++){</span>
<span class="line">			mp[s[i]]++;</span>
<span class="line">		}</span>
<span class="line">		int n = 0;</span>
<span class="line">		for(map&lt;char,int&gt;::iterator it = mp.begin();it!=mp.end();it++)n++;			//统计不同字符数量 </span>
<span class="line">		map&lt;char,int&gt;::iterator it = mp.begin();</span>
<span class="line">		for(int i = 0;i&lt;n;i++){</span>
<span class="line">			char c = it-&gt;first;</span>
<span class="line">			charnum[i].c = c;</span>
<span class="line">			charnum[i].n = mp[c];</span>
<span class="line">			it++;</span>
<span class="line">		}</span>
<span class="line">		sort(charnum,charnum+n,cmp);										//排序 </span>
<span class="line">		int sum = 0;</span>
<span class="line">		for(int i = 0;i&lt;n;i++){                             //测试存入的数量个数与字符串长度是否一样</span>
<span class="line">			sum+=charnum[i].n;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">	    for(int i=1; i&lt;=n; i++) {							// 将统计的字符及个数排序好后存入HT中，方便创建哈夫曼树 </span>
<span class="line">			HT[i].data = charnum[i-1].c;</span>
<span class="line">			HT[i].weight = charnum[i-1].n;</span>
<span class="line">	    }</span>
<span class="line">		cout&lt;&lt;&quot;创建Huffman树中......\\t\\t&quot;;      		CreatHT(HT, n);							Sleep(200);</span>
<span class="line">		cout&lt;&lt;&quot;Huffman树创建成功！&quot;&lt;&lt;endl;														Sleep(200);</span>
<span class="line">		cout&lt;&lt;&quot;创建Huffman编码中......\\t\\t&quot;; 			CreatHCode(HT, hcd, n);					Sleep(200);</span>
<span class="line">		cout&lt;&lt;&quot;Huffman编码创建成功！&quot;&lt;&lt;endl;</span>
<span class="line">		</span>
<span class="line">		map &lt;char ,string&gt; mp1;</span>
<span class="line">		Made_01(HT, hcd, n,mp1);</span>
<span class="line">		cout&lt;&lt;&quot;   字符串编码创建成功！\\n&quot;;</span>
<span class="line">//																		for(map&lt;char,string&gt;::iterator it = mp1.begin();it!=mp1.end();it++){</span>
<span class="line">//																			cout&lt;&lt;it-&gt;first&lt;&lt;&quot;      &quot;&lt;&lt;it-&gt;second&lt;&lt;endl;</span>
<span class="line">//																		}		//测试每个字符的哈夫曼编码，最好不用（中文会有问题） </span>
<span class="line">		</span>
<span class="line">		string S_01 = &quot;&quot;;           					//S_01为字符串转换后的所有哈夫曼编码</span>
<span class="line">		for(int i = 0;i&lt;len;i++)S_01+=mp1[s[i]];</span>
<span class="line">		S_01+=&#39;\\0&#39;;cout&lt;&lt;endl&lt;&lt;endl;</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		int i = 0;											//单个字符的哈夫曼编码 </span>
<span class="line">		string s_out = sout(mp1,S_01);                    							//通过哈夫曼编码解码出的字符串</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">		char cc = s[0];int f = 1;						//若所有字符都相同，则字符的编码就为0，即全部为0 </span>
<span class="line">		for(int i = 1;i&lt;s.size();i++)if(s[i]!=cc){f=0;break;}</span>
<span class="line">		if(f==1){</span>
<span class="line">			S_01 = &quot;&quot;;</span>
<span class="line">			for(int i=  0;i&lt;len;i++)S_01+=&#39;0&#39;;</span>
<span class="line">			s_out = s;</span>
<span class="line">		}</span>
<span class="line">				</span>
<span class="line">		print2(S_01,s_out,s);</span>
<span class="line">				</span>
<span class="line">	}	</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例题答案" tabindex="-1"><a class="header-anchor" href="#例题答案"><span>例题答案</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code><span class="line">#include&lt;stdio.h&gt;</span>
<span class="line">#define MAX 21</span>
<span class="line">typedef struct {				// 定义Huffman树结点结构</span>
<span class="line">    char data;         		// 结点值</span>
<span class="line">    int weight;        		// 权重</span>
<span class="line">    int parent;        		// 父结点</span>
<span class="line">    int lchild;      			// 左孩子</span>
<span class="line">    int rchild;      			// 右孩子</span>
<span class="line">}HTNode;</span>
<span class="line">typedef struct {     			// 定义Huffman编码结构</span>
<span class="line">    char cd[MAX]; </span>
<span class="line">    int start; </span>
<span class="line">}HCode;</span>
<span class="line"></span>
<span class="line">void CreatHT(HTNode *HT, int n)</span>
<span class="line">{</span>
<span class="line">	int i,k,l,r;</span>
<span class="line">	int m1, m2;</span>
<span class="line">    for(i=1;i&lt;2*n; i++) </span>
<span class="line">        HT[i].parent = HT[i].lchild = HT[i].rchild = 0;	// 初始化</span>
<span class="line">    for(i=n+1; i&lt;2*n; i++) {    		// 构造Huffman树</span>
<span class="line">        m1 =m2 = 0x7fff;			// m1取最小权重，m2取次小权重</span>
<span class="line">        int lnode  = 0 , rnode = 0;     		// lnode, rnode分别取两个最小权重的结点位置</span>
<span class="line">        for( k=1; k&lt;i; k++)</span>
<span class="line">		{	if(HT[k].parent==0)</span>
<span class="line">			{</span>
<span class="line">				if(HT[k].weight&lt;m1) {</span>
<span class="line">	                int m2 = m1;  rnode=lnode;</span>
<span class="line">					m1 =  HT[k].weight;  lnode=k;</span>
<span class="line">				}</span>
<span class="line">				else if(HT[k].weight&lt;m2) {</span>
<span class="line">					m2 =HT[k].weight;</span>
<span class="line">					rnode =  k ;</span>
<span class="line">				}</span>
<span class="line">            }</span>
<span class="line">		}</span>
<span class="line">        HT[lnode].parent = i;</span>
<span class="line">		HT[rnode].parent = i;</span>
<span class="line">		HT[i].weight =  HT[lnode].weight+HT[rnode].weight;</span>
<span class="line">		HT[i].lchild = lnode;</span>
<span class="line">		HT[i].rchild = rnode;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void CreatHCode(HTNode *HT, HCode *hcd, int n ){</span>
<span class="line">	int i, f, c;</span>
<span class="line">	HCode hc;</span>
<span class="line">    for(i=1; i&lt;=n; i++) </span>
<span class="line">    {</span>
<span class="line">		hc.start = n;</span>
<span class="line">        c = i;</span>
<span class="line">        f = HT[i].parent;</span>
<span class="line">        while( f!=0 ) {</span>
<span class="line">            if(HT[f].lchild==c)   										// c是f的左孩子，编码取&#39;0&#39;，否则取&#39;1&#39;</span>
<span class="line">                hc.cd[--hc.start]=&#39;0&#39;;</span>
<span class="line">            else</span>
<span class="line">                hc.cd[--hc.start]=&#39;1&#39;;</span>
<span class="line">            c = f;														// 向根结点方向搜索</span>
<span class="line">			f = HT[f].parent;</span>
<span class="line">        }</span>
<span class="line">		hcd[i]= hc;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void PrintHCode(HTNode *HT, HCode *hcd, int n)</span>
<span class="line">{</span>
<span class="line">	int i,k;</span>
<span class="line">	for(i=1; i&lt;=n; i++) </span>
<span class="line">	{</span>
<span class="line">		printf(&quot;  %c：&quot;,HT[i].data);</span>
<span class="line">		for(k= hcd[i].start; k&lt;n; k++)</span>
<span class="line">			printf(&quot;%c&quot;, hcd[i].cd[k]);</span>
<span class="line">		printf(&quot;\\n&quot;);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">	int i, n;</span>
<span class="line">    HTNode HT[2*MAX-1];</span>
<span class="line">    HCode hcd[MAX];</span>
<span class="line">	printf(&quot;(1)创建Huffman树......\\n&quot;);</span>
<span class="line">	do {</span>
<span class="line">	    printf(&quot;  请输入元素个数(1-%d)：&quot;, MAX-1);</span>
<span class="line">		scanf(&quot;%d&quot;, &amp;n);</span>
<span class="line">	} while(n&lt;1||n&gt;MAX-1);	// 确保n值合规</span>
<span class="line">    for(i=1; i&lt;=n; i++) {		// Huffman树结点存放在ht数组从1下标开始的位置</span>
<span class="line">        fflush(stdin);</span>
<span class="line">		printf(&quot;  第%d个元素的结点值==&gt;&quot;, i);</span>
<span class="line">        scanf(&quot;%c&quot;,&amp;HT[i].data);</span>
<span class="line">		printf(&quot;\\t权重==&gt;&quot;);</span>
<span class="line">		scanf(&quot;%d&quot;,&amp;HT[i].weight);</span>
<span class="line">    }</span>
<span class="line">	CreatHT(HT, n);</span>
<span class="line">	printf(&quot;  Huffman树创建成功！\\n&quot;);</span>
<span class="line">    fflush(stdin);</span>
<span class="line">	getchar();</span>
<span class="line">	printf(&quot;(2)创建Huffman编码......\\n&quot;);</span>
<span class="line">	CreatHCode(HT, hcd, n);</span>
<span class="line">	printf(&quot;  Huffman编码创建成功！\\n&quot;);</span>
<span class="line">	getchar();</span>
<span class="line"></span>
<span class="line">	printf(&quot;(3)输出Huffman编码：\\n&quot;);</span>
<span class="line">	PrintHCode(HT, hcd, n);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//6</span>
<span class="line">//a</span>
<span class="line">//7</span>
<span class="line">//b</span>
<span class="line">//9</span>
<span class="line">//c</span>
<span class="line">//12</span>
<span class="line">//d</span>
<span class="line">//22</span>
<span class="line">//e</span>
<span class="line">//23</span>
<span class="line">//f</span>
<span class="line">//27</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)])])}const p=s(e,[["render",t]]),v=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%A4%A7%E4%BD%9C%E4%B8%9A.html","title":"数据结构与算法大作业","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"校园导航","slug":"校园导航","link":"#校园导航","children":[]},{"level":2,"title":"图形手稿","slug":"图形手稿","link":"#图形手稿","children":[]},{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[]},{"level":2,"title":"测试数据","slug":"测试数据","link":"#测试数据","children":[]},{"level":2,"title":"哈夫曼树","slug":"哈夫曼树","link":"#哈夫曼树","children":[]},{"level":2,"title":"源码","slug":"源码-1","link":"#源码-1","children":[]},{"level":2,"title":"例题答案","slug":"例题答案","link":"#例题答案","children":[]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":3,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"},{"hash":"fda24bba0aaf0c659a0fe19f8a73f0ae17a879c8","time":1751641124000,"email":"2770063826@qq.com","author":"lijunxi","message":"整合笔记"}]},"filePathRelative":"算法/数据结构与算法大作业.md"}');export{p as comp,v as data};
