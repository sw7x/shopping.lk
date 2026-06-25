import { exec } from 'child_process';

// Valid Migration Commands
const validActions = ['create', 'up', 'down', 'list', 'prune'] as const;
type Action = (typeof validActions)[number];

// Command Line Arguments
const action = process.argv[2];
const migrationLabel = process.argv[3];

if (!validActions.includes(action as Action)) {
	console.error(`Invalid action: Action must be one of ${validActions.join(', ')}`);
	process.exit(0);
}

const labelNotReqActions = ['list', 'prune'] as const;
type LabelNotReqAction = (typeof labelNotReqActions)[number];

if (!labelNotReqActions.includes(action as LabelNotReqAction)) {
	if (!migrationLabel) {
		console.error('Migration label is required');
		process.exit(0);
	}
}

function executeMigrationScript(): Promise<string> {
	return new Promise((resolve, reject) => {
		const scriptCommand = labelNotReqActions.includes(action as LabelNotReqAction)
			? `migrate ${action}`
			: `migrate ${action} ${migrationLabel}`;

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
	});
}

// Example usage:
executeMigrationScript()
	.then((output) => {
		console.info(output);
	})
	.catch((error) => {
		console.error('Error:5555555555');
		console.error('Error:', error);
	});
