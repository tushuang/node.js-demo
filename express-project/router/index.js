const express = require('express')
const PATH = require('path')
const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile( PATH.resolve( __dirname , '../view/index.html') )
})

module.exports = router