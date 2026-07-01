//import { useState } from 'react';
//import { type HttpError, useApiUrl, useCustom } from '@refinedev/core';

import {
	Breadcrumb,
	Edit,
	useForm,
	useSelect,
	RefreshButton,
	DeleteButton,
	EditButton,
	CreateButton,
	ListButton,
} from '@refinedev/antd';
import { InutText } from '@root/components/Form';

import { Form, Input, Select, Button } from 'antd';
import { useEffect, useState } from 'react';

/* 
interface PostUniqueCheckResponse {
	isAvailable: boolean;
}

interface PostUniqueCheckRequestQuery {
	title: string;
	id?: number;
} 
*/

export const ProductEdit = () => {
	const [price, setPrice] = useState<number | null>(null);

	const { formProps, saveButtonProps, queryResult, onFinish } = useForm();

	const productsData = queryResult?.data?.data;
	const { selectProps: categorySelectProps } = useSelect({
		resource: 'categories',
		defaultValue: productsData?.category.id,
	});

	useEffect(() => {
		if (productsData?.price !== undefined && price === null) {
			//setPrice(productsData.price);
		}
	}, [productsData?.price]);
	/* 
	const apiUrl = useApiUrl();
	const url = `${apiUrl}/posts-unique-check`;

	const [title, setTitle] = useState('');

	const { refetch } = useCustom<PostUniqueCheckResponse, HttpError, PostUniqueCheckRequestQuery>({
		url,
		method: 'get',
		config: {
			query: {
				title,
				id: postData?.id,
			},
		},
		queryOptions: {
			enabled: false,
		},
	}); 
	*/

	/* 
id
name
description
price
material
category
 */
	const increasePrice = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		event.preventDefault();
		/* 
		if (price !== null) {
			setPrice((prevPrice: number | null) => {
				console.log(prevPrice);
				console.log(prevPrice ?? 0 + 1);
				return prevPrice !== null ? prevPrice + 1 : 66;
			});
		} 
		*/
		formProps.form.setFieldsValue({ price: 100 });

		//setPrice(price + 1);
	};

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
		<Edit
			saveButtonProps={saveButtonProps}
			breadcrumb={<Breadcrumb />}
			//footerButtons={() => <>fff</>}
			headerButtons={() => {
				return (
					<>
						<CreateButton />
						<DeleteButton />
						<EditButton />
						<ListButton />
						<RefreshButton />
					</>
				);
			}}
		>
			<pre>{JSON.stringify(productsData, null, 2)}</pre>
			<Form {...formProps} layout='vertical' onFinish={handleOnFinish}>
				<Form.Item
					label='Name'
					name='name'
					shouldUpdate
					rules={[
						{
							required: true,
						},
						/* 
						{
							validator: async (_, value) => {
								if (!value) return;

								const { data } = await refetch();

								if (data?.data.isAvailable) {
									return Promise.resolve();
								}

								return Promise.reject(new Error("'title' is must be unique"));
							},
						}, 
						*/
					]}
				>
					{/* <Input onChange={(event) => setTitle(event.target.value)} /> 
					<Input />*/}
					<input type='text' />
				</Form.Item>
				<Form.Item
					label='Description'
					name='description'
					shouldUpdate
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
					shouldUpdate
					rules={[
						{
							required: true,
						},
					]}
				>
					{/* <Input onChange={(event) => setTitle(event.target.value)} /> */}

					{/* <Input /> */}
					<input
						type='text'
						className='border border-cyan-800 text-red-400 px-5 w-full'
						//value={price ?? ''}
						//defaultValue={productsData?.price}
						//onChange={(event) => setPrice(Number(event.target.value))}
					/>
				</Form.Item>

				{/* value={price ?? ''}
					onChange={(event) => setPrice(Number(event.target.value))}
					> */}
				<div>price - {price}</div>
				{/* <pre>{JSON.stringify(queryResult, null, 2)}</pre> */}
				<div style={{ marginTop: '10px' }}>
					<button
						type='button'
						onClick={(event) => {
							increasePrice(event);
						}}
					>
						increase
					</button>
				</div>

				<Form.Item
					label='Material'
					name='material'
					shouldUpdate
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
		</Edit>
	);
};
