// var events = require('events')//引入 events 模块

// var eventEmitter = new events.EventEmitter();

// eventEmitter.on('connection',function(){
// 	console.log("connection success!")
// 	eventEmitter.emit('data_received')

// })
// eventEmitter.emit('connection')
// console.log("process over!")

// var events = require('events')

// var eventEmitter = new events.EventEmitter()
var Emitter = require('events').EventEmitter;
var eventEmitter = new Emitter();
// eventEmitter.on('kk1',function(){
// 	console.log("绑定事件成功&连接成功");

// })
var kay1 =function ll(){
	console.log("success1");
}



eventEmitter.on('kk1',kay1)
eventEmitter.on('kk1',function(){
	console.log("success2")
})
eventEmitter.on('kk2',function(){
	console.log('success3')
})
// setTimeout(function(){eventEmitter.emit('kk1');},5000)
eventEmitter.emit('kk1');
eventEmitter.emit('kk2');

console.log("process over")

