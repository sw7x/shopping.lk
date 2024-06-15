import React from 'react';

export const CheckoutProcessSummary = () => {
	return (
		<>
			<div className='cart-summary'>
				<h3 className='title'>Summary</h3>
				<div className='__collapse' id='total-estimate-section'>
					<div className='py-2'>
						<h3 className='subtitle'>Price</h3>
					</div>
					<table className='table table-totals'>
						<tbody>
							<tr>
								<td>Subtotal</td>
								<td>+ $1700.90</td>
							</tr>
							<tr>
								<td>Discount</td>
								<td> - $10.90</td>
							</tr>
							<tr>
								<td>Total Shipping Cost</td>
								<td>+ $0.00</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td>Order Total</td>
								<td>$1690.00</td>
							</tr>
						</tfoot>
					</table>
				</div>

				<div className='__collapse mb-2' id=''>
					<h3 className='subtitle'>Shipping Address</h3>
					<div className=''>
						<div className='address'>
							<p className='lead text-right'>peter andrews</p>
							<p className='lead text-right'>123/3</p>
							<p className='lead text-right'>Main Street avenu new Building</p>
							<p className='lead text-right'>Anytown</p>
							<p className='lead text-right'>USA 12345</p>
							<p className='lead text-right'>united states of america</p>
						</div>
					</div>
				</div>

				<div className='__collapse' id='total-estimate-section'>
					<h3 className='subtitle'>Billing details</h3>
					<div className=''>
						<table className='table table-totals table-striped table-sm'>
							<tbody>
								<tr>
									<td className='pl-2 border-right'>First name</td>
									<td className='pr-2'>Amal up</td>
								</tr>
								<tr>
									<td className='pl-2 border-right'>Last name</td>
									<td className='pr-2'>Wijesekara</td>
								</tr>
								<tr>
									<td className='pl-2 border-right'>E-mail</td>
									<td className='pr-2'>we.sdgvasdhasdasdasd@gmail.com</td>
								</tr>
								<tr>
									<td className='pl-2 border-right'>Phone Number</td>
									<td className='pr-2'>0981234567890</td>
								</tr>
								<tr>
									<td className='pl-2 border-right'>Country</td>
									<td className='pr-2'>united states of america</td>
								</tr>
								<tr>
									<td className='pl-2 border-right'>City</td>
									<td className='pr-2'>Newyork</td>
								</tr>
								<tr>
									<td className='pl-2 border-right'>Street Address</td>
									<td className='pr-2'>
										123 Main Street, Anytown, USA 12345, united states of
										america
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
