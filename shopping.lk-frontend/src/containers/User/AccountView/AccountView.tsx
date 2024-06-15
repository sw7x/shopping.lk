import React from 'react';
import { UserMenu } from '../UserMenu';
import AccountDetailsTable from './AccountDetailsTable';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const AccountView = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<aside className='sidebar col-lg-3'>
						<UserMenu />
					</aside>

					<div className='col-lg-9 dashboard-content'>
						<AccountDetailsTable />
					</div>
				</div>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default AccountView;
