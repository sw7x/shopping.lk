/*
import { red, blue, yellow } from 'colorette';

export const colorizeLogLevel = (level: string): string => {
	switch (level) {
		case 'ERROR':
			return red(level);
		case 'INFO':
			return blue(level);
		case 'WARN':
			return yellow(level);
		default:
			return level;
	}
};
*/

import { red, blue, yellow, green, gray, magenta } from 'colorette';

export const colorizeLogLevel = (level: string): string => {
	const levelMap = {
		ERROR: red,
		WARN: yellow,
		INFO: blue,
		DEBUG: green,
		TRACE: gray,
		VERBOSE: magenta,
	};

	const colorFn = levelMap[level as keyof typeof levelMap] || ((text: string) => text);
	return colorFn(level);
};
