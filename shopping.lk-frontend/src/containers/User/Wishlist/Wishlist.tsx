import React, { useState } from 'react';
import { UserMenu } from '../UserMenu';
import { WishListItem } from './WishListItem';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { Pagination } from '@components/Pagination';
import { ProductFeatrureHorItem } from '@containers/shared/ProductFeatrureHorItem';

const Wishlist = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<>
			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<aside className='sidebar col-lg-3'>
						<UserMenu />
					</aside>

					<div className='col-lg-9 dashboard-content'>
						<h2 className='step-title mb-2'>My Wishlist (7)</h2>

						<div className='d-flex justify-content-between'>
							<nav className='toolbox'>
								<div className='toolbox-left'>
									<div className='toolbox-item toolbox-sort'>
										<label>Sort By:</label>

										<div className='select-custom'>
											<select name='orderby' className='form-control'>
												<option value='menu_order' selected={true}>
													Default sorting
												</option>
												<option value='popularity'>
													Sort by popularity
												</option>
												<option value='rating'>
													Sort by average rating
												</option>
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
							<div>
								<h3 className='subtitle'>Total - $123.00</h3>
							</div>
						</div>

						<div className='wishlist-wrapper row row-sm'>
							{[...Array(10).keys()].map((key, index) => {
								//return <ProductFeatrureHorItem key={index} index={index} />;
								return <WishListItem key={index} index={index} />;
							})}
						</div>

						<nav className='toolbox toolbox-pagination'>
							<Pagination
								currentPage={1}
								totalCount={150}
								pageSize={10}
								onPageChange={(page) => setCurrentPage(page)}
								siblingCount={2}
							/>
						</nav>
					</div>
				</div>
			</div>

			<div className='mb-5'></div>
		</>
	);
};

export default Wishlist;
