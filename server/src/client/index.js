import React from 'react'
import ReactDom from 'react-dom'

import Home from '../container/Home'
// hydrate: 代码既在服务器渲染一遍，又在客户端上渲染一遍，如果做同构的话，这里不能用render函数
ReactDom.hydrate(<Home />, document.getElementById('root'))
