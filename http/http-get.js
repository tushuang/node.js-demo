const http = require('http')

let target_url = 'http://api.douban.com/v2/movie/in_theaters'

//因为大多数请求都是 GET 请求且不带请求主体，所以 Node.js 提供了该便捷方法。
// 该方法与 http.request() 唯一的区别是它设置请求方法为 GET 且自动调用 req.end()。
http.get(target_url,(res) => {

    res.setEncoding('utf-8')
    res.on('data',function(chunk){
        console.log(chunk);   //chunk是一个buffer的数据格式 可以利用res.setEncoding('utf-8') 转化成字符串
    })

    res.on('end',function(){
        console.log('done');
    })
})