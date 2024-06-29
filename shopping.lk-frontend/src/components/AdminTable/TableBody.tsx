import React from 'react';
import { type TblDataObject, type header } from './AdminTable';
import { TableDataCell } from './TableDataCell';

type TableBodyProps = {
	headers: header[];
	rows: TblDataObject[];
	range: { start: number; end: number };
};

export const TableBody: React.FC<TableBodyProps> = ({ headers, rows, range }) => {
	const generateTblDataRows = () => {
		try {
			if (rows.length > 0) {
				return rows.slice(range.start, range.end).map((_row, index) => {
					const dataRows = headers.map((header) => {
						const h_Key = header.key;
						const h_title = header.title;

						if (!_row.hasOwnProperty(h_Key))
							throw new Error('Given header Column is not found in data');

						const tdData = header.isImage ? (
							<img src={_row[h_Key].toString()} />
						) : typeof _row[h_Key] == 'boolean' ? (
							<span
								className={`badge text-2xl capitalize  badge-${_row[h_Key] ? 'success' : 'secondary'}`}
							>
								{_row[h_Key].toString()}
							</span>
						) : (
							_row[h_Key]
						);

						return (
							<TableDataCell
								key={h_Key + '_' + index}
								title={h_title}
								data={tdData}
							/>
						);
					});

					if (dataRows.length > 0) return <tr key={index}>{dataRows}</tr>;
				});
			} else if (rows.length === 0) {
				return (
					<tr className=''>
						<td colSpan={headers.length} className='text-center font-semibold text-4xl'>
							No data available
						</td>
					</tr>
				);
			}
		} catch (error) {
			return (
				<tr className=''>
					<td
						colSpan={headers.length}
						className='text-center font-semibold text-4xl error'
					>
						Data is not in correct format according to given headers
					</td>
				</tr>
			);
		}
	};

	return <tbody>{generateTblDataRows()}</tbody>;
};
