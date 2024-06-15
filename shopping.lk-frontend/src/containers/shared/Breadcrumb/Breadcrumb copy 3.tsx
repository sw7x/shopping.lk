import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hyphenToTitleCase } from '@shared/utils/string';
import classes from '@containers/shared/Breadcrumb/Breadcrumb.module.css';
import { BreadcrumbUrlConfig } from '@containers/shared/Breadcrumb/BreadcrumbUrlConfig';

export const Breadcrumb = () => {
	const location = useLocation();
	const { pathname } = location;

	let currentLink = '';
	let currentLinkText = '';

	const crumbs = pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb, index, arr) => {
			currentLink += `/${crumb}`;
			//currentLinkText = hyphenToTitleCase(crumb);
			//console.log(arr);

			/* 
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
			*/

			const segCountKey = `segCount${arr.length}`;
			const replaceSegKey = `replaceSegPos${index}`;

			// Check for custom breadcrumb text based on configuration
			if (BreadcrumbUrlConfig[segCountKey]) {
				if (arr.length === 1 && BreadcrumbUrlConfig[segCountKey][crumb]) {
					currentLinkText = BreadcrumbUrlConfig[segCountKey][crumb] as string;
					//currentLinkText = BreadcrumbUrlConfig[segCountKey][crumb][text] as string;
					//currentLink += `/${BreadcrumbUrlConfig[segCountKey][crumb][url] as string}`;
				} else if (
					BreadcrumbUrlConfig[segCountKey][replaceSegKey] &&
					(BreadcrumbUrlConfig[segCountKey][replaceSegKey] as { [key: string]: string })[
						crumb
					]
				) {
					currentLinkText = (
						BreadcrumbUrlConfig[segCountKey][replaceSegKey] as {
							[key: string]: string;
						}
					)[crumb];
					/* 
					
					currentLinkText = (
						BreadcrumbUrlConfig[segCountKey][replaceSegKey] as {
							[key: string]: string;
						}
					)[crumb];
					
					
					*/
				} else {
					currentLinkText = hyphenToTitleCase(crumb);
				}
			} else {
				currentLinkText = hyphenToTitleCase(crumb);
			}

			const isLast = index + 1 === arr.length;
			return (
				<li
					className={`${classes['breadcrumb-item']} ${isLast ? classes['active'] : ''}`}
					key={index}
					aria-current={isLast ? 'page' : undefined}
				>
					<Link to={currentLink}>{currentLinkText}</Link>
				</li>
			);
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
						</ol>
					</div>
				</nav>
			)}
		</>
	);
};
