# CSS

这是关于CSS的面试题。

## 1. 什么是BFC？如何触发？有何特点？如何解决margin塌陷？

BFC指的是块级格式化上下文，它是一个独立的渲染区域，只有自己和浮动的元素不会被包含在内。

理解：BFC元素可以理解成被隔离的区间（BFC的子元素不会对外面的元素产生影响）

如何触发：
1. 设置float不为none
2. 设置overflow:hidden | scroll | auto; （不是visible）
3. 设置position:absolute | fiexed ;（ 非relative）
4. 设置display:inline-block | table-cell | table-caption | flex | grid ;（ 非none 非inline 非block）

能解决什么问题？
1. 兄弟标签间margin重叠问题（给一个标签弄成BFC）
2. 父子之间margin会一起移动问题（给父元素加BFC,overflow:hidden;）
3. 子元素浮动时，父元素高度塌陷问题（给父元素上BFC，例如overflow:hidden;）
4. 浮动时存在浮动元素覆盖普通元素，给浮动元素添加BFC（浮动元素display:flow-root;）

有何特点：
1. 浮动元素会被包含在BFC中
2. 内部元素不受外部影响
3. 自身不会受浮动元素覆盖

## 2. CSS如何处理溢出，说一下overflow不同值的区别

CSS溢出的话可以通常使用overflow进行处理，overflow有4种值：visible | hidden | scroll | auto。

visible：默认值，元素内容超出容器时，溢出部分会显示在容器外。

hideen：超出部分会被隐藏。

scroll：“滚动条”显示在容器内，超出部分滚动。

auto：根据情况，如果内容溢出，则显示滚动条，否则不显示。

## 3. 三栏布局有什么实现方法

### 1. 使用flex布局：

```
<style>
    .box {
        display: flex;
        height: 100vh;
    }
    .left,.right {
        background-color: antiquewhite;
        width: 200px;
    }
    .center {
        flex: 1;
        background-color: aquamarine;
    }
</style>

<div class="box">
    <div class="left">1</div>
    <div class="center">2</div>
    <div class="right">3</div>
</div>
```
![](./image/flexlayout3.png)
### 2. 使用float布局：
```
<style>
    .left,.right {
        background-color: antiquewhite;
        width: 200px;
        height: 100vh;
    }
    .left {
        float: left;
    }
    .right {
         float: right;
    }
    .center {
        margin: 0 200px;
        height: 100vh;
        background-color: aquamarine;
    }
</style>

<div class="left">1</div>
<div class="right">3</div>
<div class="center">2</div>
```
![](./image/floatLayout3.png)

### 3. 使用position布局：
```
<style>
    .left,.right {
        position: absolute;
        background-color: antiquewhite;
        width: 200px;
        height: 100vh;
    }
    .left {
        left: 0;
    }
    .right {
        right:0;
    }
    .center {
        position: absolute;
        background-color: aquamarine;
        left: 200px;
        right: 200px;
        height: 100vh;
    }
</style>

<div class="left">1</div>
<div class="right">3</div>
<div class="center">2</div>
```
效果一样,此处省略.....
除此之外还有grid、table布局，此处省略，自行练习。

## 4. 说说calc并解释其作用？

calc()函数是css3新增的一个函数，用来计算表达式的值。

calc(x - x),注意x可以是负数，也可以是百分比，也可以是em，px等，也可以是任意css属性值，如width，height等。表达式需要用空格隔开。

## 5. CSS3新增的特性有哪些？

1. 渐变：分为linear-gradient：线性渐变和radial-gradient：径向渐变
2. 变形：transform：变形，包括旋转(rotate)、缩放(scale)、移动(translate)、倾斜(skew)等。
3. 过渡：transition主要是对样式的过渡效果，过渡效果可以设置时间，过渡效果可以设置属性，过渡效果可以设置动画效果。
4. 动画：animation
5. 盒子阴影：box-shadow：10px(水平阴影位置x) 10px(垂直阴影位置y) 5px(模糊距离) 5px(阴影大小) #888888(阴影颜色);
6. 媒体查询：@media (all(用于所有多媒体类型设备)、print(用于打印机)、screen(用于电脑屏幕，平板，智能手机等)、speech(用于屏幕阅读器))
7. 伪类:hover、active、focus、link链接没有被访问过、visited链接被访问过
8. 伪元素::before、::after
9. 盒模型：标准盒模型(width(content) + padding + border + margin)和怪异盒模型(width(content + padding + border) + margin)
10. 弹性布局：flex(flex-grow、flex-shrink、flex-basis、flex-direction、flex-wrap、justify-content、align-items、align-content)
11. 网格布局：
    fr单位代表网格容器中可用空间的一等份

    grid(grid-template-columns用于指定列的宽度

    grid-template-rows用于指定行的高度

    grid-template-areas:'area'可以指定网格布局的每个区域的名称，多行使用多个''

    grid-template-columns:可以设置每一列的宽度

    grid-column-start：指定网格元素列的开始位置

    grid-column-end：指定网格元素列的结束位置

    grid-column定义网格元素列的开始和结束的位置

    grid-row-start：指定网络元素行的开始位置

    grid-row-end：指定网格元素行的结束位置

    grid-row定义网格元素行的开始和结束位置

    grid-area是grid-row-start,grid-column-start,grid-row-end以及grid-column-end属性的简写。(grid-area:1/2/5/6表示从第1行开始和第2列开始，第5行和第6列结束)，除此之外还可以对改元素进行命名预grid-template-areas结合使用
    
    grid-column-gap：用来设置行之间的网格间隔
    
    grid-row-gap:用来设置列之间的网格间隔
    
    grid-gap:是grid-row-gap和grid-column-gap的简写
    
    justify-items:这只是对网格元素进行水平对齐
    
    align-items：对每个元素进行垂直对齐
    
    justify-content分配网格行轴的元素之间及其周围的空间
    
    align-content分配网格列轴的元素之间及其周围的空间)

12. 边框：border-radius：圆角、border-image：图片边框

## 6. CSS中选择器的优先级？
1. !important：最高优先级

2. 内联样式(style)：仅次于!important

3. id选择器 #

4. 类选择器、伪类、结构伪类、属性选择器 . [属性]

5. 标签选择器、伪元素选择器 div ::before、::after

9. 子选择器 nth:child()

10. 相邻兄弟选择器 +

11. 一般兄弟选择器 ~

12. 后代选择器 >

## 7. CSS权重如何计算？
1. ！important权重值：无穷大

2. 内联样式（style）权重值：1000

3. id选择器权重值：100

4. 类、伪类、结构伪类、属性选择器权重值：10

5. 标签、伪元素选择器权重值：1

6. 通配符选择器权重值：0

7. 继承样式：没有权重

## 8. CSS哪些属性可继承，哪些不可以？
常见的可继承属性：
1. 字体属性（font）

2. 文本属性（text）

3. 颜色属性（color）

4. 列表属性（list）

5. 表格布局属性（table-layout）

6. 元素可见性属性（visibility）

不可继承：
1. 背景属性（background）

2. 边框属性（border）

3. 内边距属性

4. 外边距属性

5. 定位属性

6. 大小属性

7. 盒模型属性

## 9. px、em、rem、%、pt、vh、vw、vmin、vmax的区别？
px：px时绝对单位，像素时屏幕上的最小单位，通常代表一个物理像素

em：em是相对单位，相对于父元素的字体大小

rem：rem是相对单位，相对于根元素的字体大小

%：%是相对单位，相对于父元素的宽度或高度

pt：pt是相对单位，相对于1/72英寸(常用于打印和排版)

vh：vh是相对单位，相对于视口高度

vw：vw是相对单位，相对于视口宽度

vmin：vmin是相对单位，相对于视口高度和宽度的最小值

vmax：vmax是相对单位，相对于视口高度和宽度的最大值

## 10. 如何画出一条0.5px的线？
1. 使用缩放scale(0.5)
```
.line {
    height: 1px;
	background-color:#3ff;
	transform: scaleY(0.5);
}
```
2. 使用box-shadow
```
.line {
	height: 1px;
    //offset-x(x轴偏移量) offset-y(y轴偏移量) blur(模糊程度) spread(阴影扩散半径) color(阴影颜色);
	box-shadow: 0 0 0 0.5px red;
}
```
3. svg
```
<svg width="100%" height="1">
	<line x1="0" y1="0" x2="100%" y2="0" style="stroke:black; stroke-width:0.5px;" />
</svg>
```
4. 使用伪元素

使用伪元素重叠可以获得0.5px的线

除此以外还有其他的方法，这里就不一一列举了

## 11. 隐藏一个元素有哪些方法？display:none与visibility:hidden与opacity:0之间的区别？
1. display:none：隐藏元素，元素不会被渲染，元素不会占据空间------->v-if

2. visibility:hidden：隐藏元素，元素会被渲染，元素不会占据空间------>v-show

3. opacity:0：隐藏元素，元素会被渲染，元素会占据空间

## 12. 什么是浮动，浮动会引起什么问题，有何解决方案？
浮动：浮动可以让元素脱离文档流，并允许元素在文档的其余部分中环绕。

浮动引起的问题：
1. 浮动元素脱离文档流，父元素高度无法被撑开

2. 浮动元素会与相邻元素重叠，影响页面布局

解决方案：
1. 浮动元素与相邻元素重叠，可以使用after伪元素设置clear属性清除浮动元素与相邻元素的重叠

2. 最后一个浮动标签后新加一个非浮动标签

3. 父元素设置overflow属性

4. 父元素设置高度

## 13. line-height和height的区别？
line-height：设置文字的行高，指一行文字的高度，作用在内联元素或块元素内的文本上

height：元素的高度，作用与块元素上

## 14. inline-block、inline和block的区别；为什么img是inline还可以设置宽高？
inline：元素不会换行，元素不会被高度撑开，元素不会被宽度撑开，元素不会被设置宽高

block：元素会换行，元素会被高度撑开，元素会被宽度撑开，元素会被设置宽高

inline-block：元素不会换行，元素会被高度撑开，元素会被宽度撑开，元素会被设置宽高

img是行内元素，也是替换元素，替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容，例如浏览器会根据img标签的src属性的值来读取图片信息并显示出来，而查看HTML代码看不到图片的实际内容。

## 15. 什么是重绘、回流，如何减少？如何让文档脱离文档流？
在浏览器渲染过程中，是由HTML解析、样式计算、布局、分层、绘制、分块、光栅化、绘画等。重排（回流）本质就是重新计算布局树，是当进行了会影响布局树的操作后（改变宽高、位置等）需要重新计算布局树；重绘本质就是重新根据分层信息计算量绘制指令，当改动了可见样式后，就需要重新计算，会引发绘制阶段。

重绘不一定会引起回流，回流一定会引起重绘

如何减少：
1. 减少DOM操作，减少DOM节点的创建和删除

2. 合并多次对DOM和样式的修改，一次性处理

3. 可以使用transform、opacity、filters这些动画不会引起回流重绘
还有许多可以减少重绘回流的方法，这里就不一一列举了


