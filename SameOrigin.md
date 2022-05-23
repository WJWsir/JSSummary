# 浏览器的同源策略

## 问题

### 一、什么是同源？(Same Origin)

同源描述的是网络资源之间的关系。判定两两网络资源是否同源的标准是对比任意两个网络资源的URI属性。
具体来说，如果两个网络资源的URI属性在以下三个方面相同，则称它们是同源的资源：

1. protocol
2. host/domain
3. port

### 二、什么是同源策略(Same Origin Policy)

同源策略是浏览器贯彻执行的一个安全规则，即当一个网站的脚本在浏览器中执行时请求另一个不同源的资源时，
浏览器会按照该安全规则有选择地阻止访问。

那么为什么需要同源策略？这是权利归属问题，服务器的资源提供者应该有权利、有能力控制请求者的访问。

### 三、什么是跨源资源共享(Cross Origin Resource Sharing)

为什么需要跨域资源共享？当了解了什么是同源策略后，就会发现，我需要一个协议，使得网络资源提供者允许部分公共资源可以供其他源获取，
而CORS就是一种与同源策略配合满足该需求的协议。具体地交互过程案例可以参考[https://web.dev/cross-origin-resource-sharing/](WEB-DEV-CORS)，
看完之后可以发现，不过是通过HTTP协议交互时，在请求和响应报文的几个特定header字段给出应有的值来控制是否允许跨源资源共享。

## 四、案例或知识应用

1. 如何解释：在必应首页的网站，在Chrome调试器中，console tab运行 fetch("https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js")，在 network tab中可以看到请求正常成功  
参考 [跨源资源请求][2]
2. 如何解释：在必应首页的网站，在Chrome调试器中，console tab运行 fetch("https://www.baidu.com")，在 network tab中可以看到响应码为200，但是预览没有任何东西  
参考 [不同源fetch][1]
3. 如何解释：在必应首页的网站，在Chrome调试器中，修改html在中间嵌套一个src属性为 http://localhost:64628/Home/Index 的iframe tag，在Chrome调试器中，network tab中可以看到响应码为200(注：本地网站是由ASP.NET MVC开发的)
但是画面没有显示出来  
图示 ![跨源iframe](https://raw.githubusercontent.com/WJWsir/JSSummary/main/SameOriginPolicy_1.png)
参考 [跨源iframe][3]

## 五、参考资料
[Same-origin policy](https://web.dev/same-origin-policy/#how-to-prevent-clickjacking)


[1]:https://web.dev/codelab-same-origin-fetch/
[2]:https://web.dev/cross-origin-resource-sharing/
[3]:https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options
