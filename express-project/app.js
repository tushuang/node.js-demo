const express = require('express')
const bodyParser = require('body-parser')
const cookieParder = require('cookie-parser')
const app = express()

//  如果我们请求的路径是以static开头的，express就认为这是再请求静态资源，express就会将其导向到public中
app.use('/static',express.static('public'))  //管理静态文件

// 解析form-data数据
app.use(bodyParser.urlencoded({ extended: false }))
// 解析request payloads
app.use(bodyParser.json())
app.use(cookieParder())
  
//引入路由器
const api = require('./router/api')   //处理数据请求
const html = require('./router/index')  //处理页面请求

app.use('/api',api)
app.use('/',html)


app.listen(3000,()=>{
    console.log('server is listening')
})
