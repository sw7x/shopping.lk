import { useState, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { CategoryType } from '@shared/types/category.type';
import { ButtonLink } from '@components/ButtonLink';
import ThreadList from '@containers/CategoryPage/ThreadList';
import { LoadingSpinner } from '@root/components/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@root/components/Error/ErrorFallback';
import { List } from '@containers/CategoryPage/List';
import { Heading1 } from '@root/components/Headings';

type TCategoryDataResponse = {
	status: 'Success' | 'Error';
	data?: CategoryType;
	message: string;
};

const CategoryPage = () => {
	const [categoryName, setCategoryName] = useState<string>('');
	//const [threads, setThreads] = useState<ThreadType[]>([]);
	const { catId } = useParams();
	const categoryId = parseInt(catId as string);

	const getCategoryName = async (id: number): Promise<string> => {
		let catName: string;
		const { VITE_REST_API_URL } = import.meta.env;

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

	/* 
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
	*/

	const fetchData = async () => {
		if (!isNaN(categoryId)) {
			try {
				let categoryName = await getCategoryName(categoryId);
				//let threadsArr = await getThreads(categoryId);
				setCategoryName(categoryName);
				//setThreads(threadsArr);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	/* 
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
	*/

	return (
		<>
			<div className='btn-section-container clearfix'>
				<div className='pull-right'>
					<ButtonLink href='/ask-question' text='Ask Question' />
				</div>
			</div>
			<ButtonLink href='/category/1' text='Category 1' /> <span className='mr-2'></span>
			<ButtonLink href='/category/2' text='Category 2' /> <span className='mr-2'></span>
			<ButtonLink href='/category/3' text='Category 3' /> <span className='mr-2'></span>
			<ButtonLink href='/category/4' text='Category 4' /> <span className='mr-2'></span>
			<ButtonLink href='/category/5' text='Category 5' />
			{/* 
			<Link to={'/category/1'}>Category 1</Link>
			<Link to={'/category/2'}>Category 2</Link>
			<Link to={'/category/3'}>Category 3</Link> 
			*/}
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						{/* <small>Total threads: {threads ? threads.length : 0}</small> */}
					</div>
					<Heading1>{categoryName}</Heading1>
				</div>

				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<Suspense
						fallback={
							<div className='category-div mb-10'>
								<LoadingSpinner />
							</div>
						}
					>
						<ThreadList categoryId={categoryId} />
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<List />
				</ErrorBoundary>
			</div>
			{/*  todo - pagination */}
		</>
	);
};

export default CategoryPage;
