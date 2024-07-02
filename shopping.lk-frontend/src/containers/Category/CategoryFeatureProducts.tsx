import React from 'react';
import { ProductFeatureItem } from '@containers/shared/ProductFeatureItem/ProductFeatureItem';
import { ProductFeatrureHorItem } from '@containers/shared/ProductFeatrureHorItem/ProductFeatrureHorItem';

type CategoryFeatureProductsProps = {};

export const CategoryFeatureProducts: React.FC<CategoryFeatureProductsProps> = ({}) => {
	return (
		<>
			<div className='row row-sm'>
				{[...Array(10).keys()].map((key, index) => {
					return (
						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3' key={index}>
							<ProductFeatureItem index={index} isDeal={index === 3 ? true : false} />
						</div>
					);
				})}
			</div>
			<div className='product-intro row row-sm'>
				{[...Array(10).keys()].map((key, index) => {
					return (
						<div className='col-12 col-sm-12 mb-2' key={index}>
							<ProductFeatrureHorItem
								isDeal={index === 2 ? true : false}
								index={index}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
