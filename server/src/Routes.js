// import React from 'react'
// import { Route } from 'react-router-dom'

import Home from './container/Home'
import Translation from './container/Translation'
import NotFound from './container/NotFound'
import App from './App'

// console.log('Home.loadData', Home.loadData)
export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        key: 'home',
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData
        // 测试多级路由匹配
        // routes: [
        //   {
        //     key: 'ttt',
        //     path: '/login',
        //     component: Login,
        //     exact: true
        //   }
        // ]
      },
      {
        key: 'transition',
        path: '/transition',
        component: Translation,
        exact: true,
        loadData: Translation.loadData
      },
      {
        key: 'notFound',
        // path: '/notFound',
        component: NotFound,
        exact: true
        // loadData: NotFound.loadData
      }
    ]
  }
]

// export default (
//   <div>
//     <Route path="/" component={Home} />
//     <Route path="/login" component={Login} />
//   </div>
// )
