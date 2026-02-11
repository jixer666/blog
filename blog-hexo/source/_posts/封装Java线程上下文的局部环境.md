---
title: 封装Java线程上下文的局部环境
date: 2024-12-18 18:30:01
tags: ["Java"]
category: 学习
thumbnail: 
sticky: 
---

在 Java 中，我们可以使用 ThreadLocal 来存储当前线程的变量。有一个这样的需求：若想在一个 Java 线程中运行一段代码，这段代码的环境与当前的线程的环境互不影响，这样该怎么做？

这时候就需要使用一个局部环境来运行这段代码，解决思路大致如下：

- 使用 ThreadLocal 对上下文进行管理
- 在使用之前将当前上下文环境保存，然后将重新赋值一个上下文环境，使用完后将上下文复原

主要代码：

1、定义一个上下文类，这里放了一个 int 变量，用于模拟上下文变量

```java
public class Context {
    private int obj;

    public int getObj() {
        return this.obj;
    }

    public void setObj(int obj) {
        this.obj = obj;
    }
}
```

2、定义一个线程上下文类，用于获取和设置当前线程的上下文

```java
public class ContextHolder {
    private static final ThreadLocal<Context> CONTEXT_HOLDER = new ThreadLocal<>();

    public static Context getOldAndSetNew(Context newContext) {
        Context oldContextHolder = CONTEXT_HOLDER.get();
        CONTEXT_HOLDER.set(newContext);
        return oldContextHolder;
    }

    public static Context get() {
        return CONTEXT_HOLDER.get();
    }

    public static void set(Context newContext) {
        CONTEXT_HOLDER.set(newContext);
    }

    public static Context getIsNotNull() {
        Context context = CONTEXT_HOLDER.get();
        if (context == null) {
            context = new Context();
            CONTEXT_HOLDER.set(context);
        }
        return context;
    }
}
```

3、封装一个线程上下文工具类，用于对线程上下文环境的处理，以及对自定义的一段代码的运行

```java
public class ContextHolderUtil {

    private Runnable command;
    private Boolean isNew = false;
    private static ThreadLocal<ContextHolderUtil> CONTEXT_UTILS_HOLDER = new ThreadLocal<>();

    private ContextHolderUtil() {}

    public ContextHolderUtil(Runnable command) {
        this.command = command;
    }

    public ContextHolderUtil needNew() {
        this.isNew = true;
        return this;
    }

    public static ContextHolderUtil run(Runnable command) {
        ContextHolderUtil contextHolderUtil = new ContextHolderUtil(command);
        return contextHolderUtil;
    }

    public void go() {
        ContextHolderUtil preContextUtil = CONTEXT_UTILS_HOLDER.get();
        Context preContext = null;
        if (isNew) {
            preContext = ContextHolder.getOldAndSetNew(null);
        }
        try {
             command.run();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (isNew) {
                ContextHolder.set(preContext);
            }
            CONTEXT_UTILS_HOLDER.set(preContextUtil);
        }
    }
}
```

主要的使用的核心代码

```java
ContextHolderUtil.run(() -> {
    Context context = ContextHolder.getIsNotNull();
	// 这里写局部环境的具体逻辑
}).needNew().go();
```

测试：通过断点调试，发现每次执行核心代码都会新开辟一段局部环境来运行，并不会影响当前线程 的上下文的环境

```java
public class Main {
    public static void main(String[] args) {
        Context context = new Context();
        context.setObj(3);
        ContextHolder.set(context);

        ContextHolderUtil.run(() -> {
            Context context1 = ContextHolder.getIsNotNull();
            context1.setObj(2);
            System.out.println(ContextHolder.get().getObj());
        }).needNew().go();

        System.out.println(ContextHolder.get());

        ContextHolderUtil.run(() -> {
            Context context1 = ContextHolder.getIsNotNull();
            context1.setObj(1);
            System.out.println(ContextHolder.get().getObj());
        }).needNew().go();

        System.out.println(ContextHolder.get());
    }
}
```