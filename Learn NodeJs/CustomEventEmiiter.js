const EventEmitter = require('events');
class CustomEventEmitter extends EventEmitter {
    constructor(options = {}) {
        super(options);
        this.name = 'CustomEventEmitter';
    }


    destroy(error) {
        if (error) {
            this.emit('error', error);
        }
        this.emit('close')
    }
}
const customEventEmitter = new CustomEventEmitter();



const arg1 = 'arg1';
const arg2 = 'arg2';
const arg3 = 'arg3';
const arg4 = 'arg4';

// don't do this
eventEmitter.emit('anEvent', arg1, arg2, arg3, arg4);
// do this instead
eventEmitter.emit('anEvent', { arg1, arg2, arg3, arg4 });