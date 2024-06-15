import React from 'react';
import { Link } from 'react-router-dom';

export const AccountLink = () => {
	return (
		<div className='my-account-icon'>
			<Link to='/dashboard' className='text-4xl'>
				<i className='fa fa-user-alt text-green-600' aria-hidden='true'></i>
			</Link>
		</div>
	);
};
