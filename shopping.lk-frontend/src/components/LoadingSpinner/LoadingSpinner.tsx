import React from 'react';
import classes from '@components/LoadingSpinner/LoadingSpinner.module.css';

type LoadingSpinnerProps = {};
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
	return (
		<div className={classes['loader-box']}>
			<div className={classes['loader']}></div>
			<div className={classes['loader-text']}>Loading...</div>
		</div>
	);
};
