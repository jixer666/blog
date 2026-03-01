<template><div><h1 id="im-多服务部署方案" tabindex="-1"><a class="header-anchor" href="#im-多服务部署方案"><span>IM 多服务部署方案</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2026-2-11</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<h1 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景"><span>需求背景</span></a></h1>
<p>因考虑到 IM 后端服务只有一个，如挂了整个 IM 服务就挂了，会产生极大影响。现需要做成多服务，保证一个挂了，其他的服务任能正常用，而不是整个服务都没法用</p>
<h1 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h1>
<p>IM 服务部署多个的主要问题在于推送，因为现在的 Websocket 是存在本地的一个 Map 表里面的，所以不同的服务可能有不同的数据，会出现下面这种情况：</p>
<p>用户1在线，连接信息存在服务 A；用户2在线，连接信息存在服务 B，用户1给用户2发消息，若 Nginx 负载均衡此时落在了服务 A，但服务 A 不存在用户2的连接信息所以不会进行推送，就会出现问题</p>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2>
<p>经过参考其他 IM 系统，设计多服务架构图如图所示：</p>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/im-server-deploy\bff3c08767e257cfdc8ce41b33c9c172.png" alt=""></p>
<p>整个流程说明一下：首先若是用户1向用户4发送消息，通过负载均衡到转发到服务1，服务1会发送一个消息给消息队列，然后消息队列会发送广播消息，这样一来每个服务都能收到，收到后就能根据自身情况处理</p>
<p>对于某一个服务断线的情况，也不会影响整合聊天服务。掉线的服务里所有的连接信息会断开，但是前端会有重试时间梯度机制，会主动进行重试连接，这样断线的连接会重新在其他存活的服务建立连接信息，整个过程对于用户是无感的，同时这套逻辑也可用于灰度更新</p>
<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h1>
<ul>
<li><a href="https://gitee.com/bluexsx/box-im" target="_blank" rel="noopener noreferrer">https://gitee.com/bluexsx/box-im</a></li>
</ul>
</div></template>


