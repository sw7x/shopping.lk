import React from 'react';
import classes from '@components/Form/Form.module.css';

type SubmitBtnProps = {
	name?: string;
	title?: string;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ name = '', title = '' }) => {
	return (
		<button
			name={name !== '' ? name : 'submit'}
			type='submit'
			className={classes['submit-btn']}
		>
			{title !== '' ? title : 'Submit'}
		</button>
	);
};
