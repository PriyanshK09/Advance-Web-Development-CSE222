const EventEmitter = require('events');
// Import the event module and create an instance of EventEmitter class

const myEmitter = new EventEmitter();
// Create an instance of the EventEmitter class. This instance will be used to emit and handle listeners.

myEmitter.on('firstEvent', (arg1, arg2) => {    // Why arg1 and arg2 are important? : They are the parameters that are passed to the event handler.
    // Event handler logic
    console.log('First event has been emitted', arg1, arg2);
});

// The on method is used to register an event listener for a specific event. 
// Multiple listeners can be attached to the same event.

myEmitter.once('firstEvent', (arg1, arg2) => {
    // Event handler logic
    console.log('This event will be emitted only once', arg1, arg2);
});

// The once method is used to register an event listener that will be called only once.

for(var i=0; i<4; i++){
    myEmitter.emit('firstEvent', 'Hello', 'HI!'); // The emit method is used to emit an event.
}