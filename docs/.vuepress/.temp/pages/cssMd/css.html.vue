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
<h2 id="_4-说说calc并解释其作用" tabindex="-1"><a class="header-anchor" href="#_4-说说calc并解释其作用"><span>4. 说说calc并解释其作用？</span></a></h2>
<p>calc()函数是css3新增的一个函数，用来计算表达式的值。</p>
<p>calc(x - x),注意x可以是负数，也可以是百分比，也可以是em，px等，也可以是任意css属性值，如width，height等。表达式需要用空格隔开。</p>
<h2 id="_5-css3新增的特性有哪些" tabindex="-1"><a class="header-anchor" href="#_5-css3新增的特性有哪些"><span>5. CSS3新增的特性有哪些？</span></a></h2>
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
<h2 id="_6-css中选择器的优先级" tabindex="-1"><a class="header-anchor" href="#_6-css中选择器的优先级"><span>6. CSS中选择器的优先级？</span></a></h2>
<ol>
<li>
<p>!important：最高优先级</p>
</li>
<li>
<p>内联样式(style)：仅次于!important</p>
</li>
<li>
<p>id选择器 #</p>
</li>
<li>
<p>类选择器、伪类、结构伪类、属性选择器 . [属性]</p>
</li>
<li>
<p>标签选择器、伪元素选择器 div ::before、::after</p>
</li>
<li>
<p>子选择器 nth:child()</p>
</li>
<li>
<p>相邻兄弟选择器 +</p>
</li>
<li>
<p>一般兄弟选择器 ~</p>
</li>
<li>
<p>后代选择器 &gt;</p>
</li>
</ol>
<h2 id="_7-css权重如何计算" tabindex="-1"><a class="header-anchor" href="#_7-css权重如何计算"><span>7. CSS权重如何计算？</span></a></h2>
<ol>
<li>
<p>！important权重值：无穷大</p>
</li>
<li>
<p>内联样式（style）权重值：1000</p>
</li>
<li>
<p>id选择器权重值：100</p>
</li>
<li>
<p>类、伪类、结构伪类、属性选择器权重值：10</p>
</li>
<li>
<p>标签、伪元素选择器权重值：1</p>
</li>
<li>
<p>通配符选择器权重值：0</p>
</li>
<li>
<p>继承样式：没有权重</p>
</li>
</ol>
<h2 id="_8-css哪些属性可继承-哪些不可以" tabindex="-1"><a class="header-anchor" href="#_8-css哪些属性可继承-哪些不可以"><span>8. CSS哪些属性可继承，哪些不可以？</span></a></h2>
<p>常见的可继承属性：</p>
<ol>
<li>
<p>字体属性（font）</p>
</li>
<li>
<p>文本属性（text）</p>
</li>
<li>
<p>颜色属性（color）</p>
</li>
<li>
<p>列表属性（list）</p>
</li>
<li>
<p>表格布局属性（table-layout）</p>
</li>
<li>
<p>元素可见性属性（visibility）</p>
</li>
</ol>
<p>不可继承：</p>
<ol>
<li>
<p>背景属性（background）</p>
</li>
<li>
<p>边框属性（border）</p>
</li>
<li>
<p>内边距属性</p>
</li>
<li>
<p>外边距属性</p>
</li>
<li>
<p>定位属性</p>
</li>
<li>
<p>大小属性</p>
</li>
<li>
<p>盒模型属性</p>
</li>
</ol>
<h2 id="_9-px、em、rem、-、pt、vh、vw、vmin、vmax的区别" tabindex="-1"><a class="header-anchor" href="#_9-px、em、rem、-、pt、vh、vw、vmin、vmax的区别"><span>9. px、em、rem、%、pt、vh、vw、vmin、vmax的区别？</span></a></h2>
<p>px：px时绝对单位，像素时屏幕上的最小单位，通常代表一个物理像素</p>
<p>em：em是相对单位，相对于父元素的字体大小</p>
<p>rem：rem是相对单位，相对于根元素的字体大小</p>
<p>%：%是相对单位，相对于父元素的宽度或高度</p>
<p>pt：pt是相对单位，相对于1/72英寸(常用于打印和排版)</p>
<p>vh：vh是相对单位，相对于视口高度</p>
<p>vw：vw是相对单位，相对于视口宽度</p>
<p>vmin：vmin是相对单位，相对于视口高度和宽度的最小值</p>
<p>vmax：vmax是相对单位，相对于视口高度和宽度的最大值</p>
<h2 id="_10-如何画出一条0-5px的线" tabindex="-1"><a class="header-anchor" href="#_10-如何画出一条0-5px的线"><span>10. 如何画出一条0.5px的线？</span></a></h2>
<ol>
<li>使用缩放scale(0.5)</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">.line {</span>
<span class="line">    height: 1px;</span>
<span class="line">	background-color:#3ff;</span>
<span class="line">	transform: scaleY(0.5);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用box-shadow</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">.line {</span>
<span class="line">	height: 1px;</span>
<span class="line">    //offset-x(x轴偏移量) offset-y(y轴偏移量) blur(模糊程度) spread(阴影扩散半径) color(阴影颜色);</span>
<span class="line">	box-shadow: 0 0 0 0.5px red;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>svg</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">&lt;svg width="100%" height="1"></span>
<span class="line">	&lt;line x1="0" y1="0" x2="100%" y2="0" style="stroke:black; stroke-width:0.5px;" /></span>
<span class="line">&lt;/svg></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>使用伪元素</li>
</ol>
<p>使用伪元素重叠可以获得0.5px的线</p>
<p>除此以外还有其他的方法，这里就不一一列举了</p>
<h2 id="_11-隐藏一个元素有哪些方法-display-none与visibility-hidden与opacity-0之间的区别" tabindex="-1"><a class="header-anchor" href="#_11-隐藏一个元素有哪些方法-display-none与visibility-hidden与opacity-0之间的区别"><span>11. 隐藏一个元素有哪些方法？display:none与visibility:hidden与opacity:0之间的区别？</span></a></h2>
<ol>
<li>
<p>display:none：隐藏元素，元素不会被渲染，元素不会占据空间-------&gt;v-if</p>
</li>
<li>
<p>visibility:hidden：隐藏元素，元素会被渲染，元素不会占据空间------&gt;v-show</p>
</li>
<li>
<p>opacity:0：隐藏元素，元素会被渲染，元素会占据空间</p>
</li>
</ol>
<h2 id="_12-什么是浮动-浮动会引起什么问题-有何解决方案" tabindex="-1"><a class="header-anchor" href="#_12-什么是浮动-浮动会引起什么问题-有何解决方案"><span>12. 什么是浮动，浮动会引起什么问题，有何解决方案？</span></a></h2>
<p>浮动：浮动可以让元素脱离文档流，并允许元素在文档的其余部分中环绕。</p>
<p>浮动引起的问题：</p>
<ol>
<li>
<p>浮动元素脱离文档流，父元素高度无法被撑开</p>
</li>
<li>
<p>浮动元素会与相邻元素重叠，影响页面布局</p>
</li>
</ol>
<p>解决方案：</p>
<ol>
<li>
<p>浮动元素与相邻元素重叠，可以使用after伪元素设置clear属性清除浮动元素与相邻元素的重叠</p>
</li>
<li>
<p>最后一个浮动标签后新加一个非浮动标签</p>
</li>
<li>
<p>父元素设置overflow属性</p>
</li>
<li>
<p>父元素设置高度</p>
</li>
</ol>
<h2 id="_13-line-height和height的区别" tabindex="-1"><a class="header-anchor" href="#_13-line-height和height的区别"><span>13. line-height和height的区别？</span></a></h2>
<p>line-height：设置文字的行高，指一行文字的高度，作用在内联元素或块元素内的文本上</p>
<p>height：元素的高度，作用与块元素上</p>
<h2 id="_14-inline-block、inline和block的区别-为什么img是inline还可以设置宽高" tabindex="-1"><a class="header-anchor" href="#_14-inline-block、inline和block的区别-为什么img是inline还可以设置宽高"><span>14. inline-block、inline和block的区别；为什么img是inline还可以设置宽高？</span></a></h2>
<p>inline：元素不会换行，元素不会被高度撑开，元素不会被宽度撑开，元素不会被设置宽高</p>
<p>block：元素会换行，元素会被高度撑开，元素会被宽度撑开，元素会被设置宽高</p>
<p>inline-block：元素不会换行，元素会被高度撑开，元素会被宽度撑开，元素会被设置宽高</p>
<p>img是行内元素，也是替换元素，替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容，例如浏览器会根据img标签的src属性的值来读取图片信息并显示出来，而查看HTML代码看不到图片的实际内容。</p>
<h2 id="_15-什么是重绘、回流-如何减少-如何让文档脱离文档流" tabindex="-1"><a class="header-anchor" href="#_15-什么是重绘、回流-如何减少-如何让文档脱离文档流"><span>15. 什么是重绘、回流，如何减少？如何让文档脱离文档流？</span></a></h2>
<p>在浏览器渲染过程中，是由HTML解析、样式计算、布局、分层、绘制、分块、光栅化、绘画等。重排（回流）本质就是重新计算布局树，是当进行了会影响布局树的操作后（改变宽高、位置等）需要重新计算布局树；重绘本质就是重新根据分层信息计算量绘制指令，当改动了可见样式后，就需要重新计算，会引发绘制阶段。</p>
<p>重绘不一定会引起回流，回流一定会引起重绘</p>
<p>如何减少：</p>
<ol>
<li>
<p>减少DOM操作，减少DOM节点的创建和删除</p>
</li>
<li>
<p>合并多次对DOM和样式的修改，一次性处理</p>
</li>
<li>
<p>可以使用transform、opacity、filters这些动画不会引起回流重绘
还有许多可以减少重绘回流的方法，这里就不一一列举了</p>
</li>
</ol>
</div></template>


