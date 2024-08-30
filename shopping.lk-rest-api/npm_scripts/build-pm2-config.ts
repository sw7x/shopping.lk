import fs from 'fs/promises';
import path from 'path';

// Define the input and output file paths
const inputFilePath = path.resolve('./ecosystem.config.mjs'); // Input file with ES Module syntax
const outputFilePath = path.resolve('./dist/ecosystem.config.js'); // Output file with CommonJS syntax

const buildPm2Config = (): Promise<void> => {
	return fs.readFile(inputFilePath, 'utf8').then((data: string) => {
		// Modify the content from ES Module to CommonJS
		let commonjsContent = data.replace(/^export default /, 'module.exports = ').replace(/};$/, '};'); // Ensure proper closing of the object

		// Replace script path
		commonjsContent = commonjsContent.replace(/script: 'dist\/server.js'/g, "script: 'server.js'");

		// Write the modified content to the new file
		return fs.writeFile(outputFilePath, commonjsContent, 'utf8');
	});
};

export default buildPm2Config;

/* 
// buildPm2Config version - async function 
export default async function buildPm2Config(): Promise<void> {
	try {
		// Read the content of the ES Module file
		const fileContent = await fs.readFile(inputFilePath, 'utf8');

		// Modify the content from ES Module to CommonJS
		let commonjsContent = fileContent.replace(/^export default /, 'module.exports = ').replace(/};$/, '};'); // Ensure proper closing of the object

		// Replace script path
		commonjsContent = commonjsContent.replace(/script: 'dist\/server.js'/g, "script: 'server.js'");

		// Write the modified content to the new file
		await fs.writeFile(outputFilePath, commonjsContent, 'utf8');

		console.log(`Converted PM2 configuration file saved to ${outputFilePath}`);
	} catch (error) {
		console.error('Error:', error);
	}
} 
*/
