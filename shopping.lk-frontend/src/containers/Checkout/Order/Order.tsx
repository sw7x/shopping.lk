import React from 'react';
import { CheckoutProcessSummary } from '../CheckoutProcessSummary';
import { UsedCouponRecord } from './UsedCouponRecord';
import { DiscountDetails } from '../DiscountDetails';
import { OrderItemRecord } from './OrderItemRecord';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

import '@containers/Checkout/Order/Order.css';

const Order = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<h2 className='step-title mb-2'>My Orders Single</h2>

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
									<OrderItemRecord />
									<OrderItemRecord />
								</tbody>

								<tfoot>
									<UsedCouponRecord />
								</tfoot>
							</table>
						</div>

						<div className='cart-discount'>
							<DiscountDetails />
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

export default Order;
