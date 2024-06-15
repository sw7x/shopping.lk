import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';

export const BrandItem = () => {
	return (
		<>
			<div className='product-default'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
				</figure>
				<div className='product-details'>
					<h2 className='subHeading _product-title'>
						<a href='product.html'>Product Short Name</a>
					</h2>
				</div>
			</div>
		</>
	);
};
