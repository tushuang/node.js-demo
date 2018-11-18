const server = require('http').createServer(handler)
const fs = require('fs')
const EventEmitter = require('events')
const wss = require('socket.io')(server)

class BroadCast extends EventEmitter{}

broadcast = new BroadCast()

function handler( req , res ){
    if(req.url == '/'){
        res.writeHead(200, { 'content-type': 'text/html;charset=utf8' })
        res.end(fs.readFileSync('./index.html'))
    }else if(req.url == '/socket.io.js'){
        res.writeHead(200,{ 'content-type':'application/javascript' })
        res.end(fs.readFileSync('./socket.io.js'))
    }
    
}

// const wss = new io.Server({server})

const client_map = {}
let count = 0

wss.on('connection',(ws)=>{
    console.log('链接成功')
    count++
    ws.id = count
    ws.nickname = '新朋友' + ws.id
    client_map[ws.id] = ws
    ws.on('message',(msg)=>{
        let {id,word} = JSON.parse(msg)   //得到客户端发来的消息 再分别发给每个客户端
        let message = {
            id :ws.id,
            nickname:(id||ws.nickname),
            word
        }
        console.log(message)
        broadcast.emit('cast',message)
    })

    ws.on('disconnect', () => { // 给链接上的客户端socket绑定事件，当这个客户端发送过来信息的时候触发
        delete client_map[ws.id] // 干掉断开链接的客户端
    })
})


broadcast.on('cast',(message)=>{
    for(const id  in client_map){
        message.isMe = (id == message.id)
        client_map[id].send(JSON.stringify(message))
    }
})

server.listen(8000,()=>{
    console.log('server is listening')
})