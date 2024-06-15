import React from 'react';
import aboutBannerImg from '@assets/images/banners/about.png';
import { PageBanner } from './shared/PageBanner';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const About = () => {
	return (
		<>
			<PageBanner backgroundImage={aboutBannerImg} title='About Us' subtitle='OUR HISTORY' />

			<Breadcrumb />

			<div className='text-section mb-5'>
				<div className='container'>
					<p className='lead'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but also
						the leap into electronic typesetting, remaining essentially unchanged. It
						was popularised in the 1960s with the release of Letraset sheets containing.
					</p>
				</div>
			</div>
		</>
	);
};
export default About;
