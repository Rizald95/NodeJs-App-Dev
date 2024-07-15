const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//menambahkan listener ke event 'anEvent'

eventEmitter.on('anEvent', (arg) => {
    console.log(`"AnEvent" dibangkitkan dengan argumen: ${arg}`)
});

eventEmitter.emit('anEvent', 'Hello, Event!');
eventEmitter.emit('anEvent', 'Hello, Dicoding!');
eventEmitter.emit('anEvent', 'Hello, Node.js!')