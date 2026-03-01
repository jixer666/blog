# ThreadPoolExecutor 源码解读

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-12-22</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

先从一段简单的线程池使用代码入手

```java
ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(2, 3, 3, TimeUnit.SECONDS, new ArrayBlockingQueue<>(10)); // 创建线程池
threadPoolExecutor.execute(() -> { // execute方法执行
    System.out.println("execute 任务中");
});
try {
    Future<?> result = threadPoolExecutor.submit(() -> { // submit 方法执行
        System.out.println("submit 任务中");
        return 123;
    });
    System.out.println("submit 任务结果：" + result.get());
} catch (Exception e) {
    e.printStackTrace();
}
```

## 问题思考

在阅读源码之前，笔者有几个关于线程池的几个问题：

- 线程池是如何从任务队列中获取到任务的？是有一个循环一直获取吗？会不会影响性能？
- 线程池的核心线程和非核心线程是如何控制的？当没有任务时，核心线程和非核心线程会死亡吗？

带着这几个问题去阅读就明了了许多

## 原理实现

### 构造方法

ThreadPoolExecutor 的构造方法代码如下：

```java
public ThreadPoolExecutor(int corePoolSize,  // 核心线程数
                          int maximumPoolSize,  // 最大线程数
                          long keepAliveTime,  // 等待工作的空闲线程的超时时间
                          TimeUnit unit, // 超时时间单位
                          BlockingQueue<Runnable> workQueue,  // 任务队列
                          ThreadFactory threadFactory, // 线程创建所需的线程工厂
                          RejectedExecutionHandler handler // 拒绝策略) {
    if (corePoolSize < 0 ||
        maximumPoolSize <= 0 ||
        maximumPoolSize < corePoolSize ||
        keepAliveTime < 0)
        throw new IllegalArgumentException();
    if (workQueue == null || threadFactory == null || handler == null)
        throw new NullPointerException();
    this.acc = System.getSecurityManager() == null ?
            null :
            AccessController.getContext();
    this.corePoolSize = corePoolSize;
    this.maximumPoolSize = maximumPoolSize;
    this.workQueue = workQueue;
    this.keepAliveTime = unit.toNanos(keepAliveTime);
    this.threadFactory = threadFactory;
    this.handler = handler;
}
```

### 线程池的状态

线程池有五种状态

- 运行中，可以接受新的任务
- 关闭，不能再接受新的任务，但已经提交的任务会继续执行
- 停止，不能再接受新的任务，而且已经提交的任务会被取消
- 清理，通常发生在所有工作线程都已终止，且线程池正准备销毁
- 终止，所有任务都已完成，且所有资源都已释放

```java
private static final int RUNNING    = -1 << COUNT_BITS; 
private static final int SHUTDOWN   =  0 << COUNT_BITS; 
private static final int STOP       =  1 << COUNT_BITS;
private static final int TIDYING    =  2 << COUNT_BITS;
private static final int TERMINATED =  3 << COUNT_BITS;
```

执行流程图：

![](https://img2020.cnblogs.com/blog/1158841/202006/1158841-20200613171625982-248501754.png)

### 线程池中的属性

#### 核心属性 ctl

线程池中的核心属性 ctl，代表的含义是线程池的状态和工作线程数

```java
private final AtomicInteger ctl = new AtomicInteger(ctlOf(RUNNING, 0));
private static int ctlOf(int rs, int wc) { return rs | wc; } // rs：运行状态，完成：工作线程数
```

之所以能够代表两种状态，原因：

```java
private static int runStateOf(int c)     { return c & ~CAPACITY; } // 获取线程池状态
private static int workerCountOf(int c)  { return c & CAPACITY; } // 获取工作线程数量
```

CAPACITY 默认为 536870911，分别进行按位与运算，同位1为1，否则为0。使用两种函数取值，是不一样的，就达到了能够表示两种含义

ctl 默认为 RUNNING 状态，值为 11100000000000000000000000000000，runStateOf 取的是高3位，workCountOf 取的是低29位，两个变量之间互不干扰


| runStateOf    | workerCountOf                     |
| ------------- | --------------------------------- |
| c & ~CAPACITY | c & 00000000000000000000000000000 |
| c & CAPACITY  | c & 11111111111111111111111111111 |

#### mainLock 锁

mainLock 是一把可重入锁，在多出地方用到，例如在添加工作线程的和移除工作线程的时候都会用到

```
private final ReentrantLock mainLock = new ReentrantLock();
```

#### 工作线程的集合

workers 存放所有的工作线程，添加和移除操作都需要用到 mainLock 锁

```java
private final HashSet<Worker> workers = new HashSet<Worker>();
```

### execute 方法

execute 方法流程，详情见代码注释

```java
public void execute(Runnable command) {
    if (command == null)
        throw new NullPointerException();
   
    int c = ctl.get(); // 获取当前线程的状态
    if (workerCountOf(c) < corePoolSize) { // 当前工作线程数小于核心线程数
        if (addWorker(command, true)) // 直接创建一个核心线程来执行这段任务
            return;
        c = ctl.get();
    }
    if (isRunning(c) && workQueue.offer(command)) { // 当前工作线程数大于核心线程数并且线程池是运行中状态，就将线程放入任务队列中
        int recheck = ctl.get();
        if (!isRunning(recheck) && remove(command))
            reject(command);
        else if (workerCountOf(recheck) == 0)
            addWorker(null, false);
    }
    else if (!addWorker(command, false)) // 任务队列已满，就创建一个非核心线程来执行任务
        reject(command); // 创建非核心线程失败，执行拒绝策略
}
```

### submit 方法

submit 方法流程类似于 execute 方法，与之区别在于 submit 能够获取返回值

```java
public <T> Future<T> submit(Callable<T> task) {
    if (task == null) throw new NullPointerException();
    RunnableFuture<T> ftask = newTaskFor(task);
    execute(ftask); // 调用上放的 execute 方法
    return ftask;
}
```

### addWork 方法

addWorker 方法：添加工作线程，并调用线程去执行任务

```java
private boolean addWorker(Runnable firstTask, boolean core) {
    retry:
    for (;;) {
        int c = ctl.get(); // 线程池的状态
        int rs = runStateOf(c);  // 线程池的运行状态

        if (rs >= SHUTDOWN &&
            ! (rs == SHUTDOWN &&
               firstTask == null &&
               ! workQueue.isEmpty())) // 若线程池状态处于关闭状态以上，并且任务队列为空，无法添加新的任务
            return false;

        for (;;) {
            int wc = workerCountOf(c); // 工作线程数量
            if (wc >= CAPACITY ||
                wc >= (core ? corePoolSize : maximumPoolSize)) // 若当前工作线程数量大于最大容量（会根据核心和非核心分开比较）
                return false;
            if (compareAndIncrementWorkerCount(c)) // 工作线程数量 + 1
                break retry;
            c = ctl.get();  // Re-read ctl
            if (runStateOf(c) != rs)
                continue retry;
        }
    }

    boolean workerStarted = false;
    boolean workerAdded = false;
    Worker w = null;
    try {
        w = new Worker(firstTask); // 每个任务以 Worker 对象的形式存在
        final Thread t = w.thread;
        if (t != null) {
            final ReentrantLock mainLock = this.mainLock;
            mainLock.lock(); // 加锁
            try {
                int rs = runStateOf(ctl.get());

                if (rs < SHUTDOWN ||
                    (rs == SHUTDOWN && firstTask == null)) { // 线程池是运行状态，并且没法继续添加任务
                    if (t.isAlive()) 
                        throw new IllegalThreadStateException();
                    workers.add(w); // 新增工作线程
                    int s = workers.size();
                    if (s > largestPoolSize)
                        largestPoolSize = s; // 更新最大线程数
                    workerAdded = true;
                }
            } finally {
                mainLock.unlock(); // 释放锁
            }
            if (workerAdded) {
                t.start(); // 执行任务
                workerStarted = true;
            }
        }
    } finally {
        if (! workerStarted)
            addWorkerFailed(w); // 处理任务失败，会将当前的工作线程移除，并且将线程池状态设置为终止状态
    }
    return workerStarted;
}
```

每个工作线程执行了 start 方法后，等操作系统分配了时间片就会以多线程的形式去执行这段任务

### Worker 对象

Worker 对象是一个内部类，继承了AbstractQueuedSynchronizer（AQS），重写了 tryLock、unLock 等方法

```java
private final class Worker
    extends AbstractQueuedSynchronizer
    implements Runnable
{
    /** 作者这里解释的很清楚了
     * This class will never be serialized, but we provide a
     * serialVersionUID to suppress a javac warning.
     */
    private static final long serialVersionUID = 6138294804551838833L;

    final Thread thread; // 线程
    Runnable firstTask; // 需要执行的任务
    volatile long completedTasks; // 每个线程完成的任务数

    Worker(Runnable firstTask) {
        setState(-1); // 改变 AQS state 状态值为 -1
        this.firstTask = firstTask;
        this.thread = getThreadFactory().newThread(this); // 从设置的线程工程中创建一个线程，若没设置，就用默认的
    }

    public void run() { // 调用 start 方法后，分配了时间片就会调用这个方法
        runWorker(this);
    }
  
    protected boolean isHeldExclusively() {
        // getState 方法：获取 AQS 维护的 state 值
        // state = 0：线程未获取锁，可以获取，并设置为1
      	// state = 1：线程已经获取了锁，无法获取
        return getState() != 0; 
    }

    protected boolean tryAcquire(int unused) { // 尝试获取锁，更改 state 值，获取成功后将持有锁的线程设置为当前线程
        if (compareAndSetState(0, 1)) {
            setExclusiveOwnerThread(Thread.currentThread());
            return true;
        }
        return false;
    }

    protected boolean tryRelease(int unused) { // 释放锁，设置 state 值为0
        setExclusiveOwnerThread(null);
        setState(0);
        return true;
    }

    public void lock()        { acquire(1); }
    public boolean tryLock()  { return tryAcquire(1); }
    public void unlock()      { release(1); }
    public boolean isLocked() { return isHeldExclusively(); }

    void interruptIfStarted() { // 如果线程已经启动，并且还未被阻断，执行阻断线程
        Thread t;
        if (getState() >= 0 && (t = thread) != null && !t.isInterrupted()) {
            try {
                t.interrupt();
            } catch (SecurityException ignore) {
            }
        }
    }
}
```

### runWorker 方法

Worker 对象继承了 Thread 类，重写了 run 方法，调用了自定义的 runWorker 方法，执行任务，执行任务循环中有两个判断

- 工作线程有任务，执行前提：
  - 工作线程数小于核心线程数，创建一条核心线程数执行任务
  - 任务队列已满且工作线程数小于最大线程数，创建一条非核心线程数执行任务
- 工厂线程没有任务，就从任务队列从取出一条，执行前提：
  - 工作线程数达到核心线程数，工作队列未满

```java
final void runWorker(Worker w) {
    Thread wt = Thread.currentThread();
    Runnable task = w.firstTask;
    w.firstTask = null;
    w.unlock(); 
    boolean completedAbruptly = true;
    try {
        while (task != null || (task = getTask()) != null) { 
            // 线程里有任务（核心线程）或者线程里没任务，从任务队列中取出
            // 因为这是循环，所以在满足条件的情况下，一个线程可以执行多个任务，达到了线程重用
            w.lock();
            if ((runStateAtLeast(ctl.get(), STOP) ||
                 (Thread.interrupted() &&
                  runStateAtLeast(ctl.get(), STOP))) &&
                !wt.isInterrupted())
                wt.interrupt();
            try {
                beforeExecute(wt, task);
                Throwable thrown = null;
                try {
                    // 开始执行任务
                    task.run();
                } catch (RuntimeException x) {
                    thrown = x; throw x;
                } catch (Error x) {
                    thrown = x; throw x;
                } catch (Throwable x) {
                    thrown = x; throw new Error(x);
                } finally {
                    afterExecute(task, thrown);
                }
            } finally {
                task = null;
                w.completedTasks++;
                w.unlock();
            }
        }
        completedAbruptly = false;
    } finally {
        // 当线程结束情况下执行，移除工作线程
        processWorkerExit(w, completedAbruptly);
    }
}
```

### getTask 方法

getTask 方法：从任务队列中获取任务

```java
private Runnable getTask() {
    boolean timedOut = false; // Did the last poll() time out?

    for (;;) {
        int c = ctl.get();
        int rs = runStateOf(c);

        // Check if queue empty only if necessary.
        if (rs >= SHUTDOWN && (rs >= STOP || workQueue.isEmpty())) {
            decrementWorkerCount();
            return null;
        }

        int wc = workerCountOf(c);

        // 当前线程是否需要被淘汰
        // allowCoreThreadTimeOut：默认为 false。如果为 false，则核心线程不会回收。如果为 true，则核心线程会被回收
        // wc > corePoolSize：工作线程数大于核心线程数
        boolean timed = allowCoreThreadTimeOut || wc > corePoolSize;

        if ((wc > maximumPoolSize || (timed && timedOut))
            && (wc > 1 || workQueue.isEmpty())) { // 判断是否是无用线程，若是就减少工作线程数量
            if (compareAndDecrementWorkerCount(c))
                return null;
            continue;
        }

        try {
            Runnable r = timed ?
                workQueue.poll(keepAliveTime, TimeUnit.NANOSECONDS) :
                workQueue.take();
            // poll：尝试从队列中获取元素，若超过 keepAliveTime 时间，就返回 null
            // take：尝试从队列中获取元素，如果队列中没有元素, 当前线程会 wait, 直到其他线程提交任务入队唤醒当前线程
            if (r != null)
                return r;
            timedOut = true; // 若执行这一步代表本次的线程获取元素超过了 keepAliveTime，继续循环，会执行上一步的compareAndDecrementWorkerCount 方法减少工作线程数量，retrun null 后会执行 processWorkerExit 方法从 workers 从移除工作线程
        } catch (InterruptedException retry) {
            timedOut = false;
        }
    }
}
```

### 拒绝策略

拒绝策略接口

```java
public interface RejectedExecutionHandler {
    void rejectedExecution(Runnable r, ThreadPoolExecutor executor);
}
```

#### AbortPolicy

直接抛出异常

核心代码：

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    throw new RejectedExecutionException("Task " + r.toString() +
                                         " rejected from " +
                                         e.toString());
}
```

#### CallerRunsPolicy

若这个线程池没有关闭，会用当前的线程来执行任务，默认的拒绝策略

核心代码：

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    if (!e.isShutdown()) {
        r.run();
    }
}
```

#### DiscardOldestPolicy

若这个线程池没有关闭，会丢弃最早的未处理任务，然后重新执行任务

核心代码：

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    if (!e.isShutdown()) {
        e.getQueue().poll();
        e.execute(r);
    }
}
```

#### DiscardPolicy

不做任何处理

核心代码：

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
}
```

## 参考文章

- [https://www.cnblogs.com/theRhyme/p/13056215.html#_lab2_4_0](https://www.cnblogs.com/theRhyme/p/13056215.html#_lab2_4_0)
- [https://blog.csdn.net/zhujiangtaotaise/article/details/122358731](https://blog.csdn.net/zhujiangtaotaise/article/details/122358731)
- [https://www.51cto.com/article/799082.html](https://www.51cto.com/article/799082.html)
- [https://chatgpt.com/](https://chatgpt.com/)
- [https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html)