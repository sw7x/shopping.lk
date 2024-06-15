import footerLogo from '@assets/images/logo-light.png';
import paymentMethods from '@assets/images/payment-methods.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='footer-middle'>
					<div className='container'>
						<div className='footer-ribbon'>Get in touch</div>

						<div className='row'>
							<div className='col-md-9'>
								<div className='row'>
									<div className='col-sm-5 col-md-5 text-center text-sm-left'>
										<div className='widget'>
											<h4 className='widget-title'>Contact</h4>
											<ul className='contact-info'>
												<li>
													<span className='contact-info-label'>
														Address:
													</span>
													123 Street Name, City, England
												</li>
												<li>
													<span className='contact-info-label'>
														Phone:
													</span>
													Toll Free <a href='tel:'>(123) 456-7890</a>
												</li>
												<li>
													<span className='contact-info-label'>
														Email:
													</span>{' '}
													<a href='mailto:mail@example.com'>
														mail@example.com
													</a>
												</li>
												<li>
													<span className='contact-info-label'>
														Working Days/Hours:
													</span>
													Mon - Sun / 9:00AM - 8:00PM
												</li>
											</ul>
										</div>
									</div>

									<div className='col-sm-3 col-md-3 text-center text-sm-left'>
										<div className='widget'>
											<h4 className='widget-title'>Help &amp; Support</h4>
											<ul className='links'>
												<li>
													<Link to='/about'>About Us</Link>
												</li>
												<li>
													<Link to='/contact'>Contact Us</Link>
												</li>
												<li>
													<Link to='/terms-and-services'>
														Terms &amp Services
													</Link>
												</li>
												<li>
													<Link to='/privacy-policy'>Privacy Policy</Link>
												</li>
												<li>
													<Link to='/faq'>FAQ</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className='col-sm-4 col-md-4 text-center text-sm-left'>
										<div className='widget'>
											<h4 className='widget-title'>Our Main Features</h4>
											<ul className='links'>
												<li>
													<Link to='/daily-deals'>Daily Deals</Link>
												</li>
												<li>
													<Link to='/package-list'>Packages</Link>
												</li>
												<li>
													<Link to='/brand-list'>Brands</Link>
												</li>
												<li>
													<Link to='/category-list'>Categories</Link>
												</li>
												<li>
													<Link to='/search'>Search</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className='col-md-3'>
								<div className='widget widget-newsletter'>
									<div className='mb-2'>
										<Link to='/' className='logo w-full'>
											<img
												src={footerLogo}
												alt='shopping.lk Logo'
												className='_w-3/5'
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='footer-bottom'>
						<p className='footer-copyright'>Copyright &copy; 2024 Shopping.lk</p>
						<img
							src={paymentMethods}
							alt='payment methods'
							className='footer-payments'
						/>
						<div className='social-icons'>
							<a
								href='//facebook.com/pages/shopping.lk'
								className='social-icon'
								target='_blank'
							>
								<i className='icon-facebook'></i>
							</a>
							<a
								href='//twitter.com/shopping.lk'
								className='social-icon'
								target='_blank'
							>
								<i className='icon-twitter'></i>
							</a>
							<a
								href='//linkedin.com/company/shopping.lk'
								className='social-icon'
								target='_blank'
							>
								<i className='icon-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
