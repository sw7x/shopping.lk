import React from 'react';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from './shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

const Empty = () => {
	return (
		<>
			<PageHeader title='Empty Page' />

			<Breadcrumb />

			<div className='mb-5'>
				<div className='container'></div>
			</div>
		</>
	);
};
export default Empty;
