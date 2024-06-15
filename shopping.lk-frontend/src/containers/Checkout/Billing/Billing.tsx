import React from 'react';
import { CheckoutProcessSummary } from '../CheckoutProcessSummary';
import { CheckoutProgressBar } from '../CheckoutProgressBar';
import { BillingForm } from './BillingForm';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
export const Billing = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<CheckoutProgressBar step='billing' />

				<div className='row'>
					<div className='col-lg-4'>
						<CheckoutProcessSummary />
					</div>

					<div className='col-lg-8 order-lg-first'>
						<div className='_checkout-payment position-relative'>
							<h2 className='step-title mb-2'>Billing Details</h2>

							<h4>Check / Money order</h4>

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
										My billing and shipping address are the same
									</label>
								</div>
							</div>

							<div id='checkout-shipping-address'>
								<address>
									Desmond Mason <br />
									123 Street Name, City, USA <br />
									Los Angeles, California 03100 <br />
									United States <br />
									(123) 456-7890
								</address>
							</div>

							<div id='new-checkout-address' className='show'>
								<BillingForm />

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
				</div>
			</div>

			<div className='mb-6'></div>
		</>
	);
};

//export default BillingForm;
