// 服务器端，服务器端不需要把 path 包的内容打包到webpack 最终生成的文件里
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')

const serverConfig = {
  //webpack 打包的环境，不需要把 path 包的内容打包到webpack 最终生成的文件里
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    // 输出路径，根目录下的build
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'isomorphic-style-loader',
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

// 浏览器端(客户端)，需要把path所有包的内容，都打包到最终生成的bundle.js中
module.exports = merge(config, serverConfig)
