# BIO、NIO与Netty

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-07-06</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

在公司的实际业务中，需要设计一个人工客服的需求，于是遍学习一下 Netty 相关的知识

人工客服的设计方案地址：<a href="人工客服方案.html">点击跳转</a>

## BIO 模型

BIO 主要产生的原因就是服务端在读取客户端的数据的时候，始终没有读取完，就一直陷入阻塞状态

下面用简单代码实现一下 BIO

客户端

```java
public class BioClient {
    public static void main(String[] args) throws IOException, InterruptedException {
        Thread a = new Thread(() -> {
            try {
                fun();
            } catch (IOException e) {
                throw new RuntimeException(e);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }, "A");
        Thread b = new Thread(() -> {
            try {
                fun();
            } catch (IOException e) {
                throw new RuntimeException(e);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }, "B");
        a.start();
        b.start();
        a.join();
        b.join();
    }

    private static void fun() throws IOException, InterruptedException {
        Socket socket = new Socket();
        socket.connect(new InetSocketAddress("127.0.0.1", 8888));
        OutputStream outputStream = socket.getOutputStream();
        for (int i = 0; i < 10; i++) {
            outputStream.write((Thread.currentThread().getName() + " hello:" + i).getBytes());
            outputStream.flush();
        }
        Thread.sleep(10000);
        outputStream.close();
    }
}
```

服务端

```java
public class BioServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8888);
        while (true) {
            Socket socket = serverSocket.accept();
            InputStream inputStream = socket.getInputStream();
            int len;
            byte[] buff = new byte[1024];
            while ((len = inputStream.read(buff)) != -1) {
                String s = new String(buff, 0, len);
                System.out.println("收到消息: " + s);
            }
            System.out.println("客服端断开连接");

        }
    }
}
```

先启动服务端，再启动客户端，控制台显示：

```
收到消息: B hello:0
收到消息: B hello:1B hello:2B hello:3B hello:4B hello:5B hello:6B hello:7B hello:8B hello:9
```

服务端只用处理一个线程的连接，因为代码中设置了10秒等待，所以服务端只有先处理完 B 线程，才能处理 A 线程，A 线程被阻塞

## NIO 模型

NIO 有三个核心组件：

- channel：建立的连接，是一个一个通道
- buffer：通道上传输的数据
- selector：监听器，监听通道什么时候可以读，什么时候可以写

![https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_09-38-32.png](https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_09-38-32.png)			

客户端代码不变，只修改服务端代码

```java
public class NioServer {
    public static void main(String[] args) throws IOException {
        Selector selector = Selector.open();
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        serverSocketChannel.configureBlocking(false); // 设置为非阻塞
        serverSocketChannel.bind(new InetSocketAddress("127.0.0.1", 8888));
        serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT); // 注册一个监听器
        while (true) {
            selector.select(); // 监听敢兴趣的事件，也就是 accept 事件
            Iterator<SelectionKey> iterator = selector.selectedKeys().iterator();
            while (iterator.hasNext()) {
                SelectionKey key = iterator.next();
                if (key.isAcceptable()) {
                    // key 是能够连接的
                    ServerSocketChannel serverSocketChannel1 = (ServerSocketChannel) key.channel(); // 这里的 serverSocketChannel1 与上面的 serverSocketChannel 是相同的
                    SocketChannel client = serverSocketChannel1.accept();
                    client.configureBlocking(false);
                    client.register(selector, SelectionKey.OP_READ); // 客户端注册一个可读事件
                    System.out.println("客户端连接");
                }
                if (key.isReadable()) {
                    // key 是可以读取的
                    SocketChannel channel = (SocketChannel) key.channel();
                    ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
                    int length = channel.read(byteBuffer);
                    if (length == -1) {
                        channel.close();
                        System.out.println("客户端断开");
                    } else {
                        byteBuffer.flip(); // 读取状态
                        byte[] bytes = new byte[byteBuffer.remaining()]; // byteBuffer 中剩余的字节
                        byteBuffer.get(bytes);
                        String s = new String(bytes);
                        System.out.println(s);
                    }
                }
            }
        }
    }
}

```

同样的都启动起来，控制台打印如下：

```
客户端连接
B hello:0B hello:1B hello:2B hello:3B hello:4B hello:5B hello:6B hello:7B hello:8B hello:9
客户端连接
A hello:0A hello:1A hello:2A hello:3A hello:4A hello:5A hello:6A hello:7A hello:8A hello:9
```

A 和 B 两个线程都打印出了，并没有出现阻塞现象

### 半包

修改 `ByteBuffer` 的数组大小为 4

```java
ByteBuffer byteBuffer = ByteBuffer.allocate(4);
```

控制台打印

```java
客户端连接
A he
客户端连接
B he
llo:
llo:
...
...
...
ello
ello
:9
:9
客户端断开
客户端断开
```

每次都不能完整的读取到一句话

### 黏包

修改 `ByteBuffer` 的数组大小为 16

```java
ByteBuffer byteBuffer = ByteBuffer.allocate(4);
```

控制台打印

```java
客户端连接
B hello:0B hello
客户端连接
A hello:0A hello
:1B hello:2B hel
:1A hello:2A hel
lo:3B hello:4B h
lo:3A hello:4A h
ello:5B hello:6B
ello:5A hello:6A
 hello:7B hello:
 hello:7A hello:
8B hello:9
8A hello:9
客户端断开
客户端断开
```

读取的消息中包含下一次读取的消息，可能读取的是一部分，也可能是完整的，还可能是连着下一部分的消息

### 协议

半包和黏包出现的原因是因为 TCP 是面向流的，我们在读取流的时候是不可控制的。为了解决半包和黏包问题，需要制定一个协议，客户端和服务端都需要遵守这个协议

比如现在需要传输一个以下对象

```json
{
	name: "tom",
    age: 18
}
```

制定的协议如下：

| 6    | 3    | t    | o    | m    | 18   |
| ---- | ---- | ---- | ---- | ---- | ---- |

- 6：代表后面的消息长度
- 3：代表 name 的长度，动态获取，这里指的是 tom
- 18：固定长度，只占一个字节

前端按照这种协议传输数据，后端在每次读取的时候就知道消息的长度的多少，就不会出现只读取一部分或读多的现象

### 序列化

序列化：将对象转为二进制数组的过程

反序列化：将二进制数组转为对象的过程

## Netty

### Netty 中的常用组件

1、Boos 线程组和 Worker 线程组

Boss 线程组只有一个线程，用于监听 Accept 事件。Worker 线程组有多个线程，用于监听 Read 和 Write 事件

![https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_14-03-53.png](https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_14-03-53.png)			

2、EvenLoop 事件循环

![https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_14-04-14.png](https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_14-04-14.png)		

3、Pipeline

Pipeline 本质上是一个双向链表，维护着若干个出战或者入站处理器

![https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_14-04-54.png](https://gitee.com/lijunxi666/picture-bed/raw/master/netty/Snipaste_2025-07-06_14-04-54.png)		

4、ChannelHandler

ChannelHandler 包括：ChannelInBoundHandler、ChannelOutboundHandler

执行入站或出战的具体处理逻辑

### 案例

下面是用 Netty 实现的一个简单案例，实现了服务端和客户端的双向通讯

服务端

```java
public class NettyServer {
    public static void main(String[] args) {
        ServerBootstrap serverBootstrap = new ServerBootstrap()
                .group(new NioEventLoopGroup(), new NioEventLoopGroup())
                .channel(NioServerSocketChannel.class)
                .childHandler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel ch) throws Exception {
                        ch.pipeline().addLast(new LineBasedFrameDecoder(1024)) // 换行符的消息分隔
                                .addLast(new StringDecoder()) // 字符串解密
                                .addLast(new StringEncoder()) // 字符串加密
                                .addLast(new SimpleChannelInboundHandler<String>() {
                                    @Override
                                    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String s) throws Exception {
                                        System.out.println(s);
                                        channelHandlerContext.channel().writeAndFlush("服务器收到A消息：" + s);
                                        channelHandlerContext.fireChannelRead(s);
                                    }
                                })
                                .addLast(new SimpleChannelInboundHandler<String>() {
                                    @Override
                                    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String s) throws Exception {
                                        System.out.println(s);
                                        channelHandlerContext.channel().writeAndFlush("服务器收到B消息：" + s);
                                    }
                                });
                    }
                });
        ChannelFuture bindFuture = serverBootstrap.bind(8888);
        bindFuture.addListener((f) -> {
            if (f.isSuccess()) {
                System.out.println("服务器监听端口成功");
            } else {
                System.out.println("服务器监听端口失败");
            }
        });
    }
}
```

客户端

```java
public class NettyClient {
    public static void main(String[] args) {
        Bootstrap bootstrap = new Bootstrap()
                .group(new NioEventLoopGroup())
                .channel(NioSocketChannel.class)
                .handler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel socketChannel) throws Exception {
                        socketChannel.pipeline()
                                .addLast(new StringEncoder())
                                .addLast(new StringDecoder())
                                .addLast(new SimpleChannelInboundHandler<String>() {
                                    @Override
                                    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String s) throws Exception {
                                        System.out.println(s);
                                    }
                                });
                    }
                });
        ChannelFuture connect = bootstrap.connect("localhost", 8888);
        connect.addListener((f) -> {
            if (f.isSuccess()) {
                System.out.println("成功连接服务器");
                EventLoop eventExecutors = connect.channel().eventLoop();
                eventExecutors.scheduleAtFixedRate(() -> {
                    connect.channel().writeAndFlush("Hello\n");
                }, 0, 1, TimeUnit.SECONDS);
            } else {
                System.out.println("连接服务器出错");
            }
        });
    }
}

```

## 参考网站

- [https://www.bilibili.com/video/BV1paLfz8EUA](https://www.bilibili.com/video/BV1paLfz8EUA)

