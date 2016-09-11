---
layout: post
title:  "Front-End-Developer-Interview-Questions（持续更新）"
date:   2016/8/28 23:11:12 
categories: original
excerpt_separator:   
---

总结这套前端面试的题目答案，一是想让自己随时能翻看查找一些遗忘的知识点，二也是给各位朋友们做个参考。 

大家可能发现很多问题的答案篇幅会比较长，这是因为我顺带写了很多铺垫知识。这是为了以后复习某个问题的时候可以连点带面的串起与它相关的其他知识。我总结这些问题的答案，目的不是单纯的找答案，而是借此复习一些前端的知识，也作为我自己的一个小知识库。所以请大家谅解篇幅的冗长。

主要的问题都来自于Github上的两篇前端面试问题总结：[Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese)和[FE-interview](https://github.com/qiu-deqing/FE-interview)

因为有部分答案为网上搜集，没办法一一注明出处，如果作者看到了觉得有侵权的地方麻烦告知，立刻修改。

如果有答案出错或者不全面不清楚的地方欢迎指正。

---

- [常见问题](#normal)
	- [1、你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗?](#normal01) 
	- [2、浏览器同一时间可以从一个域名下载多少资源？](#normal02)
	- [3、请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间)](#normal03)
	- [4、请写一个简单的幻灯效果页](#normal04)
	- [5、什么是"白屏"？什么是 FOUC (无样式内容闪烁)？如何避免？](#normal05)
	- [ 6、请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible)](#normal06)
- [HTML相关问题](#htmlAbout) 
	- [1、doctype(文档类型) 的作用是什么？](#htmlAbout01)
	- [2、浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？](#htmlAbout02)
	- [3、HTML 和 XHTML 有什么区别？](#htmlAbout03)
	- [4、如果页面使用'application/xhtml+xml'会有什么问题吗？](#htmlAbout04)
- [HTTP相关问题](#httpAbout)
	- [1、常见的HTTP method](#httpAbout01)  
	- [2、从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)](#httpAbout02)
	- [3、HTTP Request和HTTP Response报文结构是怎样的？](#httpAbout03)
	- [4、HTTP 状态码及其含义](#httpAbout04)
- [CSS相关问题](#CSSAbout)
	- [1、CSS中类选择器和ID选择器的区别？](#CSSAbout01)
	- [2、CSS选择器有哪些？](#CSSAbout02)
	- [3、PNG,GIF,JPEG的区别及如何选？](#CSSAbout03)
	- [4、CSS Hack原理及常用Hack](#CSSAbout04)
	- [5、CSS特殊性计算](#CSSAbout05)
	- [6、CSS中常用的颜色单位](#CSSAbout06)
	- [7、如果设计中使用了非标准的字体，你该如何去实现？](#CSSAbout07)
- [JavaScript相关问题](#JSAbout)
	- [1、script元素中的属性及存放位置](#JSAbout01) 
	- [2、相等(==)和全等(===)操作符判断相等的流程是怎样的？](#JSAbout02)
	- [3、JavaScript中有哪些方法定义对象？](#JSAbout03)
	- [4、<,>,<=,>=的比较规则？](#JSAbout04)
	- [5、+运算符的工作流程](#JSAbout05)

---

##  <span id="normal"></span>> 常见问题 ##

### <span id="normal01"></span>1、你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗? ###

1. **很久很久以前：**浏览器即不宠幸前缀CSS3也不宠幸纯情CSS3(border-radius)；
2. **很久之前：**浏览器只宠幸前缀CSS3，不宠幸纯情的CSS3；
3. **现在：**浏览器不仅宠幸前缀CSS3属性，还宠幸纯情CSS3属性；
4. **等到以后：**前缀CSS3就回乡下带孩子了，浏览器只宠幸纯情CSS3属性。

**渐进增强（推荐）**

> 让牛B的浏览器显示效果更好

    .box {
		-webkit-border-radius: 10px;
		-moz-border-radius； 10px;
		border-radius: 10px;
	}

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

无需为了一个已成型的网站在旧式浏览器下正常工作而做逆向工程。首先，只需要为所有的设备和浏览器准备好清晰且语义化的HTML以及完善的内容，然后再以无侵入（unobtrusive）的方式向页面增加无害于基础浏览器的额外样式和功能。当浏览器升级时，它们会自动地呈现出来并发挥作用。

“渐进增强”观点认为应关注于内容本身。因为内容是我们建立网站的主要因素。这使得“渐进增强”成为一种更为合理的设计范例。


**优雅降级**

> 让2B的浏览器在功能OK的情况下显示效果一般

    .box {
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius； 10px;
	}

一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but possible)“的浏览体验。

> **加分项**
> 
> 特性检测：
> 
> - window.innerWidth
>
> - document.documentElement.clientWidth

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

使用**优雅降级**导致的错误显示：

- 浏览器在渲染优雅降级时先遇到纯情CSS，但是遇到后面的前缀CSS时则会覆盖先前的纯情CSS效果。

![error](http://pwnny.cn/assets/images/webfront/graceful-degradation.JPG)

使用**渐进增强**带来的正确显示：

- 浏览器在渲染渐进增强时则会覆盖前缀CSS3，使用最下面的不带前缀的CSS3，这会带来正确的显示。

![error](http://pwnny.cn/assets/images/webfront/progressive-enhancement.JPG)

像上图所示的使用优雅降级和渐进增强所导致的不同的显示还有很多方面：如线性渐变linear-gradient(120deg, #155799, #159957)等一些其他的CSS3的特性。

**所以，我强烈建议大家使用 渐进增强 ！**

*~区别：*

- 优雅降级是从复杂的现状开始，并试图减少用户体验的供给（一开始就构建站点的完整功能，然后针对浏览器测试和修复）。

- 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要（一开始只构建站点的最少特性，然后不断针对各浏览器追加功能）。

- 优雅降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

### <span id="normal02"></span>2、浏览器同一时间可以从一个域名下载多少资源？ ###

![error](http://pwnny.cn/assets/images/webfront/domainLoad.JPG)

### <span id="normal03"></span>3、请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间) ###

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
15. **使用GET完成Ajax请求**
16. **减少DOM元素的数量**
17. **避免404**
18. **减少Cookie大小**
19. **使用无Cookie的域**
20. **避免使用滤镜**
21. **不要在HTML中缩放图片**
22. **使用小favicon.ico文件，并让其可缓存**
23. **避免使用src和href标签**

### <span id="normal04"></span>4、请写一个简单的幻灯效果页面 ###

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

### <span id="normal05"></span>5、什么是"白屏"？什么是 FOUC (无样式内容闪烁)？如何避免？ ###

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

### <span id="normal06"></span>6、请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible) ###

**~ARIA**

> WAI-ARIA，是Web Accessibility Initiative - Accessible Rich Internet Applications 的缩写，主要解决的一个问题：让残障人士能无障碍地访问网页上的动态内容。

【*是什么？*】

WAI-ARIA 是一个为残疾人士等提供无障碍访问动态、可交互 Web 内容的技术规范，为浏览器、媒体播放器、辅助技术的开发人员以及 Web 内容开发者定义了可以获得更广泛跨平台可访问性的方法。

更为通俗的解释：ARIA就是可以让屏幕阅读器准确识别网页中的内容，变化，状态的**技术规范**，可以让盲人这类用户也能无障碍阅读。

- ARIA规范一直在更新维护，浏览器方面IE8+以及其他所有现代浏览器都都已支持ARIA, 几乎可以说是全方位支持
- ARIA由三部分构成：ARIA Role属性、ARIA属性、ARIA状态属性

**~屏幕阅读器**

屏幕阅读器是一种可将文字、图形以及电脑接口的其他部分（藉文字转语音技术）转换成语音及/或点字的软件。它可以大声朗读或者输出盲文。

常用的有国外的免费屏幕阅读器[NVDA](http://www.nvaccess.org/)和收费的[JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS)，目前国内的屏幕阅读器对ARIA支持的不是太好

**~无障碍访问的实现：**

ARIA的相关属性非常多，下面就介绍几个常用的属性（如果需要了解更多ARIA方面的知识可以参考 [**W3C Roles**](https://www.w3.org/TR/wai-aria/roles) 和 [**WAI-ARIA无障碍网页应用属性完全展示**](http://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/)）

- 使用 role="button" 标记出起按钮作用的超链接 
	- role属性用于标识出网页的模块或组件，如 main 为主要内容区，banner 为横幅区，toolbar 为工具栏等
	- 在前端开发中，常常使用 a 标签模拟按钮，这种起按钮作用的链接，必须标识 role="button" 来告知屏幕阅读器把它看作按钮而不是超链接。
- 使用合适的语句填写 alt 属性
	- alt 属性用作图片无法加载或图片无法被用户识别（如盲人无法看到图片）的替代文本，因此合理的使用 alt 信息有助于于盲人认知网页中的图片内容
	- alt 使用准确的描述，这段描述需要反映图片的基本意义，但不能冗长
	- 不必为无实质意义的图片添加 alt 信息，有些建议会为所有图片添加 alt 信息，但某些图片，如装饰性图片，添加 alt 信息只会为盲人带来干扰。无内容意义或网站引导作用的图片不必添加 alt 信息，如果不希望省略 alt 信息，可以添加 alt=""
- 合理进行网页布局
	- 合理进行网页布局是设计网页时最基本的要求之一，在对待盲人用户时显得尤为重要，由于无法直接看到网页的布局，他们只能通过挪动鼠标或 tab 键，再通过屏幕阅读器的报读了解页面，因此网页的合理布局显得尤为重要，这让他们更容易想象到网页的结构
	- 页眉、导航栏、主内容、辅助内容、页脚等区域需要合理布局，有清楚的分隔
	- 分级标题（h1, h2, h3...）的合理使用，屏幕阅读器能识别不同分级的标题并告知盲人用户，因此合理使用标题能告知盲人网站的脉络
- 使用更多的 WAI-ARIA 属性
	- Role属性：
		- 如：role="banner" 代表横幅区，role="navigation" 代表导航模块，role="menubar" 代表菜单栏模块，role="menuitem" 代表菜单项， role="alertdialog" 代表警告弹出框
	- ARIA属性：
		-  ARIA 属性增强网页的功能描述，如 aria-autocomplete，配合 HTML5 中 autocomplete 表示出输入框的自动提示功能是否有提供
		-  除了作为补充作用，ARIA 属性还可以增强普通的 HTML 元素，例如，aria-haspopup(="true") 属性可以定义一个有弹出菜单的按钮
	- ARIA状态属性：
		-   ARIA 状态属性则用于描述网页元素的各种状态，如 aria-checked 表明元素是否有被选中， aria-hidden 表示元素是否隐藏（不可见）
- 不必增加额外的 title 属性
	- 虽然不大方便，但事实上，屏幕阅读器会无视 title 属性，更不会把 title 的值读出，因此很遗憾，为元素增加额外的 title 是徒劳的
- 不要滥用 tabindex 属性
	- tabindex 用于指定使用 tab 键改变焦点时的顺序，盲人用户已经形成自己的顺序逻辑，如果你的网页布局合理，那就不需要过多地使用 tabindex 属性，甚至为每个元素添加 tabindex ，这只会让盲人用户感到混乱

##  <span id="htmlAbout"></span>> HTML相关问题 ##

### <span id="htmlAbout01"></span>1、doctype(文档类型) 的作用是什么？ ###

doctype声明指出**阅读程序**(在Web文档的情况下，“阅读程序”通常是浏览器或者校验器这样的一个程序)应该用什么**规则集**(W3C所发布的一个文档类型定义（DTD）中包含的规则)来解释文档中的标记。直白的讲就是让浏览器根据你的指定来用正确的模式渲染页面。

doctype是DocumentType的简称即文档类型，doctype声明位于文档中最前面的位置，处于标签之前，告知浏览器使用的是哪种规范。

**~文档为什么要分类型？**

- 如果文档不分类型，各浏览器就会形成多种写法，假如IE用 <tt>title</tt> 标签作为标题、火狐浏览器用 <tt>caption</tt> 标签作为标题，而另一种浏览器可能采用 <tt>mytitle</tt>，这对于开发者和用户来说简直是灾难。
- W3C（万维网联盟World Wide Web Consortium）制作了对所有方面都平衡的分歧解决方案，并且各浏览器没有异议，于是用<!doctype>（注意：作为一个特殊的标 签，它是不需要闭合的）标签来引入W3C的dtd文件，以达到规范页面的效果。
- HTML5不是基于SGML（标准通用标记语言）实现的，因此html不需要引入DTD，所以HTML5可以简单的声明一下<!doctype html>。

> 范例中的DOCTYPE，<!DOCTYPE html>，是所有可用的DOCTYPE之中最简单的，而且是HTML5 所推荐的。HTML的早期变种也属于推荐标准，不过今日的浏览器都会对这个 DOCTYPE 使用标准模式，就算是已过时的 IE6 也一样。

    <!DOCTYPE html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Hello World!</title>
	</head>
	<body>
	</body>
	</html>


在 HTML5中，DOCTYPE 唯一的作用是启用标准模式。更早期的 HTML 标准会附加其他意义，但没有任何浏览器会将 DOCTYPE 用于怪异模式和标准模式之间互换以外的用途。

### <span id="htmlAbout02"></span>2、浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？ ###

Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页。

Quirks （怪异）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页，排版会模拟 Navigator 4 与 Internet Explorer 5 的非标准行为。

Almost Standards （近似标准）模式（Mozilla/Netscape 6新增的一种模式），用于支持为标准的某个老版本而设计的网页，只有少数的怪异行为被实现。

**~浏览器如何决定用哪个模式？**

对HTML文件来说，浏览器使用文件开头的 DOCTYPE 来决定用哪种模式。

- DOCTYPE切换问题：
	- 如果页面使用 *<?xml version="1.0" encoding="UTF-8"?>* 开头，或者在DOCTYPE之前放入任何东西，都会导致浏览器（IE9及及之前版本，旧版Opera和旧版Safari）无法识别DOCTYPE。这会使他们进入Quirks模式。
	- 所以一定要把DOCTYPE 正确地放在 HTML 文件的顶端。 而XML prolog并非必需的，可以在XHTML中安全地省略它。但要记得在meta标记中包括一个charset属性以弥补XML prolog中缺失的encoding属性
- 丢失的URL或者相对URL：
	- 在完整的DOCTYPE声明中，要包括相应的文档类型定义（DTD）文件的URL。
	- 如果URL丢失，或者指定的是一个相对路径（而不是完全限定的Internet地址），大多数浏览器都会进入Quirks模式，不管DOCTYPE声明规定的是什么模式。
- 形式错误的DOCTYPE
	-  览器对DOCTYPE声明的形式和格式非常敏感，如果不能识别一个形式错误的DOCTYPE，就会强制进入Quirks模式（正是因为这个原因，所以建议将一个已知正确的DOCTYPE拷贝和粘贴到文档中，而不是亲自输入它）。
	-  之所以出现形式错误的DOCTYPE，一个常见的原因是在DOCTYPE的第一部分与URL之间缺少一个空格。将一个分两行的DOCTYPE折叠成单独一行，常常会丢失那个空格。
- 过渡期和未知的DOCTYPE：
	-   浏览器处理过渡期的DOCTYPE时，最容易出现不一致的问题。各个浏览器对于处理后使用什么模式也各不相同。
	-   浏览器在处理不能识别的DOCTYPE时，也存在不一致的现象。
	-   大家可以自己在各浏览器里测试一下。在 Firefox中，请从右键菜单选择查看页面信息，然后查看渲染模式。

### <span id="htmlAbout03"></span>3、HTML 和 XHTML 有什么区别？ ###

- **HTML（HyperText Markup Language，超文本标记语言）**最早的HTML官方正式规范，是1995年IETF（Internet Engineering Task Force，因特网工程任务组）发布的HTML 2.0。W3C（World Wide Web Consortium，世界万维网联盟）继IETF之后，对HTML进行了几次升级，直至1999年发布HTML 4.01。

- **XHTML（eXtensible HyperText Markup Language，可扩展超文本标记语言）**是HTML 4.01的第一个修订版本，是「3种HTML4文件根据XML1.0标准重组」而成的。也就是说，XHTML是HTML 4.01和XML1.0的杂交。由于XHTML1.0是基于HTML4.01的，并没有引入任何新标签或属性（XHTML可以看作是HTML的一个子集），表现方式与超文本标记语言HTML类似，只是语法上更加严格，几乎所有的网页浏览器在正确解析HTML的同时，可兼容XHTML。

下面是HTML和XHTML的发展历史：

> 在HTML的早期发展中，W3C成立之前，很多标准的制定都是在浏览器的开发者们互相讨论的情况下完成的，比如HTML 2.0, 3.2直到4.0, 4.01，这些标准大部分都是所谓的retro-spec，即先有实现后有标准。在这种情况下，HTML标准不是很规范，浏览器也对HTML页面中的错误相当宽容。这反过来又导致了HTML作者写出了大量的含有错误的HTML页面。据说，时至今日web上99%的页面都含有HTML错误。

> W3C随后意识到了这个问题，并认为这是互联网的一个基础性问题，应该加以解决。为了规范HTML，W3C结合XML制定了XHTML 1.0标准，这个标准没有增加任何新的tag，只是按照XML的要求来规范HTML，并定义了一个新的MIME type：application/xhtml+xml。W3C的初衷是对这个MIME type浏览器要实行强错误检查，即：如果页面有HTML错误，就要显示错误信息。但是由于已有的web页面中已经有了大量的错误，很多开发者拒绝使用新的MIME type。W3C不得已，在XHTML 1.0的标准之后加了一个附录C，允许开发者使用XHTML语法来写页面，同时使用旧的MIME type：application/html，来分发页面。这个旧的MIME type不会触发浏览器的强错误检查。这就是我们今天看到的情况，很多网站宣称自己遵守XHTML 1.0标准，那只不过是说，他的页面中用了XHTML语法，但并不能保证完全没有错误。要验证XHTML有没有真正起效，需要查看web服务器使用哪种MIME type来分发页面的。

> W3C随后在XHTML 1.1中取消了附录C，即使用XHTML 1.1标准的页面必须用新的MIME type来分发。于是这个标准并没有很多人采用。这种情况同样发生在尚未完成的XHTML 2.0身上，它要求强错误检查，于是没有人采用。XHTML的故事也告诉我们，有时候先有标准再来实现，是行不通的。

> 有了XHTML的教训，WHAT Working Group和W3C在制定下一代HTML标准，也就是HTML5的时候，就将向后兼容作为了一个很重要的原则。HTML5确实引入了许多新的特性，但是它最重要的一个特性是，不会break已有的网页。你可以将任何已有的网页的第一行改成<!DOCTYPE html>，它就成为了一个HTML5页面，并且可以照样在浏览器里正常的展示。

**~区别：**

- HTML是一种基于标准通用标记语言（SGML）的应用
- 而XHTML则基于可扩展标记语言（XML）

- 在HTML中某些元素可以像这样彼此不正确地嵌套：`<b><i>This text is bold and italic</b></i>`
- 在 XHTML 中，所有的元素必须像这样彼此正确地嵌套： `<b><i>This text is bold and italic</i></b>`

- HTML元素必须可以不被关闭 ：`<p>This is a paragraph`
-  XHTML元素必须被关闭 ：`<p>This is a paragraph</p>`

- HTML中空标签可以不关闭：`A break: <br>`
- XHTML中空标签必须被关闭：`A break: <br/>`

- HTML元素标签名和属性不区分大小写
：`<BODY>`
	`<P>This is a paragraph</P>`
	`</BODY>` 
- XHMTL元素标签名和属性必须小写： `<body>`
	`<p>This is a paragraph</p>`
	`</body>`

- 所有的XHTML元素必须被嵌套于<html>根元素中。其余所有元素均可有子元素

### <span id="htmlAbout04"></span>4、如果页面使用 'application/xhtml+xml' 会有什么问题吗？ ###

包括基本响应头的HTML文档：

    HTTP/1.1 200 OK
	Content-Type: text/html
	
	<!DOCTYPE html>
	<html lang=en>
	  <head>
	    <meta charset=utf-8>
	    <title>HTML</title>
	  </head>
	  <body>
	    <p>I am a HTML document</p>
	  </body>
	</html>

包括基本响应头的XHTML文档：

    HTTP/1.1 200 OK
	Content-Type: application/xhtml+xml
	
	<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
	  <head>
	    <title>XHTML</title>
	  </head>
	  <body>
	    <p>I am a XHTML document</p>
	  </body>
	</html>

> 关于XHTML的主要的误解是：认为它仅仅是另外一个版本的HTML。这个误解产生的原因来自于一个事实：IE只在文件以MIME类型为 <tt>text/html </tt>提交时，才支持XHTML。而标准中建议的类型其实是 <tt>application/xhtml+xm</tt>。

> 当一个XHTML页面的MIME类型被提交为 <tt>text/html</tt> 时，它被所有的浏览器当作HTML处理，就好像XHTML比起HTML来没有任何不同。但是当一个XHTML页面的MIME类型被提交为 <tt>text/xml</tt> 或 <tt>application/xhtml+xml</tt> 时，它将被当作XML文档处理，而设计和显示XML都是必须要遵守严格规则的。

> 如果你的网页使用XHTML并在HTTP <tt>Content-Type</tt> 标头使用 <tt>application/xhtml+xml</tt> MIME 类型，你不需要使用 DOCTYPE 启动标准模式，因为这种文件会永远使用标准模式。

> 如果你的XHTML网页使用 <tt>text/html</tt> MIME 类型，浏览器会将其视为 HTML，因此你就需要 DOCTYPE 启用标准模式。

<tt>**注意!**</tt> 页面使用 <tt>application/xhtml+xml</tt> 会令**IE8及它之前**的版本显示一个因为未知格式错误带来的下载对话框。这是因为支持 XHTML 的第一个 IE 版本是 IE9。

简言之：低版本的老旧浏览器不支持 <tt>application/xhtml+xml</tt> ，这会带来错误。

##  <span id="httpAbout"></span>> HTTP相关问题 ##

### <span id="httpAbout01"></span>1、常见的HTTP method ###

![HTTP Method](http://pwnny.cn/assets/images/webfront/HTTPMethod.PNG)

- **GET**
	-  是最常用的方法，通常用于请求服务器发送某个资源。
- **HEAD**
	- 与GET类似，但服务器在响应中只返回首部，不返回实体的主体部分
	- 使用HEAD，可以：
		- 在不获取资源的情况下了解资源的情况（如：判断其类型）
		- 通过查看响应中的状态码，看看某个对象是否存在
		- 通过查看首部，测试资源是否被修改了
- **PUT**
	- 与GET相反，会向服务器写入文档
	- 让服务器用请求的主体部分来创建一个由所请求的URL命名的新文档
	- 如果那个URL已经存在的话，就用这个主体替代它 
- **POST**
	- 起初是用来向服务器输入数据的
	- 实际上，通常会用它来支持HTML的表单
	- 表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方
- **TRACE**
	- 主要用于诊断，用于验证请求是否如愿穿过了请求/响应链
	- 会在目的服务器端发起一个环回诊断，最后一站的服务器会弹回一个TRACE响应并在响应主体中携带它收到的原始请求报文（精确副本） 
- **OPTIONS**
	- 请求web服务器告知其支持的各种功能
	- 可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法
	- 在请求报文中使用 <tt>Accept</tt> 首部来请求服务器对哪些资源返回所支持的方法（如：服务器收到 <tt>Accept: *</tt> 首部，由于请求的是可为所有资源使用的选项，服务器就会返回它所支持的可通用于各种资源的方法）
- **DELETE**
	- 请求服务器删除请求URL指定的资源
	- 客户端无法保证删除操作一定会被执行（因为HTTP规范允许服务器在不通知客户端的情况下撤销请求）

>**扩展方法：**指的是没有在HTTP/1.1规范中定义的方法。如果一些扩展方法可能破坏端到端行为则应以 <tt>501 Not Implemented（无法实现）</tt> 状态码进行相应。

>对待扩展方法的态度：**对所发送的内容要求严一点，对所接收的内容宽容一点**  

### <span id="httpAbout02"></span>2、从浏览器地址栏输入url到显示页面的步骤(以HTTP为例) ###

下面是一些基本知识介绍

---

> **MIME类型（MIME TYPE）：**是一种文本标记（数据格式标签），表示一种**主要的对象**类型和一个**特定的子**类型。中间由一条斜杠来分隔。

> - 最初设计MIME（Multipurpose Internet Mail Extension，多用途因特网邮件扩展）是为了解决在不同的电子邮件系统之间搬移报文时存在的问题。MIME在电子邮件系统中工作的非常好，因此HTTP也接纳了它，用它来描述并标记多媒体内容
> - Web服务器会为所有HTTP对象数据附加一个MIME类型，如 <tt>Content-type: image/jpeg</tt>。当Web浏览器从服务器中取回一个对象时，回去查看相关的MIME类型，看看它是否知道应该如何处理这个对象

>常用的MIME类型：

>- HTML格式文本文档：<tt>text/html</tt>    
>- 普通ASCII文本文档：<tt>text/plain</tt>
>- JPEG格式的图片：<tt>image/jpeg</tt>
>- GIF格式的图片：<tt>image/gif</tt>
>- APPLE的QuickTime电影：<tt>video/quicktime</tt>
>- 微软的PowerPoint：<tt>application/vnd.ms-powerpoint</tt>

> **URI（统一资源标识符，Uniform Resource Identifier）：**是一类通用的资源标识符，由两个主要的子集**URL**（通过描述资源的位置识别）和**URN**（通过描述资源的名字识别）构成

> **URL（统一资源定位符，Uniform Resource Locator）：**描述了一台特定服务器上某资源的特定位置。URL提供了一种统一的资源命名方式，大多数URL都有同样的： <tt>“方案(scheme) :// 主机(host) / 路径(path)”</tt> 结构，可以明确说明如何从一个精确、固定的位置获取资源。

> - **(!)方案(http://)：**规定使用什么协议访问。以一个**字母符号**开始，由第一个 ":" 符号将其与URL其余部分分隔。方案名是大小写无关的
> - **(!)主机( www.pwnny.cn )：**标识了因特网上能够访问资源的宿主机器。可以用主机名(pwwny.cn)或者IP地址来表示主机名
> - **端口(:80)：**标识了服务器正在监听的网络端口。对下层使用TCP协议的HTTP来说，默认端口号为80
> - **用户名和密码(name:password@)：**很多服务器要求输入用户名和密码，如FTP服务器： <tt>ftp://name:password@ftp.mi.edu</tt> 。用户名和密码之间用字符 ":" 分隔，用@把用户名和密码与其余部分隔开
> - **(!)路径(/index.html)：**说明了资源位于服务器的什么地方。使用字符 "/" 将HTTP URL的路径组件划分成一些路径段。每个路径段都有自己的参数(param)组件
> - **参数(;type=a)：**为程序提供了访问资源所需的所有附加信息。是URL中的名值对列表，由字符 ";" 将其与URL其余（以及各名值对）分隔开来
> - **查询字符串(?item=123&color=white)：**通过发送查询组件来缩小所请求资源类型范围。由字符 "?" 及紧跟其后的一系列名值对组成，名值对之间用字符 "&" 分隔
> - **片段(#drills)：**用来表示一个资源内部的片段，如：一个带有章节的大型文本文章，利用片段(frag)指向资源中的那些章节 <tt>http://pwnny.cn/original/2016/08/28/Questions.html#httpAbout02</tt>。

> **一个HTTP事务：**由一条（从客户端发往服务器的）请求命令和一个（从服务器发回客户端的）响应结果组成。（*这种通信时通过名为HTTP报文的格式化数据块进行的*）

> **HTTP报文（HTTP message）：**由一行一行的简单字符串组成。都是纯文本，不是二进制代码。由起始行，首部，及可选的主体组成。

> **最基本的网络协议结构：**

![HTTP网络协议栈](http://pwnny.cn/assets/images/webfront/HTTP.PNG)

> HTTP协议位于TCP的上层，使用TCP来传输其报文数据

![HTTTPS网络协议栈](http://pwnny.cn/assets/images/webfront/HTTPS.jpg)

> HTTPS就是在**安全的传输层**上发送的HTTP

> 这是最基本的**浏览器连接处理：**

![基本的浏览器连接处理](http://pwnny.cn/assets/images/webfront/browserConnection.png)

> **基本的步骤**如下：

>
1. 浏览器从URL中解析出服务器的主机名；
2. 浏览器将服务器的主机名转换成服务器的IP地址；
3. 浏览器将端口号（如果有的话）从URL中解析出来；
4. 浏览器建立一条与Web服务器的TCP连接；
5. 浏览器向服务器发送一条HTTP请求报文；
6. 服务器向浏览器回送一条HTTP响应报文；
7. 关闭连接，浏览器显示文档。

---

接下来为较为**详细的步骤**：

- 在浏览器地址栏输入URL
- 浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤
	-  如果资源未缓存，发起新请求
	-  如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
	-  检验新鲜通常有两个HTTP头进行控制 <tt>Expires</tt> 和 <tt>Cache-Control</tt>：
		-  HTTP1.0提供 <tt>Expires</tt>，值为一个(绝对)时间表示缓存新鲜日期
		-  HTTP1.1增加了 <tt>Cache-Control: max-age= </tt>,值为以秒为单位的最大新鲜(相对)时间
- 浏览器**解析URL**获取协议(HTTP/1.1)，主机，端口，path
- 浏览器组装一个HTTP（GET）**请求报文**
-   浏览器获取**主机ip地址**，从下述所列的地方（优先级由上至下依次递减）依次查找，直到获取到ip：
	- 浏览器缓存  
	- 本机缓存
	- hosts文件
	- 路由器缓存
	- ISP DNS缓存
	- DNS递归查询（可能存在负载均衡导致每次IP不一样）
- 打开一个socket与目标IP地址，端口建立**TCP链接**，三次握手如下：
	- 客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口  
	- 服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
	- 客户端发送ACK=Y+1， Seq=Z
- TCP链接建立后发送HTTP请求  
- 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
- 服务器检查HTTP请求头是否包含缓存验证信息如果验证缓存新鲜，返回304 Not Modified等对应状态码
- 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
- 服务器将响应报文通过TCP连接发送回浏览器
- 浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下：
	- 主动方发送Fin=1， Ack=Z， Seq= X报文
	- 被动方发送ACK=X+1， Seq=Z报文
	- 被动方发送Fin=1， ACK=X， Seq=Y报文
	- 主动方发送ACK=Y， Seq=X报文
- 浏览器检查响应状态吗：是否为 信息性状态码1XX，重定向状态码3XX， 客户端错误状态码4XX，服务器错误状态码5XX，这些情况处理与 成功状态码2XX 不同
- 如果资源可缓存，进行缓存 
- 对响应进行解码（例如gzip压缩）
- 根据资源类型决定如何处理（假设资源为HTML文档）
- **解析HTML文档，构建DOM树，下载资源，构造CSSOM树，执行JS脚本**，这些操作没有严格的先后顺序，以下分别解释：
- **构建DOM树：**
	- **Tokenizing**：根据HTML规范将字符流解析为标记
	- **Lexing**：词法分析将标记转换为对象并定义属性和规则
	- **DOM construction**：根据HTML标记关系将对象组成DOM树
- 解析过程中遇到图片、样式表、js文件，**启动下载**
- **构建CSSOM树**： 
	- **Tokenizing**：字符流转换为标记流
	- **Node**：根据标记创建节点
	- **CSSOM**：节点创建CSSOM树
- 根据DOM树和CSSOM树构建**渲染树**:
	- 从DOM树的根节点遍历所有**可见节点**，**不可见节点**包括：1）<tt>script</tt>，<tt>meta</tt> 这样本身不可见的标签。2）被css隐藏的节点，如 <tt>display: none</tt>
	- 对每一个可见节点，找到恰当的CSSOM规则并应用
	- 发布可视节点的内容和计算样式
- **JS解析**如下： 
	- 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时 <tt>document.readystate</tt> 为loading
	- HTML解析器遇到没有**async**和**defer**的script时，将他们添加到文档中，然后执行内部或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用 <tt>document.write()</tt> 把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
	- 当解析器遇到设置了**async**属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用 <tt>document.write()</tt>，它们可以访问自己script和之前的文档元素
	- 当文档完成解析，<tt>document.readState</tt> 变成interactive
	- 所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用 <tt>document.write()</tt>
	- 浏览器在Document对象上触发**DOMContentLoaded**事件
	- 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，<tt>document.readState</tt> 变为**complete**，window触发load事件
- 显示页面（HTML解析过程中会**逐步**显示页面） 

###  <span id="httpAbout03"></span>3、HTTP Request和HTTP Response报文结构是怎样的？###

 **HTTP报文**是在HTTP应用程序之间发送的数据块。这些数据块以一些文本形式的元信息（meta-information）开头。这些信息描述了报文的内容及含义，后面跟着可选的数据部分。（这些报文在客户端、服务器和代理之间流动，并且不论是响应还是请求，报文都向下游流动）由三部分组成：对报文进行描述的**起始行**，包含属性的**首部**块，以及可选的、包含数据的**主体**部分

![HTTP报文](http://pwnny.cn/assets/images/webfront/HTTPMessageETC.JPG)

- 起始行和首部就是由行分隔的ASCII文本
- 每行都以一个由两个字符组成的行终止序列作为结束，其中包括一个回车符（ASCII码13）和一个换行符（ASCII码10）
- 这个行终止序列可以写做CRLF
- 实体的主体或报文的主体（或者就叫主体）是一个可选的数据块。主体中可以包含文本或二进制数据，也可以为空

> 所有的HTTP报文都分成两类：请求报文（request message）和响应报文（response message）

**请求报文**的格式：

    <method> <request-URL> <version>
	<headers>

	<entity-body>

请求报文向服务器请求一个动作

**响应报文**的格式：（<tt>!注意</tt> ，*只有起始行语法有所不同*）

    <version> <status> <reason-phrase>
	<headers>

	<entity-body>   

响应报文将请求的结果返回给客户端

下面是对**各部分的简要描述**：

- **起始行：**
	- **请求行(GET /original/test.html HTTP/1.1)**
		- 说明要做些什么
		- 包含一个**方法**和一个**请求URL**
			- 方法：描述了服务器应该执行的操作
			- 请求URL：描述了要对哪个资源执行这个方法
		- 还包含**HTTP的版本**
			- 用来告知服务器，客户端使用的是哪种HTTP
		- 这些字段都以**空格符**分隔 
	- **响应行(HTTP/1.0 200 OK)**
		- 说明发生了什么
		- 包含了响应报文使用的**HTTP版本、数字状态码、原因短语**
			- 原因短语：描述操作状态的文本形式
		- 这些字段都以**空格符**分隔  
	- **方法（version）**
		- 用来告诉服务器要做什么事
		- 客户端希望服务器对资源执行的动作
		- 如GET、HEAD或POST
		- 方法是一个单独的词
	- **请求URL（request-URL）**
		- 命名了所请求资源
		- 或URL路径组件的完整URL
	- **版本（version）**
		- 说明了应用程序支持的**最高HTTP版本**
		- 目的为使用HTTP的应用程序提供一种线索，以便互相了解对方的能力和报文格式 
		- 报文所使用的HTTP版本，格式是： 
		- `HTTP/<major>.<minor>`
		- 其中**主要版本号**（major）和 **次要版本号**（minor）都是【整数】
		- 在比较HTTP版本时，每个数字都得**单独比较**。如：HTTP/2.22就比HTTP/2.3版本高，因为22比3大
	- **状态码（status-code）**
		- 用来告诉客户端发生了什么事
		- 这三位数描述了请求过程中所发生的情况
		- 每个状态码的**第一位数字**都用于描述状态码的一般类别（"成功"，"出错"等）
	- **原因短语（reason-phrase）**
		- 数字状态码的可读版本，包含行终止序列之前的所有文本
		- 原因短语和状态码是成对出现的
		- 原因短语只对人类有意义：尽管响应行 <tt>HTTP/1.1 200 NOT OK</tt> 和 <tt>HTTP/1.1 200 OK</tt> 中原因短语含义不同，但都被当作成功指示处理
- **首部（headers）**
	- 表示首部列表的结束和实体主体部分的开始	 
	- 本质是一些 **名/值对** 的列表
	- 可以有零个或多个首部
	- 每个首部都包含：一个**名字**，后面跟着一个**冒号**，然后是一个**可选的空格**，接着是一个**值**，最后是一个**CRLF**来结束
	- 将长的首部行分为多行可以提高可读性，多出来的每行前面至少要有一个空格或制表符（Tab）
	- 首部分类：
		- 通用首部：可以出现在请求或响应报文中
		- 请求首部：提供更多有关请求的信息
		- 响应首部：提供更多有关响应的信息
		- 实体首部：描述主体的长度和内容，或者资源自身
		- 扩展首部：规范中没有定义的新首部
- **实体的主体部分（entity-body）**
	- 包含一个由任意数据组成的数据块
	- 并不是所有的报文都包含实体的主题部分，有时，报文只是以一个CRLF结束 

下面是一个假想的请求和响应报文：

![HTTP报文](http://pwnny.cn/assets/images/webfront/HTTPMessage.PNG)  

###  <span id="httpAbout04"></span>4、HTTP 状态码及其含义###

    这个问题中所用到的图片都是webp格式的，所以请使用chrome浏览器来查看吧

> **状态码**是用来告诉客户端发生了什么事情
 
> 位于响应的起始行中

> 在每条响应报文的起始行中返回。返回一个数字状态和一个可读的状态。数字码便于程序进行差错处理，原因短语便于人们理解

**200~299：**表示成功

**300~399：**表示资源已经被移走了

**400~499：**表示客户端的请求出错了

**500~599：**表示服务器出错了

![状态码分类](http://pwnny.cn/assets/images/webfront/HTTPStatusCode.webp)  

- **100~199** 信息性状态码
- ![状态码1xx](http://pwnny.cn/assets/images/webfront/StatusCode1xx.webp)  
- **200~299** 成功状态码
-  ![状态码2xx](http://pwnny.cn/assets/images/webfront/StatusCode2xx.webp)
-  **300~399** 重定向状态码
-   ![状态码3xx](http://pwnny.cn/assets/images/webfront/StatusCode3xx01.webp)  
-   ![状态码3xx](http://pwnny.cn/assets/images/webfront/StatusCode3xx02.webp)  
-   302、303、307的区别
	-   当 **HTTP/1.0** 客户端发起一个 **POST** 请求，并在响应中收到 **302** 重定向状态码时，它会接收Location首部的重定向URL，并向那个URL发起一个 **GET** 请求（而不是像原始请求中那样发起POST请求）
	-   **HTTP1.1** 规范使用 **303** 状态码来实现同样的行为（服务器发送303状态码来重定向客户端的POST请求，在它后面跟上一个GET请求）
	-   对于 **HTTP/1.1** 客户端，用 **307** 状态码取代 **302** 状态码来进行临时重定向。这样服务器就可以将302状态码保留起来，为HTTP/1.0客户端使用了
- **400~499** 客户端错误状态码
- ![状态码4xx](http://pwnny.cn/assets/images/webfront/StatusCode4xx01.webp)
- ![状态码4xx](http://pwnny.cn/assets/images/webfront/StatusCode4xx02.webp)    
- **500~599** 服务器错误状态码
- - ![状态码5xx](http://pwnny.cn/assets/images/webfront/StatusCode5xx01.webp)
- ![状态码5xx](http://pwnny.cn/assets/images/webfront/StatusCode5xx02.webp)    

##  <span id="CSSAbout"></span>> CSS常见问题 ##

### <span id="CSSAbout01"></span>1、CSS中类选择器和ID选择器的区别？ ###

### <span id="CSSAbout02"></span>2、CSS选择器有哪些？ ###

#### 一、属性选择器 ####

**1、类型选择器(element selector)**

> 兼容性**IE6+**

- 与一个元素名匹配。CSS1称之为元素选择器
- 在XML中，什么都可以作为选择器（因为XML允许创建新的标记语言，这可能只是一个元素名而已）
- 在HTML中，选择器通常是某个HTML元素（如p、h3、a，甚至是html本身：html {color: black;}）
- 模式：element1
- 示例：
	- `body {background: #FFF}`
	
	- `p {font-size: 1em;}`

**2、通配选择器(universal selector)**

> 兼容性**IE6+**

- 与所有元素名匹配，不参与计算优先级
- 模式：*
- 示例：
	- `* {color: red;}`
	
	- `div * p {color: blue;}`

**3、类选择器(class selector)**

> 兼容性**IE6+**

- 与有某个或某些特定类值得元素匹配，类值名必须紧跟在点号后面
- 多个类值可以用空格“串”在一起，顺序不限：
	- **多类选择器：**
	- **兼容性：IE7+**
	- 用于选择同时包含这些类名的元素（类名顺序不限）
	- 如果一个多类选择器包含类名列表（类名以空格分隔）中所没有的一个类名，匹配就会失败
	- **在IE7之前的版本： <tt>p.warning</tt> 可以正常工作，但 <tt>p.waring.help</tt> 会匹配class属性中包含help的所有p元素，因为help在选择器最后出现，不论其是否出现warning。同理 <tt>p.help.warning</tt> 只会匹配含warning的p**
- 如果点号前面没有元素名，这个选择器将与所有包含该类值的元素匹配
- 模式：element1.classname  element1.classname1.classname2
- 示例：
	- `p.urgent {color: red;}`
	
	- `.example {background: olive;}`

**4、ID选择器(ID selector)**

> 兼容性**IE6+**

- 与有某个或某些特定ID值得元素匹配。ID值必须紧跟在#号后面，多个ID值不能“串”在一起
- 如果#号前面没有元素名，这个选择器将与所有包含该ID值的元素匹配
- 一个元素只能命名一个id名，但在不同的文档中可以使用相同的文档名
- 模式：element1#idname
- 示例：
	- `h1#page-title {font-size: 250%;}`
	
	- `#example {background: lime;}`

**5、简单属性选择器(simple attribute selector)**

> 兼容性**IE7+**

- 与有某个属性（不论属性值是什么）的元素匹配。可以将多个属性选择器链接在一起选择具有多个属性的元素
- element1[attr]
- 示例：
	- `img[alt] {border: 1px double gray;}`
	
	- `a[href][title] {font-weight: bold;}`

**6、具体属性值选择器(specific attribute value selector)**

> 兼容性**IE7+**

- 与有特定属性值的元素匹配。可以把多个属性-值选择器链接在一起来选择一个文档
- 要求必须与属性值完全匹配。不同于类选择器，这个规则要求属性值的顺序和空格都要相同，即完全匹配
- ID选择器与指定id属性的属性选择器不是一回事（h1#page-title和h1[id="page-title"]的优先级不同）
- 模式：element1[attr="value"]
- 示例：
	- `a[rel="home"] {font-weight: bold;}`
	
	- `p[class="urgent warning"] {font-weight: bold}`

**7、部分属性值选择器(part of attribute value selector)**

> 兼容性**IE7+**

- 根据属性值中出现的一个用空格分隔的词来匹配元素。它能用于任何属性，而不只是class
- 这个选择器构造等价于类选择器。因此  <tt>p.warning</tt> 和 <tt>p[class~="warning"]</tt> 是等价的
- 模式：element1[attr~="value"]
- 示例：
	- `a[rel~="friend"] {text-transform: uppercase;}`
	
	- `p[class~="warning"] {background: yellow;}`

**8、开始子串属性值选择器**

> 兼容性**IE7+**

- 根据属性值最开始的**子串**选择元素，注意不是一个词，是一部分子串，长度随意（一个字母也可以）
- 模式：element1[attr^="substring"]
- 示例：
	- `a[href^="/blog"] {text-transform: uppercase;}`

	- `p[class^="test-"] {background: yellow;}`

**9、结束子串属性值选择器**

> 兼容性**IE7+**

- 根据属性值最后面的**子串**选择元素
- 模式：element1[attr$="substring"]
- 示例：
	- `a[href$=".pdf"] {font-style: italic;}`

**10、任意子串属性值选择器**

> 兼容性**IE7+**

- 根据属性值中任意位置上的**子串**选择元素
- 模式：element1[attr*="substring"]
- 示例：
	- `a[href*="pwnny.com"] {font-weight: bold;}`
	
	- `div[class*="port"] {border: 1px solid red;}`

**11、特定属性选择器**

> 兼容性**IE7+**

- 根据指定属性名(属性值是 <tt>value</tt> 或 <tt>value-</tt>)选择元素，一般用于匹配语言值
- 模式：<span>element[attr|="value"]</span>
- 示例：
	- `html[lang|="en"] {color: gray;}`
	
	- `img[src|="figure"] {border: 1px solid gray;}`

**12、后代选择器(descendant selector)**

> 兼容性**IE6+**

> <tt>body</tt> 元素是浏览器默认显示的所有元素的祖先。 <tt>html</tt> 元素则是整个文档的祖先

- 根据元素的状态（即作为另一个元素的**后代**）来选择该元素。也称为包含选择器或上下文选择器（contextual selector）
- 规则左边的选择器一端包括两个或多个用空格分隔的选择器，选择器之间的空格是一种 *结合符*（combinator）
- 必须从右向左解释该选择器。可以 多个选择器链接在一起(后代选择器对css会大大降低css的性能，不是很推荐使用)
- 两个元素之间的层次间隔可以是无限的
- 模式：element1 element2
- 示例：
	- `body h1 {font-size: 200%}`
	
	- `table tr td div ul li {color: purple}`

**13、子选择器**

> 兼容性**IE7+**

- 根据元素的状态（即作为另一个元素的**子元素**）来选择该元素。限制为只匹配树中直接相连的元素
- 子结合符两边可以有空白符，这是可选的。（<tt>h1 > strong</tt> 和 <tt>h1>strong</tt> 和 <tt>h1> strong</tt> 都是一样的）
- 模式：element1 > element2
- 示例：
	- `div > p {color: cyan;}`
	
	- `ul > li {font-weight: bold;}`

**14、相邻兄弟选择器(adjacentsibling combinator selector)**

> 兼容性**IE7+**

- 选择 **紧接** 在另一个元素后的并且二者有**相同父元素**的 **仅一个** 元素
- 与子结合符一样，相邻兄弟结合符旁边可以有空白，可选
- 用一个结合符只能选择两个相邻兄弟中的第二个元素
- 选择器中的两个元素必须按“源顺序”出现（如：<tt>div</tt> 下只有两个子元素，<tt>ol</tt> 和 <tt>ul</tt> ，并且 <tt>ol</tt> 在前，那么只能使用 <tt>ol + ul</tt> 选择 <tt>ul</tt>，不能用<tt>ul +ol</tt> 选择ol）
- 两个元素之间的文本内容不会影响相邻兄弟结合符起作用，文本会被忽略。只考虑文档树中的元素及其位置
- 模式：element1 + element2
- 示例：
	- `table + p {margin-top: 2.5rem;}`
	
	- `h1 + * {margin-top: 0;}`

**15、通用兄弟选择器**

> 兼容性**IE7+**

- 与相邻兄弟选择器类似，只有一处区别：选择某元素后面的 **所有** 兄弟元素（相邻兄弟选择器是选择仅一个）
- 模式：element1 ~ element2
- 示例：
	- `.active ~ li {background: green; color: yellow;}`
	- `table ~ p {margin-top:2.5rem;}`

#### 二、伪类选择器 ####

**静态伪类：**

> 在HTML和XHTML1.0及1.1中，**超链接**--是有href属性的所有a元素

> 在XML中，**超链接**--可以是任何元素，只要它作为另一个资源的链接

| 伪类名 | 描述 |
|:-----|----|
|:link |指示作为超链接（即有一个 **href** 属性）并指向一个**未访问**地址的所有锚| 
|:visited | 指示作为**已访问**地址超链接的所有锚 | 

> 第一个伪类很有用，它可以避免一些非链接的页面内目标锚（a中有 <tt>name</tt> 属性没有 <tt>href</tt> 属性）应用和含有href属性的常规链接锚一样的样式

> 他们是**静态**的 ----- 第一次显示之后，一般不会再改变文档的样式

**1、:link**

> 兼容性**IE4+**

- 用于URI**尚未访问过**的链接（URI尚未出现在用户代理的历史中），与 <tt>:visited</tt> 状态是互斥的
- 类型：伪类
- 应用于：指向另外的尚未访问过的资源的**链接**
- 示例：
	- `a:link {color: blue;}`
	
	- `*:link {text-decoration: underline;}`

**2、:visited**

> 兼容性**IE4+**

- 用于URI**已访问过**的链接（URI已经出现在用户代理的历史中） ，与 <tt>:link</tt> 状态是互斥的
- 类型： 伪类
- 应用于：指向另外的已访问资源的**链接**
- 示例：
	- `a:visited {color: purple;}`
	
	- `*:visited {color: gray;}` 	 

**3、:first-child**

> 兼容性**IE7+**

- 用于匹配某元素是另一个元素的第一个子元素
- <tt>**常见错误！**</tt> 认为 <tt>p:first-child</tt> 之类的选择器会选择p元素的第一个子元素。**实际上**这会选择作为另外某个元素第一个子元素的 **所有** p标签！（如果要选择段落的第一个子元素，应该写做 <tt>p > *:first-child</tt>）
- **伪类的实质**：把某种幻想类关联到与伪类相关的元素
- 类型：伪类
- 应用于：作为另一个元素第一个子元素的所有元素
- 示例：
	- `body *:first-child {font-weight: bold;}`
	
	- `p:first-child {font-size: 125%;}`

**:last-child**是选择元素的最后一个子元素

**5、:nth-child**

> 兼容性**IE9+**

- 用于选择某个元素的一个或多个特定的子元素
- <tt>:nth-child()</tt> 可以定义其他的值（值可以是整数，也可以是表达式）
- 有以下几种方式（length为整数）：
	- `:nth-child(length);`
	- 参数是具体数字，不能为负

	- `:nth-child(n); `   
	- n是一个简单的表达式
	- n从0开始计算，什么时候结束未知
	- 如果直接用n就会选中所有子元素（用2n选择所有偶数，2n-1选择所有奇数，，）
	- css计算方式：
		- n=0-->  没有选中元素
		- n=1-->  选择第一个元素
		- n=2-->  选择第二个元素
		- ...类推直至选中所有元素
	- 这里的 **n** 只能是 **n** 用其他字幕替代无效

	- `:nth-child(n*length);`
	- n的倍数选择，n从0开始计算
	- 如：2n选择所有偶数

	- `:nth-child(n+length);`
	- 选择大于length后面的元素
	- 如：n+5从第五个元素开始往后选择（5、6、7、8...）

	- `:nth-child(-n+length);`
	- 选择小于length前面的元素
	- 如：-n+5从第五个元素往前选择（5、4、3、2、1）

	- `:nth-child(n*length+1);`
	- 表示隔几选一
	- 如：4n+1实现隔三选一	

- 类型：伪类
- 应用于：根据表达式或值不同分别应用不同的元素
- 示例：
	- `li:nth-child(2n+1) {background: lime;}`

**6、:nth-last-child**

> 兼容性**IE9+**


**4、:lang**

> 兼容性**IE7+**

- 根据元素的语言编码匹配元素。从对应模式来说 <tt>:lang()</tt> 伪类就像是 <tt>|=</tt> 属性选择器
- 伪类选择器和属性选择器之间的主要**区别**在于语言信息可以从很多来源得到，而且其中一些可能在元素之外
- 这种语言信息必须包含在文档中，或者与文档关联，不能从CSS指定

> 在HTML中，语言由 lang 属性和 META 元素的组合来确定，还可能包括协议提供的信息，如HTTP首部。XML 使用一个 xml:lang 属性，另外可能还有其他文档语言特定的方法来确定语言

- 伪类比属性选择器稍微健壮一些，在需要语言特定的样式时，大多数情况下伪类都是更好的选择
- 类型：伪类
- 应用于：有相关语言编码信息的元素
- 示例：
	- `html:lang(en) {background: silver;}`
	
	- `*:lang(fr) {quotes: '?' ' ?;}`
 
**动态伪类**

| 伪类名 | 描述 |
|:-----|----|
|:focus | 指示当前拥有输入焦点的元素，也就是说，可以接受键盘输入或者能以某种方式激活的元素 | 
|:hover | 指示鼠标指针停留在哪个元素上，例如，鼠标指针可能停留在一个超链接上，:hover就会指示这个超链接 | 
|:active | 指示被用户输入激活的元素，例如，鼠标指针停留在一个超链接上时，如果用户点击鼠标，就会激活这个超链接，:active将只是这个超链接 |

> <tt>**注意！**</tt> 伪类的 **顺序** 很重要，建议为：**link-visited-focus-hover-active**

> <tt>**注意！**</tt> 动态伪类可以应用到**任何元素**

> <tt>**注意！**</tt> 
>  **IE6之前** 只允许动态伪类选择 **超链接**，  **IE7**支持对所有元素应用 **:hover**，但不支持对表单元素应用 **:focus**样式

**5、:focus**

> 兼容性**IE8+**

- 应用于有焦点的元素，例如输入框、超链接
- 类型：伪类
- 应用于：有焦点的元素
- 示例：
	- `a:focus {outline: 1px dotted red;}`
	
	- `input:focus {background: yellow;}`

**6、:hover**

> 兼容性a标签**IE4+**，所有元素**IE7+**

- 应用于处于“悬停状态”的元素。**悬停**定义为：用户指示了一个元素但没有将其激活
- 类型：伪类
- 应用于：处于悬停状态的元素
- 示例：
	- `a[href]:hover {text-decoration: underline;}`
	
	- `p:hover {background: yellow;}`

**7、:active**

> 兼容性**IE4+**

- 用于处于激活状态的元素，例如点击一个超链接：在鼠标按钮按下期间，这个链接是激活的
- 类型：伪类
- 应用于：被激活的元素
- 示例：
	- `a:active {color:red;}`

	- `*:active {background: blue;}`

**8、:enabled、:disabled、:checked**

> 兼容性**IE9+**

- 这三个属于**UI元素状态**伪类
- 主要针对HTML中的Form元素操作
- 最常见`type="text"`有enable和disabled两种 状态，前者为可写状态后者为不可写状态
- 类型：伪类
- 应用于：HTML表单元素
- 示例：
	- `input[type="text"]:disabled {border:1px solid #999;background-color: #fefefe;}`

#### 三、伪元素选择器（pseudo-elements-selector） ####

> 伪元素能够在文档中插入假想的元素，从而得到某种效果。这是由用户代理自己动态构成的

> 所有伪元素都必须放在出现该伪元素的选择器的最后面（<tt>p:first-line em</tt> 就是不合法的，因为伪元素在选择器主体（主体在这里是em）前面出现）

**1、:first-letter**

> 兼容性**5.5+**

- 用于指定一个 **块级元素** 第一个 **字母** 的样式。所有前导标点符号应当与第一个字母一同应用样式
- 某些语言有一些要处理为单个字符的字母组合，如果是这样，用户代理可能会把首字母样式同时应用到这个字母组合
- 类型：伪类
- 生成：包含元素首字母的一个伪元素
- 示例：
	- `h1:first-letter {font-size: 166%;}`
	- `a:first-letter {text-decoration: underline;}`

**2、:first-line**

> 兼容性**5.5+**

- 用于设置元素中**第一行**文本的样式，而不论该行出现多少单词
- 类型：伪元素
- 生成：包含元素第一行格式化文本的伪元素
- 示例：
	- `p.lead:first-line {font-weight: bold;}`

**:first-letter和:first-line的限制**

**CSS2中：** <tt>:first-letter</tt> 和 <tt>：first-line</tt> 只能应用于 标记 或 段落 之类的**块级元素**，不能应用于超链接等的行内元素

**CSS2.1中：** <tt>:first-letter</tt> 能应用到所有元素

> 伪元素所允许的属性

|:first-letter|:first-line|
|:-----------|:---------|
|所有font属性|所有font属性|
|color|color|
|所有background属性|所有background属性|
|所有margin属性|word-spacing|
|所有padding属性|letter-spacing|
|所有border属性|text-decoration|
|text-decoration|vertical-align|
|vertical-align（如果float设置为none）|text-transform|
|text-transform|line-height|
|line-height|clear（仅适用于CSS2; CSS2.1已去除）|
|float|text-shadow（仅适用于CSS2）|
|letter-spacing（CSS2.1新增）||
|word-spacing（CSS2.1新增）||
|clear（仅适用于CSS2; CSS2.1已去除）||
|text-shadow（仅适用于CSS2）||

**3、:after**

> 兼容性**IE9+**，对于IE8及更早版本必须加 **<!DOCTYPE>**

- 在元素内容的**最后**插入生成内容。这个伪元素默认是 **行内元素**，可以使用display改变
- 类型：伪元素
- 生成：一个伪元素，其中包含放在元素内容之后的生成内容
- 示例：
	- `a.external:afeter {content: "" url(/icons/globe.gif);}`
	- `p:after {content: "|";}`

**4、:before**

> 兼容性**IE9+**，对于IE8及更早版本必须加 **<!DOCTYPE>**

- 在元素内容的**最前面**插入生成内容。这个伪元素默认是 **行内元素**，可以使用display改变
- 类型：伪元素
- 生成：一个伪元素，其中包含放在元素内容之后的生成内容
- 示例：
	- `a[href]:before {content: "[link]";}`
	- `p:before {content: attr(class);}`

**:after和:before中的content：**

- 根据content属性把生成内容放在一个元素内容的前面或后面
- 若content中未包含空格，则生成内容和元素之间没有空格
- 在CSS2.1中，除了列表标志，无法把生成内容放在元素框之外
- CSS2和CSS2.1明确地禁止浮动或定位 <tt>:before</tt> 和 <tt>:after</tt> 内容，还禁止使用列表样式属性以及表属性
	- 若 <tt>:before</tt> 或 <tt>:after</tt> 选择器的主体是**块级元素**，则 <tt>display</tt> 属性只接受值 <tt>none、inline、block和marker。</tt>其他值都处理为**block**
	- 若 <tt>:before</tt> 或 <tt>:after</tt> 选择器的主体是**行内元素**，则 <tt>display</tt> 属性只接受值 <tt>none和inline</tt>。其他值都处理为**inline**
- 生成内容由与之关联的元素继承值（这种继承值是适用于可继承的值） 

----------

> **content**

**值：**`normal | [<string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote  ]+ | inherit`

**初始值：**normal

**应用于：**<tt>:before</tt> 和 <tt>:after</tt>

**继承性：** 无

**计算值：**对于<uri>值，为绝对URI；对于属性引用，则为结果串；否则，根据指定确定

**插入串值：**

    {content: "somestring";}

- 串值会原样显示，即使其中包含某种标记也不例外（如：`h2:before {content: "<>&para;</em>"; color:gray;}`）
- 如果需要**生成内容中**有一个换行（回车），不能直接使用 <tt><br></tt> ，而要使用串 <tt>\A</tt> ，这是CSS表示换行的方法（由Unicode换行符得来，其十六制位置是A）
- 如果是在书写content中一个很长的串值时需要换行，则要用 \ 对换行符转义。还可以使用转义来指示十六进制Unicode值，如 \00AB

**插入URI值：**

    {content: url();}

-  利用URI值，只需要指向一个外部资源（一个图像、视频、声音剪辑或用户代理支持的其他任何资源）。如果用户代理不支持所指定的资源，就要求用户代理**完全忽略**这个资源，不插入任何内容

**插入属性值：**

    {content: attr();}

- 所有属性值都可以作为生成内容插入：alt文本、class或id值，以及任何属性
- 可以利用复杂的规则显示更多属性
	- `body:before {content: "Text: "attr(text) "| Link: " attr(alink) " | visited: " attr(vlink) " | Active: " attr(alink); display: block; padding: 0.33em; border: 1px solid black; text-align: center;}`
- 如果一个属性不存在，会在响应位置插入一个**空串** 
- CSS2.X定义属性引用的返回值是**未解析**的串，因此，如果一个属性的值包含标记或字符实体，会原样显示

### <span id="CSSAbout03"></span>3、PNG,GIF,JPEG的区别及如何选？ ###

----------

> **图形：**通常由连续的线条或其他尖锐的颜色过渡组成，颜色数量相对较少（网站的Logo、草图、图表、大部分动画和图标都属于图形）

> **照片：**通常拥有百万数量级的颜色，并且包含平滑的颜色过渡和渐变

> **像素：**是图像中最小的信息单元

> **RGB：**采用包含红（R）、绿（G）、蓝（B）的数量多少的方式来描述一个像素
> 
- R、G和B被称为**成分**（又称为通道）
- 每种成分强度值范围在0~255之间
- 经常在HTML和CSS中使用的是**十六位进制**的成分值，范围从00~FF
	- 红：rgb(255,0,0)或#FF0000
	- 蓝：rgb(0,0,255)或#0000FF
	- 灰色阴影可能有着三个相同的成分值：rgb(238,238,238)或#EEEEEE

> **真彩色图像：**使用RGB颜色模型可以展现多于1600万种颜色（256*256*256（或者2^24））可以得到16777216种组合，可以支持这么多颜色的图像格式叫做真彩色图像格式（比如JPEG和真彩色类型的JPEG）

> **调色板：**为了在存储图像时节省空间，可以将图像中各种不同的颜色提取出来建立一个表，这个表通常叫做调色板（也可以称为索引）
> 
-  有了这个颜色表，就可以通过将调色板中的条目和每个像素重新匹配，达到重新绘制整个图像的目的
-  调色板可以包含任意RGB颜色值，经常使用的调色板图像格式--GIF和PNG8--会限制调色板中最多只能包含256种颜色（不是从256中已经定义好的颜色中选择而是从1600+万的颜色选择你需要的值，但单个图像最多只能包含256种颜色）

> **透明（RGBA）：**在RGB基础上做了扩展，额外的成分A代表alpha透明，值的范围从0~255（通常会将透明定义为从0%~100%的百分比，或者从0~127的值）

> **alpha通道：**描述了透过图像像素可以看到下面内容的程度

> **隔行扫描：**可以让用户在完整下载图像之前，看到图像的一个粗略版本（普通图像是逐行显示，从上到下每次显示一行，缓慢地向下递进）

**GIF** 通常用来显示动画

**JPEG** 更适合显示照片

**PNG** 两者都适合

**调色板PNG**(palette PNG)即 **PNG8** 显示图形比GIF会更好一些

**> GIF（Graphics Interchange Format）**图形交换格式，是一种调色板图像格式

- **透明** 允许一个二进制（是/否）类型的透明度。每个像素要么是完全透明的（不包含颜色），要么是完全不透明的（包含一个单色）。不支持alpha（可变的）透明
- **动画** 支持动画。包含动画的图像由若干帧组成
- **无损** 做修改保存关闭后不会损失任何质量
- **逐行扫描** 生成文件时使用（LZW）压缩算法减小文件大小。会从上到下一行一行地对像素进行扫描，当图像在水平方向有很多重复颜色时，压缩效果最好
- **隔行扫描** 支持可选的隔行扫描

**> JPEG（Joint Photographic Experts Group）**联合图像专家小组，是照片存储的实际标准，能在高压缩文件中存储高分辨率的图像

- **有损** 用户可以设置自定义质量级别，从0~100，就算设置为100，也同样会有一定程度的质量损耗
	- 对图像进行多项编辑操作时，最好使用无损的图像格式保存中间结果，然后在完成所有修改后另存为JPEG格式，否则每次保存都会损耗一些质量
	- 少数无损操作：
		- 旋转（只在90度、180度、270的情况下）
		- 裁剪
		- 翻转（水平或垂直）
		- 从标准模式切换到渐进模式
		- 编辑图像的元数据
- **透明和动画** 不支持透明或动画
- **隔行扫描** 除了默认的标准JPEG（Baseline JPEG），还有一种渐进JPEG（Progressive JPEG），支持隔行扫描（IE不会逐步渲染渐进JPEG，而是在图像完全下载时立即全部显示）

**> PNG（Portable Network Graphics）**便捷式网络图片。有调色板PNG（代替GIF）和真彩色PNG（代替JPEG）

1.  **PNG8** 调色板PNG
2.  **PNG24** 真彩色PNG，不包括alpha通道
3.  **PNG32** 真彩色PNG，包括alpha通道 
4.  包含alpha通道或不包含alpha通道的灰度PNG

- **透明** 支持完全的alpha透明
- **动画** 没有解决跨浏览器兼容
- **无损** 多次编辑不会降低其质量，适合作为JPEG修改过程的中间产物
- **逐行扫描** 对水平方向有重复颜色的图像压缩比更高
- **隔行扫描** 比GIF更好的算法，支持隔行扫描的文件大小会更大一些

> 和**GIF**比较：不支持动画以外，支持GIF所有功能。还支持alpha透明，并且压缩比更高，文件大小更小。应尽可能用PNG8代替GIF（例外是：颜色书很少的小图像，GIF压缩率更高，但此时应该把小图像放在CSS Sprite中，因为HTTP开销已经大大超过节省的那点带宽）

> 和**JPEG**比较：图像颜色超过256种时，需要使用真彩色图像格式--真彩色PNG或JPEG。JPEG压缩比更高，且是照片存储的实际标准。由于JPEG是有损的，且清晰的颜色过渡周围会有大色块，以下情况更适合PNG：
> 
- 当图像的颜色略超过256中时，可以在不损耗任何**可见**质量的前提下，将图像转换为PNG8格式
- 当“大色块”不可接受时，如包含很多颜色的图像或软件菜单的截图，这时使用PNG最好

> 在IE6中：
> 
- 所有在**调色板PNG**中的半透明像素都会在IE6下显示为完整的透明
	- PNG8可以在所有现代浏览器中实现“渐进增强”半透明图像效果，在IE6中降级为和GIF类似透明度的图像
- **真彩色PNG**中的alpha透明像素，会显示为有背景色（通常是灰色）

### <span id="CSSAbout04"></span>4、CSS Hack原理及常用Hack ###

|标记|IE6|IE7|IE8|FF|Opera|Safari|
|-----|-----|-----|-----|-----|-----|-----|
|[+或>或<]|√|√|X|X|X|X|
|_或*|√|X|X|X|X|X|
|\9|√|√|√|X|X|X|
|\0|X|X|√|X|√|X|
|@media screen and(-webkit-min-device-pixel-ratio:0){.bb {}}|X|X|X|X|X|√|
|.bb ,x:-moz-any-link, x:default|X|√|X|√(ff3.5及以下)|X|X|
|@-moz-document url-prefix(){.bb {}}|X|X|X|√|X|X|
|@media all and (min-width: 0px){.bb {}}|X|X|X|√|√|√|
|*+html.bb{}|X|√|X|X|X|X|
|浏览器内核|Trident|Trident|Trident|Gecko|Presto|WebKit|

> **!important**不是hack手段

**> 使用条件表达式过滤IE**

> **条件注释**是一个特定的只能被IE所识别的HTML注释格式，所有的非IE浏览器都会直接忽略他们

- **1、提供IE独有的样式表**
	- 通过在条件注释中防止一个link标签或者@import指示符来引入一个IE独有的样式表，从而适配所有版本的IE

    `<!--[if IE]>`

    `<link rel="stylesheet" href="ie_all.css" type="text/css">`

    `<![endif]-->`
	
	- 适配特定版本的IE，**lte** 代表“小于或等于”，**lt** 代表“小于”，**gte** 代表“大于或等于”，**gt** 代表“大于” 

    `<!--[if lte IE 8]>`

    `<link rel="stylesheet" href="ie_lte8.css" type="text/css">`

    `<![endif]-->`

	- 使用多行条件注释为每一个IE版本提供一个特定的样式表

    `<!--[if IE 6]>`

    `<link rel="stylesheet" href="ie_6.css" type="text/css">`

    `<![endif]-->`

    `<!--[if IE 7]>`

    `<link rel="stylesheet" href="ie_7.css" type="text/css">`

    `<![endif]-->`

    `<!--[if IE 8]>`

    `<link rel="stylesheet" href="ie_8.css" type="text/css">`

    `<![endif]-->`

	- 条件注释的缺点
		- 额外的HTTP请求
		- 对单一对象的规则定义将会分散在多个位置，难以维护
		- 阻塞资源文件在IE8下的并行下载：使用条件注释将会导致IE8阻塞其他资源文件的下载，直到主样式表下载完成。这是IE8与生俱来的。**唯一解决办法：**在主样式表前面增加一个空的条件注释，或者在html标签下使用条件注释而不是到处使用 

**2、对IE不可见**

条件注释也可以用来使内容对IE不可见，这被称为**downlevel-revealed**条件注释

    <!--[if !IE]>-->
    <link rel="stylesheet" href="not_ie.css" type="text/css">
    <!--<![endif]-->

或者针对特定IE版本

    <!--[if !IE 6]>-->
    <link rel="stylesheet" href="not_ie6.css" type="text/css">
    <!--<![endif]-->

    `<!--[if gte IE 6]><!-->`
    `<link rel="stylesheet" type="text/css" href="/css/modern.css" />`
    `<!--<![endif]-->`

**3、在html标签上添加IE版本类**

用来为html标签添加一些类来指明当前具体是哪一个IE版本的浏览器，然后就可以在主样式表中为每个类添加特定的属性

    <!--[if lt IE 7]><html class="ie6" lang="en"><![endif]-->
    <!--[if IE 7]><html class="ie7" lang="en"><![endif]-->
    <!--[if IE 8]><html class="ie8" lang="en"><![endif]-->
    <!--[if IE 9]><html class="ie9" lang="en"><![endif]-->
    <!--[if gt IE 9]><html lang="en"><![endif]-->
    <!--[if !IE]>--><html lang="en"><!--<![endif]-->

> 为何是html标签
> 
- 可以添加到body或某个div上，只要这个div能包裹其他所有元素的标签就可以。但会阻碍IE8下的样式表并行下载
- 但html不会阻塞IE8下面的样式表的并行下载
- 在HTML4和XHTML1中，类是不能被添加到html标签上的，但在html5下可以这样

每个浏览器只会使用符合的那一条注释，忽略其余版本

示例：

    div {min-height: 100px;}
    .ie6 div {height: 100px;}

**> IE特有的layout布局**

IE显示引擎利用布局减少它的处理开销（理想情况：所有元素都控制自己的尺寸和定位，IE只将布局应用于实际需要它的那些元素以减小性能开销）

在IE中，那些**拥有布局**的元素负责本身及其子元素的尺寸设置和定位

如果一个元素**没有拥有布局**，那么它的尺寸和位置由最近的拥有布局的祖先元素控制

默认情况下**拥有布局**的元素：

- body
- html（标准模式中）
- table
- tr、td
- img
- hr
- input、select、textarea、button
- iframe、embed、object、applet
- marque

设置一下CSS属性使元素拥有布局：

- float：left或right
- display：inline-block
- width：任何值
- height：任何值
- zoom：任何值（Microsoft属性--不能通过检验）
- writing-mode：tb-rl（Microsoft属性--不能通过检验）

IE中以下属性也是布局触发器

- overflow：hidden、scroll或auto
- min-width：任何值
- max-width：除none之外的任何值

**> 常见bug及修复**

**1、双外边距浮动bug**

- 应用：IE6及以下

- 解释：使任何浮动元素的外边距加倍

- 解决办法：
	- 设置display：inline；（因为元素是浮动的，设置此属性值不会影响显示方式）

**2、3像素文本便宜bug**

- 应用：IE5、6

- 解释：当文本与一个浮动元素相邻时，假设元素向左浮动，且不希望文本围绕浮动元素，那么可以设置文本的margin-left等于元素的宽度。但此时，文本和浮动元素之间就会多出3像素的间隙

- 解决办法：
	- 首先给文本设置任意高度，这回迫使文本元素拥有布局，这可以在表面上消除文本偏移（IE6及更低版本将height座位min-height对待，所以设置一个小高度不影响这些元素的实际尺寸。但会影响其他浏览器，所以要对处IE6及以下版本外的所有浏览器隐藏这个规则。最好把这些条件注释转移到单独的CSS文件中）`p {height: 1%;}`
	- 因为拥有布局的元素会被限制为矩形，并且在浮动元素的旁边而不是下面，添加等于浮动元素宽度的像素实际会在浮动元素和段落之间产生这么多像素的间隙。为了避免间隙，需要将外边距重新设置为零 `p {height: 1%;margin-left: 0;}`
	- 此时文本偏移被修复，但浮动元素上会出现3像素间隙，修复这个间隙可以在浮动元素上设置一个负的3像素右外边距  `p {height: 1%;margin-left: 0;}  .myFloat {margin-right: -3px;}`
	- 如果浮动元素是除了图像之外的任何其他元素，那么以上步骤就已经修复完成了
	- 如果浮动元素是图像：IE5.X在图像的左右都添加3像素的间隙，IE6不改变图像的外边距。因此支持IE5.X：`p {height: 1%;margin-left: 0;}  .myFloat {margin-right: 0 -3px;}`，IE6：`p {height: 1%;margin-left: 0;}  .myFloat {margin: 0;}`

**3、IE6的重复字符bug**

- 应用：IE6

- 解释：一系列浮动元素的最后一个元素中的最后几个字符会在浮动元素下面重复出现（当在一系列浮动元素的第一个和最后一个元素之间有多个注释时，前两个注释没有影响，但是后续的每个注释会导致两个字符重复出现，所以，3个注释会导致两个重复字符，4个注释会导致4个重复字符，5个注释会导致6个重复字符）

- 解决办法：
	- 设置负的右外边距从最后一个浮动元素上去掉3像素，或者使容器扩大3像素，但会在没有这个bug的IE7中造成问题
	- 最容易最安全的方法是从HTML代码中删除注释

**4、IE6中的“藏猫猫”bug**

- 应用：IE6

- 解释：一个浮动元素后面跟着一些非浮动元素，然后是一个清理元素，所有这些元素都包含在一个设置了背景颜色或图像的父元素中。如果清理元素碰到了浮动元素，那么重建的非浮动元素看起来消失了，隐藏到了父元素的背景颜色或图像后面，只有在刷新页面时才重新出现

- 解决办法：
	- 去掉父元素的背景颜色或图像（往往不可行）
	- 避免清理元素与浮动元素接触
	- 如果容器元素应用了特定的尺寸，这个bug不会出现
	- 如果给容器指定行高，这个bug也不会出现
	- 将浮动元素和容器元素的position属性设置为relative也会减轻这个问题

**5、相对容器的绝对定位**

- 应用：IE6及更低版本

- 解释：相对定位的元素没有获得hasLayout属性，他们不创建新的定位上下文，所有绝对定位元素就不会以相对定位元素来定位了，而是以视口进行定位

- 解决办法：
	- 使用条件注释过滤IE5和IE6：为容器提供一个任意高度。这可以让容器拥有布局，而且IE6及以下会不正确的扩展以适应他们的内容，所以设置小的高度不会影响实际高度 `.container {height: 1%;}`

### <span id="CSSAbout05"></span>5、CSS特殊性计算 ###

> **继承（Inheritance）**是从一个元素向其后代元素传递属性值所采用的机制

> **层叠（cascade）**在确定应当向一个元素应用哪些值时，用户代理考虑继承、声明的特殊性、声明本身的来源的过程称为层叠

**> 特殊性：**

**特殊性值**表述为**四**个部分（值的大小从左向右依次递减）：

- 所有**内联样式**的特殊性最高加：（1，0，0，0）
	- `<h1 style="color: green;">The Meadow Party</h1>`

> CSS2.1新增内联样式特殊性1，0，0，0。在CSS2中，内联样式特殊性是1，0，0（CSS2特殊性包含3个值，而不是四个），所以在CSS2中因为内联样式和ID选择器特殊性相同，所以ID选择器很容易覆盖内联样式

- 选择器中的**ID属性值**加：（0，1，0，0）
	- `#someid`
- 选择器中的**类属性值、属性选择或伪类**加：（0，0，1，0）
	- `.bright | a[href="pwnny.cn"] | a:hover`
- 选择器中的**元素和伪元素**加：（0，0，0，1）
	- `h1 | div:before`
- **结合符和通配**选择器对特殊性没有任何贡献（0，0，0，0）  
	- `h1+p  | *`

> <tt>**注意！**</tt> 通配选择器对一个选择器的特殊性没有贡献，其特殊性为（0，0，0，0），这与根本没有特殊性有区别

> <tt>**注意！**</tt> **结合符**则根本 **没有特殊性**，甚至连0特殊性都没有

> <tt>**注意！**</tt> **ID选择器** （#someid）特殊性为（0，1，0，0），**指定id属性的属性选择器**（a[id="someid"]）特殊性为（0，0，1，0）

一旦确定一个选择器的特殊性，这个**值**将授予其所有**相关声明**

用户代理在处理**声明分组**和**选择器分组**时，都会将其“解组”为单独的规则

> 声明分组

- `h1 {color: silver; background: black;}   (0,0,0,1)`
	- `h1 {color: silver;}   (0,0,0,1)`
	- `h1 {background: black;}   (0,0,0,1)`

> 选择器分组

- `h1, h2.section {color: silver; background: black;}`
	- `h1 {color: silver;}   (0,0,0,1)`
	- `h1 {background: black;}   (0,0,0,1)`
	- `h2.section {color: silver;}   (0,0,1,1)`
	- `h2.section {background: black;}   (0,0,1,1)`

**> 重要性**

**重要声明：**在这些声明的**结束分号之前**插入 <tt>!important</tt> (某个声明非常重要，超过了所有其他声明)

><tt>**注意！**</tt> <tt>!important</tt> 总是放在声明的最后，即分号之前。如果一个属性的值包含多个关键字如 <tt>font</tt> ,这一点则尤其重要。如果 <tt>!important</tt> 放在其他位置，则整个声明都将无效

- 所有 <tt>!important</tt> 声明会分组在一起，所有非重要声明也归为一组
- 重要声明的特殊性冲突会在重要声明内部解决，不会与非重要声明想混
- 如果一个重要声明和一个非重要声明冲突，胜出的总是重要声明

**> 继承**

- 在文档树中，元素样式的值会向下应用到后代元素，绝对不会向上传播（有一个例外：应用到**body**元素的背景样式可以传递到**html**元素(html是文档的**根元素**)，相应地可以定义其画布）
- 有些属性不能继承（如：border、大多数框模型：外边距、内边距、背景和边框 ）
- 继承的值**根本没有特殊性**， 甚至连0特殊性都没有（若声明了通配选择器，因为通配选择器特殊性为0比继承的无特殊性要强，所以继承的元素会渲染通配选择器的样式）

**> 层叠**

如果特殊性相等的两个规则同时应用到一个元素上，则会根据以下规则判断权重：

- 按权重（!important）和来源排序（以下权重顺序依次由大到小）
	- 读者的重要声明
	- 创作人员的重要声明
	- 创作人员的正常声明
	- 读者的正常声明
	- 用户代理声明

任何声明都会胜过用户代理样式

- 按特殊性排序
	- 如果向一个元素应用多个彼此冲突的声明，且权重相同，则按特殊性排序
- 按顺序排序
	- 如果两个规则的权重、来源和特殊性完全相同，那么在样式表中后出现的一个会胜出
	- 若文档中包含的规则比导入的规则权重高，那么文档中包含的规则将胜出(即使这个规则是文档样式表的一部分而不是元素style属性的一部分，也是如此)
	- 推荐**链接**样式顺序：**link-visited-hover-active(LVHA)**
		- 对于所有规则试图设置同一个属性时，这个顺序至关重要
		- 如果各规则为不同的属性设置样式，那么顺序无关紧要

**> 非CSS的表现提示**

- 非CSS提示被处理为特殊性为0，并出现在创作人员样式表的最前面
- 只要有创作人员或读者样式，这种表现提示就会被覆盖，但是用户代理的样式不能将其覆盖

### <span id="CSSAbout06"></span>6、CSS中常用的颜色单位 ###

1. **HEX：**#A6DADC（颜色值得十六进制）
2. **RGB：**166，218，220
3. **RGBA：**166，218，220，1
4. **HSL：**182，44%，76%
5. **HSLA：**182，44%，76%，.2

RGBA：前三个参数分别是红色、绿色和蓝色的强度值，取值从0~255或0%~100%

HSLA：前三个参数分别是色调（0~360）、饱和度（0%~100%）和亮度（0%~100%）

RGBA和HSLA的第四个参数都是透明度，取值从0（完全透明）到1（完全不透明）

> **opacity**的作用是使整个元素都半透明，包括前景内容，而不仅仅是背景

**HSL/HSLA**色彩速查表：

色调值：

- 0或360=红色（red）
- 30=橙色（orange）
- 60=黄色（yellow）
- 120=绿色（green）
- 180=青色（cyan）
- 240=蓝色（blue）
- 270=紫色（purple）
- 300=紫红色（magenta）

- 黑色（black）=将亮度设置为0%，白色（white）=将亮度设置为100%。色调和饱和度可以任意取值
- 灰色（gray）=将饱和度设置为0%。此时亮度控制灰色的明暗度，色调取值无关紧要

### <span id="CSSAbout07"></span>7、如果设计中使用了非标准的字体，你该如何去实现？ ###

**@font-face** 是链接服务器上的字体的一种方式（就像指定图片链接一样），浏览器根据这条指令把对应的字体文件下载到本地缓存，使用它修饰文本。

这通常被称为 <tt>字体嵌入</tt>

    @font-face {
		font-family: Raleway;
		src: url(fonts/raleway_thin.otf);
	}
	h1 {
		font-family: Raleway, "HelveticaNeueLt Std Thin", "HelveticaNeueLt Neue Light", "HelveticaNeueLt-Light", "HelveticaNeueLt Neue", "Helvetica, Arial, sans-serif";	
	}

这告诉浏览器使用 <tt>raleway_thin.otf</tt> 字体文件渲染h1，如果浏览器不支持 <tt>@font-face</tt> ,或者因为某些原因无法下载字体文件，则继续从 字体栈（在font-family属性中声明的字体列表）中按顺序从用户机器加载这些字体，直到找到一个可用的字体为止 

## <span id="JSAbout"></span> > JavaScript常见问题 ##

### <span id="JSAbout01"></span>1、元素中的属性及存放位置 ###

HTML4.01定义的属性：

- **async：**（可选）表示应该立即下载脚本，但不应妨碍页面中的其他操作（如：下载其他资源或等待加载其他脚本）。只对外部脚本有效
- **charset：**（可选）表示通过src属性指定的代码的字符集。会被大多数浏览器忽略
- **defer：**（可选）表示脚本可以延迟到文档完全解析和显示之后再执行。只对外部脚本有效（IE7之前对嵌入脚本也有效）
	- 不影响页面构造，相当于告诉浏览器立即下载，但延迟执行
- **src：**（可选）表示包含要执行代码的外部文件
- **type：**（可选）表示编写代码使用的脚本语言的内容类型（也称为MIME类型）默认值为 <tt>text/javascript</tt> （实际上，服务器在传送js文件时使用的是 <tt>application/x-javascript</tt>，但在type中设置这个值脚本会被忽略）

使用`<script>`元素的方式两种：

1. 页面内嵌入

	`<script type="text/javascript">function sayHi(){console.log("Hi!");}</script>`

2. 外部文件引入

    `<script type="text/javascript"  src="example.js"></script>`

	- 在XHTML文档中可以省略`</script>`，但不能用在HTML文档中

   -  `<script type="text/javascript"  src="example.js" />`
   -  带有src属性的`<script>`元素两个标签之间不应该再包含js代码，如果包含了会被忽略，只会下载执行外部脚本文件
   -  使用外部文件的优点：
	   -  可维护性
	   -  可缓存性
	   -  适应未来性 ：无须为了兼容XHTML使用`<script />`或注释hack。HTML和XHTML包含外部文件的语法是相同的

两种方式包含的JavaScript代码将被**从上至下**依次解释，在解释器对`<script>`元素内部的所有代码求值完毕以前，页面中的其余内容都不会被浏览器加载或显示

> <tt>**注意！**</tt> 不要在代码中的任何地方出现`</script>`字符串(可以通过转义字符“\”解决：`<\/script>`)

**标签位置**

一般把全部JavaScript引用放在`<body>`元素中页面内容的后面

- 如果放在`<head>`元素中，那必须等到全部js代码都被下载、解析、执行完成以后才能可是呈现页面内容（浏览器在遇到`<body>`标签时才开始呈现内容），这会导致页面延迟，并是窗口一片空白

### <span id="JSAbout02"></span>2、相等(==)和全等(===)操作符判断相等的流程是怎样的？ ###

1. **相等和不想等**

这两个操作符在比较时都会先转换操作数（**强制转型**），再比较相等性：

- 如果其中一个操作数是**布尔值**，则在比较之前先将其转换为数值---false转换为0，true转换为1
- 如果其中一个是字符串，另一个是数值，则在比较之前先将 **字符串** 转换为 **数值**
- 如果其中一个是**对象**，另一个不是，则调用对象的**valueOf()**方法 ，用得到的基本类型值按照前面的规则进行比较
	- **null**和**undefined**是相等的
	- 在比较之前不能将null和undefined转换成其他任何值
	- 如果有一个操作数是NaN，则**相等操作符**返回false，**不想等操作符**返回true
		- 即使两个操作数都是**NaN**，相等操作符也返回false，因为NaN不等于NaN
	- 如果两个都是对象，则比较是不是同一个对象。若指向同一个对象，返回true；否则，返回false

|表达式|值|
|------|---|
|null == undefined|true|
|"NaN" == NaN|false| 
|5 == NaN|false| 
|NaN == NaN|false| 
|NaN != NaN|true| 
|false == 0|true| 
|true == 1|true| 
|true == 2|false| 
|undefined == 0|false| 
|null == 0|false| 
|"5" == 5|true|  

2. **全等和不全等**

只在两个操作数**未经转换**就 **相等(===)或不想等(!==)** 的情况下返回true

    var result = ("55"== 55);   //true，因为转换后相等
    var result = ("55"=== 55);   //false，因为不同的数据类型不想等

    var result = ("55"!= 55);   //false，因为转换后相等
    var result = ("55"!== 55);   //true，因为不同的数据类型不想等

    null == undefined   //true，因为他们是类似的值
    null === undefined   //false，因为他们是不同类型的值

两个包含着完全相同的字符且字符顺序也相同的字符串被认为是相同的字符串：`'c'+'a'+'t' === 'cat'   //true`

两个字符串显示结相同但是编码不同，==和===都认为他们不想等

如果指向相同对象、数组、函数，他们相等

### <span id="JSAbout03"></span>3、JavaScript中有哪些方法定义对象？ ###

1. 构造函数法

    `var person = new Object()`

    `person.name = "Pwnny"`

    `person.age = 22`

2. 对象字面量法

    `var person = { name : "Pwnny", age : 29};`

    最后一个属性之后不能加逗号。各属性名可以使用字符串

    通过对象字面量定义对象时，不会调用Object构造函数

3. Object.create()

### <span id="JSAbout04"></span>4、<,>,<=,>=的比较规则？ ###

这几个操作符都返回一个**布尔值**

在进行比较时使用的相应规则：

- 如果都是数值，则执行数值比较
- 如果都是字符串，则比较两个字符串对应的字符编码值
- 如果一个是数值，则将另一个转换为数值，然后执行数值比较
- 如果一个对象，则调用这个对象的valueOf()方法，用得到的结果按前面的规则执行比较。如果对象没有valueOf()方法，则调用toString()方法，用得到的结果按前面的规则进行比较
- 如果一个是布尔值，则先将其转换为数值，然后再比较

> 在比较两个字符串时，实际比较的是两个字符串中对应位置的每个字符的**字符编码值**，而不是在字母表中的位置。字符编码：**大写字母全部小于小写字母**

- 如：`var result = "Brick" < "alphabet"   //true`
- 如果要真正按字母表顺序比较，则应把两个字符串转换为相同的大小写形式（全部大写或全部小写）
	- `var result = "Brick".toLowerCase() < "alphabet".toLowerCase();   //false`

> 在比较两个数字字符串时，也是比较的字符编码

- 如： `var result = "23" < "3"   //true`  （"2"的字符编码是50，"3"的字符编码是51）
- 如果其中一个为数值，则比较结果正常：`var result = "23" < 3`（字符串"23"会被转换成数值23）
- 如果和数值比较的字符串不能转换成数值，则返回false
	- `var result = "a" < 3;   //false,因为"a"被转换成了NaN`
	- **任何操作数与NaN进行关系比较，结果都是false**

### <span id="JSAbout05"></span>5、+运算符的工作流程 ###

- 如果两个操作数都是数值，执行常规加法算法，然后根据以下规则返回结果：
	- 其中一个是NaN，则结果是NaN
	- Infinity加Infinity，结果是Infinity
	- -Infinity加-Infinity，结果是-Infinity
	- Infinity加-Infinity，结果是NaN
	- +0加+0，结果是+0
	- -0加-0，结果是-0
	- +0加-0，结果是+0
- 如果一个操作数是字符串，则：
	- 如果两个都是字符串，则将第一个和第二个操作数拼接起来
	- 如果只有一个操作数是字符串，则将另一个转换为字符串，再拼接起来
	- 如果一个操作数是对象、数值或布尔值，则调用他们的toString()方法，取得相应字符串值，再应用前面的规则
	- 对于null和undefined，则调用他们的String()方法并取得字符串"null"和"undefined"