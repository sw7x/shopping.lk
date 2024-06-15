import React from 'react';

import promoBgImg from '@assets/images/promo-bg.jpg';
import product1Img from '@assets/images/products/product-1.jpg';

import slider1Img from '@assets/images/slider/slide-1.jpg';
import slider2Img from '@assets/images/slider/slide-2.jpg';
import { PageSlider } from '@containers/shared/PageSlider';

const Home = () => {
	return (
		<>
			<PageSlider />

			{/* <div className='home-slider-container'>
				<div className='home-slider _owl-carousel'>
					<div className='home-slide'>
						<div className='slide-bg' data-src={slider1Img}></div>
						<div className='home-slide-content container'>
							<div className='row'>
								<div className='col-md-6 offset-md-6 col-lg-5 offset-lg-7'>
									<h4>Premium</h4>
									<h1>Headphones</h1>
									<h3>
										Only <strong>199 USD</strong>
									</h3>
									<a href='category.html' className='btn btn-primary'>
										Shop Now
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='home-slide'>
						<div className='slide-bg' data-src={slider1Img}></div>
						<div className='home-slide-content container'>
							<h4>Amazing</h4>
							<h1>Micro Drones</h1>
							<h3>
								Only <strong>399 USD</strong>
							</h3>
							<a href='category.html' className='btn btn-primary'>
								Shop Now
							</a>
						</div>
					</div>
				</div>
			</div> */}

			<div className='info-boxes-container'>
				<div className='container'>
					<div className='info-box'>
						<i className='icon-shipping'></i>

						<div className='info-box-content'>
							<h4>FREE SHIPPING & RETURN</h4>
							<p>Free shipping on all orders over $99.</p>
						</div>
					</div>

					<div className='info-box'>
						<i className='icon-us-dollar'></i>

						<div className='info-box-content'>
							<h4>MONEY BACK GUARANTEE</h4>
							<p>100% money back guarantee</p>
						</div>
					</div>

					<div className='info-box'>
						<i className='icon-support'></i>

						<div className='info-box-content'>
							<h4>ONLINE SUPPORT 24/7</h4>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>
			</div>

			{/* highest [min avalable count x sold count] */}
			<div className='featured-section bg-white with-border'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading'>Limited Stock</h2>
						</div>
					</div>

					<div className='row'>
						{[...Array(3).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<figure>
										<a href='product.html'>
											<img src={product1Img} />
										</a>
										<div className='product-title-overlay'>
											<h2 className='product-title'>
												<a href='product.html'>Product Short Name</a>
											</h2>
										</div>
									</figure>
									<div className='product-details'>
										<div className='ratings-container'>
											<div className='product-ratings'>
												<span
													className='ratings'
													style={{ width: '100%' }}
												></span>
											</div>
										</div>
										<div className='price-box'>
											<span className='product-price'>$32.00</span>
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
									<a
										href='#'
										className={`paction add-wishlist ${index == 1 ? 'added' : ''}`}
										title='Add to Wishlist'
									>
										<span>Add to Wishlist</span>
									</a>
								</div>
							);
						})}

						{[...Array(2).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<figure>
										<a href='product.html'>
											<img src={product1Img} />
										</a>
									</figure>
									<div className='product-details'>
										<div className='ratings-container'>
											<div className='product-ratings'>
												<span
													className='ratings'
													style={{ width: '100%' }}
												></span>
											</div>
										</div>
										<h2 className='product-title'>
											<a href='product.html'>Product Short Name</a>
										</h2>
										<div className='price-box'>
											<span className='product-price'>$32.00</span>
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
									<a
										href='#'
										className={`paction add-wishlist ${index == 1 ? 'added' : ''}`}
										title='Add to Wishlist'
									>
										<span>Add to Wishlist</span>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* min discount x1 + highest discount x1 */}
			<div className='featured-section packages-featured-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading text-center'>Packages</h2>
						</div>
					</div>

					<div className='row row-sm featured-item-wrapper'>
						{[...Array(3).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className={`col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 package-item ${index == 0 ? 'offset-xl-1' : ''}`}
								>
									<div className='product-default'>
										<figure>
											<a href='product.html'>
												<img src={product1Img} />
											</a>
										</figure>
										<div className='product-details'>
											<h2 className=''>
												<a href='product.html'>Product Short Name</a>
											</h2>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* (Recently ADD/ LATEST PRODUCTS)  - latest added date & higest [price x maximum avalable count] */}
			<div className='featured-section bg-white with-border'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading'>New Arrivals</h2>
						</div>
					</div>

					<div className='row'>
						{[...Array(6).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
								>
									<figure>
										<a href='product.html'>
											<img src={product1Img} />
											{/* <img src="https://source.unsplash.com/random/600×600"> */}
										</a>
									</figure>
									<div className='product-details'>
										<div className='ratings-container'>
											<div className='product-ratings'>
												<span
													className='ratings'
													style={{ width: '100%' }}
												></span>
											</div>
										</div>
										<h2 className='product-title'>
											<a href='product.html'>Product Short Name</a>
										</h2>
										<div className='price-box'>
											<span className='product-price'>$32.00</span>
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
									<a
										href='#'
										className="paction add-wishlist <?php if($i==1) echo 'added';?>"
										title='Add to Wishlist'
									>
										<span>Add to Wishlist</span>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* min discount x3 + highest discount x2 */}
			<div className='featured-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading'>Daily Deals</h2>
						</div>
					</div>

					<div className='row'>
						{[...Array(5).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<figure>
										<a href='product.html'>
											<img src={product1Img} />
										</a>
									</figure>
									<div className='product-details'>
										<div className='ratings-container'>
											<div className='product-ratings'>
												<span
													className='ratings'
													style={{ width: '100%' }}
												></span>
											</div>
										</div>
										<h2 className='product-title'>
											<a href='product.html'>Product Short Name</a>
										</h2>
										<div className='price-box'>
											<span className='product-price'>$32.00</span>
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
										<div className='product-label label-sale'>$ 5000 OFF</div>
									</div>

									<a
										href='#'
										className="paction add-wishlist <?php if($i==1) echo 'added';?>"
										title='Add to Wishlist'
									>
										<span>Add to Wishlist</span>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* aximum sold count & maximum avalable count */}
			<div className='featured-section bg-white with-border'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading'>Best Buys</h2>
						</div>
					</div>

					<div className='row'>
						{[...Array(5).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<figure>
										<a href='product.html'>
											<img src={product1Img} />
										</a>
									</figure>
									<div className='product-details'>
										<div className='ratings-container'>
											<div className='product-ratings'>
												<span
													className='ratings'
													style={{ width: '100%' }}
												></span>
											</div>
										</div>
										<h2 className='product-title'>
											<a href='product.html'>Product Short Name</a>
										</h2>
										<div className='price-box'>
											<span className='product-price'>$32.00</span>
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
									<a
										href='#'
										className="paction add-wishlist <?php if($i==1) echo 'added';?>"
										title='Add to Wishlist'
									>
										<span>Add to Wishlist</span>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Random */}
			{/*  
				<div className="featured-section">
					<div className="container">

						<div className="row">
							<div className="col-12">
								<h2 className="subHeading text-center">Categories</h2>
							</div>
						</div>

						<div className="row row-sm">

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-xl-1">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-1.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="">
											<a href="product.html">Product Short Name</a>
										</h2>                                
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-2.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>                                
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-3.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-4.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-5.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-xl-3">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-6.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-md-2 offset-lg-0">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-7.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>
									</div>
								</div>
							</div>

							<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
								<div className="product-default">
									<figure>
										<a href="product.html">
											<img src="assets/images/products/product-8.jpg">
										</a>
									</figure>
									<div className="product-details">                                
										<h2 className="_product-title">
											<a href="product.html">Product Short Name</a>
										</h2>                                
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
    		*/}

			<div className='featured-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading text-center'>Categories</h2>
						</div>
					</div>

					<div className='row row-sm featured-grid'>
						{[...Array(12).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
								>
									<div className='featured-grid-item'>
										<figure>
											<a href='product.html'>
												<img src={product1Img} />
											</a>
										</figure>
										<div className='grid-item-details'>
											<h2 className='grid-item-title'>
												<a href='product.html'>Product Short Name</a>
											</h2>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className='container pt-5'>
				<div className='row'>
					<div className='col-md-4'>
						<div className='feature-box'>
							<i className='icon-star'></i>

							<div className='feature-box-content'>
								<h3>Dedicated Service</h3>
								<p>
									Consult our specialists for help with an order, customization,
									or design advice
								</p>
								<a href='#' className='btn btn-sm btn-outline-dark'>
									Get in touch
								</a>
							</div>
						</div>
					</div>

					<div className='col-md-4'>
						<div className='feature-box'>
							<i className='icon-reply'></i>

							<div className='feature-box-content'>
								<h3>Free returns</h3>
								<p>
									We stand behind our goods and services and want you to be
									satisfied with them.
								</p>
								<a href='#' className='btn btn-sm btn-outline-dark'>
									Return Policy
								</a>
							</div>
						</div>
					</div>

					<div className='col-md-4'>
						<div className='feature-box'>
							<i className='icon-paper-plane'></i>

							<div className='feature-box-content'>
								<h3>international shipping</h3>
								<p>
									Currently over 50 countries qualify for express international
									shipping.
								</p>
								<a href='#' className='btn btn-sm btn-outline-dark'>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='mb-1'></div>

			<div className='promo-section' style={{ backgroundImage: `url(${promoBgImg})` }}>
				<div className='container'>
					<h3>the perfect gift</h3>
					<h4>Check off your list with our best gifts</h4>
					<a href='#' className='btn btn-primary'>
						Shop Now
					</a>
				</div>
			</div>

			{/* Random x2 +  
        brands that have higest [price x maximum avalable count] x2 + 
        brands that have highest sold count x2
        brands that have highest rating x2  
	*/}
			<div className='featured-section featured-section bg-white'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading text-center'>SHOP BY BRAND</h2>
						</div>
					</div>

					<div className='row row-sm featured-grid'>
						{[...Array(8).keys()].map((key, index) => {
							return (
								<div key={index} className='col-12 col-sm-6 col-md-3'>
									<div className='featured-grid-item'>
										<figure>
											<a href='product.html'>
												<img src={product1Img} />
											</a>
										</figure>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* <div className="mb-6"></div> margin */}
		</>
	);
};

export default Home;
