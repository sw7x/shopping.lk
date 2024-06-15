import React from 'react';
import ProductFeatureItem from './ProductFeatureItem';

function ProductFeatureItemsSection() {
	return (
		<>
			<div className='featured-section bg-white'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading'>Featured Products</h2>
						</div>
					</div>

					<div className='row'>
						{[...Array(5).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<ProductFeatureItem />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductFeatureItemsSection;
