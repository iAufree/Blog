---
layout: post
title: Chrome插件制作
date: 2014-5-22 10:00
categories: Tools
tags: [Chrome,JavaScript]
---
##一个普通的Chrome插件
所有插件的内容都包含在一个文件夹内,文件夹内有3个子文件夹,分别为images,js,css.另外还有两个json和html格式的文件,整个制作流程与网站制作的流程相似,最大的不同是多了一个json文件.
###制作过程
先命名一个json文件(manifest.json), json文件里面的主要内容有:

	manifest_version: 用于指定manifest version的版本(必须)    

	name: 插件的名称(必须)    

	version: 插件的版本(必须)    

	description: 对插件的描述    

	icons: 引入插件图标    

	browser_action: 指定扩展的图标放在Chrome的工具栏中,里面含有default_icon,default_title和default_popup       

	default_icon: 定义了相应图标的位置    

	default_title: 定义了当用户鼠标悬停于扩展图标上所显示的文字    

	default_popup: 指定要显示的html文件

json部分搞定之后,其它部分就跟制作网页的流程差不多了,先编写html文件,再编写样式,最后编写js, js文件必须从外部引入而无法直接在html文件里面编写.

运行: 打开chrome的extension扩展,点击上面的`load unpacked extension`,引入所编写的chrome插件,引入成功之后,插件会在chrome的工具栏中显示出来,点击之后就能看到在html里面编写的内容.
可以看到核心部分在`manifest.json`部分,详见[官方文档](https://developer.chrome.com/extensions/manifest).

manifest.json模板:

```json
{
    "app": {
        "background": {
            "scripts": ["background.js"]
        }
    },
    "manifest_version": 2,
    "name": "My Extension",
    "version": "versionString",
    "default_locale": "en",
    "description": "A plain text description",
    "icons": {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
    },
    "browser_action": {
        "default_icon": {
            "19": "images/icon19.png",
            "38": "images/icon38.png"
        },
        "default_title": "Extension Title",
        "default_popup": "popup.html"
    },
    "page_action": {
        "default_icon": {
            "19": "images/icon19.png",
            "38": "images/icon38.png"
        },
        "default_title": "Extension Title",
        "default_popup": "popup.html"
    },
    "background": {
        "scripts": ["background.js"]
    },
    "content_scripts": [
        {
            "matches": ["http://www.google.com/*"],
            "css": ["mystyles.css"],
            "js": ["jquery.js", "myscript.js"]
        }
    ],
    "options_page": "options.html",
    "permissions": [
        "*://www.google.com/*"
    ],
    "web_accessible_resources": [
        "images/*.png"
    ]
}
```
Pedding...