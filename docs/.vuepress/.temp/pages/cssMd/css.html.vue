<template><div><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h1>
<p>这是关于CSS的面试题。</p>
<h2 id="_1-什么是bfc-如何触发-有何特点-如何解决margin塌陷" tabindex="-1"><a class="header-anchor" href="#_1-什么是bfc-如何触发-有何特点-如何解决margin塌陷"><span>1. 什么是BFC？如何触发？有何特点？如何解决margin塌陷？</span></a></h2>
<p>BFC指的是块级格式化上下文，它是一个独立的渲染区域，只有自己和浮动的元素不会被包含在内。</p>
<p>理解：BFC元素可以理解成被隔离的区间（BFC的子元素不会对外面的元素产生影响）</p>
<p>如何触发：</p>
<ol>
<li>设置float不为none</li>
<li>设置overflow:hidden | scroll | auto; （不是visible）</li>
<li>设置position:absolute | fiexed ;（ 非relative）</li>
<li>设置display:inline-block | table-cell | table-caption | flex | grid ;（ 非none 非inline 非block）</li>
</ol>
<p>能解决什么问题？</p>
<ol>
<li>兄弟标签间margin重叠问题（给一个标签弄成BFC）</li>
<li>父子之间margin会一起移动问题（给父元素加BFC,overflow:hidden;）</li>
<li>子元素浮动时，父元素高度塌陷问题（给父元素上BFC，例如overflow:hidden;）</li>
<li>浮动时存在浮动元素覆盖普通元素，给浮动元素添加BFC（浮动元素display:flow-root;）</li>
</ol>
<p>有何特点：</p>
<ol>
<li>浮动元素会被包含在BFC中</li>
<li>内部元素不受外部影响</li>
<li>自身不会受浮动元素覆盖</li>
</ol>
<h2 id="_2-css如何处理溢出-说一下overflow不同值的区别" tabindex="-1"><a class="header-anchor" href="#_2-css如何处理溢出-说一下overflow不同值的区别"><span>2. CSS如何处理溢出，说一下overflow不同值的区别</span></a></h2>
<p>CSS溢出的话可以通常使用overflow进行处理，overflow有4种值：visible | hidden | scroll | auto。</p>
<p>visible：默认值，元素内容超出容器时，溢出部分会显示在容器外。</p>
<p>hideen：超出部分会被隐藏。</p>
<p>scroll：“滚动条”显示在容器内，超出部分滚动。</p>
<p>auto：根据情况，如果内容溢出，则显示滚动条，否则不显示。</p>
<h2 id="_3-三栏布局有什么实现方法" tabindex="-1"><a class="header-anchor" href="#_3-三栏布局有什么实现方法"><span>3. 三栏布局有什么实现方法</span></a></h2>
<h3 id="_1-使用flex布局" tabindex="-1"><a class="header-anchor" href="#_1-使用flex布局"><span>1. 使用flex布局：</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">&lt;style></span>
<span class="line">    .box {</span>
<span class="line">        display: flex;</span>
<span class="line">        height: 100vh;</span>
<span class="line">    }</span>
<span class="line">    .left,.right {</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">        width: 200px;</span>
<span class="line">    }</span>
<span class="line">    .center {</span>
<span class="line">        flex: 1;</span>
<span class="line">        background-color: aquamarine;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span>
<span class="line">&lt;div class="box"></span>
<span class="line">    &lt;div class="left">1&lt;/div></span>
<span class="line">    &lt;div class="center">2&lt;/div></span>
<span class="line">    &lt;div class="right">3&lt;/div></span>
<span class="line">&lt;/div></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/cssMd/image/flexlayout3.png" alt=""></p>
<h3 id="_2-使用float布局" tabindex="-1"><a class="header-anchor" href="#_2-使用float布局"><span>2. 使用float布局：</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">&lt;style></span>
<span class="line">    .left,.right {</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">        width: 200px;</span>
<span class="line">        height: 100vh;</span>
<span class="line">    }</span>
<span class="line">    .left {</span>
<span class="line">        float: left;</span>
<span class="line">    }</span>
<span class="line">    .right {</span>
<span class="line">         float: right;</span>
<span class="line">    }</span>
<span class="line">    .center {</span>
<span class="line">        margin: 0 200px;</span>
<span class="line">        height: 100vh;</span>
<span class="line">        background-color: aquamarine;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span>
<span class="line">&lt;div class="left">1&lt;/div></span>
<span class="line">&lt;div class="right">3&lt;/div></span>
<span class="line">&lt;div class="center">2&lt;/div></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/cssMd/image/floatLayout3.png" alt=""></p>
<h3 id="_3-使用position布局" tabindex="-1"><a class="header-anchor" href="#_3-使用position布局"><span>3. 使用position布局：</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">&lt;style></span>
<span class="line">    .left,.right {</span>
<span class="line">        position: absolute;</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">        width: 200px;</span>
<span class="line">        height: 100vh;</span>
<span class="line">    }</span>
<span class="line">    .left {</span>
<span class="line">        left: 0;</span>
<span class="line">    }</span>
<span class="line">    .right {</span>
<span class="line">        right:0;</span>
<span class="line">    }</span>
<span class="line">    .center {</span>
<span class="line">        position: absolute;</span>
<span class="line">        background-color: aquamarine;</span>
<span class="line">        left: 200px;</span>
<span class="line">        right: 200px;</span>
<span class="line">        height: 100vh;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span>
<span class="line">&lt;div class="left">1&lt;/div></span>
<span class="line">&lt;div class="right">3&lt;/div></span>
<span class="line">&lt;div class="center">2&lt;/div></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果一样,此处省略.....
除此之外还有grid、table布局，此处省略，自行练习。</p>
<h2 id="_4-说说calc并解释其作用" tabindex="-1"><a class="header-anchor" href="#_4-说说calc并解释其作用"><span>4.说说calc并解释其作用？</span></a></h2>
<p>calc()函数是css3新增的一个函数，用来计算表达式的值。</p>
<p>calc(x - x),注意x可以是负数，也可以是百分比，也可以是em，px等，也可以是任意css属性值，如width，height等。表达式需要用空格隔开。</p>
<h2 id="_5-css3新增的特性有哪些" tabindex="-1"><a class="header-anchor" href="#_5-css3新增的特性有哪些"><span>5.CSS3新增的特性有哪些？</span></a></h2>
<ol>
<li>
<p>渐变：分为linear-gradient：线性渐变和radial-gradient：径向渐变</p>
</li>
<li>
<p>变形：transform：变形，包括旋转(rotate)、缩放(scale)、移动(translate)、倾斜(skew)等。</p>
</li>
<li>
<p>过渡：transition主要是对样式的过渡效果，过渡效果可以设置时间，过渡效果可以设置属性，过渡效果可以设置动画效果。</p>
</li>
<li>
<p>动画：animation</p>
</li>
<li>
<p>盒子阴影：box-shadow：10px(水平阴影位置x) 10px(垂直阴影位置y) 5px(模糊距离) 5px(阴影大小) #888888(阴影颜色);</p>
</li>
<li>
<p>媒体查询：@media (all(用于所有多媒体类型设备)、print(用于打印机)、screen(用于电脑屏幕，平板，智能手机等)、speech(用于屏幕阅读器))</p>
</li>
<li>
<p>伪类:hover、active、focus、link链接没有被访问过、visited链接被访问过</p>
</li>
<li>
<p>伪元素::before、::after</p>
</li>
<li>
<p>盒模型：标准盒模型(width(content) + padding + border + margin)和怪异盒模型(width(content + padding + border) + margin)</p>
</li>
<li>
<p>弹性布局：flex(flex-grow、flex-shrink、flex-basis、flex-direction、flex-wrap、justify-content、align-items、align-content)</p>
</li>
<li>
<p>网格布局：
fr单位代表网格容器中可用空间的一等份</p>
<p>grid(grid-template-columns用于指定列的宽度</p>
<p>grid-template-rows用于指定行的高度</p>
<p>grid-template-areas:'area'可以指定网格布局的每个区域的名称，多行使用多个''</p>
<p>grid-template-columns:可以设置每一列的宽度</p>
<p>grid-column-start：指定网格元素列的开始位置</p>
<p>grid-column-end：指定网格元素列的结束位置</p>
<p>grid-column定义网格元素列的开始和结束的位置</p>
<p>grid-row-start：指定网络元素行的开始位置</p>
<p>grid-row-end：指定网格元素行的结束位置</p>
<p>grid-row定义网格元素行的开始和结束位置</p>
<p>grid-area是grid-row-start,grid-column-start,grid-row-end以及grid-column-end属性的简写。(grid-area:1/2/5/6表示从第1行开始和第2列开始，第5行和第6列结束)，除此之外还可以对改元素进行命名预grid-template-areas结合使用</p>
<p>grid-column-gap：用来设置行之间的网格间隔</p>
<p>grid-row-gap:用来设置列之间的网格间隔</p>
<p>grid-gap:是grid-row-gap和grid-column-gap的简写</p>
<p>justify-items:这只是对网格元素进行水平对齐</p>
<p>align-items：对每个元素进行垂直对齐</p>
<p>justify-content分配网格行轴的元素之间及其周围的空间</p>
<p>align-content分配网格列轴的元素之间及其周围的空间)</p>
</li>
<li>
<p>边框：border-radius：圆角、border-image：图片边框</p>
</li>
</ol>
<h2 id="_6-html5的特性有哪些" tabindex="-1"><a class="header-anchor" href="#_6-html5的特性有哪些"><span>6.HTML5的特性有哪些？</span></a></h2>
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
<p>分为localStorage和sessionStorage
localStorage用于永久保存整个网站的数据，保存的数据没有过期时间，除非手动清除。端口、协议、主机名不同，数据也不同。
sessionStorage用于临时保存同一网站数据的数据，数据在关闭窗口后失效。只在同一个标签页才可以获取相同的数据
本地存储，可以存储大量数据，可以跨域访问。</p>
</li>
<li>
<p>webSocket：</p>
</li>
<li>
<p>SVG</p>
</li>
</ol>
</div></template>


