const http = require('http')
const fs = require('fs-extra')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html;charset:utf8'})
        res.end(fs.readFileSync('./index.html'))
    }else if(req.url === '/handlebars.min.js.gz'){
        res.writeHead(200,{'content-encoding':'gzip'})
        res.end(fs.readFileSync('handlebars.min.js.gz'))  //fs可以读取gz文件 注意content-encoding : gzip
    }else{
        res.end('gun')
    }
})
 
server.listen('1212',()=>{
    console.log('server is listening')
})