import React from 'react';
import { UserMenu } from '../UserMenu';
import { FinanceTable } from './FinanceTable';
import { AccountTable } from './AccountTable';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Dashboard = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<aside className='sidebar col-lg-3'>
						<div className='widget widget-dashboard'>
							<UserMenu />
						</div>
					</aside>

					<div className='col-lg-9 _order-lg-last dashboard-content'>
						<h2 className='step-title mb-2'>My Dashboard</h2>
						<div className='alert alert-success alert-intro' role='alert'>
							Thank you for registering with shopping.lk - Premium Template.
						</div>
						<div className='alert alert-success' role='alert'>
							Hello, <strong>shopping.lk customer!</strong> From your My Account
							Dashboard you have the ability to view a snapshot of your recent account
							activity and update your account information. Select a link below to
							view or edit information.
						</div>
						<div className='mb-4'></div>

						<div className='card'>
							<FinanceTable />
						</div>
						<div className='card'>
							<AccountTable />
						</div>
					</div>
				</div>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default Dashboard;
