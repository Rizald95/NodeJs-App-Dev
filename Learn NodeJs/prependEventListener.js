const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('anEvent', () => {
    console.log('listener 1');
});
eventEmitter.on('anEvent', () => {
    console.log('listener 2');
});
eventEmitter.on('anEvent', () => {
    console.log('listener 3');
});
eventEmitter.prependListener('anEvent', () => {
    console.log('listener 0');
})
eventEmitter.emit('anEvent');