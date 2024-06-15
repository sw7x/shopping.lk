// import enFlagIcon from '@assets/images/flags/en.png';
// import frFlagIcon from '@assets/images/flags/fr.png';
import logo from '@assets/images/logo.png';

//import cartProduct1Img from '@assets/images/products/cart/product-1.jpg';
//import cartProduct2Img from '@assets/images/products/cart/product-2.jpg';
import { MobileMenuBtn } from '@layouts/default/MobileMenuBtn';
import { TopMenu } from '@layouts/default/TopMenu';
import { MainMenu } from '@layouts/default/MainMenu';
import { Search } from '@layouts/default/Search';
import { WishListIcon } from '@layouts/default/WishListIcon';
import { CartQuickMenu } from '@layouts/default/CartQuickMenu';
import { AccountQuickMenu } from '@layouts/default/AccountQuickMenu';
import { Link } from 'react-router-dom';
import { Tooltip } from '@root/components/Tooltip';
type HeaderProps = {
	toggleMobileMenu: () => void;
	showMobileMenu: boolean;
};

export const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, showMobileMenu }) => {
	return (
		<header className='header'>
			<TopMenu />
			{/*  
			<div className='header-top'>
				<div className='container'>
					<div className='header-left header-dropdowns'>
						<div className='header-dropdown'>
							<a href='#'>USD</a>
							<div className='header-menu'>
								<ul>
									<li>
										<a href='#'>LKR</a>
									</li>
									<li>
										<a href='#'>USD</a>
									</li>
								</ul>
							</div>
						</div>

						<div className='header-dropdown'>
							<a href='#'>
								<img src={enFlagIcon} alt='England flag' />
								ENGLISH
							</a>
							<div className='header-menu'>
								<ul>
									<li>
										<a href='#'>
											<img src={enFlagIcon} alt='England flag' />
											ENGLISH
										</a>
									</li>
									<li>
										<a href='#'>
											<img src={frFlagIcon} alt='France flag' />
											FRENCH
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='header-right'>
						{randomNumber % 2 !== 0 && <p className='welcome-msg'>Welcome User123</p>}

						<div className='header-dropdown dropdown-expanded'>
							<a href='#'>Links</a>
							<div className='header-menu'>
								<ul>
									{randomNumber % 2 == 0 && (
										<p className='welcome-msg'>Welcome User123</p>
									)}

									{randomNumber % 2 === 0 ? (
										<>
											<li>
												<a href='#'>Contact Us</a>
											</li>
											<li>
												<a href='register.php'>Register</a>
											</li>
											<li>
												<a href='login.php' className='login-link'>
													LOG IN
												</a>
											</li>
										</>
									) : (
										<>
											<li>
												<a href='#'>Contact Us</a>
											</li>
											<li>
												<a href='login.php' className='login-link'>
													LOG OUT
												</a>
											</li>
										</>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			*/}

			<MobileMenuBtn toggleMobileMenu={toggleMobileMenu} showMobileMenu={showMobileMenu} />
			{/* 
			<div className='mobile-menu-btn-section'>
				<div className='container flex-wrap justify-content-end'>
					<div className='mobile-menu-btn-wrapper'>
						<button className='mobile-menu-toggler' type='button'>
							<i className='icon-menu'></i>
						</button>
					</div>
				</div>
			</div> 
			*/}

			<div className='header-middle'>
				<div className='container flex-wrap'>
					<div className='header-left'>
						<Link to='/' className='logo'>
							<img src={logo} alt='shopping.lk Logo' className='' />
						</Link>
					</div>

					<div className='header-center'>
						<Search />
						{/* <div className='header-search'>
							<form action='#' method='get'>
								<div className='header-search-wrapper'>
									<input
										type='search'
										className='form-control'
										name='q'
										id='q'
										placeholder='Search...'
										required
									/>
									<div className='select-custom'>
										<select id='cat' name='cat'>
											<option value=''>All Categories</option>
											<option value='4'>Fashion</option>
											<option value='12'>- Women</option>
											<option value='13'>- Men</option>
											<option value='66'>- Jewellery</option>
											<option value='67'>- Kids Fashion</option>
											<option value='5'>Electronics</option>
											<option value='21'>- Smart TVs</option>
											<option value='22'>- Cameras</option>
											<option value='63'>- Games</option>
											<option value='7'>Home &amp; Garden</option>
											<option value='11'>Motors</option>
											<option value='31'>- Cars and Trucks</option>
											<option value='32'>
												- Motorcycles &amp; Powersports
											</option>
											<option value='33'>- Parts &amp; Accessories</option>
											<option value='34'>- Boats</option>
											<option value='57'>- Auto Tools &amp; Supplies</option>
										</select>
									</div>
									<button className='btn' type='submit'>
										<i className='icon-magnifier'></i>
									</button>
								</div>
							</form>
						</div> */}
					</div>

					<div className='header-right'>
						<Tooltip text='Wishlist' position='left'>
							<WishListIcon />
						</Tooltip>
						<Tooltip text='Cart' position='left'>
							<CartQuickMenu />
						</Tooltip>
						<Tooltip text='My Account' position='left'>
							<AccountQuickMenu />
						</Tooltip>

						{/* 
						<div className='my-wishlist-icon'>
							<a href='' className='text-4xl' title='Wishlist'>
								<i className='icon-wishlist text-green-600' aria-hidden='true'></i>
							</a>
							<span className='wishlist-count'>2</span>
						</div>

						<div className='dropdown cart-dropdown'>
							<a href='#' title='Cart' className='dropdown-toggle text-green-600'>
								<span className='cart-count'>21</span>
							</a>

							<div className='dropdown-menu'>
								<div className='dropdownmenu-wrapper'>
									<div className='dropdown-cart-header'>
										<span>2 Items</span>
										<a href='cart.php'>View Cart</a>
									</div>

									<div className='dropdown-cart-products'>
										<div className='product'>
											<div className='product-details'>
												<h4 className='product-title'>
													<a href='product.php'>Woman Ring</a>
												</h4>

												<span className='cart-product-info'>
													<span className='cart-product-qty'>1</span>x
													$99.00
												</span>
											</div>

											<figure className='product-image-container'>
												<a href='product.php' className='product-image'>
													<img src={cartProduct1Img} alt='product' />
												</a>
												<a
													href='#'
													className='btn-remove'
													title='Remove Product'
												>
													<i className='icon-cancel'></i>
												</a>
											</figure>
										</div>

										<div className='product'>
											<div className='product-details'>
												<h4 className='product-title'>
													<a href='product.php'>Woman Necklace</a>
												</h4>

												<span className='cart-product-info'>
													<span className='cart-product-qty'>1</span>x
													$35.00
												</span>
											</div>

											<figure className='product-image-container'>
												<a href='product.php' className='product-image'>
													<img src={cartProduct2Img} alt='product' />
												</a>
												<a
													href='#'
													className='btn-remove'
													title='Remove Product'
												>
													<i className='icon-cancel'></i>
												</a>
											</figure>
										</div>
									</div>

									<div className='dropdown-cart-total'>
										<span>Total</span>

										<span className='cart-total-price'>$134.00</span>
									</div>

									<div className='dropdown-cart-action'>
										<a href='cart.php' className='btn btn-primary btn-block'>
											Go to Checkout
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className='my-account-icon dropdown'>
							<a href='#' title='My Account' className='dropdown-toggle'>
								<i className='fa fa-user-alt text-green-600' aria-hidden='true'></i>
							</a>

							<div className='dropdown-menu'>
								<div className='dropdownmenu-wrapper'>
									<ul className='my-account-links'>
										<li>
											<a href='my-account.html'>MY ACCOUNT</a>
										</li>
										<li>
											<a href='#'>MY WISHLIST</a>
										</li>
										<li>
											<a href='#'>Contact Us</a>
										</li>
										<li>
											<a href='login.php' className='login-link'>
												LOG OUT
											</a>
										</li>
									</ul>
								</div>
							</div>

							
						</div> 
						*/}
					</div>
				</div>
			</div>

			<MainMenu />
			{/* 
			<div className='header-bottom _sticky-header' id='header-bottom'>
				<div className='container'>
					<nav className='main-nav'>
						<ul className='menu sf-arrows'>
							<li className='active'>
								<a href='index.php'>Home</a>
							</li>

							<li className='float-right'>
								<a href='category-single.php' className='sf-with-ul'>
									Categories
								</a>
								<ul>
									<li>
										<a href='category-single.php'>Category single</a>
									</li>
									<li>
										<a href='category-single.php'>Category single</a>
									</li>
									<li>
										<a href='category-single.php'>Category single</a>
									</li>
									<li>
										<a href='category-single.php'>Category single</a>
									</li>
								</ul>
							</li>

							<li>
								<a href='#' className='sf-with-ul'>
									HELP & SUPPORT
								</a>
								<ul>
									<li>
										<a href='about.php'>About Us</a>
									</li>
									<li>
										<a href='privacy-policy.php'>Contact Us</a>
									</li>
									<li>
										<a href='contact.php'>Terms & Services</a>
									</li>
									<li>
										<a href='faq.php'>Privacy Policy</a>
									</li>
									<li>
										<a href='terms-and-services.php'>FAQ</a>
									</li>
								</ul>
							</li>

							<li className='float-right'>
								<a href='daily-deals.php'>Daily Deals</a>
							</li>

							<li className='float-right'>
								<a href='package-list.php' className='sf-with-ul'>
									Packages
								</a>
								<ul>
									<li>
										<a href='package-single.php'>Package Single</a>
									</li>
									<li>
										<a href='package-single.php'>Package Single</a>
									</li>
									<li>
										<a href='package-single.php'>Package Single</a>
									</li>
									<li>
										<a href='package-single.php'>Package Single</a>
									</li>
								</ul>
							</li>

							<li>
								<a href='#' className='sf-with-ul'>
									Pages
								</a>
								<ul>
									<li>
										<a href='cart.php'>Shopping Cart</a>
									</li>
									<li>
										<a href='#'>Checkout</a>
										<ul>
											<li>
												<a href='checkout-1-shiiping-form.php'>
													Checkout-1 Shiiping
												</a>
											</li>
											<li>
												<a href='checkout-2-billing-form.php'>
													Checkout-2 Billing
												</a>
											</li>
											<li>
												<a href='checkout-3-pay-with-credit-card.php'>
													Checkout-3 Pay
												</a>
											</li>
											<li>
												<a href='checkout-failed.php'>Checkout Failed</a>
											</li>
											<li>
												<a href='checkout-success.php'>Checkout Success</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='#'>AUTH(GUEST)</a>
										<ul>
											<li>
												<a href='login.php' className='login-link'>
													Login
												</a>
											</li>
											<li>
												<a href='register.php'>Register</a>
											</li>
											<li>
												<a href='forgot-password.php'>Forgot Password</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='#'>AUTH(USER)</a>
										<ul>
											<li>
												<a href='change-password.php'>Change Password</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='#'>ACCOUNT(USER)</a>
										<ul>
											<li>
												<a href='dashboard.php'>Dashboard</a>
											</li>

											<li>
												<a href='account-view.php'>My Account</a>
											</li>
											<li>
												<a href='account-edit.php'>My Account Edit</a>
											</li>

											<li>
												<a href='previously-buy.php'>Previously Buy</a>
											</li>
											<li>
												<a href='my-reviews.php '>My Reviews</a>
											</li>
											<li>
												<a href='wishlist.php'>My Wishlist</a>
											</li>

											<li>
												<a href='my-orders-list.php'>My Orders Llist</a>
											</li>
											<li>
												<a href='my-orders-single.php'>My Orders single</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='brand-list.php' className='sf-with-ul'>
											Brands
										</a>
										<ul>
											<li>
												<a href='brand-single.php'>Brand single</a>
											</li>
											<li>
												<a href='brand-single.php'>Brand single</a>
											</li>
											<li>
												<a href='brand-single.php'>Brand single</a>
											</li>
											<li>
												<a href='brand-single.php'>Brand single</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='about.php'>About Us</a>
									</li>
									<li>
										<a href='contact.php'>Contact Us</a>
									</li>
									<li>
										<a href='product.php'>Product</a>
									</li>
									<li>
										<a href='search.php'>Search</a>
									</li>
									<li>
										<a href='test.php'>Test</a>
									</li>
								</ul>
							</li>

							<li className='float-right'>
								<a href='#' className='sf-with-ul'>
									ACCOUNT(USER)
								</a>
								<ul>
									<li>
										<a href='dashboard.php'>Dashboard</a>
									</li>

									<li>
										<a href='account-view.php'>My Account</a>
									</li>
									<li>
										<a href='account-edit.php'>My Account Edit</a>
									</li>

									<li>
										<a href='previously-buy.php'>Previously Buy</a>
									</li>
									<li>
										<a href='my-reviews.php '>My Reviews</a>
									</li>
									<li>
										<a href='wishlist.php'>My Wishlist</a>
									</li>

									<li>
										<a href='my-orders-list.php'>My Orders Llist</a>
									</li>
									<li>
										<a href='my-orders-single.php'>My Orders single</a>
									</li>
									<li>
										<a href='change-password.php'>Change Password</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>

					<div className='header-right-quick-view' id='header-right-quick-view'>
						<div className='my-wishlist-icon'>
							<a href='' className='text-4xl' title='Wishlist'>
								<i className='icon-wishlist text-green-600' aria-hidden='true'></i>
							</a>
							<span className='wishlist-count'>2</span>
						</div>

						<div className='cart-dropdown'>
							<a
								href='#'
								title='Cart'
								className='dropdown-toggle text-green-600'
								role='button'
							>
								<span className='cart-count'>21</span>
							</a>
						</div>

						<div className='my-account-icon'>
							<a href='' className='text-4xl' title='My Account'>
								<i className='fa fa-user-alt text-green-600' aria-hidden='true'></i>
							</a>
						</div>
					</div>
				</div>
			</div> 
			*/}
		</header>
	);
};
