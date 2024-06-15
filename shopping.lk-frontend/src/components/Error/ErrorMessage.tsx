import React from 'react';
import classes from '@components/Error/Error.module.css';
import { CgCloseO } from 'react-icons/cg';
import { MdError } from 'react-icons/md';

interface ErrorMessage {
	children: React.ReactNode;
}
export const ErrorMessage: React.FC<ErrorMessage> = ({ children }) => {
	return (
		<div className={classes['error-msg']}>
			<div className={classes.heading}>
				<div className={classes.icon}>
					<MdError size={32} />
				</div>
				<div className={classes.title}>Error !</div>
			</div>

			<div className={classes.seperator}></div>
			<div className={classes.message}>{children}</div>
		</div>
	);
};
