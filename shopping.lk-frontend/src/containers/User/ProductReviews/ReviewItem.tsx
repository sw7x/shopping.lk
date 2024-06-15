import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';

function ReviewItem() {
	return (
		<>
			<article className='entry pb-3 col-12'>
				<div className='entry-body'>
					<div className='entry-date'>
						<span className='day'>29</span>
						<span className='month'>Jun</span>
						<span className='year'>2024</span>
					</div>

					<div className='entry-content'>
						<div className='row'>
							<div className='col-12 col-sm-6 col-md-3 col-xl-3'>
								<a href='product.html'>
									<img src={productImg} />
								</a>
							</div>
							<div className='col-12 col-sm-6 col-md-9 col-xl-9'>
								<div className='entry-meta d-flex justify-content-between mb-1'>
									{/* <div><i className="icon-calendar"></i>Date : June 29, 2018</div> */}
									<div>
										<i className='icon-company'></i>Product :{' '}
										<a href='#'>Product Short Name</a>
									</div>
								</div>

								<p className='font-italic'>
									Euismod atras vulputate iltricies etri Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos
									himenaeos. Nulla nunc dui, tristique in semper vel, congue sed
									ligula. elit. nostra, per inceptos himenaeos. Nulla nunc dui,
									tristique in semper vel, congue sed ligula.
								</p>
								<div className='ratings-container'>
									<div className='product-ratings'>
										<span className='ratings' style={{ width: '100%' }}></span>
									</div>
								</div>
								<a href='single.html' className='read-more'>
									Read More <i className='icon-angle-double-right'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}

export default ReviewItem;
