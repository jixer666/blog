---
title: RabbitMQ学习笔记
date: 2025-01-05 09:01:01
tags: ["RabbitMQ"]
category: 学习
thumbnail: 
sticky: 
---

## 基本概念

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/sadsad.png)

- virtual-host：虚拟主机（数据隔离）
- publisher：生产者
- consumer：消费者
- queue：队列（存储消息）
- exchange：交换机（路由消息）

## 工作模式

### 简单模式

一个消费者绑定一个队列

发送消息：

```java
@Autowired
private RabbitTemplate rabbitTemplate;

@Test
public void t1(){
    rabbitTemplate.convertAndSend("simple.queue", "HelloWorld");
}
```

接收消息：

```java
@RabbitListener(queues = "simple.queue")
public void listenSimpleQueue(String msg){
    log.info("收到消息：{}", msg);
}
```

### Work 模式

多个消费者绑定一个队列，共同消费队列中的消息

![](https://s11.ax1x.com/2024/01/30/pFKdfBt.png)

生产者：

```java
@Test
public void t2() throws InterruptedException {
    for(int i = 1; i <= 50; i++){
        rabbitTemplate.convertAndSend("work.queue", "HelloWorld! Work_" + i);
        Thread.sleep(20);
    }
}
```

消费者：

```java
@RabbitListener(queues = "work.queue")
public void listenWorkQueue1(String msg) throws InterruptedException {
    log.info("消费者1收到消息：{}", msg);
    Thread.sleep(20);
}

@RabbitListener(queues = "work.queue")
public void listenWorkQueue2(String msg) throws InterruptedException {
    log.info("消费者2收到消息：....{}", msg);
    Thread.sleep(200);
}
```

这里我模拟了两个不同的处理能力消费者，消费者1的消费能力大于消费者2。若我们就直接用这个，控制台打印：

```
消费者1收到消息：HelloWorld! Work_1
消费者2收到消息：....HelloWorld! Work_2
消费者1收到消息：HelloWorld! Work_3
消费者1收到消息：HelloWorld! Work_5
消费者1收到消息：HelloWorld! Work_7
消费者2收到消息：....HelloWorld! Work_4
消费者1收到消息：HelloWorld! Work_9
消费者1收到消息：HelloWorld! Work_11
消费者1收到消息：HelloWorld! Work_13
消费者2收到消息：....HelloWorld! Work_6
消费者1收到消息：HelloWorld! Work_15
消费者1收到消息：HelloWorld! Work_17
消费者1收到消息：HelloWorld! Work_19
消费者1收到消息：HelloWorld! Work_21
消费者2收到消息：....HelloWorld! Work_8
消费者1收到消息：HelloWorld! Work_23
消费者1收到消息：HelloWorld! Work_25
消费者1收到消息：HelloWorld! Work_27
消费者2收到消息：....HelloWorld! Work_10
消费者1收到消息：HelloWorld! Work_29
消费者1收到消息：HelloWorld! Work_31
消费者1收到消息：HelloWorld! Work_33
消费者2收到消息：....HelloWorld! Work_12
消费者1收到消息：HelloWorld! Work_35
消费者1收到消息：HelloWorld! Work_37
消费者1收到消息：HelloWorld! Work_39
消费者2收到消息：....HelloWorld! Work_14
消费者1收到消息：HelloWorld! Work_41
消费者1收到消息：HelloWorld! Work_43
消费者1收到消息：HelloWorld! Work_45
消费者1收到消息：HelloWorld! Work_47
消费者2收到消息：....HelloWorld! Work_16
消费者1收到消息：HelloWorld! Work_49
消费者2收到消息：....HelloWorld! Work_18
消费者2收到消息：....HelloWorld! Work_20
消费者2收到消息：....HelloWorld! Work_22
消费者2收到消息：....HelloWorld! Work_24
消费者2收到消息：....HelloWorld! Work_26
消费者2收到消息：....HelloWorld! Work_28
消费者2收到消息：....HelloWorld! Work_30
消费者2收到消息：....HelloWorld! Work_32
消费者2收到消息：....HelloWorld! Work_34
消费者2收到消息：....HelloWorld! Work_36
消费者2收到消息：....HelloWorld! Work_38
消费者2收到消息：....HelloWorld! Work_40
消费者2收到消息：....HelloWorld! Work_42
消费者2收到消息：....HelloWorld! Work_44
消费者2收到消息：....HelloWorld! Work_46
消费者2收到消息：....HelloWorld! Work_48
消费者2收到消息：....HelloWorld! Work_50
```

可以看到，消费者1和消费者2消费的数量是一样的。但是因为消费者1的消费速度大于2，所以消息很快就会被消费完，而消费者2的速度太慢，导致消息一直堆积

修改代码，添加如下配置：

```yaml
spring:
  rabbitmq:
    listener:
      simple:
        prefetch: 1 # 每次只能领取一条消息，处理完才能获取一下条消息
```

让消费者只有在处理完当前1条消息后才能继续消费，这样执行一遍，控制台打印：

```
消费者1收到消息：HelloWorld! Work_1
消费者2收到消息：....HelloWorld! Work_2
消费者1收到消息：HelloWorld! Work_3
消费者1收到消息：HelloWorld! Work_4
消费者1收到消息：HelloWorld! Work_5
消费者1收到消息：HelloWorld! Work_6
消费者2收到消息：....HelloWorld! Work_8
消费者1收到消息：HelloWorld! Work_7
消费者1收到消息：HelloWorld! Work_9
消费者1收到消息：HelloWorld! Work_10
消费者1收到消息：HelloWorld! Work_11
消费者1收到消息：HelloWorld! Work_12
消费者1收到消息：HelloWorld! Work_13
消费者1收到消息：HelloWorld! Work_14
消费者2收到消息：....HelloWorld! Work_15
消费者1收到消息：HelloWorld! Work_16
消费者1收到消息：HelloWorld! Work_17
消费者1收到消息：HelloWorld! Work_18
消费者1收到消息：HelloWorld! Work_19
消费者1收到消息：HelloWorld! Work_20
消费者1收到消息：HelloWorld! Work_21
消费者2收到消息：....HelloWorld! Work_23
消费者1收到消息：HelloWorld! Work_22
消费者1收到消息：HelloWorld! Work_24
消费者1收到消息：HelloWorld! Work_25
消费者1收到消息：HelloWorld! Work_26
消费者1收到消息：HelloWorld! Work_27
消费者1收到消息：HelloWorld! Work_28
消费者1收到消息：HelloWorld! Work_29
消费者1收到消息：HelloWorld! Work_30
消费者2收到消息：....HelloWorld! Work_31
消费者1收到消息：HelloWorld! Work_32
消费者1收到消息：HelloWorld! Work_33
消费者1收到消息：HelloWorld! Work_34
消费者1收到消息：HelloWorld! Work_35
消费者1收到消息：HelloWorld! Work_36
消费者1收到消息：HelloWorld! Work_37
消费者2收到消息：....HelloWorld! Work_38
消费者1收到消息：HelloWorld! Work_39
消费者1收到消息：HelloWorld! Work_40
消费者1收到消息：HelloWorld! Work_41
消费者1收到消息：HelloWorld! Work_42
消费者1收到消息：HelloWorld! Work_43
消费者1收到消息：HelloWorld! Work_44
消费者1收到消息：HelloWorld! Work_45
消费者2收到消息：....HelloWorld! Work_46
消费者1收到消息：HelloWorld! Work_47
消费者1收到消息：HelloWorld! Work_48
消费者1收到消息：HelloWorld! Work_49
消费者1收到消息：HelloWorld! Work_50
```

可以发现，消费者1的消费数量明显多于消费者2，达到了一种能者多劳的效果

## 交换机

生产环境中消息不会直接发送到队列，需要经过交换机来转发，有三种交换机类型:

- Fanou：广播
- Direct：定向
- Topic：话题

### Fanout 交换机

创建一个类型为 `fanout` 交换机：`test.fanout`，绑定两个队列 `fanout.queue1` 和 `fanout.queue2`

生产者：

```java
@Test
public void t3(){
    rabbitTemplate.convertAndSend("test.fanout", null, "HelloWorld! Fanout");
}
```

消费者：

```java
@RabbitListener(queues = "fanout.queue1")
public void listenFanoutQueue1(String msg) throws InterruptedException {
    log.info("消费者1收到消息：{}", msg);
}

@RabbitListener(queues = "fanout.queue2")
public void listenFanoutQueue2(String msg) throws InterruptedException {
    log.info("消费者2收到消息：....{}", msg);
}
```

控制台打印：

```
消费者2收到消息：....HelloWorld! Fanout
消费者1收到消息：HelloWorld! Fanout
```

可以知道，消息通过 Fanout 交换机转发，会发送给绑定该交换机的所有队列，这就好理解广播的作用了

### Direct 交换机

Direct 交换机可以在 Fanout 交换机的基础上实现更复杂的业务，比如想要在广播的同时，让某些队列不接受消息

创建一个交换机 `test.dirct`，绑定两个队列：`dirct.queue1` 包括 routing key：`blue `和 `red` 、`dirct.queue2` 包括 routing key：`red` 和 `yellow`

生产者：

```java
@Test
public void t4(){
      rabbitTemplate.convertAndSend("test.direct", "red", "HelloWorld! Direct Red");
      rabbitTemplate.convertAndSend("test.direct", "blue", "HelloWorld! Direct Blue");
    rabbitTemplate.convertAndSend("test.direct", "yellow", "HelloWorld! Direct Yellow");
}
```

消费者：

```java
@RabbitListener(queues = "direct.queue1")
public void listenDirectQueue1(String msg) throws InterruptedException {
    log.info("消费者1收到消息：{}", msg);
}

@RabbitListener(queues = "direct.queue2")
public void listenDirectQueue2(String msg) throws InterruptedException {
    log.info("消费者2收到消息：....{}", msg);
}
```

有控制台打印可知：当发送消息 routing key 为 red 的时候，两者都会收到消息；当 routing key 为 blue 的时候，只有第一个消费者能够消费； routing key 为 yellow 的时候，只有第二个消费者能够消费

### Topic 交换机

Topic 交换机相对于 Direct 交换机，它能够在使用 routing key 的时候使用通配符表示，适用的场景更多

有两种通配符，通配符通过 `.` 进行分割

- #：代指0个或者多个单词
- *：代指1个单词

创建一个交换机 `test.queue`，绑定两个队列：`topic.queue1` 包括 routing key：`china.#`、`topic.queue2` 包括 routing key：`#.news`

生产者：

```java
@Test
public void t5(){
      rabbitTemplate.convertAndSend("test.topic", "china.666", "HelloWorld! Topic china");
      rabbitTemplate.convertAndSend("test.topic", "japan.news", "HelloWorld! Topic 日本");
    rabbitTemplate.convertAndSend("test.topic", "china.news", "HelloWorld! Topic 都有");
}
```

消费者：

```java
@RabbitListener(queues = "topic.queue1")
public void listenTopicQueue1(String msg) throws InterruptedException {
    log.info("消费者1收到消息：{}", msg);
}

@RabbitListener(queues = "topic.queue2")
public void listenTopicQueue2(String msg) throws InterruptedException {
    log.info("消费者2收到消息：....{}", msg);
}
```

## 交换机和队列绑定

有两种方式，一种是配置实现，一种是注解实现

第一种当出现交换机和队列数量过多时，代码就要写很多，且绑定关系也会变得复杂，所以选择上最好选用第二种

### 配置式

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/asdaklsASDjlk.png)

创建一个 Fanout 交换机

```java
@Bean
public FanoutExchange fanoutExchange1(){
    return new FanoutExchange("test.fanout2");
}
```

创建一个队列

```java
@Bean
public Queue fanoutQueue1(){
    return new Queue("fanout.queue3");
}
```

绑定队列和交换机

```java
// 第一种绑定方式
@Bean
public Binding binding(){
    return BindingBuilder.bind(fanoutQueue1()).to(fanoutExchange1());
}
// 第二种绑定方式
@Bean
public Binding binding(FanoutExchange fanoutExchange1, Queue fanoutQueue1){
    return BindingBuilder.bind(fanoutQueue1).to(fanoutExchange1);
}

// 若是有routing key
@Bean
public Binding binding(DirectExchange DirectExchange1, Queue fanoutQueue1){
    return BindingBuilder.bind(fanoutQueue1).to(DirectExchange1).with("red");
}
```

### 注解式

参考格式

```java
@RabbitListener(bindings = @QueueBinding(
        value = @Queue(name = "direct.queue3", durable = "true"),
        exchange = @Exchange(name = "test.direct2", type = ExchangeTypes.DIRECT),
        key = {"red", "yellow"}
))
public void listenDirectQueue3(String msg) throws InterruptedException {
    log.info("消费者2收到消息：....{}", msg);
}
```

## 消息转化器

Spring amqp 默认适用的消息转化器用的是 `SimpleMessageConverter`，当传入一个 Map 对象，因为 Map 实现了 Serializable 接口，所以会用 JDK 自带的 `(new ObjectOutputStream(stream)).writeObject(object)` 方法进行序列化，序列化的结果如下：

```
rO0ABXNyABFqYXZhLnV0aWwuSGFzaE1hcAUH2sHDFmDRAwACRgAKbG9hZEZhY3RvckkACXRocmVzaG9sZHhwP0AAAAAAAAx3CAAAABAAAAACdAAEVG9ueXQA
AzEzM3QABE1pa2V0AAMyMTN4
```

所以需要对这个对象进行 jackson 序列化

添加 yml 依赖

```yaml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.4</version>
</dependency>
```

添加 Bean，返回 `Jackson2JsonMessageConverter`

```java
@Bean
public MessageConverter jackMessageConverter(){
    return new Jackson2JsonMessageConverter();
}
```

生产者

```java
@Test
public void t6(){
    Map<String, String> res = new HashMap<>();
    res.put("Tony", "133");
    res.put("Mike", "213");
    rabbitTemplate.convertAndSend("object.queue", res);
}
```

消费者

```java
@RabbitListener(queues = "object.queue")
public void listenObjectQueue(Map<String, String> msg) {
    log.info("消费者收到消息：....{}", msg);
}
```

控制台输出

```
消费者收到消息：....{Tony=133, Mike=213}
```

可以看到，消息已经成功序列化

## 消息的可靠性

### 生产者可靠性

#### 生产者重连

由于网络波动，可能出现客户端连接 MQ 失败的情况，导致连接 MQ 失败

解决：添加 yml 配置

```yaml
spring:
  rabbitmq:
	...
    # 以下配置是MQ连接超时的配置
    connection-timeout: 1s # 超时连接时间
    template:
      retry:
        enabled: true # 开启超时自动重连
        initial-interval: 1000ms # 失败后的初始等待时间
        multiplier: 1 # 失败后下次等待时常的倍数
        max-attempts: 3 # 最大重连次数
```

当连接超时后，会等待1秒后再次进行重连，若3次重连后任然失败，就会抛出异常

**注意**：超时重连是阻塞式的重试，也就是说重试不成功是不会执行消息发送后面的代码的

#### 生产者确认

有两种确认机制： Publisher Confirm 和 Publisher Return

当消息发送到了 MQ，返回 ACK，否则都是 NACK

添加 yml 配置

```yaml
spring:
  rabbitmq:
   	...
    # 以下是生产者消息确认
    publisher-confirm-type: correlated # 开启消息确认机制，类型为异步
    publisher-returns: true # 开启消息return机制，用于返回失败消息
```

有三种消息确认类型

- none：关闭确认机制
- simple：同步阻塞等待回调消息
- correlated：异步回调执行回调消息

添加 Confirm 配置类，需要实现 `ApplicationContextAware` 接口

```java
@Slf4j
@Configuration
public class MqConfirmConfig implements ApplicationContextAware {
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        RabbitTemplate rabbitTemplate = applicationContext.getBean(RabbitTemplate.class);
        rabbitTemplate.setReturnsCallback(new RabbitTemplate.ReturnsCallback() {
            @Override
            public void returnedMessage(ReturnedMessage message) {
                log.error("收到消息return callback：message:{}, exchange:{}, code:{}, text:{}, routingKey:{}",
                        message.getMessage(), message.getExchange(), message.getReplyCode(),
                        message.getReplyText(), message.getRoutingKey());
            }
        });
    }
}
```

生产者：

```java
@Test
public void t7(){
    CorrelationData cd = new CorrelationData(UUID.randomUUID().toString(true));
    cd.getFuture().addCallback(new ListenableFutureCallback<CorrelationData.Confirm>() {
        @Override
        public void onFailure(Throwable ex) {
            // Spring内部出现错误，与MQ无关，一般不会发生错误
            log.error("消息回调失败：", ex);
        }

        @Override
        public void onSuccess(CorrelationData.Confirm result) {
            if (result.isAck()){
                log.info("消息发送成功，收到ACK");
            } else {
                log.error("消息发送失败，收到NACK，原因：{}", result.getReason());
            }
        }
    });

    rabbitTemplate.convertAndSend("test.direct", "yellow", "HelloWorld! Direct Yellow", cd);
}
```

此时交换机和 routing key 都是正确的，控制台打印：

```
消息发送成功，收到ACK
```

若 routing key 不正确，控制台打印：

```
消息发送成功，收到ACK
收到消息return callback：message:(Body:'"HelloWorld! Direct Yellow"' MessageProperties [headers={spring_returned_message_correlation=f6a38c92958643c299b834c543a56f38, __TypeId__=java.lang.String}, contentType=application/json, contentEncoding=UTF-8, contentLength=0, receivedDeliveryMode=PERSISTENT, priority=0, deliveryTag=0]), exchange:test.direct, code:312, text:NO_ROUTE, routingKey:yel1low
```

若交换机不存在，控制台打印：

```
消息发送失败，收到NACK，原因：channel error; protocol method: #method<channel.close>(reply-code=404, reply-text=NOT_FOUND - no exchange 'test.direct1' in vhost '/jixer', class-id=60, method-id=40)
```

**注意**：在实际开发中，尽量不使用生产者确认机制（影响效率）。若一定要使用，无需开启 Publisher Return 机制，因为一般路由失败都是自己业务的问题，比如：交换机名字写出。对于 NACK 消息可以有限次数重试机，依然失败则记录异常消息

### MQ 可靠性

#### 数据持久化

数据持久化有三个方面：

- 交换机持久化
- 队列持久化
- 消息持久化

当我们使用 SpringBoot 创建交换机、队列、消息的时候会默认使用持久化

若我们不用持久化，重启一遍 RabbitMQ，这些数据就会丢失

下面演示发送消息非持久化带来的问题：

生产者

```java
@Test
public void t8(){
    Message msg = MessageBuilder.withBody("123123".getBytes(StandardCharsets.UTF_8))
            .setDeliveryMode(MessageDeliveryMode.NON_PERSISTENT)
            .build();
    for(int i = 0; i < 1000000; i++){
        rabbitTemplate.convertAndSend("simple.queue", msg);
    }
}
```

无消费者，此时观察管理页面

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/124GHDhj.png)

可以看到，当消息增多，出现堆积，会造成 Page Out，MQ 会陷入短暂的阻塞，接收速度变为0，无法处理消息

这是因为非持久的消息保存在内存中，MQ 会每隔一段时间当把消息存入硬盘，这段时间内会阻塞出现 Page Out

若我们发送持久化就不会出现 Page Out 的问题

#### Lazy Queue

Lazy Queue的特点：

- 接收的消息直接存入磁盘，也就是页面显示直接在 Page Out
- 消费者消费需要从磁盘读取并加载到内存中
- 支持百万条消息存储

**创建 Lazy Queue**

配置类方式

```java
@Bean
public Queue lazyQueue(){
    return QueueBuilder.durable("lazy.queue").lazy().build();
}
```

注解方式

```java
@RabbitListener(queuesToDeclare = @Queue(
        name = "lazy.queue",
        durable = "true",
        arguments = @Argument(name = "x-queue-mode", value = "lazy")
))
public void listenLazyQueue(String msg) {
    log.info("消费者收到消息：....{}", msg);
}
```

发送100万条消息，管理页面显示：

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/dHDlkjae.png)

可以看到消息一直处于 Page Out，并且速率大部分时间都处于峰值

### 消费者的可靠性

#### 消费者确认

当消费者处理完消息后，可以告知 RabbitMQ 自己消息的处理状态，有三种状态：

- ACK：成功，MQ 删除消息
- NACK：失败，MQ 需要再次投递消息
- REJECT：失败并拒绝，MQ 删除消息（一般是出现消息格式错误）

添加 yaml 依赖

```yaml
spring:
  rabbitmq:
	...
    listener:
      simple:
        prefetch: 1 # 每次只能领取一条消息，处理完才能获取一下条消息
        acknowledge-mode: auto # 消费者消息确认类型
```

消费者确认类型有三种：

- none：不做处理
- manual：手动模式
- auto：自动模式（默认）
  - 业务异常返回 NACK
  - 消息处理异常或校验异常返回 REJECT

向 `simple.queue` 队列发送一条消息

消费者

```java
@RabbitListener(queues = "simple.queue")
public void listenSimpleQueue(String msg) throws Exception {
    log.info("收到消息：{}", msg);
    throw new Exception("故意的");
}
```

若选择用 none 类型：走到异常，但这段代码还没走完，消息已经消费了，消息丢失

若选用 auto 类型：走到异常后，业务返回 NACK，RabbitMQ 自动重新投递，直到消费成功为止；若将传参 String 类型换成其他类型（消息格式错误），业务代码返回 REJECT，MQ 会消费并删除消息

#### 消费者失败重试

上面消费者确认有个问题：经过消费者确认后一直失败一直在重试，一直在消耗系统资源

解决办法：添加消费者失败重试

当重试次数达一定次数后就自定义重试策略

有三种重试策略：

- RepublishMessageRecoverer：将失败消息投递到指定的交换机处理
- RejectAndDontRequeueRecoverer：直接 REJECT，丢弃消息（默认）
- ImmediateRequeueMessageRecoverer：返回 NACK，消息重回入队

这里选用 RepublishMessageRecoverer 策略

添加 yaml 配置

```yaml
spring:
  rabbitmq:
  	...
    listener:
      simple:
        prefetch: 1 # 每次只能领取一条消息，处理完才能获取一下条消息
        acknowledge-mode: auto # 消费者消息确认类型
    # 以下是开启消费者失败重试机制
        retry:
          enabled: true
          initial-interval: 1000ms # 初始失败的时长等待
          multiplier: 1 # 失败后下次等待时常的倍数
          max-attempts: 3 # 最大重连次数
          stateless: true # true无状态，false有状态。如果业务包含事务，改为false
```

新建一个 ErrorConfig 配置类，用于绑定失败处理交换机和队列，并设置失败处理策略

通过 `@ConditionalOnProperty` 来限制只有当 yml 配置文件中 `retry.enabled` 为 `true` 的时候才创建 Bean

```java
@Configuration
@ConditionalOnProperty(prefix = "spring.rabbitmq.listener.simple", name = "retry.enabled", havingValue = "true") // 只有当前配置文件为true才创建bean
public class ErrorConfig {
    @Bean
    public DirectExchange errorExchange(){
        return new DirectExchange("test.error");
    }
    @Bean
    public Queue errorQueue(){
        return new Queue("error.queue");
    }
    @Bean
    public Binding binding(){
        return BindingBuilder.bind(errorQueue()).to(errorExchange()).with("error");
    }
    @Bean
    public MessageRecoverer messageRecoverer(RabbitTemplate rabbitTemplate){
        return new RepublishMessageRecoverer(rabbitTemplate, "test.error", "error");
    }
}
```

在消费者代码处抛出异常，会看到当重试三次后，会将失败消息发送错误处理交换机，再由交换机转发到队列，后面由人工进行处理

错误消息如下：可以看清楚的看到那块地方出错了

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/d12HSyrash.png)

#### 消费者的幂等性

通过上述消费者的确认和消费者的失败重试，可以保证消费者至少能够把消息消费一次，但是可能出现多次消费的情况，多次消费可能导致数据错误

幂等：执行一次和执行多次对业务的结果是一样的

**方案一：唯一消息 ID**

给每个消息设置一个唯一的 ID，每次消费者进行消费的时候将 ID 保存入数据库，下次消费前先判断数据库是否已经存在 ID，存在就代表已经消费，否则就可以消费

修改消息转化器，设置自动创建消息 ID

```java
@Bean
public MessageConverter jackMessageConverter(){
    Jackson2JsonMessageConverter jackson2JsonMessageConverter = new Jackson2JsonMessageConverter();
    jackson2JsonMessageConverter.setCreateMessageIds(true);
    return jackson2JsonMessageConverter;
}
```

创建后的消息如图所示：

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/sadJ1.png)

**方案二：业务判断**

根据业务的需求来判断，比如：支付服务完成后发送消息给订单服务，订单服务需要将订单状态由未支付变为已支付，所以这里只需要对未支付的订单进行消费即可，已支付的订单不需要再次处理

具体的 SQL 语句变为：

```sql
update tb_order set status = 1 where id = xxx and status = 2
```

只需要对数据库操作一次就满足了要求，而方案一需要对数据库进行多次操作（查询，更新）

## 延迟消息

### 死信交换机

创建队列与交换，关系如图所示：

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/asdUI1g.png)

`simple.direct` 交换机绑定 `simple.queue` 队列， `simple.queue` 绑定 `dlx.direct` 死信交换机

创建 `simple.queue` 的时候绑定死信交换机方法如下：

![](https://gitee.com/lijunxi666/picture-bed/raw/master/rabbitmq/dKLHJh.png)

生产者：

```java
@Test
public void t10(){
    rabbitTemplate.convertAndSend("simple.direct", "simple", "你好", new MessagePostProcessor() {
        @Override
        public Message postProcessMessage(Message message) throws AmqpException {
            message.getMessageProperties().setExpiration("10000"); // 设置过期时间
            return message;
        }
    });
    log.info("发送消息");
}
```

消费者：

```java
@RabbitListener(queues = "dlx.queue")
public void listenDlxQueue(String msg) {
    log.info("消费者收到消息：....{}", msg);
}
```

生产者发送过期时间为10s消息，消费者监听的是死信队列，并不是监听的是 `simple.queue` 这个队列

因为 `simple.queue` 队列的消息没有被消费，所以当10s后消息会被发送到死信交换机，死信交换机转发到死信队列

### 消息延迟插件

消息延迟与死信交换机不同，它是将消息发送到交换机，在交换机中暂存一段时间后再投递到队列中

插件下载地址：[rabbitmq/rabbitmq-delayed-message-exchange](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases)

进入 RabbitMQ 插件目录执行以下命令开启插件

```
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```

生产者：

```java
@Test
public void t11(){
    rabbitTemplate.convertAndSend("delay.direct", "hi", "你好", new MessagePostProcessor() {
        @Override
        public Message postProcessMessage(Message message) throws AmqpException {
            message.getMessageProperties().setDelay(10000); // 设置延迟时间
            return message;
        }
    });
    log.info("发送消息");
}
```

消费者：

```java
@RabbitListener(bindings = @QueueBinding(
        value = @Queue(name = "delay.queue", durable = "true"),
        exchange = @Exchange(name = "delay.direct", delayed = "true"),
        key = {"hi", "hello"}
))
public void listenDelayQueue(String msg) throws InterruptedException {
    log.info("消费者收到消息：....{}", msg);
}
```

RabbitMQ 的延迟消息是有一定的功能损耗的，所以适用于延迟时间不太长的场景

在一般的超时订单场景中，若设置的超时时间为30分钟，会存在两个问题：

- 若并发高，30分钟可能堆积消息过多，MQ 压力大
- 大多数订单在下单后1分钟内就会支付，但是 MQ 却需要等待30分钟，浪费资源

解决方法：设置消息过期时间梯度数组，将30分钟拆分为多个小部分，每个部分个根据可能支付的概率选用合适的等大时间