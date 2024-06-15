import React from 'react';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from '@containers/shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Register = () => {
	return (
		<>
			<PageHeader title='Register' subtitle='Create an account' />
			<Breadcrumb />
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='text-section mb-2'>
							<p className='lead'>
								By creating an account with our store, you will be able to move
								through the checkout process faster, store multiple shipping
								addresses, view and track your orders in your account and more.
							</p>
						</div>

						<form action='#' className='mt-2'>
							<div className='form-group row required-field'>
								<label className='col-md-3'>Full Name</label>
								<div className='col-md-9'>
									<input
										type='text'
										className='form-control'
										required
										name='full_name'
										id='full_name_input'
									/>
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>E-mail Address</label>
								<div className='col-md-9'>
									<input type='email' className='form-control' name='email' />
								</div>
							</div>

							<div className='form-group row'>
								<label className='col-md-3'>Username</label>
								<div className='col-md-9'>
									<input type='text' className='form-control' name='username' />
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>Phone Number</label>
								<div className='col-md-9'>
									<input
										type='tel'
										className='form-control'
										required
										name='phone'
									/>
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>Gender</label>
								<div className='col-md-9 _select-custom'>
									<select className='form-control' name='gender'>
										<option value='male'>Male</option>
										<option value='female'>Female</option>
										<option value='other'>Other</option>
									</select>
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>Date of birth</label>
								<div className='col-md-9'>
									<input
										type='text'
										className='form-control'
										required
										name='dob'
									/>
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>Street Address</label>
								<div className='col-md-9'>
									<input type='text' className='form-control' required />
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>Zip code</label>
								<div className='col-md-9'>
									<input type='text' className='form-control' required />
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>City</label>
								<div className='col-md-9'>
									<input
										type='text'
										className='form-control'
										required
										name='city'
									/>
								</div>
							</div>

							<div className='form-group row required-field'>
								<label className='col-md-3'>Gender</label>
								<div className='col-md-9 _select-custom'>
									<select className='form-control' name='gender'>
										<option value='USA'>United States</option>
										<option value='Turkey'>Turkey</option>
										<option value='China'>China</option>
										<option value='Germany'>Germany</option>
									</select>
								</div>
							</div>

							<div className='form-group row'>
								<div className='offset-md-3 col-9'>
									<div className='required text-left mb-1'>* Required Field</div>
								</div>

								<div className='offset-md-3 col-md-9'>
									<button type='reset' className='btn btn-sm btn-danger mr-5'>
										Reset
									</button>
									<button type='submit' className='btn btn-sm btn-primary'>
										Create Account
									</button>
								</div>

								<div className='offset-md-3 col-md-9'>
									<div className='custom-control custom-checkbox'>
										<input
											type='checkbox'
											className='custom-control-input'
											id='newsletter-signup'
										/>
										<label
											className='custom-control-label'
											htmlFor='newsletter-signup'
										>
											I have read and agree to the{' '}
											<a href='terms-and-services.php' className='btn-link'>
												Terms and Services
											</a>{' '}
											of Shopping.lk
										</label>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='mb-5'></div>
		</>
	);
};

export default Register;
