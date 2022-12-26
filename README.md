## 通用Electron模板
> 分离Electron的主进程与渲染进程，分离Electron与主要页面各自的编译逻辑

## 如何使用
``` bash
# 安装Electron项目依赖
$ npm install 
# 安装子项目依赖
$ cd renderer
$ npm install
```

## 如何打包
``` bash
# 安装Electron项目依赖
$ npm run build:app
# 根据系统选择打包哪种
$ npm run elt:dist:mac   
# 安装子项目依赖
```