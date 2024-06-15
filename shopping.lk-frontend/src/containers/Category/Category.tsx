import React from 'react';
import bannerImg from '@assets/images/banners/banner-fashion.jpg';
import { ProductFilter } from '@containers/shared/ProductFilter';
import { CategoryFeatureHorizontalProduct } from '@containers/Category/CategoryFeatureHorizontalProduct';
import { CategoryFeatureProduct } from '@containers/Category/CategoryFeatureProduct';
import { PageBanner } from '@containers/shared/PageBanner';
import calegorySingleBannerImg from '@assets/images/banners/calegory-single.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Category = () => {
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
					<aside className='sidebar-shop col-lg-3 order-lg-first'>
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

						<div className='row row-sm'>
							{[...Array(10).keys()].map((key, index) => {
								return (
									<div
										className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3'
										key={index}
									>
										<CategoryFeatureProduct
											isDeal={index === 2 ? true : false}
											index={index}
										/>
									</div>
								);
							})}
						</div>

						<div className='product-intro row row-sm'>
							{[...Array(10).keys()].map((key, index) => {
								return (
									<div className='col-12 col-sm-12 mb-4' key={index}>
										<CategoryFeatureHorizontalProduct
											isDeal={index === 2 ? true : false}
											index={index}
										/>
									</div>
								);
							})}
						</div>

						<nav className='toolbox toolbox-pagination'>
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

export default Category;
