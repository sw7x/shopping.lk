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
import type { IPost, ICategory } from '../interfaces';

import { useUpdate, useApiUrl } from '@refinedev/core';

interface ISearch {
	title: string;
	status: string;
}

export const PostList = () => {
	const { tableProps, tableQueryResult, sorters, searchFormProps, filters } = useTable<
		IPost,
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
					field: 'status',
					operator: 'contains',
					value: values.status,
				},
			];
		},
	});

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

	const changeStatus = async (rec: IPost) => {
		let modifiedStatus;

		if (rec.status == 'published') {
			modifiedStatus = 'draft';
		} else if (rec.status == 'draft') {
			modifiedStatus = 'rejected';
		} else if (rec.status == 'rejected') {
			modifiedStatus = 'published';
		}

		//alert(`${apiUrl}/posts/${id}`);

		await mutate(
			{
				/* 
				url: `${apiUrl}/posts/${rec.id}`,
				method: 'patch',
				values: {
					status: modifiedStatus,
				}, 
				*/
				resource: 'posts',
				values: {
					...rec,
					status: modifiedStatus,
				},
				id: rec.id,
			},
			{
				onSuccess: (data, variables, context) => {
					tableQueryResult.refetch();
				},
			},
			/* {
				onSuccess: () => {
					//tableProps?.refetch();
					tableQueryResult.refetch();
				},
			}, */
		);
	};

	return (
		<List>
			<Form
				{...searchFormProps}
				layout='inline'
				//headerButtons={}
				headerButtons={<>iiii</>}
			>
				<Form.Item name='title'>
					<Input placeholder='Search by title' />
				</Form.Item>
				<Form.Item name='status'>
					<Input placeholder='Search by status' />
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
				<Table.Column
					dataIndex='title'
					title='Title'
					sorter
					//defaultSortOrder={getDefaultSortOrder('title', sorters)}
				/>
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
						return (
							<>
								<Space>
									<TextField value={value} />
									<Button
										type='default'
										size='small'
										onClick={(event) => changeStatus(record)}
									>
										aaa
									</Button>{' '}
								</Space>
								{/* {JSON.stringify(record)} */}
							</>
						);
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
			</Table>
		</List>
	);
};
