import React from 'react';
import classes from '@components/Form/Form.module.css';
import { useLinkClickHandler } from 'react-router-dom';

type ResetBtnProps = {
	name?: string;
	title?: string;
	onClick: () => void;
};
//todo reset all form elements
export const ResetBtn: React.FC<ResetBtnProps> = ({ name = '', title = '', onClick }) => {
	const clickHandler = () => {
		onClick();
	};

	return (
		<button
			name={name !== '' ? name : 'reset'}
			type='reset'
			className={classes['reset-btn']}
			onClick={clickHandler}
		>
			{title !== '' ? title : 'Reset'}
		</button>
	);
};
