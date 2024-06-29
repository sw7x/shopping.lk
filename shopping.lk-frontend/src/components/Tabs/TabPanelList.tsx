//import React from 'react';
import React, { isValidElement, ReactElement, useContext } from 'react';
import { Tab, TabList, TabPanel, type TabPanelPropsType, Tabs } from '@components/Tabs';
import { TabsContext } from '@components/Tabs/Tabs';

export type TabPanelListPropsType = {
	//children: React.ReactElement<typeof Tab> | React.ReactElement<typeof Tab>[];
	//children: React.ReactNode;
	children:
		| React.ReactElement<TabPanelPropsType, typeof TabPanel>
		| React.ReactElement<TabPanelPropsType, typeof TabPanel>[];
};

export const TabPanelList: React.FC<TabPanelListPropsType> = ({ children }) => {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('TabPanelList must be called from Tabs component');
	}

	React.Children.forEach(children, (child) => {
		if (!isValidElement(child) || child.type !== Tabs.TabPanel) {
			throw new Error('TabPanelList children should be of type TabPanel');
		}
	});

	return (
		<div className='tab-content'>
			{/* {children} */}
			{React.Children.map(children, (child, index) => {
				if (child && (child as React.ReactElement).type === Tabs.TabPanel) {
					return React.cloneElement(child as React.ReactElement, { tabIndex: index });
				}
			})}
		</div>
	);
};
