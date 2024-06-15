export interface BreadcrumbConfig {
	text?: string;
	url?: string;
	diableLink?: boolean;
	prop?: string;
}

export interface NestedBreadcrumbConfig {
	[key: string]: BreadcrumbConfig;
}

interface BreadcrumbUrlConfigType {
	[key: string]: {
		[key: string]: BreadcrumbConfig | NestedBreadcrumbConfig;
		//[key: string]: Omit<BreadcrumbConfig, 'prop'> | { [key: string]: BreadcrumbConfig };
	};
}

/*
export const BreadcrumbUrlConfig: BreadcrumbUrlConfigType = {
	segCount1: {
		about: {
			text: 'About Us',
			//url: 'about-us-url',
		},
		contact: {
			text: 'Contact Us',
			//url: 'category-list',
		},
		'terms-and-services': {
			text: 'Terms & Services',
			//url: 'category-list',
		},
		faq: {
			text: 'Frequently Asked Questions',
			//url: 'category-list',
		},
	},
	segCount2: {
		replaceSegPos0: {
			category: {
				text: 'Category List',
				url: 'category-list',
			},
			package: {
				text: 'Package List',
				url: 'package-list',
			},
			brand: {
				text: 'Brand List',
				url: 'brand-list',
			},
			'my-orders': {
				text: 'My Orders List',
				url: 'my-orders-list',
			},
			user: {
				diableLink: true,
				text: 'User Area',
			},
			product: {
				//text: ':productName',
				diableLink: true,
			},
		},
		replaceSegPos1: {
			'category/aa': {
				text: 'Category aa',
				//url: 'category-aa',
			},
			'package/aa': {
				text: 'Package aa',
				//url: 'package-aa',
			},
			'brand/aa': {
				text: 'Brand aa',
				//url: 'brand-aa',
			},

			'checkout-2-billing': {
				text: 'Billing',
				//url: 'category-list',
			},
			'product/123': {
				prop: 'ab',
			},
			'product/:slug': {
				prop: 'productName',
			},
		},
	},
	segCount3: {
		replaceSegPos0: {
			category: {
				text: 'Category List 3',
				url: 'category-listj',
			},
			user: {
				diableLink: true,
				text: 'User Area',
			},
		},
		replaceSegPos1: {
			'category/aa': {
				text: 'Category aa 3',
				url: 'category-aa-0',
			},
			'product/123': {
				prop: 'xx',
				text: 'Category List',
				//diableLink: true,
				url: 'category-list',
			},
			'product/:slug': {
				prop: 'yy',
			},
		},
		replaceSegPos2: {
			'category/aa/bb': {
				text: 'Category bb 3',
				url: 'category-bb-0',
			},
			'product/123/bb': {
				prop: 'ab',
			},
			'product/:slug/:slug': {
				prop: 'productName',
			},
		},
	},
};
*/

export const BreadcrumbUrlConfig: BreadcrumbUrlConfigType = {
	segCount1: {
		about: {
			text: 'About Us',
			//url: 'about-us-url',
		},
		contact: {
			text: 'Contact Us',
			//url: 'category-list',
		},
		'terms-and-services': {
			text: 'Terms & Services',
			//url: 'category-list',
		},
		faq: {
			text: 'Frequently Asked Questions',
			//url: 'category-list',
		},
	},
	segCount2: {
		replaceSegPos0: {
			category: {
				text: 'Category List',
				url: 'category-list',
			},
			package: {
				text: 'Package List',
				url: 'package-list',
			},
			brand: {
				text: 'Brand List',
				url: 'brand-list',
			},
			'my-orders': {
				text: 'My Orders List',
				url: 'my-orders-list',
			},
			user: {
				diableLink: true,
				text: 'User Area',
			},
			product: {
				//text: ':productName',
				diableLink: true,
			},
		},
		replaceSegPos1: {
			'checkout-2-billing': {
				text: 'Billing',
				//url: 'category-list',
			},
			'product/:slug': {
				prop: 'productName',
			},
		},
	},
	segCount3: {
		replaceSegPos0: {
			user: {
				diableLink: true,
				text: 'User Area',
			},
			product: {
				//prop: 'yy',
			},
		},
		replaceSegPos1: {
			'product/:slug': {
				//prop: 'yy',
			},
		},
		replaceSegPos2: {
			'product/:slug/:slug': {
				//prop: 'productName',
			},
		},
	},
};

/* 

when url has one segment eg /category use BreadcrumbUrlConfig.segCount1

when url has two segments eg /category/electronic BreadcrumbUrlConfig.segCount2

when url has three segments eg /category/electronic/television BreadcrumbUrlConfig.segCount3


when url has two segments if you want to replcae the 2nd position of text(array index 1), url in breadcrum use replaceSegPos1  
	eg for text --- 
		url =  /category/electronic/   
		breadcumb = ⌂ > category > Electronic item(text = BreadcrumbUrlConfig.segCount2.replaceSegPos1.text)

	eg for url --- 
		url =  /category/electronic/ 
		breadcumb = ⌂ > category(url= /category) > electronic(url= '/' + BreadcrumbUrlConfig.segCount2.replaceSegPos1.url)


when url has 3 segments if you want to replcae the 3rd position of text(array index 2), url in breadcrum use replaceSegPos2  
	eg for text --- 
		url =  /category/electronic/television   
		breadcumb = ⌂ > category > electronic > Television Item (text = BreadcrumbUrlConfig.segCount2.replaceSegPos2.text)

	eg for url --- 
		url =  /category/electronic/television 
		breadcumb = ⌂ > category(url= /category) > electronic > television(url= '/' + BreadcrumbUrlConfig.segCount2.replaceSegPos2.url)


if text = '' then that breadcrum item will not displayed

if disableLink = true then link of that breadcrum item will be disabled 
(last breadcrum item link automatically disabled)


to search by exact path key value can be like this 'product/123/bb'
to search by path when there is wildcard in url
	url =  /category/1234
	key =  /category/:slug




// ===========================================================//
// ==================== props ================================//
// ===========================================================//
* use props for exact url 

	when url has two segments if you want to replcae the 2nd position(array index 1) of text with a prop value that passed to the breadcrumb componenet
		url = /product/123
		prop value = propValue
		prop key  = propKey

		make BreadcrumbUrlConfig.segCount2.replaceSegPos1['product/123'].prop = propKey    
		then text in breadcrum will become  ⌂ > Product > propValue


* use props for wildcard urls 

	when url has two segments if you want to replcae the 2nd position(array index 1) of text with a prop value that passed to the breadcrumb componenet
		url = /product/123
		prop value = propValue
		prop key  = propKey

		make BreadcrumbUrlConfig.segCount2.replaceSegPos1['product/:slug'].prop = propKey    
		then text in breadcrum will become  ⌂ > Product > propValue

	when url has 3 segments if you want to replcae the 1st position(array index 0) of text with a prop value that passed to the breadcrumb componenet
		url = /product/123/bb
		prop value = propValue
		prop key  = propKey

		make BreadcrumbUrlConfig.segCount3.replaceSegPos0.product.prop = propKey    
		then text in breadcrum will become  ⌂ > propValue > 123 > Bb


	when url has 3 segments if you want to replcae the 2nd position(array index 1) of text with a prop value that passed to the breadcrumb componenet
		url = /product/123/bb
		prop value = propValue
		prop key  = propKey

		make BreadcrumbUrlConfig.segCount3.replaceSegPos1['product/:slug'].prop = propKey    
		then text in breadcrum will become  ⌂ > Product > propValue > Bb


	when url has 3 segments if you want to replcae the 3rd position(array index 2) of text with a prop value that passed to the breadcrumb componenet
		url = /product/123/bb
		prop value = propValue
		prop key  = propKey

		make BreadcrumbUrlConfig.segCount3.replaceSegPos2['product/:slug/:slug'].prop = propKey    
		then text in breadcrum will become  ⌂ > Product > 123 > propValue




if text, prop both exists in config then priority gives to prop

*/
