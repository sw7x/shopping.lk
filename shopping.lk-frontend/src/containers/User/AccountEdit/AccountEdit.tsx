import React from 'react';
import { UserMenu } from '../UserMenu';
import AccountEditForm from './AccountEditForm';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const AccountEdit = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<aside className='sidebar col-lg-3'>
						<UserMenu />
					</aside>

					<div className='col-lg-9 dashboard-content'>
						<div className='_checkout-payment'>
							<AccountEditForm />
						</div>
					</div>
				</div>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default AccountEdit;
