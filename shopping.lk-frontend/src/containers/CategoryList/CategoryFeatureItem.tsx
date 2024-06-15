import React from 'react';
import productImg from '@assets/images/products/product-3.jpg';

export const CategoryFeatureItem = () => {
	return (
		<>
			<div className='product-default'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
				</figure>
				<div className='product-details'>
					<h2 className='subHeading'>
						<a href='product.html'>Product Short Name</a>
					</h2>
				</div>
			</div>
		</>
	);
};
