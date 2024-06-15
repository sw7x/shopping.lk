import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { CategoryType } from '@shared/types/category.type';
import { ThreadType } from '@shared/types/thread.type';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { ButtonLink } from '@components/ButtonLink';

type TCategoryDataResponse = {
	status: 'Success' | 'Error';
	data?: CategoryType;
	message: string;
};

type ThreadsBelongsToCategoryResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

const CategoryPagexx = () => {
	const [categoryName, setCategoryName] = useState<string>('');
	const [threads, setThreads] = useState<ThreadType[]>([]);
	const { catId } = useParams();

	const categoryId = parseInt(catId as string);
	const { VITE_REST_API_URL } = import.meta.env;

	const getCategoryName = async (id: number): Promise<string> => {
		let catName: string;
		try {
			let response = await axios<TCategoryDataResponse>({
				method: 'get',
				url: VITE_REST_API_URL + '/categories/' + id,
			});

			catName = response?.data?.data?.category_name ? response.data.data.category_name : '';
		} catch (error) {
			console.log(error);
			catName = '';
		}

		return catName;
	};

	const getThreads = async (id: number): Promise<ThreadType[]> => {
		let threadsDataArr: Array<ThreadType>;
		try {
			let threadResp = await axios<ThreadsBelongsToCategoryResponseType>({
				method: 'get',
				url: VITE_REST_API_URL + '/categories/' + id + '/threads',
			});

			threadsDataArr = threadResp?.data?.data ? threadResp.data.data : [];
		} catch (error) {
			console.log(error);
			threadsDataArr = [];
		}

		return threadsDataArr;
	};

	const fetchData = async () => {
		if (!isNaN(categoryId)) {
			try {
				let categoryName = await getCategoryName(categoryId);
				let threadsArr = await getThreads(categoryId);
				setCategoryName(categoryName);
				setThreads(threadsArr);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const forumItems = [];

	console.log(threads);
	console.log(threads.length);
	console.log('threads.length');

	if (threads.length > 0) {
		let cls = '';

		threads.map((row) => {
			console.log('threads==map');
			cls = cls == '' ? 'active' : '';
			forumItems.push(<ThreadListItem data={row} cls={cls} />);
		});
	} else {
		forumItems.push(<h3>No results</h3>);
	}

	return (
		<>
			ww
			<div className='btn-section-container clearfix'>
				<div className='pull-right'>
					<ButtonLink href='/ask-question' text='Ask Question' />
				</div>
			</div>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						<small>Total threads: {threads ? threads.length : 0}</small>
					</div>
					<h3>{categoryName}</h3>
				</div>

				<div className='forum-items'>
					{forumItems.length > 0 &&
						forumItems.map((forumItems) => {
							return forumItems;
						})}
				</div>
			</div>
			{/*  todo - pagination */}tt
		</>
	);
};

export default CategoryPagexx;
