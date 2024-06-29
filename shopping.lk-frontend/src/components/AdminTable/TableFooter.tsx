import React from 'react';
import { type header } from '@components/AdminTable/AdminTable';
import { TableFoooterCell } from '@components/AdminTable/TableFoooterCell';

type TableFooterProps = {
	headers?: header[];
};

export const TableFooter: React.FC<TableFooterProps> = ({ headers = [] }) => {
	return (
		<>
			{headers.length > 0 && (
				<tfoot>
					<tr className=''>
						{headers.map((header, index) => {
							return <TableFoooterCell title={header.title} key={index} />;
						})}
					</tr>
				</tfoot>
			)}
		</>
	);
};
