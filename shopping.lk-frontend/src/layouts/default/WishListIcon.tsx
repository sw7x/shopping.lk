import React from 'react';
import { Link } from 'react-router-dom';

export const WishListIcon = () => {
	return (
		<div className='my-wishlist-icon'>
			<Link to='/wishlist' className='text-4xl'>
				<i className='icon-wishlist text-green-600' aria-hidden='true'></i>
			</Link>
			<span className='wishlist-count'>2</span>
		</div>
	);
};
