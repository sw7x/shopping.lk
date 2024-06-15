import React from 'react';
import { ProcessingAnimation } from '../ProcessingAnimation';

export const PageLoader = () => {
	return (
		<>
			<ProcessingAnimation style={{ minHeight: '50vh' }} />
		</>
	);
};
