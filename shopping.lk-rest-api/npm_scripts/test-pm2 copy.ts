// build-package.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'url';
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

const packageJsonPath = path.join(__dirname, '../ecosystem.config.mjs');
const distPackageJsonPath = path.join(__dirname, '../dist', 'ecosystem.config.js');

(async () => {
	try {
		// Load the ES Module configuration file
		const configPath = path.resolve('./ecosystem.config.mjs');
		//const config = await import(packageJsonPath);

		console.log('config: ', configPath);
		const configUrl = pathToFileURL(configPath).href;

		console.log('configUrl: ', configUrl);

		// Load the ES Module configuration file using the file URL
		const configx = (await import(configUrl)).default;
		console.log('configx: ', configx);

		const newConfigContent = JSON.parse(JSON.stringify(configx));

		newConfigContent.apps[0].script = 'server.js';
		console.log('newConfigContent: ', newConfigContent);
		console.log('new configx: ', configx);

		// Modify the script path
		/* config.apps.forEach((app: { script: string }) => {
			if (app.script === 'dist/server.js') {
				app.script = 'server.js';
			}
		}); */

		// Create a new configuration string
		const newConfigContent1 = `module.exports = {	
			${JSON.stringify(newConfigContent, null, 4)};
		};`;

		const newConfigContent2 = `module.exports = {
			"apps": [
				{
					"name": "shopping.lk-rest-api",
					"script": "server.js",
					"instances": "1",
					"exec_mode": "cluster",
					"env": {
						"NODE_ENV": "production"
					}
				}
			]
		};`;

		// Save the modified configuration to a new file
		const newConfigPath = path.resolve('./ecosystem.modified.config.js');
		await fs.writeFile(newConfigPath, newConfigContent1, 'utf8');

		//console.log(`New configuration saved to ${newConfigPath}`);
	} catch (error) {
		console.error('Error:', error);
	}
})();
