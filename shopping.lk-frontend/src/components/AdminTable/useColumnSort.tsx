import { useState, useCallback, useEffect } from 'react';
import { TblDataObject, SortType, colSortType } from '@components/AdminTable/AdminTable';
import { isNumeric } from '@root/shared/utils/math';

export type columnSortHandlerType = (
	isSortable: boolean | undefined,
	headerKey: string,
) =>
	| {
			sortedArray: TblDataObject[];
			sort: { colKey: string; sortOrder: colSortType };
	  }
	| undefined;

const useColumnSort = (rowData: TblDataObject[], sortingOrder: SortType) => {
	const [sortedData, setSortedData] = useState<TblDataObject[]>(rowData);
	const [sort, setSort] = useState<SortType>(sortingOrder);

	//const [sortedData, setSortedData] = useState<TblDataObject[]>([]);
	//const [sort, setSort] = useState<SortType>({ colKey: '', sortOrder: '' });

	useEffect(() => {
		//setSortedData(rowData);
		//setSort(sortingOrder);
		console.log(rowData);
	}, []);

	useEffect(() => {
		//setSortedData(rowData);
		//setSort(sortingOrder);
		//columnSortHandler(true, sort.colKey);
		console.log(rowData);
		console.log(sortedData);
	}, [rowData]);

	useEffect(() => {
		//setSort(sortingOrder);
		//columnSortHandler(true, sort.colKey);
		console.log(sortingOrder);
		console.log(sort);
	}, [sortingOrder]);

	/* ============= DEBUG ========================== */
	useEffect(() => {
		//columnSortHandler(true, sort.colKey);
	}, [sortedData, sort]);

	useEffect(() => {
		setSort(sortingOrder);
		setSortedData(rowData);

		columnSortHandler(true, sort.colKey);
	}, [rowData, sortingOrder]);

	useEffect(() => {
		//columnSortHandler(true, sort.colKey);
		console.log(sortedData);
	}, [sortedData]);

	const columnSortHandler = useCallback(
		(isSortable = false, headerKey: string) => {
			if (!isSortable) return;

			// sorting order og columnsd =  '' ==> asc ==> desc ==> ''
			//todo-future when near by data cells (2 or more ) have same value then they order by 1st header column
			//todo-future when near by data cells have same modified value eg ab then they order by it's original value (AB,Ab,aB,ab)

			//if sorted column details are in state then get it's sort type, if not start from asc order
			//const currentSortType = headerKey === sortingOrder.colKey ? sortingOrder.sortOrder : '';
			const currentSortType = headerKey === sort.colKey ? sort.sortOrder : '';

			let sortedType: colSortType = '';
			let newArr = [...rowData];
			let sortedArray;

			const booleans: { data: TblDataObject; modifiedVal: boolean }[] = [];
			const numbers: { data: TblDataObject; modifiedVal: number }[] = [];
			const strings: { data: TblDataObject; modifiedVal: string }[] = [];

			if (currentSortType === 'asc') {
				sortedType = 'desc';

				newArr.forEach((dataObj) => {
					const item = dataObj[headerKey];

					if (typeof item === 'boolean') {
						booleans.push({ data: dataObj, modifiedVal: item });
					} else if (isNumeric(item)) {
						numbers.push({ data: dataObj, modifiedVal: +item });
					} else {
						strings.push({
							data: dataObj,
							modifiedVal: item.toString().toLowerCase(),
						});
					}
				});

				booleans.sort((a, b) => +b.modifiedVal - +a.modifiedVal); // true (1) comes before false (0)
				numbers.sort((a, b) => b.modifiedVal - a.modifiedVal);
				strings.sort((a, b) => {
					if (a.modifiedVal < b.modifiedVal) return 1;
					if (a.modifiedVal > b.modifiedVal) return -1;
					return 0;
				});

				sortedArray = [...strings, ...numbers, ...booleans].map((item) => item.data);
			} else if (currentSortType === 'desc') {
				sortedType = '';
				sortedArray = rowData; //order rowData as it provided
			} else {
				sortedType = 'asc';
				newArr.forEach((dataObj) => {
					const item = dataObj[headerKey];

					if (typeof item === 'boolean') {
						booleans.push({ data: dataObj, modifiedVal: item });
					} else if (isNumeric(item)) {
						numbers.push({ data: dataObj, modifiedVal: +item });
					} else {
						strings.push({
							data: dataObj,
							modifiedVal: item.toString().toLowerCase(),
						});
					}
				});

				booleans.sort((a, b) => +a.modifiedVal - +b.modifiedVal); // false (0) comes before true (1)
				numbers.sort((a, b) => a.modifiedVal - b.modifiedVal);
				strings.sort((a, b) => {
					if (a.modifiedVal < b.modifiedVal) return -1;
					if (a.modifiedVal > b.modifiedVal) return 1;
					return 0;
				});

				sortedArray = [...booleans, ...numbers, ...strings].map((item) => item.data);
			}

			setSortedData(sortedArray);
			setSort({ colKey: headerKey, sortOrder: sortedType });

			return { sortedArray, sort: { colKey: headerKey, sortOrder: sortedType } };
		},
		//[],
		//[sortingOrder.colKey, sortingOrder.sortOrder],
		//[rowData, sortingOrder.colKey, sortingOrder.sortOrder],
		[rowData, sort],
	);

	//return { columnSortHandler };
	return { sortedData, sort, columnSortHandler, setSortedData, setSort };
};

export default useColumnSort;
