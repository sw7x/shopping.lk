import React from 'react';
import { TableHeaderCell } from './TableHeaderCell';
import { type SortType, type header } from './AdminTable';

type TableHeadProps = {
	headers?: header[];
	currentSortData: SortType;
	tblDataSortHandler: (headerDataObj: header) => void;
};

export const TableHead: React.FC<TableHeadProps> = ({
	headers = [],
	currentSortData,
	tblDataSortHandler,
}) => {
	return (
		<>
			{headers.length > 0 && (
				<thead>
					<tr className=''>
						{headers.map((header, index) => {
							//get current header column sort order from state
							const sortOrder =
								header.key == currentSortData.colKey
									? currentSortData.sortOrder
									: '';

							let baseCls =
								(header.isSortable == true && !(header.isImage == true)) == true
									? 'sort'
									: '';

							const SortCls = baseCls == '' ? '' : baseCls + ' ' + sortOrder;

							const order =
								sortOrder === 'asc'
									? 'Ascending'
									: sortOrder === 'desc'
										? 'Descending'
										: 'No';

							const thTitle = baseCls == '' ? '' : order + ' Order';

							return (
								<TableHeaderCell
									headerData={header}
									key={index}
									index={index}
									className={`cell ${SortCls}`}
									tooltip={thTitle}
									tblDataSortHandler={tblDataSortHandler}
								/>
							);
						})}
					</tr>
				</thead>
			)}
		</>
	);
};
