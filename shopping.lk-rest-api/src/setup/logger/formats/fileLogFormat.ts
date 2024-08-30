import { format } from 'winston';

export const fileLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
	const logMeta: Record<string, unknown> = {};

	for (const [key, value] of Object.entries(meta)) {
		if (value instanceof Error) {
			logMeta[key] = {
				name: value.name,
				message: value.message,
				trace: value.stack || '',
			};
		} else {
			logMeta[key] = value;
		}
	}

	const logData = {
		level: level.toUpperCase(),
		message,
		timestamp,
		meta: logMeta,
	};

	return JSON.stringify(logData, null, 4);
});
