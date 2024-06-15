import React from 'react';
import { ContactForm } from '@containers/Contact/ContactForm';
import { ContactDetails } from '@containers/Contact/ContactDetails';
import { Map } from '@containers/Contact/Map';
import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from '../shared/PageHeader';
import contactBannerImg from '@assets/images/banners/contact.png';
import { PageBanner } from '../shared/PageBanner';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
const Contact = () => {
	return (
		<>
			<PageBanner
				backgroundImage={contactBannerImg}
				title='Contact Us'
				subtitle='Get in touch with us'
			/>

			<Breadcrumb />

			<div className='container'>
				<Map />
				<div className='row'>
					<div className='col-md-8'>
						<ContactForm />
					</div>
					<div className='col-md-4'>
						<ContactDetails />
					</div>
				</div>
			</div>

			<div className='mb-8'></div>
		</>
	);
};

export default Contact;
