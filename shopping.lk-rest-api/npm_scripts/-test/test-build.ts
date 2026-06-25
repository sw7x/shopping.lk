// build-package.js
import fs from 'node:fs/promises';
import path from 'node:path';

//const packageJsonPath = path.join(__dirname, '../package.json');
//console.log('packageJsonPath: ' + packageJsonPath);
//const packageJson = require(packageJsonPath);

/* 
fs.readFile('./package1.json', 'utf8', (err, data) => {
	if (err) {
		console.log('Error reading file:', err.message);
		return;
	}
	const jsonData = JSON.parse(data);
	console.log('jsonData: ');
	console.log(jsonData);

	console.log(jsonData.devDependencies);
	delete jsonData.scripts;
	delete jsonData.devDependencies;
	console.log(jsonData);

	jsonData.scripts = {
		start: 'node server.js',
	};

	console.log(jsonData);
	console.log(typeof jsonData);

	// Create a new package.json in the dist folder
	const distPackageJsonPath = path.join(__dirname, '../dist', 'package11.json');
	fs.writeFileSync(distPackageJsonPath, JSON.stringify(jsonData, null, 2));

	console.log('Updated package.json and created dist/package.json');
}); */

const packageJsonPath = path.join(__dirname, '../package.json');
const distPackageJsonPath = path.join(__dirname, '../dist', 'package11.json');

fs.readFile(packageJsonPath, 'utf8')
	.then((data: string) => {
		const packageJsonObj = JSON.parse(data);

		// Remove scripts and devDependencies
		delete packageJsonObj.scripts;
		delete packageJsonObj.devDependencies;

		// Add a new script
		packageJsonObj.scripts = {
			start: 'node server.js',
		};

		return fs.writeFile(distPackageJsonPath, JSON.stringify(packageJsonObj, null, 2));
	})
	.then(() => {
		console.log('Updated package.json and created dist/package.json');
	})
	.catch((err: Error) => {
		console.log('Error:', err.message);
	});
