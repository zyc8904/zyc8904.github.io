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
	- [ 6、请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible)](#normal06)
- [HTML相关问题](#htmlAbout) 
	- [1、doctype(文档类型) 的作用是什么？](#htmlAbout01)

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

### 2、浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？ ###

Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页。

Quirks （怪异）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页，排版会模拟 Navigator 4 与 Internet Explorer 5 的非标准行为。

Almost Standards （近似标准）模式（Mozilla/Netscape 6新增的一种模式），用于支持为标准的某个老版本而设计的网页，只有少数的怪异行为被实现。

**~浏览器如何决定用哪个模式？**

对HTML文件来说，浏览器使用文件开头的 DOCTYPE 来决定用哪种模式。

    <!DOCTYPE html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>Hello World!</title>
	</head>
	<body>
	</body>
	</html>

> 范例中的DOCTYPE，<!DOCTYPE html>，是所有可用的DOCTYPE之中最简单的，而且是HTML5 所推荐的。HTML的早期变种也属于推荐标准，不过今日的浏览器都会对这个 DOCTYPE 使用标准模式，就算是已过时的 Internet Explorer 6 也一样。

在 HTML5中，DOCTYPE 唯一的作用是启用标准模式。更早期的 HTML 标准会附加其他意义，但没有任何浏览器会将 DOCTYPE 用于怪异模式和标准模式之间互换以外的用途。

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
