import React from 'react';

export const ContactDetails = () => {
	return (
		<>
			<h2 className='subtitle'>
				Contact <strong>Details</strong>
			</h2>

			<div className='contact-info'>
				<div>
					<i className='icon-phone'></i>
					<p>
						<a href='tel:'>0201 203 2032</a>
					</p>
					<p>
						<a href='tel:'>0201 203 2032</a>
					</p>
				</div>
				<div>
					<i className='icon-mobile'></i>
					<p>
						<a href='tel:'>201-123-3922</a>
					</p>
					<p>
						<a href='tel:'>302-123-3928</a>
					</p>
				</div>
				<div>
					<i className='icon-mail-alt'></i>
					<p>
						<a href='mailto:#'>shopping.lk@gmail.com</a>
					</p>
					<p>
						<a href='mailto:#'>shopping.lk@shopping.lktemplate.com</a>
					</p>
				</div>
				<div>
					<i className='icon-skype'></i>
					<p>shopping.lk_skype</p>
					<p>shopping.lk_template</p>
				</div>
			</div>
		</>
	);
};
