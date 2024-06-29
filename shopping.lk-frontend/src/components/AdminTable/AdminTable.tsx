import React, { useEffect, useState } from 'react';
//import { TblData } from '@components/AdminTable/AdminTable-Data';
import { toSnakeCase } from '@shared/utils/string';
import { AddNewRecord } from '@components/AdminTable/AddNewRecord';
import { PageSizeSelector } from '@components/AdminTable/PageSizeSelector';
import { TableSearch } from '@components/AdminTable/TableSearch';
import '@components/AdminTable/AdminTable.css';

import { TableFooter } from '@components/AdminTable/TableFooter';
import { TableHead } from '@components/AdminTable/TableHead';
import { TableBody } from '@components/AdminTable/TableBody';
import { TablePagination } from '@components/AdminTable/TablePagination';
import useColumnSort from './useColumnSort';

export type TblDataObject = {
	//[key: string]: any;
	[key: string]: string | number | boolean;
};

export type colSortType = 'asc' | 'desc' | '';

export type header = {
	key: string;
	title: string;
	isSortable?: boolean;
	isSearchable?: boolean;
	isImage?: boolean;
};

export type SortType = {
	colKey: string;
	sortOrder: colSortType;
};

type AdminTableProps = {
	title?: string;
	canAddRecs?: boolean;
	data: TblDataObject[];
	headers: header[];
};

//todo - searching - isSearchable

export const AdminTable: React.FC<AdminTableProps> = ({
	title = '',
	canAddRecs = false,
	data = [],
	headers = [],
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [recCountPerPage, setRecCountPerPage] = useState(10);
	const [searchBoxVal, setSearchBoxVal] = useState('');

	//const [rowList, setRowList] = useState<TblDataObject[]>([]);
	const [rowList, setRowList] = useState<TblDataObject[]>(data);

	/* 	
	sorting order of columns =  '' ==> asc ==> desc ==> ''
		
		if sort order = asc it means data already sorted in ascending order and next click 
		it will change it to	desc order
		
		if sort order = desc it means data already sorted in descending order and next click 
		it will change it to default order

		if sort order = '' it means data already sorted in default order and next click 
		it will change it to asc order	
	*/
	const [currentSort, setCurrentSort] = useState<SortType>({
		colKey: 'pprice',
		sortOrder: '',
	});

	const {
		sortedData: _sortedData,
		sort: _sort,
		columnSortHandler: dataSortHandler,
		setSortedData,
		setSort,
		//} = useColumnSort(data, currentSort);
	} = useColumnSort(rowList, currentSort); /////~~~~~

	useEffect(() => {
		//setRowList(data);
		if (currentSort.colKey !== '') {
			const headerItem = headers.find((header) => header.key === currentSort.colKey);
			if (headerItem) {
				sortTableData(headerItem);
			}
		}
	}, []);

	const rowRange = {
		start: (currentPage - 1) * recCountPerPage,
		end: currentPage * recCountPerPage,
	};

	const { pathname } = location;

	const sortTableData = (headerDataObj: header) => {
		//setSortedData(rowList);
		const rs = dataSortHandler(headerDataObj.isSortable, headerDataObj.key);
		console.log(_sortedData);
		console.log(_sort);
		/* 
		if (rs) {
			setCurrentSort({
				colKey: headerDataObj.key,
				sortOrder: rs.sort.sortOrder,
			});
		} */
	};

	const handleRowCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value);
		console.log(typeof event.target.value);
		setRecCountPerPage(Number(event.target.value));
		setCurrentPage(1);
	};

	const handleSearch = (searchTxt: string, rows: TblDataObject[]) => {
		console.log(searchTxt);
		setSearchBoxVal(searchTxt);

		console.log(currentSort);
		//setSort(currentSort);
		//setSortedData(rows);

		/*
		const headerItem = headers.find((header) => header.key === currentSort.colKey);
		if (headerItem) {
			sortTableData(headerItem);
		}
		 */

		setRowList(rows);
		/* const headerItem = headers.find((header) => header.key === currentSort.colKey);
		if (headerItem) {
			const result = dataSortHandler(headerItem.isSortable, headerItem.key);
			console.log(result);
		} */

		//
		//
		//dataSortHandler();

		//setPaginationSelectVal(1);
		//setCurrentPage(1);
	};

	const pageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<>
			{JSON.stringify(currentSort)}
			{title && (
				<div className='text-center mb-2 text-4xl font-semibold border'>
					<h2>{title}</h2>
				</div>
			)}
			{canAddRecs && <AddNewRecord url={pathname + '/add'} />}
			{headers.length === 0 && (
				<div className='text-center mb-2 text-3xl font-semibold border px-2 py-5'>
					<h2 className='text-red-600'>
						Unable to show data: Column names are not specified for this table.
					</h2>
				</div>
			)}
			{headers.length > 0 && (
				<>
					<nav className='toolbox _toolbox-pagination data-filter-toolbox'>
						<PageSizeSelector
							id={toSnakeCase(title) + '_row_count'}
							value={rowRange.end}
							handleChange={handleRowCountChange}
						/>

						<div className='col-12 col-sm-12 col-md-5 __search p-0'>
							<TableSearch
								value={searchBoxVal}
								handleChange={handleSearch}
								data={data}
								headers={headers}
							/>
						</div>
					</nav>
					<table className='admin-table'>
						<TableHead
							//data={_sortedData}
							headers={headers}
							currentSortData={_sort}
							//sortHandler={dataSortHandler}
							tblDataSortHandler={sortTableData}
						/>

						<TableBody headers={headers} rows={_sortedData} range={rowRange} />

						<TableFooter headers={headers} />
					</table>
					<TablePagination
						currentPage={currentPage}
						//totalCount={rowList.length}
						totalCount={_sortedData.length}
						pageSize={recCountPerPage}
						onPageChange={pageChange}
						siblingCount={2}
					/>
				</>
			)}
		</>
	);
};
