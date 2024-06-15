import React, { PropsWithChildren, ReactElement, ReactNode, isValidElement } from 'react';
import classes from '@components/Table/Table.module.css';

interface Table2Props {
	headings: string[];
	text: string;
}

function isValidText(text: string, headings: string[]): text is string {
	return headings.includes(text);
}

export const Table2: React.FC<Table2Props> = ({ headings, text }) => {
	if (!isValidText(text, headings)) {
		console.error('----Invalid text value. Must be one of the provided headings.');
		return null; // Or handle the error appropriately
	}

	return (
		<div>
			<h2>{text}</h2>
			{/* ... rest of your component content ... */}
		</div>
	);
};

////////////////////////
