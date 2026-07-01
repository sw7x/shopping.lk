import React from 'react';
import productImg from '@assets/images/products/product-1.jpg';
import { PackageProductFeatureItem } from '@containers/Package/PackageProductFeatureItem';
import banner4Img from '@assets/images/banner4.png';
import packageSingleBannerImg from '@assets/images/banners/package-single.png';
import { PageHeader } from '../shared/PageHeader';
import { PageBanner } from '../shared/PageBanner';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { ToolTipInfoCircle } from '@root/components/Tooltip';

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
							<div className='package-price-details'>
								<ul className=''>
									<li>
										<i className='icon-ok'></i>Discount : $5.00
									</li>
									<li>
										<i className='icon-ok'></i>Original Price :{' '}
										<span className='_line-through mr-1'>$15.00</span>
										<ToolTipInfoCircle text='Package total pricing may vary based on available stock.' />
									</li>
									<li className='mt-1'>
										<i className='icon-ok'></i>
										<span className='text-black text-5xl mb-1'>
											Discounted Price : $10.00
										</span>
									</li>
								</ul>
							</div>

							<div className='product-single-container product-single-extended mt-2 mb-2'>
								<div className=''>
									<a
										href='cart.html'
										className='ml-0 paction buy-btn'
										title='Add to Cart'
									>
										<div>Buy Now</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-12 package-desc-content'>
							<div className='mt-1 mb-1  package-shipping-details'>
								<div className='text-2xl font-semibold'>
									{' '}
									* Shipping Cost: $8.00{' '}
									<ToolTipInfoCircle text='Shipping Cost also may vary based on available stock.' />
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat.
							</p>
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
