import React from 'react';
import classes from '@components/Error/Error.module.css';

type ErrorMessagesProps = {
	title?: string;
	errors: Record<string, string[]>;
};

export const ErrorMessageList: React.FC<ErrorMessagesProps> = ({ title = 'Error', errors }) => {
	return (
		<div className={classes['error-message-list']}>
			<div className={classes.topic}>{title}</div>
			<ul>
				{Object.values(errors).map((errorMessages, index) =>
					errorMessages.map((errorMessage, subIndex) => (
						<li key={index + '-' + subIndex}>{errorMessage}</li>
					)),
				)}
			</ul>
		</div>
	);
};

/* 






// Example usage
const App: React.FC = () => {
	const errors = {
		email: ['The email must be at least 100 characters.'],
		password: [
			'The password must be a valid email address.',
			'The password must be at least 120 characters.',
		],
	};

	return <ErrorMessageList errors={errors} />;
};
*/
