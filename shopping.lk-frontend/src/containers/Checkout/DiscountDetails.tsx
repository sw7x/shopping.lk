import React from 'react';

export const DiscountDetails = () => {
	return (
		<>
			<h2 className='subtitle mb-2'>Discount Information</h2>
			<table className='table-striped _table-sm table'>
				<thead></thead>
				<tbody>
					<tr>
						<td>Discounted rate</td>
						<td>40%</td>
					</tr>
					<tr>
						<td>Coupon applied item</td>
						<td>Optical Mouse VX1234</td>
					</tr>
					<tr>
						<td>Coupon applied item count</td>
						<td>1</td>
					</tr>
					<tr>
						<td>Old price</td>
						<td>$107.00 x 1 = $107.00</td>
					</tr>
					<tr>
						<td>New price</td>
						<td>1 x [$107.00 - ($107.00 x 40%)] = $100.00</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
