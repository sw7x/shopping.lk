import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hyphenToTitleCase } from '@shared/utils/string';
import { splitUrlSegment } from '@root/shared/utils/url';
import classes from '@containers/shared/Breadcrumb/Breadcrumb.module.css';

export const Breadcrumb = () => {
	const location = useLocation();
	const { hash, pathname, search } = location;

	const urlSegmentArr = splitUrlSegment(pathname);

	if (urlSegmentArr[0] == 'category') urlSegmentArr[1] = 'category-list';
	if (urlSegmentArr[0] == 'package') urlSegmentArr[1] = 'package-list';
	if (urlSegmentArr[0] == 'brand') urlSegmentArr[1] = 'brand-list';

	if (urlSegmentArr[0] == 'my-orders') urlSegmentArr[1] = 'my-orders-list';

	let currentLink = '';
	let currentLinkText = '';

	const crumbs = pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb, index) => {
			currentLink += `/${crumb}`;
			currentLinkText = hyphenToTitleCase(crumb);
			return (
				<div className='crumb' key={index}>
					<Link to={currentLink}>{currentLinkText}</Link>
				</div>
			);
		});

	return (
		<>
			{crumbs}
			{pathname !== '/' && (
				<nav aria-label='breadcrumb' className='breadcrumb-nav'>
					<div className='container'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<a href='/'>
									<i className='icon-home'></i>
								</a>
							</li>
							<li className='breadcrumb-item'>
								<a href='#'>Pages</a>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								About Us
							</li>
						</ol>
					</div>
					{'hash - ' + hash}
					<br />
					{'pathname - ' + pathname}
					<br />
					{'search - ' + search}
					<br />
					{'urlSegmentArr - ' + urlSegmentArr}
				</nav>
			)}
		</>
	);
};

/*  
.breadcrumb-nav
.breadcrumb
.breadcrumb-item
.breadcrumb-item.active
*/
