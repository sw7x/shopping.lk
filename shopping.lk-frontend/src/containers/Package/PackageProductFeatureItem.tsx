import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import { ViewStarRatings } from '@components/StarRatings';

export const PackageProductFeatureItem = () => {
	return (
		<>
			<div className='package-featured-shopping-product'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
				</figure>
				<div className='product-details'>
					<div className='category-list'>
						<a href='category.html' className='product-category'>
							category
						</a>
					</div>
					<h2 className='product-title'>
						<a href='product.html'>Product Short Name</a>
					</h2>
					{/* <div className='ratings-container'>
						<div className='product-ratings'>
							<span className='ratings' style={{ width: '100%' }}></span>
						</div>
					</div> */}
					<ViewStarRatings rating={65} fontSize={32} />
					<p className='product-description'>
						Pellentesque habitant morbi tristique senectus et netus et malesuada fames
						ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
						tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
						ultricies mi vitae est. Mauris placerat eleifend leo.
					</p>
					<div className='price-box'>
						<div className='product-price'>Item Price : $15.00</div>
						<div className='mt-1 product-price'>QTY : 22</div>
					</div>
				</div>
			</div>
		</>
	);
};
