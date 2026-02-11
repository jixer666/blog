---
title: 微信Native支付实现流程
date: 2025-05-15 17:01:01
tags: ["Java"]
category: 学习
thumbnail: 
sticky: 
---

## 前置准备

- JDK 版本需要是1.8以上
- 在微信商户平台注册微信支付商户号

完善下面的 `application.yml` 文件

```yaml
wechat-pay:
  #接下来两个用来标识用户
  #商户id
  merchant-id: 1558950191
  #公众号appid(和商户id绑定过)
  appid: wx74862e0dfcf69954
  #接下来两个用来确保SSL(内容未作任何加密,只做了签名.)
  #商户证书序列号
  merchant-serial-number: 34345964330B66427E0D3D28826C4993C77E631F
  #商户私钥
  private-key: apiclient_key.pem
  #APIv3密钥(在微信支付回调通知和商户获取平台证书使用APIv3密钥)
  api-v3-key: UDuLFDcmy5Eb6o0nTNZdu6ek4DDh4K8B
  #接下来两个是相关地址
  #微信服务器地址
  domain: https://api.mch.weixin.qq.com
  #接收结果通知地址
  notify-url: http://db525e24.natappfree.cc/wxPay/native/notify
```

`private-key` 为商户的私钥，放在 `resources/apiclient_key.pem` 路径下，此处的私钥用的是尚硅谷提供的，格式如下：

```tex
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDnSAKI8sea8p+d
OBVPWlZmxqJfPbdhzZxdI5Kx1j5SJNZwXWtr43/giw38pwzSlBI+bubBcYlkFTI0
guigMZO/yueb1mZChaY/JG1vsT02Ubj0xkVvBwKNbYS48NEpZhK61Mia09R4n1iH
1vip9kt8J6Zrx+xIqwmuCNWigyivGrvY9AdevCNlNSVdHVOZUJiJ6UGtvVmgZb0u
RTwBzfkjnwTgEcsrZMmF15nFubFsyJLyF/zY4NhrISc8H/rbjgleqa8ybYL26iTS
gfPCXe4U9f8fNFF2bSA06GTiB2R93q2B0zHeUYrpgF4XOGlIAqH+Ea4Vn+aOj6I0
pduh03idAgMBAAECggEBAJ+4SB/hYd1szrPZhkXtwhtp87pIObtuLhzYMzdjGFjM
HdctfMDeNHKSNU+U4bMPFOZO2kcfLF2Ukb5X5WSzuDBMZNRnJOmtuJiEhJsM0JQR
reREhLDfK3EWAAFkNV4corSpu/vIbEP87zuoRsPBVnHgQ/rM7y1kCORKL5bycwcw
5BI4xhULKAu14LEcDL3+xDJo39w+WCFlxuP+6Bs7+vIeavs+AC3TJkA4kg2nyWd3
W07xPjHl64f17icqsFhuFZ+VuSf5CAgQGWDbC7BHqRkDStUDSiiUiFushouKCLdK
MpA0x4ogb2ZwfZDRhZHiLNAGe4QovYCcXWBydzuT0WECgYEA828Bo1JAHE5kdnsO
E9+enH/yMcOKTRnuYPiXsFXNvqofc5tZiXJmVE/+EKv7LFmtUA6qqKC7FDek8TpP
SkfXmSDAgfM6AdzT0YoHH23FRVewnFMEYumtogXsXJTyI5siBSJp16s9Rn/YwESt
JqjW5+9Ck1dkU+UJCZ4lOw4HeGkCgYEA8zho2BKQTh3P/xcFcoTcunVZpRayVkHM
g8Ef6RGGo4vM1oshQLvXyPqCmhAIf6j71I9WPqUwjmeGyaR7Hir0dbgTCm2fJPFW
lxAvgbCISxEPz10RYBcR2umMSlJLfZfhqv1CyfU4vfCTbdOimgsz2039E3oLTbzg
eDe/mdzu2BUCgYEAleKjf4wFLWiXMtxRrqrhXjrpRPrBDPgKbmqh+1DZfawB8YyV
dKublg4qwNkjrgsJS2G8cleE2M3qIR1l9LaHaSFhZqH79WmigkIaYJ+V9zwm4hm7
eaun3TsIbXjIHmRGbiLiSIiHEgFl0/x1IHiU2fnXZCFLBNzg06ssAVCCCQECgYA1
4BfxTONkOlxZgAr33BBcySPLWuS0EK0xvjTIVtaBIbWFDJqYEUPyQ/NsFwMa7B6k
bf/HrqW71ZjYz7Np8k/mR5kIJVIsR71Lhw1O6AC4yBW9dDsmEtYkrLkjuWj5cAxP
6PvDaqtf/4tYt5l8D+Ezwem+R7l7RcxfNNIfTf4mJQKBgE57dnRx+Ijx7VHjJvjl
X2jB/VSVGpK5OADykmmZ/wvHPlQcyzd+5kAIoJhSuY48CFeI1DOogR2p01LEFQEL
j4AI5FqOOQwRJvNmfoKcKwO36tSxSEGSM8POKOsa21PG/gvDpJjVFo2hn5QcMHWn
z5SjsgA/1YbXejubdLxT/3pl
-----END PRIVATE KEY-----
```

## 支付流程

整体业务开发流程图如下：

![ ](https://gtimg.wechatpay.cn/resource/xres/mmpaydoc/static/img/9370f0ff0c116795068c630dea01c5a1.png)

- 用户点击支付按钮，传入支付下单接口参数，调用 `/v3/pay/transactions/native` 接口，会返回 `code_url` 参数，转为二维码后用手机微信扫码会弹出微信支付页面
- 用户支付成功后，会调用传入的回调接口，在回调接口中对订单状态进行更新。若出现网络错误，导致没有接受回调请求或者超时应答（5s），微信支付会按照一定规律的频次重复发送回调请求，直至微信支付接收到商户应答成功，或达到最大发送次数（15次）

## 实现代码

### 生成支付二维码

```java
@Override
public String nativePay() {
    // 对订单进行检查，若已经生成了二维码就直接返回无需后续操作
    // 过程略
    // 请求构造
    HttpPost httpPost = new HttpPost(domain + WechatPayConstant.CREATE_PAY_URL);
    // 请求体
    // 构造数据
    HashMap<String, Object> reqData = new HashMap<>();
    reqData.put("appid", appId);
    reqData.put("mchid", merchantId);
    reqData.put("description", "111111112"); // 模拟商品名称
    reqData.put("out_trade_no", "214362315553214290");  // 模拟订单号
    reqData.put("notify_url", notifyUrl);
    HashMap<String, Integer> amount = new HashMap<>();
    // 单位是分
    amount.put("total", 1);
    reqData.put("amount", amount);
    String jsonReqData = new Gson().toJson(reqData);
    StringEntity entity = new StringEntity(jsonReqData, "utf-8");
    entity.setContentType("application/json");
    httpPost.setEntity(entity);
    // 请求头
    httpPost.setHeader("Accept", "application/json");
    // 完成签名并执行请求
    Map<String, String> dataMap = null;
    try {
        CloseableHttpResponse response = (CloseableHttpResponse) httpClient.execute(httpPost);
        int statusCode = response.getStatusLine()
                .getStatusCode();
        // 成功
        if (statusCode == 200) {
            String body = EntityUtils.toString(response.getEntity());
            dataMap = new Gson().fromJson(body, HashMap.class);
        }
        // 失败
        else {
            if (statusCode != 204) {
                String body = EntityUtils.toString(response.getEntity());
                return null;
            }
        }
        response.close();
    } catch (Exception e) {
        e.printStackTrace();
    }
    // 返回二维码的地址
    return dataMap.get("code_url");
}
```

### 支付回调

```java
@Override
public String nativeNotify(HttpServletRequest request, HttpServletResponse response) {
    Gson gson = new Gson();
    Map<String, String> map = new HashMap<>();//应答对象
    try {
        // 处理通知参数
        String body = HttpUtils.readData(request);
        Map<String, Object> bodyMap = gson.fromJson(body, HashMap.class);
        String requestId = (String) bodyMap.get("id");

        // 签名的验证
        WechatPay2ValidatorForRequest wechatPay2ValidatorForRequest
                = new WechatPay2ValidatorForRequest(verifier, requestId, body);
        if (!wechatPay2ValidatorForRequest.validate(request)) {
            // 失败应答
            response.setStatus(500);
            map.put("code", "ERROR");
            map.put("message", "通知验签失败");
            return gson.toJson(map);
        }
        // 处理订单
        // 过程略
        // 成功应答
        response.setStatus(200);
        map.put("code", "SUCCESS");
        map.put("message", "成功");
        return gson.toJson(map);
    } catch (Exception e) {
        e.printStackTrace();
        // 失败应答
        response.setStatus(500);
        map.put("code", "ERROR");
        map.put("message", "失败");
        return gson.toJson(map);
    }
}
```

### 余额退款

```java
@Override
public void refund(String orderNo) {
    // 插入退款记录表
    // 过程略
    // 请求构造
    HttpPost httpPost = new HttpPost(domain + WechatPayConstant.CREATE_REFUND_URL);
    // 构造数据
    HashMap<String, Object> reqData = new HashMap<>();
    reqData.put("out_trade_no", "214362315553214290");//订单编号
    reqData.put("out_refund_no", "134334412951304190");//退款单编号
    reqData.put("reason", "asd");//退款原因
    reqData.put("notify_url", notifyUrl);//退款通知地址
    HashMap<String, Object> amount = new HashMap<>();
    amount.put("refund", 1);//退款金额
    amount.put("total", 1);//原订单金额
    amount.put("currency", "CNY");//币种
    reqData.put("amount", amount);
    // 将参数转换成json字符串
    String jsonData = new Gson().toJson(reqData);
    StringEntity entity = new StringEntity(jsonData, "utf-8");
    httpPost.setEntity(entity);//将请求报文放入请求对象
    // 请求头
    httpPost.setHeader("content-type", "application/json");
    httpPost.setHeader("Accept", "application/json");//设置响应报文格式
    try {
        // 完成签名并执行请求
        CloseableHttpResponse response = (CloseableHttpResponse) httpClient.execute(httpPost);
        // 解析响应结果
        String bodyAsString = EntityUtils.toString(response.getEntity());
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode == 200) {
            System.out.println("成功, 退款返回结果 = " + bodyAsString);
        } else {
            if (statusCode != 204) {
                System.out.println("退款异常" + bodyAsString);
            }
        }
        response.close();
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

## 优化

### 支付回调和查单

除了微信支付提供的重复发送请求外，我们自己也可以对回调进行优化

**前端**

1、前端每两秒轮询查询获取支付二维码接口，持续1分钟，只要检测到订单支付，就展示支付成功页面；若超出1分钟就提示交易超时

![](https://gtimg.wechatpay.cn/resource/xres/mmpaydoc/static/img/74f8b1252f1dd601a6be7b4429b06dcc.png)

2、当用户从支付页返回到订单页面会弹窗，若用户点击已完成支付，会调用微信提供的查单接口去主动查询订单：

- 若订单支付成功就返回支付成功页面
- 若订单未支付成功就提醒用户 "稍后进入订单管理页核实订单状态，不要重复发起支付"。后端及时的获取最新微信的订单信息并更新数据库的订单状态

![](https://gtimg.wechatpay.cn/resource/xres/mmpaydoc/static/img/e660c05be8dadeda2c3e4f7df0460a6e.png)

**后端**

设置定时任务每隔30s找出10分钟以内未支付的订单，调用微信提供的查单接口 `[GET]/v3/pay/transactions/id/{transaction_id}` 进行查询，若支付成功就更新订单状态；若未支付，系统记录订单查询的次数，在10次查询之后状态还是未支付成功，则停止后续查询，调用关单接口 `[POST]/v3/pay/transactions/out-trade-no/{out_trade_no}/close` 并更新订单状态

## 参考文章

- [https://pay.weixin.qq.com/doc/v3/merchant/4012791891](https://pay.weixin.qq.com/doc/v3/merchant/4012791891)
- [https://www.bilibili.com/video/BV1US4y1D77m/?p=43&spm_id_from=333.1007.top_right_bar_window_history.content.click](https://www.bilibili.com/video/BV1US4y1D77m/?p=43&spm_id_from=333.1007.top_right_bar_window_history.content.click)****