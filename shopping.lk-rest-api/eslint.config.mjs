import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended  from 'eslint-plugin-prettier/recommended';
import eslintNodePlugin from 'eslint-plugin-n';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import jest from 'eslint-plugin-jest';
import tsEslintParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';


export default [
	pluginJs.configs.recommended,
	importPlugin.flatConfigs.recommended,

	// Ignore patterns
	{	
		ignores: [
			'node_modules/**',
			'dist/**',
			'public/**',
			'bin/**',
			'logs/**',
			'ecosystem.config.mjs'			
		],
	},
	
	// Files to lint
	{ 
		files: [
			'**/*.ts',			
			'**/*.mjs', 
			'**/*.cjs', 
			'**/*.js'
		]
	},	
	// ** ADD THIS NEW SECTION HERE **
	// Disable type-checked linting for config files
	{
		files: ['**/*.config.ts', '**/jest.config.ts', '**/*.config.js', '**/*.config.mjs'],
		extends: [tseslint.configs.disableTypeChecked],
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
			'import/no-unresolved': 'off',
		},
	},
	// Global ESLint configuration
	{		
		languageOptions: {
			globals: {
				...globals.node, 	// Node.js specific globals like process, require, etc.
				...globals.es2021, 	// ES2021 standard globals
				...globals.jest, 	// Testing globals like describe, it, expect, etc.
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	
	// plugins for ESLint
	{
		plugins: {
			n: eslintNodePlugin,
		},
	},
			
	...tseslint.configs.recommended,		
	//...eslintNodePlugin.configs['flat/mixed-esm-and-cjs'],
	eslintNodePlugin.configs['flat/recommended-module'],

	// JavaScript configuration	
	{
		files: ['**/*.js', '**/*.mjs', '**/.cjs'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},		
		rules: {
			//'no-console': 'warn',	// Example: Warn on console logs			
		}
	},

	// TypeScript configuration
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			//parser: '@typescript-eslint/parser', // Use TypeScript parser
			parser: tsEslintParser,
			parserOptions: {
				ecmaVersion: 'latest', 		// Enable the latest ECMAScript features
				sourceType: 'module',  		// Enable ES modules
				project: './tsconfig.json', // Required for type-aware rules
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			tseslint: tseslint,
		},
		rules: {
			...typescriptEslintPlugin.configs.recommended.rules, // Use recommended TypeScript rules

			// Example: Custom rules
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-module-boundary-types': 'off',			
		},
	},

	//configuration for files inside test directory
	{		
		files: ['test/**'],
		...jest.configs['flat/recommended'],
		rules: {
			...jest.configs['flat/recommended'].rules,
			'jest/prefer-expect-assertions': 'off',
		},
	},

	// settings to  enable typescript path mappings
	{
		"settings": {
			"import/parsers": {
				"@typescript-eslint/parser": [".ts", ".tsx"]
			},
			"import/resolver": {
				"typescript": {
					"project": ["./tsconfig.eslint.json"]
				},
				/*
				"node": {
					"project": ["./tsconfig.eslint.json"]
				}  
				*/
			},
		},	
	},

	// specify various linting rules
	{		
		rules: {		
			...typescriptEslintPlugin.configs.recommended.rules,

			
			
			//'no-console': 'error',
			//'no-useless-catch': 'off',
			//quotes: ['error', 'single', { allowTemplateLiterals: true }],
			
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					"vars": "all",
					"args": "all",
					"argsIgnorePattern": "^_",
					"caughtErrors": "all",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"ignoreRestSiblings": true
				}
			],
			"@typescript-eslint/ban-ts-comment": "warn",
			
			/*= eslint-plugin-n Rules =*/
			'n/no-unpublished-import': 'off',
			'n/no-unpublished-require': 'off',
			'n/no-process-exit':'off',		

			//disable rule because to use rules in import plugin
			'n/no-missing-import':'off',
			'n/no-missing-require':'off',			
			'n/no-extraneous-import':'off',
			'n/no-extraneous-require':'off',			

			/*= eslint-plugin-import Rules =*/
			"import/no-unresolved": "error",
			"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
		},
	},
	
	// Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
	eslintPluginPrettierRecommended,
];
