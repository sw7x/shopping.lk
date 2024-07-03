import React, { useState } from 'react';
import { PageBanner } from '../shared/PageBanner';
import categoryListBannerImg from '@assets/images/banners/category-list.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { FeatureGrid } from '@containers/shared/FeatureGrid';
import product1Img from '@assets/images/products/product-1.jpg';
import { Pagination } from '@components/Pagination';

const CategoryList = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<>
			<PageBanner
				backgroundImage={categoryListBannerImg}
				title='Coasts & Jackets For Woman'
				subtitle='check out over 200+'
			/>

			<Breadcrumb />

			<div className='container products-body'>
				<FeatureGrid>
					{[...Array(12).keys()].map((key, index) => {
						return (
							<FeatureGrid.GridItem
								key={index}
								className='col-12 col-sm-6 col-md-4 col-xl-3'
								data={{
									image: product1Img,
									title: 'Product Name',
								}}
							/>
						);
					})}
				</FeatureGrid>

				<nav className='toolbox toolbox-pagination'>
					<Pagination
						currentPage={1}
						totalCount={150}
						pageSize={10}
						onPageChange={(page) => setCurrentPage(page)}
						siblingCount={2}
					/>
				</nav>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default CategoryList;
