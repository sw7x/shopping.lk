import React from 'react';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from '@containers/shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

const CheckoutFailed = () => {
	return (
		<>
			<PageHeader title='Failed' subtitle='checkout Failed' />

			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='text-section pb-5 mb-5'>
							<div className='flex justify-center mb-1'>
								<i className='fas fa-exclamation-circle text-9xl text-center text-red-500'></i>
							</div>

							<p className='lead mb-2'>
								"Oops! We're sorry, there was an issue processing your payment.'
							</p>

							<hr />
							<div className='mt-2'>
								<div className='mb-1'>
									<p className='lead font-semibold'>Suggesstion</p>
									<p className='lead'>
										Please double-check the credit card information you entered
										and try again. If the problem persists, please contact our
										customer support for assistance."
									</p>
								</div>

								<div className='clearfix'>
									<div className='float-left'>
										<a
											href='category.html'
											className='btn btn-sm btn-outline-secondary'
										>
											Contact Admin
										</a>
									</div>

									<div className='float-right'>
										<a
											href='#'
											className='btn btn-sm btn-primary __btn-update-cart'
										>
											Go to cart
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutFailed;
