# Linux 环境配置常用命令

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-12-19</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## Docker

卸载系统之前的 Docker

```bash
sudo yum remove docker \
				  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

安装必要的工具

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

设置源仓库（阿里云镜像）

```bash
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

安装最新社区版docker

```bash
yum install docker-ce
```

启动Docker

```bash
sudo systemctl start docker
```

配置镜像加速，此处需要根据不同的服务器厂商来配置，例如腾讯云选择腾讯云的 Docker 镜像源

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://chqac97z.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

查看是否安装成功

```bash
docker -v
docker info
```

对于 Windows 版本，常出现的问题已经以及解决方案：https://blog.csdn.net/cplvfx/article/details/138033c2

## MySQL

Docker 下载

```bash
docker pull mysql:8.0
```

运行

```bash
docker run --name mysql:8.0 -d -p 3306:3306 -v /lijunxi/mysql/log:/var/log/mysql -v /lijunxi/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=jixer666mysql --restart=always mysql
```

## Redis

Docker 下载

```bash
docker pull redis
```

下载配置文件

```bash
wget http://download.redis.io/redis-stable/redis.conf
```

修改配置

```bash
bind 127.0.0.1 # 这行要注释掉，解除本地连接限制
protected-mode no # 默认yes，如果设置为yes，则只允许在本机的回环连接，其他机器无法连接。
daemonize no # 默认no 为不守护进程模式，docker部署不需要改为yes，docker run -d本身就是后台启动，不然会冲突
requirepass 123456 # 设置密码
appendonly yes # 持久化
```

运行

```bash
docker run --name redis \
  -p 6379:6379 \
  -v /lijunxi/redis/redis.conf:/etc/redis/redis.conf \
  -v /lijunxi/redis/data:/data \
  -d redis redis-server /etc/redis/redis.conf --appendonly yes
```

## RabbitMQ

Docker 下载

```bash
docker pull rabbitmq
```

运行

```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 -v /lijunxi/rabbitmq/data:/var/lib/rabbitmq --hostname myRabbit -e RABBITMQ_DEFAULT_VHOST=my_vhost  -e RABBITMQ_DEFAULT_USER=jixer666rabbitmq -e RABBITMQ_DEFAULT_PASS=jixer666rabbitmq rabbitmq
```

开启 Web 管理页面

```bash
docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_management
```

## Nginx

相关依赖下载

```bash
yum install -y gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel
```

下载 nginx

```bash
wget http://nginx.org/download/nginx-1.25.1.tar.gz
```

解压

```bash
 tar -zxvf nginx-1.25.1.tar.gz
```

编译安装 nginx

```bash
cd nginx-1.25.1/
./configure
make&&make install
```

启动

```bash
cd /usr/local/nginx/sbin
./nginx
```

## Minio

Docker 下载

```bash
docker pull minio/minio
```

运行，终端的接口为9001，java 代码调用接口为9092

```bash
docker run -d -p 9000:9000 -p 9090:9090 --name minio -e "MINIO_ROOT_USER=jixerminio666" -e "MINIO_ROOT_PASSWORD=jixerminio666" -v /usr/bin/lijunxi/minio/data:/data -v /usr/bin/lijunxi/minio/config:/root/.minio minio/minio server /data --console-address ":9000" --address ":9090"
```

## Zookeeper

Docker 下载

```bash
docker pull zookeeper
```

运行

```bash
docker run -d --name zookeeper --privileged=true -p 2181:2181  -v /lijunxi/zookeeper/data
:/data -v /lijunxi/zookeeper/conf:/conf -v /lijunxi/zookeeper/logs:/datalog zookeeper
```

## Jenkins

| **Jenkins 版本**    | **最低 JDK 要求** | **推荐 JDK 版本** | **兼容性说明**                   |
| :------------------ | :---------------- | :---------------- | :------------------------------- |
| Jenkins 2.428 (LTS) | JDK 11            | JDK 17            | 从 2.357 起不再支持 JDK 8。      |
| Jenkins 2.346 (LTS) | JDK 8             | JDK 11            | 最后一个支持 JDK 8 的 LTS 版本。 |
| Jenkins 2.164+      | JDK 8             | JDK 11            | 支持 JDK 8/11，但推荐 JDK 11。   |
| Jenkins 2.361+      | JDK 11            | JDK 17            | 停止对 JDK 8 的官方支持。        |
| Jenkins 2.387+      | JDK 11            | JDK 17            | 新增对 JDK 17 的正式支持。       |

Docker 下载

```bash
docker pull jenkins/jenkins:2.346.1-lts
```

启动

```bash
docker run -d \
  --name jenkins \
  -p 8080:8080 -p 50000:50000 \
  -v /usr/bin/lijunxi/jenkins:/var/jenkins_home \
  -v $(which docker):/usr/bin/docker \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -u 0 \
  --restart=on-failure:3 \
  jenkins/jenkins:2.346.1-lts
```

```bash
docker run -d --name jenkins -p 8080:8080 -p 50000:50000 -v D:/environment/jenkins:/var/jenkins_home -v D:/docker/resources/bin/docker.exe:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -u 0 --restart=on-failure:3 jenkins/jenkins:2.479.1
```

管理员账号：jixer666jenkins jixer666jenkins

## Gitlab

Docker 下载

```bash
docker pull gitlab/gitlab-ce:latest
```

启动

```bash
docker run \
 -itd  \
 -p 9980:80 \
 -p 9922:22 \
 -v /home/gitlab/etc:/etc/gitlab  \
 -v /home/gitlab/log:/var/log/gitlab \
 -v /home/gitlab/opt:/var/opt/gitlab \
 --restart always \
 --privileged=true \
 --name gitlab \
 gitlab/gitlab-ce
```

gitlab 默认账号：root

gitlab 默认密码：/etc/gitlab/initial_root_password，自定义后的密码为：Ljx20021106..

## Elasticsearch

创建网络

```bash
docker network create es-net
```

拉取镜像

```bash
docker pull elasticsearch:6.5.4
```

启动

```bash
docker run -d --restart=no --name es --network es-net -p 9200:9200 -p 9300:9300 --privileged -v /d/environment/elasticsearch/data:/usr/share/elasticsearch/data -v /d/environment/elasticsearch/plugins:/usr/share/elasticsearch/plugins -e "discovery.type=single-node" -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "xpack.security.enabled=false" elasticsearch:6.5.4
```

## Kibana

拉取镜像

```bash
docker pull kibana:6.5.4
```

启动

```bash
docker run -d --name kibana -e ELASTICSEARCH_HOSTS=http://es:9200 --network=es-net -p 5601:5601 kibana:6.5.4
```

## Zipkin

拉取镜像

```bash
docker pull openzipkin/zipkin
```

启动

内存存储

```bash
docker run -d -p 9411:9411 --name zipkin openzipkin/zipkin
```

MySQL 存储

```bash
docker run -d -p 9411:9411 -e STORAGE_TYPE=mysql -e MYSQL_HOST=127.0.0.1:3306 -e MYSQL_USER=root -e MYSQL_PASS=123456 -e MYSQL_DB=zipkin --name zipkin-mysql openzipkin/zipkin
```

ES 存储

```bash
docker run -d -p 9411:9411 -e STORAGE_TYPE=elasticsearch  -e ES_HOSTS=http://elasticsearch:9200 --name zipkin-es openzipkin/zipkin
```



## 部署项目

### Nginx 配置

伪静态

```bash
location / {
  if (!-e $request_filename) {
    rewrite  ^(.*)$ /index.html?s=/$1  last;
    break;
  }
}
```

反向代理

```bash
 location /api {
          proxy_http_version 1.1;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          # 把 /api 路径下的请求转发给真正的后端服务器
  	  proxy_pass http://xxx.xxx.xxx:9898;
      }
```

### 文件传输

文件传输到服务器

```bash
scp -r D:\Springboot\Springboot项目\blog\blog-server\target\blog-server-1.0-SNAPSHOT.jar root@xxx.xxx.xxx:/lijunxi/project/blog
```

### 运行 SpringBoot 项目

**普通方法**

运行 jar 包并输出日志文件，日志文件会按照10mb大小为一个文件保存

```bash
nohup java -jar blog-server-1.0-SNAPSHOT.jar > nohup.log 2>&1 &
```

查询 java 项目进程

```bash
ps aux | grep "java -jar"
```

杀死进程

```bash
kill -9 xxx
```

**Docker 部署**

编写 Dockerfile 文件

```dockerfile
FROM  openjdk:8
VOLUME /usr/bin/lijunxi/test
ADD project-admin.jar project-admin.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/project-admin.jar"]
```

构建镜像

```bash
docker build -t archive-demo .
```

运行

```bash
docker run -d -p 8080:8080 --name archive-demo archive-demo
```

