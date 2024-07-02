import React, { useState } from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { AddToCartQuantitySelector } from '@containers/shared/AddToCartQuantitySelector';

export const CartItemRecord = () => {
	return (
		<>
			<tr className='product-row'>
				<td className='product-col'>
					<figure className='product-image-container'>
						<a href='product.html' className='product-image'>
							<img src={productImg} alt='product' />
						</a>
					</figure>
					<div className='product-name'>
						<h2 className='product-title text-xl'>
							<a href='product.html'>Phillips</a>
						</h2>
					</div>
				</td>
				<td>
					<div>
						<div className='old-price'>$15.00</div>
						<div className=''>$10.00</div>
					</div>
				</td>
				<td>
					<div className='inline-block'>
						<AddToCartQuantitySelector />
					</div>
				</td>
				<td>$1.00</td>
				<td>$17.90</td>
			</tr>
			<tr className='product-action-row'>
				<td colSpan={5} className='pb-2 clearfix'>
					<div className='float-right'>
						<a href='#' title='Move to wishlist' className='btn-icon-wish'>
							<span className='sr-only'>Wishlist</span>
							<i className='icon-heart'></i>
						</a>
						{/* <a href='#' title='Edit product' className='btn-edit'>
							<span className='sr-only'>Edit</span>
							<i className='icon-pencil'></i>
						</a> */}
						<a href='#' title='Remove product' className='btn-remove'>
							<span className='sr-only'>Remove</span>
						</a>
					</div>
				</td>
			</tr>
		</>
	);
};
