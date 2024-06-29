import React from 'react';

type TblDataObject = {
	title: string;
	data: React.ReactNode | string;
};

export const TableDataCell: React.FC<TblDataObject> = ({ title = '', data = '' }) => {
	return <td data-title={title}>{data}</td>;
};
