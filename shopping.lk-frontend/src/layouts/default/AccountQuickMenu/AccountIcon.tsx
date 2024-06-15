import React from 'react';
import { Link } from 'react-router-dom';

export const AccountIcon = () => {
	return (
		<Link to='/account' className='dropdown-toggle'>
			<i className='fa fa-user-alt text-green-600' aria-hidden='true'></i>
		</Link>
	);
};
