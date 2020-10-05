const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // use数组中loader执行顺序是从右到左，从下到上依次执行
          'style-loader', // 创建style标签，将js中的样式资源插入行，添加到head中生效
          'css-loader', // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'less-loader', // 将less文件编译成css文件
        ],
      },
      {
        // 处理图片资源
        // 处理不了html中的img图片
        test: /\.(jpg|png|gif|jpeg)$/,
        // 使用一个loader
        // 下载url-loader，file-loader（url-loader依赖于file-loader）
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb,就会被base64处理
          // 优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 因为url-loader默认使用es6模块化，而html-loader引入图片是commonjs, 解析时会出问题
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片hash的前十位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]',
        },
      },
      {
        test: /\.html$/,
        // 处理html文件中的img图片（负责引入img,从而能被url-loader进行处理）
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
}
