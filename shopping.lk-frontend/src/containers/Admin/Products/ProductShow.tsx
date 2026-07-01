import React from 'react';

import {
	Show,
	MarkdownField,
	Breadcrumb,
	CreateButton,
	DeleteButton,
	EditButton,
	ListButton,
	RefreshButton,
} from '@refinedev/antd';
import { Typography, Tag, Space } from 'antd';
import { useShow, useOne } from '@refinedev/core';

const { Title, Text } = Typography;

export const ProductShow: React.FC = () => {
	//const { queryResult } = useShow<IPost>();
	const { queryResult } = useShow();

	const { data, isLoading } = queryResult;
	const record = data?.data;
	console.log('record', record);

	//const { data: categoryData, isLoading: categoryIsLoading } = useOne<ICategory>({
	const { data: categoryData, isLoading: categoryIsLoading } = useOne({
		resource: 'categories',
		id: record?.category.id || '',
		queryOptions: {
			enabled: !!record?.category.id,
		},
	});

	return (
		<Show
			isLoading={isLoading}
			breadcrumb={<Breadcrumb />}
			headerButtons={() => {
				return (
					<Space>
						<CreateButton />
						<DeleteButton />
						<EditButton />
						<ListButton />
						<RefreshButton />
					</Space>
				);
			}}
		>
			<Title level={5}>Id</Title>
			<Text>{record?.id}</Text>
			<Title level={5}>Name</Title>
			<Text>{record?.name}</Text>
			{/* <Title level={5}>Category</Title>
			<Text>{categoryIsLoading ? 'Loading...' : categoryData?.data.title}</Text> */}
			<Title level={5}>Category</Title>
			<Text>{categoryData?.data.title}</Text>
			<Title level={5}>Material</Title>
			<MarkdownField value={record?.material} />
		</Show>
	);
};
