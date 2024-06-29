//import React from 'react';
import React, { isValidElement, ReactElement, useContext, useEffect } from 'react';
import { Tab, TabPropsType, Tabs } from '@components/Tabs';
import { TabsContext } from '@components/Tabs/Tabs';
//type TabPropsType = React.ComponentProps<typeof Tab>;
//import { useTabsContext } from '@components/Tabs/Tabs';

export type TabListPropsType = {
	//children: React.ReactNode;
	//children: React.ReactElement<typeof Tab>[];
	children:
		| React.ReactElement<TabPropsType, typeof Tab>
		| React.ReactElement<TabPropsType, typeof Tab>[];
	//children: React.ReactElement<TabPropsType>[];
};

export const TabList: React.FC<TabListPropsType> = ({ children }) => {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('TabList must be called from Tabs component');
	}

	React.Children.forEach(children, (child) => {
		if (!isValidElement(child) || child.type !== Tabs.Tab) {
			throw new Error('TabList children should be of type Tab');
		}
	});

	return (
		<ul className='nav nav-tabs' role='tablist'>
			{/* {children} */}
			{React.Children.map(children, (child, index) => {
				if (child && (child as React.ReactElement).type === Tabs.Tab) {
					return React.cloneElement(child as React.ReactElement, { tabIndex: index });
				}
			})}
		</ul>
	);
};
