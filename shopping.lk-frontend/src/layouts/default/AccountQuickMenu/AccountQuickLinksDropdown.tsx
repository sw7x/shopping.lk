import React from 'react';
import { Link } from 'react-router-dom';

export const AccountQuickLinksDropdown = () => {
	return (
		<div className='dropdown-menu'>
			<div className='dropdownmenu-wrapper'>
				<ul className='my-account-links'>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link to='/wishlist'>wishlist</Link>
					</li>
					<li>
						<Link to='/account-edit'>Edit Account</Link>
					</li>

					<li>
						<Link to='/my-orders-list'>My Orders</Link>
					</li>
					<li>
						<a href='login.php' className='login-link'>
							LOG OUT
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
