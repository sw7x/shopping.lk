import { format } from 'winston';

/*
// Function to generate a custom UTC+5:30 timestamp
const getCustomTimestamp = (): string => {
	const utcDate = new Date();
	const offsetInMinutes = 330; // UTC+5:30 offset
	const localDate = new Date(utcDate.getTime() + offsetInMinutes * 60 * 1000);

	const datePart = localDate.toISOString().split('T')[0]; // YYYY-MM-DD
	const timePart = localDate.toISOString().split('T')[1].replace('Z', ''); // HH:mm:ss.SSS

	const formattedDate = `Date:${datePart} Time:${timePart} UTC+05:30`;
	//console.log(formattedDate); // Optional: Log timestamp for debugging

	return formattedDate;
};

// Reusable timestamp format for all transports
export const customTimestampFormat = format.timestamp({ format: getCustomTimestamp });

*/
import moment from 'moment-timezone'; // Or use Intl.DateTimeFormat

const getCustomTimestamp = (): string => {
	return moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss.SSS [UTC+05:30]');
};

export const customTimestampFormat = format.timestamp({
	format: getCustomTimestamp,
});
