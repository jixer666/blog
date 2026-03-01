<template><div><h1 id="c语言错题集" tabindex="-1"><a class="header-anchor" href="#c语言错题集"><span>C语言错题集</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>记不清了</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<ul>
<li>
<p>以数字0开头（不是字母o）的为八进制，其后只能出现数字0-7</p>
</li>
<li>
<p>以0x开头的为16进制，其后只能出现0-9或者abcdef（大写也可）</p>
</li>
<li>
<p>字符串常量：1.普通字符 2.转义字符 3. \ + ascall码 （\0dd（八进制）,\xhh（十六进制））</p>
</li>
<li>
<p>\+字母：控制字符； \+1~3个八进制数：ascll该八进制数的字符 ；\x+1~2个十六进制数：ascll为该十六进制数的字符</p>
</li>
<li>
<p>实型常数：2E0 （E前面必须有数:+5,-5,5,05,5.都行；E后面必须是整数(正负0都行):+5,-5,5）</p>
</li>
<li>
<p>char a[] = &quot;123&quot; 和 char a[] = {'a','b','c'} sizeof不同，strlen相同</p>
</li>
<li>
<p>EOF是作为文本文件的结束标志，其值为-1</p>
</li>
<li>
<p>反斜杠后的16进制数只可以由小写字母x开头，不允许大写字母x，也不允许用ox开头</p>
</li>
<li>
<p>auto:自动变量,会自动分配空间,但不是自动赋值0；static:函数结束存储单元不会释放</p>
</li>
<li>
<p>static:静态局部变量 ； register:寄存器变量,强制保留在CPU,该变量不能用&amp;</p>
</li>
<li>
<p>strcpy(1,2)和strcat(1,2)需要保证1足够大能容纳2</p>
</li>
<li>
<p>空指针不能改变其值</p>
</li>
<li>
<p>pi=pj=(short *)malloc(2); pi和pj同时指向同一空间</p>
</li>
<li>
<p>printf输出的数据都是隐含右对齐</p>
</li>
<li>
<p>printf输出的数据实际精度是由格式控制的小数的领宽来完全决定的</p>
</li>
<li>
<p>C语言虽然不限制标识符的长度,但是它受到不同编译器的限制,同时也受到操作系统的限制</p>
</li>
<li>
<p>switch( xx ); 必须要有() 和 ;</p>
</li>
<li>
<p>gets()能接受空格,scanf()不能识别空格，制表符，回车符</p>
</li>
<li>
<p>实参和形参在不同的存储单元</p>
</li>
<li>
<p>结构体能相互赋值（每个成员都变）,数组不能</p>
</li>
<li>
<p>c语言算法可以没有输入但你必须要有输出</p>
</li>
<li>
<p>全局变量的作用域：定义变量开始到本源文件结束（由具体位置和extern说明来决定）</p>
</li>
<li>
<p>函数不写类型名默认为int</p>
</li>
<li>
<p>exit(0) 是退出整个进程，不论在哪里调用，都会退出当前进程</p>
</li>
<li>
<p>typedef是声明新的类型名代替已有的类型名，并不是添加新的类型</p>
</li>
<li>
<p>构成C程序的基本单位是函数</p>
</li>
</ul>
<h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算"><span>位运算</span></a></h2>
<p>~：按位取反</p>
<p>&amp;：有0则0，无0则1</p>
<p>|：有1则1，无1则0</p>
<p>^：相同为0，相异为1</p>
<p>&lt;&lt;：左移x位，原数乘以2的x方</p>
<p>&gt;&gt;：右移x位，原数除以2的x方</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">变量a中的数据用二进制表示的形式是01011101，变量b中的数据用二进制表示的形式是111100。若要求将a的高4位取反，低4位不变，所要执行的运算是</span>
<span class="line">A.a^b</span>
<span class="line">B.a/b</span>
<span class="line">C.a&amp;b</span>
<span class="line">D.a&lt;&lt;4</span>
<span class="line">我的答案：D 正确答案：A</span>
<span class="line"></span>
<span class="line">//  ^：相同为0，相异为1</span>
<span class="line">01011101</span>
<span class="line">11110000</span>
<span class="line">10101101</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针"><span>指针</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">#include &lt;string.h></span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">char str[][10]= { "One" , "Three" , "Five"}, *p = str[0];</span>
<span class="line">printf( "%s," , p+10 );</span>
<span class="line">printf( "%d\n" ,strlen(p+=10) );</span>
<span class="line">}</span>
<span class="line">执行后的输出结果是______。</span>
<span class="line">}    //p+10为数组第二行首地址</span>
<span class="line">A. 出错   </span>
<span class="line">B. Three,5</span>
<span class="line">C. Three,4</span>
<span class="line">D. Five,5</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">int *f(int *s, int *t)</span>
<span class="line">{</span>
<span class="line">int *k;</span>
<span class="line">if (*s&lt;*t) {</span>
<span class="line">k = s;</span>
<span class="line">s=t;</span>
<span class="line">t=k;</span>
<span class="line">}</span>
<span class="line">return s;</span>
<span class="line">}</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int i=3, j=5, *p=&amp;i, *q=&amp;j, *r;</span>
<span class="line">r=f(p,q);</span>
<span class="line">printf("%d,%d,%d,%d,%d\n", i, j, *p, *q, *r);</span>
<span class="line">}</span>
<span class="line">则程序的输出结果是______。</span>
<span class="line">A. 3,5,3,5,5</span>
<span class="line">B. 3,5,5,3,5</span>
<span class="line">C. 5,3,5,3,5</span>
<span class="line">D. 5,3,3,5,5</span>
<span class="line">我的答案: B正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">void fun( int *p, int *q )</span>
<span class="line">{</span>
<span class="line">int t;</span>
<span class="line">t = *p;   //*t:0</span>
<span class="line">*p = *q;   //*p:9</span>
<span class="line">*q=t;   //*q:0</span>
<span class="line">*q = *p;   //*q:9</span>
<span class="line">}   //*p,*q:9,9</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int a=0, b=9;</span>
<span class="line">fun ( &amp;a, &amp;b );</span>
<span class="line">printf( "%d %d\n" , a,b );</span>
<span class="line">}</span>
<span class="line">程序的输出结果是______。</span>
<span class="line">A. 0 0</span>
<span class="line">B. 9 9</span>
<span class="line">C. 9 0</span>
<span class="line">D. 0 9</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">int k=5;</span>
<span class="line">void f(int *s)</span>
<span class="line">{</span>
<span class="line">s=&amp;k;</span>
<span class="line">}</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int m=3,*p=&amp;m;</span>
<span class="line">f(p);</span>
<span class="line">printf("%d,%d\n", m, *p);</span>
<span class="line">}</span>
<span class="line">程序的运行结果是______。</span>
<span class="line">A. 3,3</span>
<span class="line">B. 5,5</span>
<span class="line">C. 3,5</span>
<span class="line">D. 5,3</span>
<span class="line">我的答案: C正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">int change(int* data)</span>
<span class="line">{</span>
<span class="line">return (*data)++;</span>
<span class="line">}</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int data = 123;</span>
<span class="line">change(&amp;data);</span>
<span class="line">printf("%d,", data);</span>
<span class="line">data = change(&amp;data);</span>
<span class="line">printf("%d,", data);</span>
<span class="line">printf("\n");</span>
<span class="line">}</span>
<span class="line">程序运行后的输出结果是______。</span>
<span class="line">A. 123,123,</span>
<span class="line">B. 123,124,</span>
<span class="line">C. 124,123,</span>
<span class="line">D. 124,124,</span>
<span class="line">我的答案: B正确答案: D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">int *f(int *s,int *t)</span>
<span class="line">{</span>
<span class="line">if (*s &lt; *t) s=t; //指针指向改变,目标元素值没变</span>
<span class="line">return s;</span>
<span class="line">}</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int i=3, j=5, *p=&amp;i, *q=&amp;j, *r;</span>
<span class="line">r=f(p,q);</span>
<span class="line">printf("%d,%d,%d,%d,%d\n", i, j, *p, *q, *r);</span>
<span class="line">}</span>
<span class="line">程序的运行结果是______。</span>
<span class="line">A. 3,5,3,5,5</span>
<span class="line">B. 3,5,5,5,5</span>
<span class="line">C. 5,3,3,3,5</span>
<span class="line">D. 5,5,5,5,5</span>
<span class="line">我的答案: B正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有以下程序#include&lt;stdio.h></span>
<span class="line">void fun(int *a,int *b)</span>
<span class="line">{int *c;</span>
<span class="line">c=a;a=b;b=c;</span>
<span class="line">}</span>
<span class="line">main()</span>
<span class="line">{int x=3,y=5,*p=&amp;x,*q=&amp;y;</span>
<span class="line">fun(p,q);</span>
<span class="line">printf("%d,%d,",*p,*q);</span>
<span class="line">fun(&amp;x,&amp;y);</span>
<span class="line">printf("%d,%d",*p,*q);}</span>
<span class="line">程序运行后的输出结果是</span>
<span class="line">A.3,5,5,3</span>
<span class="line">B.3,5,3,5</span>
<span class="line">C.5,3,3,5</span>
<span class="line">D.5,3,5,3</span>
<span class="line"></span>
<span class="line">我的答案：D  正确答案：B</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">此题改一下后就不一样</span>
<span class="line">void fun(int *a,int *b)</span>
<span class="line">{int c;</span>
<span class="line">c=＊a;＊a=＊b;＊b=c;</span>
<span class="line">}</span>
<span class="line">main()</span>
<span class="line">{int x=3,y=5,*p=&amp;x,*q=&amp;y;</span>
<span class="line">fun(p,q);</span>
<span class="line">printf("%d,%d,",*p,*q);</span>
<span class="line">fun(&amp;x,&amp;y);</span>
<span class="line">printf("%d,%d",*p,*q);</span>
<span class="line">}</span>
<span class="line">答案：5，3，3，5</span>
<span class="line"></span>
<span class="line">//个人理解：函数会单独开一个空间指向该地址，地址变化也只在该开辟空间的地址上改变，并不会影响到原地址，但是如果是*地址的话就会改变，因为*地址的话会直接根据开辟的空间地址找到main函数中的地址再找到目标元素，从而实现改变。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若有一些定义和语句</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">int a=4,b=3,*p,*q,*w;</span>
<span class="line">p=&amp;a;q=&amp;b;w=q;q=NULL;</span>
<span class="line">则以下选项中错误的语句是_____。</span>
<span class="line">A.*q=0;</span>
<span class="line">B.w=p;</span>
<span class="line">C.*p=va;</span>
<span class="line">D.*p=*w;</span>
<span class="line">我的答案：C  标准答案：A</span>
<span class="line"></span>
<span class="line">//由于指针变量q赋值为NULL，即空地址，如果给空地址所指向的存储空间赋值的话，系统会出错，提示为:Null point assignment!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)已有定义:char a[]="xyz",b[]={'x','y','z'};,以下叙述中正确的是______。</span>
<span class="line">A. 数组a和</span>
<span class="line">B. 的长度相同</span>
<span class="line">B、 a数组长度小于b数组长度</span>
<span class="line">C. a数组长度大于b数组长度</span>
<span class="line">D. 上述说法都不对</span>
<span class="line">我的答案: D正确答案: C</span>
<span class="line"></span>
<span class="line">//数组 a 的长度为 4，其内容为 'x'、'y'、'z'、'\0'，其中 '\0' 是字符串结束标志。</span>
<span class="line">//数组 b 的长度为 3，内容为 'x'、'y'、'z'。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)以下叙述正确的是______。</span>
<span class="line">A. char c1, *c2, **c3, c4[2]; 是C语言的合法语句</span>
<span class="line">B. 不能在数组说明符的一对方括号中使用表达式</span>
<span class="line">C. 数组下标的最小值可以是负值</span>
<span class="line">D. 若有数组定义 int array[5]; 则语句 printf("%d", array[1.23]);是合法的</span>
<span class="line">我的答案: C正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)设有如下程序段</span>
<span class="line">int a[8] = {0};</span>
<span class="line">int b[] = {0};</span>
<span class="line">char c[2] = {"A", "B"};</span>
<span class="line">char d = "AB";</span>
<span class="line">以下叙述正确的是______。</span>
<span class="line">A.只有变量c的定义是合法的</span>
<span class="line">B.所有变量的定义都是完全合法的</span>
<span class="line">C.只有变量a,b,c的定义是完全合法的</span>
<span class="line">D.只有变量a, b的定义是完全合法的</span>
<span class="line">我的答案: B正确答案: D</span>
<span class="line"></span>
<span class="line">//这题出的时候有问题，我改了下</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)以下能正确定义一维数组的选项是______。</span>
<span class="line">A. int a[5]={0,1,2,3,4,5};</span>
<span class="line">B. char a[]={0,1,2,3,4,5};</span>
<span class="line">C. char a={'A','B','C'};</span>
<span class="line">D. int a[5]="0123";</span>
<span class="line">我的答案: A正确答案: B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)假定int类型变量占用两个字节,若有定义:int x[10]={0,2,4};,则数组x在内存中所占字节数是______。</span>
<span class="line">A. 3</span>
<span class="line">B. 6</span>
<span class="line">C. 10</span>
<span class="line">D. 20  //定义多少算多少</span>
<span class="line">我的答案: B正确答案: D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)以下叙述中错误的是______。</span>
<span class="line">A. 对于double类型数组,不可以直接用数组名对数组进行整体输入或输出</span>
<span class="line">B. 数组名代表的是数组所占存储区的首地址,其值不可改变</span>
<span class="line">C. 当程序执行中,数组元素的下标超出所定义的下标范围时,系统将给出"下标越界"的出错信息</span>
<span class="line">D. 可以通过赋初值的方式确定数组元素的个数</span>
<span class="line">我的答案: A正确答案: C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)若有定义:a[]={1,2,3,4,5,6,7,8,9,10};,则a[a[5]-a[7]/a[1]]的值是______。</span>
<span class="line">A. 4</span>
<span class="line">B. 3</span>
<span class="line">C. 2</span>
<span class="line">D. 10</span>
<span class="line">我的答案: D正确答案: B</span>
<span class="line"></span>
<span class="line">//a[6-8/2] = 3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)若有以下定义:int t[3][2];能正确表示t数组元素地址的表达式是______。</span>
<span class="line">A. t[3][2] //元素</span>
<span class="line">B. t[3] //越界</span>
<span class="line">C. t[1]</span>
<span class="line">D. *t[2] //值</span>
<span class="line">我的答案: D正确答案: C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)函数FindMin的形参a所指数组中只存放正整数,函数的功能是查找数组中最小值,并作为函数值返回</span>
<span class="line">#define MAX 2147483647</span>
<span class="line">int FindMin(int a[],int n)</span>
<span class="line">{</span>
<span class="line">int i, min;</span>
<span class="line">min=______;</span>
<span class="line">for(i=n-1; i>=0; i--)</span>
<span class="line">if(min>a[i])</span>
<span class="line">min=a[i];</span>
<span class="line">return min;</span>
<span class="line">}</span>
<span class="line">程序中下划线处是给变量min赋初值,以下选项中错误的是______。</span>
<span class="line">A. 0</span>
<span class="line">B. MAX</span>
<span class="line">C. a[0]</span>
<span class="line">D. a[n-1]</span>
<span class="line">我的答案: B正确答案: A</span>
<span class="line"></span>
<span class="line">//题看错了选了就跑0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前五章基础题" tabindex="-1"><a class="header-anchor" href="#前五章基础题"><span>前五章基础题</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">int i,a;</span>
<span class="line">i = (a=(a=(a=2*3,a*5),a+6),a+7);</span>
<span class="line">printf("%d %d",i,a);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">答案：43 36</span>
<span class="line"></span>
<span class="line">//1. a = 3*2 =6  </span>
<span class="line">//2. a*5 = 30</span>
<span class="line">//3. a = 30</span>
<span class="line">//4. a = a+6 = 36</span>
<span class="line">//5. a = 36</span>
<span class="line">//6. a+7 = 43</span>
<span class="line">//7. i = 43</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include &lt;stdio.h></span>
<span class="line">int main()</span>
<span class="line">{</span>
<span class="line">int i,a;</span>
<span class="line">i = ((a=2*3,a*5),a+6),a+7;</span>
<span class="line">printf("%d %d",i,a);</span>
<span class="line">}</span>
<span class="line">答案：12 6</span>
<span class="line"></span>
<span class="line">//与上题类似,逗号表达式从左到右依次来计算</span>
<span class="line">//注意等号左边是否有赋值语句</span>
<span class="line">//1. a = 3*2 =6  </span>
<span class="line">//2. a*5 = 30</span>
<span class="line">//3. a+6 = 12</span>
<span class="line">//4. i = 12</span>
<span class="line">//5. a+7 = 13</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">设有以下程序段,执行后的输出结果是_____。</span>
<span class="line">int x=100,y=200;</span>
<span class="line">printf("%d",(x,y));</span>
<span class="line">A. 100</span>
<span class="line">B. 200</span>
<span class="line">C. 100,200</span>
<span class="line">D. 编译出错</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">执行语句printf("The program's name is c:\\tools\book.txt");后的输出是______。</span>
<span class="line">A. The program's name is c:tools</span>
<span class="line">B. The program's name is</span>
<span class="line">C. \tools\book.txt</span>
<span class="line"></span>
<span class="line">C、 The program's name is c:\\tool</span>
<span class="line">D. The program's name is c:\toolook.txt</span>
<span class="line">我的答案: D正确答案: D</span>
<span class="line"></span>
<span class="line">//  \b为退格符:一格</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">int a = 1;</span>
<span class="line">printf("%d %d %d",a,a++,++a);   //3 2 3</span>
<span class="line"></span>
<span class="line">//printf从右往左入栈，但是输出的顺序为：x或++x只改变x的值最后才输出，x++确定此位置的输出并立刻输出。指针：最后的*x和*++x并不是此时的*x的值，不会发生改变；其他：x最后计算完后，x和++x位置的值都是此时x的值</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">设a,b,c,d均是int类型变量,为了使以下程序段的输出为:1234+123+12+1,正确的输入形式应当是______。</span>
<span class="line">scanf("%4d+%3d+%2d+%1d",&amp;a,&amp;b,&amp;c,&amp;d);</span>
<span class="line">printf("%4d+%3d+%2d+%1d",a,b,c,d);</span>
<span class="line">A. 1234123121&lt;回车></span>
<span class="line">B. 1234123412341234&lt;回车></span>
<span class="line">C. 1234+1234+1234+1234&lt;回车></span>
<span class="line">D. 1234+123+12+1&lt;回车></span>
<span class="line">我的答案: A正确答案: D</span>
<span class="line"></span>
<span class="line">//这题傻逼了0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">main()</span>
<span class="line">{ int al,a2; char cl,c2;</span>
<span class="line">scanf(“%d%c%d%c”,&amp;a1,&amp;cl,&amp;a2,&amp;c2);</span>
<span class="line">printf(“%d, %c,%d, %c”,a1,c1,a2, c2);</span>
<span class="line">}</span>
<span class="line">若想通过键盘输入,使得a1的值为12,a2的值为34,c1的值为字符a,c2的值为字符b,程序输出的结果是:12,a,34,b 则正确的输入格式是(以下~代表空格,&lt;CR>代表回车)</span>
<span class="line">A. 12a34b</span>
<span class="line">B. 12~a~34~b</span>
<span class="line">C. 12,a,34,b</span>
<span class="line">D. 12~a34~b</span>
<span class="line">我的答案: C正确答案: A</span>
<span class="line"></span>
<span class="line">//有煞笔了0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">根据定义和数据的输入方式,输入语句的正确形式为______。</span>
<span class="line">已有定义:float f1,f2;</span>
<span class="line">数据的输入方式:4.52&lt;CR></span>
<span class="line">3.5&lt;CR></span>
<span class="line">A. scanf("%f,%f",&amp;f1,&amp;f2);</span>
<span class="line">B. scanf("%f%f",&amp;f1,&amp;f2);</span>
<span class="line">C. scanf("%3.2f%2.1f",&amp;f1,&amp;f2);</span>
<span class="line">D. scanf("%3.2f,%2.1f",&amp;f1,&amp;f2);</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span>
<span class="line">//  &lt;CR>：回车键</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">已知int a,b;用语句scanf("%d%d",&amp;a,&amp;b);输入a,b的值,不能作为输入数据分隔符的是______。</span>
<span class="line">A. ,</span>
<span class="line">B. 空格</span>
<span class="line">C. 回车</span>
<span class="line">D. [tab]</span>
<span class="line">我的答案: D正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若有以下类型说明语句:char a; int b;float c; double d; 则表达式a*b-2*d+c的结果类型为_______。</span>
<span class="line">A. float</span>
<span class="line">B. char</span>
<span class="line">C. int</span>
<span class="line">D. double</span>
<span class="line">我的答案: A正确答案: D</span>
<span class="line"></span>
<span class="line">//隐式类型转换</span>
<span class="line">1、为防止精度损失，如果必要的话，类型总是被提升为较宽的类型。</span>
<span class="line">2、所有含有小于整形的有序类型的算术表达式在计算之前其类型都会被转换成整形。</span>
<span class="line">double + float = double</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">将字符g赋给字符变量c,正确的表达式是_______。</span>
<span class="line">A. c="g"</span>
<span class="line">B. c=101</span>
<span class="line">C. c='\147'</span>
<span class="line">D. c='0147'</span>
<span class="line">我的答案: B正确答案: C</span>
<span class="line"></span>
<span class="line">//a的ascall值97</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若有变量说明:int a=0,b=0,c=0;,以下符合C语言语法的赋值表达式是_______。</span>
<span class="line">A. a=9+b+c=a+9</span>
<span class="line">B. a=9+b;</span>
<span class="line">C. a=(9+b,b++)</span>
<span class="line">D. a=9+b++=a+7</span>
<span class="line">我的答案: B正确答案: C</span>
<span class="line"></span>
<span class="line">//a，d表达式不能是左值，9+b+c和9+b++是一个表达式不能在左边</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">下面四个选项中,均是C语言关键字的选项是_______。</span>
<span class="line">A. auto enum include</span>
<span class="line">B. switch typedef continue</span>
<span class="line">C. signed union scanf</span>
<span class="line">D. if struct type</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span>
<span class="line">//关键字：void signed unsigned　short　long　int　float　double　char　enum　struct　union　typedef const　 volatile auto　static　extern　register sizeof　goto　return　break　continue　if　else　switch　case　default　do　while　for</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">下列四组选项中,均是不合法的用户标识符的选项是_______。</span>
<span class="line">A. A P_0 do</span>
<span class="line">B. float goto _A</span>
<span class="line">C. b-a goto int</span>
<span class="line">D. _123 temp INT</span>
<span class="line">我的答案: C正确答案: C</span>
<span class="line"></span>
<span class="line">//c语言表示符</span>
<span class="line">C 标识符是用来标识变量、函数，或任何其他用户自定义项目的名称</span>
<span class="line">一个标识符以字母 A-Z 或 a-z 或下划线 _ 开始，后跟零个或多个字母、下划线和数字（0-9）</span>
<span class="line">C 标识符内不允许出现标点字符，比如 @、$ 和 % -</span>
<span class="line">C 是区分大小写的编程语言。因此，在 C 中，a 和 A 是两个不同的标识符</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">在C语言中,数字029是一个_______。</span>
<span class="line">A. 八进制数</span>
<span class="line">B. 十六进制数</span>
<span class="line">C. 十进制数</span>
<span class="line">D. 非法数</span>
<span class="line">我的答案: A正确答案: D</span>
<span class="line"></span>
<span class="line">//见上面总结</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">合法的c语言字符常量是_____。</span>
<span class="line">A. "T"</span>
<span class="line">B. 39</span>
<span class="line">C. T</span>
<span class="line">D. '\n'   //转义字符</span>
<span class="line">我的答案: B正确答案: D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">下面正确的字符常量是______。</span>
<span class="line">A. '\X17'</span>
<span class="line">B. '\80'</span>
<span class="line">C. '\\'</span>
<span class="line">D. "\n"</span>
<span class="line">我的答案: B正确答案: C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">下列程序的输出为______。</span>
<span class="line">#include&lt;stdio.h></span>
<span class="line">void main()</span>
<span class="line">{ int m=13;</span>
<span class="line">float a=12.6, x;</span>
<span class="line">x=m/2+a/2;</span>
<span class="line">printf(“%f\n”, x);</span>
<span class="line">}</span>
<span class="line">A. 12.000000</span>
<span class="line">B. 12.300000</span>
<span class="line">C. 12.800000</span>
<span class="line">D. 12.3</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span>
<span class="line">//6 + 6.300000 = 12.300000</span>
<span class="line">//整数整除为整数，浮点整除为浮点</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若以下变量均是整型,且num=sum=7;则计算表达式sum=num++, sum++, ++num后的sum值为 ________。</span>
<span class="line">A. 7</span>
<span class="line">B. 8</span>
<span class="line">C. 9</span>
<span class="line">D. 10</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span>
<span class="line">// sum:8,num:9</span>
<span class="line">// sum++表示整个语句结束后自增1</span>
<span class="line">// ++sum表示先自增1再将这个值代入语句进行接下来的运算</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">假设所有变量均为整型,则表达式(a=2,b=5,b++,a+b)的值是 ________。</span>
<span class="line">A. 7</span>
<span class="line">B. 8</span>
<span class="line">C. 6</span>
<span class="line">D. 2</span>
<span class="line">我的答案: B正确答案: B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">设c1. c2均是char类型变量,则以下不正确的函数调用为______。</span>
<span class="line">A. scanf("%c",c1)</span>
<span class="line">B. getchar(c2)</span>
<span class="line">C. putchar(c2)</span>
<span class="line">D. putchar(c1,c2)</span>
<span class="line">我的答案: A 正确答案: AD</span>
<span class="line"></span>
<span class="line">//puchar()只能是一个</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">设ch是char类型变量,其值是A,则表达式ch=(ch>='A'&amp;&amp;ch&lt;='Z')?(ch+32):ch的值是_______。</span>
<span class="line">A. Z</span>
<span class="line">B. A</span>
<span class="line">C. a</span>
<span class="line">D. z</span>
<span class="line">我的答案: A正确答案: C</span>
<span class="line"></span>
<span class="line">// ch+25 == 'Z'</span>
<span class="line">// ch+36 变小写</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若i和k都是int类型变量，有以下for语句for(i=O;k=-1;k=1;k+t) printf("*****\n");</span>
<span class="line">下面关于语句执行情况的叙述中正确的是___。</span>
<span class="line">A.循环体执行两次</span>
<span class="line">B.循环体执行一次</span>
<span class="line">C.循环体一次也不执行</span>
<span class="line">D.构成无限循环</span>
<span class="line"></span>
<span class="line">我的答案: C正确答案: D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下合法的转义字符是__。</span>
<span class="line">A.'\x41'</span>
<span class="line">B.'\0x41'</span>
<span class="line">C.'\X41'</span>
<span class="line">D.‘\0X41'</span>
<span class="line">我的答案：B  标准答案:A</span>
<span class="line"></span>
<span class="line">//转义字符，反斜杠后的十六进制数只可以由小写字母x开头，不允许大写字母x，也不允许用ox开头</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若有定义语句:int a=3,b=2,c=1;，以下选项中错误的赋值表达式是_。</span>
<span class="line">A.a=(b=4)=3;</span>
<span class="line"></span>
<span class="line">B.a=b=c+1;</span>
<span class="line">C.a=(b=4)+c;</span>
<span class="line">D.a=1+(b=c=4);</span>
<span class="line">我的答案：D 标准答案:A</span>
<span class="line"></span>
<span class="line">//表达式的形式为:变量名=表达式，赋值号的左边必须是一个代表某一存储单元的变量名，由于选项A相当于a=(b=4)和(b=4)=3两个健值表达式，且由于(b=4)=3运算符左边b=4不是变量，而是表达式，所以选项A不正确.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">float fun(int x,int y) {</span>
<span class="line">	return x+y; </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	int a=2,b=5,c=8;</span>
<span class="line">	printf("%3.0f",fun((int)fun(a+c,b),a-c));</span>
<span class="line">	</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//答案：9</span>
<span class="line">//注意：%3.0与%3的区别，%3.0没有有小数</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有如下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">mai(){</span>
<span class="line">int a=0, b=1;</span>
<span class="line">if(a++&amp;&amp; b++)printf("T");</span>
<span class="line">else printf(""F");</span>
<span class="line">printf(" a=%d,b=%dn", a, b);}</span>
<span class="line">程序运行后的输出结果是__。</span>
<span class="line">A.Ta=0,b=1</span>
<span class="line">B.Fa=0,b=2</span>
<span class="line">C.Ta=1,b=2</span>
<span class="line">D.Fa=1,b=1</span>
<span class="line">我的答案：C 正确答案：D</span>
<span class="line">//a++ &amp; b+-语句中，若是&amp;&amp;左边的表达式为假，则不必执行&amp;a右边的表达式，a++是先取值，后自加，取的值为b0，整个表达式为假，执行printf("F")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有下列程序</span>
<span class="line">#include &lt;stdio.h>main(){</span>
<span class="line">int a=0,b=0,c=0;</span>
<span class="line">if(++a || ++b &amp;&amp; ++c)</span>
<span class="line">printf ("%d,%d,%d",a,b,c);</span>
<span class="line">}</span>
<span class="line">程序执行后的输出结果是___。</span>
<span class="line">A.1,0,0</span>
<span class="line">B.1,1,1</span>
<span class="line">C.0,1,1</span>
<span class="line">D.1,1,0</span>
<span class="line">我的答案：B 正确答案：A</span>
<span class="line"></span>
<span class="line">//++a是先自增再执行表达式，执行表达式时使用的是自增后的，所以a的值为1。逻辑运算符或(||)左侧的表达式已经为真，所以右侧表达式不运行，b和c的值都为0。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">#define PT 3.5;</span>
<span class="line">#define S(x) PT*x*x;</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int a=1,b=2;</span>
<span class="line">printf("%4.1f\n",S(a+b));</span>
<span class="line">}</span>
<span class="line">程序运行后的输出结果是______。</span>
<span class="line">A. 14.0</span>
<span class="line">B. 31.5</span>
<span class="line">C. 7.5</span>
<span class="line">D. 程序有错无输出结果</span>
<span class="line">我的答案: C正确答案: D</span>
<span class="line"></span>
<span class="line">// #define PT 3.5;  没有;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">#define SUB(a)(a)-(a)</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int a=2,b=3,c=5,d;</span>
<span class="line">d=SUB(a+b)*c;</span>
<span class="line">printf("%d\n",d);</span>
<span class="line">}</span>
<span class="line">程序运行后的输出结果是______。</span>
<span class="line">A. 0</span>
<span class="line">B. -12</span>
<span class="line">C. -20</span>
<span class="line">D. 10</span>
<span class="line">我的答案: A正确答案: C</span>
<span class="line"></span>
<span class="line">//(2+3)-(2+3)*5 = -20</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)有如下程序</span>
<span class="line">#define N 2</span>
<span class="line">#define M N+1</span>
<span class="line">#define NUM 2*M+1</span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int i;</span>
<span class="line">for(i=1;i&lt;=NUM;i++)</span>
<span class="line">printf("%d\n",i);</span>
<span class="line">}</span>
<span class="line">该程序中的for循环执行的次数是______。</span>
<span class="line">A. 5</span>
<span class="line">B. 6</span>
<span class="line">C. 7</span>
<span class="line">D. 8</span>
<span class="line">我的答案: B正确答案: B</span>
<span class="line"></span>
<span class="line">// num:2*2+1+1 = 6</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)以下关于宏的叙述中正确的是______。</span>
<span class="line">A. 宏名必须用大写字母表示</span>
<span class="line">B. 宏定义必须位于源程序中所有语句之前</span>
<span class="line">C. 宏替换没有数据类型限制</span>
<span class="line">D. 宏调用比函数调用耗费时间</span>
<span class="line">我的答案: C正确答案: C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)下面选项中关于编译预处理的叙述正确的是______。</span>
<span class="line">A. 凡是以#号开头的行,都被称为编译预处理命令行</span>
<span class="line">B. 预处理命令行必须使用分号结尾</span>
<span class="line">C. 预处理命令行不能出现在程序的最后一行</span>
<span class="line">D. 预处理命令行的作用域是到最近的函数结束处</span>
<span class="line">我的答案: C正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sizeof(double)是______。</span>
<span class="line">A. 一个双精度型表达式</span>
<span class="line">B. 一个整型表达式</span>
<span class="line">C. 一个不合法的表达式</span>
<span class="line">D. 一种函数调用</span>
<span class="line">我的答案: D正确答案: B</span>
<span class="line"></span>
<span class="line">//sizeof(double)是指求double类型数据的数据长度,是个整数</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">main()</span>
<span class="line">{ char a[20],b[20],c[20];</span>
<span class="line">scanf("%s%s",a,b);</span>
<span class="line">gets(c);</span>
<span class="line">printf("%s%s%s\n",a,b,c);}</span>
<span class="line">程序运行时从第一列开始输入:This is a cat!&lt;回车></span>
<span class="line">则输出结果是</span>
<span class="line">A.Thisisacat!</span>
<span class="line">B.Thisis a</span>
<span class="line">C.Thisis a cat!</span>
<span class="line">D.Thisisa cat!</span>
<span class="line">我的答案：D 正确答案：C</span>
<span class="line"></span>
<span class="line">//空格留在缓存区了gets后被输入</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下选项中，与n=i++完全等价的表达式是</span>
<span class="line">A.n=i,i=i+1</span>
<span class="line">B.n+=i+1</span>
<span class="line">C.i=i+1,n=i</span>
<span class="line">D.n=++i</span>
<span class="line">我的答案：C 正确答案：A</span>
<span class="line"></span>
<span class="line">//先参与计算再相加</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">#include &lt;string.h></span>
<span class="line">main()</span>
<span class="line">{ char x[]="STRING";</span>
<span class="line">x[0]=0; x[1]='\O'’;x[2]=0;</span>
<span class="line">printf("%d %d\n",sizeof(x),strlen(x));}</span>
<span class="line">程序运行后的输出结果是</span>
<span class="line">A.6 1</span>
<span class="line">B.7 0</span>
<span class="line">c.6 3</span>
<span class="line">D.7 1</span>
<span class="line">我的答案：D 正确答案：B</span>
<span class="line"></span>
<span class="line">//'\0'的ascall值为0，所以第一个元素就是结束符0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下程序段的输出结果是:</span>
<span class="line">char s[]="\\141\141abc\t";</span>
<span class="line">printf("%d\n",strlen(s));</span>
<span class="line">A.9</span>
<span class="line">B.12</span>
<span class="line">C.13</span>
<span class="line">D.14</span>
<span class="line">我的答案：B 正确答案：A</span>
<span class="line"></span>
<span class="line">//  \\ 1 4 1 \141 a b c \t 共9个</span>
<span class="line">\+字母：控制字符</span>
<span class="line">\+1~3个八进制数：ascll该八进制数的字符</span>
<span class="line">\x+1~2个十六进制数：ascll为改十六进制数的字符</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体"><span>结构体</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)若有下面的说明和定义,则sizeof(struct aa)的值是______。</span>
<span class="line">struct aa</span>
<span class="line">{ int r1;</span>
<span class="line">double r2;</span>
<span class="line">float r3;</span>
<span class="line">union uu</span>
<span class="line">{ char u1[5];</span>
<span class="line">long u2[2];</span>
<span class="line">}ua;</span>
<span class="line">}maya;</span>
<span class="line">A. 30</span>
<span class="line">B. 29</span>
<span class="line">C. 24</span>
<span class="line">D. 22</span>
<span class="line">我的答案: C正确答案: D</span>
<span class="line"></span>
<span class="line">//这题不会啊，</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下程序的输出结果是</span>
<span class="line">main()</span>
<span class="line">{union {</span>
<span class="line"> char i[2];int k;}r; </span>
<span class="line">r.i[0]=2;</span>
<span class="line">r.i[1]=0;</span>
<span class="line">printf("%d\n",r.k);}</span>
<span class="line">A.2</span>
<span class="line">B.1</span>
<span class="line">C.0</span>
<span class="line">D.不确定</span>
<span class="line">我的答案：D 正确答案：A</span>
<span class="line"></span>
<span class="line">//共用体共用一块存储空间，2的二进制:00000010,0的二进制就为0，最后的地址就为000000010，这题不明显，看下面</span>
<span class="line"></span>
<span class="line">main()</span>
<span class="line">{union {</span>
<span class="line"> char i[2];int k;}r; </span>
<span class="line">r.i[0]=1;</span>
<span class="line">r.i[1]=2;</span>
<span class="line">printf("%d\n",r.k);}  513</span>
<span class="line"></span>
<span class="line">//0000000100000010 前八位位1的二进制，后八位为2的二进制</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">main()</span>
<span class="line">{union {</span>
<span class="line"> char i[2];int k;}r; </span>
<span class="line">r.i[0]=2;</span>
<span class="line">r.i[1]=1;</span>
<span class="line">printf("%d\n",r.k);} 258</span>
<span class="line"></span>
<span class="line">//0000001000000001 前八位位2的二进制，后八位为1的二进制</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">int fun(int x[].int n)</span>
<span class="line">{static int sum=o, i;</span>
<span class="line">for(i=0;i&lt;n;i++) sum+=x[i];</span>
<span class="line">return sum;}</span>
<span class="line">main()</span>
<span class="line">int a[]={1.2,3,4,53,b[]={6,7,8,9}, s=O;</span>
<span class="line">s=fun(a,5)+fun(b,4);</span>
<span class="line">printf("%din".s);</span>
<span class="line">}</span>
<span class="line">程序执行后的输出结果是()</span>
<span class="line">A.55</span>
<span class="line">B.50</span>
<span class="line">C.45</span>
<span class="line">D.60</span>
<span class="line"></span>
<span class="line">我的答案：C 正确答案：D</span>
<span class="line"></span>
<span class="line">//static作用：在函数调用结束不会释放内存，支部会变为0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若有以下语句:</span>
<span class="line">typedef struct S</span>
<span class="line">{</span>
<span class="line">int g;</span>
<span class="line">char h;</span>
<span class="line">}T;</span>
<span class="line">以下叙述中正确的是______。</span>
<span class="line">A. 可用S定义结构体变量</span>
<span class="line">B. 可用T定义结构体变量</span>
<span class="line">C. S是struct类型的变量</span>
<span class="line">D. T是struct S类型的变量</span>
<span class="line">我的答案: C正确答案: B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">设有如下语句</span>
<span class="line">typedef struct Date{</span>
<span class="line">int year;</span>
<span class="line">int month;</span>
<span class="line">int day;}DATE;</span>
<span class="line">则以下叙述中错误的是()</span>
<span class="line">A.DATE是用户定义的结构体变量</span>
<span class="line">B.struct Date是用户定义的结构体类型</span>
<span class="line">C.DATE是用户说明的新结构体类型名</span>
<span class="line">D.struct是结构体类型的关键字</span>
<span class="line">我的答案：C 正确答案：A</span>
<span class="line"></span>
<span class="line">//struct 结构体名{成员列表}变量列表;</span>
<span class="line">typedef 类型名 标识符；</span>
<span class="line">#define N 10000 这里没有;</span>
<span class="line">此处DETA为该结构体的标识符,所以是结构体名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下结构体类型说明和变量定义中正确的是</span>
<span class="line">A.typedef struct</span>
<span class="line">{int ngchar c;} REC;REC t1,t2;</span>
<span class="line">B.struct REC{int n;char c;};REC t1,t2;</span>
<span class="line">C.typedef struct REC;</span>
<span class="line">{int n=O;char c= 'A';}t1,t2;</span>
<span class="line">D.struct</span>
<span class="line">{int n;char c;} REC; REC t1,t2;</span>
<span class="line">我的答案：B 正确答案：A</span>
<span class="line"></span>
<span class="line">//B：struct REC t1,t2;(少了struct)</span>
<span class="line">struct 结构体名{}变量名;</span>
<span class="line">struct {}变量名;</span>
<span class="line">struct 结构体名{}; struct 结构体名 变量名;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">关于函数返回值，正确的是（）</span>
<span class="line">A.函数不能没有返回值</span>
<span class="line">B.函数可以返回一个数组</span>
<span class="line">C.函数只能返回基本数据类型或指针</span>
<span class="line">D.函数可以返回整个结构体，即使结构体中有数组</span>
<span class="line">我的答案：C 正确答案：D</span>
<span class="line"></span>
<span class="line">//数组类型和函数类型不能做返回值</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下选项中叙述错误的是_</span>
<span class="line">A.C程序函数中定义的赋有初值的静态变量，每调用一次函数，赋一次初值</span>
<span class="line">B.在c程序的同一函数中，各复合语句内可以定义变量，其作用域仅限本复合语句内</span>
<span class="line">C.C程序函数中定义的自动变量，系统不自动赋确定的初值</span>
<span class="line">D.C程序函数的形参不可以说明为static型变量</span>
<span class="line">我的答案：D 正确答案：A</span>
<span class="line"></span>
<span class="line">//静态局部变量，对其只赋一次初值，以后每次调用函数对不再重新赋初值，而只是保留上次函数调用结束时的值。对anto变量来说，如果不赋初值则它的值是一个不确定的值。因此选项A错误。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">认下叙述中正确的是_</span>
<span class="line">A.全局变量的存储类别可以是静态类</span>
<span class="line">B.对于变量而言,"定义"和"说明"这两个词实际上是同一个意思</span>
<span class="line">C.在复合语句中不能定义变量</span>
<span class="line">D.函数的形式参数不属于局部变量</span>
<span class="line">我的答案：C 标准答案:A</span>
<span class="line"></span>
<span class="line">//A.全局变量是在所有作用域都可访问的变量，它可以是静态的</span>
<span class="line">//B.对于变量而言，"定义"是指给变量分配确定的存储单元。"说明"只是说明变量的性层在复合语句内部定义的变量称为局部变量</span>
<span class="line">//C.复合语句：类似与函数（许多语句组成）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">下列叙述中正确的是</span>
<span class="line">A.每一个c程序文件中都必须要有一个main()函数</span>
<span class="line">B.在C程序中main()函数的位置是固定的</span>
<span class="line">C.C程序中所有函数之间都可以相互调用，与函数所在位置无关</span>
<span class="line">D.在C程序的函数中不能定义另一个函数</span>
<span class="line">我的答案：A  正确答案：D</span>
<span class="line"></span>
<span class="line">//c程序文件中含有多个c程序，每个c程序必须要有main()函数，A错。</span>
<span class="line">//B：不是固定的  C:无法调用main()函数</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下叙述中正确的是</span>
<span class="line">A.构成c程序的基本单位是函数</span>
<span class="line">B.可以在一个函数中定义另一个函数</span>
<span class="line">C.main()函数必须放在其它函数之前</span>
<span class="line">D.所有被调用的函数一定要在调用之前进行定义</span>
<span class="line">我的答案：D 正确答案：A</span>
<span class="line"></span>
<span class="line">//D:若函数放在main函数之后则需要定义，否则不需要定义</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下叙述正确的是()</span>
<span class="line">A.表达式sizeof(FILE*)== sizeof(int*)的值为真</span>
<span class="line">B.文件指针的值是一个整数,它的值一定小于文件字节数</span>
<span class="line">C.文件指针的值是所指文件的当前读取位置</span>
<span class="line">D.使用fscanf函数可以向任意类型的文件中写入任意数量的字符</span>
<span class="line"></span>
<span class="line">我的答案：C 正确答案：A</span>
<span class="line">//文件指针实际上是指向一个结构体类型的指针，这个结构体包含有诸如:缓冲区的地址、在缓冲区中当前存取的字符的位置、对文件"读"还是"写"、是否出错，是否已经遇到文件结束标志等信息，并不是单单只是所指向文件位置，而是指向的一块空间内存</span>
<span class="line">fscanf是从文件中格式化读取，fprintf才是向文件中格式化写入</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">#include &lt;string.h></span>
<span class="line">#include &lt;stdlib.h></span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">char *p1,*p2;</span>
<span class="line">p1=p2=(char *)malloc(sizeof(char)*10);</span>
<span class="line">strcpy(p1,"malloc");</span>
<span class="line">strcpy(p2,p1+1);</span>
<span class="line">printf("%c%c\n",p1[0],p2[0]);</span>
<span class="line">}</span>
<span class="line">程序的运行结果是______。</span>
<span class="line">A. aa</span>
<span class="line">B. ma</span>
<span class="line">C. am</span>
<span class="line">D. mm</span>
<span class="line">我的答案: B正确答案: A</span>
<span class="line"></span>
<span class="line">// p1和p2指向同一空间</span>
<span class="line">第一个strcpy: 一开始为 malloc</span>
<span class="line">第二个strcpy:  变为 alloc</span>
<span class="line">这是两个都指向这个alloc</span>
<span class="line">输出则为aa </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">(单选题)有以下程序</span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">#include &lt;stdlib.h></span>
<span class="line">main()</span>
<span class="line">{</span>
<span class="line">int *a,*b,*c;</span>
<span class="line">a=b=c=(int *)malloc(sizeof(int));</span>
<span class="line">*a=1;</span>
<span class="line">*b=2,*c=3;</span>
<span class="line">a=b;</span>
<span class="line">printf("%d,%d,%d\n",*a,*b,*c);</span>
<span class="line">}</span>
<span class="line">程序运行后的输出结果是______。</span>
<span class="line">A. 3,3,3</span>
<span class="line">B. 2,2,3</span>
<span class="line">C. 1,2,3</span>
<span class="line">D. 1,1,3</span>
<span class="line">我的答案: B正确答案: A</span>
<span class="line"></span>
<span class="line">//a=b=c=(int *)malloc(sizeof(int));表示三个指向同一空间，有一个变化其余都变化</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">对于语句void *p=malloc(sizeof (int)*250);,下面说法正确的是______。</span>
<span class="line">A. 这条语句存在语法错误</span>
<span class="line">B. 利用指针p,所申请的内存可作为250个int元素的一维数组来使用</span>
<span class="line">C. 经强制类型转换后,该语句所申请的内存可以作为125个double元素的一维数组来使用</span>
<span class="line">D. 该语句所申请内存只能存储int数据</span>
<span class="line">我的答案: B正确答案: C</span>
<span class="line"></span>
<span class="line">//B需要通过强制类型转换！</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">设有定义和语句(假设short int型数据占2字节)</span>
<span class="line">short int *pi,*pj;</span>
<span class="line">pi=pj=(short *)malloc(2);</span>
<span class="line">则以下叙述正确的是______。</span>
<span class="line">A. pi和pj指向了同一个short int型存储单元</span>
<span class="line">B. pi和pj指向了2个连续的short int型存储单元的首地址</span>
<span class="line">C. pi和pj分别指向了一个short int型存储单元</span>
<span class="line">D. pi和pj分别指向了2个short int型存储单元</span>
<span class="line">我的答案: D正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">若指针p已正确定义,要使p指向两个连续的整型动态存储单元,不正确的语句是______。</span>
<span class="line">A. p=2*(int*)malloc(sizeof(int));</span>
<span class="line">B. p=(int*)malloc(2*sizeof(int))</span>
<span class="line">C. p=(int*)malloc(2*2) //int为2？？</span>
<span class="line">D. p=(int*)calloc(2,sizeof(int))</span>
<span class="line">我的答案: B正确答案: A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">标准库函数fgets( s,n,f )的功能是（）</span>
<span class="line">A.从文件f中读取长度不超过n-1的字符串存入指针s所指的内存</span>
<span class="line">B.从文件f中读取长度为n的字符串存入指针s所指的内存</span>
<span class="line">C.从文件f中读取n个字符串存入指针s所指的内存</span>
<span class="line">D.从文件f中读取n-1个字符串存入指针s所指的内存</span>
<span class="line">我的答案：B 正确答案：A</span>
<span class="line"></span>
<span class="line">//fgets(str,n,fp)：从fp指向的文件读入一个长度为(n-1)的字符串放到字符数组str中，成功返回地址，否则返回NULL</span>
<span class="line">补充：</span>
<span class="line">fputs(str,fp)：写</span>
<span class="line">fgetc(fp)：读</span>
<span class="line">fputc(str,fp)：写</span>
<span class="line">fopen("a.txt","r")：打开，见下面</span>
<span class="line">fclose(fp)：关闭</span>
<span class="line">fprintf(fp,"%d",a)：读，从fp中读a</span>
<span class="line">fscanf(fp,"%d",&amp;a)：写，把a写入fp中</span>
<span class="line">fread(存储区地址,size,count,fp)：读，size字节数，count：数据项</span>
<span class="line">fwrite(储存区地址,size,count,fp)：写</span>
<span class="line">feof(fp)：判断是否到达文件尾部标准</span>
<span class="line">rewind(fp)：使文件指向指向开头</span>
<span class="line">fseek(fp,100L,0)：0-开始位置，1-当前位置，2-末尾；100L-位移量</span>
<span class="line"></span>
<span class="line">r：只读     r+：读和写</span>
<span class="line">w：只写     w+：读和写</span>
<span class="line">a：只追加   a+：追加并从头开读</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


