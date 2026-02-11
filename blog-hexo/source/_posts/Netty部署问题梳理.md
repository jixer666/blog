---
title: Netty部署问题梳理
date: 2025-12-18 18:22:01
tags: ["Java", "Netty"]
category: 工作
thumbnail: 
sticky: 
---

最近笔者将人工客服写好了，需要打包上测试环境，遇到诸多问题，记一下

因为技术栈用的 Netty 框架，它会新开一个端口来专门用于处理 Websocket 连接

## 部署方案

### 后端

公司的测试环境只有一台服务器，笔者需要部署两个不同的系统，这两个不同的系统用的是同一套代码，两个系统的 Netty 的端口不能重复，所以就不能写死，需要写在配置文件中，通过 Springboot 启动命令带参数来动态设置这个端口值

### 前端

前端的部署过程异常坎坷，如下：

- 考虑到系统有开发、测试、生产三个环境，打算将后端服务的 Websocket 不同环境的 IP 地址写在 `.env` 的配置文件中。在调试过程中，发现测试和生产环境不但内网 IP 可以进入，外网 IP 也能进入，所以在前端配置文中写后端地址行不通，写的话只能写一个，要么外网，要么内网

- 在参考了 Nginx 代理转发后，考虑到通过访问前端地址，请求到 Nginx 来进行反向代理，由 Nginx 来决定是哪一个地址。所有的 Websocket 连接加上统一的前缀 `/netty`，Nginx 根据这个前缀来进行转发到后端服务的 ws 地址，这下解决了内网和外网的问题

- 在部署好测试环境后，去建立 Websocket  连接，发现连接不上，看前端控制台报错是因为测试环境是 https 协议，而 Websocket 连接是 ws 协议，需要改为 wss 协议，于是又得回到 `.env` 的配置文件去更改

- 再改完后，重新部署，去访问客服页面，页面进不去了，根据控制台报错和打印日志分析到是用户权限路径懒加载的问题，代码如下：

  ```js
  export const loadView = (view) => {
    if (process.env.NODE_ENV === 'development') {
      return (resolve) => require([`@/views/${view}`], resolve)
    } else {
      // 使用 import 实现生产环境的路由懒加载
      return () => import(`@/views/${view}`)
    }
  }
  ```

  条件判断在测试环境下走的是下方懒加载，在开发和生产走的是上方判断。查阅资料可知，`VUE_APP_NODE_ENV` 的默认值由以下因素决定：

  - `npm run serve` / `npm run dev` → `development` 环境
  - `npm run build` → `production` 环境
  - `npm run test` → `test` 环境

  为了解决这个问题，笔者在 `.env` 的配置文件将 `VUE_APP_NODE_ENV` 的值进行了覆盖，所有的都暂时写成了 `development` ，再次打包部署，页面成功打开

## 总结

这次部署 Netty，本以为想以往一样，打个包，往服务器一丢就完事，没想到实际考虑的地方很多，修改加调试了整整2天才勉强部署成功。特此记录，避免下次再掉同一个坑里了