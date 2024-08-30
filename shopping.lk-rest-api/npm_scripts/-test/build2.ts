import { exec } from 'child_process';

exec('tsc', (error, stdout, stderr) => {
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

/* 
import { rimraf } from "rimraf";
import shell from "shelljs";
import { execSync } from "child_process";

// Clean the dist directory
rimraf.sync("dist");

// Create the dist directory and copy files
shell.mkdir("-p", "dist");
shell.cp("-r", "public", "dist/public");
shell.cp(".env", "dist/.env");

// Compile TypeScript files using tspc
execSync('tspc -p tsconfig.json', { stdio: 'inherit' });


in package.json 	"scripts": { "build": "ts-node scripts/build.ts"}
*/
