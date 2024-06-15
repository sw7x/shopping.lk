import React from 'react';
import bannerImg from '@assets/images/banners/banner-fashion.jpg';
import { BrandItem } from '@containers/BrandList/BrandItem';
import { PageBanner } from '@containers/shared/PageBanner';
import brandListbannerImg from '@assets/images/banners/brand-list.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

const BrandList = () => {
	return (
		<>
			<PageBanner
				backgroundImage={brandListbannerImg}
				title='Coasts & Jackets For Woman'
				subtitle='check out over 200+'
			/>

			<Breadcrumb />

			<div className='container products-body'>
				<div className='row row-sm'>
					{[...Array(12).keys()].map((key, index) => {
						return (
							<div key={index} className='col-12 col-sm-6 col-md-4 col-xl-3'>
								<BrandItem />
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
			<div className='mb-5'></div>
		</>
	);
};

export default BrandList;
