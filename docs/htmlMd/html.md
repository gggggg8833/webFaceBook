# HTML

HTML相关的面试题

## 1.HTML5的特性有哪些？

1. 语义化：HTML5新增了语义化标签，如header、footer、nav、aside、section、article、figure、figcaption、video、audio、canvas、details、summary、datalist、progress、meter、mark等。
2. 多媒体：HTML5新增了多媒体标签，如video、audio、canvas、picture、source、track等。
3. 表单：HTML5新增了表单标签，如input、textarea、select、option、optgroup、datalist、fieldset、legend、label、button等。
4. 拖放API

    拖拽元素：ondrag元素被拖拽时触发，开始到结束前会一直持续触发、ondragstart元素被拖拽开始时触发、ondrop拖拽元素被放置到放置元素内时触发，如果没有松手不会触发。

    放置元素：ondragenter元素被拖拽进入放置元素时触发、ondragover元素被拖拽进入放置元素时触发、ondragleave元素被拖拽离开放置元素时触发、ondragend元素被拖拽结束时触发。

5. 地理定位:navigator.geolocation.getCurrentPosition(function(position){},function(error){});
6. webWorker:

    适用于多线程，可以异步执行任务，减少浏览器的负载。应用场景：复杂计算、实时通信、实时数据更新、游戏开发等。
    ```
    //主线程
    var w
	function getLocation() {
		console.log('运行')
		if (typeof(Worker) !== 'undefined') {
			console.log('进入')
            //定义一个worker实例使用onmessage事件接收发送过来的数据
			w = new Worker("./node/worker.js");
			w.onmessage = function (event) {
				console.log(event.data);
			}
			w.postMessage(21)
		} else {
			console.log("浏览器不支持worker。");
		}
	}
    //worker
    let i =0
    //用于接收主线程postmessage传过来的数据
    self.onmessage = function (e) {
        console.log(e)
    }
    //用于向主线程传数据
    function timeout() {
        i=i+1
        postMessage(i)
        setTimeout("timeout()",1000)
    }

    timeout()
    ```

7. webStorage：

    分为localStorage和sessionStorage

    localStorage用于永久保存整个网站的数据，保存的数据没有过期时间，除非手动清除。端口、协议、主机名不同，数据也不同。

    sessionStorage用于临时保存同一网站数据的数据，数据在关闭窗口后失效。只在同一个标签页才可以获取相同的数据。

    本地存储，可以存储大量数据，可以跨域访问。

8. webSocket：
    
    webSocket是一种再单个TCP连接上进行全双工通讯的协议，使得刻划断和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据，只需要完成一次握手，就可以创建持久性的连接，并进行双向数据传输。除此之外还有一种ajax轮询，即每隔一段时间向服务器发送请求，但这样会进行多次三次握手和四次挥手。

    该示例：连接服务端，每隔一段时间会发送数据给客户端
    ```
    //客户端
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <div style="height: 100%;">
                <button onclick="openSocket()">开启webSocket</button>
                <button onclick="closeSocket()">关闭webSocket</button>
            </div>
        </body>
        <script>
            var webSocket 
            function openSocket() {
                webSocket = new WebSocket('http://localhost:3000/test')
                // 连接打开时执行的回调函数
                webSocket.onopen = function (event) {
                    console.log('WebSocket 连接已打开');
                };

                // 接收到服务器消息时执行的回调函数
                webSocket.onmessage = function (event) {
                    console.log('收到消息: ', event.data);
                    // 这里处理接收到的数据
                };

                // 连接发生错误时执行的回调函数
                webSocket.onerror = function (error) {
                    console.error('WebSocket 出现错误: ', error);
                };


            }
            function closeSocket() {
                // 连接被关闭时执行的回调函数
                console.log('WebSocket 连接已关闭')
                webSocket.close();
            }
        </script>
        </html>
    ```
    ```
    //服务端nodejs
    const webSocket = require('ws');
    const wss = new webSocket.Server({ port: 3000, path: '/test' });


    wss.on('connection', (ws) => {
        let i = 0
        setInterval(() => {
            i++
            ws.send(JSON.stringify(i))
            if(i>=10) {
                ws.close()
            }
        }, 1000)
        ws.on('message', (message) => {
            console.log('收到消息: ', message);
            i++
            ws.send(JSON.stringify(i))
        })
        // 监听关闭事件
        ws.on('close', () => {
            console.log('客户端已断开连接');
        });
    })
    ```

9. SVG：可缩放矢量图形，是一种用于描述二维矢量图形的XML语言。
    优点：
    1. SVG 图像可通过文本编辑器来创建和修改
    2. SVG 图像可被搜索、索引、脚本化或压缩
    3. SVG 是可伸缩的
    4. SVG 图像可在任何的分辨率下被高质量地打印
    5. SVG 可在图像质量不下降的情况下被放大