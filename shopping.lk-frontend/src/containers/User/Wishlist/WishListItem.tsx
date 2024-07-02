import React from 'react';
import { ProductFeatrureHorItem } from '@containers/shared/ProductFeatrureHorItem';
import { RiCloseLargeFill } from 'react-icons/ri';

import '@containers/User/Wishlist/WishListItem.css';

type WishListItemPropsType = {
	index: number;
};

export const WishListItem: React.FC<WishListItemPropsType> = ({ index }) => {
	const remove = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		alert('Remove from wishlist');
	};

	return (
		<>
			<div className='wishlist-item col-12'>
				<div className='wishlist-item-body pb-1'>
					<div className='wishlist-item-date'>
						<span className='day'>29</span>
						<span className='month'>Jun</span>
						<span className='year'>2024</span>
					</div>

					<div className=''>
						<ProductFeatrureHorItem
							key={index}
							index={index}
							isWishListItem={true}
							isDeal={true}
						/>
					</div>
				</div>
				<a
					href=''
					className='wishlist-item-remove'
					title='Remove from wishlist'
					onClick={(event) => remove(event)}
				>
					<RiCloseLargeFill />
				</a>
			</div>
		</>
	);
};
