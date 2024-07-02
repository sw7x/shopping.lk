import React, { useEffect, useState } from 'react';
import { AccountLink } from '@layouts/default/MainMenu/AccountLink';
import { CartLink } from '@layouts/default/MainMenu/CartLink';
import { WishListLink } from '@layouts/default/MainMenu/WishListLink';
import { Menu } from '@layouts/default/MainMenu/Menu';
import { useWindowSize } from '@root/shared/hooks/UseWindowSize';
import { useScrollPosition } from '@root/shared/hooks/useScrollPosition';
import { Tooltip } from '@components/Tooltip';
import '@layouts/default/MainMenu/MainMenu.css';
export const MainMenu = () => {
	const { width } = useWindowSize();
	const scrollHeight = useScrollPosition();
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		if (width >= 992) {
			const header = document.querySelector('header');
			const headerBottom = document.querySelector('#header-bottom') as HTMLElement;
			const headerHeight = header ? header.offsetHeight : 0;
			const headerBottomHeight = headerBottom ? headerBottom.offsetHeight : 0;

			if (scrollHeight > headerHeight - headerBottomHeight) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		} else {
			setSticky(false);
		}
	}, [width, scrollHeight]);

	useEffect(() => {
		const headerRightElem = document.querySelector('.header-middle .header-right');

		if (sticky) {
			headerRightElem?.classList.add('invisible');
		} else {
			headerRightElem?.classList.remove('invisible');
		}
	}, [sticky]);

	return (
		<div className={`header-bottom ${sticky ? 'sticky-header' : ''}`} id='header-bottom'>
			{/* <div className='header-bottom _sticky-header' id='header-bottom'> */}
			<div className='container'>
				<Menu />
				{/* <div className='header-right-quick-view' id='header-right-quick-view'> */}
				<div
					className={`header-right-quick-view ${sticky ? 'show' : ''}`}
					id='header-right-quick-view'
				>
					<Tooltip text='Wishlist' position='bottom' left='25%'>
						<WishListLink />
					</Tooltip>
					<Tooltip text='Cart' position='bottom' left='25%'>
						<CartLink />
					</Tooltip>
					<Tooltip text='My Account' position='left'>
						<AccountLink />
					</Tooltip>
				</div>
			</div>
		</div>
	);
};
