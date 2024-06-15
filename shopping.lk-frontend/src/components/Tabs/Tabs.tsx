import React, { useState } from 'react';
import { TabList, TabListPropsType } from './TabList';
import { TabPanel, TabPanelPropsType } from './TabPanel';
import { Tab } from './Tab';

type TabsPropsType = {
	//children: React.ReactNode;

	children: React.ReactElement<TabPanelPropsType>[];
};
export const Tabs: React.FC<TabsPropsType> = ({ children }) => {
	const [selected, setSelected] = useState<number>(0);

	//const dd = React.cloneElement(<TabList children={undefined} aaa={''} />, { aaa: 'selected' });

	const handleChange = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
		setSelected(index);
		event.preventDefault();
	};

	//const tabListElements: React.ReactElement<typeof TabList>[] = [];
	//const tabPanelElements: React.ReactElement<typeof TabPanel>[] = [];

	const tabListElements1: React.ReactElement<TabListPropsType>[] = [];
	const tabPanelElements1: React.ReactElement<TabPanelPropsType>[] = [];
	// Separate children into TabList and TabPanel components
	//const tabListElements: React.ReactElement<typeof TabList>[] = [];
	//const tabPanelElements: React.ReactElement<typeof TabPanel>[] = [];

	//const tabPanelElements: ReturnType<TabPanel>[] = [];
	//const tabPanelElements1: TabPanel<TabPanelPropsType>[] = [];
	/* 
	//children: ReactElement<TabPropsType>[];
	children: React.ReactElement<typeof Tab> | React.ReactElement<typeof Tab>[];
	
	
	*/
	let tabPanelIndex = 0;
	let tabListIndex = 0;
	React.Children.forEach(children, (child) => {
		if (React.isValidElement(child)) {
			if (child.type === TabList) {
				const TabListChild = child;
				const childReactElemArr:
					| React.ReactElement<typeof Tab>
					| React.ReactElement<typeof Tab>[] = [];

				React.Children.forEach(child, (TabListChildElem) => {
					childReactElemArr.push(
						React.cloneElement(TabListChildElem as React.ReactElement<typeof Tab>),
					);
				});

				//child.children;

				//const tabListProps: TabListPropsType = { aaa: true };
				// Adjust according to actual prop names and types
				tabListElements1.push(
					React.cloneElement(child as React.ReactElement<TabListPropsType>, {
						index: tabListIndex,
						selected: selected,
						children: childReactElemArr,
					}),
				);

				tabListIndex++;
			} else if (child.type === typeof TabPanel) {
				let tabPanelIndex = 0;
				//const TabPanelProps: TabPanelPropsType = { bbb: true };
				// Adjust according to actual prop names and types
				tabPanelElements1.push(
					React.cloneElement(child as React.ReactElement<TabPanelPropsType>, {
						selected: selected,
						index: tabPanelIndex,
						children: child.props.children,
					}),
				);

				tabPanelIndex++;
			} else {
				throw new Error('Tabs children should be of type TabList or TabPanel');
			}
		} else {
			throw new Error('inavlid children in Tabs');
		}
	});

	return (
		<div className='product-single-tabs'>
			{children}
			<>{tabListElements1}</>
			{/* <TabList /> componenets */}
			<div className='tab-content'>
				<>{tabPanelElements1}</>
				{/* <TabPanel /> componenets */}
			</div>
		</div>
	);
};
