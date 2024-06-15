import React, { useState } from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import { PiMinus, PiPlus } from 'react-icons/pi';

export const CartItemRecord = () => {
	const [count, setCount] = useState<number>(1);

	const decreaseQuantity = () => {
		setCount((prev) => {
			if (prev - 1 <= 1) return 1;
			return prev - 1;
		});
	};

	const increaseQuantity = () => {
		setCount((prev) => prev + 1);
	};

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
					<div className='flex mr-3'>
						<button
							className='border mt-4 pt-3 pb-3 pr-6 pl-6'
							onClick={decreaseQuantity}
						>
							<PiMinus />
						</button>

						<span className='border mt-4 pt-3 pb-3 pr-6 pl-6 count'>{count}</span>

						<button
							className='border mt-4 pt-3 pb-3 pr-6 pl-6'
							onClick={increaseQuantity}
						>
							<PiPlus />
						</button>
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
