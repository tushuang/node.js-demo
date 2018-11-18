const EventEmitter = require('events')  //该模块是一个对象

// class MyEventEmitter extends EventEmitter {}  //继承方法

// var event = new MyEventEmitter()


var event = EventEmitter.prototype  

event.on('custom',(sybom)=>{
    console.log('this is custom event'+sybom);
})

event.emit('custom',"!!!") 