module.exports = {
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
