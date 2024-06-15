import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hyphenToTitleCase } from '@shared/utils/string';
import { splitUrlSegment } from '@root/shared/utils/url';
import classes from '@containers/shared/Breadcrumb/Breadcrumb.module.css';

const breadcrumbConfig: { [key: string]: string } = {
	category: 'Category List',
	package: 'Package List',
	brands: 'brand List',
};
const breadcrumbConfigx = {
	//const breadcrumbConfigx: { [key: string]: { [key: string]: string } } = {
	segCount1: {
		about: 'About Us',
	} as { [key: string]: string },
	segCount2: {
		replaceSegPos0: {
			category: 'Category List',
		},
		replaceSegPos1: {
			aa: 'Category aa',
		},
	} as { [key: string]: { [key: string]: string } },
	segCount3: {
		replaceSegPos0: { aa1: 'AA 1' },
		replaceSegPos1: { bb1: 'BB 1' },
		replaceSegPos2: { cc1: 'CC 1' },
	} as { [key: string]: { [key: string]: string } },
};
// Configuration object for custom breadcrumb text
const breadcrumbConfig1 = [
	{ path: '/package/:package-name', text: 'Package List > :package-name' },
	{ path: '/category/:category-name', text: 'Category List > :category-name' },
	{ path: '/brands/:brand-name', text: 'Brands List > :brand-name' },
];

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
		.map((crumb, index, arr) => {
			currentLink += `/${crumb}`;
			currentLinkText = hyphenToTitleCase(crumb);
			console.log(arr);

			//if

			// Check for custom breadcrumb text based on configuration
			if (breadcrumbConfig[crumb]) {
				// If it's the last crumb in the path, show the dynamic part (e.g., category name)
				if (index == 0 && arr.length == 2) {
					currentLinkText = breadcrumbConfig[crumb];
				}
			}
			// if url has one segment eg - /category
			if (arr.length === 1 && breadcrumbConfigx['segCount1'][crumb]) {
				currentLinkText = breadcrumbConfigx['segCount1'][crumb];
			}

			// if url has one segment eg - /category/electronic
			if (arr.length === 2) {
				if (index == 0 && breadcrumbConfigx['segCount2']['replaceSegPos0'][crumb]) {
					currentLinkText = breadcrumbConfigx['segCount2']['replaceSegPos0'][crumb];
				}
				if (index == 1 && breadcrumbConfigx['segCount2']['replaceSegPos1'][crumb]) {
					currentLinkText = breadcrumbConfigx['segCount2']['replaceSegPos1'][crumb];
				}
			}

			// if url has one segment eg - /category/electronic/television
			if (arr.length === 3) {
				if (index == 0 && breadcrumbConfigx['segCount3']['replaceSegPos0'][crumb]) {
					currentLinkText = breadcrumbConfigx['segCount3']['replaceSegPos0'][crumb];
				}
				if (index == 1 && breadcrumbConfigx['segCount3']['replaceSegPos1'][crumb]) {
					currentLinkText = breadcrumbConfigx['segCount3']['replaceSegPos1'][crumb];
				}
				if (index == 2 && breadcrumbConfigx['segCount3']['replaceSegPos2'][crumb]) {
					currentLinkText = breadcrumbConfigx['segCount3']['replaceSegPos2'][crumb];
				}
			}

			if (index + 1 === arr.length) {
				// Last one.
				return (
					<li
						className={`${classes['breadcrumb-item']} ${classes['active']}`}
						key={index}
						aria-current='page'
					>
						<Link to={currentLink}>{currentLinkText}</Link>
					</li>
				);
			} else {
				// Not last one.
				return (
					<li className={classes['breadcrumb-item']} key={index}>
						<Link to={currentLink}>{currentLinkText}</Link>
					</li>
				);
			}

			/* return (
				<li className={classes['breadcrumb-item']} key={index}>
					<Link to={currentLink}>{currentLinkText}</Link>
				</li>
			); */
		});

	console.log(crumbs);

	return (
		<>
			{pathname !== '/' && (
				<nav aria-label='breadcrumb' className={classes['breadcrumb-nav']}>
					<div className='container'>
						<ol className={classes['breadcrumb']}>
							<li className={classes['breadcrumb-item']}>
								<a href='/'>
									<i className='icon-home'></i>
								</a>
							</li>
							{crumbs}

							{/* 
							<li className='breadcrumb-item'>
								<a href='#'>Pages</a>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								About Us
							</li>
							*/}
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
