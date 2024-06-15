// inside Table componenet
type TableHeadingType = {
	id: string;
	title: string;
};

type TableProps<T extends TableHeadingType> = {
	data: TableDataType<T[]>[];
	tableHeadings: T[];
};

type TableDataType<K extends TableHeadingType[]> = {
	[Key in K[number]['id']]: string;
};

export const Table = <T extends TableHeadingType>({ data, tableHeadings }: TableProps<T>) => {
	const headers = tableHeadings.map((column, index) => {
		return (
			<th key={`headCell-${index}`} className={''}>
				{column.title}
			</th>
		);
	});

	const rows = !data?.length ? (
		<tr>
			<td colSpan={tableHeadings.length} className='text-center'>
				No data
			</td>
		</tr>
	) : (
		data?.map((row, index) => {
			return (
				<tr key={`row-${index}`}>
					{tableHeadings.map((column, index2) => {
						const value = row[column.key as keyof typeof row] as string;
						return <td key={`cell-${index2}`}>{value}</td>;
					})}
				</tr>
			);
		})
	);

	return (
		<>
			<table className={classes['content-table']}>
				<thead>
					<tr>{headers}</tr>
				</thead>

				<tbody>{rows}</tbody>
			</table>
		</>
	);
};
