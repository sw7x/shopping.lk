import { Footer } from '@root/layouts/default/Footer';
import { Main } from '@root/layouts/default/Main';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '@root/layouts/default/Header';
import { ScrollTopBtn } from '@components/ScrollTopBtn';
import { MobileMenu } from '@layouts/default/MobileMenu/MobileMenu';
import { useWindowSize } from '@shared/hooks/UseWindowSize';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import { PageBanner } from '@containers/shared/PageBanner';

import defaultBannerImg from '@assets/images/banners/default-banner.jpg';
import banner1Img from '@assets/images/banner1.jpg';
import banner2Img from '@assets/images/banner2.png';
import banner3Img from '@assets/images/banner3.png';
import banner4Img from '@assets/images/banner4.png';
import banner5Img from '@assets/images/banner5.png';

type DefaultLayoutWithPageBannerProps = {
	pageTitle?: string;
	pageSubtitle?: string;
	pageBannerBackgroundImage?: string;
};

export const DefaultLayoutWithPageBanner: React.FC<DefaultLayoutWithPageBannerProps> = ({
	pageTitle = '',
	pageSubtitle = '',
	pageBannerBackgroundImage = defaultBannerImg,
}) => {
	const [showMobileMenu, setMobileMenu] = useState(false);
	const { width } = useWindowSize();
	const isHome = useLocation().pathname === '/';

	const toggleMobileMenu = () => {
		setMobileMenu(!showMobileMenu);
	};
	const closeMobileMenu = () => {
		setMobileMenu(false);
	};

	useEffect(() => {
		if (showMobileMenu) {
			document.body.classList.add('mmenu-active');
		} else {
			document.body.classList.remove('mmenu-active');
		}
	}, [showMobileMenu]);

	useEffect(() => {
		if (width >= 992) closeMobileMenu();
	}, [width]);

	return (
		<>
			<div className='page-wrapper'>
				<Header toggleMobileMenu={toggleMobileMenu} showMobileMenu={showMobileMenu} />
				<Main>
					<PageBanner
						backgroundImage={pageBannerBackgroundImage}
						title={pageTitle}
						subtitle={pageSubtitle}
					/>

					{/* <Breadcrumb /> */}
					<Outlet />
				</Main>
				<Footer />
			</div>
			<div className='mobile-menu-overlay' onClick={closeMobileMenu}></div>

			<MobileMenu closeMobileMenu={closeMobileMenu} />
			{/* 
			<div className='mobile-menu-container'>
				<div className='mobile-menu-wrapper'>
					<span className='mobile-menu-close'>
						<i className='icon-cancel'></i>
					</span>
					<nav className='mobile-nav'>
						<ul className='mobile-menu'>
							<li>
								<a href='index.html'>Home</a>
							</li>
							<li>
								<a href='category.html'>
									Categories <span className='mmenu-btn'></span>
								</a>
								<ul>
									<li>
										<a href='category-banner-full-width.html'>
											Full Width Banner
										</a>
									</li>
									<li>
										<a href='category-banner-boxed-slider.html'>
											Boxed Slider Banner
										</a>
									</li>
									<li>
										<a href='category.html'>Boxed Image Banner</a>
									</li>
									<li>
										<a href='category.html'>Left Sidebar</a>
									</li>
									<li>
										<a href='category-sidebar-right.html'>Right Sidebar</a>
									</li>
									<li>
										<a href='category-flex-grid.html'>Product Flex Grid</a>
									</li>
									<li>
										<a href='category-horizontal-filter1.html'>
											Horizontal Filter 1
										</a>
									</li>
									<li>
										<a href='category-horizontal-filter2.html'>
											Horizontal Filter 2
										</a>
									</li>
									<li>
										<a href='#'>Product List Item Types</a>
									</li>
									<li>
										<a href='category-infinite-scroll.html'>
											Ajax Infinite Scroll
											<span className='tip tip-new'>New</span>
										</a>
									</li>
									<li>
										<a href='category-3col.html'>3 Columns Products</a>
									</li>
									<li>
										<a href='category.html'>4 Columns Products</a>
									</li>
									<li>
										<a href='category-5col.html'>5 Columns Products</a>
									</li>
									<li>
										<a href='category-6col.html'>6 Columns Products</a>
									</li>
									<li>
										<a href='category-7col.html'>7 Columns Products</a>
									</li>
									<li>
										<a href='category-8col.html'>8 Columns Products</a>
									</li>
								</ul>
							</li>
							<li>
								<a href='product.html'>Products</a>
								<ul>
									<li>
										<a href='#'>Variations</a>
										<ul>
											<li>
												<a href='product.html'>Horizontal Thumbnails</a>
											</li>
											<li>
												<a href='product-full-width.html'>
													Vertical Thumbnails
													<span className='tip tip-hot'>Hot!</span>
												</a>
											</li>
											<li>
												<a href='product.html'>Inner Zoom</a>
											</li>
											<li>
												<a href='product-addcart-sticky.html'>
													Addtocart Sticky
												</a>
											</li>
											<li>
												<a href='product-sidebar-left.html'>
													Accordion Tabs
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='#'>Variations</a>
										<ul>
											<li>
												<a href='product-sticky-tab.html'>Sticky Tabs</a>
											</li>
											<li>
												<a href='product-simple.html'>Simple Product</a>
											</li>
											<li>
												<a href='product-sidebar-left.html'>
													With Left Sidebar
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='#'>Product Layout Types</a>
										<ul>
											<li>
												<a href='product.html'>Default Layout</a>
											</li>
											<li>
												<a href='product-extended-layout.html'>
													Extended Layout
												</a>
											</li>
											<li>
												<a href='product-full-width.html'>
													Full Width Layout
												</a>
											</li>
											<li>
												<a href='product-grid-layout.html'>
													Grid Images Layout
												</a>
											</li>
											<li>
												<a href='product-sticky-both.html'>
													Sticky Both Side Info
													<span className='tip tip-hot'>Hot!</span>
												</a>
											</li>
											<li>
												<a href='product-sticky-info.html'>
													Sticky Right Side Info
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href='#'>
									Pages<span className='tip tip-hot'>Hot!</span>
								</a>
								<ul>
									<li>
										<a href='cart.html'>Shopping Cart</a>
									</li>
									<li>
										<a href='#'>Checkout</a>
										<ul>
											<li>
												<a href='checkout-shipping.html'>
													Checkout Shipping
												</a>
											</li>
											<li>
												<a href='checkout-shipping-2.html'>
													Checkout Shipping 2
												</a>
											</li>
											<li>
												<a href='checkout-review.html'>Checkout Review</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='about.html'>About</a>
									</li>
									<li>
										<a href='#' className='login-link'>
											Login
										</a>
									</li>
									<li>
										<a href='forgot-password.html'>Forgot Password</a>
									</li>
								</ul>
							</li>
							<li>
								<a href='blog.html'>Blog</a>
								<ul>
									<li>
										<a href='single.html'>Blog Post</a>
									</li>
								</ul>
							</li>
							<li>
								<a href='contact.html'>Contact Us</a>
							</li>
							<li>
								<a href='#'>
									Special Offer!<span className='tip tip-hot'>Hot!</span>
								</a>
							</li>
							<li>
								<a href='https://1.envato.market/DdLk5' target='_blank'>
									Buy shopping.lk!
								</a>
							</li>
						</ul>
					</nav>

					<div className='social-icons'>
						<a href='#' className='social-icon' target='_blank'>
							<i className='icon-facebook'></i>
						</a>
						<a href='#' className='social-icon' target='_blank'>
							<i className='icon-twitter'></i>
						</a>
						<a href='#' className='social-icon' target='_blank'>
							<i className='icon-instagram'></i>
						</a>
					</div>
				</div>
			</div> 
			*/}
			<ScrollTopBtn />
		</>
	);
};
