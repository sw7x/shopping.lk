import React from 'react';

import productImg from '@assets/images/products/product-1.jpg';
import '@containers/User/Wishlist/WishListItem.css'; // todo - uncomment old styles
import { AddToCartQuantitySelector } from '@containers/shared/AddToCartQuantitySelector';

type WishListOldItemPropsType = {
	index: number;
};

export const WishListOldItem: React.FC<WishListOldItemPropsType> = ({ index }) => {
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
								<h2 className='product-title'>
									<a href='product.html'>Product Short Name</a>
								</h2>
								<div className='category-list'>
									<a href='category.html' className='product-category'>
										category
									</a>
								</div>

								<p className='product-description'>
									Pellentesque habitant morbi tristique senectus et netus et
									malesuada fames ac turpis egestas. Vestibulum tortor quam,
									feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
									libero sit amet quam egestas semper. Aenean ultricies mi vitae
									est. Mauris placerat eleifend leo.
								</p>
								<div className='price-box'>
									{/* {index == 0 && <div className='old-price'>$15.00</div>} */}
									<div className='product-price'>$10.00</div>
								</div>

								<div className='product-action'>
									<AddToCartQuantitySelector />

									<a
										href='cart.html'
										className='paction add-cart'
										title='Add to Cart'
									>
										<span>Add to Cart</span>
									</a>
									<a
										href='ajax/product-quick-view.html'
										className='wishlist-item-remove'
										title='Quick View'
									>
										<i className='icon-cancel text-3xl'></i>
									</a>
								</div>
								{/* <div className='product-action'>
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
								</div> */}
							</div>
						</div>
						{/* {index == 0 && (
							<div className='label-group'>
								<div className='product-label label-sale'>$5000 OFF</div>
							</div>
						)} */}
					</div>
				</div>
			</div>
		</>
	);
};
