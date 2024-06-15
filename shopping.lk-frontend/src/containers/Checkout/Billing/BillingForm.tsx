import React from 'react';

export const BillingForm = () => {
	return (
		<>
			<form action='#'>
				<div className='form-group required-field'>
					<label>Full Name</label>
					<input type='text' className='form-control' required name='full_name' />
				</div>

				<div className='form-group required-field'>
					<label>E-mail Address</label>
					<input type='email' className='form-control' required name='email' />
				</div>

				<div className='form-group required-field'>
					<label>Phone Number</label>
					<input type='tel' className='form-control' required name='phone' />
				</div>

				<div className='form-group required-field'>
					<label>Street Address </label>
					<input type='text' className='form-control' required />
				</div>

				<div className='form-group required-field'>
					<label>City</label>
					<input type='text' className='form-control' required name='city' />
				</div>

				<div className='form-group mb-5'>
					<label>Country</label>
					<div className='select-custom'>
						<select className='form-control' name='country'>
							<option value='USA'>United States</option>
							<option value='Turkey'>Turkey</option>
							<option value='China'>China</option>
							<option value='Germany'>Germany</option>
						</select>
					</div>
				</div>

				<hr />

				<div className='mt-3'>
					<div className='clearfix'>
						<div className='float-right'>
							<a href='#' className='btn btn-danger btn-sm mr-3'>
								Reset
							</a>
							<a
								href='#'
								className='btn btn-primary btn-sm __btn-outline-secondary btn-update-cart'
							>
								Next
							</a>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

//export default BillingForm;
