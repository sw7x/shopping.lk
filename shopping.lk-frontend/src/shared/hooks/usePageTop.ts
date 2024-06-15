//Here's an example of how you can create a usePageBottom hook:

import { useState, useEffect } from 'react';

export const usePageTop: (threshold?: number) => [boolean, () => void] = (threshold = 100) => {
	const [isPageTop, setIsPageTop] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			const hasReachedTop = scrollTop <= threshold;
			setIsPageTop(hasReachedTop);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// fucntion to help scroll to top smoothly
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setIsPageTop(true);
	};

	return [isPageTop, goToTop];
};

/*

To use this hook in your component, you can call usePageBottom to get a boolean value that indicates whether the user has scrolled to the bottom of the page:

import React from 'react';
import usePageTop from './usePageTop';

function MyComponent() {
	const isPageTop = usePageTop();

	return (
		<div>
			<p>{usePageTop ? 'You have reached the top of the page!' : 'Scroll down to see more content'}</p>
		</div>
	);
}


In this example, the usePageBottom hook uses the useState and useEffect hooks to update the state of the isPageBottom variable whenever the user scrolls. The useEffect hook adds a scroll event listener to the window object and removes it when the component is unmounted. The usePageBottom hook returns the current value of isPageBottom.

Note that this hook only works correctly for full-page scrolling (i.e., the page height is equal to or greater than the height of the viewport). If your page has fixed-height elements (such as a header or footer), you may need to modify the hook to take those elements into account.

*/
