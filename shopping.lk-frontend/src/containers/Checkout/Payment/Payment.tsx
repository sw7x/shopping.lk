import React from 'react';
import { CheckoutProgressBar } from '../CheckoutProgressBar';
import { CheckoutProcessSummary } from '../CheckoutProcessSummary';
import { PaymentForm } from './PaymentForm';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
export const Payment = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<CheckoutProgressBar step='payment' />

				<div className='row'>
					<div className='col-lg-4'>
						<CheckoutProcessSummary />
					</div>

					<div className='col-lg-8 order-lg-first'>
						<div className='_checkout-payment position-relative'>
							<h2 className='step-title mb-2'>Payment Method</h2>

							<div id='new-checkout-address' className='show'>
								<PaymentForm />

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

//export default PaymentForm;
