---
layout: post
title:  "background详解"
date:   2017/4/20 9:00:52  
categories: original
excerpt_separator:   
---

background是一个简写的用来设置背景的综合性属性，而各种关于背景的属性多达八种，平时单独写各属性可能问题不是很大，但有时候为了DIY(Don't repeat yourself)需要将各属性合并为简写的background，这时候可能就会出现各种问题，今天，我就来给大家扒一扒各个背景属性以及怎样简写background属性才是不易出错的。

> 目录中的八大属性后面是其默认值

- [八大背景属性](#total)
	- [1、background-image: none](#image)
	- [2、background-position: 0% 0%](#position)
	- [3、background-size: auto auto](#size)
	- [4、background-repeat: repeat](#repeat)
	- [5、background-attachment: scroll](#attachment)
	- [6、background-origin: padding-box](#origin)
	- [7、background-clip: border-box](#clip)
	- [8、background-color: transparent](#color)
- [background简写属性](#logogram)
	
## <span id="total"></span> > 八大背景属性 ##

> 只介绍各属性中需要着重注意的地方，其他常规性文字说明再次不在赘述

### <span id="image"></span> 1、background-image ###

**值：** 
url | none | inherit

**初始值：** none

**继承性：** 无

可以设置多背景，以逗号相隔：

	background-image: url(1.png), url(2.png), linear-gradient(to top,#fff,#000);

背景会在Z方向上层叠显示，最先指定的图像会在最上层显示。

border会在背景之上绘制，background-color会在背景之下绘制：

显示优先级：border > background-image1 > background-image2 >...> background-color

**好习惯：** 如果背景图像因为像网络等原因无法正常加载显示，那么这时浏览器就会把background-image置为默认值none。所以在用background-image设置不透明图像时最好同时指定background-color属性，这样图像不显示的情况下还能有替代的背景色。

**注意：** background-image默认从内边距边界开始绘制，而不是从border底下开始绘制，所以在既设置了背景图像，又设置了背景色，并且border是dashed或dotted这种镂空的边框的情况下，背景图像只会显示在边框里边而背景色会从border底下开始显示。

当然上面这种情况是指background-repeat属性为no-repeat的时候才会发生，如果background-repeat设置为除no-repeat之外的其他任意属性，因为都会在x或y方向上无限平铺，所以背景图像都会从border下开始绘制

如果想在不重复平铺图像的情况下改变使得背景图像也从边框底下开始显示可以使用专门针对改变背景图像原点位置的属性：[background-origin](#origin)

### <span id="position"></span> 2、background-position ###

**值：** 
长度值 | 百分数值 | 关键字 | inherit

**初始值：** 0% 0%

**继承性：** 无

background-position相对于元素的内边距边界（即border与内边距的交界处）放置图像（正因为此，所以background-position默认值为0% 0%就是从内边距边界开始放置图像而不是从border底下开始）

**(1) 关键字：** *如 center top、left、top right 等*

位置关键字可以按任意顺序写，只要不超过两个关键字--一个对应水平方向，另一个对应垂直方向

如果只出现了一个关键字，另一个默认为center

**(2) 百分数值：** *50%、25% 0%、100% 100%等*

用百分数值设置位置时，第一个数值默认是水平位置，所以使用百分数值时不能按任意顺序，一定要先水平后垂直

如果只提供了一个百分数值，这个值将被用作水平值，垂直值则默认为50%居中（center）

**注意：**百分数值同时应用于元素和背景图像：

如，要把图像在一个元素中居中，可以设置background-postion: 50% 50%，这就代表位于图像中50% 50%的点(中心点)与位于元素中50% 50%的点(中心点)对齐

**(3) 长度值：** *20px 50px、1em 5rem等*

用长度值设置位置时，和百分数值一样第一个长度值默认为水平位置

如果只提供一个长度值，将被用作水平值，垂直值默认为center居中

**注意：** 与百分数值不同，长度值的偏移是从一个左上角到另一个左上角，即原图像的左上角与background-position声明中指定的点对齐(偏移点是原图像的左上角)

**(4) 综合：**
- 关键字、百分数值和长度值可以相互混用（top 25%、30% 25px）
- 百分数值和长度值可以是负数（-20px 10%、-15% -30%）

### <span id="size"></span> 3、background-size ###

**值：**
长度值 | 百分数值 | auto | cover | contain | inherit

百分数值和长度值都是先水平后垂直

- 一个值：被用作背景宽度，高度默认为auto
- 两个值：第一个为背景宽度，第二个为背景高度

**初始值：**

**继承性：**

### <span id="repeat"></span> 4、background-repeat ###

**值：**

**初始值：**

**继承性：**

### <span id="origin"></span> 5、background-origin ###

**值：**

**初始值：**

**继承性：**

### <span id="clip"></span> 6、background-clip ###

**值：**

**初始值：**

**继承性：**

### <span id="attachment"></span> 7、background-attachment ###

**值：**

**初始值：**

**继承性：**

### <span id="color"></span> 8、background-color ###

**值：**

**初始值：**

**继承性：**

## <span id="logogram"></span> > background简写属性 ##


