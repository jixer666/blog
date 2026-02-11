---
title: SSO单点登录
date: 2025-01-30 19:51:01
tags: ["Java", "SSO"]
category: 工作
thumbnail: 
sticky: 
---

## 起源

在公司实习的一次需求中用到了一个系统通过 token 来访问另一个系统的用户信息 ，公司的大哥说类似于 SSO 单点登录，于是我便上网学习了一下 SSO 单点登录

## SSO 单点登录流程

假如现在有两个系统，一个 A 系统，一个 B 系统。现在需要一个 SSO 登录系统来发放 token 给这两个系统使用，以便于这两个系统通过 token 能够获取到用户信息，流程如下：

- 系统 A 访问需要认证的页面，因为还未登录认证，所以跳转到 SSO 登录页面
- 在 SSO 系统中因为也未登录，所以需要填写用户账号和密码，登录成功后 SSO 系统服务端 session 存放登录态，SSO 前端登录页存放 cookie，然后会生成一个 token，token 作为参数跳转到 A 系统
- A 系统拿到参数后会请求 SSO 服务验证 token 是否有效，验证通过后会 A 系统服务端 session 会存放登录态，A 系统客户端会存放 cookie
- 此时 B 系统去访问需要认证的页面，因为也未登录，所以会跳转到 SSO 登录页面，因为本台电脑上的 SSO 系统已经登录了，所以无需重新登录
- SSO 系统会生成一个 token，并作为参数跳转到 B 系统，B 系统同样会带着 token 去 SSO 系统进行验证，验证后也会将登录态写入 session，B 客户端存放 cookie

流程图如下：

![https://gitee.com/lijunxi666/picture-bed/raw/master/sso/sso1.png](https://gitee.com/lijunxi666/picture-bed/raw/master/sso/sso1.png)

## 工作需求中的流程

现在的需求是有两个系统 A，B，A 系统想要快速集成 B 系统中的某一个模块，所以想要通过直接跳转的方式来实现 A 系统跳转到 B 系统无需登录，直接就能使用 B 系统的功能，目前的实现流程如下：

- A 系统调用 A 系统服务端的接口，B 系统会给 A 系统一个固定的 Api Key 和 Api Secret
- A 系统服务端通过 Api Key 和 Api Secret 向 B 系统服务端发送请求，获取一个 URL 地址，该地址是 B 系统客户端 URL 带上 token 参数，然后 A 系统服务端将地址返回给 A 系统客户端
- A 系统客户端拿着地址进行跳转，跳转到了 B 系统客户端，由 B 客户端带上 token 向 B 服务端发送请求，验证 token，并返回登录信息，B 系统客户端将信息存放在 session storage，跳转到 B 客户端的模块页，此时已经是登录态，无需登录

存在的缺点：每次点击跳转都会相当于重新进行登录一次，响应速度慢且发放 token 频繁

## 参考文章

- [https://developer.aliyun.com/article/636281](https://developer.aliyun.com/article/636281 "https://developer.aliyun.com/article/636281")
- 工具使用：[https://app.diagrams.net/](https://app.diagrams.net/ "https://app.diagrams.net/")