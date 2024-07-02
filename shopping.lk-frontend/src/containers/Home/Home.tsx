import React from 'react';

import promoBgImg from '@assets/images/promo-bg.jpg';
import product1Img from '@assets/images/products/product-1.jpg';

import slider1Img from '@assets/images/slider/slide-1.jpg';
import slider2Img from '@assets/images/slider/slide-2.jpg';
import { PageSlider } from '@containers/shared/PageSlider';
import { ProductCompactFeatureItem } from '@containers/shared/ProductCompactFeatureItem/ProductCompactFeatureItem';
import { ProductFeatureItem } from '../shared/ProductFeatureItem/ProductFeatureItem';
import { FeatureGrid } from '../shared/FeatureGrid/FeatureGrid';

const Home = () => {
	return (
		<>
			<PageSlider />

			{/* 
			<div className='home-slider-container'>
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
			</div> 
			*/}

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
						{[...Array(5).keys()].map((key, index) => {
							return (
								<div
									key={index}
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<ProductCompactFeatureItem
										index={index}
										isDeal={index === 3 ? true : false}
									/>
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

					<FeatureGrid>
						{[...Array(4).keys()].map((key, index) => {
							return (
								<FeatureGrid.GridItem
									key={index}
									className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'
									data={{
										image: product1Img,
										title: 'Product $hort Name',
									}}
								/>
							);
						})}
					</FeatureGrid>
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
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
								>
									<ProductFeatureItem
										index={index}
										isDeal={index === 3 ? true : false}
									/>
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
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<ProductFeatureItem index={index} isDeal={true} />
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
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col'
								>
									<ProductFeatureItem
										index={index}
										isDeal={index === 3 ? true : false}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Random */}
			{/*
			<div className='featured-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading text-center'>ffCategories</h2>
						</div>
					</div>

					<div className='row row-sm'>
						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-xl-1'>
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

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
									</h2>
								</div>
							</div>
						</div>

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
									</h2>
								</div>
							</div>
						</div>

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
									</h2>
								</div>
							</div>
						</div>

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
									</h2>
								</div>
							</div>
						</div>

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-xl-3'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
									</h2>
								</div>
							</div>
						</div>

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-md-2 offset-lg-0'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
									</h2>
								</div>
							</div>
						</div>

						<div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
							<div className='product-default'>
								<figure>
									<a href='product.html'>
										<img src={product1Img} />
									</a>
								</figure>
								<div className='product-details'>
									<h2 className='_product-title'>
										<a href='product.html'>Product Short Name</a>
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

					<FeatureGrid>
						{[...Array(12).keys()].map((key, index) => {
							return (
								<FeatureGrid.GridItem
									key={index}
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
									data={{
										image: product1Img,
										title: 'Product Short Name',
									}}
								/>
							);
						})}
					</FeatureGrid>
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

					<FeatureGrid>
						{[...Array(8).keys()].map((key, index) => {
							return (
								<FeatureGrid.GridItem
									key={index}
									className='col-12 col-sm-6 col-md-3'
									data={{
										image: product1Img,
									}}
								/>
							);
						})}
					</FeatureGrid>

					{/* 
					<FeatureGrid>
						{[...Array(6).keys()].map((key, index) => {
							return (
								<FeatureGrid.GridItem
									key={index}
									className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
									data={{
										image: product1Img,
										title: 'Product Short Name',
									}}
								/>
							);
						})}
					</FeatureGrid>

					<FeatureGrid>
						{[...Array(6).keys()].map((key, index) => {
							return (
								<FeatureGrid.GridItem
									key={index}
									className='col-12 col-sm-6 col-md-3'
									data={{
										image: 'https://via.placeholder.com/300',
										title: 'Product Short Name',
									}}
								/>
							);
						})}
					</FeatureGrid> 
					*/}
				</div>
			</div>

			{/* <div className="mb-6"></div> margin */}
		</>
	);
};

export default Home;
