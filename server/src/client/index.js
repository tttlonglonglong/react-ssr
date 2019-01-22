import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '../Routes'
import { getClientStore } from '../store'
// console.log('module.hot', module.hot)
// const renderMethod = module.hot ? ReactDom.render : ReactDom.hydrate
const store = getClientStore()
console.log('客户端获取到的sotre', store)
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

// hydrate: 代码既在服务器渲染一遍，又在客户端上渲染一遍，如果做同构的话，这里不能用render函数
ReactDom.hydrate(
  <App suppressHydrationWarning={true} />,
  document.getElementById('root')
)
