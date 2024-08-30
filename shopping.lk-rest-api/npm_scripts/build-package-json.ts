import fs from 'node:fs/promises';
import path from 'node:path';

const packageJsonPath = path.join(__dirname, '../package.json');
const distPackageJsonPath = path.join(__dirname, '../dist', 'package.json');

const buildPackageJson = (): Promise<void> => {
	return fs.readFile(packageJsonPath, 'utf8').then((data: string) => {
		const packageJsonObj = JSON.parse(data);

		// Remove scripts and devDependencies
		delete packageJsonObj.scripts;
		delete packageJsonObj.devDependencies;

		// Add a new script
		packageJsonObj.scripts = {
			start: 'node server.js',
		};

		return fs.writeFile(distPackageJsonPath, JSON.stringify(packageJsonObj, null, 4));
	});
};
/* 
export function buildupdatePackageJson(): Promise<void> {}
*/

export default buildPackageJson;
