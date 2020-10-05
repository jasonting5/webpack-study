const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build'),
  },
  // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
  plugins: [
    new HtmlWebpackPlugin({
      // 复制'./src/index.html'文件，并自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html',
    }),
  ],
  mode: 'development',
}
