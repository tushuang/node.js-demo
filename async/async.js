const async = require('async')  //需要下载

//串联无关 


//逻辑函数不能写箭头函数
// async.series([
//     function(callback){
//         setTimeout(()=>{ //callback代表第二个函数
//             console.log('1')
//             callback('break','one')  //第一个参数是错误信息  参数都给最后一个函数接收
//             //一个函数出错影响后面函数的执行
//         },10)
//     },
//     function(callback){
//         setTimeout(()=>{
//             console.log('2');
//             callback(null,"two")
//         },1000)
//     },
//     function(callback){
//         setTimeout(()=>{
//             console.log('3');
//             callback(null,'three')
//         },100)
//     }],
//     function(err,result){   //最后一个总结函数写在外面
//         console.log(err,result,'done')
//     }
// )


//串联有关  瀑布流


// async.waterfall([
//     function(callback){
//         setTimeout(()=>{ //callback代表第二个函数
//             console.log('1')
//             callback(null,'one')  //第一个参数是错误信息  参数都给最后一个函数接收
//             //一个函数出错影响后面函数的执行
//         },10)
//     },
//     function(param,callback){   //接受上一个函数传下来的信息
//         setTimeout(()=>{
//             console.log('2');
//             callback(null,param+"two")
//         },1000)
//     },
//     function(param,callback){
//         setTimeout(()=>{
//             console.log('3');
//             callback(null,param+'three')
//         },100)
//     }],
//     function(err,result){   //最后一个总结函数写在外面
//         console.log(err,result,'done')
//     }
// )

//并联无关
//所有函数执行完后才会执行最后一个总结函数 
//如果有函数出错也会直接执行最后一个函数 但不影响其他函数的执行

async.parallel([    //所有函数平行运行 是异步的 一个出错也不会影响下一个 
    function(callback){
        setTimeout(()=>{ //callback代表最后一个函数
            console.log('1')
            callback('s','one')
           //第一个参数是错误信息  参数都给最后一个函数接收
            //一个函数出错'不'影响后面函数的执行
        },1000)
    },
    function(callback){   //接受上一个函数传下来的信息
        setTimeout(()=>{
            console.log('2');
            callback(null,'o')
        },100)
    },
    function(callback){
        setTimeout(()=>{
            console.log('3');
            callback(null,'e')
        },10)
    }],
    function(err,result){   //最后一个总结函数写在外面
        console.log(err,result,'done')
    }
)


