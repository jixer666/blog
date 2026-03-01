<template><div><h1 id="pgp-加密" tabindex="-1"><a class="header-anchor" href="#pgp-加密"><span>PGP 加密</span></a></h1>
<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-03-23</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
<p>在实习期间，笔者遇到了对文件进行加密和解密的需求，于是本文就对 PGP 加密进行调研，记录一下过程</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p><strong>PGP（Pretty Good Privacy）</strong> 是一个基于 RSA 公钥和对称加密相结合的邮件加密软件，常用于对电子邮件、文件进行加密和解密</p>
<p>常用的加密算法：</p>
<ul>
<li><strong>非对称加密</strong>：发送方保存公钥用于加密，接收方保存私钥用于解密，常用的有 <strong>AES</strong></li>
<li><strong>对称加密</strong>：发送方和接收方共用一对密钥进行加密和解密，常用的有 <strong>RSA</strong></li>
</ul>
<h2 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程"><span>使用流程</span></a></h2>
<p><img src="https://gitee.com/lijunxi666/picture-bed/raw/master/pgp/pgp1.png" alt=""></p>
<ul>
<li>使用 PGP 命令生成两个密钥对 A 和 B，发送存放 A 的私钥和 B 的公钥，接受方存放 A 的公钥和 B 的私钥</li>
<li>发送方使用 A 私钥先对文件进行签名（用于校验文件的真实性），得到签名后的文件</li>
<li>发送方使用 B 公钥对签名后的文件进行加密，然后将加密后的文件传输给接收方</li>
<li>接收方先对用 B 私钥对文件进行解密，得到签名后的文件</li>
<li>接收方使用 A 公钥对文件进行验签，需要验签通过才说明文件合法</li>
</ul>
<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h2>
<p>因为 PGP 不开源且收费，所以使用的是功能类似且开源免费的 GPG，所以一般我们说使用 PGP，其实很多都用的是 GPG</p>
<blockquote>
<p>代码待补</p>
</blockquote>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2>
<ul>
<li><a href="https://blog.csdn.net/qq_42248536/article/details/105805078" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_42248536/article/details/105805078</a></li>
</ul>
</div></template>


