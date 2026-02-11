---
title: OA卡顿问题排查
date: 2025-07-24 15:01:01
tags: ["OA"]
category: 工作
thumbnail: 
sticky: 
---

## 现象

公司 OA 系统在重启后的3~4天内，会出现发送表单、提交申请等流程出现卡顿，卡顿的时间为3分钟左右

## 分析

OA 系统是第三方购买的，所以难以排查问题。当出现这个问题后，运维组人员迅速导出日志、记录问题出现的信息。领导组织相关人员进行开会讨论解决办法

OA 系统中有个定时重建索引的任务，并且可以选择重建那个类别下的索引。于是考虑到这个原因，我们便从索引的定时任务出发进行排查

## 排查

### 代码层面分析

从代码分析，排查到索引定时任务有两个相关的数据库表，一个是成功创建索引的表，一个是创建索引失败的表，两个表的数据量都很大，每个都差不多三四百万条数据

#### IndexDBJob 任务

`IndexDBJob` 任务代码如下：

```java
public void run() {
    try {
        Thread.sleep(5000L);
        this.indexManager.resumeDBIndexInfo();
        log.info(this.getClass().getName() + " 全文检索DB操作线程启动");
        while(true) {
            this.indexManager.processIndexDBCache();
            try {
                Thread.sleep(this.intervalTime);
            } catch (Exception var2) {
                log.error("", var2);
            }
        }
    } catch (Exception var3) {
        log.error("Index DB  error!", var3);
    } catch (Error var4) {
        log.error("Index DB  error!", var4);
    }
}
```

`this.indexManager.resumeDBIndexInfo()` 会先删除 `INDEX_ID_FAIL_INFO` 表数据中重试次数超过三次的数据，然后会将剩下的数据保存到 `INDEX_ID_INFO` 并同时保存在一个 `IndexIDQueue` 列表中

从 `Thread.sleep(this.intervalTime)` 可知，在死循环中会有一段时间的睡眠时间，这段睡眠时间是3分钟（读取的是本地的一个 `IndexConfig.properties` 文件），恰好问题出现卡顿的时间大差不差

#### IndexIdJob 任务

`IndexIdJob` 任务代码如下：

```java
public void run() {
    while(true) {
        try {
            if (this.indexManager.getIndexInfoQueueSize() < 1000) {
                List<IndexIdInfo> jobMap = this.idQueue.getFullList();
                if (jobMap != null) {
                    Iterator var2 = jobMap.iterator();
                    while(var2.hasNext()) {
                        IndexIdInfo idInfo = (IndexIdInfo)var2.next();
                        try {
                            IndexInfo info;
                            if (IndexIdInfo.INDEX_TYPE_INSERT.equals(idInfo.getOperation())) {
                                info = IndexUtil.getIndexInfo(idInfo.getEntityId(), idInfo.getType());
                                if (info != null) {
                                    this.setRealPath(info);
                                    this.indexManager.index(info);
                                }
                            }
                            if (IndexIdInfo.INDEX_TYPE_UPDATE.equals(idInfo.getOperation())) {
                                this.indexManager.deleteFromIndex(idInfo.getEntityId(), idInfo.getType());
                                info = IndexUtil.getIndexInfo(idInfo.getEntityId(), idInfo.getType());
                                if (info != null) {
                                    this.setRealPath(info);
                                    this.indexManager.index(info);
                                }
                            }
                            if (IndexIdInfo.INDEX_TYPE_DELETE.equals(idInfo.getOperation())) {
                                this.indexManager.deleteFromIndex(idInfo.getEntityId(), idInfo.getType());
                            }
                        } catch (Exception var6) {
                            IndexDBQueue.addFail(idInfo.getEntityId());
                            log.error("parse indexId exception!INFO(EntityId,Type):[" + idInfo.getEntityId() + "," + idInfo.getType() + "]", var6);
                        } catch (Error var7) {
                            IndexDBQueue.addFail(idInfo.getEntityId());
                            log.error("parse indexId error!", var7);
                        }
                    }
                    jobMap.clear();
                }
            }
        } catch (RemoteAccessException var8) {
            log.error(var8.getMessage());
        } catch (Exception var9) {
            log.error("parse indexId error!", var9);
        }
        try {
            Thread.sleep(this.time);
        } catch (Exception var5) {
        }
    }
```

主要作用是从  `IndexIDQueue` 来构建成 `IndexInfo`，会调用含有同步锁的 `add` 方法（见下方的 Thread Dump 日志），并且保存在一个 `IndexInfoQueue` 列表中

#### IndexParseJob 任务

`IndexParseJob` 任务代码如下：

```java
public void run() {
    while(true) {
        while(true) {
            while(true) {
                try {
                    List<IndexInfo> jobMap = this.jobQueue.getFullList();
                    if (jobMap != null) {
                        if (this.indexManager.getIndexDocQueueSize() < 1000) {
                            Iterator var2 = jobMap.iterator();
                            while(var2.hasNext()) {
                                IndexInfo info = (IndexInfo)var2.next();
                                try {
                                    this.indexManager.addToIndex(info);
                                } catch (Exception var16) {
                                    log.error("parse error!", var16);
                                }
                            }
                            jobMap.clear();
                        } else {
                            Thread.sleep(this.sleepMillis);
                            this.jobQueue.add(jobMap);
                            log.warn("索引入库文件数过多导致索引解析暂停");
                        }
                    }
                } catch (Exception var17) {
                    log.error("parse exception!", var17);
                } catch (Error var18) {
                    log.error("parse error!", var18);
                } finally {
                    try {
                        Thread.sleep(this.sleepMillis);
                    } catch (Exception var15) {
                        log.error("Thread.sleep error!", var15);
                    }
                }
            }
        }
    }
}
```

主要作用是通过 `IndexInfoQueue` 来创建真实的索引

### Thread Dump 日志分析

```
"H-35" Id=332 in BLOCKED on lock=com.seeyon.apps.index.queue.IndexIDQueue@5e9951ac     owned by Index-IDJob-local Id=248  2025-07-17 19:24:09/71
    at com.seeyon.apps.index.queue.IndexIDQueue.add(IndexIDQueue.java:42)
    at com.seeyon.apps.index.manager.IndexManagerImpl.index(IndexManagerImpl.java:74)
    at com.seeyon.apps.index.manager.IndexManagerImpl.index(IndexManagerImpl.java:80)
    at com.seeyon.apps.index.manager.ProxyManagerImpl.update(ProxyManagerImpl.java:111)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transFinishAndZcdb(ColManagerImpl.java:1932)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transFinishWorkItemPublic(ColManagerImpl.java:1724)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transFinishWorkItem(ColManagerImpl.java:1675)
    at com.seeyon.apps.collaboration.controller.CollaborationController.finishWorkItem(CollaborationController.java:1598)
    at com.seeyon.ctp.common.web.GenericFilter.doFilter(GenericFilter.java:61)
    at com.seeyon.ctp.common.web.filter.CharacterEncodingFilter.doFilter(CharacterEncodingFilter.java:48)
```

根据调用链路，找到第一个陷入阻塞的线程，发现是由用户点击页面发起某个操作，这个调用链会去调用创建索引的逻辑，问题出在下面的代码：

```java
public synchronized void add(IndexIdInfo idInfo) {
    if (idInfo != null) {
        this.list.add(idInfo);
    }
}
```

这个添加方法加了 `synchronized` 同步锁，此时后台也在执行多线程去创建索引的定时任务，在这种调用量很大的情况下，即使使用了多线程处理，但最终处理也是是串行处理的。用户的操作会陷入阻塞，等待其他调用的地方执行完才能执行，导致性能降低

记录查看日志的后续调用链路，可见下面两个阻塞也是来自用户在页面上的点击

```
"H-128" Id=425 in BLOCKED on lock=com.seeyon.apps.index.manager.IndexManagerImpl@73c5a4f4     owned by H-35 Id=332  2025-07-17 19:24:16/64
    at com.seeyon.apps.index.manager.IndexManagerImpl.index(IndexManagerImpl.java:74)
    at com.seeyon.apps.index.manager.IndexManagerImpl.index(IndexManagerImpl.java:80)
    at com.seeyon.apps.index.manager.ProxyManagerImpl.update(ProxyManagerImpl.java:111)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transFinishAndZcdb(ColManagerImpl.java:1930)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transDoZcdbPublic(ColManagerImpl.java:2518)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transDoZcdb(ColManagerImpl.java:2507)
    at com.seeyon.apps.collaboration.controller.CollaborationController.doZCDB(CollaborationController.java:1666)
    at com.seeyon.ctp.common.web.GenericFilter.doFilter(GenericFilter.java:61)
    at com.seeyon.ctp.common.web.filter.CharacterEncodingFilter.doFilter(CharacterEncodingFilter.java:48)

"H-123" Id=420 in BLOCKED on lock=com.seeyon.apps.index.manager.IndexManagerImpl@73c5a4f4     owned by H-35 Id=332  2025-07-17 19:24:41/39
    at com.seeyon.apps.index.manager.IndexManagerImpl.index(IndexManagerImpl.java:74)
    at com.seeyon.apps.index.manager.IndexManagerImpl.index(IndexManagerImpl.java:80)
    at com.seeyon.apps.index.manager.ProxyManagerImpl.update(ProxyManagerImpl.java:111)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transFinishAndZcdb(ColManagerImpl.java:1930)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transDoZcdbPublic(ColManagerImpl.java:2518)
    at com.seeyon.apps.collaboration.manager.ColManagerImpl.transDoZcdb(ColManagerImpl.java:2507)
    at com.seeyon.apps.collaboration.controller.CollaborationController.doZCDB(CollaborationController.java:1666)
    at com.seeyon.ctp.common.web.GenericFilter.doFilter(GenericFilter.java:61)
    at com.seeyon.ctp.common.web.filter.CharacterEncodingFilter.doFilter(CharacterEncodingFilter.java:48)
```

陷入阻塞均是被 `H-35` 这个线程所影响导致的，并且都是调用了创建索引的逻辑

## 解决办法

先说结论：用户页面操作出现卡顿是因为创建索引时与定时任务创建索引在进行争抢锁资源，导致用户线程陷入阻塞状态。系统会从索引创建失败表中获取数据并进行重建索引，失败表量很大导致 OA 重启的这几天以内都会出现卡顿现象

解决办法也很简单

- 定期备份和删除索引创建失败表的数据
- 将创建索引的定时任务时间设置为晚上进行，不要影响用户的正常流程
- 索引重建的类别不要全选，先选重要的类别，再慢慢打开其他的类别