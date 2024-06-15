import classes from '@components/Error/Error.module.css';
import { MdError } from 'react-icons/md';
import { ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

interface ErrorFallbackProps {
	error: Error;
	resetErrorBoundary?: (...args: any[]) => void;
}
/* 
export type FallbackProps = {
	error: any;
	resetErrorBoundary: (...args: any[]) => void;
}; 
*/

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
	/* 
	let errorMsg;
	if (error instanceof Error) {
		errorMsg = error.message;
	} else if (typeof error === 'string') {
		errorMsg = error;
	} else {
		errorMsg = 'error';
	} 
	*/

	console.log('================ ErrorFallback  ===================');
	console.log(error);
	console.log('================ ErrorFallback  ===================');

	return (
		<div className={classes['error-msg']}>
			<div className={classes.heading}>
				<div className={classes.icon}>
					<MdError size={32} />
				</div>
				<div className={classes.title}>Error! : Something went wrong</div>
			</div>

			<div className={classes.seperator}></div>
			<div className={classes.message}>{error.message}</div>
			{/* <div className={classes.message}>{errorMsg}</div> */}
		</div>
	);
};
//: React.FC<ErrorFallbackProps>
