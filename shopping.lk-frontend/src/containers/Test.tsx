import { AdminTable } from '@root/components/AdminTable';
import React from 'react';
import { PageHeader } from './shared/PageHeader';
import banner4Img from '@assets/images/banner4.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Test = () => {
	return (
		<>
			<PageHeader title='Test' />

			<Breadcrumb />

			<div className='history-section'>
				<div className='container'>
					<div className='mt-5 mb-5'>
						<AdminTable />
					</div>

					<a href='' className='text-4xl'>
						<i className='text-4xl fa fa-yarn'></i>
					</a>
					<br />
				</div>
			</div>
			<div className='features-section'>
				<div className='container'>
					<h2 className='subtitle'>OUR FEATURES</h2>

					<div className='row'>
						<div className='col-md-4'>
							<div className='feature-box'>
								<i className='icon-star'></i>

								<div className='feature-box-content'>
									<h3>Dedicated Service</h3>
									<p>
										Consult our specialists for help with an order,
										customization, or design advice
									</p>
								</div>
							</div>
						</div>

						<div className='col-md-4'>
							<div className='feature-box'>
								<i className='icon-reply'></i>

								<div className='feature-box-content'>
									<h3>Free returns</h3>
									<p>
										We stand behind our goods and services and want you to be
										satisfied with them.
									</p>
								</div>
							</div>
						</div>

						<div className='col-md-4'>
							<div className='feature-box'>
								<i className='icon-paper-plane'></i>

								<div className='feature-box-content'>
									<h3>international shipping</h3>
									<p>
										Currently over 50 countries qualify for express
										international shipping.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Test;
