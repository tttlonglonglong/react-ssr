import express from 'express'
import { matchRoutes } from 'react-router-config'

import { render } from './util'
import routes from '../Routes'
import { getStore } from '../store'

const app = express()

//静态文件的处理
app.use(express.static('public'))

app.get('*', function(req, res) {
  console.log('服务器获取到的资源路径----》', req.path)
  const store = getStore()

  // 根据路由的路径， 来往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path)

  // 异步的获取数据的loadData
  const promises = []

  // console.log('routes', routes)
  // console.log('matchedRoutes', matchedRoutes)
  matchedRoutes.forEach(item => {
    // console.log('item.route.loadData', item.route.loadData)
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    console.log('ssr-html', render(store, routes, req))
    res.send(render(store, routes, req))
  })
  // render(req) 是异步的渲染
  // res.send(render(req))
})

var server = app.listen(3000)
console.log('server port 3000')
