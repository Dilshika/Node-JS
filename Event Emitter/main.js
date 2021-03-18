var events=require('events');
var eventEmitter = new events.EventEmitter();

//Listener #1
var listener1 = function listener1(){
    console.log('listener 1 executed');
}

//Listener #2
var listener2 =  function listener2(){
    console.log('listener 2 is executed');
}

//Bind the connection event with the listener1 function
eventEmitter.addListener('connection',listener1);

//Bind the connection event with the listener2 function
eventEmitter.addListener('connection',listener2);


//Deprecated since version 4.0.0
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"Listeners listening to the connection event");

//Fire the connection event
eventEmitter.emit('connection');

//Remove the binding of listener1 function
eventEmitter.removeListener('connection',listener1);
console.log("Listener1 will not listen now");

//Fire the connection event
eventEmitter.emit('connection');

//Count
var count = eventEmitter.listenerCount('connection');
console.log(count+ " Listener(s) listening to the connection event");
