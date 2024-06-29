import React from 'react';
import { type TblDataObject } from '@components/AdminTable/AdminTable';

type TableSearchProps = {
	value?: string;
	data: TblDataObject[];
	headers: { key: string; title: string; isSortable?: boolean; isSearchable?: boolean }[];
	//handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChange: (searchTxt: string, rows: TblDataObject[]) => void;
};

export const TableSearch: React.FC<TableSearchProps> = ({
	value = '',
	data = [],
	headers = [],
	handleChange,
}) => {
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchTxt = event.target.value;
		let foundRows: TblDataObject[];

		if (searchTxt === '') {
			foundRows = data;
		} else {
			foundRows = data.filter((row) => {
				console.log(row);

				const matchFound = Object.keys(row).some((key) => {
					console.log(key);

					// Check if the key is in the headers
					const exists = headers.some((header) => header.key === key);
					if (exists === true) {
						// Check if the key is sortable
						const foundObject = headers.find((header) => header.key === key);
						if (foundObject && foundObject.isSearchable !== false) {
							if (
								typeof row[key] === 'string' &&
								(row[key] as string).toLowerCase().includes(searchTxt.toLowerCase())
							) {
								return true;
							}

							if (
								typeof row[key] === 'number' &&
								row[key].toString().includes(searchTxt)
							) {
								return true;
							}
						}
					}

					return false;
				});

				if (matchFound) {
					return row;
				}
			});
		}

		handleChange(searchTxt, foundRows);
		console.log(foundRows);
	};

	return (
		<div className='search'>
			<div className='label'>Search : </div>
			<form className='search-form' action=''>
				<input
					className='form-control'
					type='search'
					name='search_value'
					placeholder='Search here...'
					value={value}
					onChange={handleSearch}
				/>
			</form>
		</div>
	);
};
