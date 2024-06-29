import React, { createContext, useContext, useState } from 'react';

import {
	Tab,
	type TabPropsType,
	TabPanel,
	type TabPanelPropsType,
	TabList,
	type TabListPropsType,
	TabPanelList,
	type TabPanelListPropsType,
} from '@components/Tabs';

type TabsContextType = {
	selected: number;
	setSelected: (index: number) => void;
};

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export type TabsPropsType = {
	//children: React.ReactNode[];
	children: [
		React.ReactElement<TabListPropsType, typeof TabList>,
		React.ReactElement<TabPanelListPropsType, typeof TabPanelList>,
	];
};

type TabsComponentType = React.FC<TabsPropsType> & {
	TabList: React.FC<TabListPropsType>;
	Tab: React.FC<TabPropsType>;
	TabPanelList: React.FC<TabPanelListPropsType>;
	TabPanel: React.FC<TabPanelPropsType>;
};

export const Tabs: TabsComponentType = ({ children }) => {
	const [selected, setSelected] = useState<number>(0);

	return (
		<div className='product-single-tabs'>
			<TabsContext.Provider value={{ selected, setSelected }}>
				{children}
			</TabsContext.Provider>
		</div>
	);
};

export const useTabsContext = () => {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('useTabsContext must be used within a Tabs component');
	}
	return context;
};

const _TabList = (props: TabListPropsType) => {
	return <TabList>{props.children}</TabList>;
};

const _Tab = (props: TabPropsType) => {
	return <Tab {...props}>{props.children}</Tab>;
};

const _TabPanelList = (props: TabPanelListPropsType) => {
	return <TabPanelList>{props.children}</TabPanelList>;
};

const _TabPanel = (props: TabPanelPropsType) => {
	return <TabPanel {...props}>{props.children}</TabPanel>;
};

// Attach the child components as static properties
Tabs.TabList = _TabList;
Tabs.Tab = _Tab;
Tabs.TabPanelList = _TabPanelList;
Tabs.TabPanel = _TabPanel;
