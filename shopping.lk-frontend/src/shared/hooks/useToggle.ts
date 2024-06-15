import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false) => {
	const [state, setState] = useState(initialValue);

	const toggle = useCallback(() => {
		setState((state) => !state);
	}, []);

	return [state, toggle];
};

/*
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export function useToggle(defaultValue?: boolean): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
	const [value, setValue] = useState(!!defaultValue);

	const toggle = useCallback(() => setValue((x) => !x), []);

	return [value, toggle, setValue];
}
*/
