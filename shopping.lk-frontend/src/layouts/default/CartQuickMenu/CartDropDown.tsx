import React from 'react';
import cartProduct1Img from '@assets/images/products/cart/product-1.jpg';
import cartProduct2Img from '@assets/images/products/cart/product-2.jpg';
import { Link } from 'react-router-dom';

export const CartDropDown = () => {
	return (
		<div className='dropdown-menu'>
			<div className='dropdownmenu-wrapper'>
				<div className='dropdown-cart-header'>
					<span>2 Items</span>
					<Link to='/cart'>View Cart</Link>
				</div>

				<div className='dropdown-cart-products'>
					<div className='product'>
						<div className='product-details'>
							<h4 className='product-title'>
								<Link to='/product'>Woman Ring</Link>
							</h4>

							<span className='cart-product-info'>
								<span className='cart-product-qty'>1</span>x $99.00
							</span>
						</div>

						<figure className='product-image-container'>
							<a
								href=''
								className='product-image'
								onClick={(e) => e.preventDefault()}
							>
								<img src={cartProduct1Img} alt='product' />
							</a>
							<a href='#' className='btn-remove' title='Remove Product'>
								<i className='icon-cancel'></i>
							</a>
						</figure>
					</div>

					<div className='product'>
						<div className='product-details'>
							<h4 className='product-title'>
								<Link to='/product'>Woman Necklace</Link>
							</h4>

							<span className='cart-product-info'>
								<span className='cart-product-qty'>1</span>x $35.00
							</span>
						</div>

						<figure className='product-image-container'>
							<a
								href=''
								className='product-image'
								onClick={(e) => e.preventDefault()}
							>
								<img src={cartProduct2Img} alt='product' />
							</a>
							<a href='#' className='btn-remove' title='Remove Product'>
								<i className='icon-cancel'></i>
							</a>
						</figure>
					</div>
				</div>

				<div className='dropdown-cart-total'>
					<span>Total</span>

					<span className='cart-total-price'>$134.00</span>
				</div>

				<div className='dropdown-cart-action'>
					<Link to='/cart' className='btn btn-primary btn-block'>
						Go to Checkout
					</Link>
				</div>
			</div>
		</div>
	);
};
