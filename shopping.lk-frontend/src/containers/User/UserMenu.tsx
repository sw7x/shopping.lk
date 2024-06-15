import React from 'react';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
	return (
		<div className='widget widget-dashboard border pt-2'>
			<ul className='list'>
				<li className='active'>
					<NavLink to='/user/dashboard'>Dashboard</NavLink>
				</li>
				<li>
					<NavLink to='/user/account-view'>Account Information</NavLink>
				</li>
				<li>
					<NavLink to='/user/account-edit'>Edit Account Information</NavLink>
				</li>
				<li>
					<NavLink to='/user/my-orders-list'>My Orders</NavLink>
				</li>
				<li>
					<NavLink to='/user/my-orders/123'>My Orders single</NavLink>
				</li>
				<li>
					<NavLink to='/user/previously-buy'>Previously buy Items</NavLink>
				</li>
				<li>
					<NavLink to='/user/my-reviews'>My Reviews</NavLink>
				</li>
				<li>
					<NavLink to='/user/wishlist'>My Wishlist</NavLink>
				</li>
			</ul>
		</div>
	);
};
