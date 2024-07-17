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
<ol>
<li>使用flex布局：</li>
</ol>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/Images/css/flexlayout3.png" alt=""></p>
<h2 id="layouts-and-customization" tabindex="-1"><a class="header-anchor" href="#layouts-and-customization"><span>Layouts and customization</span></a></h2>
<p>Here are common configuration controlling layout of <code v-pre>@vuepress/theme-default</code>:</p>
<ul>
<li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">navbar</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">sidebar</a></li>
</ul>
<p>Check <a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">default theme docs</a> for full reference.</p>
<p>You can <a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">add extra style</a> with <code v-pre>.vuepress/styles/index.scss</code> file.</p>
</div></template>


