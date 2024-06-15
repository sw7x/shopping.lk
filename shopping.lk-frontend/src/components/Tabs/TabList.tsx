//import React from 'react';
import React, { isValidElement, ReactElement } from 'react';
import { Tab } from './Tab';

type TabPropsType = React.ComponentProps<typeof Tab>;

export type TabListPropsType = {
	//children: React.ReactNode;
	//children: ReactElement<TabPropsType>[];
	selected: number;
	index: number; // Add this line
	children: React.ReactElement<typeof Tab> | React.ReactElement<typeof Tab>[];
	//aaa: string;
};

export const TabList: React.FC<TabListPropsType> = ({ selected, index, children }) => {
	React.Children.forEach(children, (child) => {
		if (!isValidElement(child) || child.type !== Tab) {
			throw new Error('TabList children should be of type Tab');
		}
	});

	return (
		<ul className='nav nav-tabs' role='tablist'>
			{children}
		</ul>
	);
};
