const express = require('express')

const router = express.Router()

router.use((req,res,next)=>{
    console.log('router res')
    next();
})

// router.get('/:id',(req,res)=>{
//     res.json({mes:'tutu',id:req.params})
// })

router.get('/student/id',(req,res)=>{  //?ab=2&c=4
    let msg = { id:1,name:"tutu", ad:req.query}  //req.query可以解析这样的参数
    res.send(msg)
})

router.all('/data',(req,res)=>{  //发送得到的数据
    console.log( req.cookies)
    res.json({ data : req.cookies })  //放回的是一个json数据
    //当传递对象或数组时，这两个方法是相同的，但是res.json()也会转换非对象，如null和undefined，这些无效的JSON
})

module.exports = router