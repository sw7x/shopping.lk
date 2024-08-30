// 1. Require 'events' module
// create an instance of the EventEmitter class

import EventEmitter from 'node:events';
const userEmitter = new EventEmitter();

// OR
/* 
//2. Create a class that extends Event Emitter
//create instance of the new class

import EventEmitter from 'node:events';
class Logger extends EventEmitter {}
const logger = new Logger(); 
*/

userEmitter.on('userCreated', (user) => {
	console.log('User created:', user);
	// Add additional logic here
});

userEmitter.on('userDeleted', (user) => {
	console.log('User deleted:', user);
	// Add additional logic here
});

userEmitter.on('error', (err) => {
	console.log('error occured ---> ', err);
});

export default userEmitter;
