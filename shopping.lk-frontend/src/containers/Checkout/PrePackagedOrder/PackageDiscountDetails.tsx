import React from 'react';

export const PackageDiscountDetails = () => {
	return (
		<>
			<h2 className='subtitle mb-2'>Package Details</h2>
			<table className='table-striped _table-sm table'>
				<thead></thead>
				<tbody>
					<tr>
						<td>Original Price</td>
						<td>$15.00</td>
					</tr>
					<tr>
						<td>Discount</td>
						<td>$5.00</td>
					</tr>
					<tr>
						<td> Discounted Price</td>
						<td>$10.00</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
