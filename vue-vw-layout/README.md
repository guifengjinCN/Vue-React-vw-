## vue-cli 3移动端vw适配

```
# 拉取项目
git clone https://github.com/guifengjinCN/vw-layout.git

# 进入文件目录
cd ./vue-ve-layout

# 安装依赖
yarn / npm i

# 运行项目
yarn serve / npm run serve

# 项目打包
yarn run build / npm run build
```

自己配置

安装 `yarn add postcss-px-to-viewport`，在package.json中，找到postcss并添加如下代码：
```
"postcss": {
    "plugins": {
        "autoprefixer": {},
        "postcss-px-to-viewport": {
            "viewportWidth": 750, // 设计稿的宽度 
            "unitPrecision": 3, // px转成vw、vh后小数点保留的位数 
            "minPixelValue": 1 // 不转化为vw的最小px值
        }
    }
}
```

文件目录说明
```
+-- node_modules/                            ---npm下载文件目录
+-- public/									 ---公共
+-- src/                                     ---核心代码目录
|   +-- api/                                 ---接口文件 主要用于配置每个接口的url
|   +-- assets/                              ---静态文件
|   +-- components/                          ---公共组件
|   +-- router/                              ---路由文件
|   +-- utils/                               ---公共的方法文件
|   +-- store/ 								 ---用于储存vue中的公共参数（vuex）
|   +-- view/                                ---视图
|   --- App.vue                              ---组件入口文件
|   --- main.js                              ---项目的整体js入口文件
--- .gitgnore								 ---git不需要提交的文件配置
--- babel.config.js							 ---babel配置
--- package.json   							 ---包配置文件
--- README.md								 ---说明文件
--- vue.config.js							 ---vue自定义配置文件
--- yarn.lock 								 ---yarn包依赖文件
```
