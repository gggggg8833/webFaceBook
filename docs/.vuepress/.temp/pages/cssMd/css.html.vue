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
<li>渐变：分为linear-gradient：线性渐变和radial-gradient：径向渐变</li>
<li>变形：transform：变形，包括旋转(rotate)、缩放(scale)、移动(translate)、倾斜(skew)等。</li>
<li>过渡：transition主要是对样式的过渡效果，过渡效果可以设置时间，过渡效果可以设置属性，过渡效果可以设置动画效果。</li>
<li>动画</li>
<li>滤镜</li>
<li>多媒体</li>
<li>媒体查询</li>
<li>变量</li>
<li>伪类</li>
<li>伪元素</li>
<li>盒模型</li>
<li>弹性布局</li>
<li>网格布局</li>
<li>栅格布局</li>
<li>浮动布局</li>
<li>定位布局</li>
</ol>
</div></template>


