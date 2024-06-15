import React from 'react';
import { ProductFilter } from '@containers/shared/ProductFilter';
import productImg from '@assets/images/products/product-1.jpg';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Search = () => {
	return (
		<>
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
						</nav>

						<div className='product-intro row row-sm'>
							{[...Array(1).keys()].map((key, index) => {
								return (
									<div
										key={index}
										className='col-12 col-sm-12 featured-horizontal-shopping-product mb-4'
									>
										<figure>
											<a href='product.html'>
												<img src={productImg} />
											</a>
											<a
												href='#'
												className={`paction add-wishlist ${index == 1 ? 'added' : ''}`}
												title='Add to Wishlist'
											>
												<span>Add to Wishlist</span>
											</a>
										</figure>
										<div className='product-details'>
											<div className='category-list'>
												<a
													href='category.html'
													className='product-category'
												>
													category
												</a>
											</div>
											<h2 className='product-title'>
												<a href='product.html'>Product Short Name</a>
											</h2>
											<div className='ratings-container'>
												<div className='product-ratings'>
													<span
														className='ratings'
														style={{ width: '100%' }}
													></span>
												</div>
											</div>
											<p className='product-description'>
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas.
												Vestibulum tortor quam, feugiat vitae, ultricies
												eget, tempor sit amet, ante. Donec eu libero sit
												amet quam egestas semper. Aenean ultricies mi vitae
												est. Mauris placerat eleifend leo.
											</p>
											<div className='price-box'>
												<div className='product-price'>$15.00</div>
											</div>
											<div className='product-action'>
												<button
													className='btn-icon btn-add-cart'
													data-toggle='modal'
													data-target='#addCartModal'
												>
													<i className='icon-cart'></i>ADD TO CART
												</button>
											</div>
										</div>
									</div>
								);
							})}

							{[...Array(1).keys()].map((key, index) => {
								return (
									<div
										key={index}
										className='col-12 col-sm-12 featured-horizontal-shopping-product mb-4'
									>
										<figure>
											<a href='product.html'>
												<img src={productImg} />
											</a>
											<a
												href='#'
												className={`paction add-wishlist ${index == 1 ? 'added' : ''}`}
												title='Add to Wishlist'
											>
												<span>Add to Wishlist</span>
											</a>
										</figure>
										<div className='product-details'>
											<div className='category-list'>
												<a
													href='category.html'
													className='product-category'
												>
													category
												</a>
											</div>
											<h2 className='product-title'>
												<a href='product.html'>Product Short Name</a>
											</h2>
											<div className='ratings-container'>
												<div className='product-ratings'>
													<span
														className='ratings'
														style={{ width: '100%' }}
													></span>
												</div>
											</div>
											<p className='product-description'>
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas.
												Vestibulum tortor quam, feugiat vitae, ultricies
												eget, tempor sit amet, ante. Donec eu libero sit
												amet quam egestas semper. Aenean ultricies mi vitae
												est. Mauris placerat eleifend leo.
											</p>
											<div className='price-box'>
												<div className='old-price'>$15.00</div>
												<div className='product-price'>$15.00</div>
											</div>
											<div className='product-action'>
												<button
													className='btn-icon btn-add-cart'
													data-toggle='modal'
													data-target='#addCartModal'
												>
													<i className='icon-cart'></i>ADD TO CART
												</button>
											</div>
										</div>
										<div className='label-group'>
											<div className='product-label label-sale'>
												$5000 OFF
											</div>
										</div>
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

export default Search;
