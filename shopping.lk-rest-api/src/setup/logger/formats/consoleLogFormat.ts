import { format } from 'winston';
import { colorizeLogLevel } from '@src/setup/logger/utils/colorizeLogLevel';
import { green, magenta } from 'colorette';
import util from 'util';

export const consoleLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
	const coloredLevel = colorizeLogLevel(level.toUpperCase());
	//const coloredLevel = level.toUpperCase();

	const formattedTimestamp = green(timestamp as string);
	const logMessage = message;
	const formattedMeta = util.inspect(meta, { showHidden: false, depth: null, colors: true });

	return `${coloredLevel} [${formattedTimestamp}] ${logMessage}\n${magenta('META')} ${formattedMeta}\n`;
});
