import React from 'react';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from '@containers/shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

const ForgotPassword = () => {
	return (
		<>
			<PageHeader title='Forgot Password' />

			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='text-section'>
							<p>
								Please enter your email address below to receive a password reset
								link.
							</p>
						</div>

						<form action='#' className='mt-2'>
							<div className='form-group row required-field'>
								<label className='col-md-3 _col-form-label'>Email</label>
								<div className='col-12 col-md-9'>
									<input
										id='text'
										name='text'
										type='text'
										className='form-control'
									/>
								</div>
							</div>

							<div className='form-group row'>
								<div className='offset-md-3 col-9'>
									<div className='required text-left mb-1'>* Required Field</div>
								</div>

								<div className='offset-md-3 col-md-9'>
									<button type='reset' className='btn btn-sm btn-danger mr-5'>
										Clear
									</button>
									<button type='submit' className='btn btn-sm btn-primary'>
										Reset My Password
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='mb-10'></div>
		</>
	);
};

export default ForgotPassword;
