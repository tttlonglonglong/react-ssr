// 服务器端，服务器端不需要把 path 包的内容打包到webpack 最终生成的文件里
const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')

const clientConfig = {
  //webpack 打包的环境，不需要把 path 包的内容打包到webpack 最终生成的文件里
  // target: 'node',
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    // 输出路径，根目录下的build
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
}
module.exports = merge(config, clientConfig)
