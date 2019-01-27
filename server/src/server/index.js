import express from 'express'
import proxy from 'express-http-proxy'

import { matchRoutes } from 'react-router-config'

import { render } from './util'
import routes from '../Routes'
import { getStore } from '../store'
import { rejects } from 'assert'

const app = express()

//静态文件的处理
app.use(express.static('public'))

// 服务器端的代理
// 请求的是api 路径下的内容的时候，使用proxy
// req.url = news.json?secret=abcd
// proxyReqPathResolver:  /ssr/api/new.json
// 代理的最终的地址： localhost:3002 + proxyReqPathResolver

app.use(
  '/api',
  proxy('localhost:3002', {
    proxyReqPathResolver: function(req) {
      console.log('代理服务器获取到的url', req.url)
      return '/ssr/api' + req.url
      // var parts = req.url.split('?')
      // var queryString = parts[1]
      // var updatedPath = parts[0].replace(/test/, 'tent')
      // return updatedPath + (queryString ? '?' + queryString : '')
    }
  })
)

app.get('*', function(req, res) {
  console.log('服务器获取到的资源路径----》', req.get('cookie'))
  const store = getStore(req)

  // 根据路由的路径， 来往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path)

  // 异步的获取数据的loadData
  const promises = []

  // console.log('routes', routes)
  // console.log('matchedRoutes', matchedRoutes)
  matchedRoutes.forEach(item => {
    // console.log('item.route.loadData', item.route.loadData)
    if (item.route.loadData) {
      const promise = new Promise((resolve, rejects) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve)
      })
      // promises 内部加载的数据，不管成功还是失败，最终promises 都会触发 all 方法
      promises.push(promise)
      // promises.push(item.route.loadData(store))
    }
  })

  //数据请求失败的情况处理
  // 一个页面要加载 A，B，C，D四个组件，这四个组件都需要服务端加载数据
  //假设A组件加载数据错误
  //B，C，D 组件有几种情况
  //1. B，C，D组件数据已经加载完成, store会有B，C，D的数据，调用catch方法，B/C/D的内容都会被正确显示
  //2. 假设B，C，D接口比较慢，B，C，D的组件没有加载完成，BCD处理pending状态，A出错直接走到catch的逻辑里面，BCD的内容无法展示

  // promises= [a, b, c, d]
  Promise.all(promises)
    .then(() => {
      // console.log('server-loadData', promises)
      // console.log('ssr-html', render(store, routes, req))
      const context = {}
      const html = render(store, routes, req, context)
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else if (context.NOT_FOUND) {
        res.status(404)
        res.send(html)
      } else {
        res.send(html)
      }
      console.log('渲染后的context----', context)
    })
    .catch(() => {
      // res.send('sury， request error')
      const context = {}
      const html = render(store, routes, req, context)
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else if (context.NOT_FOUND) {
        res.status(404)
        res.send(html)
      } else {
        res.send(html)
      }
    })
  // render(req) 是异步的渲染
  // res.send(render(store, routes, req))
  // res.send(render(req))
})

var server = app.listen(3000)
console.log('server port 3000')
