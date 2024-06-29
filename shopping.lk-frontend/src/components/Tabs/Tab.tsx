import React from 'react';
import { useTabsContext } from '@components/Tabs/Tabs';

export type TabPropsType = {
	tabIndex?: number;
	children: string;
};

export const Tab: React.FC<TabPropsType> = ({ tabIndex, children }) => {
	const { selected, setSelected } = useTabsContext();

	if (typeof tabIndex === 'undefined') {
		throw new Error('Tab should be called from Tabs component');
	}

	const handleChange = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
		setSelected(index);
		event.preventDefault();
	};

	return (
		<li className='nav-item'>
			<a
				className={`nav-link ${selected == tabIndex ? 'active' : ''}`}
				id='product-tab-desc'
				data-toggle='tab'
				href='#product-desc-content'
				role='tab'
				aria-controls='product-desc-content'
				aria-selected={selected == tabIndex}
				onClick={(event) => handleChange(event, tabIndex)}
			>
				{children}
			</a>
		</li>
	);
};
