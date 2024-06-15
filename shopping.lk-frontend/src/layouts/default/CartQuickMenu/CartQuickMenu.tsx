import React from 'react';

import { CartDropDown } from '@root/layouts/default/CartQuickMenu/CartDropDown';
import { CartIcon } from '@root/layouts/default/CartQuickMenu/CartIcon';

export const CartQuickMenu = () => {
	return (
		<div className='dropdown cart-dropdown'>
			<CartIcon />
			<CartDropDown />
		</div>
	);
};
