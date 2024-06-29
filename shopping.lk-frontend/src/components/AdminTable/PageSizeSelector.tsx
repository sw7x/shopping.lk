import React from 'react';

type PageSizeSelectorProps = {
	id?: string;
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	value: number;
};

export const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
	id = 'row_count',
	handleChange,
	value,
}) => {
	return (
		<div className='toolbox-item _toolbox-show result-count'>
			<label htmlFor={id}>Show </label>
			<div className='mr-1'>
				<select
					name='row_count'
					id={id}
					className='form-control'
					onChange={handleChange}
					defaultValue={value}
				>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value={100}>100</option>
				</select>
			</div>
			<label className='ml-3 mr-0'> entries</label>
		</div>
	);
};
