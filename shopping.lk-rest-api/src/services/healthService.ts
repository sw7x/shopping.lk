import os from 'node:os';
//import config from "../config/config";

export const getSystemHealth = () => {
	throw new Error('getSystemHealth error');
	return {
		cpuUsage: os.loadavg(),
		totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
		freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
	};
};

export const getApplicationHealth = () => {
	return {
		//environment: config.ENV,
		environment: process.env.NODE_ENV,
		uptime: `${process.uptime().toFixed(2)} Second`,
		memoryUsage: {
			heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
			heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
		},
	};
};
