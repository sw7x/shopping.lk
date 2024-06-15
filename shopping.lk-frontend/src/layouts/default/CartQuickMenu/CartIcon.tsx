import React from 'react';
import { Link } from 'react-router-dom';

export const CartIcon = () => {
	return (
		<Link to='/cart' className='dropdown-toggle text-green-600'>
			<span className='cart-count'>21</span>
		</Link>
	);
};
