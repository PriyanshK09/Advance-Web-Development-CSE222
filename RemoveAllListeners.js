const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const eventHandler = (arg1, arg2) => {
    console.log('Event', i+1, 'Occured with arg1:', arg1, 'arg2:', arg2);
};

myEmitter.on('firstEvent', eventHandler);

for(var i=0; i<5; i++){
    if (i === 3) {
        myEmitter.removeAllListeners('firstEvent'); // The removeAllListeners method is used to remove all listeners from the event.
    }

myEmitter.emit('firstEvent', 'a', 'b');
}