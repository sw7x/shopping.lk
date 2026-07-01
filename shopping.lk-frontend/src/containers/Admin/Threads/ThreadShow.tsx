import { useShow, useOne } from '@refinedev/core';

import { Show, MarkdownField, DateField } from '@refinedev/antd';

import { Typography, Tag } from 'antd';

import type { IPost, ICategory } from '../interfaces';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

export const ThreadShow = () => {
	const { queryResult } = useShow<IPost>();
	const { data, isLoading } = queryResult;
	const record = data?.data;
	const postRestApiUrl = 'https://api.fake-rest.refine.dev/posts/';
	const { data: categoryData, isLoading: categoryIsLoading } = useOne<ICategory>({
		resource: 'categories',
		id: record?.category.id || '',
		queryOptions: {
			enabled: !!record,
		},
	});

	const { data: userData, isLoading: userIsLoading } = useOne({
		resource: 'users',
		id: record?.user.id || '',
		queryOptions: {
			enabled: !!record,
		},
	});

	return (
		<Show isLoading={isLoading}>
			<Title level={5}>Id</Title>
			<Text>{record?.id}</Text>

			<Title level={5}>Title</Title>
			<Text>{record?.title}</Text>

			<Title level={5}>Link</Title>
			<Link to={postRestApiUrl + record?.slug || ''} target='_blank'>
				{record?.title}
			</Link>

			<Title level={5}>Category</Title>
			<Text>{categoryIsLoading ? 'Loading...' : categoryData?.data.title}</Text>

			<Title level={5}>Hits</Title>
			<Text>{record?.hit}</Text>

			<Title level={5}>Status</Title>
			<Tag>{record?.status}</Tag>

			<Title level={5}>Color</Title>
			<Text>{record?.status_color}</Text>

			<Title level={5}>Created At</Title>
			<DateField value={record?.createdAt} />

			<Title level={5}>Published At</Title>
			<DateField value={record?.publishedAt} />

			<Title level={5}>Content</Title>
			<MarkdownField value={record?.content} />

			<Title level={5}>User</Title>
			<Text>
				{userIsLoading
					? 'Loading...'
					: userData?.data.firstName + ' ' + userData?.data.lastName}
			</Text>
		</Show>
	);
};

/* 

id	1
title	"Aspernatur fugit reicien… sit libero cupiditate."
slug	"voluptatibus-aut-sed"
content	"Omnis dolorem quasi arch…s soluta aut qui eaque."
hit	127135
status	"rejected"
status_color	"red"
createdAt	"2022-10-29T19:43:44.773Z"
publishedAt	"2022-12-10T11:00:40.797Z"
category	{…}
user	{…}




image	[…]
tags	[…]
language 
*/
