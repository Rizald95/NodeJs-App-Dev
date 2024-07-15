const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//menambahkan "ontime" listener ke event 'anEvent'

eventEmitter.once('anEvent', (arg) => {
    console.log(`"anEvent" dibangkitkan dengan argumen :${arg}`)
});

eventEmitter.emit('anEvent', 'Hello, Evenet');
eventEmitter.emit('anEvent', 'Hello, Dicoding!');
eventEmitter.emit('anEvent', 'Hello, Node.js!');