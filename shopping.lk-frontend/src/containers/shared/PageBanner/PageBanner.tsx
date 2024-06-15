import React from 'react';
import classes from '@containers/shared/PageBanner/PageBanner.module.css';
import defaultPageBannerImg from '@assets/images/banners/default-banner.jpg';

type PageBannerProps = {
	title?: string;
	subtitle?: string;
	backgroundImage?: string;
};

export const PageBanner: React.FC<PageBannerProps> = ({
	title = '',
	subtitle = '',
	backgroundImage = defaultPageBannerImg,
}) => {
	return (
		<>
			<div
				className={`${classes.banner} ${classes['banner-cat']} mb-3`}
				style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
			>
				<div className={`${classes['banner-content']} offset-1 px-3 px-sm-0`}>
					{subtitle && <h2 className={classes['banner-subtitle']}>{subtitle}</h2>}
					{title && <h1 className={classes['banner-title']}>{title}</h1>}
				</div>
			</div>
		</>
	);
};

/* 

banner-cat
.banner
.banner-content
.banner-title
.banner-subtitle






<div
	className='banner banner-cat mb-3'
	style={{ backgroundImage: `url(${bannerImg})` }}
>
	<div className='banner-content _container offset-2'>
		<h2 className='banner-subtitle'>
			check out over <span>200+</span>
		</h2>
		<h1 className='banner-title'>Coasts & Jackets For Woman</h1>
		<a href='#' className='btn btn-primary'>
			Shop Now
		</a>
	</div>
</div>
*/
