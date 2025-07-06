# C语言指针

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span stylebuxiang="color: #666;">📅</span>
            <span>记不清了</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

> 文章写于2022年C语言培训指针章节

_是什么指针？什么是指针变量_？

- **指针就是地址**
- **指针变量就是存放地址的变量**
- **指针也是一个数据类型**

## 一.指针变量

### 1.一级指针

**定义指针变量**

```
int a = 5; //空间分配4个字节
int *p = &a；//&a表示a的地址
```

<table><tbody><tr><td class="has-text-align-center" data-align="center">00001</td></tr><tr><td class="has-text-align-center" data-align="center">00002</td></tr><tr><td class="has-text-align-center" data-align="center">00003</td></tr><tr><td class="has-text-align-center" data-align="center">00004</td></tr><tr><td class="has-text-align-center" data-align="center">00005</td></tr></tbody></table>

假设地址

_注意：每次程序重新运行，分配的地址都会变化!_

p : &a -----> a ：5 表示p指向a，则a就为p的**目标变量**

**访问**

- 直接访问：printf("%d",a);
- 间接访问：printf("%d",\*p);
- a+5 == \*p+5

例子

```
int a = 100,b = 5;
int *p1 = &a,*p2 = &b;
printf("%d,%d\n",a,b);
printf("%d,%d\n",*p1,*p2);
```

1.指针指向改变，但目标变量没变

```
int a = 100, b = 5,*p1,*p2,*c;
p1 = &a; p2 = &b;
c = p1; p1 = p2; p2 = c;
printf("%d %d\n",a,b);
printf("%d %d",*p1,*p2);
```

2.指针指向不变，目标变量改变

```
int a = 100, b = 5,*p1,*p2,c=0;
p1 = &a; p2 = &b;
c = *p1; *p1 = *p2; *p2 = c;
printf("%d %d\n",a,b);
printf("%d %d",*p1,*p2);
```

### 2.**二级指针**（指向指针的指针变量）

二级指针：表示o所指向的地址里面存放的是一个指向（类型）的指针，适用于二维数组

```
int a = 5;
int *p = &a;    //a的地址放在p中
int **o = &p;     //p的地址放在o中
                  //所以a的地址放在o中
```

## 二.指针类型

```
printf("%d\n",sizeof(char*));
printf("%d\n",sizeof(int*));
printf("%d\n",sizeof(double*));
printf("%d\n",sizeof(float*));
```

这里的输出与系统有关，32位系统和64位系统的输出不同，但是输出是相同的，指针大小的输出与类型无关

### 1.**指针类型决定了指针进行解引用操作的的时候，访问空间大小**

```
int *p ； #*p能够访问4个字节
char *p ； #*p能够访问1个字节
doube *p;  #*p能够访问8个字节
```

例如：

```
int a = 0x11223344;  //八进制
int *p1 = &a;
char *p2 = &a;  //错误写法
printf("%p\n",p1);
printf("%p\n",p2);
```

问题：_从“int \*”到“char \*”的类型不兼容_

### 2.**指针类型决定了指针+1向后变化的字节**

```
int a = 0x11223344;
int *p1 = &a;
char *p2 = &a;
printf("%p\n",p1+1);    
printf("%p\n",p2+1);
```

- int\* 加1 ：地址+4
- char \*加1：地址+1
- double\*加1：地址+8

## 三.野指针（2种）

### **1.指针未初始化**

```
int main()
{ 
 int *p;       //局部变量指针未初始化，默认为随机值
 *p = 20;
 return 0;
 }
```

### **2.指针越界**

```
int num[10] = {0};
int *p = num;
for(int i=0;i<=11;i++){
    *(p++) = i;   #超过数组范围
}
```

_注意：在实际操作中应注意避开野指针_

当指针不指向任何变量，可以这样写：

```
#define NULL 0   //文件开头指定符号常量NULL代表0

int *p = NULL; //使p指向地址为0的单元，确保系统对它不起任何作用
```

## **四.通过指针引用数组**

- **数组**：一个数组包含若干元素，每个数组元素都在内存中占用的存储单元，它们都有着相应的地址
- **指针变量：**既可以指向变量，也可以指向数组元素

### 1.**指向数组元素的指针**

数组元素的指针：数组元素的地址

```
int num[5] = {1,2,3,4,5};
int *p = num;
//int *p = &num[0];   数组的首元素地址赋值给指针变量p
//int *p;*p = a;
```

![](https://gitee.com/lijunxi666/picture-bed/raw/master/school/QQ截图20220429101414.png)

### **2.通过指针引用数组元素**

- 下标法 如：a\[i\]
- 指针法 如：\*(a+i)

```
int num[9]={1,2,3,4,5,6,7,8,9};
int *p = num;

printf("%p\n",p); 
printf("%p\n",p+1);
printf("%p\n",p+2);
printf("%d\n",*p);
printf("%d\n",*(p+1));
printf("%d\n",*(p+2));
```

例子：输出以下结果

```
int num[5] = {1,2,3,4,5};
int *p = num;

printf("%d %d %d",*p,*p++,*++p);   //3 2 2
```

对比

```
int a = 1;

printf("%d %d %d",a,a++,++a);   //3 2 3
```

**总结：**printf从右往左入栈，但是输出的顺序为：x或++x只改变x的值最后才输出，x++确定此位置的输出并立刻输出。指针：最后的\*x和\*++x并不是此时的\*x的值，不会发生改变；其他：x最后计算完后，x和++x位置的值都是此时x的值。

**更多详情知识看这个：**[(32条消息) printf的压栈顺序和输出顺序\_我在这里啊@的博客-CSDN博客\_printf语句从右到左输出](https://blog.csdn.net/qq_44194231/article/details/107007890)

### **3.用数组名作函数参数**

1.形参和实参都用数组名

```
int main(){
   int a[10];
   func(a,10);
}

int func(int x[],int y){....}
```

2.实参用数组名，形参用指针变量

```
int main(){
   int a[10];
   func(a,10);
}

void func(int *p,int y){...}
```

3.实参形参都用指针变量

```
int main(){
   int a[10],*p = a;
   func(p,10);
}

void func(int *m,int y){...}
```

4.实参用指针变量，形参用数组名

```
int main(){
   int a[10],*p = a;
   func(p,10);
}

void func(int m[],int y){...}
```

例子：下列运行后的输出结果是？

```
void func(char *c,int d){
     *c = *c + 1;
      d = d + 1;
      printf("%c,%c\n",*c,d);
}
int main(){
     char a = 'A',b = 'a';
     func(&b,a);
     printf("%c,%c\n",a,b);
     return 0;
}

//输出：b,B
        A,b
```

### 4.二维数组与指针（二维数组相当于二级指针）

```
int a[3][4] = {{1,3,5,7},{9,11,13,15},{17,19,21,23}};
```

![](https://gitee.com/lijunxi666/picture-bed/raw/master/school/QQ图片20220417213513-1024x576.png)

在指向行指针前面加以一个\*，就转换成为了列指针

```
*a
*(a+1)
```

在指向列的指针前面加一个&，就转换成了行指针

```
a[0]   //a[0]是以指向0行0列元素指针
&a[0]   //&a[0]指向0行
```

综合

```
printf("%p,%p\n",a,*a);     //0行起始地址   0行0列起始地址
printf("%p,%p\n",a[0],*(a+0));     //0行0列元素地址
printf("%p,%p\n",&a[0],&a[0][0]);      //0行起始地址  0行0列元素地址
printf("%p,%p\n",a[1],a+1);         //1行0列元素地址  1行起始地址
printf("%p,%p\n",&a[1][0],*(a+1)+0);   //1行0列元素地址
printf("%p,%p\n",a[2],*(a+2));   //2行0列元素地址
printf("%p,%p\n",&a[2],a+2);    // 2行起始地址
printf("%d,%d\n",a[1][0],*(*(a+1)+0));   //1行0列元素
printf("%d,%d\n",*a[2],*(*(a+2)+0));  //2行0列元素
```

## **五.数组指针和指针数组**

**口诀：**数组指针是指针，指针数组是数组

### **1.数组指针**

数组指针：指向数组的指针，**是指针**，数组指针一般在二维数组中使用

```
int (*p)[4];    //32位为4个字节，64位8个字节
```

**解释：**p先和\*结合，说明p是一个指针变量，然后指着指向的是一个大小为10个整型的数组。所以p是一个 指针，指向一个数组的地址，叫数组指针。

**这里要注意：**\[\]的优先级要高于\*号的，所以必须加上（）来保证p先和\*结合。

**一级指针和二级指针在数组指针的不同**

```
int num[2][2] = {1,2,3,4};
int *p = num;  //错误，一级指针不能与二级指针相等
int (*p1)[2] = num;  //正确写法
```

例子：输出二维数组的全部元素

```
int main(){
    int num[3][4] = {1,2,3,4,5,6,7,8,9,10,11,12};
    int (*p)[4];   //定义一个指数组指针
    p = num;   //num第0行的地址赋值给p
    for(int i=0;i<3;i++){
    	for(int j=0;j<4;j++){
    	    printf("%d\t",*(*(p+i)+j));
         }
         printf("\n");
     }
    
    return 0;
}
```

### **2.指针数组**

指针数组：一个存放指针的数组，**是数组**，数组指针里面放的每一个元素都放的是指针变量（地址），只能是地址；在使用的时候比较适合用来指向若干个字符串

```
int *arr3[4]; //整形指针的数组，包含4个地址，32位16个字节，64位32字节
```

![](https://gitee.com/lijunxi666/picture-bed/raw/master/school/QQ图片20220417134435.png)

```
int *arr3[4] ={1,2,3,4};   //不能写成 

int num = {1,2,3,4,5};   //正确解
int *arr[4] = {&num[0],&num[1],&num[2],&num[3]};
```

例子：对3个字符串按字母排序（从小到大）

```
#include<stdio.h>
#include<string.h>

void sort(char *p[],int a){    //形参为指针数组
	char *temp;    //定义指针变量
	for(int i=0;i<3;i++){     //排序
	   for(int j=0;j<3-i;j++){
	        if(strcmp(p[i],p[j])>0){   //调用strcmp函数
		    temp = p[i]; 
		    p[i] = p[j];
		    p[j] = temp;
		}
	}
    }
}

int main(){
    char *num[3]={"Hello","World","Good"};  //定义指针数组，分别指向3个字符串
    sort(num,3);     //调用sort函数,传入num的地址和3
    for(int i=0;i<3;i++){
	puts(num[i]);  //输出排好序的字符串
    }
    
    return 0;
}
```

### 3.**区别**

数组指针只是一个指针变量，似乎是C语言里专门用来指向二维数组的，它占有内存中一个指针的存储空间。指针数组是多个指针变量，以数组形式存在内存当中，占有多个指针的存储空间

## 六.字符指针（char\*）

### 1.**字符指针一般使用**

```
(1)
char ch = 'w';
char *p = &ch;
*p = 'q';

(2)
char *p = "Hello World";   //存储的是首元素地址
printf("%s",p);
```

_注意：字符数组名或者字符指针变量可以输出一个字符串，但对于数值型(int)的是无法用数组名全部_

### 2.**字数数组与字符指针变量的区别**

**1.字符数组有若干个元素组成，每个元素中放一个字符，而字符指针变量存放的是指针地址（字符串第一个字符地址），绝不是将字符串放到指针变量中**

**2.赋值不同，字符数组不能使用以下方法赋值**

```
char str[11];
str = "Hello World";  //数组名是地址不是常量，不能被赋值
str[0] = 'H';    //但是可以对单个数组元素进行赋值
```

而字符指针变量可以

```
char *str;
str = "Hello World";   
//赋值给str是字符串第一个元素地址，不是字符
```

3**.初始化不同**

对于字符指针：

```
char *a = "Hello World";
```

等价于

```
char *a;
a = "Hello World";  //把H的地址赋给a
注意不能写成： *a = "Hello World";
```

对于字符数组：

```
char a[12] = "Hello World";
```

不等价于

```
char a[12];
a = "Hello World";   //不能把字符串一次性全部赋值
```

**4.储存不同**

- 字符数组分配了若干个空间，用来存放个元素值
- 字符指针变量只分配了一个储存空间

5**.指针变量的值是可以改变的，但是字符数组是一个固定的值（首元素地址），无法改变**

**例子：将字符串A赋值给字符串B**

```
int main(){
    char num1[12] ="Hello World",num2[12],*p1,*p2;
    p1 = num1;
    p2 = num2;
    while(*p1!='\0'){
         *p2 = *p1;
         *p1++;*p2++;     //*p++  ==>  *(p++)
    }

    printf("num1: %s\n",num1);
    printf("num2: %s\n",num2);
	

    return 0;
}
```

## 七.指向函数的指针（一个指针）

_函数名代表函数的起始地址_

### 1.**定义指向函数的指针变量**

类型 （\*指针变量名）（函数参数列表） _\*指针变量名要括起来_

```
int (*p)(int a,int b);    //表示指针变量p指向返回值为整数且有两个整型参数的函数
```

是一个指针，指向一个函数

### 2.用函数指针变量调用函数

例子：求两数中最大值

```
int max(int a ,int b){
	return a>b?a:b;
}
 
int main(){
	int a,b;
	int (*p)(int ,int);      //定义指向函数的指针变量
	scanf("%d %d",&a,&b);
	p = max;      //使p指向max函数，max函数的入口地址赋给了指针变量p
	printf("最大值：%d",(*p)(a,b));

    return 0;
}
```

### 2.用指向函数的指针作为函数的参数

**指向函数的指针变量的一个重要途径：把函数的入口地址作为参数传到其他函数**

例如：

```
void func(int (*p1)(int,int),int (*p2)(int,int)){
	int a,b;
	a = (*p1)(1,3);   //调用p1函数
	b = (*p2)(2,5);    //调用p2函数
}
```

例子：求两数中最大值

```
int max(int a ,int b){
	return a>b?a:b;
}

int func(int a,int b,int (*p)(int,int)){    //相当于 p = max;
     return (*p)(a,b);   //调用max函数，传入a，b并返回，相当于max(a,b);
}

int main(){
    int max(int,int);   //声明max函数
    int func(int,int,int (*p)(int,int));//声明func函数，传入参为指向函数的指针变量
    int a,b;
    scanf("%d %d",&a,&b);
    printf("%d",func(a,b,max));  //传参 a,b,max函数的地址
}
```

## 八.返回指针值的函数（一个函数）

**注意：**一个函数可以返回整型值，字符值，实类值等。这个函数与以前的函数类似，只不过返回的是指针型（地址）

### 一般形式：**类型名 \*函数名(参数列表)**

```
int *func(int x,int y)
```

解释：a是函数名，调用他以后得到一个int\*型（指向整型数据）的指针。x，y是整型形参。

**例子：给定一个多维数组，输入行数，输出他的一行的所有元素**

```
#include<stdio.h>

int *find(int (*a)[4],int n){   //形参a是指向一维数组的数组指针，存放的是首元素地址
	int *b;
	b = *(a+n);    //b的值是&num[k][0]
	return (b);  //返回一个指针
}

int main(){
	int num[3][4] = {97,98,96,95,94,93,92,91,90,89,88,87};
	int *p,k;
	printf("输入行数："); 
	scanf("%d",&k);
	p = find(num,k);    //返回num[k][0]的地址
	for(int i=0;i<4;i++){
	    printf("%d ",*(p+i));   //依次输出第k行的所有元素
	}
	
    return 0;
}
```
