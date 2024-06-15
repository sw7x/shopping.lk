import React from 'react';
import classes from '@components/ProcessingAnimation/ProcessingAnimation.module.css';

type ProcessingAnimationProps = {
	style?: React.CSSProperties;
};

export const ProcessingAnimation: React.FC<ProcessingAnimationProps> = ({ style }) => {
	return (
		<div className={classes['formLoader']} style={{ ...style }}>
			<ul className={classes['formLoading']}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};
