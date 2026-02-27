---
title: MySQL实战45讲笔记
date: 2026-2-17 14:03:01
tags: ["MySQL"]
category: 书籍
thumbnail: 
sticky: 
---

本文是笔者对于《MySQL 实战45讲》内容的总结

## 插入一条语句的流程

```sql
insert into (id, value) values (1, "111"), (9, "999");
```

首先会在 id 索引树上进行查询 id 需要插入的范围，例如 9 只能插入到 [5, 10] 的范围内，如果 id 是唯一索引等特殊索引，会要判断是否满足条件

假设此时 id 为1的数据页在内存中，而 id 为9的数据页不在内存中

- id 为 1 的数据页在内存中，会直接更新内存中的数据，并记录在 redolog 中（在Page 1的 xx 位置插入(1,'111')）

- id 为 9 的数据页不在内存中

  - 若 id 是唯一索引，会先查询到要插入的数据页，并写入到内存中，再进行插入数据行

  - 若id 是普通索引，会先写将语句入到内存中的 change buffer 中

    并记录在 redolog 中（在 change buffer 的 xx 位置记录"要在 Page 9插入(9,'999')"）。等后续 id 为9被查询的时候会被写入到内存中，会将 change buff 与内存中的数据合并，称为 **merge**，除此之外还有后台线程定期 merge、change buffer 太大的时候和数据启动的时候其他三种 merge 方式 

两个 id 的数据现均存在内存中，但磁盘并未改变，成为了一个**脏页**，何时写入到磁盘（**刷盘**时机）？

见目录：刷盘机制与 IO 调优

## 更新一条语句的流程

```sql
update tb_test set value = "111" where idx = 9;
```

若更新的记录不在内存中

- idx 是普通索引，会将更新记录保存在 change buffer 中，并记录在 redo log 中（在 change buffer 的 xx 位置记录 "要在 Page x 修改 id 为9的值为111"）
- idx 是唯一索引，会先从 idx 索引树上查询到这个数据所在的数据页，然后写入到内存中，在内存中进行修改，并记录在 redo log 中（要在 Page y 修改 id 为9的值为111）
- idx 不是索引，会进行**全表扫描**这个数据所在的数据页，然后扫描到的**所有数据页**写入到内存中，在内存中进行修改，并记录在 redo log 中（要在 Page y 修改 id 为9的值为111）

若更新的记录再内存中

- idx 是普通索引，会在内存中找到需要修改的数据行并进行修改，并记录在 redo log 中（要在 Page y 修改 id 为9的值为111）
- idx 是唯一索引，会在内存中找到需要修改的数据行并进行修改，并记录在 redo log 中（要在 Page y 修改 id 为9的值为111）
- idx 不是索引，虽然在内存中，但是不知道在哪一页，也需要从进行**全表扫描**这个数据所在的数据页，然后扫描到的**所有数据页**写入到内存中，在内存中进行修改，并记录在 redo log 中（要在 Page y 修改 id 为9的值为111）

## 查询一条语句的流程

```sql
select * from tb_test where idx = 10;
```

若查询 idx 的数据页在内存中，直接从内存中读取并返回

若查询 idx 的数据页不在内存中，会从 idx 索引树中读取，并保存在内存中，应用 change buffer 进行合并，并返回 

> 这里展开说明一下，若查询 idx 数据页不在内存中，在进行索引树查询的时候会有不同的表现：
> - 若 idx 是普通索引，则会查询到第一条满足的数据后，会接着查询下一条不满条件后才会返回。若此时恰好是跨数据页的，则会又要进行一次 IO 查询（概率很小）
> - 若 idx 是唯一索引，则会查询到第一条满足的数据后就会返回

## 记录redo log

记录 redo log 有**两阶段提交**，目的是保证了 binlog 和 redo log 逻辑的一致性和解决数据库异常崩溃后的数据一致性问题

- 记录 redo log，标记为 prepare 状态，此时数据变更已记录但未生效
- 生成操作的 binlog，并写入磁盘
- 更新 redo log，标记为 commit 状态，事务正式提交

若此时数据发送崩溃

- 发送在 prepare 之后，生成 binlog 之前：主库有数据，但无 binlog，会导致主从数据不一致，事务回滚
- 生成 binlog 之后，commit 之前：有 binlog，从库数据应该被提交，事务也应该被提交
- commit 之后：无需处理，事务已被提交

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

- redo log 满了，会强制将一部分脏页刷盘
- buffer pool 内存不足，会用 LRU（最近最少使用）算法将一部分脏页刷盘
- 系统空闲时，后台线程主动将一部分可控制的量的脏页刷盘
- 正常关闭数据库，会将所有的脏页刷盘

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

## 记录复用和数据页复用

复用是指：当删除一条数据，实际的内存大小并不改变，只是给当前标签加了删除标志

**记录复用**：比如 id = 1 的记录删除，下次插入 id = 1 的记录时会复用当前数据空间，但是插入 id = 2就无法复用，

除了删除，新增（随机插入而不是顺序插入，出现页分裂）和修改也会造成空洞

## 排序

排序 SQL 语句：

```sql
select city,name,age from t where city='杭州' order by name limit 1000;
```

city 字段是普通索引

**全字段排序**

普遍的排序方式

执行流程：

- 从 city 索引树上找到满足 `city = 杭州` 的第一个数据
- 根据数据的 id 回表查询  `city,name,age` 数据，并存入 sort_buffer
- 重复找第二个数据，直到不满足条件为止
- 对 sort_buffer 中的数据按照字段 name 做快速排序
- 取出前1000条数据返回

在8.0版本中，会使用优先队列进行优化

**row id 排序**

当查询的字段数很多的时候，内存 sort_buffer 不够用，优化器会使用 row id 排序

row id 排序会使用文件来进行排序，将数据行分到多个文件进行归并排序

执行流程：

- 从 city 索引树上找到满足 `city = 杭州` 的第一个数据
- 根据数据的 id 回表查询  `id,name` 数据，并存入 sort_buffer
- 重复找第二个数据，直到不满足条件为止
- 对 sort_buffer 中的数据按照字段 name 做快速排序
- 取出前1000条数据，并根据 id 回表查询 `city、name、age` 数据返回

相比于全字段排序，多了一个回表查询的步骤，也就是多了 1000 次扫描行数

**覆盖索引优化排序**

对 `city、name、age` 添加联合索引

执行流程：

- 从 city 索引树上找到满足 `city = 杭州` 的第一个数据
- 取出 `city,name,age` 数据存入 sort_buffer
- 重复找第二个数据，直到不满足条件为止
- name 本身就是排序的，所以直接取出前1000条数据返回

> 注意：若没有 city = 杭州 的限制，最终还是会对所有结果按照 name 进行排序
