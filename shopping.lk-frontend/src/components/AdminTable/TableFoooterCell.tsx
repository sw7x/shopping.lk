import React from 'react';

type TableFoooterCellProps = {
	title: string;
};

export const TableFoooterCell: React.FC<TableFoooterCellProps> = ({ title = '' }) => {
	return <td className='cell'>{title}</td>;
};
