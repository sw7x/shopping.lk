import React from 'react';

type TabPropsType = {
	selected: number;
	index: number;
	handleChange: (index: number) => void;
};

export const Tab: React.FC<TabPropsType> = ({ selected, index, handleChange }) => {
	return (
		<li className='nav-item'>
			<a
				className={`nav-link ${selected == index ? 'active' : ''}`}
				id='product-tab-desc'
				data-toggle='tab'
				href='#product-desc-content'
				role='tab'
				aria-controls='product-desc-content'
				aria-selected={selected == index}
				//onClick={(event) => handleChange(event, 0)}
				onClick={(event) => handleChange(index)}
			>
				Description
			</a>
		</li>
	);
};
