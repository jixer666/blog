<template><div><h1 id="python学习笔记" tabindex="-1"><a class="header-anchor" href="#python学习笔记"><span>Python学习笔记</span></a></h1>
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
<p><strong><em>注意：建议配合Python教程书本来结合学习</em></strong></p>
<h2 id="一-python的安装与环境搭建" tabindex="-1"><a class="header-anchor" href="#一-python的安装与环境搭建"><span>一.Python的安装与环境搭建</span></a></h2>
<p>Python官网下载：<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">https://www.python.org/</a></p>
<p>安装与环境搭建请看教程：<a href="https://cloud.tencent.com/developer/article/1580729" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1580729</a></p>
<p><strong><em>注意：必须是在cmd中输入python有输出显示才算的上是环境搭建成功</em></strong></p>
<h2 id="二-第一个python程序" tabindex="-1"><a class="header-anchor" href="#二-第一个python程序"><span>二.第一个Python程序</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">print("Hello World!")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>简简单单输出：Hello World!</p>
<h2 id="三-python的基础语法" tabindex="-1"><a class="header-anchor" href="#三-python的基础语法"><span>三.Python的基础语法</span></a></h2>
<h3 id="_1-python的标识符" tabindex="-1"><a class="header-anchor" href="#_1-python的标识符"><span>1.<strong>Python的标识符</strong></span></a></h3>
<ul>
<li>第一个字符必须是字母表中字母或下划线</li>
<li>标识符的其他的部分由字母、数字和下划线组成</li>
<li>标识符对大小写敏感</li>
</ul>
<h3 id="_2-python的关键字" tabindex="-1"><a class="header-anchor" href="#_2-python的关键字"><span>2.<strong>Python的关键字</strong></span></a></h3>
<ul>
<li>关键词：保留字，我们不能用它来做任何表示符名称</li>
<li>Python的关键字：如下</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">True，False，None，and，as，asset ，def ，class ，continue ，break ，else ，finally ，elif ，del ，except ，global ，for ，if ，from ，import ，raise ，try ，or ，return ，pass ，nonlocal ，in ，not ，is ，lambda</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-python的注释" tabindex="-1"><a class="header-anchor" href="#_3-python的注释"><span>3.<strong>Python的注释</strong></span></a></h3>
<ul>
<li>注释：编译器不执行此语句</li>
<li>单行注释：用 # 来表示</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#print("此处是单行注释")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>多行注释：用 ' 或者 &quot; 来表示</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">'print("此处是多行注释")' </span>
<span class="line">"print("此处也是多行注释")"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-python的缩进" tabindex="-1"><a class="header-anchor" href="#_4-python的缩进"><span>4.<strong>Python的缩进</strong></span></a></h3>
<ul>
<li>Python的缩进与其他编程语言不同，它是强制性的，必须通过Tab来与语句对齐,否则会报错!</li>
</ul>
<h2 id="四-python的基本数据类型" tabindex="-1"><a class="header-anchor" href="#四-python的基本数据类型"><span>四.Python的基本数据类型</span></a></h2>
<h3 id="_1-python中的数据类型" tabindex="-1"><a class="header-anchor" href="#_1-python中的数据类型"><span>1.<strong>Python中的数据类型</strong></span></a></h3>
<ul>
<li>整型：整数</li>
<li>字符型：字符串</li>
<li>浮点型：小数</li>
<li>列表：[], list()</li>
<li>元组：(), tuple()</li>
<li>集合：set()</li>
<li>字典：{}, dict()</li>
</ul>
<h3 id="_2-每个数据类型之间能相互转换" tabindex="-1"><a class="header-anchor" href="#_2-每个数据类型之间能相互转换"><span>2. <strong>每个数据类型之间能相互转换</strong></span></a></h3>
<ul>
<li>int(x)---&gt;x转为整型</li>
<li>str(x)---&gt;x转为字符型</li>
<li>float(x)---&gt;x转为浮点型</li>
<li>list(x)---&gt;x转为列表</li>
<li>tuple(x)---&gt;x转为元组</li>
<li>set(x)---&gt;x转为集合</li>
<li>dict(x)---&gt;x转为字典</li>
</ul>
<p><em>注意：有的转换必须符合转换的要求！不想这么转就怎么转</em></p>
<h2 id="五-条件判断语句-比较简单就不再过多叙述" tabindex="-1"><a class="header-anchor" href="#五-条件判断语句-比较简单就不再过多叙述"><span>五.条件判断语句（比较简单就不再过多叙述）</span></a></h2>
<h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span><strong>格式：</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"> if (条件一):</span>
<span class="line">      (表达式一)</span>
<span class="line"> elif (条件二):</span>
<span class="line">      (表达式二)</span>
<span class="line"> else:</span>
<span class="line">      (表达式三)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-循环语句-比较简单就不再过多叙述" tabindex="-1"><a class="header-anchor" href="#六-循环语句-比较简单就不再过多叙述"><span>六.循环语句（比较简单就不再过多叙述）</span></a></h2>
<h3 id="_1-while循环" tabindex="-1"><a class="header-anchor" href="#_1-while循环"><span>1.while循环</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"> while (满足循环进行的条件):</span>
<span class="line">        (表达式一)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-for循环" tabindex="-1"><a class="header-anchor" href="#_2-for循环"><span>2.for循环</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">for i in x:    #此处的x可以为列表，字典，字符换等, i为自变量</span>
<span class="line">       (表达式一)</span>
<span class="line">for i in range(0,x):  #表示循环x次，x必须为整数</span>
<span class="line">       (表达式二)  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-列表" tabindex="-1"><a class="header-anchor" href="#七-列表"><span>七.列表</span></a></h2>
<h3 id="_1-列表的创建" tabindex="-1"><a class="header-anchor" href="#_1-列表的创建"><span>1.<strong>列表的创建</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a = list()   #两种方法都可以</span>
<span class="line">a = []</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-列表的操作" tabindex="-1"><a class="header-anchor" href="#_2-列表的操作"><span>2.<strong>列表的操作</strong></span></a></h3>
<ul>
<li>访问</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a[0]    #代表列表a的下标为1的元素</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>增加</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.append(x)   #x代表增加的元素</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>删除</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">del a[x]   #x代表元素下标的索引</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>更新</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a[5] = 6   #把下标索引为5的元素改为整数6</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>列表的长度</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">len(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>列表的最大值</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">max(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>列表的最小值</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">min(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>某元素出现的次数</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.count(x) #x为某一元素</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>列表排序</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.sort(key=None,reverse=False)   #对列表从小到大排序,reverse=True为降序</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>列表反转</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.reverse()  #反向列表中元素</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>清空列表</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.clear()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>复制列表</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.copy()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>取出第i位并删除</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.pop(i)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>在列表第i位插入x</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.insert(i,x)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>将列表出现的第一个元素x删除</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.remove(x)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>将列表b添加到列表a中</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.extend(b)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="八-元组" tabindex="-1"><a class="header-anchor" href="#八-元组"><span>八.元组</span></a></h2>
<h3 id="_1-元组的创建" tabindex="-1"><a class="header-anchor" href="#_1-元组的创建"><span><strong>1.元组的创建</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a = tuple()</span>
<span class="line">a = ()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-元组的操作" tabindex="-1"><a class="header-anchor" href="#_2-元组的操作"><span>2.<strong>元组的操作</strong></span></a></h3>
<ul>
<li>访问</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a[0]   #代表元组a的下标为1的元素</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<p>增加：元组无法实现a[1] = 5增加操作，<strong>元组的元素值是不能修改的</strong></p>
</li>
<li>
<p>删除</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">del a[x] #x代表元素下标的索引</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<p>修改：元组修改可以通过两个元组拼接来实现，元组的元素值是不能修改的</p>
</li>
<li>
<p>元组的个数</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">len(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>元组的最大值</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">max(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>元组的最小值</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">min(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><em>注意：元组的元素值是不能修改的</em></strong></p>
<h2 id="九-集合" tabindex="-1"><a class="header-anchor" href="#九-集合"><span>九.集合</span></a></h2>
<h3 id="_1-集合的创建" tabindex="-1"><a class="header-anchor" href="#_1-集合的创建"><span>1.<strong>集合的创建</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a = set()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-集合的操作" tabindex="-1"><a class="header-anchor" href="#_2-集合的操作"><span>2.<strong>集合的操作</strong></span></a></h3>
<ul>
<li>访问：集合无法访问单独元素</li>
<li>增加</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.add(x) 或者 a.update(x)   #x为增加的元素</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>删除</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.remove(x)</span>
<span class="line">a.discard(x)</span>
<span class="line">a.pop()     </span>
<span class="line">#x代表移除的元素，第二种若元素不存在会出错，所以建议使用第一种方法,第三种为随机删除</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改：集合修改可以通过两个集合 &amp;|^+- 来实现</li>
<li>集合的个数</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">len(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>复制集合</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.copy()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>判断元素x是否在集合存在</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">x in s   #为存在返回True,否则False</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>清空集合</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.clear()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="十-字典" tabindex="-1"><a class="header-anchor" href="#十-字典"><span>十.字典</span></a></h2>
<h3 id="_1-字典的组成-a-键-值-由一个个键值对组成" tabindex="-1"><a class="header-anchor" href="#_1-字典的组成-a-键-值-由一个个键值对组成"><span>1.<strong>字典的组成：a = {'键':值}，由一个个键值对组成</strong></span></a></h3>
<h3 id="_2-字典的创建" tabindex="-1"><a class="header-anchor" href="#_2-字典的创建"><span>2.<strong>字典的创建</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a = dict()</span>
<span class="line">a = {}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-字典的操作" tabindex="-1"><a class="header-anchor" href="#_3-字典的操作"><span>3.<strong>字典的操作</strong></span></a></h3>
<ul>
<li>读取</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a['x']   #x代表读取元素的键，返回其值</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>增加</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a['x'] = y   #x代表增加的元素的键，y代表增加元素的值</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>删除</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">del a['x']   #x代表删除元素的键</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>修改</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a['x'] = y   #把x的值修改成y</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>字典的长度</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">len(a)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>清空字典</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.clear()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>复制字典</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.copy()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>随机返回字典某一键值对</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.item()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回某一元素对应的值</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.get('x')   # x为改元素的键</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回所有元素对应的值</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.values()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回所有元素对应的键</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.keys()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>随机返回并删除该键值对</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">a.popitem()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注_意：键值对的键是唯一的，不能出现两个相同的键，值是可变的_</strong></p>
<h2 id="十一-函数" tabindex="-1"><a class="header-anchor" href="#十一-函数"><span>十一.函数</span></a></h2>
<h3 id="_1-格式" tabindex="-1"><a class="header-anchor" href="#_1-格式"><span>1.<strong>格式：</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    def 变量名(参数一,参数二):</span>
<span class="line">        (表达式一)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong><em>注意：在Python中可以有返回值，也可以不有返回值，还可以只有 return</em></strong></strong></p>
<h3 id="_2-函数的调用" tabindex="-1"><a class="header-anchor" href="#_2-函数的调用"><span>2.<strong>函数的调用</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">def count(a,b):    #定义函数count，参数为a，b</span>
<span class="line">   return a+b    #返回a+b的值</span>
<span class="line"></span>
<span class="line">m = count(1,2)   #此处进行了函数的调用</span>
<span class="line">print(m)</span>
<span class="line"></span>
<span class="line">>>3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二-类" tabindex="-1"><a class="header-anchor" href="#十二-类"><span>十二.类</span></a></h2>
<h3 id="_1-关键字-class" tabindex="-1"><a class="header-anchor" href="#_1-关键字-class"><span>1.<strong>关键字：class</strong></span></a></h3>
<h3 id="_2-格式" tabindex="-1"><a class="header-anchor" href="#_2-格式"><span>2.<strong>格式</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">class (变量名1):</span>
<span class="line">      def __init__(self,参数一,参数二...):</span>
<span class="line">         self.变量名2 = 参数一    #此处的变量名2为实列变量</span>
<span class="line">      def __del__(self):    #不常用，再出现结束前一部进行</span>
<span class="line">         表达式1</span>
<span class="line">      def __str__(self):    #必须返回字符串</span>
<span class="line">         return "此处为一个字符串"</span>
<span class="line">      def 变量名3(self):    #实列方法</span>
<span class="line">         表达式2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-类调用" tabindex="-1"><a class="header-anchor" href="#_3-类调用"><span>3.<strong>类调用</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  a = 变量名1(参数一,参数二...)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>完毕，后续有待补充，欢迎各位大佬指出错误，多谢！</p>
</div></template>


