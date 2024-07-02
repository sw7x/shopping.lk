import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import { PackageProductFeatureItem } from '@containers/Package/PackageProductFeatureItem';
import banner4Img from '@assets/images/banner4.png';
import packageSingleBannerImg from '@assets/images/banners/package-single.png';
import { PageHeader } from '../shared/PageHeader';
import { PageBanner } from '../shared/PageBanner';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

import '@containers/Package/Package.css';
const Package = () => {
	return (
		<>
			<PageBanner backgroundImage={packageSingleBannerImg} title='Package single' />

			<Breadcrumb />

			{/* TODO -height unset */}
			<div className='container'>
				<div className='package-single-row' style={{ height: 'unset' }}>
					<div className='row'>
						<div className='col-md-4 mb-2 mb-md-0'>
							<img src={productImg} className='w-100' />
							<div className='label-group'>
								<div className='product-label label-sale'>$ 5000 OFF</div>
							</div>
						</div>

						<div className='col-md-8'>
							<div className='package-desc-content'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
									in reprehenderit in voluptate velit esse cillum dolore eu fugiat
									nulla pariatur. Excepteur sint occaecat.
								</p>
								<ul className='mt-2'>
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

							<div className='mt-2 package-price-content'>
								<div className='text-3xl font-semibold mb-1'>
									Package Price : <span className='line-through'>$15.00</span>
								</div>
								<div className='text-3xl font-semibold mb-1'>
									Discounted Price : $10.00
								</div>
								<div className='text-3xl font-semibold'>Discount : $5.00</div>
							</div>

							<div className='product-single-container product-single-extended mt-2 mb-2'>
								<div className=''>
									<a
										href='cart.html'
										className='ml-0 paction add-cart'
										title='Add to Cart'
									>
										<span>Add to Cart</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='mb-5 mb-lg-6 mb-xl-7'></div>

			<div className='container package-items'>
				<div className='row'>
					<div className='col-md-12'>
						<h3 className='step-title mb-2'>Package Items</h3>

						<div className='_package-product-list row row-sm'>
							{[...Array(7).keys()].map((key, index) => {
								return (
									<div key={index} className='col-12 col-sm-12  mb-1'>
										<PackageProductFeatureItem />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Package;
