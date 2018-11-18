
const http = require('http')
const fs = require('fs')
const qs = require('querystring')

// http://localhost:300/commit

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf8' })

    if ( req.url === '/douloveme' ) {
        res.end('no');
    }
    
    if ( req.url === '/commit' && req.method === 'POST' ) {

        // 取出post传递过来的数据
        let _body = ''
        req.on('data', (chunk) => {
            _body += chunk
        })
        req.on('end', (chunk) => {
            console.log(_body)
            // 得到请求的数据
            fs.appendFileSync('./commits.txt', qs.parse(_body).msg + ' \r\n ')
        })

        

        res.end(JSON.stringify({ data: 'ok', err: null }))  //返回给post请求的信息
    }else {
        res.end(JSON.stringify({ data: null, err: null }))
    }
})

server.listen(1212, () => {
    console.log('server is listening')
})



