


const fs = require('fs')



let mk_one = new Promise(resolve => {
    fs.mkdir('javascripts', () => { 
        resolve('javascripts done.')
        console.log('1')
    })
})

let mk_two = new Promise(resolve => {
    fs.mkdir('stylesheets', () => { 
        resolve('stylesheets done.')
    })
})

// console.log(mk_one, mk_two)

// .........

// let mk_one = () => {
//     return new Promise(resolve => {
//         fs.mkdir('javascripts', () => {    
//             resolve('javascripts')
//         })
//     })
// }


// let mk_two = () => {
//     return new Promise(resolve => {
//         fs.mkdir('stylesheets', () => {    
//             resolve('stylesheets')
//         })
//     })
// }


// (async () => {

//     let one = await mk_one()
//     let two = await mk_two()

//     console.log(one, two)

// })()

// 并行
// Promise.all([ mk_one(), mk_two() ]).then((data) => {
//     console.log(data)  //把两个函数放回的数整合成数组
// })

// 并行 比赛。。。
// Promise.race([ mk_one(), mk_two() ]).then((data) => {
//     console.log(data) //那个运行快输出谁 
// })

