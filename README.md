# 目录结构

```
react-ssr/
    |
    |──back-server/                            * 模拟后端服务器
    |
    |──front-ssr/                              * ssr前端目录
    |     |
    |     |—— build/                           * serve端打包的js
    |     |—— public/                          * client端打包的js
    |     |—— src/                             *
    |         |—— client/                      * 客户端渲染的代码
    |         |—— components/                  * 组件代码
    |         |—— container/                   * page
    |         |—— server/                      * 服务端渲染代码
    |         |—— store/                       * redux的store
    |         |—— Routes/                      * 路由配置
    |
    |
    |──webpack.config.base.js                  * 基础的的webpack配置文件
    |──webpack.config.client.js                * 客户端渲染使用的webpack配置文件
    |──webpack.config.server.js                * 服务端渲染使用的webpack配置文件
```
