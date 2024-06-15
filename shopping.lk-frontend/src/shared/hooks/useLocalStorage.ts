import { useState, useEffect } from 'react';

/* 
const getLocalValue = (key: string, initValue: unknown) => {
	//SSR Next.js
	if (typeof window === 'undefined') return initValue;

	// if a value is already store
	const localValueString = localStorage.getItem(key);
	const localValue = localValueString ? JSON.parse(localValueString) : null;

	if (localValue !== null) {
		const parsedValue = JSON.parse(localValue);
		return parsedValue;
	}

	// return result of a function
	if (initValue instanceof Function) return initValue();

	return initValue;
};

export const useLocalStorage0 = (key: string, initValue: unknown) => {
	const [value, setValue] = useState(() => {
		return getLocalValue(key, initValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}; 
*/

export const useLocalStorage = <T>(key: string, initValue: T): [T, (value: T) => void] => {
	const [value, setValue] = useState(() => {
		// getting data from localStorage
		return JSON.parse(localStorage.getItem(key) || JSON.stringify(initValue));
	});

	useEffect(() => {
		//setting data in localStorage
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
