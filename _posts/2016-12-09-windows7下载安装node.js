---
layout: post
title: Windows7 安装node.js
---

1. 系统：64位windows7

2. 从镜像下载：https://npm.taobao.org/mirrors/node，选择版本node-v6.0.0-x64.msi

3. nodejs安装
   下载目录为：C:\Programs Files\nodejs,一路next。安装自动添加两个环境变量：
   系统path：C:\Programs Files\nodejs;Administrator
   用户Path:C:\Users\Administrator\AppData\Roaming\npm

4. 验证是否成功安装。
   进入cmd，C:\Users\Administrator>node -v

5. npm模块安装配置
   默认情况下，npm会将模块安装到 C:\Users\Administrator\AppData\Roaming\npm 中（上面配置），在其中建一个node_modules目录，所有的模块均放在里面，命    令行放在外面，由于安装时配置了PATH，所以也可以在命令行窗口中直接使用。可以将其改为C:\Programs Files\nodejs\node_modules。进入cmd
   npm config set prefix "C:\Programs Files\nodejs"
   npm config set cache "C:\Programs Files\nodejs\cache"
   删除用户Path:C:\Users\Administrator\AppData\Roaming\npm，添加Path:C:\Programs Files\nodejs\node_modules。以后npm安装的模块都会放在该目录下。
   删除C:\Users\Administrator\AppData\Roaming\npm目录
   如果修改Path之前，安装过模块，修改Path之后，删除所有:\Users\Administrator\AppData\Local\Temp\npm*文件
   
6. 安装express
   npm -g install express
   express 从 4.x 版本开始把命令行工具express-generator分离出来了，因此如果要使用它的话，需要单独安装：npm -g install express-generator

7. 安装mysql
   npm -g install mysql

8. 安装supervisor，监测代码改动，
   npm -g install supervisor
   启动应用supervisor app.js（代替node app.js）
