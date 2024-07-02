import { useRef, useState, useEffect } from 'react';

const useDynamicFontSize = (initialFontSize = 16) => {
	const ref = useRef<HTMLDivElement>(null);

	const [fontSize, setFontSize] = useState(initialFontSize);

	useEffect(() => {
		const handleResize = () => {
			if (ref.current) {
				const divWidth = ref.current.offsetWidth;
				const divHeight = ref.current.offsetHeight;

				// Example logic to set font size based on div size
				//const newFontSize = Math.min(divWidth, divHeight) / 10; // Adjust the divisor to get the desired font size
				let newFontSize = Math.round(divWidth / 15);
				newFontSize = newFontSize < 15 ? newFontSize + 2 : newFontSize - 2;
				setFontSize(newFontSize);
			}
		};

		const resizeObserver = new ResizeObserver(handleResize);
		if (ref.current) {
			resizeObserver.observe(ref.current);
		}

		// Initial call to set font size
		handleResize();

		// Cleanup observer on unmount
		return () => {
			if (resizeObserver && ref.current) {
				resizeObserver.unobserve(ref.current);
			}
		};
	}, []);

	return { ref, fontSize };
};

export default useDynamicFontSize;
