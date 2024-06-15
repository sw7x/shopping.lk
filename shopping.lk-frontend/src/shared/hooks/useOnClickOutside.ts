import { RefObject, useEffect } from 'react';

type HandlerType = (event: Event) => void;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: HandlerType,
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			const el = ref?.current;
			if (!el || el.contains((event?.target as Node) || null)) {
				return;
			}

			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export { useOnClickOutside };

/* 
To use this hook in your component, you can create a ref using the useRef hook and pass it to useOnClickOutside() along with a callback function to be executed when a user clicks outside the specified element:

import React, { useState, useRef } from 'react';
import useOnClickOutside from './useOnClickOutside';

function MyComponent() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();
	
	useOnClickOutside(ref, () => {
		setIsOpen(false);
	});


	return (
		<div>
			<button onClick​={() => setIsOpen(!isOpen)}>Toggle menu</button>
			{isOpen && (
			<ul ref={ref}>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		)}
		</div>
	);

}


In this example, the useEffect hook adds event listeners for the mousedown and touchstart events 
and executes the handler function if the user clicks outside the specified element. 
The useOnClickOutside hook takes a ref to the element you want to detect clicks outside 
of and a handler function to be executed when a click is detected outside the element.

Note that you can use this hook to detect clicks outside of any element, not just a dropdown menu 
as shown in this example. 
*/
