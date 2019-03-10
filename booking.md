#### 介绍

这是用来记录项目中需要用到工具的指南

#### 项目Tree树生成

用mddir来生成项目Tree树(默认会忽略掉node_modules和.git文件夹)
```
cd learn-react-elm
npm install mddir --save
cd node_modules/mddir/src
node mddir "../../../"  # 会在mddir/src文件夹下生成directoryList.md文件
```