import React from 'react';
import { CheckoutProcessSummary } from '../CheckoutProcessSummary';

import { Breadcrumb } from '@containers/shared/Breadcrumb';

import '@containers/Checkout/PrePackagedOrder/PrePackagedOrder.css';
import { PackageDiscountDetails } from './PackageDiscountDetails';
import { PrePackagedOrderItemRecord } from './PrePackagedOrderItemRecord';

const PrePackagedOrder = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<h2 className='step-title mb-2'>Pakage 123 Order Single</h2>

						<div className='cart-table-container'>
							<table className='table table-cart'>
								<thead>
									<tr>
										<th className='product-col'>Product</th>
										<th className='qty-col'>Qty</th>
										<th className='price-col'>
											Price,
											<br /> Shipping
										</th>

										<th>Subtotal</th>
									</tr>
								</thead>
								<tbody>
									<PrePackagedOrderItemRecord index={0} />
									<PrePackagedOrderItemRecord index={1} />
									<PrePackagedOrderItemRecord index={2} />
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td className='font-semibold text-black'>
											Total Items = 21
										</td>
										<td></td>
										<td className='font-semibold text-black'>
											Total cost = $21.00
										</td>
									</tr>
								</tfoot>
							</table>
						</div>

						<div className='cart-discount'>
							<PackageDiscountDetails />
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

export default PrePackagedOrder;
