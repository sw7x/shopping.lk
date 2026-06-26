//import { exec } from 'child_process';
import shell from 'shelljs';

/* 
npm run migrate:new 					=> ts-node -r dotenv/config ./migrate.config.ts new
npm run migrate:new migration_file_name => ts-node -r dotenv/config ./migrate.config.ts new migration_file_name
npm run migrate:up      				=> ts-node -r dotenv/config ./migrate.config.ts up  
npm run migrate:status 					=> ts-node -r dotenv/config ./migrate.config.ts status
npm run migrate:down-all 				=> ts-node -r dotenv/config ./migrate.config.ts down --all
npm run migrate:down-last 				=> ts-node -r dotenv/config ./migrate.config.ts down --last
*/

//console.log(process.argv);

const validCommands = ['new', 'status', 'up', 'down'] as const;
type Command = (typeof validCommands)[number];

const inputCommand = process.argv[2];
const option = process.argv[3];
//const optionVal = process.argv[4];

//console.log('inputCommand : ' + inputCommand);
//console.log('option : ' + option);
//console.log('optionVal : ' + optionVal);

// check Valid Migration Commands
if (!validCommands.includes(inputCommand as Command)) {
	console.error(`Invalid command: Commands must be one of ${validCommands.join(', ')}`);
	process.exit(0);
}

// check if command have too many arguments
if (process.argv.length > 4) {
	console.error('Too many arguments for the command,');
	// Too many arguments to "make:migration" command, expected arguments "name".
	process.exit(0);
}

const optionNotReqActions = ['status', 'up', 'new'] as const;
type OptionNotReqAction = (typeof optionNotReqActions)[number];
if (!optionNotReqActions.includes(inputCommand as OptionNotReqAction)) {
	// check if command not have required option (for down command require --all or --last)
	if (!option) {
		console.error('CLI option is required');
		process.exit(0);
	}
} else {
	if (inputCommand !== 'new') {
		// check if status, up commands have option (that is not required)
		if (option) {
			console.error(`Too many arguments to migrate:${inputCommand} command`);
			process.exit(0);
		}
	}
}

function executeMigrationScript(): Promise<string> {
	return new Promise((resolve, reject) => {
		let scriptCommand = optionNotReqActions.includes(inputCommand as OptionNotReqAction)
			? `${inputCommand}`
			: `${inputCommand} ${option}`;

		// for commands  = mongo-migrate new , mongo-migrate new -n migration_filename
		if (inputCommand === 'new') {
			//scriptCommand = (option === undefined) ? `migrate ${inputCommand}` : `migrate ${inputCommand} -n ${option}`;
			scriptCommand = `${inputCommand}${option ? ` -n ${option}` : ''}`;
		}

		//console.log('scriptCommand : ' + scriptCommand);
		//console.log(`ts-node -r tsconfig-paths/register -r dotenv/config ./migrate.config.ts ${scriptCommand}`);
		shell.exec(`ts-node -r tsconfig-paths/register -r dotenv/config  ./migrate.config.ts ${scriptCommand}`);

		/* 
		const childProcess = exec(scriptCommand, (error, stdout) => {
			if (error) {
				reject(`Error running script: ${error}`);
			} else {
				resolve(stdout);
			}
		});

		childProcess.stderr?.on('data', (data) => {
			console.error(data);
		}); 
		*/
	});
}

// Example usage:
executeMigrationScript()
	.then((output) => {
		console.info(output);
	})
	.catch((error) => {
		console.error('Error:', error);
	});
