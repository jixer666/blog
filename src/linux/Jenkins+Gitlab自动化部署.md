# Jenkins + Gitlab 自动化部署

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-12-14</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## 环境准备

### Jenkins

Docker 安装命令：

```bash
docker run -d --name jenkins -p 8080:8080 -p 50000:50000 -v D:/environment/jenkins:/var/jenkins_home -v D:/docker/resources/bin/docker.exe:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -u 0 --restart=on-failure:3 jenkins/jenkins:2.479.1
```

注意：Jenkins 版本选用的是 jenkins:2.479.1，需要 JDK 17 及以上版本

### Gitlab

Docker安装命令：

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

## 实现步骤

1、准备好一个 SpringBoot 项目，并推送到 Gitlab 仓库上

2、Jenkins 在**插件管理**中安装 `Git Parameter` 和 `Maven` 插件

3、Jenkins 在**全局工具配置**配置好 JDK 环境（需要准备两个，一个是 SpringBoot 项目的 JDK 版本，一个是 Jenkin 所需的 JDK 17）和 Maven 环境

![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-01-38.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-01-38.png)

4、Jenkins 在**全局凭据**中配置好 Git 的账号和密码认证

![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-05-14.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-05-14.png)

5、Jenkins 创建一个 Maven 项目，修改项目的配置

- 修改 Git 参数，修改为以 Tag 的形式构建项目

  ![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-06-08.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-06-08.png)

- 添加 Git 仓库地址、认证身份和指定构建的方式

  注意：这里的指定构建方式需要和上面的 Git 参数名称一致

  ![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-07-56.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-07-56.png)

- 添加构建完成后执行的 Shell 脚本命令

  ![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-10-22.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-10-22.png)

  Shell 脚本如下：

  ```shell
  #!/bin/bash
  # Jenkins 部署脚本
  
  # 服务名称
  SERVER_NAME=testdemo
  
  # jar包名称
  JAR_NAME=testdemo-1.0-SNAPSHOT.jar
  
  # 源jar路径（Maven打包后的目录）
  JAR_PATH=/var/jenkins_home/workspace/testdemo/target
  
  # 运行jar包的目录
  JAR_WORK_PATH=/var/jenkins_home/workspace/testdemo/target
  
  echo "=== 开始部署 $SERVER_NAME ==="
  
  # 1. 检查jar包是否存在
  echo "1. 检查jar包是否存在..."
  if [ ! -f "$JAR_PATH/$JAR_NAME" ]; then
      echo "错误: 找不到jar包 $JAR_PATH/$JAR_NAME"
      echo "当前目录内容:"
      ls -la $JAR_PATH/
      exit 1
  fi
  echo "✅ jar包存在: $JAR_PATH/$JAR_NAME"
  
  # 2. 查找并停止旧进程
  echo "2. 查询进程id-->$SERVER_NAME"
  PID=$(ps -ef | grep "$JAR_NAME" | grep -v grep | awk '{print $2}')
  
  if [ -n "$PID" ]; then
      echo "得到进程ID: $PID"
      echo "结束进程..."
      
      # 逐个杀死进程
      for id in $PID
      do
          echo "正在结束进程: $id"
          kill -9 $id 2>/dev/null
          sleep 1
      done
      
      # 确认进程是否已结束
      sleep 2
      CHECK_PID=$(ps -ef | grep "$JAR_NAME" | grep -v grep | awk '{print $2}')
      if [ -z "$CHECK_PID" ]; then
          echo "✅ 结束进程完成"
      else
          echo "⚠️ 警告: 仍有进程存活: $CHECK_PID"
      fi
  else
      echo "没有找到正在运行的进程"
  fi
  
  # 3. 复制jar包（如果不在同一目录）
  echo "3. 复制jar包到执行目录..."
  if [ "$JAR_PATH" != "$JAR_WORK_PATH" ]; then
      echo "复制: cp $JAR_PATH/$JAR_NAME $JAR_WORK_PATH/"
      cp $JAR_PATH/$JAR_NAME $JAR_WORK_PATH/
      echo "✅ 复制jar包完成"
  else
      echo "源目录和目标目录相同，跳过复制"
  fi
  
  # 4. 切换到工作目录
  cd $JAR_WORK_PATH
  
  # 5. 修改文件权限
  echo "4. 修改文件权限..."
  chmod 755 $JAR_NAME
  echo "✅ 文件权限已修改"
  
  # 6. 启动应用
  echo "5. 启动应用..."
  echo "启动命令: nohup java -jar $JAR_NAME &"
  
  # 设置环境变量防止Jenkins杀死进程
  export BUILD_ID=dontKillMe
  
  # 后台启动并记录日志
  nohup java -jar $JAR_NAME > app.log 2>&1 &
  
  # 获取新进程ID
  sleep 3
  NEW_PID=$(ps -ef | grep "$JAR_NAME" | grep -v grep | awk '{print $2}')
  
  if [ -n "$NEW_PID" ]; then
      echo "✅ 应用启动成功!"
      echo "进程ID: $NEW_PID"
      echo "日志文件: $JAR_WORK_PATH/app.log"
      
      # 显示最近日志
      echo "=== 最近日志 ==="
      tail -20 app.log
      echo "================"
  else
      echo "❌ 应用启动失败!"
      echo "查看错误日志:"
      tail -50 app.log
      exit 1
  fi
  
  echo "=== 部署完成 ==="
  ```

6、在 Gitlab 中打一个 Tag

![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-11-44.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-11-44.png)

7、在 jenkin 的所创建的 Maven 项目的 `Build with Parameters` 一栏就能够看到这个 Git 项目所有的 Tag，根据所需要 tag 版本进行构建即可

![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-12-28.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-12-28.png)

8、构建成功后的日志如图所示，项目会自动运行并且输出的地址也会在日志中显示

![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-15-07.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-15-07.png)

9、验证是否部署成功，项目中的代码如下：

```java
@RestController
@RequestMapping("/test")
public class TestController {
    @GetMapping
    public String test(){
        return "test";
    }
}
```

通过 ` curl http://localhost:15000/test` 验证是否输出 `test`，输出如图所示，发现成功输出，部署成功

![https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-16-49.png](https://gitee.com/lijunxi666/picture-bed/raw/master/jenkins+gitlab/Snipaste_2025-12-14_21-16-49.png)