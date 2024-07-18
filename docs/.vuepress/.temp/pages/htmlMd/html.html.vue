<template><div><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h1>
<p>HTML相关的面试题</p>
<h2 id="_1-html5的特性有哪些" tabindex="-1"><a class="header-anchor" href="#_1-html5的特性有哪些"><span>1.HTML5的特性有哪些？</span></a></h2>
<ol>
<li>
<p>语义化：HTML5新增了语义化标签，如header、footer、nav、aside、section、article、figure、figcaption、video、audio、canvas、details、summary、datalist、progress、meter、mark等。</p>
</li>
<li>
<p>多媒体：HTML5新增了多媒体标签，如video、audio、canvas、picture、source、track等。</p>
</li>
<li>
<p>表单：HTML5新增了表单标签，如input、textarea、select、option、optgroup、datalist、fieldset、legend、label、button等。</p>
</li>
<li>
<p>拖放API</p>
<p>拖拽元素：ondrag元素被拖拽时触发，开始到结束前会一直持续触发、ondragstart元素被拖拽开始时触发、ondrop拖拽元素被放置到放置元素内时触发，如果没有松手不会触发。</p>
<p>放置元素：ondragenter元素被拖拽进入放置元素时触发、ondragover元素被拖拽进入放置元素时触发、ondragleave元素被拖拽离开放置元素时触发、ondragend元素被拖拽结束时触发。</p>
</li>
<li>
<p>地理定位:navigator.geolocation.getCurrentPosition(function(position){},function(error){});</p>
</li>
<li>
<p>webWorker:</p>
<p>适用于多线程，可以异步执行任务，减少浏览器的负载。应用场景：复杂计算、实时通信、实时数据更新、游戏开发等。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">//主线程</span>
<span class="line">var w</span>
<span class="line">function getLocation() {</span>
<span class="line">	console.log('运行')</span>
<span class="line">	if (typeof(Worker) !== 'undefined') {</span>
<span class="line">		console.log('进入')</span>
<span class="line">        //定义一个worker实例使用onmessage事件接收发送过来的数据</span>
<span class="line">		w = new Worker("./node/worker.js");</span>
<span class="line">		w.onmessage = function (event) {</span>
<span class="line">			console.log(event.data);</span>
<span class="line">		}</span>
<span class="line">		w.postMessage(21)</span>
<span class="line">	} else {</span>
<span class="line">		console.log("浏览器不支持worker。");</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">//worker</span>
<span class="line">let i =0</span>
<span class="line">//用于接收主线程postmessage传过来的数据</span>
<span class="line">self.onmessage = function (e) {</span>
<span class="line">    console.log(e)</span>
<span class="line">}</span>
<span class="line">//用于向主线程传数据</span>
<span class="line">function timeout() {</span>
<span class="line">    i=i+1</span>
<span class="line">    postMessage(i)</span>
<span class="line">    setTimeout("timeout()",1000)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">timeout()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>webStorage：</p>
<p>分为localStorage和sessionStorage</p>
<p>localStorage用于永久保存整个网站的数据，保存的数据没有过期时间，除非手动清除。端口、协议、主机名不同，数据也不同。</p>
<p>sessionStorage用于临时保存同一网站数据的数据，数据在关闭窗口后失效。只在同一个标签页才可以获取相同的数据。</p>
<p>本地存储，可以存储大量数据，可以跨域访问。</p>
</li>
<li>
<p>webSocket：</p>
<p>webSocket是一种再单个TCP连接上进行全双工通讯的协议，使得刻划断和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据，只需要完成一次握手，就可以创建持久性的连接，并进行双向数据传输。除此之外还有一种ajax轮询，即每隔一段时间向服务器发送请求，但这样会进行多次三次握手和四次挥手。</p>
<p>该示例：连接服务端，每隔一段时间会发送数据给客户端</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">//客户端</span>
<span class="line">&lt;!DOCTYPE html></span>
<span class="line">    &lt;html lang="en"></span>
<span class="line"></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="UTF-8"></span>
<span class="line">        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"></span>
<span class="line">        &lt;title>Document&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line"></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div style="height: 100%;"></span>
<span class="line">            &lt;button onclick="openSocket()">开启webSocket&lt;/button></span>
<span class="line">            &lt;button onclick="closeSocket()">关闭webSocket&lt;/button></span>
<span class="line">        &lt;/div></span>
<span class="line">    &lt;/body></span>
<span class="line">    &lt;script></span>
<span class="line">        var webSocket </span>
<span class="line">        function openSocket() {</span>
<span class="line">            webSocket = new WebSocket('http://localhost:3000/test')</span>
<span class="line">            // 连接打开时执行的回调函数</span>
<span class="line">            webSocket.onopen = function (event) {</span>
<span class="line">                console.log('WebSocket 连接已打开');</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line">            // 接收到服务器消息时执行的回调函数</span>
<span class="line">            webSocket.onmessage = function (event) {</span>
<span class="line">                console.log('收到消息: ', event.data);</span>
<span class="line">                // 这里处理接收到的数据</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line">            // 连接发生错误时执行的回调函数</span>
<span class="line">            webSocket.onerror = function (error) {</span>
<span class="line">                console.error('WebSocket 出现错误: ', error);</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">        function closeSocket() {</span>
<span class="line">            // 连接被关闭时执行的回调函数</span>
<span class="line">            console.log('WebSocket 连接已关闭')</span>
<span class="line">            webSocket.close();</span>
<span class="line">        }</span>
<span class="line">    &lt;/script></span>
<span class="line">    &lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">//服务端nodejs</span>
<span class="line">const webSocket = require('ws');</span>
<span class="line">const wss = new webSocket.Server({ port: 3000, path: '/test' });</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">wss.on('connection', (ws) => {</span>
<span class="line">    let i = 0</span>
<span class="line">    setInterval(() => {</span>
<span class="line">        i++</span>
<span class="line">        ws.send(JSON.stringify(i))</span>
<span class="line">        if(i>=10) {</span>
<span class="line">            ws.close()</span>
<span class="line">        }</span>
<span class="line">    }, 1000)</span>
<span class="line">    ws.on('message', (message) => {</span>
<span class="line">        console.log('收到消息: ', message);</span>
<span class="line">        i++</span>
<span class="line">        ws.send(JSON.stringify(i))</span>
<span class="line">    })</span>
<span class="line">    // 监听关闭事件</span>
<span class="line">    ws.on('close', () => {</span>
<span class="line">        console.log('客户端已断开连接');</span>
<span class="line">    });</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>SVG：可缩放矢量图形，是一种用于描述二维矢量图形的XML语言。
优点：</p>
<ol>
<li>SVG 图像可通过文本编辑器来创建和修改</li>
<li>SVG 图像可被搜索、索引、脚本化或压缩</li>
<li>SVG 是可伸缩的</li>
<li>SVG 图像可在任何的分辨率下被高质量地打印</li>
<li>SVG 可在图像质量不下降的情况下被放大</li>
</ol>
</li>
</ol>
</div></template>


