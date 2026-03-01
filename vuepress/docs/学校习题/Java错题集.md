# Java错题集

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

## Java语言概述

【单选题】Java为移动设备提供的平台是      。

- _A、_JDK5.0
- _B、_J2SE
- _C、_J2EE
- _D、_J2ME

正确答案： D 我的答案：D

【单选题】运行Java程序需要的工具软件所在的目录是\_\_\_\_\_\_。

- _A、_JDK的lib目录（存放发开工具所需的附加类库和支持文件）
- _B、_JDK的demo目录（存放Java的演示程序）
- _C、_JDK的bin目录（存放Java编译，执行和调试的工具）
- _D、_JDK的jre目录（Java运行时环境目录）
- E_、_JDK的db目录（存放Java数据库有关的程序文件）
- F_、_JDK的inlude目录（存放本地代码编程需要的C头文件）

正确答案： C 我的答案：C

【单选题】在Java中,负责对字节代码解释执行的是\_\_\_\_\_\_。

- _A、_垃圾回收器
- _B、_虚拟机
- _C、_编译器
- _D、_多线程机制

正确答案： B 我的答案：B

【单选题】在JDK目录中,Java程序运行环境的根目录是\_\_\_\_\_\_。

- _A、_jre
- _B、_bin
- _C、_demo
- _D、_lib

正确答案： A 我的答案：A

【填空题】JDK的中文意思是\_\_\_\[填空1\]\_\_\_\_,JVM的中文意思是\_\_\_\[填空2\]\_\_\_,JRE的中文意思是\_\_\_\[填空3\]\_\_。

正确答案：_第一空：_ Java开发包;Java开发工具包

_第二空：_ Java虚拟机

_第三空：_ Java运行环境;Java运行时环境

【填空题】安装java开发包后,可以发现java的可执行文件,如编译器、解释器都放在\_\_\_\[填空1\]\_\_目录中(仅写目录名),其中java编译器是\_\_\_\[填空2\]\_\_文件(注意写文件全名)。

正确答案：_第一空：_ bin_第二空：_ javac.exe

【单选题】Java编译器自动导入的包是(     )。

- _A、_java.lang包
- _B、_java.util包
- _C、_java.awt包
- _D、_java.text包

正确答案： A 我的答案：A

【单选题】设Hello的代码为:  
class Hello{  
    public static void main(String args){  
        System.out.println("hello");  
    }  
}

下面说法正确的是:(  )

- _A、_Hello.java无法通过编译,因为main方法的声明方式不对
- _B、_Hello.java可以通过编译并正常运行,结果输出hello
- _C、_Hello.java可以通过编译,但是无法运行,因为该文件没有public类
- _D、_Hello.java可以通过编译,但是运行该程序会出现异常,不会打印hello

正确答案： D 我的答案：C

【单选题】下列对Java源程序结构的叙述中,错误的是\_\_\_\_\_\_。

- _A、_接口定义允许0或多个
- _B、_import语句必须在所有类定义之前
- _C、_一个java源文件中的public class类定义允许0或多个
- _D、_Package语句允许0或1个

正确答案： C 我的答案：C

【单选题】用Java 虚拟机执行类名为 Hello 的应用程序的正确命令是\_\_\_\_\_\_。

- _A、_java Hello
- _B、_java Hello.class
- _C、_Hello.class
- _D、_java Hello.java

正确答案： A 我的答案：A

【填空题】**如果一个Java源程序文件中定义有5**个**类,但其中有1个是内嵌类**。则使用Sun公司的JDK编译器javac编译该源程序文件,将产生\_\_\[填空1\]\_\_个扩展名为\_\_\[填空2\]\_\_\_的字节码文件。

正确答案：_第一空：_ 5，_第二空：_ class;.class

- **Java定义多少个类有生成多少个字节码；**
- **Java编译是javac 公共类名.java**
- **Java执行是java mian方法所在的类名**

【填空题】**如果一个Java源程序文件中定义有A、B两个类,另外在A中还定义了一个内嵌类A1**。则使用Sun公司的JDK编译器javac编译该源程序文件,将产生\_\_\[填空1\]\_\_个扩展名为\_\_\[填空2\]\_\_\_的字节码文件。

正确答案：_第一空：_ 3，_第二空：_ class

【判断题】无论Java源程序包含几个类的定义,若该源程序文件以A.java命名,编译后生成的都只有一个名为A的字节码文件。正确答案：_×_， 我的答案：_×_

【判断题】一个程序里有且仅有一个公共类。正确答案：_×_ ，我的答案：_√_

【判断题】Java程序对计算机硬件平台的依赖性很高正确答案：_×_ ，我的答案：_×_

## Java语言基础

- **低于32位整型变量运算结果会自动转为int**
- **字面值运算不会提升：short a = 20 + 30;**

- **break；break 标签**
- **continue；continue 标签**

```
start:
for(int i = 0; i < 3; i++){
    for(int j = 0; j < 4; j++){
        if(j == 2) break start;
    }
    System.out.println(i+":"+j)
}
// 0:0   0:1
start:
for(int i = 0; i < 3; i++){
    for(int j = 0; j < 4; j++){
        if(j == 2) continue start;
    }
    System.out.println(i+":"+j)
}
// 0:0  0:1  1:0  1:1  2:0  2:1
```

【单选题】下面属于Java 关键字的是\_\_\_\_\_\_。

- _A、_IF
- _B、_NULL
- _C、_do
- _D、_While （W大写。。）

正确答案： C 我的答案：C

<table><tbody><tr><td>abstract</td><td>assert</td><td>boolean</td><td>break</td><td>byte</td></tr><tr><td>case</td><td>catch</td><td>char</td><td>class</td><td>const</td></tr><tr><td>continue</td><td>default</td><td>do</td><td>double</td><td>else</td></tr><tr><td>enum</td><td>extends</td><td>final</td><td>finally</td><td>float</td></tr><tr><td>for</td><td>goto</td><td>if</td><td>implements</td><td>import</td></tr><tr><td>instanceof</td><td>int</td><td>interface</td><td>long</td><td>native</td></tr><tr><td>new</td><td>package</td><td>private</td><td>protected</td><td>public</td></tr><tr><td>return</td><td>strictfp</td><td>short</td><td>static</td><td>super</td></tr><tr><td>switch</td><td>synchronized</td><td>this</td><td>throw</td><td>throws</td></tr><tr><td>transient</td><td>try</td><td>void</td><td>volatile</td><td>while</td></tr></tbody></table>

Java关键字

【单选题】\_\_\_\_\_\_是short型的取值范围。

- _A、_0~2^16-1
- _B、_\-2^7~2^7-1
- _C、_\-2^15~2^15-1
- _D、_\-2^31~2^31-1

正确答案： C 我的答案：C

<table><tbody><tr><td>数据类型</td><td>字节数</td><td>位数</td><td>取值范围</td></tr><tr><td>byte</td><td>1</td><td>8</td><td>-2^7~2^7-1</td></tr><tr><td>short</td><td>2</td><td>16</td><td>-2^15~2^15-1</td></tr><tr><td>int</td><td>4</td><td>32</td><td>-2^31~2^31-1</td></tr><tr><td>long</td><td>8</td><td>64</td><td>-2^63~2^63-1</td></tr><tr><td>float</td><td>4</td><td>32</td><td>10E38</td></tr><tr><td>double</td><td>8</td><td>64</td><td>10E308</td></tr><tr><td>boolean</td><td>1</td><td>1</td><td>ture和false</td></tr><tr><td>char</td><td>2</td><td>16</td><td>0~2^16-1</td></tr></tbody></table>

Java数据范围

【单选题】下面的强制转化,哪句是对的?(      )

- _A、_char c= 'a';   String s=(String)c;
- _B、_String s="102"; int x=(int)s;
- _C、_int i=0;        boolean b=(boolean)i;
- _D、_int i=57;      char c=(char)i;

正确答案： D 我的答案：D

【单选题】阅读下列代码 

public class Test2005

{ 

  public static void main(String args\[\])

  { 

    System.out.println(~(0xa5)&0xaa); 

  }

} 

其运行结果是\_\_\_\_\_\_。

- _A、_0xa5
- _B、_10
- _C、_0x50
- _D、_0xaa

正确答案： B 我的答案：B

【填空题】在Java语言中,boolean逻辑变量或常量只有\_\_\_\_\[填空1\]\_\_\_\_和\_\_\_\_\[填空2\]\_\_\_\_两个值,分别代表真和假。  
char型变量最小值是\_\_\_\_\_\_\[填空3\]\_\_\_\_\_(填整数)、最大值是\_\_\_\_\_\_\[填空4\]\_\_\_\_\_(填整数),byte型变量最小值是\_\_\_\_\[填空5\]\_\_\_\_(填整数)

正确答案：_第一空：_ true，_第二空：_ false，_第三空：_ 0，_第四空：_ 65535，_第五空：_ \-128

【单选题】有关switch语句错误的是（）

- A、在同一个switch语句中，case后的值可以相同（不能相同）
- _B、_default语句可有可无
- _C、_没有break语句，也能编译运行
- _D、_switch语句中的表达式的值不能是double类型（在switch中不能是long,double,float,boolean）

正确答案：A 我的答案：D

**算术右移符：>>，算术左移符：<<，逻辑右移符（无符号右移）：>>>**

【单选题】在Java中，用package语句说明一个包，该包的层次结构必须是（）

- A、与文件目录的层次相同
- B、与文件大小相同
- C、与文件类型相同
- D、与文件结构相同

正确答案：A

下列声明正确的是()

- A、public abstract class Car{~~~}
- B、abstract private move(){~~~}
- C、portected private number; （protected和private不能一起用）
- D、abstract final class Tress{~~~} （abstarct和final不能一起用）

正确答案：A

【单选题】ClassA为已定义的类名，下列声明class A类的对象cal语句正确的是（）

- cal ClasssA();
- public ClassA ca = new ClassA();
- ClassA ca = new class();
- ClassA ca = ClassA();

正确答案：B

【单选题】下列正确的是（）

- A、定义抽象方法需要有方法的返回类型，名称，参数列表和方法体（无方法体）
- B、用final修饰的遍历，在程序中可对这个变量的值进行更改（没法更改）
- final可以修饰类，属性，方法
- abstract可修饰类，属性，方法（没法修饰属性）

正确答案：C

【单选题】抽象方法：\_\_\_\_

- A、可以有方法体
- B、可以出现在非抽象类中
- C、抽象类中的方法都是抽象方法
- D、是没有方法体的方法

正确答案：D

【判断题】利用StringBuffer s = new StringBuffer("32")创建的字符串s长度为2容量为18

正确答案：错，我的答案：对

### 面向对象知识

- **this不用出现在static方法中，this只能用非static方法中**
- **静态（公共静态区）->main方法->实例（堆内存中）**

【单选题】下列说法正确的是( )

- _A、_任何类都可以被继承 （String类无法）
- _B、_任何类都可以实例化对象 （Sy类无法）
- _C、_属性必须是简单类型变量
- _D、_属性既可以是一个简单类型变量,也可以是一个对象

正确答案： D 我的答案：D

【单选题】下列说法错误的是( )

- _A、_抽象的目的就是区别对象事物之间的本质和不同,面向对象编程(OOP)的实质就是利用类来建立对象的抽象模型。
- _B、_类的对象所具有的行为或者说是操作是由定义的方法来实现的。
- _C、_建立一个事物的抽象模型,本质上就是定义表达该事物所具有的行为。（和属性）
- _D、_使用类来建立抽象模型,是通过在类中定义属性和方法来实现的。

正确答案： C 我的答案：C

【单选题】下面关于java中类的说法哪个是不正确的( )

- _A、_一个java文件中可以有多个class定义。
- _B、_类体中只能有变量定义和成员方法的定义,不能有其他语句。（还可以有常量。。）
- _C、_构造方法是类中的特殊方法。
- _D、_类一定要声明为public的,才可以执行。

正确答案： D 我的答案：B

【单选题】下面关于类和对象之间关系的描述,正确的是( )

- _A、_类是对象的实例化
- _B、_抽象与实例化的关系
- _C、_包含关系
- _D、_连接关系

正确答案： B 我的答案：B

【判断题】面向对象是相对于面向过程而言的,面向过程强调的是功能的实现过程,面向对象强调的是将功能封装进对象,强调具备功能的对象。正确答案：_√_ 我的答案：_√_

【单选题】关于成员变量和局部变量的说法错误的是(  )

- _A、_int类型局部变量默认初始值为0。
- _B、_引用类型成员变量默认初始值为空指针。
- _C、_成员变量一般定义为私有类型。
- _D、_实例成员变量随着对象的创建而存在,随着对象的消失而消失,存储在堆内存中。

**int类型在Java中，若果作为类成员声明，不初始化值，会被默认初始化为0；如果作为方法的局部变量来声明，不进行初始化的话 会在编译期报错，无法通过编译。**

![](https://gitee.com/lijunxi666/picture-bed/raw/master/school/3b6bb9ca5764410b88a0f1270da31cfb.png)

【单选题】方法定义:  
public static int getLength();  
下面说法正确的是\_\_\_\_\_\_:

- _A、_该方法的修饰符有一个:public
- _B、_该方法的修饰符有三个:public static int
- _C、_该方法的修饰符有两个:public static
- _D、_该方法的修饰符有两个:static int

正确答案： C 我的答案：C

【单选题】关于变量定义:  
protected final static int a=3;  
下列说法正确的是(   )。

- _A、_语句错误,因为final static不能同时修饰一个变量。
- _B、_语句错误,因为protected  static不能同时修饰一个变量。
- _C、_语句错误,因为protected final  static不能同时修饰一个变量。
- _D、_该语句是正确的。

正确答案： D 我的答案：D

【单选题】在下面附属类方法中的下划线处,应填入的正确参数是\_\_\_\_\_\_\_\_。

public void writeData(\_\_\_\_\_\_\_) throws IOException

{

     GregoranCalendar calendar=new GregorianCalendar()

     calendar.setTime(hireDay);

     out.println(name+"|"

     +salary+"|"

     +calendar.get(Calendar.YEAR)+"|"

     +(calendar.get(Calendar.MONTH)+1)+"|")

}

- _A、_"employee.dat"
- _B、_PrintWriter out
- _C、_Employee\[\] e
- _D、_BufferedWriter

正确答案： B 我的答案：B

【判断题】方法若有多个修饰符,各修饰符的先后次序可以交换。正确答案：_√_ 我的答案：_√_

【判断题】所有的变量在使用前都必须进行初始化,方法中的变量必须显示初始化。正确答案：_√_ 我的答案：_×_

【判断题】在Java程序中定义的类有两种成员:数据成员、成员方法。正确答案：_√_ 我的答案：_×_

【单选题】对于this关键词的在程序中的应用,下列叙述不正确的是(      )。

- _A、_return this;表示把自身返回给调用者。
- _B、_this.width;调用该类的静态变量。（不能调用static）
- _C、_this.setWidth();调用该类的实例方法。
- _D、_this();调用该类的无参构造方法。

正确答案： B 我的答案：B

【单选题】阅读下面程序

public class MyVal{

  public static void main (String args \[\]){

    MyVal m=new MyVal ();

     m.amethod ();

}

public void amethod (){

  boolean b\[\]=new boolean \[5\];

  System.out.print(b\[0\]);

}

}

程序编译或运行结果是\_\_\_\_\_\_。

- _A、_false
- _B、_0
- _C、_null
- _D、_编译不通过

正确答案： A 我的答案：D

【判断题】未标记任何修饰符的类成员只能由该类的方法访问。正确答案：_×_ 我的答案：_×_

【判断题】访问一个类的任何数据成员或成员方法,都必须以类的对象为前缀。正确答案：_×_ 我的答案：_√_

**静态方法不用，可以直接调用不需要对象**

【单选题】设有如下代码:  
class test{  
     long a\[\]=new long\[10\];  
     public static void main(String args\[\]){  
        System.out.print(a\[0\]);  
     }  
}  
下面叙述正确的是:(   )。

- _A、_运行产生异常报错
- _B、_输出0
- _C、_输出0L
- _D、_编译不通过报错

正确答案： D 我的答案：D

【判断题】在Java中,同一个类的实例方法可以调用该类的实例变量和其他实例方法,但是不能调用该类的类变量和类方法。正确答案：_×_ 我的答案：_×_

【填空题】类方法是由\_\_\[填空1\]\_\_关键修饰的方法,它\_\_\_\[填空2\]\_\_(填:能、不能)访问该类的实例变量。

正确答案：_第一空：_ static，_第二空_： 不能

【填空题】\_\_\_\[填空1\]\_\_\_方法是不能有返回值,连void也不能写;\_\_\_\[填空2\]\_关键词修饰的方法可以由类直接调用。

正确答案：_第一空：_ 构造，_第二空：_ static

【单选题】以下关于Object类说法错误的是（ ）

- _A、_一切类都直接或间接继承自Object类
- _B、_Object类在java.lang包中
- _C、_Object类中定义了toString()方法
- _D、_**接口也默认继承Object类**

正确答案： D 我的答案：D

【单选题】Java语言的类间的继承关系是( )

- _A、_单重的
- _B、_多重的
- _C、_线性的
- _D、_网状的

正确答案： A 我的答案：A

【单选题】关于继承的说法正确的是：\_\_\_\_\_\_

- _A、_子类能访问父类所有的属性和方法
- _B、_子类只能访问父类的非私有属性和方法
- _C、_子类只继承父类public方法和属性
- _D、_子类只继承父类的方法，而不继承属性

正确答案： B 我的答案：B

【填空题】读程序，找出错误行  
1、final class A{  
2、    int x;  
3、    final void mA(){  
4、        x=x+1;  
         }  
     }  
5、class B extends A{  
6、    final A a=new A();  
7、    void  mA(){  
8、        a.x=20;  
9、       System.out.println(a);  
        }  
    }  
哪两行是错误的？  
第\[填空1\]行，第\[填空2\]行

正确答案：_第一空：_ 5;1 _第二空：_ 7;3

【单选题】在Java中，运行时多态的实现能大大提高程序的可维护性及可扩展性，那么实现运行时多态的步骤包括以下几个方面除了（ ）。

- _A、_运行时，根据实际实例化的对象类型动态决定使用哪个方法。
- _B、_子类中重写（覆盖）父类的某一个方法。
- _C、_把父类类型作为对象定义类型，引用的却是子类对象。
- _D、_子类中重载父类的某一个方法。

正确答案： D 我的答案：A

【单选题】在Java中，在同一个类中可同时定义许多同名的方法，而且这些方法的形式参数的个数、类型、顺序全部相同，这种面向对象程序特性称为\_\_\_\_\_\_。

- _A、_覆盖
- _B、_隐藏
- _C、_重载
- _D、_Java不支持此特性

正确答案： D 我的答案：C

【单选题】在Java中，一个类可同时定义许多同名的方法，这些方法的形式参数个数、类型或顺序各不相同，传回的值也可以不相同。这种面向对象程序的特性称为

- 隐藏
- 覆盖
- 重载
- Java不支持此特性

正确答案：C

**重载要求同名且参数个数不同，参数类型不同，仅有返回值不同不能区分重载**

【单选题】覆盖与重载的关系是\_\_\_\_\_\_。

- _A、_覆盖只有发生在父类与子类之间，而重载可以发生在同一个类中
- _B、_覆盖方法可以不同名，而重载方法必须同名
- _C、_final修饰的方法可以被覆盖，但不能被重载（可以重载但不能覆盖）
- _D、_覆盖与重载是同一回事

正确答案： A 我的答案：A

【单选题】假设以下代码

public class Parent {

  public int addValue( int a, int b) {

  int s;

  s = a+b;

  return s;

  }

}

  class Child extends Parent {

  }

选项中\_\_\_\_\_\_方法可以正确加入类Child中，且父类的方法不会被覆盖。

- _A、_int addValue( int a, int b ){// do something...}
- _B、_public void addValue (){// do something...}
- _C、_public int addValue( int a, int b )throws MyException {//do something...}
- _D、_public float addValue ( int a ,int b, float b=1.0 ){// do something...}

正确答案： B 我的答案：B

【填空题】在Java程序中，通过类的定义只能实现单重继承，但通过\_\_\_\[填空1\]\_\_\_和\_\_\_\[填空2\]\_\_可以间接实现多重继承关系，这些方式在事件处理中很常见。

正确答案：_第一空：_ 内嵌类;类中类;内部类;innerClass;嵌套类， _第二空：_ 接口;interface

【单选题】下列关于接口中的成员定义，正确的是（）

- _A、_static void method();（接口中的 static 方法应具有主体）
- _B、_public final void method; (修饰符 final 和 abstract 的组合非法);
- _C、_void method();
- _D、_int max; （接口中必须是常量要赋初值）

正确答案： C 我的答案：D

【单选题】下列叙述中，错误的是\_\_\_\_\_。

- _A、_通过接口说明类所实现的方法
- _B、_接口与类的层次无关
- _C、_接口与存储空间有关
- _D、_通过接口可了解对象的交互界面

正确答案： C 我的答案：C

【单选题】下列命题中，错误的是      。

- _A、_Java 编程时，要求应尽量不用公共变量
- _B、_Java 编程时，要求应尽量少用公共变量
- _C、_Java 编程时，要求应尽量多用公共变量
- _D、_Java 编程时，要求应尽量使用私有变量

正确答案： C 我的答案：A

【单选题】下列\_\_\_\_\_\_修饰符可以使在一个类中定义的成员变量只能被同一个包中的类访问。

- _A、_private
- _B、_无修饰符
- _C、_public
- _D、_protected

正确答案： B 我的答案：B

<table><tbody><tr><td>修饰符</td><td>同一个类</td><td>同一个包的类</td><td>不同包的子类</td><td>任何类</td></tr><tr><td>private</td><td>1</td><td></td><td></td><td></td></tr><tr><td>缺省</td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>protected</td><td>1</td><td>1</td><td>1</td><td></td></tr><tr><td>public</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table>

类成员访问权限比较

【单选题】为AB类的一个无形式参数无返回值的方法method书写方法头，使得使用类名AB作为前缀就可以调用它，该方法头的形式为      。

- _A、_public  void  method( )
- _B、_static  void  method( )
- _C、_final  void  method( )
- _D、_abstract  void  method( )

正确答案： B 我的答案：B

【填空题】接口之间，类之间继承用extends， 类与接口之间继承用implements

【单选题】编译运行如下Java代码之后的输出结果是（   ）。   
 class Base {   
       public void methodB(){   
              System.out.print ("Base methodB");  
        }

 }   
class Child extends Base{   

    public void methodB(){ // 为与父类形成覆盖

               System.out.print ("Child methodB");   
       }

 }  
public class Sample {  
        public static void main(String\[\] args) {

               Base base= new Child();   
              base.methodB();   
       }   
}

- _A、_Child methodB
- _B、_编译错误
- _C、_Base methodB Child MethodB
- _D、_Base methodB

正确答案： A 我的答案：

_与其类似题_

【单选题】编译运行如下Java代码之后的输出结果是（   ）。   
 class Base {   
       public void method(){   
              System.out.print ("Base method");  
        }

 }   
class Child extends Base{   

    public void methodB(){ // 未为与父类形成覆盖

               System.out.print ("Child methodB");   
       }

 }  
public class Sample {  
        public static void main(String\[\] args) {

              Base base= new Child();   
              base.methodB();  // 编译器按照父类成员进行检查，执行调用子类的方法  
       }   
}

- _A、_Child methodB
- _B、_编译错误
- _C、_Base method Child MethodB
- _D、_Base method

正确答案： B 我的答案：

**此题于上一题的区别在于这题子类父类并没有实现覆盖，因此子类的用法父类能用**

### Java中的常用类

**String类**

- string.length()：返回字符串长度
- string. substring(int 起点, int 终点) / string.substring(int 起点到结束)：返回字串，左闭右开
- string.toUpperCase()：返回转大写
- string.toLowerCase()：返回转小写
- string.trim()：返回删除前后空白字符
- string.concat(String str)：返回将string与str链接起来的新字符串
- string.replace(char old, char new)：返回将old字符全部替换为new字符的字符串
- string.chaAt(int index)：返回下标为index的字符
- string.valueOf(int/double/复合数据类型..)：将这些全部转为字符串
- string.indexOf(char ch) / string.indexOf(char ch, int 开始位置)：返回第一次出现ch的位置，无就返回-1
- string.lastIndexOf(char ch) / string.lastIndexOf(char ch, int 最后位置)：返回最后一次出现的位置
- string.toCharArray()：返回将字符串转为数组的数组
- string.getChars(int 开始, int 结束, char\[\] 数组, int 数组起始位置)：将string(开始，结束)复制到数组的起始位置
- string.compareTo(Stiring str)：字符串比较（负数小正数大）
- string.equals(String str)：比较字符串是否相等
- string.split(String str)：返回将字符串拆分成以str为分割的字符串数组

**StringBuffer和StringBuilder**

- void setCharAt(int index, char)：用ch修改index位置上的字符
- StirngBuffer apend(Stirng str)：末尾添加字符串【重载，可以是int，long，float...】
- StringBuffer insert(int index, String str)：在index位置插入str【重载，可以是int，long，float...】
- StringBuffer deleteCharAt(int index)：删除指定位置，后往前移
- StringBuffer deleteCharAt(int start，int end)：删除从start到end的字符，左闭右开
- StringBuffer replace(int start, int end, String str)
- StringBuffer substring(int start, int end)

【单选题】下列数组初始化形式正确的是( )。

- _A、_int t3\[3\]\[2\]={1,2,3,4,5,6};
- _B、_int t2\[\]\[\]={1,2,3,4,5,6}.
- _C、_`int t1[][]={{1,2},{3,4},{5,6}};`
- _D、_int t4\[\]\[\]; t4={1,2,3,4,5,6};

正确答案： C 我的答案：A

数组声明（二维同样也是）： int num\[\]; int\[\] num：括号里不能放数字， 创建数组时new \[size\]括号里才能放数字

```
 int a[][] = new int [2][]; //这样创建也行只是浪费空间
 a[0] = new int[3];
 a[1] = new int[2];
```

【单选题】以下 ()表达式是不合法的。

- _A、_String  x="Hello";  int  y=9;  x=x+y;
- _B、_String  x="Hello";  int  y=9;  x+=y;
- _C、_String  x="Hello";  int  y=9;  if(x==y)  { }
- _D、_String  x=null;  int  y=(x!=null)&&(x.length()>0) ? x.length() : 0

正确答案： C 我的答案：D

【单选题】Java中的集合类包括ArrayList、LinkedList、HashMap等类，下列关于集合类描述不正确的是（    ）

- _A、_ A.ArrayList和LinkedList均实现了List接口
- _B、_ArrayList的查询速度比LinkedList快
- _C、_添加和删除元素时，ArrayList的表现更佳
- _D、_HashMap实现Map接口，它允许任何类型的键和值对象，并允许将null用作键或值（主要是为了D答案）

正确答案： C 我的答案：C

【单选题】关于迭代器说法错误的是（  ）

- _A、_List集合有特有迭代器
- _B、_last()用于取出迭代器的最后一个元素（无该用法）
- _C、_迭代器的hasNext()方法返回值是布尔类型
- _D、_迭代器是取出集合元素的方式

正确答案： B 我的答案：A

【单选题】在JAVA中，LinkedList类和ArrayList类同属于集合框架类，下列（  ）选项中的方法是LinkedList类有而ArrayList类没有的。 

- _A、_add(Object o) 
- _B、_add(int index,Object o) 
- _C、_remove(Object o) 
- _D、_removeLast() 

正确答案： D 我的答案：D

【单选题】下列哪种不是List集合的遍历方式 (     )

- _A、_Iterator迭代器实现 
- _B、_get()和size()方法结合实现  
- _C、_get()和length()方法结合实现（无length()的用法）
- _D、_增强for循环实现

正确答案： C 我的答案：B

【单选题】关于HashMap集合说法正确的是(   )

- _A、_HashMap集合是单列集合
- _B、_HashMap集合不允许存储重复键
- _C、_HashMap集合不允许存储重复值
- _D、_HashMap集合线程是安全的

正确答案： B 我的答案：C

【判断题】s. compareTo(s1)返回结果大于或者等于0，说明都能在s中找到s1。正确答案：_×_  我的答案：_×_

【判断题】对于简单数据类型和复合数据类型，都可以采用String.valueOf()方法，转化为字符串。正确答案：_√_  我的答案：_√_ （String.valueOf(xxx)：将xx类型转为字符串）

【判断题】利用Calendar cal=new Calendar();创建的时间为当前时间。正确答案：_×_  我的答案：_×_ （Calendar是静态变量，不能是实例化，可以用Calendar cal=Calendar.getInstance()获取当前时间）

【判断题】利用Int.parseInt("198");可以把字符串"198"转化为数字，而且不会报异常。正确答案：_×_ 我的答案：_√_ （Integer.paseInt）

【判断题】利用StringBuffer s = new StringBuffer ("abc");创建的字符串s长度为3，容量为16。正确答案：_×_  我的答案：_√_ （19）

【判断题】已知Calendar对象cal，调用cal.add(Calendar.MONTH, -8); 表示对月份值的减8。正确答案：_√_  我的答案：_√_

### 用户界面设计

【单选题】采用下列哪种布局，控件的位置会根据Frame的大小而发生变化？（ ）

- _A、_FlowLayout
- _B、_CardLayout
- _C、_GridLayout
- _D、_BorderLayout

正确答案： A 我的答案：C

【单选题】关于下拉列表(JComboBox)，说法正确的是（  ）

- _A、_JComboBox在设定条件后，可以一次性选择多个选项（Jlist才可以）
- _B、_JComboBox可以通过add方法增加选项（addItem）
- _C、_JComboBox在设定条件后，可以在框内输入内容
- _D、_JComboBox可以通过getSelectedItem()方法，获取所选列表选项对应的编号（getSelectedItem获取的是对应的文字信息，getSelectedIndex才是编号）

正确答案： C 我的答案：D

【单选题】容器类java.awt.Container的父类是\_\_\_\_\_\_。

- _A、_java.awt.Frame
- _B、_java.awt.Windows
- _C、_java.awt.Component
- _D、_java.awt.Panel

正确答案： C 我的答案：C

【单选题】下面      事件监听器在Java中无事件适配器。

- _A、_WindowListener
- _B、_MouseListener
- _C、_KeyListener
- _D、_ActionListener

正确答案： D 我的答案：D

【填空题】采用\_\_\[填空1\]\_\_布局管理器进行布局，窗口中的按钮大小不会随着窗口的大小改变而改变，\_\_\_\[填空2\]\_\_\_布局管理器进行布局，增加控件需指明东西南北方向（填写布局管理器的英文类名）。

正确答案：_第一空：_ FlowLayout _第二空：_ BorderLayout

【判断题】GridLayout布局时，当容器被重新设置大小后，各组件的大小不变，但相对位置会改变。正确答案：_×_  我的答案：_×_

【填空题】给窗口设定背景颜色的方法是\_\_\[填空1\]\_，给文本框设定文字颜色的方法是\_\[填空2\]\_\_。（填写方法名，不用带参数）

正确答案：_第一空：_ setBackground;setBackground() _第二空：_ setForeground;setForeground()

【判断题】JFrame类属于容器，所以才没有setFont()**等**方法。错

【单选题】Swing比Awt相比新增的布局管理器是（A）

__A、_BoxLayout  
_B、_GridLayout  
_C、_GridBagLayout  
_D、_CardLayout_

**Java awt类中的布局管理器：FlowLayout（JPanel默认），BorderLayout（Windows默认，Frame默认），GridLayout，CardLayout，GridBagLayout，另外，Swing中新增的BoxLayout也是一种**

【单选题】需要在文件中写入数据，则应该用那个（A）

_A、_FileOutputStream  
_B、_InputStreamReader  
_C、_OutputStreamWriter  
_D、_FileInputStream

Java所有的输入流都是inputStream和Reader类的子类，他们都继承了read()方法用于读取数据传来的数据。对

Java所有输出流都是继承了OutputStream和Writer类的子类，它们都继承了writer()方法用于数据输出到接收器。对

【填空题】IOException：编译器是否必须处理异常（是），ArithmeticExcertion：编译器是否要求必须处理异常（否），自定义异常AgeException：（是）

**非检查异常：**NullPointerException，ArithmeticException，ClassCastException，ArrayIndexOutOfBoundsException，NumberFormatException

**检查异常：**除了RuntimeExcption都是
