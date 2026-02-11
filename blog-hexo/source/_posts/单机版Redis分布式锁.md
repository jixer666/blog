---
title: 单机版Redis分布式锁
date: 2025-01-19 10:01:01
tags: ["Java"]
category: 学习
thumbnail: 
sticky: 
---

## 分布式锁概念

分布所锁是分布式系统之间访问共享资源的一种锁的实现，能够避免对公共资源竞争导致出现的问题

本文用 Redis 来实现分布式（还可以通过 MySQL、Zookeeper 来实现）

## 实现原理

### 版本一

核心是使用 Redis 中的命令，如下所示：

```sql
SET key value [EX seconds|PX milliseconds|EXAT timestamp|PXAT milliseconds-timestamp|KEEPTTL] [NX|XX]
```

对应的 SpringBoot 的使用是

```java
stringRedisTemplate.opsForValue().setIfAbsent()
```

代码如下：

```java
public class RedisUtilV1 implements RedisLock{

    StringRedisTemplate stringRedisTemplate;

    public RedisUtilV1(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
    }

    public Boolean lock(String key, long time, TimeUnit timeUnit) {
        return stringRedisTemplate.opsForValue().setIfAbsent(key, "1", time, timeUnit);
    }

    public Boolean unlock(String key) {
        return stringRedisTemplate.delete(key);
    }

}
```

存在的问题：误删情况

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/15/1653b1ac513a9c62~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

有两个线程 A、B，A 先获取了锁，但由于网络的因素，A 挂了并且直到 A 的锁过期释放。此时 B 获取了锁，这时 A 恢复了，继续执行后续逻辑并且手动释放锁，这里 A 释放的是 B 的锁，出现了误删的情况

### 版本二

为了解决误删情况，方法如下：

在加锁的时候，存放 `UUID + 当前线程 ID` 的值，在解锁的时候，先获取到值，在对值进行判断，看是否是当前线程，是当前线程才删，否则就不删

代码如下：

```java
public class RedisUtilV2 implements RedisLock{

    StringRedisTemplate stringRedisTemplate;
    private String UUID;

    public RedisUtilV2(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
        this.UUID = RandomUtil.randomString(5);
    }

    public Boolean lock(String key, long time, TimeUnit timeUnit) {
        return stringRedisTemplate.opsForValue().setIfAbsent(key, UUID + Thread.currentThread().getId(), time, timeUnit);
    }

    public Boolean unlock(String key) {
        String value = stringRedisTemplate.opsForValue().get(key);
        if (value.equals(UUID + Thread.currentThread().getId())) {
            return stringRedisTemplate.delete(key);
        }
        return false;
    }

}
```

存在的问题：解锁操作不是原子性

解锁的步骤：1、查询锁的值  2、比较锁的值是否是当前的线程，为真就删除

此处是解锁操作类似于 i++，在并发情况下出现赋值变大或变小。这里解锁会出现锁已经被删除，但是任然能够执行到删除代码的位置

这块具体解释一下更好理解：

假设 Redis 锁过期时间设置的是10s，A 线程占有了锁，发送响应到 Redis 用了9.5s，Redis 处理完用了0.5s，此时一共用了9.8s。然后在返回的过程中用了0.5s，已经超过了过期时间10s，A 锁已经被释放了，这时候 B 线程就占用了锁，我们这时候逻辑就执行了删除锁的语句把 B 锁给释放了，出现了原子性的问题

### 版本三

为了解决操作不是原子性的问题，方法如下：

将解锁操作使用 Lua 脚本来实现，Lua 脚本只允许单线程，保证了原子性

Lua 脚本如下：

```lua
if redis.call('get', KEYS[1]) == ARGV[1] then
    return redis.call('del', KEYS[1])
else
    return 0
end
```

代码如下：

```java
public class RedisUtilV3 implements RedisLock{

    StringRedisTemplate stringRedisTemplate;
    private String UUID;
    private DefaultRedisScript<Boolean> redisScript;

    public RedisUtilV3(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
        this.UUID = RandomUtil.randomString(5);
        this.redisScript = new DefaultRedisScript<>();
        this.redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("script/Test.lua")));
        this.redisScript.setResultType(Boolean.class);
    }

    public Boolean lock(String key, long time, TimeUnit timeUnit) {
        return stringRedisTemplate.opsForValue().setIfAbsent(key, UUID + Thread.currentThread().getId(), time, timeUnit);
    }

    public Boolean unlock(String key) {
        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), UUID + Thread.currentThread().getId());
    }

}
```

存在的问题：代码逻辑执行时间大于锁的过期时间

若代码的执行大于了锁的过期时间，会出现锁已经释放，但代码还未执行结束，导致公共资源竞争的问题

### 版本四

为了解决代码逻辑执行时间大于锁的过期时间的问题，方法如下：

实现过期时间自动续约，用一个标识来表示是否需要，在加锁成功后，用一个线程来执行续约的操作

续约 Lua 脚本如下：

```lua
if redis.call('get', KEYS[1]) == ARGV[1] then
    return redis.call('expire', KEYS[1], ARGV[2])
else
    return 0
end
```

代码如下：

```java
public class RedisUtilV4 implements RedisLock{

    StringRedisTemplate stringRedisTemplate;
    private String UUID;
    private DefaultRedisScript<Boolean> redisScript;
    private DefaultRedisScript<Boolean> expireScript;
    private boolean isRetry = false;

    public RedisUtilV4(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
        this.UUID = RandomUtil.randomString(5);
        this.redisScript = new DefaultRedisScript<>();
        this.redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("script/Test.lua")));
        this.redisScript.setResultType(Boolean.class);
        this.expireScript = new DefaultRedisScript<>();
        this.expireScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("script/expireTimeAdd.lua")));
        this.expireScript.setResultType(Boolean.class);
    }

    public Boolean lock(String key, long time, TimeUnit timeUnit) {
        Boolean result = stringRedisTemplate.opsForValue().setIfAbsent(key, UUID + Thread.currentThread().getId(), time, timeUnit);
        if (result) {
            new Thread(() -> {
                while(isRetry) {
                    // 开启轮询，若没有解锁就一直添加过期时间
                    stringRedisTemplate.execute(expireScript, Arrays.asList(key), UUID + Thread.currentThread().getId(), "30");
                }
            }).start();
        }
        return result;
    }

    public Boolean unlock(String key) {
        Boolean result = stringRedisTemplate.execute(redisScript, Arrays.asList(key), UUID + Thread.currentThread().getId());
        if (result) {
            isRetry = false;
        }
        return result;
    }

}
```

## 总结

本文通过一步一步对分布式锁进行改造，逐步完善功能，实现一个单机版 Redis 分布式锁，具有加锁、解锁、自动过期、自动续约等功能，满足一个简单的分布式锁的基本功能

缺点是不能支持集群、不支持可重入、不支持公平锁和非公平锁、可靠性难以保证等诸多隐藏隐患

## 仓库代码

Gitee：[https://gitee.com/lijunxi666/simple-redis-lock](https://gitee.com/lijunxi666/simple-redis-lock)

## 参考文章

- [https://juejin.cn/post/6844903656911798285](https://juejin.cn/post/6844903656911798285)
- [https://www.cnblogs.com/xuzhujack/p/15191293.html](https://www.cnblogs.com/xuzhujack/p/15191293.html)
- [https://developer.aliyun.com/article/706121](https://developer.aliyun.com/article/706121)
- [https://chatgpt.com/](https://chatgpt.com/)