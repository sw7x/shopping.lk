//Here's an example of how you can create a usePageBottom hook:

import { useState, useEffect } from 'react';

export const usePageBottom = (threshold = 100) => {
	const [isPageBottom, setIsPageBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offsetHeight = document.documentElement.offsetHeight;
			const innerHeight = window.innerHeight;
			const scrollTop = document.documentElement.scrollTop;

			const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= threshold;

			setIsPageBottom(hasReachedBottom);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const ScrollToBottom = () => {
		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: 'smooth',
		});
	};

	return [isPageBottom, ScrollToBottom];
};

/*

To use this hook in your component, you can call usePageBottom to get a boolean value that indicates whether the user has scrolled to the bottom of the page:

import React from 'react';
import {usePageBottom} from './usePageBottom';

function MyComponent() {
	const isPageBottom = usePageBottom();

	return (
		<div>
			<p>{isPageBottom ? 'You have reached the bottom of the page!' : 'Scroll down to see more content'}</p>
		</div>
	);
}


In this example, the usePageBottom hook uses the useState and useEffect hooks to update the state of the isPageBottom variable whenever the user scrolls. The useEffect hook adds a scroll event listener to the window object and removes it when the component is unmounted. The usePageBottom hook returns the current value of isPageBottom.

Note that this hook only works correctly for full-page scrolling (i.e., the page height is equal to or greater than the height of the viewport). If your page has fixed-height elements (such as a header or footer), you may need to modify the hook to take those elements into account.

*/
