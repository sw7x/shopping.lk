import React from 'react';
import slider1Img from '@assets/images/slider/slide-1.jpg';
import slider2Img from '@assets/images/slider/slide-2.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import classes from './PageSlider.module.css';
import './PageSlider.css';
import { slideSettings } from './slideSettings';

export const PageSlider = () => {
	return (
		<div className='page-slider-container'>
			<div className={classes['page-slider']}>
				<Slider {...slideSettings}>
					<div className={classes['page-slide']}>
						<img src={slider1Img} alt='bannerimg' />
						<div className={`${classes['page-slide-content']} container`}>
							<div className='row'>
								<div className='d-none d-sm-block  col-sm-12 offset-sm-2 col-md-6 offset-md-6 col-lg-5 offset-lg-7'>
									<h4>Premium</h4>
									<h1>Headphones</h1>
									<h3>
										Only <strong>199 USD</strong>
									</h3>
									<a
										href='category.html'
										className={`${classes['page-slide-btn']} btn btn-primary`}
									>
										Shop Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={classes['page-slide']}>
						<img src={slider2Img} alt='bannerimg' />
						<div className={`${classes['page-slide-content']} container`}>
							<div className='row'>
								<div className='d-none d-sm-block col-sm-12 offset-sm-2 col-md-7 offset-md-1 col-lg-6 offset-lg-1 col-xl-6 offset-xl-0'>
									<h4>Amazing</h4>
									<h1>Micro Drones</h1>
									<h3>
										Only <strong>399 USD</strong>
									</h3>
									<a
										href='category.html'
										className={`${classes['page-slide-btn']} btn btn-primary`}
									>
										Shop Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};
