import React from 'react';

const AccountEditForm = () => {
	return (
		<>
			<h2 className='step-title mb-2'>Edit Account Information</h2>

			<form action='#'>
				<div className='form-group row required-field'>
					<label className='col-md-3'>City</label>
					<div className='col-md-9'>
						<input type='text' className='form-control' required name='city' />
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Full Name</label>
					<div className='col-md-9'>
						<input
							type='text'
							className='form-control'
							required
							name='full_name'
							id='full_name_input'
							value='peter steve andrews'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>E-mail Address</label>
					<div className='col-md-9'>
						<input
							type='email'
							className='form-control'
							name='email'
							disabled
							value='peter.andrews@gmail.com'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Username</label>
					<div className='col-md-9'>
						<input
							type='text'
							className='form-control'
							name='username'
							disabled
							value='peter.andrews'
						/>
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
							value='+441234567890'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Gender</label>
					<div className='col-md-9 select-custom'>
						<select className='form-control' name='gender'>
							<option value='male' selected>
								Male
							</option>
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
							value='1986/11/21'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Street Address</label>
					<div className='col-md-9'>
						<input
							type='text'
							className='form-control'
							required
							value='123 Main Street, Anytown, USA 12345'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Zip code</label>
					<div className='col-md-9'>
						<input type='text' className='form-control' required value='23456' />
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
							value='Newyork'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Country</label>
					<div className='col-md-9 select-custom'>
						<select className='form-control' name='country'>
							<option value='USA' selected>
								United States
							</option>
							<option value='Turkey'>Turkey</option>
							<option value='China'>China</option>
							<option value='Germany'>Germany</option>
						</select>
					</div>
				</div>

				<div className='form-group row'>
					<div className='offset-md-3 col-md-9'>
						<div className='required text-left mb-1'>* Required Field</div>
					</div>

					<div className='offset-md-3 col-md-9'>
						<button type='reset' className='btn btn-secondary mr-5'>
							Discard
						</button>
						<button type='submit' className='btn btn-primary'>
							Edit
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AccountEditForm;
