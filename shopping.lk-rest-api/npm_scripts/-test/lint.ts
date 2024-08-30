import { exec } from 'child_process';

exec('eslint . --ext .ts', (error, stdout, stderr) => {
	if (error) {
		console.error(`Error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`Stderr: ${stderr}`);
		return;
	}
	console.log(stdout);
});
///
