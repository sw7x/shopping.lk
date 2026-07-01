import { useCallback, useEffect, useState } from 'react';

export const useTest = (str: string, num: number) => {
	const [char, setChar] = useState('');
	const [int, setInt] = useState(0);

	/* const toggle = useCallback(() => {
		setState((state) => !state);
	}, []); */

	useEffect(() => {
		setChar(str);
		setInt(num);
	}, [str, num]);

	const randStrHandler = useCallback((name: string) => {
		let arr = [];
		const rand = Math.floor(Math.random() * (20 + 1));
		for (let i = 0; i < rand; i++) {
			arr.push(str);
		}
		arr.push(rand);
		const randStr = arr.join(', ') + ' ==> ' + name + ' => str : ' + str + ' => num : ' + num;

		setChar(randStr);
		setInt(rand);

		return { randStr, rand };
		//return { randStr: char, rand: int };
	}, []);

	return { char, setChar, int, setInt, randStrHandler };
};
