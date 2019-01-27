const express = require('express')
var Mock = require('mockjs')

const app = express()
app.all('*', function(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase() == 'options') res.send(200)
  //让options尝试请求快速结束
  else next()
})
app.get('/ssr/api/login.json', function(req, res) {
  var data = {
    success: true,
    data: { login: true }
  }
  res.send(data)
})
app.get('/ssr/api/isLogin.json', function(req, res) {
  var data = {
    success: true,
    data: { login: false }
  }
  res.send(data)
})
app.get('/ssr/api/logout.json', function(req, res) {
  var data = {
    success: true,
    data: { login: false }
  }
  res.send(data)
})
app.get('/ssr/api/transiations.json', function(req, res) {
  var paragraph = Mock.mock({
    'list|5': [
      {
        'id|+1': 1,
        title: '@ctitle(5,12)',
        name: '@cparagraph(50,150)'
      }
    ]
  })
  var data = {
    success: true,
    data: paragraph
  }
  res.send(data)
})

app.get('/ssr/api/news.json', function(req, res) {
  var data = Mock.mock({
    'list|5': [
      {
        'id|+1': 1,
        // name: '@cname'，
        name: '@cname'
      }
    ]
  })
  res.send(data)
})

var server = app.listen(3002)
console.log('server port 3002')
