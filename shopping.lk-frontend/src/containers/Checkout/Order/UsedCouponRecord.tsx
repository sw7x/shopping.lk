import React from 'react';

export const UsedCouponRecord = () => {
	return (
		<>
			<tr>
				<td colSpan={5} className='clearfix'>
					<div className='float-left py-2'>
						<h3 className='subtitle mb-0'>Used Discount Code</h3>
					</div>
					<div className='float-right'>
						<button type='button' className='btn btn-secondary cursor-default' disabled>
							ABFF24
						</button>
					</div>
				</td>
			</tr>
		</>
	);
};
