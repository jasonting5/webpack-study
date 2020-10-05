const { resolve } = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // use数组中loader执行顺序是从右到左，从下到上依次执行
          'style-loader', // 创建style标签，将js中的样式资源插入行，添加到head中生效
          'css-loader', // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
        ],
      },
      {
        test: /\.less$/,
        use: [
          // use数组中loader执行顺序是从右到左，从下到上依次执行
          'style-loader', // 创建style标签，将js中的样式资源插入行，添加到head中生效
          'css-loader', // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'less-loader', // 将less文件编译成css文件
        ],
      },
    ],
  },
  mode: 'development',
}
