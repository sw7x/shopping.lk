/*  
rimraf dist &&
	shx mkdir -p dist &&
	shx cp -r config dist/config &&
	shx cp -r public dist/public &&
	shx cp -r bin dist/bin &&
	shx cp package.json dist/package.json &&
	tspc -p tsconfig.prod.json
*/

import shell from 'shelljs';
//import rimraf from 'rimraf';
import buildPackageJson from '@root/npm_scripts/build-package-json';
import buildPm2Config from '@root/npm_scripts/build-pm2-config';

// Remove the 'dist' directory
shell.rm('-rf', 'dist');

// Create the 'dist' directory
shell.mkdir('-p', 'dist');

// Copy necessary files and folders to 'dist'
shell.cp('-r', 'config', 'dist/config');
shell.cp('-r', 'public', 'dist/public');
shell.cp('-r', 'bin', 'dist/bin');
shell.cp('.env', 'dist/.env');

//shell.cp('package.json', 'dist/package.json');
//shell.cp('package-lock.json', 'dist/package-lock.json');

// Build the package.json file for production
buildPackageJson()
	.then(() => {
		console.log('created dist/package.json for production');
	})
	.catch((err: Error) => {
		console.log('Error:', err.message);
	});

// Build the pm2 config file for production
buildPm2Config()
	.then(() => {
		console.log('created PM2 configuration file in dist/ecosystem.config.js for production');
	})
	.catch((err: Error) => {
		console.log('Error:', err.message);
	});

// Run the TypeScript compiler with production configuration, with absolute paths
if (shell.exec('tspc -p tsconfig.prod.json').code !== 0) {
	shell.echo('Error: TypeScript compilation failed');
	shell.exit(1);
}
