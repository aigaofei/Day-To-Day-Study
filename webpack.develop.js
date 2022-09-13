const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(baseConfig,developWebpackConfig)

const developWebpackConfig = {
// CopyPlugin是将项目里的某些文件不经过打包就放到dist里比如图片尤其是视频和音频
// 图片一般不会用// const CopyWebpackPlugin = require('copy-webpack-plugin')

// BannerPlugin 占位插件-作用：在dist里bundle文件头部开始出加入项目备注；
// 如：这是移动微信项目-属于蓝天集团

// 多页应用打包----有些大型项目企业用多页开发
// 就是在 entry里写多个入口地址 【注意：它会和css的打包压缩抽离有冲突】
// entry: {
//   index: './src/index.js',
//   other: './other/index.js'
// }
// output:{
//   path: path.join(__dirname, './dist')
//   filename: '[name].js'  //name代表多个入口的名字
//   publicPath: '/'
// }
// html文件也要对应创建多个，并且htmlWebpackPlugin也要处理写对应多个，名字不同
// new HtmlWebpackPlugin({
//   chucks: ['index'],
//   template: path.join(__dirname, 'index.html'),
//   filename: 'index.html'
// })
// new HtmlWebpackPlugin({
//   chucks: ['other'],
//   template: path.join(__dirname, 'other.html'),
//   filename: 'other.html'
// })

// providerPlugin 作用是：将公共常用的工具包【自动】导入导出到使用的文件中-jQuery。。。
// 安装 expose-loader ，---全局注入
// modules: {
//   rules:[{test:require.resolve('jquery'),
//         use:{loader:'expose-loader',
//         options: '$'
//   }}] 
// }
// 【或】这样配置--推荐-【私有注入s】需要的文件里--打包时--自动单独导入
// ----内置了providerPlugin功能，分别对应注入
// 不需导入直接配置：
// new webpack.providePlugin({
//   $: 'jquery',
//   jQuery: 'jquery'
// })



  mode: "development",
  // watch: true,
  devServer: {
    open: true,
    hot: true,
    // contentBase: path.join(__dirname, './src'),
    port: 8088,
    proxy: {
      // 1- 转发配置：但请求api路径时，自动转到【http://localhost:9999/api】地址
      // 或是 ‘/api/user’: ...,自动转到【http://localhost:9999/api/user】 地址
      '/api': 'http://localhost:9999',

      // 2- 当请求路径是：'http://localhost:9999/api/v1/getUserInfo'，不需要api，
      // 方法一：'/getUserInfo': 'http://localhost:9999',
      // 方法二：pathRewrite是路径重写，遇到api开头的，换成空，后边路径保留不变
      // 变为：'http://localhost:9999/v1/getUserInfo'，
      // '/api': {
      //   target: 'http://localhost:9999',
      //   'pathRewrite': '{^/api, ""}'
      // },

      // 3- 默认情况下不接受运行在 HTTPS 上并使用了无效证书的后端服务器。
      // 如果你想要接受，修改配置如下：
      // "/api": {
      //   target: "https://other-server.example.com",
      //   secure: false
      // }
    }
  },
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
     // 这里是解决【httpUtils文件】里的【主机名自动按需执行查找】匹配执行
    //  因为是开发执行所以用【npm run web】执行，会自动调用【开发域名】
    //这里只是测试用法--开发时用
    new webpack.DefinePlugin({
      Develop_C: 'true'
      // test: '1+1'--都会按照字符串格式解析变量
    })
  ],
  module: {
    rules: [
      {test:/\.m?js$/, 
        use: ['babel-loader', 'source-map-loader'],
        enforce: 'pre', 
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader' , 'css-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', "postcss-loader",'sass-loader']
      },
      {
        test:/\.less$/,
        use: ['style-loader', 'css-loader',"postcss-loader", 'less-loader']
      },
      {
        test:/\.(png|jpg|gif|jpeg|bmp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4 * 1024,
            outputPath: 'imgs',
            name: '[name]-[hash:6].[ext]'
          }
        }
      },
      {
        test:/\.(woff|woff2|eot|svg|ttf)$/,
        use: 'url-loader'
      }
    ]
  },
}

