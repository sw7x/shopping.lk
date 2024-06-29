import React from 'react';
import { useTabsContext } from '@components/Tabs/Tabs';

export type TabPanelPropsType = {
	tabIndex?: number;
	children?: React.ReactNode;
};

export const TabPanel: React.FC<TabPanelPropsType> = ({ tabIndex, children }) => {
	const { selected } = useTabsContext();

	if (typeof tabIndex === 'undefined') {
		throw new Error('TabPanel should be called from Tabs component');
	}

	return (
		<div
			className={`tab-pane _fade ${selected == tabIndex ? 'showx active' : ''}`}
			id='product-desc-content'
			role='tabpanel'
			aria-labelledby='product-tab-desc'
		>
			<div className='product-desc-content'>{children}</div>
		</div>
	);
};
