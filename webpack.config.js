const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  // watch: true,
  devServer: {
    open: true,
    hot: true,
    // contentBase: path.join(__dirname, './src'),
    port: 8088
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {test:/\.m?js$/, 
        use: ['babel-loader', 'source-map-loader'],
        enforce: 'pre', 
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader' , 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ]
}

