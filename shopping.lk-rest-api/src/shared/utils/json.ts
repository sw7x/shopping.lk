// utils/loadJsonData.ts
import * as fs from 'fs';

/**
 * Loads data from a JSON file and parses it.
 * @param absoluteFilePath - The absolute path to the JSON file.
 * @returns The parsed data from the JSON file.
 * @throws Will throw an error if the file cannot be read or parsed.
 */
export function loadJsonData<T>(absoluteFilePath: string): T {
	try {
		const fileContent = fs.readFileSync(absoluteFilePath, 'utf-8');
		return JSON.parse(fileContent) as T;
	} catch (error: unknown) {
		throw new Error(`Failed to load JSON data from ${absoluteFilePath}: ${(error as Error).message}`);
	}
}
