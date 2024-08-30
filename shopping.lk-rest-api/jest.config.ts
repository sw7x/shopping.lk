import type { JestConfigWithTsJest } from 'ts-jest';
//https://jestjs.io/docs/configuration

const config: JestConfigWithTsJest = {
	//displayName: 'CLIENT',

	// Use ts-jest preset for testing TypeScript flies with Jest
	preset: 'ts-jest', // Use the ts-jest preset for TypeScript support

	// Set the test environment to Node.js
	testEnvironment: 'node',

	// Define the root directory for tests and modules
	//roots: ['<rootDir>/tests'],

	// Use ts-jest to transform TypeScript files   ??????????
	transform: {
		'^.+.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
	},

	// Regular expression to find test files
	//testRegex: "((\\.|/)(test|spec))\\.tsx?$",

	// File extensions to recognize in module resolution
	//moduleFileExtensions: ["ts",tsx", "js", "jsx", "json", "node"],

	moduleNameMapper: {
		'^@root/(.*)$': '<rootDir>/$1',
		'^@src/(.*)$': '<rootDir>/src/$1',
	},

	//setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: if you have a setup file

	/* globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.jest.json',
		},
	}, */
};

export default config;
