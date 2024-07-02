import React from 'react';
import { BrandFeatureProduct } from '@containers/Brand/BrandFeatureProduct';
import brandBgImg from '@assets/images/products/single/extended/bg-3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productImg from '@assets/images/products/product-1.jpg';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import type { CustomArrowProps, Settings } from 'react-slick';
import './Brand.css';
import banner4Img from '@assets/images/banner4.png';
import brandSingleBannerImg from '@assets/images/banners/brand-single.png';
import { PageHeader } from '@containers/shared/PageHeader';
import { PageBanner } from '../shared/PageBanner';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { ProductFeatureItem } from '@containers/shared/ProductFeatureItem/ProductFeatureItem';
import '@containers/Brand/Brand.css';

const PageSliderArrowRight = ({ currentSlide, slideCount = 0, ...props }: CustomArrowProps) => (
	<BiChevronRight
		{...props}
		className={
			'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
		}
		aria-hidden='true'
		aria-disabled={currentSlide === slideCount - 1 ? true : false}
	/>
);

const PageSliderArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
	<BiChevronLeft
		{...props}
		className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
		aria-hidden='true'
		aria-disabled={currentSlide === 0 ? true : false}
	/>
);

const Brand = () => {
	const slideSettings: Settings = {
		dots: true,
		//infinite: true,
		infinite: false,
		speed: 800,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,

		/* prevArrow: <BiChevronLeft size={40} color='#16a34a' />,
		nextArrow: (
			<BiChevronRight
				size={22}
				color='#16a34a'
				style={{ width: '50px', height: '50px', top: '33%' }}
				className='w-100'
			/>
		), */
		prevArrow: <PageSliderArrowLeft />,
		nextArrow: <PageSliderArrowRight />,
		//lazyLoad: 'ondemand' as LazyLoadTypes,
		//fade: true,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: 'unslick',
				//settings: 'unslick' as 'unslick',
			},
		],
	};

	return (
		<>
			<PageBanner backgroundImage={brandSingleBannerImg} title='Brand Single' />

			<Breadcrumb />

			<div className='container'>
				<div className='row brand-page-single-row'>
					<div className='col-md-12'>
						<div className='row'>
							<div className='col-md-6 col-lg-4'>
								<img src={brandBgImg} alt='' />
							</div>
							<div className='col-md-6 col-lg-8'>
								<p className=''>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non. Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat nonxcepteur sint occaecat
									cupidatat non. Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non.
								</p>
								<ul>
									<li>
										<i className='icon-ok'></i>Any Product types that You want -
										Simple, Configurable
									</li>
									<li>
										<i className='icon-ok'></i>Downloadable/Digital Products,
										Virtual Products
									</li>
									<li>
										<i className='icon-ok'></i>Inventory Management with
										Backordered items
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mb-5 mb-lg-6 mb-xl-7'></div>
			<div className='product-single-container product-single-extended'>
				<div className='container'>
					<div className='_product-single-details'>
						<div className='product-desc'>
							<p>
								qqq Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat nonxcepteur sint occaecat cupidatat non. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
								non...{' '}
								<a href='#' className='view-more'>
									(View More)
								</a>
							</p>
						</div>

						<div className='product-desc-content'>
							<ul>
								<li>
									<i className='icon-ok'></i>Any Product types that You want -
									Simple, Configurable
								</li>
								<li>
									<i className='icon-ok'></i>Downloadable/Digital Products,
									Virtual Products
								</li>
								<li>
									<i className='icon-ok'></i>Inventory Management with Backordered
									items
								</li>
							</ul>
						</div>

						<div className='product-desc'>
							<p>
								Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
								ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='featured-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='subHeading text-center'>Featured Products</h2>
						</div>
					</div>

					<div className='_row feature_products_slider _px-5'>
						<Slider {...slideSettings}>
							{[...Array(15).keys()].map((key, index) => {
								//return <BrandFeatureProduct key={index} index={index} />;
								return (
									<div className='px-sm-3'>
										<ProductFeatureItem
											key={index}
											index={index}
											isDeal={index === 3 ? true : false}
										/>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};

export default Brand;
