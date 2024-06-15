import React from 'react';

export type TabPanelPropsType = {
	//bbb: boolean;
	selected: number;
	index: number;
	children: React.ReactNode;
};

export const TabPanel: React.FC<TabPanelPropsType> = ({ selected, index, children }) => {
	return (
		<div
			className={`tab-pane _fade ${selected == index ? 'showx active' : ''}`}
			id='product-desc-content'
			role='tabpanel'
			aria-labelledby='product-tab-desc'
		>
			<div className='product-desc-content'>{children}</div>
		</div>
	);
};
