import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';

export const PackageFeatureItem = () => {
	return (
		<>
			<div className='package-item'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
					<div className='package-label label-sale'>
						<div className='_old-price'>$5.00 OFF</div>
					</div>
				</figure>
				<div className='package-details'>
					<h2 className='package-title headline'>
						<a href='product.html'>Product Short Name</a>
					</h2>

					<div className='price-box'>
						<div className='package-price'>$10.00</div>
					</div>
					<div className='package-action'>
						<button
							className='btn-icon btn-add-cart'
							data-toggle='modal'
							data-target='#addCartModal'
						>
							<i className='icon-cart'></i>
							<div>ADD TO CART</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
