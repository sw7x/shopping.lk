import React from 'react';
import bannerImg from '@assets/images/banners/banner-fashion.jpg';
import { PageBanner } from '../shared/PageBanner';
import dailyDealsbannerImg from '@assets/images/banners/daily-deals.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { ProductFeatrureHorItem } from '@containers/shared/ProductFeatrureHorItem/ProductFeatrureHorItem';
const DailyDeals = () => {
	return (
		<>
			<PageBanner
				backgroundImage={dailyDealsbannerImg}
				title='Coasts & Jackets For Woman'
				subtitle='check out over 200+'
			/>

			<Breadcrumb />
			{/* <div className='mb-5 mb-lg-6 mb-xl-7'></div> */}

			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='daily-deal-intro row row-sm'>
							{[...Array(6).keys()].map((key, index) => {
								return (
									<div className='col-12 col-sm-12 mb-2' key={index}>
										<ProductFeatrureHorItem
											index={index}
											isDeal={index === 3 ? true : false}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DailyDeals;
