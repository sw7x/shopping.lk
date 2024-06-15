import React from 'react';

export const FinanceTable = () => {
	return (
		<>
			<div className='card-header'>Finance</div>
			<div className='card-body'>
				<div className='row'>
					<div className='col-md-12'>
						<table className='ratings-table mt-0 mb-0'>
							<thead>
								<tr>
									<th colSpan={2}>Cart</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Items in Cart</td>
									<td>5</td>
								</tr>
								<tr>
									<td>Total Amount</td>
									<td>$40.00</td>
								</tr>
							</tbody>
						</table>

						<table className='ratings-table mt-3 mb-0'>
							<thead>
								<tr>
									<th colSpan={2}>Wishlist</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Items in Wishlist</td>
									<td>4</td>
								</tr>
								<tr>
									<td>Total Amount</td>
									<td>$32.00</td>
								</tr>
							</tbody>
						</table>

						<table className='ratings-table mt-3 mb-0'>
							<thead>
								<tr>
									<th colSpan={2}>Already Bought</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Total Orders</td>
									<td>4</td>
								</tr>
								<tr>
									<td>Total Items</td>
									<td>23</td>
								</tr>
								<tr>
									<td>Spend</td>
									<td>$32.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
