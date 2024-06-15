import React, { useEffect, useState } from 'react';
type MobileMenuBtnProps = {
	toggleMobileMenu: () => void;
	showMobileMenu: boolean;
};
export const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
	toggleMobileMenu,
	showMobileMenu,
}) => {
	//const [showMobileMenu, setMobileMenu] = useState(false);

	/* useEffect(() => {
		if (showMobileMenu) {
			document.body.classList.add('mmenu-active');
		} else {
			document.body.classList.remove('mmenu-active');
		}
	}, [showMobileMenu]); */

	return (
		<div className='mobile-menu-btn-section'>
			<div className='container flex-wrap justify-content-end'>
				<div className='mobile-menu-btn-wrapper'>
					<button
						className={`mobile-menu-toggler ${showMobileMenu ? 'active' : ''}`}
						type='button'
						onClick={() => toggleMobileMenu()}
					>
						<i className='icon-menu'></i>
					</button>
				</div>
			</div>
		</div>
	);
};
