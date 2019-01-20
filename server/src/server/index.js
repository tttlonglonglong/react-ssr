import express from 'express'
import { render } from './util'
const app = express()

//静态文件的处理
app.use(express.static('public'))

app.get('*', function(req, res) {
  console.log('服务器获取到的资源路径----》', req.path)
  res.send(render(req))
})

var server = app.listen(3000)
console.log('server port 3000')
