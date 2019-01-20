import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../Routes'
import getStore from '../store'

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  )
}

// hydrate: 代码既在服务器渲染一遍，又在客户端上渲染一遍，如果做同构的话，这里不能用render函数
ReactDom.hydrate(<App />, document.getElementById('root'))
