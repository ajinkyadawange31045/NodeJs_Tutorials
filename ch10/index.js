import EventEmitter from 'events';

// Creating our own class extending the class EventEmitter
class MyEmitter extends EventEmitter {}

// Creating an object
const x1 = new MyEmitter();

// Example 1
// Registering event listener
x1.on('event', () => {
    console.log('an event occurred');
});

// To fire the event or emit the event
// It triggers the event
x1.emit('event');
x1.emit('event'); // It will trigger the callback once again



// Example 2
let m = 0;
x1.on('event0', () => {
    console.log(++m);
});
// Trigger event
x1.emit('event0');
x1.emit('event0');
//it matches the event0 name in both calling and triggering of the function



// Example 3
let n = 10; // Resetting m
x1.once('event1', () => {
    console.log(++n);
});
// Trigger event
x1.emit('event1');
x1.emit('event1'); // This one will not work for more than one time, as it is 'once'.
