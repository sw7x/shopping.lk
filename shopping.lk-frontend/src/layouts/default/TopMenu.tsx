import React from 'react';
import enFlagIcon from '@assets/images/flags/en.png';
import frFlagIcon from '@assets/images/flags/fr.png';
import { Link } from 'react-router-dom';

export const TopMenu = () => {
	const randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log(randomNumber);

	return (
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
						<a href='' onClick={(e) => e.preventDefault()}>
							Links
						</a>
						<div className='header-menu'>
							<ul>
								{randomNumber % 2 === 0 ? (
									<>
										<li>
											<Link to='/contact'>Contact Us</Link>
										</li>
										<li>
											<Link to='/register'>Register</Link>
										</li>
										<li>
											<Link to='/login' className='login-link'>
												LOG IN
											</Link>
										</li>
									</>
								) : (
									<>
										<li>
											<Link to='/contact'>Contact Us</Link>
										</li>
										<li>
											<Link to='/login' className='login-link'>
												LOG OUT
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
