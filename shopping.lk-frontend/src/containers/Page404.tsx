import React from 'react';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from './shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Page404 = () => {
	return (
		<>
			<PageHeader title='Page not found' subtitle='404' />

			<Breadcrumb />

			<div className='mb-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h2 className='subtitle'>
								We could not find the page you were looking for.
							</h2>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-12'>
							<button type='reset' className='btn btn-sm btn-primary mr-5'>
								Home
							</button>
							<button type='submit' className='btn btn-sm btn-danger'>
								Go Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page404;
