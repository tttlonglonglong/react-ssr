import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../container/Home'
// ReactDOM.render(<Home />, document.getElementById('root'))
//

const app = express()

//静态文件的处理
app.use(express.static('public'))

const content = renderToString(<Home />)

app.get('/', function(req, res) {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
       <div id="root">${content}</div>
       <script src='/index.js'></script>
      </body>
    </html>
  `)
})

var server = app.listen(3000)
console.log('server port 3000')
