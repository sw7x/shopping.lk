import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';

type PrePackagedOrderItemRecordProps = {
	index?: number;
};

export const PrePackagedOrderItemRecord: React.FC<PrePackagedOrderItemRecordProps> = ({
	index = null,
}) => {
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
							<a href='product.html'>{index == 2 ? 'Sony Watch' : 'Philips TV'}</a>
						</h2>
						<div className='stock-number text-xl text-center'>
							Stock Number : A12
							{Math.random().toString(36).substring(2, 6).toUpperCase()}
						</div>
						{/* 
						{index == 0 && (
							<div className='discount'>
								<span className='text-xl text-green-700 font-semibold'>
									Discount : $15.00
								</span>
							</div>
						)} 
						 */}
					</div>
				</td>
				<td>5</td>
				<td>
					<div>
						<div>Price</div>
						{index == 2 && <div className='line-through'>$15.00 X 5 = $75.00</div>}
						<div>$10.00 X 5 = $50.00</div>
					</div>
					<div>
						<div>+</div>
						<div>Shipping</div>
						<div>$1.00 X 5 = $5.00</div>
					</div>
				</td>

				<td>$17.90</td>
			</tr>
		</>
	);
};
