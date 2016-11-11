var events = require('events')

var eventEmitter = new events.EventEmitter();

var listener1 = function list1(){
	console.log("listener1 success to create")
}
var listener2 = function list2(){
	console.log("listener2 success to create")
}
eventEmitter.on('connection',listener1)

eventEmitter.addListener('connection',listener2);

var count = require('events').listenerCount(eventEmitter,'connection');
console.log("listener number is "+count);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener2);
console.log("不再监听listener2")

console.log("listener number is "+count);

eventEmitter.emit('connection');
