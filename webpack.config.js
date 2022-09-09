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
  module: {
    rules: [
      {test:/\.m?js$/, use: 'babel-loader', exclude:/node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ]
}

