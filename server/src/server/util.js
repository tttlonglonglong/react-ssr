import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import routes from '../Routes'
import getStore from '../store'

export const render = (store, routes, req) => {
  // 如果在这里获取数据，能拿到数据，并且填充到store中
  // store里面需要填充什么，不知道，需要结合当前用户请求地址和路由，做判断
  // 如果用户访问 / 路径， 就拿home组件的异步数据
  // 如果 用户访问login， 就拿login组件的异步数据

  console.log('store.getState', store.getState())
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  )
  return `<html>
        <head>
          <title>ssr</title> 
        </head>
        <body>
         <div id="root">${content}</div>
         <script>
          window.context= {
            state:${JSON.stringify(store.getState())}
          }
         </script>
         <script src='/index.js'></script>
        </body>
      </html>`
  // routes.some(route => {
  // matchPath: 只能匹配一层路由
  //   // const match = matchPath(req.path, route)
  //   if (match) {
  //     matchedRoutes.push(route)
  //     // promises.push(route.loadData(match))
  //     // return match
  //   }
  // })

  // 让matchRoutes里面所有的组件,对应的loadData 方法执行一次
  // console.log('server端匹配到的路由', matchedRoutes)
}
