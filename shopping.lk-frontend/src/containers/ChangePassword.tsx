import React from 'react';
import { PageHeader } from './shared/PageHeader';
import banner4Img from '@assets/images/banner4.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const ChangePassword = () => {
	return (
		<>
			<PageHeader title='Change Password' subtitle='Enter your new password' />

			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<form action='#'>
							<input
								type='password'
								className='form-control'
								placeholder='Password'
								required
							/>
							<input
								type='password'
								className='form-control'
								placeholder='Confirm Password'
								required
							/>

							<div className='form-footer'>
								<button type='submit' className='btn btn-sm btn-primary'>
									SUBMIT
								</button>
								<button type='reset' className='btn btn-sm btn-danger'>
									RESET
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default ChangePassword;
