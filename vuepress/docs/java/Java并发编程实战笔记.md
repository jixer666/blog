# Java并发编程实战笔记

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2026-3-8</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## 第一章

### volaite变量

`volaite` 能够保证多个线程之间变量的可见性

```java
public class VisibilityProblem {
    private static volatile boolean flag = false; 
    private static int number = 0;
    
    public static void main(String[] args) throws InterruptedException {
        for(int i = 0; i < 100; i ++) {
            // 线程1 - 读取线程
            Thread reader = new Thread(() -> {
                while (!flag) {
                    // 可能永远看不到 flag 的变化
                }
                System.out.println("number = " + number);
            });

            // 线程2 - 写入线程
            Thread writer = new Thread(() -> {
                number = 42;
                flag = true;
            });

            reader.start();
            Thread.sleep(10);  // 确保 reader 开始运行
            writer.start();
        }
    }
}
```

输出：number = 42

若 `falg` 变量没加 `volaite` 关键字则会一致死循环

`number` 变量没加 `volaite` 关键字确能够可见是因为：JMM 中的 **Happens-Before**，当线程写一个 volatile 变量时，JMM 会在写操作前插入 StoreStore 屏障，在写操作后插入 StoreLoad 屏障。这会强制将当前线程工作内存中**所有**之前的修改（包括普通变量 number）刷新到主内存中



