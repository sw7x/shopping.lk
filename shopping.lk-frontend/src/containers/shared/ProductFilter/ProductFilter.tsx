import React, { useState } from 'react';
import RangeSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Collapsible from '@root/components/Collapsible/Collapsible';
import '@containers/shared/ProductFilter/ProductFilter.css';

export const ProductFilter = () => {
	const [filters, setFilters] = useState({
		categories: [],
		brands: [],
		priceRange: [0, 1000], // Initial price range
	});

	const [showWidgets, setShowWidgets] = useState<boolean>(false);

	const handlePriceChange = (value: number | number[]) => {
		setFilters({ ...filters, priceRange: Array.isArray(value) ? value : [value, value] });
		console.log(value);
	};

	return (
		<>
			<div className='sidebar-shop'>
				<div className='sidebar-wrapper'>
					<div className='filter-btn-section clearfix w-100'>
						<div className='float-right'>
							<button
								type='button'
								className='btn btn-sm btn-outline-secondary cursor-default product-filter-btn'
								onClick={() => setShowWidgets(!showWidgets)}
							>
								<i className='fa fa-filter'></i>
								Filter
							</button>
						</div>
					</div>

					<div className={`widget-wrapper ${showWidgets ? 'show' : ''}`}>
						<Collapsible open header={<h3 className='widget-title'>Fashion</h3>}>
							<ul className='cat-list'>
								<li>
									<a href='#'>Women</a>
								</li>
								<li>
									<a href='#'>Men</a>
								</li>
							</ul>
						</Collapsible>

						<Collapsible open={false} header={<h3 className='widget-title'>Price</h3>}>
							<div className='price-slider-wrapper'>
								<div id='price-slider'></div>
								<RangeSlider
									min={0}
									max={10000}
									range
									defaultValue={filters.priceRange}
									onChange={handlePriceChange}
									step={1000}
									dots={true}
									dotStyle={{}}
									trackStyle={{
										backgroundColor: '#16a34a',
										borderColor: '#16a34a',
									}}
									railStyle={{ borderColor: '#16a34a' }}
									activeDotStyle={{ borderColor: '#16a34a' }}
									handleStyle={{
										borderColor: '#16a34a',
									}}
								/>
							</div>

							<div className='filter-price-action'>
								<button type='submit' className='btn btn-dark'>
									Filter
								</button>

								<div className='filter-price-text'>
									<span id='filter-price-range'>
										${filters.priceRange[0]} - ${filters.priceRange[1]}
									</span>
								</div>
							</div>
						</Collapsible>

						<Collapsible open header={<h3 className='widget-title'>Size</h3>}>
							<ul className='config-size-list'>
								<li className='active'>
									<a href='#'>S</a>
								</li>
								<li>
									<a href='#'>M</a>
								</li>
								<li>
									<a href='#'>L</a>
								</li>
								<li>
									<a href='#'>XL</a>
								</li>
								<li>
									<a href='#'>2XL</a>
								</li>
								<li>
									<a href='#'>3XL</a>
								</li>
							</ul>
						</Collapsible>

						<Collapsible open={false} header={<h3 className='widget-title'>Brand</h3>}>
							<ul className='cat-list'>
								<li>
									<a href='#'>
										Adidas <span>18</span>
									</a>
								</li>
								<li>
									<a href='#'>
										Camel <span>22</span>
									</a>
								</li>
							</ul>
						</Collapsible>

						<Collapsible open header={<h3 className='widget-title'>COLOR</h3>}>
							<ul className='config-swatch-list'>
								<li>
									<a href='#' style={{ backgroundColor: '#4090d5' }}></a>
								</li>
								<li className='active'>
									<a href='#' style={{ backgroundColor: '#f5494a' }}></a>
								</li>
								<li>
									<a href='#' style={{ backgroundColor: '#fca309' }}></a>
								</li>
								<li>
									<a href='#' style={{ backgroundColor: '#11426b' }}></a>
								</li>
								<li>
									<a href='#' style={{ backgroundColor: '#f0f0f0' }}></a>
								</li>
								<li>
									<a href='#' style={{ backgroundColor: '#3fd5c9' }}></a>
								</li>
								<li>
									<a href='#' style={{ backgroundColor: '#979c1c' }}></a>
								</li>
								<li>
									<a href='#' style={{ backgroundColor: '#7d5a3c' }}></a>
								</li>
							</ul>
						</Collapsible>
						{/*
						<div className='widget'>
							<h3 className='widget-title'>
								<a
									data-toggle='collapse'
									href='#widget-body-1'
									role='button'
									aria-expanded='true'
									aria-controls='widget-body-1'
								>
									Fashion
								</a>
							</h3>

							<div className='collapse show' id='widget-body-1'>
								<div className='widget-body'>
									<ul className='cat-list'>
										<li>
											<a href='#'>Women</a>
										</li>
										<li>
											<a href='#'>Men</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='widget'>
							<h3 className='widget-title'>
								<a
									className='collapsed'
									data-toggle='collapse'
									href='#widget-body-2'
									role='button'
									aria-expanded='true'
									aria-controls='widget-body-2'
								>
									Price
								</a>
							</h3>

							<div className='_collapse' id='widget-body-2'>
								<div className='widget-body'>
									<form action='#'>
										<div className='price-slider-wrapper'>
											<div id='price-slider'></div>
											<RangeSlider
												min={0}
												max={10000}
												range
												defaultValue={filters.priceRange}
												onChange={handlePriceChange}
												step={1000}
												dots={true}
												dotStyle={{}}
												trackStyle={{
													backgroundColor: '#16a34a',
													borderColor: '#16a34a',
												}}
												railStyle={{ borderColor: '#16a34a' }}
												activeDotStyle={{ borderColor: '#16a34a' }}
												handleStyle={{
													borderColor: '#16a34a',
												}}
											/>
										</div>

										<div className='filter-price-action'>
											<button type='submit' className='btn btn-dark'>
												Filter
											</button>

											<div className='filter-price-text'>
												<span id='filter-price-range'>
													${filters.priceRange[0]} - ${filters.priceRange[1]}
												</span>
											</div>
										</div>
										<span style={{ color: 'red' }}>todo - collapse</span>
									</form>
								</div>
							</div>
						</div>

						<div className='widget'>
							<h3 className='widget-title'>
								<a
									className='collapsed'
									data-toggle='collapse'
									href='#widget-body-3'
									role='button'
									aria-expanded='true'
									aria-controls='widget-body-3'
								>
									Size
								</a>
							</h3>

							<div className='_collapse' id='widget-body-3'>
								<div className='widget-body'>
									<ul className='config-size-list'>
										<li className='active'>
											<a href='#'>S</a>
										</li>
										<li>
											<a href='#'>M</a>
										</li>
										<li>
											<a href='#'>L</a>
										</li>
										<li>
											<a href='#'>XL</a>
										</li>
										<li>
											<a href='#'>2XL</a>
										</li>
										<li>
											<a href='#'>3XL</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='widget'>
							<h3 className='widget-title'>
								<a
									className='collapsed'
									data-toggle='collapse'
									href='#widget-body-4'
									role='button'
									aria-expanded='true'
									aria-controls='widget-body-4'
								>
									Brand
								</a>
							</h3>

							<div className='collapse' id='widget-body-4'>
								<div className='widget-body'>
									<ul className='cat-list'>
										<li>
											<a href='#'>
												Adidas <span>18</span>
											</a>
										</li>
										<li>
											<a href='#'>
												Camel <span>22</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='widget'>
							<h3 className='widget-title'>
								<a
									className='collapsed'
									data-toggle='collapse'
									href='#widget-body-6'
									role='button'
									aria-expanded='true'
									aria-controls='widget-body-6'
								>
									Color
								</a>
							</h3>

							<div className='_collapse' id='widget-body-6'>
								<div className='widget-body'>
									<ul className='config-swatch-list'>
										<li>
											<a href='#' style={{ backgroundColor: '#4090d5' }}></a>
										</li>
										<li className='active'>
											<a href='#' style={{ backgroundColor: '#f5494a' }}></a>
										</li>
										<li>
											<a href='#' style={{ backgroundColor: '#fca309' }}></a>
										</li>
										<li>
											<a href='#' style={{ backgroundColor: '#11426b' }}></a>
										</li>
										<li>
											<a href='#' style={{ backgroundColor: '#f0f0f0' }}></a>
										</li>
										<li>
											<a href='#' style={{ backgroundColor: '#3fd5c9' }}></a>
										</li>
										<li>
											<a href='#' style={{ backgroundColor: '#979c1c' }}></a>
										</li>
										<li>
											<a href='#' style={{ backgroundColor: '#7d5a3c' }}></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						*/}
					</div>
				</div>
			</div>
		</>
	);
};
