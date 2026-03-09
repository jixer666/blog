import{_ as e,c as a,b as n,a as i,o as l}from"./app-BKm_FHq2.js";const d={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[n("h1",{id:"c语言指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c语言指针"},[n("span",null,"C语言指针")])],-1),n("div",{style:{background:"#f8f9fa",padding:"12px 16px","border-left":"3px solid #4CAF50","margin-bottom":"16px","border-radius":"0 4px 4px 0","font-size":"0.9rem"}},[n("div",{style:{display:"flex","align-items":"center",gap:"30px","flex-wrap":"wrap"}},[n("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[n("span",{stylebuxiang:"color: #666;"},"📅"),n("span",null,"记不清了")]),n("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[n("span",{style:{color:"#666"}},"✍️"),n("span",null,"Jixer")])])],-1),i(`<blockquote><p>文章写于2022年C语言培训指针章节</p></blockquote><p><em>是什么指针？什么是指针变量</em>？</p><ul><li><strong>指针就是地址</strong></li><li><strong>指针变量就是存放地址的变量</strong></li><li><strong>指针也是一个数据类型</strong></li></ul><h2 id="一-指针变量" tabindex="-1"><a class="header-anchor" href="#一-指针变量"><span>一.指针变量</span></a></h2><h3 id="_1-一级指针" tabindex="-1"><a class="header-anchor" href="#_1-一级指针"><span>1.一级指针</span></a></h3><p><strong>定义指针变量</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 5; //空间分配4个字节</span>
<span class="line">int *p = &amp;a；//&amp;a表示a的地址</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><table><tbody><tr><td class="has-text-align-center" data-align="center">00001</td></tr><tr><td class="has-text-align-center" data-align="center">00002</td></tr><tr><td class="has-text-align-center" data-align="center">00003</td></tr><tr><td class="has-text-align-center" data-align="center">00004</td></tr><tr><td class="has-text-align-center" data-align="center">00005</td></tr></tbody></table><p>假设地址</p><p><em>注意：每次程序重新运行，分配的地址都会变化!</em></p><p>p : &amp;a -----&gt; a ：5 表示p指向a，则a就为p的<strong>目标变量</strong></p><p><strong>访问</strong></p><ul><li>直接访问：printf(&quot;%d&quot;,a);</li><li>间接访问：printf(&quot;%d&quot;,*p);</li><li>a+5 == *p+5</li></ul><p>例子</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 100,b = 5;</span>
<span class="line">int *p1 = &amp;a,*p2 = &amp;b;</span>
<span class="line">printf(&quot;%d,%d\\n&quot;,a,b);</span>
<span class="line">printf(&quot;%d,%d\\n&quot;,*p1,*p2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.指针指向改变，但目标变量没变</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 100, b = 5,*p1,*p2,*c;</span>
<span class="line">p1 = &amp;a; p2 = &amp;b;</span>
<span class="line">c = p1; p1 = p2; p2 = c;</span>
<span class="line">printf(&quot;%d %d\\n&quot;,a,b);</span>
<span class="line">printf(&quot;%d %d&quot;,*p1,*p2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.指针指向不变，目标变量改变</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 100, b = 5,*p1,*p2,c=0;</span>
<span class="line">p1 = &amp;a; p2 = &amp;b;</span>
<span class="line">c = *p1; *p1 = *p2; *p2 = c;</span>
<span class="line">printf(&quot;%d %d\\n&quot;,a,b);</span>
<span class="line">printf(&quot;%d %d&quot;,*p1,*p2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-二级指针-指向指针的指针变量" tabindex="-1"><a class="header-anchor" href="#_2-二级指针-指向指针的指针变量"><span>2.<strong>二级指针</strong>（指向指针的指针变量）</span></a></h3><p>二级指针：表示o所指向的地址里面存放的是一个指向（类型）的指针，适用于二维数组</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 5;</span>
<span class="line">int *p = &amp;a;    //a的地址放在p中</span>
<span class="line">int **o = &amp;p;     //p的地址放在o中</span>
<span class="line">                  //所以a的地址放在o中</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-指针类型" tabindex="-1"><a class="header-anchor" href="#二-指针类型"><span>二.指针类型</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">printf(&quot;%d\\n&quot;,sizeof(char*));</span>
<span class="line">printf(&quot;%d\\n&quot;,sizeof(int*));</span>
<span class="line">printf(&quot;%d\\n&quot;,sizeof(double*));</span>
<span class="line">printf(&quot;%d\\n&quot;,sizeof(float*));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的输出与系统有关，32位系统和64位系统的输出不同，但是输出是相同的，指针大小的输出与类型无关</p><h3 id="_1-指针类型决定了指针进行解引用操作的的时候-访问空间大小" tabindex="-1"><a class="header-anchor" href="#_1-指针类型决定了指针进行解引用操作的的时候-访问空间大小"><span>1.<strong>指针类型决定了指针进行解引用操作的的时候，访问空间大小</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int *p ； #*p能够访问4个字节</span>
<span class="line">char *p ； #*p能够访问1个字节</span>
<span class="line">doube *p;  #*p能够访问8个字节</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 0x11223344;  //八进制</span>
<span class="line">int *p1 = &amp;a;</span>
<span class="line">char *p2 = &amp;a;  //错误写法</span>
<span class="line">printf(&quot;%p\\n&quot;,p1);</span>
<span class="line">printf(&quot;%p\\n&quot;,p2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：<em>从“int *”到“char *”的类型不兼容</em></p><h3 id="_2-指针类型决定了指针-1向后变化的字节" tabindex="-1"><a class="header-anchor" href="#_2-指针类型决定了指针-1向后变化的字节"><span>2.<strong>指针类型决定了指针+1向后变化的字节</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 0x11223344;</span>
<span class="line">int *p1 = &amp;a;</span>
<span class="line">char *p2 = &amp;a;</span>
<span class="line">printf(&quot;%p\\n&quot;,p1+1);    </span>
<span class="line">printf(&quot;%p\\n&quot;,p2+1);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>int* 加1 ：地址+4</li><li>char *加1：地址+1</li><li>double*加1：地址+8</li></ul><h2 id="三-野指针-2种" tabindex="-1"><a class="header-anchor" href="#三-野指针-2种"><span>三.野指针（2种）</span></a></h2><h3 id="_1-指针未初始化" tabindex="-1"><a class="header-anchor" href="#_1-指针未初始化"><span><strong>1.指针未初始化</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main()</span>
<span class="line">{ </span>
<span class="line"> int *p;       //局部变量指针未初始化，默认为随机值</span>
<span class="line"> *p = 20;</span>
<span class="line"> return 0;</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-指针越界" tabindex="-1"><a class="header-anchor" href="#_2-指针越界"><span><strong>2.指针越界</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int num[10] = {0};</span>
<span class="line">int *p = num;</span>
<span class="line">for(int i=0;i&lt;=11;i++){</span>
<span class="line">    *(p++) = i;   #超过数组范围</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注意：在实际操作中应注意避开野指针</em></p><p>当指针不指向任何变量，可以这样写：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#define NULL 0   //文件开头指定符号常量NULL代表0</span>
<span class="line"></span>
<span class="line">int *p = NULL; //使p指向地址为0的单元，确保系统对它不起任何作用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-通过指针引用数组" tabindex="-1"><a class="header-anchor" href="#四-通过指针引用数组"><span><strong>四.通过指针引用数组</strong></span></a></h2><ul><li><strong>数组</strong>：一个数组包含若干元素，每个数组元素都在内存中占用的存储单元，它们都有着相应的地址</li><li>**指针变量：**既可以指向变量，也可以指向数组元素</li></ul><h3 id="_1-指向数组元素的指针" tabindex="-1"><a class="header-anchor" href="#_1-指向数组元素的指针"><span>1.<strong>指向数组元素的指针</strong></span></a></h3><p>数组元素的指针：数组元素的地址</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int num[5] = {1,2,3,4,5};</span>
<span class="line">int *p = num;</span>
<span class="line">//int *p = &amp;num[0];   数组的首元素地址赋值给指针变量p</span>
<span class="line">//int *p;*p = a;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/school/QQ截图20220429101414.png" alt=""></p><h3 id="_2-通过指针引用数组元素" tabindex="-1"><a class="header-anchor" href="#_2-通过指针引用数组元素"><span><strong>2.通过指针引用数组元素</strong></span></a></h3><ul><li>下标法 如：a[i]</li><li>指针法 如：*(a+i)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int num[9]={1,2,3,4,5,6,7,8,9};</span>
<span class="line">int *p = num;</span>
<span class="line"></span>
<span class="line">printf(&quot;%p\\n&quot;,p); </span>
<span class="line">printf(&quot;%p\\n&quot;,p+1);</span>
<span class="line">printf(&quot;%p\\n&quot;,p+2);</span>
<span class="line">printf(&quot;%d\\n&quot;,*p);</span>
<span class="line">printf(&quot;%d\\n&quot;,*(p+1));</span>
<span class="line">printf(&quot;%d\\n&quot;,*(p+2));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：输出以下结果</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int num[5] = {1,2,3,4,5};</span>
<span class="line">int *p = num;</span>
<span class="line"></span>
<span class="line">printf(&quot;%d %d %d&quot;,*p,*p++,*++p);   //3 2 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a = 1;</span>
<span class="line"></span>
<span class="line">printf(&quot;%d %d %d&quot;,a,a++,++a);   //3 2 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**总结：**printf从右往左入栈，但是输出的顺序为：x或++x只改变x的值最后才输出，x++确定此位置的输出并立刻输出。指针：最后的*x和*++x并不是此时的*x的值，不会发生改变；其他：x最后计算完后，x和++x位置的值都是此时x的值。</p><p><strong>更多详情知识看这个：</strong><a href="https://blog.csdn.net/qq_44194231/article/details/107007890" target="_blank" rel="noopener noreferrer">(32条消息) printf的压栈顺序和输出顺序_我在这里啊@的博客-CSDN博客_printf语句从右到左输出</a></p><h3 id="_3-用数组名作函数参数" tabindex="-1"><a class="header-anchor" href="#_3-用数组名作函数参数"><span><strong>3.用数组名作函数参数</strong></span></a></h3><p>1.形参和实参都用数组名</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main(){</span>
<span class="line">   int a[10];</span>
<span class="line">   func(a,10);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int func(int x[],int y){....}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.实参用数组名，形参用指针变量</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main(){</span>
<span class="line">   int a[10];</span>
<span class="line">   func(a,10);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void func(int *p,int y){...}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.实参形参都用指针变量</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main(){</span>
<span class="line">   int a[10],*p = a;</span>
<span class="line">   func(p,10);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void func(int *m,int y){...}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.实参用指针变量，形参用数组名</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main(){</span>
<span class="line">   int a[10],*p = a;</span>
<span class="line">   func(p,10);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void func(int m[],int y){...}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：下列运行后的输出结果是？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">void func(char *c,int d){</span>
<span class="line">     *c = *c + 1;</span>
<span class="line">      d = d + 1;</span>
<span class="line">      printf(&quot;%c,%c\\n&quot;,*c,d);</span>
<span class="line">}</span>
<span class="line">int main(){</span>
<span class="line">     char a = &#39;A&#39;,b = &#39;a&#39;;</span>
<span class="line">     func(&amp;b,a);</span>
<span class="line">     printf(&quot;%c,%c\\n&quot;,a,b);</span>
<span class="line">     return 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//输出：b,B</span>
<span class="line">        A,b</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-二维数组与指针-二维数组相当于二级指针" tabindex="-1"><a class="header-anchor" href="#_4-二维数组与指针-二维数组相当于二级指针"><span>4.二维数组与指针（二维数组相当于二级指针）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int a[3][4] = {{1,3,5,7},{9,11,13,15},{17,19,21,23}};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/school/QQ图片20220417213513-1024x576.png" alt=""></p><p>在指向行指针前面加以一个*，就转换成为了列指针</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">*a</span>
<span class="line">*(a+1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在指向列的指针前面加一个&amp;，就转换成了行指针</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a[0]   //a[0]是以指向0行0列元素指针</span>
<span class="line">&amp;a[0]   //&amp;a[0]指向0行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>综合</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">printf(&quot;%p,%p\\n&quot;,a,*a);     //0行起始地址   0行0列起始地址</span>
<span class="line">printf(&quot;%p,%p\\n&quot;,a[0],*(a+0));     //0行0列元素地址</span>
<span class="line">printf(&quot;%p,%p\\n&quot;,&amp;a[0],&amp;a[0][0]);      //0行起始地址  0行0列元素地址</span>
<span class="line">printf(&quot;%p,%p\\n&quot;,a[1],a+1);         //1行0列元素地址  1行起始地址</span>
<span class="line">printf(&quot;%p,%p\\n&quot;,&amp;a[1][0],*(a+1)+0);   //1行0列元素地址</span>
<span class="line">printf(&quot;%p,%p\\n&quot;,a[2],*(a+2));   //2行0列元素地址</span>
<span class="line">printf(&quot;%p,%p\\n&quot;,&amp;a[2],a+2);    // 2行起始地址</span>
<span class="line">printf(&quot;%d,%d\\n&quot;,a[1][0],*(*(a+1)+0));   //1行0列元素</span>
<span class="line">printf(&quot;%d,%d\\n&quot;,*a[2],*(*(a+2)+0));  //2行0列元素</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-数组指针和指针数组" tabindex="-1"><a class="header-anchor" href="#五-数组指针和指针数组"><span><strong>五.数组指针和指针数组</strong></span></a></h2><p>**口诀：**数组指针是指针，指针数组是数组</p><h3 id="_1-数组指针" tabindex="-1"><a class="header-anchor" href="#_1-数组指针"><span><strong>1.数组指针</strong></span></a></h3><p>数组指针：指向数组的指针，<strong>是指针</strong>，数组指针一般在二维数组中使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int (*p)[4];    //32位为4个字节，64位8个字节</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>**解释：**p先和*结合，说明p是一个指针变量，然后指着指向的是一个大小为10个整型的数组。所以p是一个 指针，指向一个数组的地址，叫数组指针。</p><p><strong>这里要注意：</strong>[]的优先级要高于*号的，所以必须加上（）来保证p先和*结合。</p><p><strong>一级指针和二级指针在数组指针的不同</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int num[2][2] = {1,2,3,4};</span>
<span class="line">int *p = num;  //错误，一级指针不能与二级指针相等</span>
<span class="line">int (*p1)[2] = num;  //正确写法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：输出二维数组的全部元素</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main(){</span>
<span class="line">    int num[3][4] = {1,2,3,4,5,6,7,8,9,10,11,12};</span>
<span class="line">    int (*p)[4];   //定义一个指数组指针</span>
<span class="line">    p = num;   //num第0行的地址赋值给p</span>
<span class="line">    for(int i=0;i&lt;3;i++){</span>
<span class="line">    	for(int j=0;j&lt;4;j++){</span>
<span class="line">    	    printf(&quot;%d\\t&quot;,*(*(p+i)+j));</span>
<span class="line">         }</span>
<span class="line">         printf(&quot;\\n&quot;);</span>
<span class="line">     }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-指针数组" tabindex="-1"><a class="header-anchor" href="#_2-指针数组"><span><strong>2.指针数组</strong></span></a></h3><p>指针数组：一个存放指针的数组，<strong>是数组</strong>，数组指针里面放的每一个元素都放的是指针变量（地址），只能是地址；在使用的时候比较适合用来指向若干个字符串</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int *arr3[4]; //整形指针的数组，包含4个地址，32位16个字节，64位32字节</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/school/QQ图片20220417134435.png" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int *arr3[4] ={1,2,3,4};   //不能写成 </span>
<span class="line"></span>
<span class="line">int num = {1,2,3,4,5};   //正确解</span>
<span class="line">int *arr[4] = {&amp;num[0],&amp;num[1],&amp;num[2],&amp;num[3]};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：对3个字符串按字母排序（从小到大）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;stdio.h&gt;</span>
<span class="line">#include&lt;string.h&gt;</span>
<span class="line"></span>
<span class="line">void sort(char *p[],int a){    //形参为指针数组</span>
<span class="line">	char *temp;    //定义指针变量</span>
<span class="line">	for(int i=0;i&lt;3;i++){     //排序</span>
<span class="line">	   for(int j=0;j&lt;3-i;j++){</span>
<span class="line">	        if(strcmp(p[i],p[j])&gt;0){   //调用strcmp函数</span>
<span class="line">		    temp = p[i]; </span>
<span class="line">		    p[i] = p[j];</span>
<span class="line">		    p[j] = temp;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    char *num[3]={&quot;Hello&quot;,&quot;World&quot;,&quot;Good&quot;};  //定义指针数组，分别指向3个字符串</span>
<span class="line">    sort(num,3);     //调用sort函数,传入num的地址和3</span>
<span class="line">    for(int i=0;i&lt;3;i++){</span>
<span class="line">	puts(num[i]);  //输出排好序的字符串</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-区别" tabindex="-1"><a class="header-anchor" href="#_3-区别"><span>3.<strong>区别</strong></span></a></h3><p>数组指针只是一个指针变量，似乎是C语言里专门用来指向二维数组的，它占有内存中一个指针的存储空间。指针数组是多个指针变量，以数组形式存在内存当中，占有多个指针的存储空间</p><h2 id="六-字符指针-char" tabindex="-1"><a class="header-anchor" href="#六-字符指针-char"><span>六.字符指针（char*）</span></a></h2><h3 id="_1-字符指针一般使用" tabindex="-1"><a class="header-anchor" href="#_1-字符指针一般使用"><span>1.<strong>字符指针一般使用</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(1)</span>
<span class="line">char ch = &#39;w&#39;;</span>
<span class="line">char *p = &amp;ch;</span>
<span class="line">*p = &#39;q&#39;;</span>
<span class="line"></span>
<span class="line">(2)</span>
<span class="line">char *p = &quot;Hello World&quot;;   //存储的是首元素地址</span>
<span class="line">printf(&quot;%s&quot;,p);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注意：字符数组名或者字符指针变量可以输出一个字符串，但对于数值型(int)的是无法用数组名全部</em></p><h3 id="_2-字数数组与字符指针变量的区别" tabindex="-1"><a class="header-anchor" href="#_2-字数数组与字符指针变量的区别"><span>2.<strong>字数数组与字符指针变量的区别</strong></span></a></h3><p><strong>1.字符数组有若干个元素组成，每个元素中放一个字符，而字符指针变量存放的是指针地址（字符串第一个字符地址），绝不是将字符串放到指针变量中</strong></p><p><strong>2.赋值不同，字符数组不能使用以下方法赋值</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">char str[11];</span>
<span class="line">str = &quot;Hello World&quot;;  //数组名是地址不是常量，不能被赋值</span>
<span class="line">str[0] = &#39;H&#39;;    //但是可以对单个数组元素进行赋值</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而字符指针变量可以</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">char *str;</span>
<span class="line">str = &quot;Hello World&quot;;   </span>
<span class="line">//赋值给str是字符串第一个元素地址，不是字符</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3**.初始化不同**</p><p>对于字符指针：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">char *a = &quot;Hello World&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>等价于</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">char *a;</span>
<span class="line">a = &quot;Hello World&quot;;  //把H的地址赋给a</span>
<span class="line">注意不能写成： *a = &quot;Hello World&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于字符数组：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">char a[12] = &quot;Hello World&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不等价于</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">char a[12];</span>
<span class="line">a = &quot;Hello World&quot;;   //不能把字符串一次性全部赋值</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.储存不同</strong></p><ul><li>字符数组分配了若干个空间，用来存放个元素值</li><li>字符指针变量只分配了一个储存空间</li></ul><p>5**.指针变量的值是可以改变的，但是字符数组是一个固定的值（首元素地址），无法改变**</p><p><strong>例子：将字符串A赋值给字符串B</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int main(){</span>
<span class="line">    char num1[12] =&quot;Hello World&quot;,num2[12],*p1,*p2;</span>
<span class="line">    p1 = num1;</span>
<span class="line">    p2 = num2;</span>
<span class="line">    while(*p1!=&#39;\\0&#39;){</span>
<span class="line">         *p2 = *p1;</span>
<span class="line">         *p1++;*p2++;     //*p++  ==&gt;  *(p++)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    printf(&quot;num1: %s\\n&quot;,num1);</span>
<span class="line">    printf(&quot;num2: %s\\n&quot;,num2);</span>
<span class="line">	</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-指向函数的指针-一个指针" tabindex="-1"><a class="header-anchor" href="#七-指向函数的指针-一个指针"><span>七.指向函数的指针（一个指针）</span></a></h2><p><em>函数名代表函数的起始地址</em></p><h3 id="_1-定义指向函数的指针变量" tabindex="-1"><a class="header-anchor" href="#_1-定义指向函数的指针变量"><span>1.<strong>定义指向函数的指针变量</strong></span></a></h3><p>类型 （*指针变量名）（函数参数列表） <em>*指针变量名要括起来</em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int (*p)(int a,int b);    //表示指针变量p指向返回值为整数且有两个整型参数的函数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>是一个指针，指向一个函数</p><h3 id="_2-用函数指针变量调用函数" tabindex="-1"><a class="header-anchor" href="#_2-用函数指针变量调用函数"><span>2.用函数指针变量调用函数</span></a></h3><p>例子：求两数中最大值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int max(int a ,int b){</span>
<span class="line">	return a&gt;b?a:b;</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line">int main(){</span>
<span class="line">	int a,b;</span>
<span class="line">	int (*p)(int ,int);      //定义指向函数的指针变量</span>
<span class="line">	scanf(&quot;%d %d&quot;,&amp;a,&amp;b);</span>
<span class="line">	p = max;      //使p指向max函数，max函数的入口地址赋给了指针变量p</span>
<span class="line">	printf(&quot;最大值：%d&quot;,(*p)(a,b));</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-用指向函数的指针作为函数的参数" tabindex="-1"><a class="header-anchor" href="#_2-用指向函数的指针作为函数的参数"><span>2.用指向函数的指针作为函数的参数</span></a></h3><p><strong>指向函数的指针变量的一个重要途径：把函数的入口地址作为参数传到其他函数</strong></p><p>例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">void func(int (*p1)(int,int),int (*p2)(int,int)){</span>
<span class="line">	int a,b;</span>
<span class="line">	a = (*p1)(1,3);   //调用p1函数</span>
<span class="line">	b = (*p2)(2,5);    //调用p2函数</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：求两数中最大值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int max(int a ,int b){</span>
<span class="line">	return a&gt;b?a:b;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int func(int a,int b,int (*p)(int,int)){    //相当于 p = max;</span>
<span class="line">     return (*p)(a,b);   //调用max函数，传入a，b并返回，相当于max(a,b);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int max(int,int);   //声明max函数</span>
<span class="line">    int func(int,int,int (*p)(int,int));//声明func函数，传入参为指向函数的指针变量</span>
<span class="line">    int a,b;</span>
<span class="line">    scanf(&quot;%d %d&quot;,&amp;a,&amp;b);</span>
<span class="line">    printf(&quot;%d&quot;,func(a,b,max));  //传参 a,b,max函数的地址</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-返回指针值的函数-一个函数" tabindex="-1"><a class="header-anchor" href="#八-返回指针值的函数-一个函数"><span>八.返回指针值的函数（一个函数）</span></a></h2><p>**注意：**一个函数可以返回整型值，字符值，实类值等。这个函数与以前的函数类似，只不过返回的是指针型（地址）</p><h3 id="一般形式-类型名-函数名-参数列表" tabindex="-1"><a class="header-anchor" href="#一般形式-类型名-函数名-参数列表"><span>一般形式：<strong>类型名 *函数名(参数列表)</strong></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">int *func(int x,int y)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解释：a是函数名，调用他以后得到一个int*型（指向整型数据）的指针。x，y是整型形参。</p><p><strong>例子：给定一个多维数组，输入行数，输出他的一行的所有元素</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#include&lt;stdio.h&gt;</span>
<span class="line"></span>
<span class="line">int *find(int (*a)[4],int n){   //形参a是指向一维数组的数组指针，存放的是首元素地址</span>
<span class="line">	int *b;</span>
<span class="line">	b = *(a+n);    //b的值是&amp;num[k][0]</span>
<span class="line">	return (b);  //返回一个指针</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	int num[3][4] = {97,98,96,95,94,93,92,91,90,89,88,87};</span>
<span class="line">	int *p,k;</span>
<span class="line">	printf(&quot;输入行数：&quot;); </span>
<span class="line">	scanf(&quot;%d&quot;,&amp;k);</span>
<span class="line">	p = find(num,k);    //返回num[k][0]的地址</span>
<span class="line">	for(int i=0;i&lt;4;i++){</span>
<span class="line">	    printf(&quot;%d &quot;,*(p+i));   //依次输出第k行的所有元素</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,142)])])}const c=e(d,[["render",p]]),u=JSON.parse('{"path":"/%E5%AD%A6%E6%A0%A1%E4%B9%A0%E9%A2%98/C%E8%AF%AD%E8%A8%80%E6%8C%87%E9%92%88.html","title":"C语言指针","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一.指针变量","slug":"一-指针变量","link":"#一-指针变量","children":[{"level":3,"title":"1.一级指针","slug":"_1-一级指针","link":"#_1-一级指针","children":[]},{"level":3,"title":"2.二级指针（指向指针的指针变量）","slug":"_2-二级指针-指向指针的指针变量","link":"#_2-二级指针-指向指针的指针变量","children":[]}]},{"level":2,"title":"二.指针类型","slug":"二-指针类型","link":"#二-指针类型","children":[{"level":3,"title":"1.指针类型决定了指针进行解引用操作的的时候，访问空间大小","slug":"_1-指针类型决定了指针进行解引用操作的的时候-访问空间大小","link":"#_1-指针类型决定了指针进行解引用操作的的时候-访问空间大小","children":[]},{"level":3,"title":"2.指针类型决定了指针+1向后变化的字节","slug":"_2-指针类型决定了指针-1向后变化的字节","link":"#_2-指针类型决定了指针-1向后变化的字节","children":[]}]},{"level":2,"title":"三.野指针（2种）","slug":"三-野指针-2种","link":"#三-野指针-2种","children":[{"level":3,"title":"1.指针未初始化","slug":"_1-指针未初始化","link":"#_1-指针未初始化","children":[]},{"level":3,"title":"2.指针越界","slug":"_2-指针越界","link":"#_2-指针越界","children":[]}]},{"level":2,"title":"四.通过指针引用数组","slug":"四-通过指针引用数组","link":"#四-通过指针引用数组","children":[{"level":3,"title":"1.指向数组元素的指针","slug":"_1-指向数组元素的指针","link":"#_1-指向数组元素的指针","children":[]},{"level":3,"title":"2.通过指针引用数组元素","slug":"_2-通过指针引用数组元素","link":"#_2-通过指针引用数组元素","children":[]},{"level":3,"title":"3.用数组名作函数参数","slug":"_3-用数组名作函数参数","link":"#_3-用数组名作函数参数","children":[]},{"level":3,"title":"4.二维数组与指针（二维数组相当于二级指针）","slug":"_4-二维数组与指针-二维数组相当于二级指针","link":"#_4-二维数组与指针-二维数组相当于二级指针","children":[]}]},{"level":2,"title":"五.数组指针和指针数组","slug":"五-数组指针和指针数组","link":"#五-数组指针和指针数组","children":[{"level":3,"title":"1.数组指针","slug":"_1-数组指针","link":"#_1-数组指针","children":[]},{"level":3,"title":"2.指针数组","slug":"_2-指针数组","link":"#_2-指针数组","children":[]},{"level":3,"title":"3.区别","slug":"_3-区别","link":"#_3-区别","children":[]}]},{"level":2,"title":"六.字符指针（char*）","slug":"六-字符指针-char","link":"#六-字符指针-char","children":[{"level":3,"title":"1.字符指针一般使用","slug":"_1-字符指针一般使用","link":"#_1-字符指针一般使用","children":[]},{"level":3,"title":"2.字数数组与字符指针变量的区别","slug":"_2-字数数组与字符指针变量的区别","link":"#_2-字数数组与字符指针变量的区别","children":[]}]},{"level":2,"title":"七.指向函数的指针（一个指针）","slug":"七-指向函数的指针-一个指针","link":"#七-指向函数的指针-一个指针","children":[{"level":3,"title":"1.定义指向函数的指针变量","slug":"_1-定义指向函数的指针变量","link":"#_1-定义指向函数的指针变量","children":[]},{"level":3,"title":"2.用函数指针变量调用函数","slug":"_2-用函数指针变量调用函数","link":"#_2-用函数指针变量调用函数","children":[]},{"level":3,"title":"2.用指向函数的指针作为函数的参数","slug":"_2-用指向函数的指针作为函数的参数","link":"#_2-用指向函数的指针作为函数的参数","children":[]}]},{"level":2,"title":"八.返回指针值的函数（一个函数）","slug":"八-返回指针值的函数-一个函数","link":"#八-返回指针值的函数-一个函数","children":[{"level":3,"title":"一般形式：类型名 *函数名(参数列表)","slug":"一般形式-类型名-函数名-参数列表","link":"#一般形式-类型名-函数名-参数列表","children":[]}]}],"git":{"updatedTime":1772378218000,"contributors":[{"name":"lijunxi","username":"lijunxi","email":"2770063826@qq.com","commits":2,"url":"https://github.com/lijunxi"}],"changelog":[{"hash":"9f2e2eae9bf1528af2a053782edcdc5a1967682a","time":1772378218000,"email":"2770063826@qq.com","author":"lijunxi","message":"add vuepress"},{"hash":"c0e7c2d63343d3254f23fa31134bceb4e00c3331","time":1751790745000,"email":"2770063826@qq.com","author":"lijunxi","message":"add algorithm、school"}]},"filePathRelative":"学校习题/C语言指针.md"}');export{c as comp,u as data};
