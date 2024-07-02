import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productImg from '@assets/images/products/product-1.jpg';
import bannerSidebarImg from '@assets/images/banners/banner-sidebar.jpg';
import productBrandImg from '@assets/images/product-brand.png';

import type { Settings } from 'react-slick';

import { PiMinus, PiPlus } from 'react-icons/pi';
import ProductTabs from './ProductTabs';
import ProductFeatureItemsSection from './ProductFeatureItemsSection';

import product1BigImg from '@assets/images/products/zoom/product-1-big.jpg';
import product2BigImg from '@assets/images/products/zoom/product-2-big.jpg';
import product3BigImg from '@assets/images/products/zoom/product-3-big.jpg';
import product4BigImg from '@assets/images/products/zoom/product-4-big.jpg';

import product1Img from '@assets/images/products/zoom/product-1.jpg';
import product2Img from '@assets/images/products/zoom/product-2.jpg';
import product3Img from '@assets/images/products/zoom/product-3.jpg';
import product4Img from '@assets/images/products/zoom/product-4.jpg';
import './Product.css';
import Collapsible from '@components/Collapsible/Collapsible';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { ViewStarRatings } from '@components/StarRatings';
import { AddToCartQuantitySelector } from '@containers/shared/AddToCartQuantitySelector';

// Define a function to import images dynamically

const Product = () => {
	const productSliderSettings: Settings = {
		customPaging: function (i: number) {
			if (i == 0) {
				return (
					<a>
						<img src={product1Img} />
					</a>
				);
			}
			if (i == 1) {
				return (
					<a>
						<img src={product2Img} />
					</a>
				);
			}
			if (i == 2) {
				return (
					<a>
						<img src={product3Img} />
					</a>
				);
			}
			if (i == 3) {
				return (
					<a>
						<img src={product4Img} />
					</a>
				);
			}

			return <></>;
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<>
			<Breadcrumb
				productName='Sample Product Name'
				ab='ccc Product Name'
				yy='Saman vb'
				xx='Jagath vb'
			/>

			<div className='container'>
				<div className='row'>
					<div className='col-lg-9'>
						<div className='product-single-container product-single-default'>
							<div className='row'>
								<div className='col-lg-7 col-md-6'>
									{/*  */}
									<div className='product-single-gallery'>
										<Slider {...productSliderSettings}>
											<div>
												<img src={product1BigImg} />
											</div>
											<div>
												<img src={product2BigImg} />
											</div>
											<div>
												<img src={product3BigImg} />
											</div>
											<div>
												<img src={product4BigImg} />
											</div>
										</Slider>

										{/*  
										<div className='product-slider-container product-item'>
											<div className='product-single-carousel owl-carousel owl-theme'>
												<div className='product-item'>
													<img
														className='product-single-image'
														src='./../../src/assets/images/products/zoom/product-1.jpg'
														data-zoom-image='./../../src/assets/images/products/zoom/product-1-big.jpg'
													/>
												</div>
												<div className='product-item'>
													<img
														className='product-single-image'
														src='./../../src/assets/images/products/zoom/product-2.jpg'
														data-zoom-image='./../../src/assets/images/products/zoom/product-2-big.jpg'
													/>
												</div>
												<div className='product-item'>
													<img
														className='product-single-image'
														src='./../../src/assets/images/products/zoom/product-3.jpg'
														data-zoom-image='./../../src/assets/images/products/zoom/product-3-big.jpg'
													/>
												</div>
												<div className='product-item'>
													<img
														className='product-single-image'
														src='./../../src/assets/images/products/zoom/product-4.jpg'
														data-zoom-image='./../../src/assets/images/products/zoom/product-4-big.jpg'
													/>
												</div>
											</div>

											<span className='prod-full-screen'>
												<i className='icon-plus'></i>
											</span>
										</div>
										<div
											className='prod-thumbnail row owl-dots'
											id='carousel-custom-dots'
										>
											<div className='col-3 owl-dot'>
												<img src='./../../src/assets/images/products/zoom/product-1.jpg' />
											</div>
											<div className='col-3 owl-dot'>
												<img src='./../../src/assets/images/products/zoom/product-2.jpg' />
											</div>
											<div className='col-3 owl-dot'>
												<img src='./../../src/assets/images/products/zoom/product-3.jpg' />
											</div>
											<div className='col-3 owl-dot'>
												<img src='./../../src/assets/images/products/zoom/product-4.jpg' />
											</div>
										</div>
										*/}
									</div>
									{/*  */}
								</div>

								<div className='col-lg-5 col-md-6'>
									<div className='product-single-details'>
										<div className='category-list'>
											category :
											<a
												href='category.html'
												className='product-category ml-2'
											>
												Head Phones
											</a>
										</div>
										<div className='product-brand'>
											BRAND :
											<a className='ml-2' href=''>
												Excepteur
											</a>
										</div>
										<h1 className='product-title'>Silver SONY Headset</h1>
										<div className='sold-count'>
											<span className='mr-2'>Sold : 120</span>
											<span>/</span>
											<span className='ml-2'>Available : 60</span>
										</div>

										<div className='sold-count'>
											<span className='mr-2'>Sold Out</span>
										</div>

										<div className='d-flex align-items-center product-ratings-wrapper'>
											<ViewStarRatings rating={9} fontSize={32} />
											<span className='pt-3'>
												<a href='#' className='rating-link'>
													( 6 Reviews )
												</a>
											</span>
										</div>

										{/* 
										<div className='ratings-container'>
											<div className='product-ratings'>
												<span
													className='ratings'
													style={{ width: '60%' }}
												></span>
											</div>
											<a href='#' className='rating-link'>
												( 6 Reviews )
											</a>
										</div> 
										*/}

										<div className='price-box'>
											<div className='product-price'>$101.00</div>
											<div className='old-price'>$81.00</div>
										</div>

										<div className='product-desc'>
											<p>
												Duis aute irure dolor in reprehenderit in voluptate
												velit esse cillum dolore eu fugiat nulla pariatur.
												Excepteur sint occaecat cupidatat non.
											</p>
										</div>

										<div className='product-filters-container'>
											<div className='product-single-filter'>
												<label>Colors:</label>
												<ul className='config-swatch-list'>
													<li className='active'>
														<a
															href='#'
															style={{ backgroundColor: '#6085a5' }}
														></a>
													</li>
													<li>
														<a
															href='#'
															style={{ backgroundColor: '#ab6e6e' }}
														></a>
													</li>
													<li>
														<a
															href='#'
															style={{ backgroundColor: '#b19970' }}
														></a>
													</li>
													<li>
														<a
															href='#'
															style={{ backgroundColor: '#11426b' }}
														></a>
													</li>
												</ul>
											</div>

											<div className='product-single-filter'>
												<label>Sizes:</label>
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
												</ul>
											</div>
										</div>

										<div className='product-action'>
											{/* 
											<div
												className='flex mr-3 _product-single-qty'
												style={{ height: '43px', margin: '0 1rem 1rem 0' }}
											>
												<button
													className='border _mt-4 pt-3 pb-3 pr-6 pl-6'
													onClick={decreaseQuantity}
												>
													<PiMinus />
												</button>

												<span className='border _mt-4 pt-3 pb-3 pr-6 pl-6 count'>
													{count}
												</span>

												<button
													className='border _mt-4 pt-3 pb-3 pr-6 pl-6'
													onClick={increaseQuantity}
												>
													<PiPlus />
												</button>
											</div> 
											*/}
											<AddToCartQuantitySelector />

											<a
												href='cart.html'
												className='paction add-cart'
												title='Add to Cart'
											>
												<span>Add to Cart</span>
											</a>
											<a
												href='#'
												className='paction add-wishlist'
												title='Add to Wishlist'
											>
												<span>Add to Wishlist</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<ProductTabs />
					</div>

					<aside className='sidebar-product col-lg-3 padding-left-lg mobile-sidebar'>
						<div className='sidebar-wrapper'>
							<Collapsible open header='electronics'>
								<ul className='cat-list'>
									<li>
										<a href='#'>Smart TVs</a>
									</li>
									<li>
										<a href='#'>Cameras</a>
									</li>
									<li>
										<a href='#'>Head Phones</a>
									</li>
									<li>
										<a href='#'>Games</a>
									</li>
								</ul>
							</Collapsible>

							<div className='widget widget-brand'>
								<a href='#'>
									<img src={productBrandImg} alt='brand name' />
								</a>
							</div>

							<div className='widget widget-info'>
								<ul>
									<li>
										<i className='icon-shipping'></i>
										<h4>
											FREE
											<br />
											SHIPPING
										</h4>
									</li>
									<li>
										<i className='icon-us-dollar'></i>
										<h4>
											100% MONEY
											<br />
											BACK GUARANTEE
										</h4>
									</li>
									<li>
										<i className='icon-online-support'></i>
										<h4>
											ONLINE
											<br />
											SUPPORT 24/7
										</h4>
									</li>
								</ul>
							</div>

							<div className='widget widget-banner'>
								<div className='banner banner-image'>
									<a href='#'>
										<img src={bannerSidebarImg} alt='Banner Desc' />
									</a>
								</div>
							</div>
						</div>
					</aside>
				</div>
				<ProductFeatureItemsSection />

				<div className='mb-lg-4'></div>
			</div>
		</>
	);
};

export default Product;
