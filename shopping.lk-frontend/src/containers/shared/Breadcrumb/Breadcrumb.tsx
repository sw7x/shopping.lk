import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hyphenToTitleCase } from '@shared/utils/string';
import classes from '@containers/shared/Breadcrumb/Breadcrumb.module.css';
import { BreadcrumbUrlConfig } from '@containers/shared/Breadcrumb/BreadcrumbUrlConfig';
import type {
	BreadcrumbConfig,
	NestedBreadcrumbConfig,
} from '@containers/shared/Breadcrumb/BreadcrumbUrlConfig';

export const Breadcrumb = (props: { [key: string]: string }) => {
	const location = useLocation();
	const { pathname } = location;

	//const [key, value] = Object.entries(props)[0] || ['', ''];
	const propKeys = Object.keys(props);

	// Use the key and value as needed
	//console.log('Key:', key);
	//console.log('Value:', value);

	let currentLink = '';
	let currentLinkText = '';

	const crumbs = pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb, index, arr) => {
			//currentLink += `/${crumb}`;
			//currentLinkText = hyphenToTitleCase(crumb);
			//console.log(arr);

			const segCountKey = `segCount${arr.length}`;
			const replaceSegKey = `replaceSegPos${index}`;

			let breadCrumbconfigObj: BreadcrumbConfig;
			// to search by exact path
			const currentPath = arr.slice(0, index + 1).join('/');

			// to search by path when there is wildcard eg /category/1234 => /category/:slug
			const altCurrentPath = currentPath.includes('/')
				? //? currentPath.replace(/\/[^\/]*$/, '/:slug')

					currentPath
						.split('/')
						.map((segment, index) => (index === 0 ? segment : ':slug'))
						.join('/')
				: currentPath;

			const parentPath = arr.slice(0, index).join('/');
			let disableLink = false;

			// Check for custom breadcrumb text based on configuration
			if (BreadcrumbUrlConfig[segCountKey]) {
				if (arr.length === 1 && BreadcrumbUrlConfig[segCountKey][currentPath]) {
					breadCrumbconfigObj = BreadcrumbUrlConfig[segCountKey][currentPath];

					currentLinkText = breadCrumbconfigObj.hasOwnProperty('text')
						? (breadCrumbconfigObj['text'] as string)
						: crumb;

					currentLink += `/${breadCrumbconfigObj.hasOwnProperty('url') ? breadCrumbconfigObj['url'] : crumb}`;

					disableLink = breadCrumbconfigObj.hasOwnProperty('diableLink')
						? (breadCrumbconfigObj.diableLink as boolean)
						: false;
				} else if (
					// prettier-ignore
					( BreadcrumbUrlConfig[segCountKey][replaceSegKey] as NestedBreadcrumbConfig ) &&
					(
						( BreadcrumbUrlConfig[segCountKey][replaceSegKey] as NestedBreadcrumbConfig )[currentPath] 
						||
						( BreadcrumbUrlConfig[segCountKey][replaceSegKey] as NestedBreadcrumbConfig )[altCurrentPath]
					)
				) {
					const replaceSegConfig = BreadcrumbUrlConfig[segCountKey][
						replaceSegKey
					] as NestedBreadcrumbConfig;

					breadCrumbconfigObj =
						replaceSegConfig[currentPath] || replaceSegConfig[altCurrentPath];

					currentLinkText = breadCrumbconfigObj.hasOwnProperty('text')
						? (breadCrumbconfigObj['text'] as string)
						: crumb;

					propKeys.forEach((propKey) => {
						if (breadCrumbconfigObj.hasOwnProperty('prop')) {
							if (propKey === breadCrumbconfigObj.prop) {
								currentLinkText = hyphenToTitleCase(props[propKey]);
							}
						}
					});

					currentLink = index ? `/${parentPath}` : parentPath;
					currentLink += `/${breadCrumbconfigObj.hasOwnProperty('url') ? breadCrumbconfigObj['url'] : crumb}`;

					disableLink = breadCrumbconfigObj.hasOwnProperty('diableLink')
						? (breadCrumbconfigObj.diableLink as boolean)
						: false;
				} else {
					currentLinkText = hyphenToTitleCase(crumb);
					currentLink += `/${crumb}`;
				}
			} else {
				currentLinkText = hyphenToTitleCase(crumb);
				currentLink += `/${crumb}`;
			}

			const isLast = index + 1 === arr.length;
			return (
				currentLinkText && (
					<li
						className={`${classes['breadcrumb-item']} ${isLast ? classes['active'] : ''}`}
						key={index}
						aria-current={isLast ? 'page' : undefined}
					>
						{isLast || disableLink ? (
							currentLinkText
						) : (
							<Link to={currentLink}>{currentLinkText}</Link>
						)}
						{/* <Link to={currentLink}>{currentLinkText}</Link>*/}
					</li>
				)
			);
		});

	//console.log(crumbs);

	return (
		<>
			{pathname !== '/' && (
				<nav aria-label='breadcrumb' className={classes['breadcrumb-nav']}>
					<div className='container'>
						<ol className={classes['breadcrumb']}>
							<li className={classes['breadcrumb-item']}>
								<a href='/' style={{ fontSize: '2rem' }}>
									<i className='icon-post'></i>
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
