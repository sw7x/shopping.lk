import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

interface CookieAttributes {
	expires?: number | Date;
	path?: string;
	domain?: string;
	secure?: boolean;
}

export function useCookie(name: string, defaultValue: string) {
	const [value, setValue] = useState(() => {
		const cookie = Cookies.get(name);
		if (cookie) return cookie;
		Cookies.set(name, defaultValue);
		return defaultValue;
	});

	const updateCookie = useCallback(
		(newValue: string, options: CookieAttributes) => {
			Cookies.set(name, newValue, options);
			setValue(newValue);
		},
		[name],
	);

	const deleteCookie = useCallback(() => {
		Cookies.remove(name);
		setValue(null);
	}, [name]);

	return [value, updateCookie, deleteCookie];
}

/* 
import useCookie from "./useCookie"

export default function CookieComponent() {
	const [value, update, remove] = useCookie("name", "John")

	return (
		<>
			<div>{value}</div>
			<button onClick={() => update("Sally")}>Change Name To Sally</button>
			<button onClick={remove}>Delete Name</button>
		</>
	)
}
*/
