# 一款基于Vue2.0高仿微信App的单页应用
## 概述

利用Vue2.0模仿微信app，努力做到以假乱真的效果。个人独立开发，源码中有详细的注释，为新手提供许多有用的提示信息。项目的第一期接近尾声，后期会增加 **仿3DTouch**、**登陆**、**注册**、**emoji表情内嵌**、**通讯录检索**、~~**朋友圈图片预览**~~(已添加)等功能，让它更接近微信App的用户交互体验。

项目地址 `https://github.com/zhaohaodang/vue-WeChat`

## 手机预览
首选红色，加载较快

![https://sinacloud.net/vue-wechat/images/demo-qrcode-gitee.png](https://sinacloud.net/vue-wechat/images/demo-qrcode-gitee.png)

蓝色为备胎，加载较慢

![https://sinacloud.net/vue-wechat/images/demo-qrcode-github.png](https://sinacloud.net/vue-wechat/images/demo-qrcode-github.png)

测试机为iPhone 6s，在微信内置浏览器以及Safari、Chrome浏览器中运行良好。



> 若觉得不错想给作者**点个赞**，可以给项目增加一个 Star ★，项目会被收录在 Your stars 中，方便日后查看。
>
> 若想时时**关注**项目动态，可 Watch ⊙ 此项目，github平台会及时通知你项目的动态，你的邮箱也会收到通知。



## 桌面预览

加载较快  [https://zhaohd.gitee.io/vue2-wechat](https://zhaohd.gitee.io/vue2-wechat)

备选 加载较慢 [https://vue2-wechat.github.io](https://vue2-wechat.github.io)

桌面端浏览时，建议打开***开发者工具*** `F12`，模拟手机预览 `Ctrl+Shift+M` (Chrome)




## 动图预览


**微信列表的滑动交互**

![微信列表的滑动交互](./src/assets/images/gif/msg-operate.gif)

**搜素组件的动画效果**

![搜素组件的动画效果](./src/assets/images/gif/search-active.gif)

**进入对话框**

![进入对话框](./src/assets/images/gif/enter-dialogue.gif)

**对话框信息**

![对话框信息](./src/assets/images/gif/dialogue-operate.gif)

**首页Tab切换**

![首页Tab切换](./src/assets/images/gif/tab-switch.gif)



## 技术相关

* [vue-WeChat Wiki](https://github.com/zhaohaodang/vue-WeChat/wiki) 中记录了开发此项目需要的知识储备、开发思路、开发利器等。内容会不断更新，实际上想把它建成个人快速开发的代码库。
* 每个主要的.vue和.js文件都有详细的**注释**提示，建议将仓库`clone`到本地，查看源码。 

示例1( store.js 注解)

![store.js文件注解](https://sinacloud.net/vue-wechat/images/screenshot/code-screenshot01.jpg)

示例2( App.vue 注解)

![App.vue 注解](https://sinacloud.net/vue-wechat/images/screenshot/code-screenshot02.jpg)



## 问题反馈

建议移步[Issues](https://github.com/zhaohaodang/vue-WeChat/issues)，欢迎反馈项目中的不良/错误表现，以及你在开发过程遇到的问题，作者会积极回复。



## 其他

* [vue-see](https://github.com/zhaohaodang/vue-see) 适用于 Vue.2x 的图片预览插件
* 项目使用的webpack已更新到3.0版本，请安装webpack3.0，否则build失败
