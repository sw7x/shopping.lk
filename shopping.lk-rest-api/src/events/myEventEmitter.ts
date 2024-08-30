import EventEmitter from 'node:events';

class myEmitter extends EventEmitter {}
const myEventEmitter = new myEmitter();

// listener function can take any number of argument
myEventEmitter.once('myEvent', (arg) => {
	console.log('Log created:', arg);
});

export default myEventEmitter;
