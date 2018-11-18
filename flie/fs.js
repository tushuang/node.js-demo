const fs = require('fs')

// 创建目录
fs.mkdir('./logs', (err) => {  //利用回调函数来捕捉错误
    console.log(err, 'done.')
})
console.log('11')


// 创建文件并写入内容 会重写
// fs.writeFile('./logs/log.txt', 'Hello World', (err) => {
//     console.log('done')
// })
// 追加
// fs.appendFile('./logs/log.txt', 'Hello World', (err) => {
//     console.log('done')
// })


// 读取文件的内容
// fs.readFile('./logs/log.txt', 'utf8',(err, data) => {
//     console.log(err, data)
//     console.log('done')
// })

// 删除文件和目录
// fs.unlink('./logs/log.txt', (err) => {
//     console.log('done')
// })
// fs.rmdir('./logs', (err) => {
//     console.log('done')
// })