import React from 'react';
import { Link } from 'react-router-dom';

export const CartLink = () => {
	return (
		<div className='cart-dropdown'>
			<Link to='/cart' className='dropdown-toggle text-green-600' role='button'>
				<span className='cart-count'>21</span>
			</Link>
		</div>
	);
};
