import React from 'react';
import { UserMenu } from '../UserMenu';
import ReviewItem from './ReviewItem';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const ProductReviews = () => {
	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<aside className='sidebar col-lg-3'>
						<UserMenu />
					</aside>

					<div className='col-lg-9 dashboard-content'>
						<h2 className='step-title mb-2'>My Reviews (5)</h2>

						<nav className='toolbox'>
							<div className='toolbox-left'>
								<div className='toolbox-item toolbox-sort'>
									<label>Sort By:</label>

									<div className='select-custom'>
										<select name='orderby' className='form-control'>
											<option value='menu_order' selected={true}>
												Default sorting
											</option>
											<option value='popularity'>Sort by popularity</option>
											<option value='rating'>Sort by average rating</option>
											<option value='date'>Sort by newness</option>
											<option value='price'>
												Sort by price: low to high
											</option>
											<option value='price-desc'>
												Sort by price: high to low
											</option>
										</select>
									</div>
									<a
										href='#'
										className='sorter-btn'
										title='Set Ascending Direction'
									>
										<span className='sr-only'>Set Ascending Direction</span>
									</a>
								</div>
							</div>
						</nav>

						<div className='my-reviews row row-sm'>
							{[...Array(6).keys()].map((key, index) => {
								return <ReviewItem key={index} />;
							})}
						</div>

						<nav className='toolbox toolbox-pagination'>
							<ul className='pagination'>
								<li className='page-item disabled'>
									<a className='page-link page-link-btn' href='#'>
										<i className='icon-angle-left'></i>
									</a>
								</li>
								<li className='page-item active'>
									<a className='page-link' href='#'>
										1 <span className='sr-only'>(current)</span>
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										2
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										3
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										4
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										5
									</a>
								</li>
								<li className='page-item'>
									<span className='page-link'>...</span>
								</li>
								<li className='page-item'>
									<a className='page-link page-link-btn' href='#'>
										<i className='icon-angle-right'></i>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default ProductReviews;
