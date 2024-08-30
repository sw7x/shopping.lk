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
