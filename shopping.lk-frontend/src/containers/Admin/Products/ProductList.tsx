import {
	List,
	TextField,
	useTable,
	EditButton,
	ShowButton,
	Breadcrumb,
	FilterDropdown,
	useSelect,
	DeleteButton,
	getDefaultSortOrder,
	CreateButton,
	RefreshButton,
	ListButton,
} from '@refinedev/antd';

import { Table, Space, Select, Button, Form, Input } from 'antd';
import { useDelete, useMany, getDefaultFilter, useNavigation } from '@refinedev/core';
import { BiBorderRadius } from 'react-icons/bi';
import { useState } from 'react';

export const ProductList = () => {
	const [price, setPrice] = useState(10);
	const { create } = useNavigation();
	const { tableProps, filters, tableQueryResult, searchFormProps } = useTable({
		filters: {
			permanent: [
				//initial: [
				{
					field: 'price',
					operator: 'gte',
					value: price,
				},
			],
		},
	});
	const { mutate } = useDelete();

	const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];
	const { data, isLoading } = useMany({
		resource: 'categories',
		ids: categoryIds,
		queryOptions: {
			enabled: categoryIds.length > 0,
		},
	});

	const { selectProps: categorySelectProps } = useSelect({
		resource: 'categories',
	});

	const onDelete = (id: number) => {
		if (confirm('Do you want to delete this record?') == true) {
			mutate(
				{
					resource: 'products',
					id: id.toString(),
				},
				/* {
				onSuccess: () => {
					tableProps?.refetch();
				},
			}, */
			);
		} else {
			alert('Record not deleted');
		}
	};

	const changePrice = (e: any) => {
		setPrice(Number(e.target.value));
	};

	return (
		<>
			<List
				breadcrumb={<Breadcrumb />}
				/* headerButtons={() => {
					return (
						<Space>
							<CreateButton />
							<DeleteButton />
							<EditButton />
							<ListButton />
							<RefreshButton />
						</Space>
					);
				}} */
				headerButtons={({ createButtonProps }) => (
					<>
						{createButtonProps && (
							<CreateButton {...createButtonProps} meta={{ foo: 'bar' }} />
						)}
						<Button
							type='primary'
							//{...createButtonProps}
							onClick={() => create('products')}
						>
							Custom Button
						</Button>
					</>
				)}
			>
				<div>
					<span>price: </span>
					<select value={price} name='price' onChange={(e) => changePrice(e)}>
						{[10, 50, 100, 200, 500, 1000, 2000].map((_price) => (
							<option key={_price} value={_price}>
								{_price}
							</option>
						))}
					</select>
				</div>

				<Table {...tableProps} rowKey='id'>
					<Table.Column dataIndex='id' title='ID' />
					<Table.Column dataIndex='name' title='Name' />
					<Table.Column
						dataIndex='price'
						title='Price'
						defaultFilteredValue={getDefaultFilter('price', filters)}
					/>
					<Table.Column dataIndex='material' title='Material' />
					<Table.Column dataIndex='description' title='Description' />
					{/* <Table.Column dataIndex='category.id' title='Category' /> */}
					<Table.Column
						dataIndex={['category', 'id']}
						title='Category'
						render={(value) => {
							if (isLoading) {
								return <TextField value='Loading...' />;
							}

							return (
								<TextField
									value={data?.data.find((item) => item.id === value)?.title}
								/>
							);
						}}
						filterDropdown={(props) => (
							<FilterDropdown {...props}>
								<Select
									style={{ minWidth: 200 }}
									mode='multiple'
									placeholder='Select Category'
									optionLabelProp='label'
									{...categorySelectProps}
								/>
							</FilterDropdown>
						)}
					/>

					<Table.Column
						title='Actions'
						dataIndex='actions'
						render={(_, record) => (
							<Space>
								{/* <Button.Group></Button.Group> */}
								<EditButton
									style={{
										borderRadius: '1px',
										height: '32px',
										padding: '5px 10px',
									}}
									size='small'
									recordItemId={record.id}
									title='Edit Product'
									name='Edit Product'
									hideText
								/>
								<ShowButton
									style={{
										borderRadius: '1px',
										height: '32px',
										padding: '5px 10px',
									}}
									size='small'
									recordItemId={record.id}
									hideText
								/>
								<DeleteButton
									size='small'
									hideText
									style={{
										borderRadius: '1px',
										height: '32px',
										padding: '5px 10px',
									}}
									recordItemId={record.id}
									onClick={() => {
										alert('11Are you sure you want to delete this product?');
									}}
								/>
								{/* 
							<Button
									size='small'
									type='primary'
									onClick={() => onDelete(record.id)}
								>
									DEL
								</Button> 
							*/}
							</Space>
						)}
					/>
				</Table>
			</List>
		</>
	);
};
