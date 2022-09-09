**[MDN官网http协议全部参考文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)**
**[Vue-cli脚手架及部署官网](https://cli.vuejs.org/zh/guide)**
**[MDN-web开发文档html/css/js](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/)**
**[fetch请求的API文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)**
"description": "**[MDN官网http协议全部参考文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)**\r 
**[Vue-cli脚手架及部署官网](https://cli.vuejs.org/zh/guide)**\r 
**[MDN-web开发文档html/css/js](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/)**\r 
**[fetch请求的API文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)**\r 
1. webpack--不用全局安装也能打包执行---需要先package.json里配置-->build： webpack --config webpack.pub.config.js,然后用npm run build 驱动运行即刻可
2. 因为npm 命令默认就会去 node_module.js文件里找，并运行，npm就是全局命令 
3. webpack 如果不全局安装--也不在 package.json 里配置，则需要用命令 npx webpack --config webpack.pub.config.js 驱动文件执行 
4. npx 就是驱动-webpack-的全局命令
5. webpack-dev-server 是携带自动更新-自动打开-内存中保存打包好的dist文件-修改端口-开发打包用压缩gzip格式-等功能
6. 重大问题提示： - 1. webpack中使用webpack-dev-server工具时，运行总是会页面提示请求不成功404的问题，明显简单的打包和发请求不沾边
第一要检查安装了html-webpack-plugin吗？安了就可以 
2. 解决问题：webpack安装的版本不配套  
```js
\"webpack\": \"^4.43.0\",\r    
\"webpack-cli\": \"^3.3.12\",\r     
\"webpack-dev-server\": \"^3.11.0\"\r  
这样才行，最新webpack需要升级一下配置--> 
在package.json文件里
webpack-dev-server --open --config script/webpack.dev.js
改为webpack serve --open --config script/webpack.dev.js
open后面的是自动要打开的js文件而已，不写也没事，因为写了往往会webpack进入那个路径找，但进入后webpack有找不到自己配置的mode：development这个属性做警告和报错，也不出效果---所以不写最好
```
3. 其次端口默认是用8080，package.json配置后也可改为其它 
4.  **[webpack4 地址](https://v4.webpack.docschina.org/concepts/)**
5. 如果用了html-webpack-plugin ,有在index.html里引用了bundle.js 文件，则会发生两次打包，和引用---------注意点
7. 总结：webpack-dev-server 会将bundle.js文件存在电脑硬盘一份---html-webpack-plugin 会将html页面在缓存中存一份，并自动引用bundle.js文件\r  
8. webpack4 匹配到的插件版本号：
 ```js
 "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/plugin-transform-runtime": "^7.13.10",
    "@babel/preset-env": "^7.6.3",
    "autoprefixer": "^9.6.5",
    "babel-loader": "^8.2.2",
    "css-loader": "^3.2.1",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "html-withimg-loader": "^0.1.16",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "node-sass": 此项是可以被sass替代的，因为很难找到对应的版本号--所以可以这样
    "sass"："^1.26.5",  这里是按node是14.x.x的版本对应查找的插件r
    "sass-loader": "^7.3.1",
    "mini-css-extract-plugin": "^0.8.2",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-loader": "^3.0.0",
    "style-loader": "^1.0.2",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "url-loader": "^2.2.0",
    "webpack": "^4.41.6",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
    },
    node 17 安装 “node-sass”: “^4.7.2”,--- “sass-loader”: “^7.3.1”,---------------  
    node 16.13.0 安装 “node-sass”: “^6.0.1”, “sass-loader”: “^10.2.0”,-----------------
    node 版本为：v14.19.0 安装 "node-sass": "^4.14.1" "sass-loader": "^7.3.1" ----------------
    使用npm install sass-loader@8.0.2 sass@1.26.5 --save-dev 用sass 代替 node-sass 可解决找不到对应的版本问题
    "dependencies": {
        "@babel/polyfill": "^7.12.1",
        "@babel/runtime": "^7.13.10",
        "axios": "^0.19.2",
        "vue": "^2.6.12",
        "browserslist": [
            " 1%",
             "last 2 versions"
        ]
    }
    ---------------------------
    let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"),
    UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");"
-------------------------------

1. webpack--不用全局安装也能打包执行---需要先package.json
    里配置-->build： webpack --config webpack.pub.config.js, 
    然后用npm run build 驱动运行即刻可
2. 因为npm 命令默认就会去 node_module.js文件里找，并运行，npm就是全局命令
3. webpack 如果不全局安装--也不在 package.json 里配置，则需要用命令 npx webpack --config webpack.pub.config.js 驱动文件执行
4. npx 就是驱动-webpack-的全局命令
5. webpack-dev-server 是携带自动更新-自动打开-内存中保存打包好的dist文件-修改端口-开发打包用压缩gzip格式-等功能
6. 重大问题提示：
 - 1. webpack中使用webpack-dev-server工具时，运行总是会页面提示请求不成功404的问题，明显简单的打包和发请求不沾边
 - 2. 解决问题：webpack安装的版本不配套--
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
    这样才行，最新webpack需要升级一下配置--> 在package.json文件里
    webpack-dev-server --open --config script/webpack.dev.js
    改为webpack serve --open --config script/webpack.dev.js
 - 3. 其次端口默认是用8080，package.json配置后也可改为其它，
 - 4.  **[webpack4 地址](https://v4.webpack.docschina.org/concepts/)**
 - 5. 如果用了html-webpack-plugin ,有在index.html里引用了bundle.js 文件，则会发生两次打包，和引用---------注意点
 7. 总结：webpack-dev-server 会将bundle.js文件存在电脑硬盘一份---html-webpack-plugin 会将html页面在缓存中存一份，并自动引用bundle.js文件
 8. webpack4 匹配到的插件版本号： 
```js
  "devDependencies": {
     "@babel/core": "^7.6.4",
     "@babel/plugin-transform-runtime": "^7.13.10",
     "@babel/preset-env": "^7.6.3",
     "autoprefixer": "^9.6.5",
     "babel-loader": "^8.2.2",
     "css-loader": "^3.2.1",
     "file-loader": "^4.2.0",
     "html-webpack-plugin": "^3.2.0",
     "html-withimg-loader": "^0.1.16",
     "less": "^3.10.3",
     "less-loader": "^5.0.0",
     "node-sass": 此项是可以被sass替代的，因为很难找到对应的版本号--所以可以这样
     "sass"："^1.26.5",  这里是按node是14.x.x的版本对应查找的插件
     "sass-loader": "^7.3.1",
     "mini-css-extract-plugin": "^0.8.2",
     "optimize-css-assets-webpack-plugin": "^5.0.3",
     "postcss-loader": "^3.0.0",
     "style-loader": "^1.0.2",
     "uglifyjs-webpack-plugin": "^2.2.0",
     "url-loader": "^2.2.0",
     "webpack": "^4.41.6",
     "webpack-cli": "^3.3.9",
     "webpack-dev-server": "^3.8.2"
   },
node 17
“node-sass”: “^4.7.2”,
“sass-loader”: “^7.3.1”,
---------------
node 16.13.0
“node-sass”: “^6.0.1”,
“sass-loader”: “^10.2.0”,
-----------------
node 版本为：v14.19.0
"node-sass": "^4.14.1"
"sass-loader": "^7.3.1"
----------------
使用npm install sass-loader@8.0.2 sass@1.26.5 --save-dev
用sass 代替 node-sass 可解决找不到对应的版本问题
   "dependencies": {
     "@babel/polyfill": "^7.12.1",
     "@babel/runtime": "^7.13.10",
     "axios": "^0.19.2",
     "vue": "^2.6.12"
   },
   "browserslist": [
     " 1%",
     "last 2 versions"
   ]
 }
---------------------------
 let path = require('path'),
 HtmlWebpackPlugin = require('html-webpack-plugin'),
 MiniCssExtractPlugin = require("mini-css-extract-plugin"),
 OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"),
 UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output: {
       filename:"bundle.min.[hash].js",
       path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port:3000,
        contentBase: path.resolve(__dirname,'dist'),
        progress: true,
        open:true
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsWebpackPlugin(),
            new UglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap:true
            })
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html' 
        }),
        new MiniCssExtractPlugin({
            filename:"bundle.min.[hash].css"
        })
    ],
    module:{
      rules:[
         {
          test:/\.(css|less)$/i,
          use:[MiniCssExtractPlugin.loader,"css-loader",{
              loader:"postcss-loader",
              options: {
                  ident:'postcss',
                  plugins: [require("autoprefixer")]
              }
          },"less-loader"]
         },
         {
          test: /\.js$/i,
          exclude:/node_modules/,
          include:path.resolve(__dirname,'src'),
          use:[
            {
             loader:"babel-loader",
             options:{
                 presets:["@babel/preset-env"], 
                 plugins:["@babel/plugin-transform-runtime"]
             } 
            }
          ]
         },
         {
          test: /\.(png|jpg|jpeg|gif|ico|webp|bmp)$/i,
          use:[
            {
             loader:"url-loader",
             options: {
                 limit: 100 * 1024,
                 outputPath:"/images"
             }
            }
          ]
         },
         {
          test:/\.(html|xml|htm)$/i,
          use:["html-withimg-loader"]
         }
        ]
    }
 }
--------------------
   

 配置自定义打包规则 

 1 所有规则 都写在  module.exports = { } 中
  let path = require('path');
  let HtmlWebpackPlugin = require('html-webpack-plugin');
  // 抽离 css 内容 
  let MiniCssExtractplugin = require('mini-css-extract-plugin');
  // 压缩 css 代码
  let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
  // 压缩js
  let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
  
  let webpack = require('webpack')
  
  module.exports = { 

    // 配置 优化规则
    optimization: {
     //  设置压缩方式
     minimizer:[
         // 压缩css (产生的问题: js压缩不再执行自己默认的压缩方式,
         // 也走的是这个插件，从而导致无法压缩)
         new OptimizeCssAssetsWebpackPlugin(),
         // 压缩 js
         new UglifyjsWebpackPlugin({
             cache: true, // 是否使用缓存
             parallel: true, // 是否 是并发编译
             sourceMap: true // 是否源码映射(方便调试)
         })
     ]
    },
    //  production - 压缩模式  development
    mode:'production',
    // 入口
    // entry:["@babel/polyfill","./src/index.js"], 
    entry: "./src/index.js",  
    // 出口
    output:{ 
     // 输出的目录必须是绝对路径
     path: path.resolve(__dirname,'dist'),
     // 输出的文件名 bunlid.min.[hash].js 让每一次生成的文件名都带着 hash值
     filename:'js/bunlid.min.[hash].js',
     // 给编译后 引用资源地址前面设置的前缀
     publicPath:'./'
    },
    // 服务配置
    devServer: {
     // 端口号
     // prot: 8082, 
     // // 显示打包编译进度状态
     // progress: true,
     // // 指定当前服务处理资源的目录
      contentBase: path.resolve(__dirname,'dist'),
     // // 编译完成自动打开浏览器
      open:true,
      historyApiFallback: true 
    },
    // 使用数组
    plugins:[
      new HtmlWebpackPlugin({
       // 自己定义的html 模板
       template:'./src/index.html' ,
       // 输出后的文件名
       //  filename:'index.[hash].html',
       filename:'index.html',
       //  js后面加 hash（清除缓存）
       // hash: true 
       // 控制压缩
       minify:{
         // 去除空格
         collapseWhitespace: true, //删掉空格
         removeComments: true, //删掉注释
         removeAttributeQuotes: true, //干掉标签上的属性的引号
         removeEmptyAttributes: true //干掉标签上的空属性
       }
      }),
      new MiniCssExtractplugin({
          // 指定输出的文件名 
          filename: 'css/main.min.css'
      }),
      // 向每个 模块中注入全局变量 
       new webpack.ProvidePlugin({
          $: 'jquery'
      })
    ],
 
    // 使用加载器 loader 处理规则
  module:{
   rules:[
     {
     // 基于 正则匹配处理哪些文件
     test:/\.(css|less)$/i, 
     // 控制器使用的 loader (有顺序的：从右到左编译)
     use:[
         // 把编译好的 css  插入到 页面的 head 中 （内嵌式）
         // "style-loader",
         // 把编译好的 css  插入到 页面的 head 中 (link 方式)
          MiniCssExtractplugin.loader,
         // 编译 @import/url() css 语法 
         "css-loader", 
         // 设置前缀
         {
             loader:"postcss-loader" 
         },
         // 编译 less
         {
             loader:"less-loader",
             options:{
                 importLoaders:1
             }
         }  
     ]
     },
     {
         test:/\.js$/i,
         // 编译 js 的 loadber
         use:[
             {
               loader:'babel-loader',
             //   options: {
             //     // 基于 babel 的语法解包 (es6-es5)
             //     presets:["@babel/preset-env"],
             //     // 基于插件处理 es6/es6 中class 的特殊语法
             //     plugins:[
             //         ["@babel/plugin-proposal-decorators",{
             //             "legacy":true
             //         }],
             //         ["@babel/plugin-proposal-class-properties",{
             //             "loose":true
             //         }],
             //         "@babel/plugin-transform-runti
             //     ]
             //   }
             }
         ],
         exclude:'/node_modules',
         include:path.resolve(__dirname,'src')
     },
     {
         test: /\.(png|jpg|jpeg|gif|ico|webp|bmp)$/i,
         use: [
             {
                 loader: 'url-loader',
                 options: {
                     limit: 1 * 1024,// = 只要图片小于200kb，一律转为base64
                     outputPath: 'images' //= 图片放在images/下 
                 }
             },
             // 'eslint-loader' //需要先安装eslint eslint-loader
         ]
     },
     {
         //= 处理html中引入的图片的地址
         test:/\.(html|htm)$/i,
         use:'html-withimg-loader',
     }
    ]
  }
 }
```
经常使用的几个插件地址汇总：
mini-css-extract-plugin 样式提取插件
optimize-css-assets-webpack-plugin 样式优化压缩/配合添加前缀等
html-webpack-plugin 生成入口文件，并注入依赖
uglifyjs-webpack-plugin js压缩
preload-webpack-plugin 资源预加载
webpack-bundle-analyzer 可视化编译分析
copy-webpack-plugin 文件拷贝
BannerPlugin 给文件开头处添加注释
typings-for-css-modules-loader
awesome-typescript-loader

------------------

