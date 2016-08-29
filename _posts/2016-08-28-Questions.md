---
layout: post
title:  "Front-End-Developer-Interview-Questions（持续更新）"
date:   2016/8/28 23:11:12 
categories: original
excerpt_separator:   
---

总结这套前端面试的题目答案，一是想让自己随时能翻看查找一些遗忘的知识点，二也是给各位朋友们做个参考。 

主要的问题都来自于Github上的两篇前端面试问题总结：[Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese)和[FE-interview](https://github.com/qiu-deqing/FE-interview)

因为有很大部分答案为网上搜集，没办法一一注明出处，如果作者看到了觉得有侵权的地方麻烦告知，立刻修改。

如果有答案出错或者不全面不清楚的地方欢迎指正。

---

- [常见问题](#normal)
	- [1、你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗?](#normal01) 
	- [2、浏览器同一时间可以从一个域名下载多少资源？](#normal02)
	- [3、请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间)](#normal03)
	- [4、请写一个简单的幻灯效果页](#normal04)
	- [5、什么是"白屏"？什么是 FOUC (无样式内容闪烁)？如何避免？](#normal05)

---

<span id="normal"></span>

##  > 常见问题 ##

<span id="normal01"></span>

### 1、你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗? ###

1. **很久很久以前：**浏览器即不宠幸前缀CSS3也不宠幸纯情CSS3(border-radius)；
2. **很久之前：**浏览器只宠幸前缀CSS3，不宠幸纯情的CSS3；
3. **现在：**浏览器不仅宠幸前缀CSS3属性，还宠幸纯情CSS3属性；
4. **等到以后：**前缀CSS3就回乡下带孩子了，浏览器只宠幸纯情CSS3属性。

**渐进增强（推荐）**

    .box {
		-webkit-border-radius: 10px;
		-moz-border-radius； 10px;
		border-radius: 10px;
	}

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

“渐进增强”观点认为应关注于内容本身。

内容是我们建立网站的诱因。有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。

**优雅降级**

    .box {
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius； 10px;
	}

一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。

而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。

在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。你可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。

> **加分项**
> 
> 特性检测：
> window.innerWidth/document.documentElement.clientWidth

**~当属性超过一个参数值的时候，不同的属性产生的作用是不一样的。**

    .box {
		//这俩家伙干的不是同一个活
		border-radius: 30px 10px;
		-webkit-border-radius: 30px 10px;
	}

> 纯情的那种写法(border-radius: 30px 10px)，是让box左上和右下角为30像素圆弧，左下角和右上是10像素圆弧。而那种杂碎的前缀写法(-webkit-border-radius)，则box渲染为每个角都是30像素宽10像素高的圆弧。

如下图所示：

![front01](
http://pwnny.cn/assets/images/webfront/front01.JPG)

错误方式：

![error](http://pwnny.cn/assets/images/webfront/graceful-degradation.JPG)

正确方式：

![error](http://pwnny.cn/assets/images/webfront/progressive-enhancement.JPG)

*~区别：*

- 优雅降级是从复杂的现状开始，并试图减少用户体验的供给。

- 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。

- 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

<span id="normal02"></span>

### 2、浏览器同一时间可以从一个域名下载多少资源？ ###

![error](http://pwnny.cn/assets/images/webfront/domainLoad.JPG)

<span id="normal03"></span>

### 3、请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间) ###

1. **减少HTTP请求**：包括图片地图、CSS Sprites、使用data:模式的URL内联图片、以及合并脚本和样式表
2. **使用CDN(内容发布网络)**：拉近HTTP响应和用户的距离
3. **添加Expires头**：通过浏览器缓存来大幅改善Web页面的性能
4. **压缩组件**：使用Gzip压缩HTML文档、脚本、样式表以及包括XML和JSON在内的任何文本响应。图片和PDF不应压缩，因为他们已经被压缩了，在对他们进行Gzip压缩只会增加CPU资源
5. **将样式表放在顶部**：防止白屏和FOUC的出现
6. **将脚本放在底部：**增加页面逐步呈现的良好用户视觉体验，提高下载并行度
7. **避免CSS表达式：**当页面改变时，CSS Expression表达式都会重新求值，如大小改变。频繁求值导致CSS性能低下
8. **使用外部JavaScript和CSS：**浏览器可以缓存外部文件，下次载入就会加快
9. **减少DNS查找：**添加DNS缓存，减少下次查找时间
10. **精简JavaScript：**从代码中移出注释以及不必要的空白字符(空格、换行和制表符)，从而减小文件大小
11. **避免重定向：**在重定向完毕并且HTML文档下载完毕之前，没有任何东西显示，也没有任何组件被下载，延迟了所有东西
12. **删除重复脚本：**一个页面包含相同的两个脚本会导致重复下载造成不必要的HTTP请求和执行JavaScript所浪费的时间
13. **配置ETag：**在拥有服务器集群的网站中使用原始的ETag标签，对于不同的服务器，ETag都是不同的，这会引起不必要的重新加载降低缓存效率
14. **使Ajax可缓存：**尽管Ajax请求不是可缓存的，但我们可以在查询请求中加入查询字符串增加个性化，并且添加Expires头利用缓存优势
15. **使用GETwanchengAjax请求**
16. **减少DOM元素的数量**
17. **避免404**
18. **减少Cookie大小**
19. **使用无Cookie的域**
20. **避免使用滤镜**
21. **不要在HTML中缩放图片**
22. **使用小favicon.ico文件，并让其可缓存**
23. **避免使用src和href标签**

<span id="normal04"></span>

### 4、请写一个简单的幻灯效果页面 ###

不使用JS的加分代码：

    <!doctype html>
	<html>
	<head>
		<style>
			img {
				display: none;
				width: 100px;
				height: 100px;
			}
		
			input:checked + img {
				display: block;
			}
			
			input {
				position: absolute;
				left: -9999px;
			}
			
			label {
				cursor: pointer;
			}
		</style>
	</head>
	<body>
		<div id="cont">
			<input id="img1" name="img" type="radio" checked="checked">
			<img src="a.png">
			<input id="img2" name="img" type="radio">
			<img src="b.png">
		</div>
		<div id="nav">
			<label for="img1">第一张</label>
			<label for="img2">第二张</label>
		</div>
	</body>
	</html>

<span id="normal05"></span>

### 5、什么是"白屏"？什么是 FOUC (无样式内容闪烁)？如何避免？ ###

**~白屏：**

*【是什么？】*

**原理：**将样式表放在文档底部时，为避免当样式变化时重绘页面中的元素，浏览器会阻塞内容**逐步呈现**。当发生这种现象时，页面会完全空白，直到页面所有的内容同时涌上屏幕。

用户**感觉缓慢(样式表位于底部或者使用@import导入样式表)**的页面反而是可视化组件加载的更快的页面。在浏览器和用户等待位于底部的样式表时，浏览器会延迟显示任何可视化组件。

>![loadSpeed](http://pwnny.cn/assets/images/webfront/blankWhite.PNG)

>感觉缓慢的网页--css-bottom.php和css-top-import.php--实际下载页面所必需的组件的时间是最短的。而css-top.php尽管下载时间延迟了大约1秒，但用户感觉显示的更快，因为页面是逐步呈现的。

*【导致白屏的原因：】*

- 将样式表放在底部

- 有几个样式表，放在html结构的不同位置。

- 使用@import规则导入样式表，不论是放在head标签里还是页面底部
	- 一个style块可以包含多个@import规则，但@import规则必须放在所有其他规则之前
	
	- 使用@import规则会导致组件下载时的无序性
	
- 在IE中将样式表放在文档底部导致白屏问题的情形：

	1. **在新窗口打开时**
	
		用户通常在跨站导航时打开新窗口， 如从搜索结果页导航到实际的目标页。
	
	2. **重新加载时** 
	
		点击刷新按钮是另外一种导致白屏的方式，这是一种常见的用户操作。在页面加载时最小化然后恢复窗口就能看到白屏。 
	
	3. **作为主页**
	
		将浏览器默认页面设置为某一网页，并打开新的浏览器窗口就会导致白屏。

*【如何避免白屏：】*

用**link**标签将样式表放在文档顶部的**head**中。

>[**HTML规范**](https://www.w3.org/TR/html4/struct/links.html#h-12.3)规定：link和a不一样，只能出现在文档的head节中，但其出现的次数是任意的。（由于历史原因，浏览器支持违反HTML规范的页面，为了一些老旧的，不规整的页面也能浏览，使得将link放到head节之外任然能够呈现）

**~FOUC(无样式内容闪烁)：**

样式表对于呈现页面并不是必需的。样式表在页面中的位置并不影响下载时间，但是会影响页面的呈现。

> 如果样式表仍在加载，构建呈现树就是一种浪费，因为在所有样式表加载并解析完毕之前无需绘制任何东西。否则，在其准备好之前显示内容会遇到FOUC(Flash of Unstyled Content)问题

*【是什么？】*

如果样式表被(不正确地)放在了底部，当页面逐步加载时，文字首先显示，然后是图片，等等。最后，在样式表正确地下载并解析之后，已经呈现的文字和图片就要用新的样式重绘。这就是"无样式内容闪烁"

*【导致FOUC的原因：】*

- 无样式闪烁并不总是发生，它取决于你的浏览器以及如何加载页面。
	- 在"白屏"那部分，我介绍说白屏仅当在新窗口中加载页面、重新加载和作为主页时在IE中发生。这些情况下，IE选择白屏。而如果你点击链接、使用书签或键入URL，IE会选择第二种方式--承担FOUC风险
	- 我现在测试最新版的chrome、opera为白屏、FireFox、IE11、Edge为FOUC(对于后面的三个浏览器，他们的行为更考虑用户感受，因为样式表对于呈现页面来说并不是必需的。大家如果想测试浏览器是白屏还是FOUC可以打开这个网站：[**测试页面**](http://stevesouders.com/hpws/css-fouc.php))

*【如何避免FOUC：】*

遵循HTML规范，将样式表放在顶部。(如果你的样式表不是呈现页面所必需的，可以想办法在文档加载完毕之后动态加载进来，如用文档的onload事件延迟创建link和scriptDOM元素。否则，不管你的样式表在呈现页面时是否必需，都应遵守这个规则)

