import React from 'react';

export const PaymentForm = () => {
	return (
		<>
			<form action='#'>
				<div className='form-group row required-field'>
					<label className='col-md-3'>Card Number</label>
					<div className='col-md-9'>
						<input
							type='text'
							className='form-control'
							required={true}
							name='card_number'
						/>
					</div>
				</div>
				<div className='form-group row required-field'>
					<label className='col-md-3'>Full Name</label>
					<div className='col-md-9'>
						<input
							type='text'
							className='form-control'
							required={true}
							name='full_name'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Expire Date</label>
					<div className='col-md-9'>
						<input
							type='text'
							name='expiry_date'
							placeholder='MM/YY'
							className='form-control'
							required={true}
						/>
					</div>
				</div>
				<div className='form-group row required-field'>
					<label className='col-md-3'>CVC</label>
					<div className='col-md-9'>
						<input
							type='text'
							name='cvc'
							className='form-control'
							maxLength={3}
							required={true}
						/>
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
								Checkout
							</a>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

//export default PaymentForm;
