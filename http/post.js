
const http = require('http')
const querystring = require('querystring')

// 定义了发送的数据
const postData = querystring.stringify({
    'msg' : 'Hello Node.js' + Date.now()
});
  
  const options = {
    hostname: 'localhost',
    port: 1212,
    path: '/commit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  
    const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        //从服务器得到数据
        let _result = ''
        res.on('data', (chunk) => {
          _result += chunk
        });
        res.on('end', () => {
            console.log(postData);
          console.log(_result)
        });
    
    });
      
    req.on('error', (e) => {
      console.error(`请求遇到问题: ${e.message}`);
    });
    
    // 写入数据到请求主体
    req.write(postData); 
    req.end();  
  

