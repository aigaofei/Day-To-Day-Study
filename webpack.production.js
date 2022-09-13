const { merge } = require('webpack-merge')
const baseWebpack = require('./webpack.base.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = merge(baseWebpack, {
  mode: "production",
  module: {
    rules: [
      
    ],
  },
  module: {
    rules: [
      {
        test:/\.m?js$/, 
        use: ['babel-loader', 'source-map-loader'],
        enforce: 'pre', 
        exclude:/node_modules/
      },
      {
        test: /\.css$/i,
        use:[
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "/css/",
              },
            },
            "css-loader",
            'postcss-loader'
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/css/",
            },
          },
          'css-loader', 
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"]
              }
            }
          }, 
          'sass-loader'
        ]
      },
      {
        test:/\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/css/",
            }
          },
          'css-loader',
          // {
          // loader: "postcss-loader",   自动添加css各浏览器的前缀
          // options: {
          //   postcssOptions: {
          //     plugins: ["postcss-preset-env"]
          //     // plugins: require('postcss-preset-env')({
          //     //   autoprefixer: {
          //     //       flexbox: 'no-2009'
          //     //   },
          //     //   stage: 3
          //     // })
          //   }
          // }
          // }, 或用下面的格式代替，
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: ["autoprefixer"]
          //     },
          //   },
          // },
          // 或者---根目录下【创建postcss.config.js文件配置】--【老师写法】
          // autoprefixer 工具 代替这里的options配置
          // 只写： "postcss-loader",
          'postcss-loader',
          'less-loader'
        ]
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
  plugins: [
    // 这里是解决【httpUtils文件】里的【主机名自动按需执行查找】匹配执行
    //  因为是开发执行所以用【npm run build】执行，会自动调用【发布上线域名】
    //【这里只是自己开发完测试的用法，实际会交给测试人员部署】
    new webpack.DefinePlugin({
      Develop_C: 'false'
      // test: '1+1'--都会按照字符串格式解析变量
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
})



