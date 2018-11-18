const zlib = require('zlib')
const fs = require('fs');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('./handlebars.min.js');
const out = fs.createWriteStream('./handlebars.min.js.gz');

inp.pipe(gzip).pipe(out);


//zlib模块提供通过 Gzip 和 Deflate/Inflate 实现的压缩功能
//压缩或者解压数据流(例如一个文件)通过zlib流将源数据流传输到目标流中来完成。