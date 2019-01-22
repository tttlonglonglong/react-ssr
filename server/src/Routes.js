// import React from 'react'
// import { Route } from 'react-router-dom'

import Home from './container/Home'
import Login from './container/Login'

// console.log('Home.loadData', Home.loadData)
export default [
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
    key: 'login',
    path: '/login',
    component: Login,
    exact: true
    // loadData: Login.loadData()
  }
]

// export default (
//   <div>
//     <Route path="/" component={Home} />
//     <Route path="/login" component={Login} />
//   </div>
// )
