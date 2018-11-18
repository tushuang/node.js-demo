const http = require('http')
const WebSocket = require('ws')
const fs = require('fs')
const EventEmitter = require('events')
// const io = require('socket.io')

class BroadCast extends EventEmitter{}

broadcast = new BroadCast()

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf8' })
    res.end(fs.readFileSync('./index.html'))
})

const wss = new WebSocket.Server({server})

const client_map = {}
let count = 0

wss.on('connection',(ws)=>{
    console.log('链接成功')
    count++
    ws.id = count
    ws.nickname = '新朋友' + ws.id
    client_map[ws.id] = ws
    ws.on('message',(msg)=>{
        let {nickname,word} = JSON.parse(msg)   //得到客户端发来的消息 再分别发给每个客户端
        let message = {
            id :ws.id,
            nickname:(nickname||ws.nickname),
            word
        }
        broadcast.emit('cast',message)
    })

    ws.on('close', () => { // 给链接上的客户端socket绑定事件，当这个客户端发送过来信息的时候触发
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