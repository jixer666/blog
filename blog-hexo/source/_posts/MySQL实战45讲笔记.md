---
title: MySQL实战45讲笔记
date: 2026-2-17 14:03:01
tags: ["MySQL"]
category: 书籍
thumbnail: 
sticky: 
---

本文是笔者对于《MySQL 实战45讲》内容的总结

## 表级锁

表级锁分为：**表锁**和 **MDL 锁**

MDL 锁说明：

- 对表结构修改，加的是 MDL 写锁

- 对表数据增删改查，加的是 MDL 读锁

- 读读共享，读写互斥

- 比较经典的场景：若对一个流量高的表字段修改，会发生读写互斥，会阻塞后续所有的 MDL 读锁，这就是为什么修改表字段后，会阻塞后续所有的查询操作

  给表添加字段的解决办法：

  - 先看是否存在长事务，若存在就先 kill，否则会一直占用事务，一直存在 MDL 读锁
  - 在执行 `alter table` 语句设置超时等待时间

## 行级锁

行级锁分为：**记录锁**、**间隙锁**和**临间锁**

两阶段锁协议：

- **加锁阶段**：事务执行中锁是只有在需要加的时候才会加上
- **解锁阶段**：所有锁是只有在事务结束（回滚）的时候才会释放

> 根据这个协议，可以总结实际业务中在并发下对加锁的代码可以优化放在后面执行

例如有如下数据：

| id（主键） | count（普通字段） | idx（索引） |
| ---------- | ----------------- | ----------- |
| 5          | 5                 | 5           |
| 10         | 10                | 10          |
| 15         | 15                | 15          |
| 20         | 20                | 20          |

操作如下：

| 查询             | SQL语句                                                  | 字段类型 | 加锁范围                                        |
| ---------------- | -------------------------------------------------------- | -------- | ----------------------------------------------- |
| 范围查询         | SELECT * FROM t WHERE id > 8 AND id < 13 FOR UPDATE      | 主键     | 临键锁(5, 15)                                   |
| 范围查询         | SELECT * FROM t WHERE idx > 8 AND idx < 13 FOR UPDATE    | 索引     | 临键锁(5, 15)                                   |
| 范围查询         | SELECT * FROM t WHERE count> 8 AND count < 13 FOR UPDATE | 普通字段 | 锁全表                                          |
| 范围查询(最值)   | SELECT * FROM t WHERE id > 8  FOR UPDATE                 | 主键     | 临键锁(5, +∞)                                   |
| 范围查询(最值)   | SELECT * FROM t WHERE idx > 8  FOR UPDATE                | 索引     | 临键锁(5, +∞)                                   |
| 范围查询(最值)   | SELECT * FROM t WHERE count > 8  FOR UPDATE              | 普通字段 | 锁全表                                          |
| 等值查询         | SELECT * FROM t WHERE id = 5 FOR UPDATE                  | 主键     | 记录锁                                          |
| 等值查询         | SELECT * FROM t WHERE idx = 10 FOR UPDATE                | 索引     | 记录锁 + 间隙锁(5, 10]+(10, 15) = 临键锁(5, 15) |
| 等值查询         | SELECT * FROM t WHERE count= 5 FOR UPDATE                | 普通字段 | 锁全表                                          |
| 等值查询(不存在) | SELECT * FROM t WHERE id = 6 FOR UPDATE                  | 主键     | 间隙锁(5,10)                                    |
| 等值查询(不存在) | SELECT * FROM t WHERE idx = 6 FOR UPDATE                 | 索引     | 间隙锁(5,10)                                    |
| 等值查询(不存在) | SELECT * FROM t WHERE count = 6 FOR UPDATE               | 普通字段 | 锁全表                                          |

## 死锁和处理方法

死锁概念：如图下图所示，事务 A 开启事务持有 id 为1的行锁，事务 B 开启事务持有 id 为2的行锁，此时事务 A 又想去更新 id 为2的行，事务 B 又想去更新 id 为1的行，都在等在相互释放资源，进如死循环，这就是**死锁**

![](https://static001.geekbang.org/resource/image/4d/52/4d0eeec7b136371b79248a0aed005a52.jpg?wh=1142%2A856)

处理方法：

- 开启超时时间 `innodb_lock_wait_timeout`，超时自动释放锁

- 参数 `innodb_deadlock_detect` 设置为 on，自动校验死锁，但会带来性能上的开销

  例如：当前有1000个线程并发操作，每个线程都会去循环检擦其他线程是否上锁，时间复杂度就是100万，就光这一个检查操作就这么多，还是很恐怖的

  优化方法：

  - 加入中间价或修改 MySQL 代码，保证控制并发粒度，例如每次运行10个线程
  - 一行锁改为多行锁冲突，例如：1000个线程要扣减某一个行的数据，更改为1000个线程扣减10行记录的数据，扣减的是10个中的随机一行，最终保证扣减总额等于10行记录的扣减之和

## 优化器的逻辑

优化器作用是查询过程中会选择一个最优（代价最小，并不意味着执行时间最小）的执行方法来执行

选择的依据是按照：

- 扫描的行数
- 是否使用临时表
- 是否排序
- 等等

扫描的行数并不是真正的执行得到的行数，而是是一个预估采用的是**采样统计**，随机从 N 页中取出，然后算出这 N 页的平均值，再乘以总页面数就得到了这个索引的**基数**。我们通过 `explain` 命令得到的结果中的 `rows` 一列就是这个基数。这个基数不是一直不变的，当变更的数据行数超过 1/M 的时候，会自动触发重新做一次索引统计，或者执行命令 `analyze table t ` 来手动做索引统计

## 前缀索引

有两种前缀索引，语句如下：

```sql
select f1, f2 from user where email = 'xxx';
```

1、emial 整个字段都是前缀索引，创建的时候不设置长度就是默认整个字段长度：`alter table user add index index1(email);`

2、emial 只取前6个长度当作前缀索引：`alter table user add index index2(email(6))`

要保证选用的前缀索引能够具有区分性，尽量不要出现太多相同，否则会多扫描几次表 + 回表。例如身份证这个字段，就可以使用前缀索引，但存储的时候需要倒序存储

前缀索引无法和覆盖索引一起使用，无论设置的长度是多少，即使已经包含了整个字段，但是只要设置了长度就不行，都会再索引树上查询出 ID 后，进行回表一次查询具体的数据

## 刷盘机制和IO调优

刷盘是将内存中脏数据页写入到磁盘的过程，刷盘的时机：

- redo log 满了
- 内存满了，需要将部分数据页淘汰，若淘汰的数据页是脏页，就需要刷盘
- MySQL 空闲的时候
- MySQL 关闭的时候

**注意：当 redo log 写满了或者脏页比例太高 MySQL 所有的查询和更新操作，会影响性能**

MySQL 的刷盘是由 `innodb_io_capacity` 控制的，它的大小取值和电脑磁盘 IOPS 有关，在 Linux 可以通过命令查看

```bash
fio -filename=$filename -direct=1 -iodepth 1 -thread -rw=randrw -ioengine=psync -bs=16k -size=500M -numjobs=10 -runtime=10 -group_reporting -name=mytest
```

笔者电脑输出如下：

```bash
mytest: (g=0): rw=randrw, bs=(R) 16.0KiB-16.0KiB, (W) 16.0KiB-16.0KiB, (T) 16.0KiB-16.0KiB, ioengine=psync, iodepth=1
...
fio-3.7
Starting 10 threads
mytest: Laying out IO file (1 file / 500MiB)
Jobs: 1 (f=1): [m(1),_(9)][100.0%][r=174MiB/s,w=172MiB/s][r=11.1k,w=11.0k IOPS][eta 00m:00s]
mytest: (groupid=0, jobs=10): err= 0: pid=1607: Mon Feb 23 20:31:15 2026
   read: IOPS=19.0k, BW=312MiB/s (327MB/s)(2500MiB/8012msec)       // 重点看着，读IOPS
    clat (usec): min=23, max=28076, avg=180.49, stdev=618.98
     lat (usec): min=23, max=28076, avg=180.59, stdev=619.10
    clat percentiles (usec):
     |  1.00th=[   49],  5.00th=[   62], 10.00th=[   68], 20.00th=[   84],
     | 30.00th=[   91], 40.00th=[  104], 50.00th=[  115], 60.00th=[  128],
     | 70.00th=[  139], 80.00th=[  157], 90.00th=[  210], 95.00th=[  297],
     | 99.00th=[ 1352], 99.50th=[ 3425], 99.90th=[10159], 99.95th=[13173],
     | 99.99th=[19268]
   bw (  KiB/s): min= 5523, max=90627, per=12.06%, avg=38528.03, stdev=24139.07, samples=117
   iops        : min=  345, max= 5664, avg=2407.66, stdev=1508.63, samples=117
  write: IOPS=19.0k, BW=312MiB/s (327MB/s)(2500MiB/8012msec)       // 重点看着，写IOPS
    clat (usec): min=29, max=39211, avg=201.08, stdev=664.45
     lat (usec): min=29, max=39211, avg=201.41, stdev=665.09
    clat percentiles (usec):
     |  1.00th=[   60],  5.00th=[   67], 10.00th=[   77], 20.00th=[   92],
     | 30.00th=[  109], 40.00th=[  122], 50.00th=[  137], 60.00th=[  147],
     | 70.00th=[  161], 80.00th=[  180], 90.00th=[  231], 95.00th=[  318],
     | 99.00th=[ 1434], 99.50th=[ 3654], 99.90th=[10814], 99.95th=[14091],
     | 99.99th=[20055]
   bw (  KiB/s): min= 5792, max=88247, per=12.08%, avg=38590.79, stdev=24139.00, samples=117
   iops        : min=  362, max= 5515, avg=2411.57, stdev=1508.64, samples=117
  lat (usec)   : 50=0.82%, 100=30.44%, 250=61.06%, 500=5.44%, 750=0.72%
  lat (usec)   : 1000=0.27%
  lat (msec)   : 2=0.47%, 4=0.34%, 10=0.33%, 20=0.11%, 50=0.01%
  cpu          : usr=1.34%, sys=21.22%, ctx=302541, majf=0, minf=25
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=159977,160023,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
   READ: bw=312MiB/s (327MB/s), 312MiB/s-312MiB/s (327MB/s-327MB/s), io=2500MiB (2621MB), run=8012-8012msec
  WRITE: bw=312MiB/s (327MB/s), 312MiB/s-312MiB/s (327MB/s-327MB/s), io=2500MiB (2622MB), run=8012-8012msec

Disk stats (read/write):
    dm-0: ios=159349/159405, merge=0/0, ticks=11523/11832, in_queue=23382, util=97.24%, aggrios=159977/160023, aggrmerge=0/0, aggrticks=11442/11810, aggrin_queue=23163, aggrutil=96.78%
  sda: ios=159977/160023, merge=0/0, ticks=11442/11810, in_queue=23163, util=96.78%
```

总 IOPS ≈ 38000（读写各19000）

MySQL 的配置 `my.cnf` 参考取值

```ini
[mysqld]
innodb_io_capacity = 25000  -- 实际IOPS的60-70%
innodb_io_capacity_max = 60000   -- 压测出的磁盘物理极限值（或者略低一点）
```

另一个概念：**连坐刷盘**

当刷盘的脏数据页旁边也是脏页，也会根据 `innodb_flush_neighbors` 设置的值进行 '连坐'，若旁边的旁边也是脏页，也会刷盘，一直这么连坐下去。值为1就是连坐，为0就不会，取值参考如下：

- HDD 时代（机械硬盘）： 建议设置为 1。利用顺序写减少磁头寻道，提升性能。
- SSD 时代（固态硬盘）： 建议设置为 0。SSD 的随机 IO 性能极强，不需要“连坐”，只刷脏页本身能减少响应延迟，MySQL 默认值
