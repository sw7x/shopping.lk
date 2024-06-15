import React, { PropsWithChildren, ReactElement, ReactNode, isValidElement } from 'react';
import classes from '@components/Table/Table.module.css';

/* type TableData = {
	name: string;
	job: string;
	location: string;
};
*/
const data2 = [
	{
		name: 'Cy Ganderton',
		job: 'Quality Control Specialist',
		location: 'Canada',
		country: 'USA',
	},
	{
		name: 'Hart Hagerty',
		job: 'Desktop Support Technician',
		location: 'United States',
		country: 'USA',
	},
	{
		name: 'Brice Swyre',
		job: 'Tax Accountant',
		location: 'China',
		country: 'USA',
	},
	{
		name: 'Brice Swyre',
		job: 'Tax Accountant',
		location: 'China',
		country: 'USA',
	},
	{
		name: 'Brice Swyre',
		job: 'Tax Accountant',
		location: 'China',
		country: 'USA',
	},
];

const tableHeadings2 = [
	{
		key: 'name',
		title: 'Name',
	},
	{
		key: 'job',
		title: 'Job',
	},
	{
		key: 'location',
		title: 'Color',
	},
	{
		key: 'country',
		title: 'ddd',
	},
] as const;

type TableHeadingType2 = (typeof tableHeadings2)[number]['key'];

//type TableHeadingKeys = (typeof tableHeadings2)[number]['key'];

type TableDataType2<T extends TableHeadingType2> = {
	[Key in T]: string;
};

const gg: TableDataType2<TableHeadingType2>[] = [
	//{ name: 'Brice Swyre', job: 'Tax Accountant', location: 'China', country: 'USA' },
];
//=========================================

type TableHeadingType = {
	key: string;
	title: string | ReactElement;

	//[Key in T]: string;

	//key:[Key in T],
	//'title':string
} as const;

type TableProps<T extends TableHeadingType> = {
	data: TableDataType<T[]>[];
	//data: TableDataType1<T[]>;
	//data: T[];
	tableHeadings: T[];
};
/**/
type TableDataType<K extends TableHeadingType[]> = {
	//type TableDataType<T extends string> = {
	//[Key in T[number]['key']]: string | ReactElement;

	//[Key in T]: string;
	[Key in K[number]['key']]: string | ReactElement;
};

//type  = {
let dd: TableDataType<TableHeadingType[]> = [];

//type TableDataType1<K extends TableHeadingType[]> = K[number]['key'];

//typeof columns[number];

//type DataKeyType = (typeof tableHeadings)[number]['key'];
/* type EnrichedTableColumn<T extends object> = {
	[K in keyof T]: {
		title: string;
		rowKey: K;
		formatRow?: (value: T[K]) => string;
	};
}[keyof T]; */

//type Column = (typeof columns)[number]['key'];

export const Table: React.FC<TableProps<TableHeadingType>> = ({ data, tableHeadings }) => {
	
	const gg = tableHeadings as const;
	//const gg = tableHeadings as TableHeadingType[];
	

	const headers = tableHeadings.map((column, index) => {
		return (
			<th key={`headCell-${index}`} className={''}>
				{column.title}
			</th>
		);
	});

	

	const rows = !data?.length ? (
		<tr>
			<td colSpan={tableHeadings.length} className='text-center'>
				No data
			</td>
		</tr>
	) : (
		data?.map((row, index) => {
			return (
				<tr key={`row-${index}`}>
					{tableHeadings.map((column, index2) => {
						const value = row[column.key as keyof typeof row] as string;
						return <td key={`cell-${index2}`}>{value}</td>;
					})}
				</tr>
			);
		})
	);

	return (
		<>
			<table className={classes['content-table']}>
				<thead>
					<tr>{headers}</tr>
				</thead>

				<tbody>{rows}</tbody>
			</table>
		</>
	);
};

////////////////////////
