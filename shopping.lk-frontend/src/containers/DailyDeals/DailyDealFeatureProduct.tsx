import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';

export const DailyDealFeatureProduct = () => {
	return (
		<>
			<div className='featured-horizontal-shopping-product'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
					<a
						href='#'
						className="paction add-wishlist <?php if($i==1) echo 'added';?>"
						title='Add to Wishlist'
					>
						<span>Add to Wishlist</span>
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
					<div className='ratings-container'>
						<div className='product-ratings'>
							<span className='ratings' style={{ width: '100%' }}></span>
						</div>
					</div>
					<p className='product-description'>
						Pellentesque habitant morbi tristique senectus et netus et malesuada fames
						ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
						tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
						ultricies mi vitae est. Mauris placerat eleifend leo.
					</p>
					<div className='price-box'>
						<div className='old-price'>$15.00</div>
						<div className='product-price'>$15.00</div>
					</div>
					<div className='product-action'>
						<button
							className='btn-icon btn-add-cart'
							data-toggle='modal'
							data-target='#addCartModal'
						>
							<i className='icon-cart'></i>ADD TO CART
						</button>
					</div>
				</div>
				<div className='label-group'>
					<div className='product-label label-sale'>$5000 OFF</div>
				</div>
			</div>
		</>
	);
};
