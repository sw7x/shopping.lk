import React, { useState } from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import '@containers/shared/ProductFeatrureHorItem/ProductFeatrureHorItem.css';
import { ViewStarRatings } from '@components/StarRatings';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { AddToCartQuantitySelector } from '@containers/shared/AddToCartQuantitySelector';

type ProductFeatrureHorItemProps = {
	index?: number;
	isDeal?: boolean;
	isWishListItem?: boolean;
};

export const ProductFeatrureHorItem: React.FC<ProductFeatrureHorItemProps> = ({
	index = null,
	isDeal = false,
	isWishListItem = false,
}) => {
	return (
		<>
			<div className='featured-horizontal-shopping-product'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
					{!isWishListItem && (
						<a
							href='#'
							className={`paction add-wishlist ${index == 1 ? 'added' : ''}`}
							title='Add to Wishlist'
						>
							<span>Add to Wishlist</span>
						</a>
					)}
				</figure>
				<div className='product-details'>
					<h2 className='product-title'>
						<a href='product.html'>Product Short Name</a>
					</h2>
					<div className='category-list'>
						category :
						<a href='category.html' className='product-category ml-2'>
							Head Phones
						</a>
					</div>
					<div className='product-brand'>
						BRAND :
						<a className='ml-2' href=''>
							Excepteur
						</a>
					</div>

					{/* <div className='ratings-container'>
						<div className='product-ratings'>
							<span className='ratings' style={{ width: '100%' }}></span>
						</div>
					</div> */}
					<ViewStarRatings rating={52} fontSize={32} />
					<p className='product-description'>
						Pellentesque habitant morbi tristique senectus et netus et malesuada fames
						ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
						tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
						ultricies mi vitae est. Mauris placerat eleifend leo.
					</p>
					<div className='price-box'>
						<div className='product-price'>$20.00</div>
						{isDeal && <div className='old-price'>$15.00</div>}
					</div>
					<div className='product-action'>
						<AddToCartQuantitySelector />

						<a href='cart.html' className='paction add-cart' title='Add to Cart'>
							<span>Add to Cart</span>
						</a>
					</div>
				</div>

				{isDeal && (
					<div className='label-group'>
						<div className='product-label label-sale'>$5000 OFF</div>
					</div>
				)}
			</div>
		</>
	);
};
