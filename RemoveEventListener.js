const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const eventHandler = (arg1, arg2) => {
    console.log('Event', i, 'Occured with arg1:', arg1, 'arg2:', arg2);
};

myEmitter.on('firstEvent', eventHandler); // The on method is used to add a listener to the event.

for(var i=0; i<5; i++){
    if (i === 3) {
        myEmitter.removeListener('firstEvent', eventHandler); // The removeListener method is used to remove a listener from the event.
    }

myEmitter.emit('firstEvent', 'a', 'b');
}