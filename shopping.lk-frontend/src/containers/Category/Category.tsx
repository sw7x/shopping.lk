import React, { useState } from 'react';
import bannerImg from '@assets/images/banners/banner-fashion.jpg';
import { ProductFilter } from '@containers/shared/ProductFilter';
import { PageBanner } from '@containers/shared/PageBanner';
import calegorySingleBannerImg from '@assets/images/banners/calegory-single.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { CategoryFeatureProducts } from '@containers/Category/CategoryFeatureProducts';
import { Pagination } from '@components/Pagination';

const Category = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<>
			<PageBanner
				backgroundImage={calegorySingleBannerImg}
				title='Coasts & Jackets For Woman'
				subtitle='check out over 200+'
			/>

			<Breadcrumb />

			<div className='container'>
				<div className='row'>
					<aside className='col-lg-3 order-lg-first'>
						<ProductFilter />
					</aside>

					<div className='col-lg-9'>
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

							<div className='toolbox-item toolbox-show'>
								<label>Show:</label>

								<div className='select-custom'>
									<select name='count' className='form-control'>
										<option value='9'>9 Products</option>
										<option value='18'>18 Products</option>
										<option value='27'>27 Products</option>
									</select>
								</div>
							</div>

							<div className='layout-modes'>
								<a
									href='category.html'
									className='layout-btn btn-grid active'
									title='Grid'
								>
									<i className='icon-mode-grid'></i>
								</a>
								<a
									href='category-list.html'
									className='layout-btn btn-list'
									title='List'
								>
									<i className='icon-mode-list'></i>
								</a>
							</div>
						</nav>

						<CategoryFeatureProducts />

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

export default Category;
