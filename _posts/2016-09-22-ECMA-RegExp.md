---
layout: post
title:  "JavaScript正则表达式详解"
date:   2016/9/22 14:49:07 
categories: original
excerpt_separator:   
---

正则表达式是一种非常有效的前端验证技术，可以用在登录窗口，或者表单填写等地方。当然，一定也得有后台的双重校验才是最安全的。

那么这篇就给大家分享一下最基本的正则表达式的书写规则吧！

**一、简单的模式匹配**

正则表达式的内容都包括在一个`//`中：`/abc/`

最简单的就是完全匹配：所匹配的项必须同时出现并且按照顺序

- `/abc/` 在 "Hi, do you know your abc's?" 和 "The latest airplane designs evolved from slabcraft."中就会匹配成功
- 但在字符串 "Grab crab" 中将不会被匹配，因为它不包含任何的 'abc' 子字符串

**二、使用特殊字符**

当需要搜索一个比直接匹配需要更多条件的匹配时，那么这个模式就需要包含特殊字符

比如：模式`/ab*c/`就匹配了一个单独的'a'后面跟了零或多个'b'（在这里*的意思就是前面一项出现了零或多次）且后面跟着'c'的任何字符组合：

在字符串 "cbbabbbbcdebc" 中，这个模式匹配了子字符串 "abbbbc"

下面是正则表达式中可以利用的特殊字符的完整列表和描述

**`\`**

- 把他后面平常被当作字面量的字符，转义为特殊字符。如：`/b/`匹配了字符'b'.通过在b的前面放一个反斜杠，即用作`/\b/`，这个字符变成了一个特殊意义的字符，意思是匹配一个字符边界  
- 也可以将其后的特殊字符，转义为字面量。如：模式`/a*/`代表匹配0或多个a，相反，模式`/a\*/`将`*`的特殊性移除，从而匹配像`a*`这样的字符串
- 使用RegExp构造函数创建正则表达式时，一定要对`\`进行转义，因为`\`在字符串里面也是一个转义字符

**`^`**

- 匹配以其后面的字符作为字符串开头的字符串。如果多行标志m被设置为true，那么也匹配换行符后紧跟的位置
- 如：`/^A/`不会匹配"an A"中的'A'，但会匹配"An E"中的'A'

**`$`**

- 匹配以其前面的字符作为字符串结尾的字符串。如果多行标志m被设置为true，那么也匹配换行符前的位置
- 如：`/t$/`不会匹配"eater"中的't'，但是会匹配"eat"中的't'

**`*`**

- 匹配其前面的字符出现了零或多次的字符串。等价于`{0,}`
- 如：`/bo*/`会匹配"A ghost boooooed" 中的 'booooo' 和 "A bird warbled" 中的 'b'，但是在 "A goat grunted" 中将不会匹配任何东西

**`+`**

- 匹配其前面的字符出现了一或者多次的字符串。等价于`{1,}`
- 如：`/a+/`匹配了在 "candy" 中的 'a'，和在 "caaaaaaandy" 中所有的 'a'

**`?`**

- 