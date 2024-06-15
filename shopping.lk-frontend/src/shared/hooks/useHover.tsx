import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
	const [isHovering, setIsHovering] = useState(false);
	const ref = useRef<HTMLElement | null>(null);

	const handleMouseOver = () => setIsHovering(true);
	const handleMouseOut = () => setIsHovering(false);

	useEffect(() => {
		const node = ref.current;
		console.log(node);

		if (node) {
			node.addEventListener('mouseover', handleMouseOver);
			node.addEventListener('mouseout', handleMouseOut);

			return () => {
				node.removeEventListener('mouseover', handleMouseOver);
				node.removeEventListener('mouseout', handleMouseOut);
			};
		}
	}, [ref.current]);

	return [ref, isHovering];
};
/* 
To use this hook in your component, you can create a ref using the useRef hook and pass it to useHover()

import useHover from './useHover';

function MyComponent() {
	const [hoverRef, isHovering] = useHover();
	return <div ref={hoverRef}>{isHovering ? 'Hovering' : 'Not hovering'}</div>;
}

In this example, the useEffect hook adds event listeners for the mouseover and mouseout events and 
updates the isHovering state when these events occur. The useHover hook takes no arguments and returns 
a tuple containing a ref to the element you want to detect hover events on and a boolean value indicating 
whether the element is currently being hovered over.

Note that you can use this hook to detect hover events on any element, not just a div as shown in this example.
*/
