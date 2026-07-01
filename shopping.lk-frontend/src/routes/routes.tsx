import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { LoadingSpinner } from '@components/LoadingSpinner';
import { ProcessingAnimation } from '@components/ProcessingAnimation';
import { PageLoader } from '@components/hoc/PageLoader';

import { DefaultLayout } from '@layouts/default/DefaultLayout';
//const DefaultLayout = lazy(() => import('@layouts/default/DefaultLayout'));

import UnAuthorized from '@containers/UnAuthorized';
import Page404 from '@containers/Page404';

import About from '@containers/About';
import Category from '@containers/Category';
import CategoryList from '@containers/CategoryList';
import ChangePassword from '@containers/ChangePassword';
import Empty from '@containers/Empty';
import ForgotPassword from '@containers/ForgotPassword';
import Home from '@containers/Home';
import Login from '@containers/Login';
import PrivacyPolicy from '@containers/PrivacyPolicy';
import Register from '@containers/Register';
import TermsAndServices from '@containers/TermsAndServices';
import BrandList from '@containers/BrandList';

import { Billing, Payment, Shipping } from '@containers/Checkout';
import { Cart } from '@containers/Checkout/Cart/Cart';
import CheckoutFailed from '@containers/Checkout/CheckoutFailed';
import CheckoutSuccess from '@containers/Checkout/CheckoutSuccess';

import Contact from '@containers/Contact';
import DailyDeals from '@containers/DailyDeals';
import Faq from '@containers/Faq';
import PackageList from '@containers/PackageList';
import Search from '@containers/Search';

import Package from '@containers/Package';
import Product from '@containers/Product';
import Brand from '@containers/Brand';

//import Dashboard from '@containers/User/Dashboard';
const Dashboard = lazy(() => import('@containers/User/Dashboard'));

import AccountEdit from '@containers/User/AccountEdit';
import AccountView from '@containers/User/AccountView';
import PreviouslyBuyItems from '@containers/User/PreviouslyBuyItems';
import ProductReviews from '@containers/User/ProductReviews';
import OrderList from '@containers/User/OrderList';
import Order from '@containers/Checkout/Order';
import Wishlist from '@containers/User/Wishlist';

import Test from '@containers/Test';
import PrePackagedOrder from '@containers/Checkout/PrePackagedOrder';

const routes = {
	path: '/',
	element: <DefaultLayout />,
	children: [
		{
			path: '/',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Home />
				</Suspense>
			),
		},
		{
			path: '/login',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Login />
				</Suspense>
			),
		},
		{
			path: '/about',
			element: (
				<Suspense fallback={<PageLoader />}>
					<About />
				</Suspense>
			),
		},
		{
			path: '/register',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Register />
				</Suspense>
			),
		},
		{
			path: '/empty',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Empty />
				</Suspense>
			),
		},
		{
			path: '/terms-and-services',
			element: (
				<Suspense fallback={<PageLoader />}>
					<TermsAndServices />
				</Suspense>
			),
		},
		{
			path: '/privacy-policy',
			element: (
				<Suspense fallback={<PageLoader />}>
					<PrivacyPolicy />
				</Suspense>
			),
		},

		{
			path: '/forgot-password',
			element: (
				<Suspense fallback={<PageLoader />}>
					<ForgotPassword />
				</Suspense>
			),
		},
		{
			path: '/change-password',
			element: (
				<Suspense fallback={<PageLoader />}>
					<ChangePassword />
				</Suspense>
			),
		},
		{
			path: '/category-list',
			element: (
				<Suspense fallback={<PageLoader />}>
					<CategoryList />
				</Suspense>
			),
		},

		{
			path: '/category',
			children: [
				{
					index: true,
					element: <Navigate to='/404' replace={true} />,
				},
				{
					path: ':categorySlug',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Category />
						</Suspense>
					),
				},
			],
		},

		{
			path: '/contact',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Contact />
				</Suspense>
			),
		},
		{
			path: '/package-list',
			element: (
				<Suspense fallback={<PageLoader />}>
					<PackageList />
				</Suspense>
			),
		},

		{
			path: '/package',
			children: [
				{
					index: true,
					element: <Navigate to='/404' replace={true} />,
				},
				{
					path: ':packageSlug',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Package />
						</Suspense>
					),
				},
			],
		},

		{
			path: '/product',
			children: [
				{
					index: true,
					element: <Navigate to='/404' replace={true} />,
				},
				{
					path: ':productSlug',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Product />
						</Suspense>
					),
				},
			],
		},

		{ path: '/brand-list', element: <BrandList /> },

		{
			path: '/brand',
			children: [
				{
					index: true,
					element: <Navigate to='/404' replace={true} />,
				},
				{
					path: ':brandSlug',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Brand />
						</Suspense>
					),
				},
			],
		},

		{
			path: '/daily-deals',
			element: (
				<Suspense fallback={<PageLoader />}>
					<DailyDeals />
				</Suspense>
			),
		},
		{
			path: '/faq',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Faq />
				</Suspense>
			),
		},
		{
			path: '/search',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Search />
				</Suspense>
			),
		},
		{
			path: '/cart',
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<PageLoader />}>
							<Cart />
						</Suspense>
					),
				},
				{
					path: 'checkout-1-shipping',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Shipping />
						</Suspense>
					),
				},
				{
					path: 'checkout-2-billing',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Billing />
						</Suspense>
					),
				},
				{
					path: 'checkout-3-payment',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Payment />
						</Suspense>
					),
				},
				{
					path: 'checkout-failed',
					element: (
						<Suspense fallback={<PageLoader />}>
							<CheckoutFailed />
						</Suspense>
					),
				},
				{
					path: 'checkout-success',
					element: (
						<Suspense fallback={<PageLoader />}>
							<CheckoutSuccess />
						</Suspense>
					),
				},
			],
		},
		{
			path: '/user',
			children: [
				{
					index: true,
					element: <Navigate to='/404' replace={true} />,
				},
				{
					path: 'dashboard',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Dashboard />
						</Suspense>
					),
				},
				{
					path: 'account-edit',
					element: (
						<Suspense fallback={<PageLoader />}>
							<AccountEdit />
						</Suspense>
					),
				},
				{
					path: 'account-view',
					element: (
						<Suspense fallback={<PageLoader />}>
							<AccountView />
						</Suspense>
					),
				},
				{
					path: 'previously-buy',
					element: (
						<Suspense fallback={<PageLoader />}>
							<PreviouslyBuyItems />
						</Suspense>
					),
				},
				{
					path: 'my-reviews',
					element: (
						<Suspense fallback={<PageLoader />}>
							<ProductReviews />
						</Suspense>
					),
				},
				{
					path: 'my-orders-list',
					element: (
						<Suspense fallback={<PageLoader />}>
							<OrderList />
						</Suspense>
					),
				},
				{
					path: 'my-orders',
					children: [
						{
							index: true,
							element: <Navigate to='/404' replace={true} />,
						},
						{
							path: 'pakage-123',
							exact: true,
							element: (
								<Suspense fallback={<PageLoader />}>
									<PrePackagedOrder />
								</Suspense>
							),
						},
						{
							path: ':orderId',
							element: (
								<Suspense fallback={<PageLoader />}>
									<Order />
								</Suspense>
							),
						},
					],
				},
				{
					path: 'wishlist',
					element: (
						<Suspense fallback={<PageLoader />}>
							<Wishlist />
						</Suspense>
					),
				},
			],
		},
		{
			path: '/test',
			element: (
				<Suspense fallback={<PageLoader />}>
					<Test />
				</Suspense>
			),
		},

		{ path: '/403', element: <UnAuthorized /> },
		{ path: '/404', element: <Page404 /> },
		{ path: '*', element: <Navigate to='/404' replace /> },
	],
};
export default routes;
