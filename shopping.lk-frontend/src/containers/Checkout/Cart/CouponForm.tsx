import React from 'react';

export const CouponForm = () => {
	return (
		<>
			<tr>
				<td colSpan={5} className='clearfix'>
					<div className='clearfix w-100'>
						<div className='float-left py-2 d-block'>
							<h3 className='subtitle'>Used Discount Code</h3>
						</div>
						<div className='float-right'>
							<button
								type='button'
								className='btn btn-secondary cursor-default'
								disabled
							>
								ABFF24
							</button>
						</div>
					</div>

					<div className='clearfix mt-0 w-100'>
						<div className='float-right col-9 col-sm-6 px-0'>
							<form action='#' className='mb-0'>
								<div className='input-group'>
									<input
										type='text'
										className='form-control form-control-sm'
										placeholder='Enter discount code'
										required
									/>
									<div className='input-group-append'>
										<button
											className='btn btn-sm btn-primary apply-cc-btn'
											type='submit'
										>
											Apply Discount
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</td>
			</tr>
		</>
	);
};
