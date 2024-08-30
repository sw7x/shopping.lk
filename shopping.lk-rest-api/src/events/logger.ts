import EventEmitter from 'node:events';

export class Logger extends EventEmitter {
	log(message: string) {
		this.emit('logCreated', message);
	}
}

/* 
// app.ts
import { Logger } from './logger';
const logger = new Logger();

logger.on('messageLogged', (data) => {
	console.log('Listener called', data);
});

logger.log('message');
*/
