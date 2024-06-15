import React from 'react';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from '@containers/shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

const CheckoutSuccess = () => {
	return (
		<>
			<PageHeader title='Success' subtitle='checkout success' />

			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='text-section pb-5 mb-5'>
							<div className='flex justify-center mb-1'>
								<i className='fas fa-check-circle text-9xl text-center text-green-500'></i>
							</div>

							<p className='lead'>Thank you for your purchase</p>
							<p className='lead'>Your Invoice code : ABC123</p>

							<p className='lead'>Your Billing information</p>

							<ul className='list-disc ml-10 mb-2'>
								<li>Full name - Sama peter</li>
								<li>Email address - sam@gmail.com</li>
								<li>Phone - 07876768123</li>
								<li>Country / Region -Alaska</li>
								<li>Town / City - Greenwich</li>
								<li>Street Address - 123 Main Street, Anytown, USA 12345</li>
							</ul>

							<p className=''>You have purched following items</p>
							<ul className='list-disc ml-10 mb-2'>
								<li>
									<a href='' className='text-blue-500'>
										T-Shirt (Quantity: 3)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Jeans (Quantity: 2)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Sneakers (Quantity: 1)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Backpack (Quantity: 2)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Smartphone (Quantity: 1)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Headphones (Quantity: 1)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Sunglasses (Quantity: 2)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Watch (Quantity: 1)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Laptop (Quantity: 1)
									</a>
								</li>
								<li>
									<a href='' className='text-blue-500'>
										Water Bottle (Quantity: 4)
									</a>
								</li>
							</ul>

							<p className='lead mb-1'>
								Details about your order will be sent to you through email.
							</p>
							<hr />

							<div className='mt-2'>
								<div className='mb-1'>
									<p className='lead '>What do yo yo want to do next</p>
								</div>

								<div className='clearfix'>
									<div className='float-left'>
										<a href='category.html' className='btn btn-sm btn-primary'>
											Continue Shopping
										</a>
									</div>

									<div className='float-right'>
										<a
											href='#'
											className='btn btn-sm btn-outline-secondary btn-update-cart'
										>
											Dashboard
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

export default CheckoutSuccess;
