import React from 'react';
import { DiscountDetails } from '@root/containers/Checkout/DiscountDetails';
import { CheckoutProcessSummary } from '@root/containers/Checkout/CheckoutProcessSummary';
import { CartItemRecord } from '@root/containers/Checkout/Cart/CartItemRecord';
import { CouponForm } from '@root/containers/Checkout/Cart/CouponForm';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

import '@containers/Checkout/Cart/Cart.css';

export const Cart = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<h2 className='step-title mb-2'>Cart</h2>

						<div className='clearfix mb-1'>
							<div className='float-right'>
								<a href='#' className='btn btn-sm btn-danger btn-clear-cart mr-3'>
									Clear Cart
								</a>
								<a href='#' className='btn btn-sm btn-primary btn-update-cart'>
									Update Cart
								</a>
							</div>
						</div>

						<div className='cart-table-container'>
							<table className='table table-cart'>
								<thead>
									<tr>
										<th className='product-col'>Product</th>
										<th className='price-col'>Price</th>
										<th className='qty-col'>Qty</th>
										<th>Shipping Cost</th>
										<th>Subtotal</th>
									</tr>
								</thead>
								<tbody>
									<CartItemRecord />
									<CartItemRecord />
								</tbody>

								<tfoot>
									<CouponForm />
								</tfoot>
							</table>

							<div>
								<DiscountDetails />
							</div>
						</div>

						<hr />

						<div className='mt-3 mb-2'>
							<div className='clearfix'>
								<div className='float-left'>
									<a
										href='category.html'
										className='btn btn-sm btn-outline-secondary'
									>
										Continue Shopping
									</a>
								</div>

								<div className='float-right'>
									<a
										href='#'
										className='btn btn-primary btn-sm __btn-outline-secondary btn-update-cart'
									>
										Go to Checkout
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4'>
						<CheckoutProcessSummary />
					</div>
				</div>
			</div>

			<div className='mb-6'></div>
		</>
	);
};

export default Cart;
