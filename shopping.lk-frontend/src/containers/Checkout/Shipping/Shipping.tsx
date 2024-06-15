import React from 'react';
import { CheckoutProcessSummary } from '@containers/Checkout/CheckoutProcessSummary';
import { CheckoutProgressBar } from '../CheckoutProgressBar';
import { ShippingForm } from './ShippingForm';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
export const Shipping = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<CheckoutProgressBar step='shipping' />

				<div className='row'>
					<div className='col-lg-4'>
						<CheckoutProcessSummary />
					</div>

					<div className='col-lg-8 order-lg-first'>
						<div className='_checkout-payment position-relative'>
							<h2 className='step-title mb-2'>Shipping Address</h2>
							<div className='form-group-custom-control'>
								<div className='custom-control custom-checkbox'>
									<input
										type='checkbox'
										className='custom-control-input'
										id='change-bill-address'
										value='1'
									/>
									<label
										className='custom-control-label'
										htmlFor='change-bill-address'
									>
										My profile address and shipping address are the same
									</label>
								</div>
							</div>

							<ShippingForm />

							<div
								className='_position-absolute'
								style={{ position: 'absolute', bottom: '0px' }}
							>
								<a
									href='category.html'
									className='btn btn-sm btn-outline-secondary'
								>
									Back
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* 
				<div className="row">
                    <div className="col-lg-8">
                        <div className="checkout-steps-action">
                            <a href="checkout-review.html" className="btn btn-primary float-right">NEXT</a>
                        </div>
                    </div>
                </div> 
				*/}
			</div>

			<div className='mb-6'></div>
		</>
	);
};

//export default ShippingForm;
