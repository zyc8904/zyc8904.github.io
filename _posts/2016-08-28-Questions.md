---
layout: post
title:  "Front-End-Developer-Interview-Questions（持续更新）"
date:   2016/8/28 23:11:12 
categories: original
excerpt_separator:   
---

总结这套前端面试的题目答案，一是想让自己随时能翻看查找一些遗忘的知识点，二也是给各位朋友们做个参考。 

大家看到很多问题的答案篇幅可能会比较长，这是因为我顺带写了很多铺垫知识。这是为了以后复习某个问题的时候可以连点带面的串起与它相关的其他知识。我总结这些问题的答案目的不是单纯的找答案，而是借此复习一些前端的知识，也作为我自己的一个小知识库。所以请大家谅解篇幅的冗长。

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

> 让牛B的浏览器显示效果更好

    .box {
		-webkit-border-radius: 10px;
		-moz-border-radius； 10px;
		border-radius: 10px;
	}

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

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

- 浏览器在渲染优雅降级时会忽略纯情CSS3，直接使用前缀CSS3，这将会导致错误显示。

![error](http://pwnny.cn/assets/images/webfront/graceful-degradation.JPG)

使用**渐进增强**带来的正确显示：

- 浏览器在渲染渐进增强时则会忽略前缀CSS3，使用最下面的不带前缀的CSS3，这会带来正确的显示。

![error](http://pwnny.cn/assets/images/webfront/progressive-enhancement.JPG)

像上图所示的使用优雅降级和渐进增强所导致的不同的显示还有很多方面：如线性渐变linear-gradient(120deg, #155799, #159957)等一些其他的CSS3的特性。

**所以，我强烈建议大家使用 渐进增强 ！**

*~区别：*

- 优雅降级是从复杂的现状开始，并试图减少用户体验的供给（一开始就构建站点的完整功能，然后针对浏览器测试和修复）。

- 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要（一开始只构建站点的最少特性，然后不断针对各浏览器追加功能）。

- 优雅降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

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
15. **使用GET完成Ajax请求**
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

<span id="normal06"></span>

### 6、请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible) ###

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

<span id="htmlAbout"></span>

##  > HTML相关问题 ##

<span id="htmlAbout01"></span>

### 1、doctype(文档类型) 的作用是什么？ ###

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

<span id="htmlAbout02"></span>

### 2、浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？ ###

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

<span id="htmlAbout03"></span>

### 3、HTML 和 XHTML 有什么区别？ ###

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

<span id="htmlAbout04"></span>

### 4、如果页面使用 'application/xhtml+xml' 会有什么问题吗？ ###

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

<span id="httpAbout"></span>

##  > HTTP相关问题 ##

<span id="httpAbout01"></span>

### 1、常见的HTTP method ###

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

<span id="httpAbout02"></span>

### 2、从浏览器地址栏输入url到显示页面的步骤(以HTTP为例) ###

下面是一些基本知识介绍

---

> **MIME类型（MIME TYPE）：**是一种文本标记（数据格式标签），表示一种**主要的对象**类型和一个**特定的子**类型。中间由一条斜杠来分隔。

> - 最初设计MIME（Multipurpose Internet Mail Extension，多用途因特网邮件扩展）是为了解决在不同的电子邮件系统之间搬移报文时存在的问题。MIME在电子邮件系统中工作的非常好，因此HTTP也接纳了它，用它来描述并标记多媒体内容
> - Web服务器会为所有HTTP对象数据附加一个MIME类型，如 <tt>Content-type: image/jpeg</tt>。当Web浏览器从服务器中取回一个对象时，回去查看相关的MIME类型，看看它是否知道应该如何处理这个对象

>常用的MIME类型：

>- HTML格式文本文档：<tt>text/html</tt>    
>- 普通ASCII文本文档：<tt>text/plain</tt>
>- JPGE格式的图片：<tt>image/jpeg</tt>
>- GIF格式的图片：<tt>image/gif</tt>
>- APPLE的QuickTime电影：<tt>video/quicktime</tt>
>- 微软的PowerPoint：<tt>application/vnd.ms-powerpoint</tt>

> **URI（统一资源标识符，Uniform Resource Identifier）：**是一类通用的资源标识符，由两个主要的子集**URL**（通过描述资源的位置识别）和**URN**（通过描述资源的名字识别）构成

> **URL（统一资源定位符，Uniform Resource Locator）：**描述了一台特定服务器上某资源的特定位置。URL提供了一种统一的资源命名方式，大多数URL都有同样的： <tt>“方案(scheme) :// 主机(host) / 路径(path)”</tt> 结构，可以明确说明如何从一个精确、固定的位置获取资源。

> - **(!)方案(http://)：**规定使用什么协议访问。以一个**字母符号**开始，由第一个 ":" 符号将其与URL其余部分分隔。方案名是大小写无关的
> - **(!)主机(www.pwnny.cn)：**标识了因特网上能够访问资源的宿主机器。可以用主机名(pwwny.cn)或者IP地址来表示主机名
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

 <span id="httpAbout03"></span>

### 3、HTTP Request和HTTP Response报文结构是怎样的？###

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

 <span id="httpAbout04"></span>

### 4、HTTP 状态码及其含义###


	 
 










 


