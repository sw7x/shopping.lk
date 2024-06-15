import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Menu = () => {
	return (
		<nav className='main-nav'>
			<ul className='menu sf-arrows'>
				<li className=''>
					<NavLink to='/'>Home</NavLink>
				</li>

				<li className='float-right'>
					<NavLink to='/category-list' className='sf-with-ul'>
						Categories
					</NavLink>
					<ul>
						<li>
							<NavLink to='/category/aa'>Category single</NavLink>
						</li>
						<li>
							<NavLink to='/category/aa'>Category single</NavLink>
						</li>
						<li>
							<NavLink to='/category/aa'>Category single</NavLink>
						</li>
						<li>
							<NavLink to='/category/aa'>Category single</NavLink>
						</li>
					</ul>
				</li>

				<li>
					<a className='sf-with-ul'>HELP & SUPPORT</a>
					<ul>
						<li>
							<NavLink to='/about'>About Us</NavLink>
						</li>
						<li>
							<NavLink to='/contact '>Contact Us</NavLink>
						</li>
						<li>
							<NavLink to='/terms-and-services'>Terms & Services</NavLink>
						</li>
						<li>
							<NavLink to='/privacy-policy'>Privacy Policy</NavLink>
						</li>
						<li>
							<NavLink to='/faq'>FAQ</NavLink>
						</li>
					</ul>
				</li>

				<li className='float-right'>
					<NavLink to='/daily-deals'>Daily Deals</NavLink>
				</li>

				<li className='float-right'>
					<NavLink to='/package-list' className='sf-with-ul'>
						Packages
					</NavLink>
					<ul>
						<li>
							<NavLink to='/package/aa'>Package Single</NavLink>
						</li>
						<li>
							<NavLink to='/package/aa'>Package Single</NavLink>
						</li>
						<li>
							<NavLink to='/package/aa'>Package Single</NavLink>
						</li>
						<li>
							<NavLink to='/package/aa'>Package Single</NavLink>
						</li>
					</ul>
				</li>

				<li>
					<a className='sf-with-ul'>Pages</a>
					<ul>
						<li>
							<NavLink to='/cart'>Shopping Cart</NavLink>
						</li>
						<li>
							<a className='sf-with-ul'>Checkout</a>
							<ul>
								<li>
									<NavLink to='/cart/checkout-1-shipping'>
										Checkout-1 Shiiping
									</NavLink>
								</li>
								<li>
									<NavLink to='/cart/checkout-2-billing'>
										Checkout-2 Billing
									</NavLink>
								</li>
								<li>
									<NavLink to='/cart/checkout-3-payment'>Checkout-3 Pay</NavLink>
								</li>
								<li>
									<NavLink to='/cart/checkout-failed'>Checkout Failed</NavLink>
								</li>
								<li>
									<NavLink to='/cart/checkout-success'>Checkout Success</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<a className='sf-with-ul'>AUTH(GUEST)</a>
							<ul>
								<li>
									<NavLink to='/login' className='login-link'>
										Login
									</NavLink>
								</li>
								<li>
									<NavLink to='/register'>Register</NavLink>
								</li>
								<li>
									<NavLink to='/forgot-password'>Forgot Password</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<a className='sf-with-ul'>AUTH(USER)</a>
							<ul>
								<li>
									<NavLink to='/change-password'>Change Password</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<a className='sf-with-ul'>ACCOUNT(USER)</a>
							<ul>
								<li>
									<NavLink to='/user/dashboard'>Dashboard</NavLink>
								</li>

								<li>
									<NavLink to='/user/account-view'>My Account</NavLink>
								</li>
								<li>
									<NavLink to='/user/account-edit'>My Account Edit</NavLink>
								</li>

								<li>
									<NavLink to='/user/previously-buy'>Previously Buy</NavLink>
								</li>
								<li>
									<NavLink to='/user/my-reviews '>My Reviews</NavLink>
								</li>
								<li>
									<NavLink to='/user/wishlist'>My Wishlist</NavLink>
								</li>

								<li>
									<NavLink to='/user/my-orders-list'>My Orders Llist</NavLink>
								</li>
								<li>
									<NavLink to='/user/my-orders/123'>My Orders single</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to='/brand-list' className='sf-with-ul'>
								Brands
							</NavLink>
							<ul>
								<li>
									<NavLink to='/brand/aa'>Brand single</NavLink>
								</li>
								<li>
									<NavLink to='/brand/aa'>Brand single</NavLink>
								</li>
								<li>
									<NavLink to='/brand/aa'>Brand single</NavLink>
								</li>
								<li>
									<NavLink to='/brand/aa'>Brand single</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to='/about'>About Us</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact Us</NavLink>
						</li>
						<li>
							<NavLink to='/product/aa'>Product</NavLink>
						</li>
						<li>
							<NavLink to='/search'>Search</NavLink>
						</li>
						<li>
							<NavLink to='/test'>Test</NavLink>
						</li>
					</ul>
				</li>

				<li className='float-right'>
					<NavLink to='/#' className='sf-with-ul'>
						ACCOUNT(USER)
					</NavLink>
					<ul>
						<li>
							<NavLink to='/user/dashboard'>Dashboard</NavLink>
						</li>

						<li>
							<NavLink to='/user/account-view'>My Account</NavLink>
						</li>
						<li>
							<NavLink to='/user/account-edit'>My Account Edit</NavLink>
						</li>

						<li>
							<NavLink to='/user/previously-buy'>Previously Buy</NavLink>
						</li>
						<li>
							<NavLink to='/user/my-reviews '>My Reviews</NavLink>
						</li>
						<li>
							<NavLink to='/user/wishlist'>My Wishlist</NavLink>
						</li>

						<li>
							<NavLink to='/user/my-orders-list'>My Orders Llist</NavLink>
						</li>
						<li>
							<NavLink to='/user/my-orders/123'>My Orders single</NavLink>
						</li>
						<li>
							<NavLink to='/change-password'>Change Password</NavLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};
