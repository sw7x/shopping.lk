import React from 'react';

export const OrderDetailItem = () => {
	return (
		<>
			<div className='entry col-12'>
				<div className='entry-body pb-1'>
					<div className='entry-date'>
						<span className='day'>29</span>
						<span className='month'>Jun</span>
						<span className='year'>2024</span>
					</div>

					<div className='entry-content'>
						<div className='entry-meta'>
							<div className='subtitle mb-1'>
								<span className=''>
									<i className='icon-mode-list'></i>Invoice No : 123ABD
								</span>
							</div>
							<div className='subtitle mb-1'>
								<span className=''>
									<i className='icon-dollar'></i>Net Total : $123.00
								</span>
								<span className='mr-2 ml-2'>|</span>
								<span>
									<i className='icon-us-dollar'></i>Total : $100.00
								</span>
							</div>
							<div className='subtitle mb-1'>
								<span className=''>
									<i className='icon-cart'></i>QTY : 5 Items
								</span>
							</div>
						</div>
						<div className='mt-0 mb-1 clearfix'>
							<h4 className='m-0'>
								<a href='product.html' className='read-more'>
									View More
									<i className='icon-angle-double-right'></i>
								</a>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
