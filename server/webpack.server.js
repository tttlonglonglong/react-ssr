// 服务器端，服务器端不需要把 path 包的内容打包到webpack 最终生成的文件里
const path = require('path')
const nodeExternals = require('webpack-node-externals')

// 浏览器端(客户端)，需要把path所有包的内容，都打包到最终生成的bundle.js中
module.exports = {
  //webpack 打包的环境，不需要把 path 包的内容打包到webpack 最终生成的文件里
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 输出路径，根目录下的build
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // env : 打包环境配置，兼容所有主流浏览器的最后俩个版本
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                target: {
                  browsers: ['last 2 versons']
                }
              }
            ]
          ]
        }
      }
    ]
  }
}
