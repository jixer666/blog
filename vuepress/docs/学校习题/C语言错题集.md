# C语言错题集

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

## 总结

- 以数字0开头（不是字母o）的为八进制，其后只能出现数字0-7
- 以0x开头的为16进制，其后只能出现0-9或者abcdef（大写也可）
- 字符串常量：1.普通字符 2.转义字符 3. \\ + ascall码 （\\0dd（八进制）,\\xhh（十六进制））
- \\+字母：控制字符； \\+1~3个八进制数：ascll该八进制数的字符 ；\\x+1~2个十六进制数：ascll为该十六进制数的字符
- 实型常数：2E0 （E前面必须有数:+5,-5,5,05,5.都行；E后面必须是整数(正负0都行):+5,-5,5）

- char a\[\] = "123" 和 char a\[\] = {'a','b','c'} sizeof不同，strlen相同
- EOF是作为文本文件的结束标志，其值为-1
- 反斜杠后的16进制数只可以由小写字母x开头，不允许大写字母x，也不允许用ox开头
- auto:自动变量,会自动分配空间,但不是自动赋值0；static:函数结束存储单元不会释放
- static:静态局部变量 ； register:寄存器变量,强制保留在CPU,该变量不能用&
- strcpy(1,2)和strcat(1,2)需要保证1足够大能容纳2
- 空指针不能改变其值
- pi=pj=(short \*)malloc(2); pi和pj同时指向同一空间
- printf输出的数据都是隐含右对齐
- printf输出的数据实际精度是由格式控制的小数的领宽来完全决定的
- C语言虽然不限制标识符的长度,但是它受到不同编译器的限制,同时也受到操作系统的限制
- switch( xx ); 必须要有() 和 ;
- gets()能接受空格,scanf()不能识别空格，制表符，回车符
- 实参和形参在不同的存储单元
- 结构体能相互赋值（每个成员都变）,数组不能
- c语言算法可以没有输入但你必须要有输出
- 全局变量的作用域：定义变量开始到本源文件结束（由具体位置和extern说明来决定）
- 函数不写类型名默认为int
- exit(0) 是退出整个进程，不论在哪里调用，都会退出当前进程
- typedef是声明新的类型名代替已有的类型名，并不是添加新的类型
- 构成C程序的基本单位是函数

## 位运算

~：按位取反

&：有0则0，无0则1

|：有1则1，无1则0

^：相同为0，相异为1

<<：左移x位，原数乘以2的x方

\>>：右移x位，原数除以2的x方

```
变量a中的数据用二进制表示的形式是01011101，变量b中的数据用二进制表示的形式是111100。若要求将a的高4位取反，低4位不变，所要执行的运算是
A.a^b
B.a/b
C.a&b
D.a<<4
我的答案：D 正确答案：A

//  ^：相同为0，相异为1
01011101
11110000
10101101
```

## 指针

```
#include <stdio.h>
#include <string.h>
main()
{
char str[][10]= { "One" , "Three" , "Five"}, *p = str[0];
printf( "%s," , p+10 );
printf( "%d\n" ,strlen(p+=10) );
}
执行后的输出结果是______。
}    //p+10为数组第二行首地址
A. 出错   
B. Three,5
C. Three,4
D. Five,5
我的答案: C正确答案: B
```

```
#include <stdio.h>
int *f(int *s, int *t)
{
int *k;
if (*s<*t) {
k = s;
s=t;
t=k;
}
return s;
}
main()
{
int i=3, j=5, *p=&i, *q=&j, *r;
r=f(p,q);
printf("%d,%d,%d,%d,%d\n", i, j, *p, *q, *r);
}
则程序的输出结果是______。
A. 3,5,3,5,5
B. 3,5,5,3,5
C. 5,3,5,3,5
D. 5,3,3,5,5
我的答案: B正确答案: A
```

```
#include <stdio.h>
void fun( int *p, int *q )
{
int t;
t = *p;   //*t:0
*p = *q;   //*p:9
*q=t;   //*q:0
*q = *p;   //*q:9
}   //*p,*q:9,9
main()
{
int a=0, b=9;
fun ( &a, &b );
printf( "%d %d\n" , a,b );
}
程序的输出结果是______。
A. 0 0
B. 9 9
C. 9 0
D. 0 9
我的答案: C正确答案: B
```

```
#include <stdio.h>
int k=5;
void f(int *s)
{
s=&k;
}
main()
{
int m=3,*p=&m;
f(p);
printf("%d,%d\n", m, *p);
}
程序的运行结果是______。
A. 3,3
B. 5,5
C. 3,5
D. 5,3
我的答案: C正确答案: A
```

```
#include <stdio.h>
int change(int* data)
{
return (*data)++;
}
main()
{
int data = 123;
change(&data);
printf("%d,", data);
data = change(&data);
printf("%d,", data);
printf("\n");
}
程序运行后的输出结果是______。
A. 123,123,
B. 123,124,
C. 124,123,
D. 124,124,
我的答案: B正确答案: D
```

```
#include <stdio.h>
int *f(int *s,int *t)
{
if (*s < *t) s=t; //指针指向改变,目标元素值没变
return s;
}
main()
{
int i=3, j=5, *p=&i, *q=&j, *r;
r=f(p,q);
printf("%d,%d,%d,%d,%d\n", i, j, *p, *q, *r);
}
程序的运行结果是______。
A. 3,5,3,5,5
B. 3,5,5,5,5
C. 5,3,3,3,5
D. 5,5,5,5,5
我的答案: B正确答案: A
```

```
有以下程序#include<stdio.h>
void fun(int *a,int *b)
{int *c;
c=a;a=b;b=c;
}
main()
{int x=3,y=5,*p=&x,*q=&y;
fun(p,q);
printf("%d,%d,",*p,*q);
fun(&x,&y);
printf("%d,%d",*p,*q);}
程序运行后的输出结果是
A.3,5,5,3
B.3,5,3,5
C.5,3,3,5
D.5,3,5,3

我的答案：D  正确答案：B


此题改一下后就不一样
void fun(int *a,int *b)
{int c;
c=＊a;＊a=＊b;＊b=c;
}
main()
{int x=3,y=5,*p=&x,*q=&y;
fun(p,q);
printf("%d,%d,",*p,*q);
fun(&x,&y);
printf("%d,%d",*p,*q);
}
答案：5，3，3，5

//个人理解：函数会单独开一个空间指向该地址，地址变化也只在该开辟空间的地址上改变，并不会影响到原地址，但是如果是*地址的话就会改变，因为*地址的话会直接根据开辟的空间地址找到main函数中的地址再找到目标元素，从而实现改变。
```

```
若有一些定义和语句
#include <stdio.h>
int a=4,b=3,*p,*q,*w;
p=&a;q=&b;w=q;q=NULL;
则以下选项中错误的语句是_____。
A.*q=0;
B.w=p;
C.*p=va;
D.*p=*w;
我的答案：C  标准答案：A

//由于指针变量q赋值为NULL，即空地址，如果给空地址所指向的存储空间赋值的话，系统会出错，提示为:Null point assignment!
```

## 数组

```
(单选题)已有定义:char a[]="xyz",b[]={'x','y','z'};,以下叙述中正确的是______。
A. 数组a和
B. 的长度相同
B、 a数组长度小于b数组长度
C. a数组长度大于b数组长度
D. 上述说法都不对
我的答案: D正确答案: C

//数组 a 的长度为 4，其内容为 'x'、'y'、'z'、'\0'，其中 '\0' 是字符串结束标志。
//数组 b 的长度为 3，内容为 'x'、'y'、'z'。
```

```
(单选题)以下叙述正确的是______。
A. char c1, *c2, **c3, c4[2]; 是C语言的合法语句
B. 不能在数组说明符的一对方括号中使用表达式
C. 数组下标的最小值可以是负值
D. 若有数组定义 int array[5]; 则语句 printf("%d", array[1.23]);是合法的
我的答案: C正确答案: A
```

```
(单选题)设有如下程序段
int a[8] = {0};
int b[] = {0};
char c[2] = {"A", "B"};
char d = "AB";
以下叙述正确的是______。
A.只有变量c的定义是合法的
B.所有变量的定义都是完全合法的
C.只有变量a,b,c的定义是完全合法的
D.只有变量a, b的定义是完全合法的
我的答案: B正确答案: D

//这题出的时候有问题，我改了下
```

```
(单选题)以下能正确定义一维数组的选项是______。
A. int a[5]={0,1,2,3,4,5};
B. char a[]={0,1,2,3,4,5};
C. char a={'A','B','C'};
D. int a[5]="0123";
我的答案: A正确答案: B
```

```
(单选题)假定int类型变量占用两个字节,若有定义:int x[10]={0,2,4};,则数组x在内存中所占字节数是______。
A. 3
B. 6
C. 10
D. 20  //定义多少算多少
我的答案: B正确答案: D
```

```
(单选题)以下叙述中错误的是______。
A. 对于double类型数组,不可以直接用数组名对数组进行整体输入或输出
B. 数组名代表的是数组所占存储区的首地址,其值不可改变
C. 当程序执行中,数组元素的下标超出所定义的下标范围时,系统将给出"下标越界"的出错信息
D. 可以通过赋初值的方式确定数组元素的个数
我的答案: A正确答案: C
```

```
(单选题)若有定义:a[]={1,2,3,4,5,6,7,8,9,10};,则a[a[5]-a[7]/a[1]]的值是______。
A. 4
B. 3
C. 2
D. 10
我的答案: D正确答案: B

//a[6-8/2] = 3
```

```
(单选题)若有以下定义:int t[3][2];能正确表示t数组元素地址的表达式是______。
A. t[3][2] //元素
B. t[3] //越界
C. t[1]
D. *t[2] //值
我的答案: D正确答案: C
```

```
(单选题)函数FindMin的形参a所指数组中只存放正整数,函数的功能是查找数组中最小值,并作为函数值返回
#define MAX 2147483647
int FindMin(int a[],int n)
{
int i, min;
min=______;
for(i=n-1; i>=0; i--)
if(min>a[i])
min=a[i];
return min;
}
程序中下划线处是给变量min赋初值,以下选项中错误的是______。
A. 0
B. MAX
C. a[0]
D. a[n-1]
我的答案: B正确答案: A

//题看错了选了就跑0.0
```

## 前五章基础题

```
#include <stdio.h>
int main()
{
int i,a;
i = (a=(a=(a=2*3,a*5),a+6),a+7);
printf("%d %d",i,a);
}

答案：43 36

//1. a = 3*2 =6  
//2. a*5 = 30
//3. a = 30
//4. a = a+6 = 36
//5. a = 36
//6. a+7 = 43
//7. i = 43
```

```
#include <stdio.h>
int main()
{
int i,a;
i = ((a=2*3,a*5),a+6),a+7;
printf("%d %d",i,a);
}
答案：12 6

//与上题类似,逗号表达式从左到右依次来计算
//注意等号左边是否有赋值语句
//1. a = 3*2 =6  
//2. a*5 = 30
//3. a+6 = 12
//4. i = 12
//5. a+7 = 13

```

```
设有以下程序段,执行后的输出结果是_____。
int x=100,y=200;
printf("%d",(x,y));
A. 100
B. 200
C. 100,200
D. 编译出错
我的答案: C正确答案: B
```

```
执行语句printf("The program's name is c:\\tools\book.txt");后的输出是______。
A. The program's name is c:tools
B. The program's name is
C. \tools\book.txt

C、 The program's name is c:\\tool
D. The program's name is c:\toolook.txt
我的答案: D正确答案: D

//  \b为退格符:一格
```

```
int a = 1;
printf("%d %d %d",a,a++,++a);   //3 2 3

//printf从右往左入栈，但是输出的顺序为：x或++x只改变x的值最后才输出，x++确定此位置的输出并立刻输出。指针：最后的*x和*++x并不是此时的*x的值，不会发生改变；其他：x最后计算完后，x和++x位置的值都是此时x的值
```

```
设a,b,c,d均是int类型变量,为了使以下程序段的输出为:1234+123+12+1,正确的输入形式应当是______。
scanf("%4d+%3d+%2d+%1d",&a,&b,&c,&d);
printf("%4d+%3d+%2d+%1d",a,b,c,d);
A. 1234123121<回车>
B. 1234123412341234<回车>
C. 1234+1234+1234+1234<回车>
D. 1234+123+12+1<回车>
我的答案: A正确答案: D

//这题傻逼了0.0
```

```
有以下程序
#include <stdio.h>
main()
{ int al,a2; char cl,c2;
scanf(“%d%c%d%c”,&a1,&cl,&a2,&c2);
printf(“%d, %c,%d, %c”,a1,c1,a2, c2);
}
若想通过键盘输入,使得a1的值为12,a2的值为34,c1的值为字符a,c2的值为字符b,程序输出的结果是:12,a,34,b 则正确的输入格式是(以下~代表空格,<CR>代表回车)
A. 12a34b
B. 12~a~34~b
C. 12,a,34,b
D. 12~a34~b
我的答案: C正确答案: A

//有煞笔了0.0
```

```
根据定义和数据的输入方式,输入语句的正确形式为______。
已有定义:float f1,f2;
数据的输入方式:4.52<CR>
3.5<CR>
A. scanf("%f,%f",&f1,&f2);
B. scanf("%f%f",&f1,&f2);
C. scanf("%3.2f%2.1f",&f1,&f2);
D. scanf("%3.2f,%2.1f",&f1,&f2);
我的答案: C正确答案: B

//  <CR>：回车键
```

```
已知int a,b;用语句scanf("%d%d",&a,&b);输入a,b的值,不能作为输入数据分隔符的是______。
A. ,
B. 空格
C. 回车
D. [tab]
我的答案: D正确答案: A
```

```
若有以下类型说明语句:char a; int b;float c; double d; 则表达式a*b-2*d+c的结果类型为_______。
A. float
B. char
C. int
D. double
我的答案: A正确答案: D

//隐式类型转换
1、为防止精度损失，如果必要的话，类型总是被提升为较宽的类型。
2、所有含有小于整形的有序类型的算术表达式在计算之前其类型都会被转换成整形。
double + float = double
```

```
将字符g赋给字符变量c,正确的表达式是_______。
A. c="g"
B. c=101
C. c='\147'
D. c='0147'
我的答案: B正确答案: C

//a的ascall值97
```

```
若有变量说明:int a=0,b=0,c=0;,以下符合C语言语法的赋值表达式是_______。
A. a=9+b+c=a+9
B. a=9+b;
C. a=(9+b,b++)
D. a=9+b++=a+7
我的答案: B正确答案: C

//a，d表达式不能是左值，9+b+c和9+b++是一个表达式不能在左边
```

```
下面四个选项中,均是C语言关键字的选项是_______。
A. auto enum include
B. switch typedef continue
C. signed union scanf
D. if struct type
我的答案: C正确答案: B

//关键字：void signed unsigned　short　long　int　float　double　char　enum　struct　union　typedef const　 volatile auto　static　extern　register sizeof　goto　return　break　continue　if　else　switch　case　default　do　while　for
```

```
下列四组选项中,均是不合法的用户标识符的选项是_______。
A. A P_0 do
B. float goto _A
C. b-a goto int
D. _123 temp INT
我的答案: C正确答案: C

//c语言表示符
C 标识符是用来标识变量、函数，或任何其他用户自定义项目的名称
一个标识符以字母 A-Z 或 a-z 或下划线 _ 开始，后跟零个或多个字母、下划线和数字（0-9）
C 标识符内不允许出现标点字符，比如 @、$ 和 % -
C 是区分大小写的编程语言。因此，在 C 中，a 和 A 是两个不同的标识符
```

```
在C语言中,数字029是一个_______。
A. 八进制数
B. 十六进制数
C. 十进制数
D. 非法数
我的答案: A正确答案: D

//见上面总结
```

```
合法的c语言字符常量是_____。
A. "T"
B. 39
C. T
D. '\n'   //转义字符
我的答案: B正确答案: D
```

```
下面正确的字符常量是______。
A. '\X17'
B. '\80'
C. '\\'
D. "\n"
我的答案: B正确答案: C
```

```
下列程序的输出为______。
#include<stdio.h>
void main()
{ int m=13;
float a=12.6, x;
x=m/2+a/2;
printf(“%f\n”, x);
}
A. 12.000000
B. 12.300000
C. 12.800000
D. 12.3
我的答案: C正确答案: B

//6 + 6.300000 = 12.300000
//整数整除为整数，浮点整除为浮点
```

```
若以下变量均是整型,且num=sum=7;则计算表达式sum=num++, sum++, ++num后的sum值为 ________。
A. 7
B. 8
C. 9
D. 10
我的答案: C正确答案: B

// sum:8,num:9
// sum++表示整个语句结束后自增1
// ++sum表示先自增1再将这个值代入语句进行接下来的运算
```

```
假设所有变量均为整型,则表达式(a=2,b=5,b++,a+b)的值是 ________。
A. 7
B. 8
C. 6
D. 2
我的答案: B正确答案: B
```

```
设c1. c2均是char类型变量,则以下不正确的函数调用为______。
A. scanf("%c",c1)
B. getchar(c2)
C. putchar(c2)
D. putchar(c1,c2)
我的答案: A 正确答案: AD

//puchar()只能是一个
```

```
设ch是char类型变量,其值是A,则表达式ch=(ch>='A'&&ch<='Z')?(ch+32):ch的值是_______。
A. Z
B. A
C. a
D. z
我的答案: A正确答案: C

// ch+25 == 'Z'
// ch+36 变小写
```

```
若i和k都是int类型变量，有以下for语句for(i=O;k=-1;k=1;k+t) printf("*****\n");
下面关于语句执行情况的叙述中正确的是___。
A.循环体执行两次
B.循环体执行一次
C.循环体一次也不执行
D.构成无限循环

我的答案: C正确答案: D
```

```
以下合法的转义字符是__。
A.'\x41'
B.'\0x41'
C.'\X41'
D.‘\0X41'
我的答案：B  标准答案:A

//转义字符，反斜杠后的十六进制数只可以由小写字母x开头，不允许大写字母x，也不允许用ox开头
```

```
若有定义语句:int a=3,b=2,c=1;，以下选项中错误的赋值表达式是_。
A.a=(b=4)=3;

B.a=b=c+1;
C.a=(b=4)+c;
D.a=1+(b=c=4);
我的答案：D 标准答案:A

//表达式的形式为:变量名=表达式，赋值号的左边必须是一个代表某一存储单元的变量名，由于选项A相当于a=(b=4)和(b=4)=3两个健值表达式，且由于(b=4)=3运算符左边b=4不是变量，而是表达式，所以选项A不正确.
```

```
float fun(int x,int y) {
	return x+y; 
}

int main(){
	int a=2,b=5,c=8;
	printf("%3.0f",fun((int)fun(a+c,b),a-c));
	
	return 0;
}

//答案：9
//注意：%3.0与%3的区别，%3.0没有有小数
```

```
有如下程序
#include <stdio.h>
mai(){
int a=0, b=1;
if(a++&& b++)printf("T");
else printf(""F");
printf(" a=%d,b=%dn", a, b);}
程序运行后的输出结果是__。
A.Ta=0,b=1
B.Fa=0,b=2
C.Ta=1,b=2
D.Fa=1,b=1
我的答案：C 正确答案：D
//a++ & b+-语句中，若是&&左边的表达式为假，则不必执行&a右边的表达式，a++是先取值，后自加，取的值为b0，整个表达式为假，执行printf("F")
```

```
有下列程序
#include <stdio.h>main(){
int a=0,b=0,c=0;
if(++a || ++b && ++c)
printf ("%d,%d,%d",a,b,c);
}
程序执行后的输出结果是___。
A.1,0,0
B.1,1,1
C.0,1,1
D.1,1,0
我的答案：B 正确答案：A

//++a是先自增再执行表达式，执行表达式时使用的是自增后的，所以a的值为1。逻辑运算符或(||)左侧的表达式已经为真，所以右侧表达式不运行，b和c的值都为0。
```

```
(单选题)有以下程序
#include <stdio.h>
#define PT 3.5;
#define S(x) PT*x*x;
main()
{
int a=1,b=2;
printf("%4.1f\n",S(a+b));
}
程序运行后的输出结果是______。
A. 14.0
B. 31.5
C. 7.5
D. 程序有错无输出结果
我的答案: C正确答案: D

// #define PT 3.5;  没有;
```

```
(单选题)有以下程序
#include <stdio.h>
#define SUB(a)(a)-(a)
main()
{
int a=2,b=3,c=5,d;
d=SUB(a+b)*c;
printf("%d\n",d);
}
程序运行后的输出结果是______。
A. 0
B. -12
C. -20
D. 10
我的答案: A正确答案: C

//(2+3)-(2+3)*5 = -20
```

```
(单选题)有如下程序
#define N 2
#define M N+1
#define NUM 2*M+1
main()
{
int i;
for(i=1;i<=NUM;i++)
printf("%d\n",i);
}
该程序中的for循环执行的次数是______。
A. 5
B. 6
C. 7
D. 8
我的答案: B正确答案: B

// num:2*2+1+1 = 6
```

```
(单选题)以下关于宏的叙述中正确的是______。
A. 宏名必须用大写字母表示
B. 宏定义必须位于源程序中所有语句之前
C. 宏替换没有数据类型限制
D. 宏调用比函数调用耗费时间
我的答案: C正确答案: C
```

```
(单选题)下面选项中关于编译预处理的叙述正确的是______。
A. 凡是以#号开头的行,都被称为编译预处理命令行
B. 预处理命令行必须使用分号结尾
C. 预处理命令行不能出现在程序的最后一行
D. 预处理命令行的作用域是到最近的函数结束处
我的答案: C正确答案: A
```

```
sizeof(double)是______。
A. 一个双精度型表达式
B. 一个整型表达式
C. 一个不合法的表达式
D. 一种函数调用
我的答案: D正确答案: B

//sizeof(double)是指求double类型数据的数据长度,是个整数
```

```
有以下程序
#include <stdio.h>
main()
{ char a[20],b[20],c[20];
scanf("%s%s",a,b);
gets(c);
printf("%s%s%s\n",a,b,c);}
程序运行时从第一列开始输入:This is a cat!<回车>
则输出结果是
A.Thisisacat!
B.Thisis a
C.Thisis a cat!
D.Thisisa cat!
我的答案：D 正确答案：C

//空格留在缓存区了gets后被输入
```

```
以下选项中，与n=i++完全等价的表达式是
A.n=i,i=i+1
B.n+=i+1
C.i=i+1,n=i
D.n=++i
我的答案：C 正确答案：A

//先参与计算再相加
```

```
有以下程序
#include <stdio.h>
#include <string.h>
main()
{ char x[]="STRING";
x[0]=0; x[1]='\O'’;x[2]=0;
printf("%d %d\n",sizeof(x),strlen(x));}
程序运行后的输出结果是
A.6 1
B.7 0
c.6 3
D.7 1
我的答案：D 正确答案：B

//'\0'的ascall值为0，所以第一个元素就是结束符0.0
```

```
以下程序段的输出结果是:
char s[]="\\141\141abc\t";
printf("%d\n",strlen(s));
A.9
B.12
C.13
D.14
我的答案：B 正确答案：A

//  \\ 1 4 1 \141 a b c \t 共9个
\+字母：控制字符
\+1~3个八进制数：ascll该八进制数的字符
\x+1~2个十六进制数：ascll为改十六进制数的字符
```

## 结构体

```
(单选题)若有下面的说明和定义,则sizeof(struct aa)的值是______。
struct aa
{ int r1;
double r2;
float r3;
union uu
{ char u1[5];
long u2[2];
}ua;
}maya;
A. 30
B. 29
C. 24
D. 22
我的答案: C正确答案: D

//这题不会啊，
```

```
以下程序的输出结果是
main()
{union {
 char i[2];int k;}r; 
r.i[0]=2;
r.i[1]=0;
printf("%d\n",r.k);}
A.2
B.1
C.0
D.不确定
我的答案：D 正确答案：A

//共用体共用一块存储空间，2的二进制:00000010,0的二进制就为0，最后的地址就为000000010，这题不明显，看下面

main()
{union {
 char i[2];int k;}r; 
r.i[0]=1;
r.i[1]=2;
printf("%d\n",r.k);}  513

//0000000100000010 前八位位1的二进制，后八位为2的二进制


main()
{union {
 char i[2];int k;}r; 
r.i[0]=2;
r.i[1]=1;
printf("%d\n",r.k);} 258

//0000001000000001 前八位位2的二进制，后八位为1的二进制
```

```
有以下程序
#include <stdio.h>
int fun(int x[].int n)
{static int sum=o, i;
for(i=0;i<n;i++) sum+=x[i];
return sum;}
main()
int a[]={1.2,3,4,53,b[]={6,7,8,9}, s=O;
s=fun(a,5)+fun(b,4);
printf("%din".s);
}
程序执行后的输出结果是()
A.55
B.50
C.45
D.60

我的答案：C 正确答案：D

//static作用：在函数调用结束不会释放内存，支部会变为0
```

```
若有以下语句:
typedef struct S
{
int g;
char h;
}T;
以下叙述中正确的是______。
A. 可用S定义结构体变量
B. 可用T定义结构体变量
C. S是struct类型的变量
D. T是struct S类型的变量
我的答案: C正确答案: B
```

```
设有如下语句
typedef struct Date{
int year;
int month;
int day;}DATE;
则以下叙述中错误的是()
A.DATE是用户定义的结构体变量
B.struct Date是用户定义的结构体类型
C.DATE是用户说明的新结构体类型名
D.struct是结构体类型的关键字
我的答案：C 正确答案：A

//struct 结构体名{成员列表}变量列表;
typedef 类型名 标识符；
#define N 10000 这里没有;
此处DETA为该结构体的标识符,所以是结构体名
```

```
以下结构体类型说明和变量定义中正确的是
A.typedef struct
{int ngchar c;} REC;REC t1,t2;
B.struct REC{int n;char c;};REC t1,t2;
C.typedef struct REC;
{int n=O;char c= 'A';}t1,t2;
D.struct
{int n;char c;} REC; REC t1,t2;
我的答案：B 正确答案：A

//B：struct REC t1,t2;(少了struct)
struct 结构体名{}变量名;
struct {}变量名;
struct 结构体名{}; struct 结构体名 变量名;
```

## 函数

```
关于函数返回值，正确的是（）
A.函数不能没有返回值
B.函数可以返回一个数组
C.函数只能返回基本数据类型或指针
D.函数可以返回整个结构体，即使结构体中有数组
我的答案：C 正确答案：D

//数组类型和函数类型不能做返回值
```

```
以下选项中叙述错误的是_
A.C程序函数中定义的赋有初值的静态变量，每调用一次函数，赋一次初值
B.在c程序的同一函数中，各复合语句内可以定义变量，其作用域仅限本复合语句内
C.C程序函数中定义的自动变量，系统不自动赋确定的初值
D.C程序函数的形参不可以说明为static型变量
我的答案：D 正确答案：A

//静态局部变量，对其只赋一次初值，以后每次调用函数对不再重新赋初值，而只是保留上次函数调用结束时的值。对anto变量来说，如果不赋初值则它的值是一个不确定的值。因此选项A错误。
```

```
认下叙述中正确的是_
A.全局变量的存储类别可以是静态类
B.对于变量而言,"定义"和"说明"这两个词实际上是同一个意思
C.在复合语句中不能定义变量
D.函数的形式参数不属于局部变量
我的答案：C 标准答案:A

//A.全局变量是在所有作用域都可访问的变量，它可以是静态的
//B.对于变量而言，"定义"是指给变量分配确定的存储单元。"说明"只是说明变量的性层在复合语句内部定义的变量称为局部变量
//C.复合语句：类似与函数（许多语句组成）
```

```
下列叙述中正确的是
A.每一个c程序文件中都必须要有一个main()函数
B.在C程序中main()函数的位置是固定的
C.C程序中所有函数之间都可以相互调用，与函数所在位置无关
D.在C程序的函数中不能定义另一个函数
我的答案：A  正确答案：D

//c程序文件中含有多个c程序，每个c程序必须要有main()函数，A错。
//B：不是固定的  C:无法调用main()函数
```

```
以下叙述中正确的是
A.构成c程序的基本单位是函数
B.可以在一个函数中定义另一个函数
C.main()函数必须放在其它函数之前
D.所有被调用的函数一定要在调用之前进行定义
我的答案：D 正确答案：A

//D:若函数放在main函数之后则需要定义，否则不需要定义
```

## 文件

```
以下叙述正确的是()
A.表达式sizeof(FILE*)== sizeof(int*)的值为真
B.文件指针的值是一个整数,它的值一定小于文件字节数
C.文件指针的值是所指文件的当前读取位置
D.使用fscanf函数可以向任意类型的文件中写入任意数量的字符

我的答案：C 正确答案：A
//文件指针实际上是指向一个结构体类型的指针，这个结构体包含有诸如:缓冲区的地址、在缓冲区中当前存取的字符的位置、对文件"读"还是"写"、是否出错，是否已经遇到文件结束标志等信息，并不是单单只是所指向文件位置，而是指向的一块空间内存
fscanf是从文件中格式化读取，fprintf才是向文件中格式化写入
```

```
(单选题)有以下程序
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
main()
{
char *p1,*p2;
p1=p2=(char *)malloc(sizeof(char)*10);
strcpy(p1,"malloc");
strcpy(p2,p1+1);
printf("%c%c\n",p1[0],p2[0]);
}
程序的运行结果是______。
A. aa
B. ma
C. am
D. mm
我的答案: B正确答案: A

// p1和p2指向同一空间
第一个strcpy: 一开始为 malloc
第二个strcpy:  变为 alloc
这是两个都指向这个alloc
输出则为aa 
```

```
(单选题)有以下程序
#include <stdio.h>
#include <stdlib.h>
main()
{
int *a,*b,*c;
a=b=c=(int *)malloc(sizeof(int));
*a=1;
*b=2,*c=3;
a=b;
printf("%d,%d,%d\n",*a,*b,*c);
}
程序运行后的输出结果是______。
A. 3,3,3
B. 2,2,3
C. 1,2,3
D. 1,1,3
我的答案: B正确答案: A

//a=b=c=(int *)malloc(sizeof(int));表示三个指向同一空间，有一个变化其余都变化
```

```
对于语句void *p=malloc(sizeof (int)*250);,下面说法正确的是______。
A. 这条语句存在语法错误
B. 利用指针p,所申请的内存可作为250个int元素的一维数组来使用
C. 经强制类型转换后,该语句所申请的内存可以作为125个double元素的一维数组来使用
D. 该语句所申请内存只能存储int数据
我的答案: B正确答案: C

//B需要通过强制类型转换！
```

```
设有定义和语句(假设short int型数据占2字节)
short int *pi,*pj;
pi=pj=(short *)malloc(2);
则以下叙述正确的是______。
A. pi和pj指向了同一个short int型存储单元
B. pi和pj指向了2个连续的short int型存储单元的首地址
C. pi和pj分别指向了一个short int型存储单元
D. pi和pj分别指向了2个short int型存储单元
我的答案: D正确答案: A
```

```
若指针p已正确定义,要使p指向两个连续的整型动态存储单元,不正确的语句是______。
A. p=2*(int*)malloc(sizeof(int));
B. p=(int*)malloc(2*sizeof(int))
C. p=(int*)malloc(2*2) //int为2？？
D. p=(int*)calloc(2,sizeof(int))
我的答案: B正确答案: A
```

```
标准库函数fgets( s,n,f )的功能是（）
A.从文件f中读取长度不超过n-1的字符串存入指针s所指的内存
B.从文件f中读取长度为n的字符串存入指针s所指的内存
C.从文件f中读取n个字符串存入指针s所指的内存
D.从文件f中读取n-1个字符串存入指针s所指的内存
我的答案：B 正确答案：A

//fgets(str,n,fp)：从fp指向的文件读入一个长度为(n-1)的字符串放到字符数组str中，成功返回地址，否则返回NULL
补充：
fputs(str,fp)：写
fgetc(fp)：读
fputc(str,fp)：写
fopen("a.txt","r")：打开，见下面
fclose(fp)：关闭
fprintf(fp,"%d",a)：读，从fp中读a
fscanf(fp,"%d",&a)：写，把a写入fp中
fread(存储区地址,size,count,fp)：读，size字节数，count：数据项
fwrite(储存区地址,size,count,fp)：写
feof(fp)：判断是否到达文件尾部标准
rewind(fp)：使文件指向指向开头
fseek(fp,100L,0)：0-开始位置，1-当前位置，2-末尾；100L-位移量

r：只读     r+：读和写
w：只写     w+：读和写
a：只追加   a+：追加并从头开读
```
