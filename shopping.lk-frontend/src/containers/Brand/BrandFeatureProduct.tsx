import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';
type BrandFeatureProductProps = {
	index: number;
};

//col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col
export const BrandFeatureProduct: React.FC<BrandFeatureProductProps> = ({ index }) => {
	return (
		<>
			<div className='featured-shopping-product ml-2 mr-2'>
				<figure>
					<a href='product.html'>
						<img src={productImg} />
					</a>
				</figure>
				<div className='product-details'>
					<div className='ratings-container'>
						<div className='product-ratings'>
							<span className='ratings' style={{ width: '100%' }}></span>
						</div>
					</div>
					<h2 className='product-title'>
						<a href='product.html'>Product Short {index}</a>
					</h2>
					<div className='price-box'>
						<span className='product-price'>$32.00</span>
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
				<a
					href='#'
					className="paction add-wishlist <?php if($i==1) echo 'added';?>"
					title='Add to Wishlist'
				>
					<span>Add to Wishlist</span>
				</a>
			</div>
		</>
	);
};
