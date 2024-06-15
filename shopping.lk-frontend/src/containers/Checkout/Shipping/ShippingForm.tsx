import React from 'react';
import { CheckoutProcessSummary } from '@containers/Checkout/CheckoutProcessSummary';

export const ShippingForm = () => {
	return (
		<form action='#' className='mb-1'>
			<div className='form-group row required-field'>
				<label className='col-md-3'>Street Address</label>
				<div className='col-md-9'>
					<input
						type='text'
						className='form-control max-w-full'
						required
						name='street_address'
					/>
				</div>
			</div>

			<div className='form-group row required-field'>
				<label className='col-md-3'>City</label>
				<div className='col-md-9'>
					<input type='text' className='form-control max-w-full' required name='city' />
				</div>
			</div>

			<div className='form-group row required-field mb-5'>
				<label className='col-md-3'>Country</label>
				<div className='col-md-9 _select-custom'>
					<select className='form-control max-w-full' name='country'>
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
					{/* <div className='float-left'>
											<a
												href='category.html'
												className='btn btn-sm btn-outline-secondary'
											>
												Back
											</a>
										</div> */}

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
	);
};

//export default ShippingForm;
