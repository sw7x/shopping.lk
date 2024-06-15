import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DefaultLayout } from '@layouts/default/DefaultLayout';

/* 
import CategoryManage from '@containers/CategoryManage';
import { PrivateRoute } from '@root/routes/PrivateRoute';
import { ROLES } from '@root/data/Roles';
const { BeforePost } = await import('@root/containers/BeforePost');
*/

function wait(time: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}

/* 

const About = lazy(() => import('@containers/About'));
const AccountView = lazy(() => import('@containers/AccountView'));
const AccountEdit = lazy(() => import('@containers/AccountEdit'));
const BrandList = lazy(() => import('@containers/BrandList'));
const BrandSingle = lazy(() => import('@containers/BrandSingle'));
const Cart = lazy(() => import('@containers/Cart'));
const CategoryList = lazy(() => import('@containers/CategoryList'));
const CategorySingle = lazy(() => import('@containers/CategorySingle'));
const ChangePassword = lazy(() => import('@containers/ChangePassword'));
const Checkout1ShiipingForm = lazy(() => import('@containers/Checkout1ShiipingForm'));
const Checkout2BillingForm = lazy(() => import('@containers/Checkout2BillingForm'));
const Checkout3Pay = lazy(() => import('@containers/Checkout3Pay'));
const CheckoutFailed = lazy(() => import('@containers/CheckoutFailed'));
const CheckoutSuccess = lazy(() => import('@containers/CheckoutSuccess'));
const Contact = lazy(() => import('@containers/Contact'));
const DailyDeals = lazy(() => import('@containers/DailyDeals'));
const Dashboard = lazy(() => import('@containers/Dashboard'));
const Faq = lazy(() => import('@containers/Faq'));
const ForgotPassword = lazy(() => import('@containers/ForgotPassword'));
const MyOrdersList = lazy(() => import('@containers/MyOrdersList'));
const MyOrdersSingle = lazy(() => import('@containers/MyOrdersSingle'));
const MyReviews = lazy(() => import('@containers/MyReviews'));
const PackageList = lazy(() => import('@containers/PackageList'));
const PackageSingle = lazy(() => import('@containers/PackageSingle'));
const PreviouslyBuy = lazy(() => import('@containers/PreviouslyBuy'));
const PrivacyPolicy = lazy(() => import('@containers/PrivacyPolicy'));
const Product = lazy(() => import('@containers/Product'));
const Register = lazy(() => import('@containers/Register'));
const Search = lazy(() => import('@containers/Search'));

const Test = lazy(() => import('@containers/Test'));
const Test2 = lazy(() => import('@containers/Test2'));
const Wishlist = lazy(() => import('@containers/Wishlist')); 
*/

import Page404 from '@containers/Page404';
import UnAuthorized from '@containers/UnAuthorized';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { ProcessingAnimation } from '@components/ProcessingAnimation';
import { PageLoader } from '@root/components/hoc/PageLoader';
/* 
const Home = lazy(() => import('@containers/Home'));
*/

const Home = lazy(() =>
	wait(10000).then(() =>
		import('@containers/Home').then((module) => {
			//return { default: module.Home };
			return module;
		}),
	),
);

const Login = lazy(() => import('@containers/Login'));
const About = lazy(() => import('@containers/About'));
const Register = lazy(() => import('@containers/Register'));
const Empty = lazy(() => import('@containers/Empty'));
const TermsAndServices = lazy(() => import('@containers/TermsAndServices'));
const PrivacyPolicy = lazy(() => import('@containers/PrivacyPolicy'));
const ForgotPassword = lazy(() => import('@containers/ForgotPassword'));
const ChangePassword = lazy(() => import('@containers/ChangePassword'));
const CategoryList = lazy(() => import('@containers/CategoryList'));
const Contact = lazy(() => import('@containers/Contact'));
const PackageList = lazy(() => import('@containers/PackageList'));
const Package = lazy(() => import('@containers/Package'));
const Product = lazy(() => import('@containers/Product'));
const BrandList = lazy(() => import('@containers/BrandList'));
const Brand = lazy(() => import('@containers/Brand'));
const DailyDeals = lazy(() => import('@containers/DailyDeals'));
const Faq = lazy(() => import('@containers/Faq'));
const Category = lazy(() => import('@containers/Category'));
const CheckoutFailed = lazy(() => import('@root/containers/Checkout/CheckoutFailed'));
const CheckoutSuccess = lazy(() => import('@containers/Checkout/CheckoutSuccess'));
const Search = lazy(() => import('@containers/Search'));
const Cart = React.lazy(() =>
	import('@containers/Checkout/Cart/Cart').then((module) => ({ default: module.Cart })),
);

const Shipping = React.lazy(() =>
	import('@containers/Checkout/Shipping/Shipping').then((module) => ({
		default: module.Shipping,
	})),
);

const Billing = React.lazy(() =>
	import('@containers/Checkout/Billing/Billing').then((module) => ({
		default: module.Billing,
	})),
);

const Payment = React.lazy(() =>
	import('@containers/Checkout/Payment/Payment').then((module) => ({
		default: module.Payment,
	})),
);

const Dashboard = lazy(() => import('@containers/User/Dashboard'));
const AccountEdit = lazy(() => import('@containers/User/AccountEdit'));
const AccountView = lazy(() => import('@containers/User/AccountView'));
const PreviouslyBuyItems = lazy(() => import('@containers/User/PreviouslyBuyItems'));
const ProductReviews = lazy(() => import('@containers/User/ProductReviews'));
const OrderList = lazy(() => import('@containers/User/OrderList'));
const Order = lazy(() => import('@containers/Checkout/Order'));
const Test = lazy(() => import('@containers/Test'));
const Wishlist = lazy(() => import('@containers/User/Wishlist'));

//<Suspense fallback={<ProcessingAnimation style={{ minHeight: '50vh' }} />}>

export const DefaultLayoutRouteList = () => {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route
					path='/'
					element={
						<Suspense fallback={<PageLoader />}>
							{/* <Suspense fallback={<>Loading app...</>}> */}
							<Home />
						</Suspense>
					}
				/>
				<Route
					path='/login'
					element={
						<Suspense fallback={<PageLoader />}>
							<Login />
						</Suspense>
					}
				/>
				<Route
					path='/about'
					element={
						<Suspense fallback={<PageLoader />}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path='/register'
					element={
						<Suspense fallback={<PageLoader />}>
							<Register />
						</Suspense>
					}
				/>
				<Route
					path='/empty'
					element={
						<Suspense fallback={<PageLoader />}>
							<Empty />
						</Suspense>
					}
				/>
				<Route
					path='/terms-and-services'
					element={
						<Suspense fallback={<PageLoader />}>
							<TermsAndServices />
						</Suspense>
					}
				/>
				<Route
					path='/privacy-policy'
					element={
						<Suspense fallback={<PageLoader />}>
							<PrivacyPolicy />
						</Suspense>
					}
				/>
				<Route
					path='/forgot-password'
					element={
						<Suspense fallback={<PageLoader />}>
							<ForgotPassword />
						</Suspense>
					}
				/>
				<Route
					path='/change-password'
					element={
						<Suspense fallback={<PageLoader />}>
							<ChangePassword />
						</Suspense>
					}
				/>
				<Route
					path='/category-list'
					element={
						<Suspense fallback={<PageLoader />}>
							<CategoryList />
						</Suspense>
					}
				/>

				<Route path='/category'>
					<Route index element={<Navigate to='/404' replace={true} />} />
					<Route
						path=':categorySlug'
						element={
							<Suspense fallback={<PageLoader />}>
								<Category />
							</Suspense>
						}
					/>
				</Route>

				<Route
					path='/contact'
					element={
						<Suspense fallback={<PageLoader />}>
							<Contact />
						</Suspense>
					}
				/>

				<Route
					path='/package-list'
					element={
						<Suspense fallback={<PageLoader />}>
							<PackageList />
						</Suspense>
					}
				/>

				<Route path='/package'>
					<Route index element={<Navigate to='/404' replace={true} />} />
					<Route
						path=':packageSlug'
						element={
							<Suspense fallback={<PageLoader />}>
								<Package />
							</Suspense>
						}
					/>
				</Route>

				{/* <Route path='/product'>
					<Route index element={<Navigate to='/404' replace={true} />} />
					<Route
						path=':productSlug'
						element={
							<Suspense fallback={<PageLoader />}>
								<Product />
							</Suspense>
						}
					/>
				</Route> */}

				<Route path='/product'>
					<Route index element={<Navigate to='/404' replace={true} />} />
					<Route
						path=':productSlug'
						element={
							<Suspense fallback={<PageLoader />}>
								<Product />
							</Suspense>
						}
					/>
				</Route>

				<Route
					path='/brand-list'
					element={
						<Suspense fallback={<PageLoader />}>
							<BrandList />
						</Suspense>
					}
				/>

				<Route path='/brand'>
					<Route index element={<Navigate to='/404' replace={true} />} />
					<Route
						path=':brandSlug'
						element={
							<Suspense fallback={<PageLoader />}>
								<Brand />
							</Suspense>
						}
					/>
				</Route>

				<Route
					path='/daily-deals'
					element={
						<Suspense fallback={<PageLoader />}>
							<DailyDeals />
						</Suspense>
					}
				/>
				<Route
					path='/faq'
					element={
						<Suspense fallback={<PageLoader />}>
							<Faq />
						</Suspense>
					}
				/>

				<Route
					path='/search'
					element={
						<Suspense fallback={<PageLoader />}>
							<Search />
						</Suspense>
					}
				/>
				<Route path='/cart'>
					<Route
						index
						element={
							<Suspense fallback={<PageLoader />}>
								<Cart />
							</Suspense>
						}
					/>
					<Route
						path='checkout-1-shipping'
						element={
							<Suspense fallback={<PageLoader />}>
								<Shipping />
							</Suspense>
						}
					/>
					<Route
						path='checkout-2-billing'
						element={
							<Suspense fallback={<PageLoader />}>
								<Billing />
							</Suspense>
						}
					/>
					<Route
						path='checkout-3-payment'
						element={
							<Suspense fallback={<PageLoader />}>
								<Payment />
							</Suspense>
						}
					/>
					<Route
						path='checkout-failed'
						element={
							<Suspense fallback={<PageLoader />}>
								<CheckoutFailed />
							</Suspense>
						}
					/>
					<Route
						path='checkout-success'
						element={
							<Suspense fallback={<PageLoader />}>
								<CheckoutSuccess />
							</Suspense>
						}
					/>
				</Route>

				<Route path='/user'>
					<Route index element={<Navigate to='/404' replace={true} />} />

					<Route
						path='dashboard'
						element={
							<Suspense fallback={<PageLoader />}>
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path='account-edit'
						element={
							<Suspense fallback={<PageLoader />}>
								<AccountEdit />
							</Suspense>
						}
					/>
					<Route
						path='account-view'
						element={
							<Suspense fallback={<PageLoader />}>
								<AccountView />
							</Suspense>
						}
					/>
					<Route
						path='previously-buy'
						element={
							<Suspense fallback={<PageLoader />}>
								<PreviouslyBuyItems />
							</Suspense>
						}
					/>
					<Route
						path='my-reviews'
						element={
							<Suspense fallback={<PageLoader />}>
								<ProductReviews />
							</Suspense>
						}
					/>
					<Route
						path='my-orders-list'
						element={
							<Suspense fallback={<PageLoader />}>
								<OrderList />
							</Suspense>
						}
					/>
					<Route path='my-orders'>
						<Route index element={<Navigate to='/404' replace={true} />} />
						<Route
							path=':orderId'
							element={
								<Suspense fallback={<PageLoader />}>
									<Order />
								</Suspense>
							}
						/>
					</Route>

					<Route
						path='wishlist'
						element={
							<Suspense fallback={<PageLoader />}>
								<Wishlist />
							</Suspense>
						}
					/>
				</Route>

				<Route
					path='/test'
					element={
						<Suspense fallback={<PageLoader />}>
							<Test />
						</Suspense>
					}
				/>

				{/*					
				<Route path='/test2' element={<Test2/>}/>					 
				*/}
				<Route path='/403' element={<UnAuthorized />} />
				<Route path='/404' element={<Page404 />} />
				<Route path='*' element={<Navigate to='/404' replace={true} />} />
			</Route>
		</Routes>
	);
};
