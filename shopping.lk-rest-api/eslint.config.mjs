import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintNodePlugin from 'eslint-plugin-n'; // Import the plugin
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import jest from 'eslint-plugin-jest';
import tsEslintParser from '@typescript-eslint/parser';

console.log('typescriptEslintPlugin.configs.recommended ', typescriptEslintPlugin.configs.recommended);
console.log('pluginJs.configs.recommended ', pluginJs.configs.recommended);
console.log('tseslint.configs.recommended ', tseslint.configs.recommended);
console.log('eslintNodePlugin ', eslintNodePlugin);

export default [
	{ ignores: ['node_modules', 'dist', 'public', 'bin', 'logs', 'ecosystem.config.mjs'] },
	//{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ files: ['**/*.ts', '**/*.mjs', '**/*.cjs', '**/*.js'] },
	{
		languageOptions: {
			globals: globals.node,
			//parser: '@typescript-eslint/parser',
			parser: tsEslintParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './tsconfig.eslint.json',
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		plugins: {
			n: eslintNodePlugin, // Use the `n` plugin
			'@typescript-eslint': typescriptEslintPlugin,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	//...eslintNodePlugin.configs['flat/mixed-esm-and-cjs'],
	//typescriptEslintPlugin.configs.recommended,
	{
		//For eslint.config.js
		files: ['test/**'],
		...jest.configs['flat/recommended'],
		rules: {
			...jest.configs['flat/recommended'].rules,
			'jest/prefer-expect-assertions': 'off',
		},
	},
	{
		rules: {
			//eslintNodePlugin.rules,
			//...pluginJs.configs.recommended.rules,
			...typescriptEslintPlugin.configs.recommended.rules, // Use the recommended rules
			//'no-console': 'error',
			'no-useless-catch': 0,

			//quotes: ['error', 'single', { allowTemplateLiterals: true }]
			'@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

			//'prettier/prettier': 'warn',
			//'n/no-unpublished-import': 'off',
		},
	},
	//eslintPrettierRecommended,
];
