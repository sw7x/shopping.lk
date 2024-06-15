import React from 'react';

type CheckoutProgressBarPropsType = {
	step: 'shipping' | 'billing' | 'payment';
};

export const CheckoutProgressBar: React.FC<CheckoutProgressBarPropsType> = ({ step }) => {
	return (
		<ul className='checkout-progress-bar'>
			<li className={`${step == 'shipping' ? 'active' : ''}`}>
				<span>Shipping</span>
			</li>
			<li className={`${step == 'billing' ? 'active' : ''}`}>
				<span>Billing</span>
			</li>
			<li className={`${step == 'payment' ? 'active' : ''}`}>
				<span>Payment</span>
			</li>
		</ul>
	);
};
