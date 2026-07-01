//import { useState } from 'react';
//import { type HttpError, useApiUrl, useCustom } from '@refinedev/core';

import {
	Breadcrumb,
	Create,
	CreateButton,
	DeleteButton,
	EditButton,
	ListButton,
	RefreshButton,
	useForm,
	useSelect,
} from '@refinedev/antd';

import { Form, Input, Select, Button, Space } from 'antd';
import { SaveOutlined, SyncOutlined } from '@ant-design/icons';
import { ResetButton, SaveButton } from '@containers/Admin/shared/Buttons';
import { title } from 'process';
//import { useForm as uui } from '@refinedev/react-hook-form';

//import MDEditor from '@uiw/react-md-editor';

//import type { IPost, ICategory } from '../../interfaces';

/* 
interface PostUniqueCheckResponse {
	isAvailable: boolean;
}

interface PostUniqueCheckRequestQuery {
	title: string;
} 
*/

export const ProductCreate = () => {
	const { formProps, saveButtonProps, onFinish } = useForm();

	const { selectProps: categorySelectProps } = useSelect({
		resource: 'categories',
	});

	/* const apiUrl = useApiUrl();
	const url = `${apiUrl}/posts-unique-check`;

	const [title, setTitle] = useState('');

	const { refetch } = useCustom<PostUniqueCheckResponse, HttpError, PostUniqueCheckRequestQuery>({
		url,
		method: 'get',
		config: {
			query: {
				title,
			},
		},
		queryOptions: {
			enabled: false,
		}
	});
	*/

	const handleOnFinish = (values) => {
		alert(JSON.stringify(values, null, 2));
		alert();
		onFinish({
			//fullName: `${values.name} ${values.surname}`,
			...values,
			name: 'MR ' + values.name,
		});
	};

	return (
		<Create
			saveButtonProps={saveButtonProps}
			breadcrumb={<Breadcrumb />}
			footerButtons={() => {
				return (
					<Space>
						<ResetButton {...formProps} />
						<SaveButton {...formProps} />
					</Space>
				);
			}}
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
			<Form {...formProps} layout='vertical' onFinish={handleOnFinish}>
				<Form.Item
					label='Name'
					name='name'
					rules={[
						{
							required: true,
						},

						{
							validator: async (_, value) => {
								if (!value) return;

								/* 
								const { data } = await refetch();

								if (data?.data.isAvailable) {
									return Promise.resolve();
								} 
								*/
								if (value === 'test') {
									return Promise.reject(new Error('susa fff'));
								}
								//return Promise.reject(new Error("'title' is must be unique"));
							},
						},
						/**/
					]}
				>
					{/* <Input onChange={(event) => setTitle(event.target.value)} /> */}
					<Input />
				</Form.Item>
				<Form.Item
					label='Description'
					name='description'
					rules={[
						{
							required: true,
						},
					]}
				>
					{/* <Input onChange={(event) => setTitle(event.target.value)} /> */}
					<Input />
				</Form.Item>
				<Form.Item
					label='Price'
					name='price'
					rules={[
						{
							required: true,
						},
					]}
				>
					{/* <Input onChange={(event) => setTitle(event.target.value)} /> */}
					<Input />
				</Form.Item>
				<Form.Item
					label='Material'
					name='material'
					rules={[
						{
							required: true,
						},
					]}
				>
					{/* <Input onChange={(event) => setTitle(event.target.value)} /> */}
					<Input defaultValue={'test'} />
				</Form.Item>
				<Form.Item
					label='Category'
					name={['category', 'id']}
					rules={[
						{
							required: true,
						},
					]}
				>
					<Select {...categorySelectProps} />
				</Form.Item>
			</Form>
		</Create>
	);
};

/* 




*/
