import { useEffect, useMemo, useState, Suspense, useRef } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { useSelector, useDispatch } from 'react-redux';
//import { todoAdded } from '@root/slices/todosSlice';
//import { increment } from '@root/slices/counterSlice';
import { Pagination } from '@components/Pagination';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { Heading1 } from '@root/components/Headings';
import { push } from 'redux-first-history';
//import { ThreadType } from '@shared/types/thread.type';
//import { Heading1 } from '@components/Headings';
import history from 'history/browser';
import { useLocation } from 'react-router-dom';
import { increment } from '@store/slices/counterSlice';
import ImageUpload from '@root/components/Form/ImageUpload';
import { CheckBoxGroup, DropDownList, RadioBtnGroup, TextBox } from '@root/components/Form';
import { Table2 } from '@root/components/Table/Table2';

import { apiRequest } from '@shared/services/api/apiService';
import authApiService from '@shared/services/api/authApiService';

type UserType = {
	id: number;
	fullname: string;
	email: string;
	username: string;
	gender: 'male|female';
	badge: string;
	points: number;
	account_type: 'super_admin|admin|expert|farmer';
};
type CategoryType = {
	id: number;
	category_name: string;
};

type ThreadType = {
	id: number;
	title: string;
	text: string;
	categories: CategoryType[];
	postCount: number;
	user: UserType;
};

type ThreadListResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

const Home = () => {
	const [threads, setThreads] = useState<ThreadType[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
	const PageSize = 10;
	let abc = '111';
	let location = useLocation();

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		//return data.slice(firstPageIndex, lastPageIndex);
		return threads.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	const state = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const fetchData = async (ThreadListReq: CancelTokenSource) => {
		const { VITE_REST_API_URL } = import.meta.env;

		try {
			/* 
			let response = await axios.get<ThreadListResponseType>(`${VITE_REST_API_URL}/threads`, {
				cancelToken: ThreadListReq.token,
				headers: {
					'Content-Type': 'application/json',
					//'Content-Type': 'text/plain',
					//Authorization: `Bearer hh`,
				},
				//withCredentials: true,
			});			

			let response = await apiRequest.get(`${VITE_REST_API_URL}/threads`, {
				cancelToken: ThreadListReq.token,
			});
			*/

			let authApiRequest = authApiService.getInstance();
			let response = await authApiRequest.get(`${VITE_REST_API_URL}/threads`, {
				cancelToken: ThreadListReq.token,
			});
			const threadArr = response?.data?.data ? response.data.data : [];
			console.log(threadArr.length);
			console.log('threadArr.length');

			setThreads(threadArr);
			setCurrentPage(1);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const ThreadListReq = axios.CancelToken.source();
		fetchData(ThreadListReq);

		return () => {
			console.log('Cledan Up');
			ThreadListReq.cancel();
		};
	}, []);

	const clickHandler = () => {
		/* dispatch(
			todoAdded({
				id: Math.floor(Math.random() * 900),
				text: (Math.random() + 1).toString(36).substring(7),
			}),
		); */
		dispatch(increment());
		//dispatch(push('/login'));
		// Go back to the previous history entry. The following
		// two lines are synonymous.
		//history.go(-1);
		//history.back();

		console.log(abc);
		abc = '-88888888888888888';
		console.log(abc);
		console.log(history.location);
		console.log(location);
	};

	const renderThreads = () => {
		if (currentTableData.length === 0) {
			return <LoadingSpinner />;
		}

		return currentTableData.map((row, index) => (
			<ThreadListItem key={index} data={row} cls={index % 2 === 0 ? 'active' : ''} />
		));
	};

	return (
		<>
			<div>{abc}</div>
			<button onClick={clickHandler}>Clik</button>
			<br />
			<br />
			<pre>{JSON.stringify(state, null, 2)}</pre>
			<br />
			<br />
			<Table2 headings={['aa', 'bb', 'cc']} text={'aaaaa'}></Table2>
			<br />
			<br />

			<ImageUpload />

			<RadioBtnGroup
				name='account_type'
				options={[
					{ label: 'Farmer', value: 'farmer' },
					{ label: 'Expert', value: 'expert' },
				]}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					//handleChange('account_type', e.target.value);
					console.log(e);
				}}
				title='User Type gg'
				errors={[]}
				value={'expert'}
				isTouched={false}
				description='Select your user type'
				className='hhh'
				required={true}
			/>

			<TextBox
				isTouched={false}
				errors={[]}
				name={'ffff'}
				title='User Type gg'
				description='Select your user type'
				className=''
				required={true}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					//handleChange('account_type', e.target.value);
					console.log(e);
				}}
				autoFocus={false}
				value={'dddd'}
			/>

			<CheckBoxGroup
				nameAttr={'user_type'}
				title='User Type gg'
				description='Select your user type'
				options={[
					{ label: 'Farmer', value: 'farmer' },
					{ label: 'Expert', value: 'expert' },
					{ label: 'Male', value: 'male' },
					{ label: 'Female', value: 'female' },
				]}
				optionsq={[]}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					//handleChange('account_type', e.target.value);
					console.log(e);
				}}
				errors={[]}
				value={'male'}
				isTouched={false}
				className='b6'
			/>
			<DropDownList
				name={'user_typec'}
				title='User Type gg'
				description='Select your user type'
				optionsq={[
					{ label: 'Farmer', value: 'farmer' },
					{ label: 'Expert', value: 'expert' },
					{ label: 'Male', value: 'male' },
					{ label: 'Female', value: 'female' },
				]}
				options={[]}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					//handleChange('account_type', e.target.value);
					console.log(e);
				}}
				errors={[]}
				value={'male'}
				isTouched={false}
				className={'b6'}
				required={true}
			/>

			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						<small>Total Threads: {threads.length}</small>
					</div>
					<Heading1> Top Questions</Heading1>
				</div>

				<div className='pagination-container clearfix mt-3'>
					<div className='float-right'>
						<h1 className='text-lg'>currentPage - {currentPage}</h1>
						<br />
						<Pagination
							currentPage={currentPage}
							totalCount={threads.length}
							pageSize={PageSize}
							onPageChange={(page) => setCurrentPage(page)}
							siblingCount={2}
						/>
					</div>
				</div>
				<div className='forum-items'>{renderThreads()}</div>
			</div>
		</>
	);
};

export default Home;
