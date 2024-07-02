import React, { useState } from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import '@containers/shared/ProductFeatureItem/ProductFeatureItem.css';
import { ViewStarRatings } from '@components/StarRatings';
import { ProductAddToCartModal } from '../ProductAddToCartModal/ProductAddToCartModal';

interface ProductFeatureItemProps {
	isDeal?: boolean;
	index?: number | null;
}
export const ProductFeatureItem: React.FC<ProductFeatureItemProps> = ({
	isDeal = false,
	index = null,
}) => {
	const [openModal, setOpenModal] = useState(false);

	const addToCart = () => {
		setOpenModal(true);
	};

	return (
		<>
			<div className='featured-shopping-product'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
				</figure>
				<div className='product-details'>
					{/* <div className='ratings-container'>
						<div className='product-ratings'>
							<span className='ratings' style={{ width: '100%' }}></span>
						</div>
					</div> */}
					<ViewStarRatings rating={9} fontSize={32} />

					<h2 className='product-title'>
						<a href='product.html'>Product Short Name</a>
					</h2>
					<div className='price-box'>
						<span className='product-price'>$32.00</span>
					</div>
					<div className='product-action'>
						<button className='btn-icon btn-add-cart' onClick={addToCart}>
							<i className='icon-cart'></i>ADD TO CART
						</button>
					</div>
				</div>
				{isDeal && (
					<div className='label-group'>
						<div className='product-label label-sale'>$ 5000 OFF</div>
					</div>
				)}
				<a
					href='#'
					className={`paction add-wishlist ${index == 1 ? 'added' : ''}`}
					title='Add to Wishlist'
				>
					<span>Add to Wishlist</span>
				</a>
			</div>
			<ProductAddToCartModal isOpen={openModal} onClose={() => setOpenModal(false)} />
		</>
	);
};
