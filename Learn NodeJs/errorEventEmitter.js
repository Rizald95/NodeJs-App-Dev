const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// menambahkan listener untuk menangani error
eventEmitter.on('error', (error) => {
    console.error(`Terjadi error: ${error.message}`);
});
eventEmitter.emit('error', new Error('ups! ada error, nih.'));