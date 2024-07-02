import React, { useState } from 'react';

//import { PackageFeatureItem } from '@containers/PackageList/PackageFeatureItem';
import { PackageFeatureItem } from '@containers/PackageList/PackageFeatureItem';
import bannerImg from '@assets/images/banners/banner-fashion.jpg';
import packageListBannerImg from '@assets/images/banners/package-list.png';
import { PageBanner } from '../shared/PageBanner';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

import '@containers/PackageList/PackageList.css';
import { Pagination } from '@components/Pagination';

const PackageList = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<>
			<main className='main'>
				<PageBanner
					backgroundImage={packageListBannerImg}
					title='Coasts & Jackets For Woman'
					subtitle='check out over 200+'
				/>

				<Breadcrumb />

				<div className='container'>
					<div className='package-list-wrapper'>
						<div className='package-list divide-line up-effect'>
							{[...Array(12).keys()].map((key, index) => {
								return (
									<div
										key={index}
										className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 px-0 '
									>
										<PackageFeatureItem />
									</div>
								);
							})}

							{/* 
							
							<PackageFeatureItem />
							<div key={index} className='col-12 col-sm-6 col-md-4 col-xl-3'></div> 
							*/}
						</div>

						<nav className='toolbox toolbox-pagination mt-5'>
							<Pagination
								currentPage={1}
								totalCount={150}
								pageSize={10}
								onPageChange={(page) => setCurrentPage(page)}
								siblingCount={2}
							/>
						</nav>
					</div>
				</div>

				<div className='mb-5'></div>
			</main>
		</>
	);
};

export default PackageList;
