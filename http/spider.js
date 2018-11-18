const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio')
const options = {
    hostname:'www.qfedu.com',
    port:80,
    path:'/',
    method:'GET'
};

const req = http.request(options,(res)=>{

    res.setEncoding('utf-8')  //设置请求回来的数据读取的方式
    let _result = ''
    res.on('data',(chunk)=>{  //每次的chunk只是一小个数据片段 得到请求的数据后拼接
        _result += chunk
    })
    res.on('end',()=>{
       let _data =  handler(_result);
       fs.writeFile('./classes.json',JSON.stringify({classes:_data}),()=>{
           console.log('done');
       })
    })
})


const handler = (html) => {
    let $ = cheerio.load(html)

    let _result = []

    $('.xq_list a').each((i, item) => {

        _result.push($(item).text());
 
    })
    console.log(_result);
    return _result
}

req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
});
req.end();