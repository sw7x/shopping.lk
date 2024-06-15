import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';

export const OrderItemRecord = () => {
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
						<div className=''>$15.00</div>
					</div>
				</td>
				<td>5</td>
				<td>$1.90</td>
				<td>$17.90</td>
			</tr>
		</>
	);
};
