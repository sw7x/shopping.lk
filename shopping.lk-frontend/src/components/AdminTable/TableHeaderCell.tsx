import React, { useState } from 'react';
import { type header } from '@components/AdminTable/AdminTable';

type TableHeaderCellProps = {
	headerData: header;
	tooltip?: string;
	className?: string;
	tblDataSortHandler: (headerDataObj: header) => void;
	index?: number;
};

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
	headerData,
	tooltip = '',
	className = '',
	tblDataSortHandler,
	index = 0,
}) => {
	const [headerInfo, setHeaderInfo] = useState(headerData);

	//console.log('Rendered TableHeaderCell - (' + index + ')');
	//if (index == 5) debugger;

	const handleSort = () => {
		tblDataSortHandler(headerInfo);
	};

	return (
		<>
			<th className={className} title={tooltip} onClick={handleSort}>
				{headerData.title}
			</th>
		</>
	);
};
