import { useMany, HttpError, getDefaultFilter } from '@refinedev/core';
import {
	List,
	TextField,
	useTable,
	EditButton,
	ShowButton,
	getDefaultSortOrder,
	SaveButton,
	FilterDropdown,
	RefreshButton,
} from '@refinedev/antd';
import { Table, Space, Button, Form, Input, Radio } from 'antd';
import type { IThread } from '../interfaces';

import { useUpdate, useApiUrl } from '@refinedev/core';

interface ISearch {
	title: string;
	text: string;
}

export const ThreadList = () => {
	const { tableProps, tableQueryResult, sorters, searchFormProps, filters } = useTable<
		IThread,
		HttpError,
		ISearch
	>({
		sorters: {
			initial: [
				{
					field: 'id',
					order: 'asc',
				},
			],
		},
		filters: {
			/* initial: [
				{
					field: 'status',
					operator: 'eq',
					value: 'published',
				},
			], */
		},
		onSearch: (values) => {
			console.log(values);
			console.log('onSearch');
			return [
				/**/ {
					field: 'title',
					operator: 'contains',
					value: values.title,
				},
				{
					field: 'text',
					operator: 'contains',
					value: values.text,
				},
			];
		},
	});

	/* 
	const apiUrl = useApiUrl();
	const { mutate } = useUpdate<IPost>();

	const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];
	const { data, isLoading } = useMany<ICategory>({
		resource: 'categories',
		ids: categoryIds,
		queryOptions: {
			enabled: categoryIds.length > 0,
		},
	}); 
	*/

	return (
		<List>
			<Form
				{...searchFormProps}
				layout='inline'
				//headerButtons={}
			>
				<Form.Item name='title'>
					<Input placeholder='Search by title' />
				</Form.Item>
				<Form.Item name='text'>
					<Input placeholder='Search by text' />
				</Form.Item>
				<Button onClick={searchFormProps.form?.submit} type='default'>
					Search
				</Button>
			</Form>
			<Table {...tableProps} rowKey='id'>
				<Table.Column
					dataIndex='id'
					title='ID'
					sorter
					defaultSortOrder={getDefaultSortOrder('id', sorters)}
				/>
				<Table.Column dataIndex='title' title='Title' sorter />
				{/* 
				<Table.Column
					dataIndex={['category', 'id']}
					title='Category'
					render={(value) => {
						if (isLoading) {
							return <TextField value='Loading...' />;
						}

						console.log(data);
						console.log(value);
						console.log('======');

						return (
							<TextField
								value={data?.data.find((item) => item.id === value)?.title}
							/>
						);
					}}
				/>
				<Table.Column
					dataIndex='status'
					title='Status'
					defaultFilteredValue={getDefaultFilter('status', filters)}
					render={(value, record) => {
						return <TextField value={value} />;
					}}
					filterDropdown={(props) => (
						<FilterDropdown {...props}>
							<Radio.Group>
								<Radio value='published'>Published</Radio>
								<Radio value='draft'>Draft</Radio>
								<Radio value='rejected'>Rejected</Radio>
							</Radio.Group>
						</FilterDropdown>
					)}
				/>

				<Table.Column<IPost>
					title='Actions'
					dataIndex='actions'
					render={(_, record) => (
						<Space>
							<EditButton hideText size='small' recordItemId={record.id} />
							<ShowButton hideText size='small' recordItemId={record.id} />
						</Space>
					)}
				/> 
				*/}
			</Table>
		</List>
	);
};
