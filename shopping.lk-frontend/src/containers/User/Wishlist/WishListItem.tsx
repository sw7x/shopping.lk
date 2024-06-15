import React from 'react';

import productImg from '@assets/images/products/product-1.jpg';

type WishListItemPropsType = {
	index: number;
};

export const WishListItem: React.FC<WishListItemPropsType> = ({ index }) => {
	return (
		<>
			<div className='wishlist-item col-12'>
				<div className='wishlist-item-body pb-1'>
					<div className='wishlist-item-date'>
						<span className='day'>29</span>
						<span className='month'>Jun</span>
						<span className='year'>2024</span>
					</div>

					<div className='wishlist-item-content left-details'>
						<div className='row'>
							<div className='col-12 col-sm-6 col-md-4 col-xl-3'>
								<a href='product.html'>
									<img src={productImg} />
								</a>
							</div>

							<div className='col-12 col-sm-6 col-md-8 col-xl-9 product-details'>
								<div className='category-list'>
									<a href='category.html' className='product-category'>
										category
									</a>
								</div>
								<h2 className='product-title'>
									<a href='product.html'>Product Short Name</a>
								</h2>
								<p className='product-description'>
									Pellentesque habitant morbi tristique senectus et netus et
									malesuada fames ac turpis egestas. Vestibulum tortor quam,
									feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
									libero sit amet quam egestas semper. Aenean ultricies mi vitae
									est. Mauris placerat eleifend leo.
								</p>
								<div className='price-box'>
									<div className='old-price'>$15.00</div>
									<div className='product-price'>$10.00</div>
								</div>

								<div className='product-action'>
									<button
										className='btn-icon btn-add-cart'
										data-toggle='modal'
										data-target='#addCartModal'
									>
										<i className='icon-cart'></i>ADD TO CART
									</button>
									<a
										href='ajax/product-quick-view.html'
										className='wishlist-item-remove'
										title='Quick View'
									>
										<i className='icon-cancel text-3xl'></i>
									</a>
								</div>
							</div>
						</div>
						{index == 0 && (
							<div className='label-group'>
								<div className='product-label label-sale'>$5000 OFF</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
