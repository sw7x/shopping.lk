import { useEffect, useState } from 'react';

interface WindowSize {
	width: number;
	height: number;
}

export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handler = () => {
			setWindowSize({
				width: window.innerWidth || document.documentElement.clientWidth,
				height: window.innerHeight || document.documentElement.clientHeight,
			});
		};

		handler();

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
	}, []);

	return windowSize;
};
