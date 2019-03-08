### 介绍

用react模仿饿了么客户端的SPA

### 技术栈

react + react-router (redux暂时没用上)

### 运行项目

```
    cd learn-react-elm
    npm i || yarn
    npm start
```
    
### 目录结构

```
|-- learn-react-elm       #根目录文件夹
    |-- package.json            #npm包配置文件
    |-- yarn.lock               #yarn
    |-- README.md               #README
    |-- .gitignore              # (配置)需被Git忽略的文件(夹)
    |-- src                     # 源码目录(开发都在这里进行)
    |   |-- App.js                  # 启动文件
    |   |-- index.js
    |   |-- index.css
    |   |-- components              # 组件目录
    |   |   |-- TabBar
    |   |   |   |-- index.css
    |   |   |   |-- index.js
    |   |   |   |-- index.less
    |   |   |-- FoodNav
    |   |   |   |-- index.js
    |   |   |   |-- index.less
    |   |   |   |-- index.css
    |   |   |-- Homeheader
    |   |   |   |-- index.js
    |   |   |   |-- index.less
    |   |   |   |-- index.css
    |   |   |-- Banner
    |   |   |   |-- index.js
    |   |   |   |-- index.less
    |   |   |   |-- index.css
    |   |   |-- ShopList
    |   |   |   |-- index.js
    |   |   |   |-- index.less
    |   |   |   |-- index.css
    |   |   |-- Location
    |   |   |   |-- index.js
    |   |   |   |-- index.less
    |   |   |   |-- index.css
    |   |   |-- Shopitem
    |   |       |-- index.js
    |   |       |-- index.less
    |   |       |-- index.css
    |   |-- assets                  # 静态文件目录
    |   |   |-- fonts
    |   |       |-- demo.css
    |   |       |-- demo_index.html
    |   |       |-- iconfont.css
    |   |       |-- iconfont.eot
    |   |       |-- iconfont.js
    |   |       |-- iconfont.svg
    |   |       |-- iconfont.ttf
    |   |       |-- iconfont.woff
    |   |       |-- iconfont.woff2
    |   |-- pages                   # 页面目录
    |       |-- Home.js
    |       |-- Order.js
    |       |-- Find.js
    |       |-- User.js
    |-- public                  # 静态资源目录
        |-- index.html              # 入口html文件
        |-- manifest.json           #移动App的配置文件,用于指定应用的显示名称,图标,应用入口文件地址及需要使用的设备权限等信息.
```