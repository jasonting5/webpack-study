const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExxtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //'style-loader',
          // 作用是取代style-loader，提取js中的css成单独的文件
          MiniCssExxtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
  plugins: [
    new HtmlWebpackPlugin({
      // 复制'./src/index.html'文件，并自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html',
    }),
    new MiniCssExxtractPlugin({
      // 对输出文件进行重命名
      filename: 'css/main.css',
    }),
  ],
  mode: 'development',
}
