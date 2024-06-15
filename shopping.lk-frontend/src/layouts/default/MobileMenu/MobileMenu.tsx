import React, { useRef } from 'react';
import './MobileMenu.css';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
type MobileMenuProps = {
	closeMobileMenu: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ closeMobileMenu }) => {
	const navigate = useNavigate();

	const categoryMainListItem = useRef<HTMLLIElement>(null);
	const categorySubList = useRef<HTMLUListElement>(null);

	const helpMainListItem = useRef<HTMLLIElement>(null);
	const helpSubList = useRef<HTMLUListElement>(null);

	const packagesMainListItem = useRef<HTMLLIElement>(null);
	const packagesSubList = useRef<HTMLUListElement>(null);

	const brandsMainListItem = useRef<HTMLLIElement>(null);
	const brandsSubList = useRef<HTMLUListElement>(null);

	const userMainListItem = useRef<HTMLLIElement>(null);
	const userSubList = useRef<HTMLUListElement>(null);

	const expandNestedMenu = (
		//event: React.MouseEvent<HTMLAnchorElement>,
		event: React.MouseEvent<HTMLSpanElement>,
		liRef: React.RefObject<HTMLLIElement>,
		ulRef: React.RefObject<HTMLUListElement>,
	) => {
		if (liRef.current && ulRef.current) {
			liRef.current.classList.toggle('open');
			ulRef.current.classList.toggle('d-block');
		}

		event.preventDefault();
		event.stopPropagation();
	};

	const goToLink = async (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
		event.preventDefault();
		closeMobileMenu();
		console.log('Current URL:', location.pathname);
		navigate(path);
	};

	return (
		<div className='mobile-menu-container'>
			<div className='mobile-menu-wrapper'>
				<span
					className='mobile-menu-close'
					onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
						closeMobileMenu();
						event.preventDefault();
					}}
				>
					<i className='icon-cancel'></i>
				</span>
				<nav className='mobile-nav'>
					<ul className='mobile-menu'>
						<li>
							<NavLink to='/' onClick={(event) => goToLink(event, '/')}>
								Home
							</NavLink>
						</li>
						<li ref={categoryMainListItem}>
							<NavLink
								to='/category-list'
								onClick={(event) => goToLink(event, '/category-list')}
							>
								Categories{' '}
								<span
									className='mmenu-btn'
									onClick={(event) =>
										expandNestedMenu(
											event,
											categoryMainListItem,
											categorySubList,
										)
									}
								></span>
							</NavLink>
							<ul ref={categorySubList}>
								<li>
									<NavLink
										to='/category/aa'
										onClick={(event) => goToLink(event, '/category/aa')}
									>
										Category single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/category/aa'
										onClick={(event) => goToLink(event, '/category/aa')}
									>
										Category single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/category/aa'
										onClick={(event) => goToLink(event, '/category/aa')}
									>
										Category single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/category/aa'
										onClick={(event) => goToLink(event, '/category/aa')}
									>
										Category single
									</NavLink>
								</li>
							</ul>
						</li>
						<li ref={helpMainListItem}>
							<NavLink to='' onClick={(event) => event.preventDefault()}>
								HELP & SUPPORT{' '}
								<span
									className='mmenu-btn'
									onClick={(event) =>
										expandNestedMenu(event, helpMainListItem, helpSubList)
									}
								></span>
							</NavLink>
							<ul ref={helpSubList}>
								<li>
									<NavLink
										to='/about'
										onClick={(event) => goToLink(event, '/about')}
									>
										About Us
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/privacy-policy'
										onClick={(event) => goToLink(event, '/privacy-policy')}
									>
										Contact Us
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/contact'
										onClick={(event) => goToLink(event, '/contact')}
									>
										Terms & Services
									</NavLink>
								</li>
								<li>
									<NavLink to='/faq' onClick={(event) => goToLink(event, '/faq')}>
										Privacy Policy
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/terms-and-services'
										onClick={(event) => goToLink(event, '/terms-and-services')}
									>
										FAQ
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink
								to='/daily-deals'
								onClick={(event) => goToLink(event, '/daily-deals')}
							>
								Daily Deals
							</NavLink>
						</li>
						<li ref={packagesMainListItem}>
							<NavLink
								to='/package-list'
								onClick={(event) => goToLink(event, '/package-list')}
							>
								Packages{' '}
								<span
									className='mmenu-btn'
									onClick={(event) =>
										expandNestedMenu(
											event,
											packagesMainListItem,
											packagesSubList,
										)
									}
								></span>
							</NavLink>
							<ul ref={packagesSubList}>
								<li>
									<NavLink
										to='/package/aa'
										onClick={(event) => goToLink(event, '/package/aa')}
									>
										Package Single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/package/aa'
										onClick={(event) => goToLink(event, '/package/aa')}
									>
										Package Single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/package/aa'
										onClick={(event) => goToLink(event, '/package/aa')}
									>
										Package Single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/package/aa'
										onClick={(event) => goToLink(event, '/package/aa')}
									>
										Package Single
									</NavLink>
								</li>
							</ul>
						</li>
						<li ref={brandsMainListItem}>
							<NavLink
								to='/brand-list'
								onClick={(event) => goToLink(event, '/brand-list')}
							>
								Brands{' '}
								<span
									className='mmenu-btn'
									onClick={(event) =>
										expandNestedMenu(event, brandsMainListItem, brandsSubList)
									}
								></span>
							</NavLink>
							<ul ref={brandsSubList}>
								<li>
									<NavLink
										to='/brand/aa'
										onClick={(event) => goToLink(event, '/brand/aa')}
									>
										Brands Single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/brand/aa'
										onClick={(event) => goToLink(event, '/brand/aa')}
									>
										Brands Single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/brand/aa'
										onClick={(event) => goToLink(event, '/brand/aa')}
									>
										Brands Single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/brand/aa'
										onClick={(event) => goToLink(event, '/brand/aa')}
									>
										Brands Single
									</NavLink>
								</li>
							</ul>
						</li>
						<li ref={userMainListItem}>
							<NavLink to='' onClick={(event) => event.preventDefault()}>
								User{' '}
								<span
									className='mmenu-btn'
									onClick={(event) =>
										expandNestedMenu(event, userMainListItem, userSubList)
									}
								></span>
							</NavLink>
							<ul ref={userSubList}>
								<li>
									<NavLink
										to='/dashboard'
										onClick={(event) => goToLink(event, '/user/dashboard')}
									>
										Dashboard
									</NavLink>
								</li>

								<li>
									<NavLink
										to='/account-view'
										onClick={(event) => goToLink(event, '/user/account-view')}
									>
										My Account
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/account-edit'
										onClick={(event) => goToLink(event, '/user/account-edit')}
									>
										My Account Edit
									</NavLink>
								</li>

								<li>
									<NavLink
										to='/previously-buy'
										onClick={(event) => goToLink(event, '/user/previously-buy')}
									>
										Previously Buy
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/my-reviews '
										onClick={(event) => goToLink(event, '/user/my-reviews')}
									>
										My Reviews
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/wishlist'
										onClick={(event) => goToLink(event, '/user/wishlist')}
									>
										My Wishlist
									</NavLink>
								</li>

								<li>
									<NavLink
										to='/my-orders-list'
										onClick={(event) => goToLink(event, '/user/my-orders-list')}
									>
										My Orders Llist
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/my-orders/123'
										onClick={(event) => goToLink(event, '/user/my-orders/123')}
									>
										My Orders single
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/change-password'
										onClick={(event) => goToLink(event, '/change-password')}
									>
										Change Password
									</NavLink>
								</li>
							</ul>
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
	);
};
