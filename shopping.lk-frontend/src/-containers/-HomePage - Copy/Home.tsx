import { useEffect, useMemo, useState, Suspense } from 'react';
import axios from 'axios';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { ThreadType } from '@shared/types/thread.type';
import { Pagination } from '@components/Pagination';
import { Heading1 } from '@components/Headings';
import {
	CheckBoxGroup,
	DropDownList,
	InutEmail,
	InutPassword,
	InutText,
	RadioBtnGroup,
	ResetBtn,
	SubmitBtn,
	TextBox,
} from '@components/Form';
import { Button } from '@root/components/Button';
import { wrapPromise } from '@shared/services/wrapPromise';

type ThreadListResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

//export const Home = () => {
const Homexx = () => {
	const [threads, setThreads] = useState<ThreadType[]>([]);
	//const [currentPage, setCurrentPage] = useState(0);
	//const PageSize = 10;

	/* const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return threads.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);
 */
	const fetchData = () => {
		const { VITE_REST_API_URL } = import.meta.env;

		//try {
		let response = axios
			.get<ThreadListResponseType>(`${VITE_REST_API_URL}/threads`)
			.then(({ data }) => data);
		//const threadArr = response?.data?.data ? response.data.data : [];
		//setThreads(threadArr);
		//setCurrentPage(1);
		//} catch (error) {
		//console.log(error);
		//}
		//return wrapPromise(response).read();
		return wrapPromise(response);

		//return response;
	};

	//const resource = wrapPromise(fetchData());

	//useEffect(() => {
	//fetchData();
	//}, []);
	//let resource = wrapPromise(fetchData());
	//const fff = wrapPromise(fetchData()).read();
	const resource = fetchData().read();

	const renderThreads = () => {
		let resource = wrapPromise(fetchData());

		let ficiData = resource.read();

		let x = 4;
		//console.log(ficiData);

		if (ficiData.length === 0) {
			return <h3>No results</h3>;
		}
		fff;
		return ficiData.map((row, index) => (
			<ThreadListItem key={row.id} data={row} cls={index % 2 === 0 ? 'active' : ''} />
		));

		/* 		if (currentTableData.length === 0) {
			return <h3>No results</h3>;
		}

		return currentTableData.map((row, index) => (
			<ThreadListItem key={row.id} data={row} cls={index % 2 === 0 ? 'active' : ''} />
		)); */
	};

	const ccc = (item) => {
		console.log(item);
	};

	const checkBoxData = [
		{
			value: 'rust',
			label: 'RUST',
		},
		{
			value: 'go',
			label: 'GO',
		},
		{
			value: 'java',
			label: 'JAVA',
		},
		{
			value: 'php',
			label: 'PHP',
		},
	];

	const radioBoxData = [
		{
			value: 'microsoft',
			label: 'Microsoft',
		},
		{
			value: 'google',
			label: 'Google',
		},
		{
			value: 'apple',
			label: 'Apple',
		},
		{
			value: 'oracle',
			label: 'Oracle',
		},
	];

	const selectData = [
		{
			value: 'aaa',
			label: 'AAA',
		},
		{
			value: 'bbb',
			label: 'BBB',
		},
		{
			value: 'ccc',
			label: 'CCC',
		},
		{
			value: 'ddd',
			label: 'DDD',
		},
	];

	return (
		<>
			{/* <InutPassword nameAttr='pw' title='Password' />
			<InutText nameAttr='fname' title='Text input' />
			<InutEmail nameAttr='email' title='Email' />
			<TextBox
				title='TextBox'
				nameAttr='desc'
				description='Include all the information someone would need to answer your question 777'
			/>
			<DropDownList
				title='DropDown List'
				nameAttr='etcDataa'
				options={selectData}
				onChange={ccc}
			/>
			<RadioBtnGroup
				title='RadioBtn Group'
				nameAttr='companies'
				options={radioBoxData}
				onChange={ccc}
			/>
			<CheckBoxGroup
				title='CheckBox Group'
				nameAttr='langs'
				options={checkBoxData}
				onChange={ccc}
			/>

			<br />
			<div>
				<ResetBtn />
				<SubmitBtn />
			</div> */}

			<div className='forum-section-container clearfix'>
				ggg
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						<small>Total Threads: {threads.length}</small>
					</div>
					<div className='px-3'>
						<Heading1 className='text-3xl font-semibold'>Questions2</Heading1>
					</div>
				</div>
				<div className='pagination-container clearfix mt-3'>
					<div className='float-right'>
						{/* <h1 className='text-lg'>currentPage - {currentPage}</h1>
						<br /> 
						<Pagination
							currentPage={currentPage}
							totalCount={threads.length}
							pageSize={PageSize}
							onPageChange={(page) => setCurrentPage(page)}
							siblingCount={2}
						/>*/}
					</div>
				</div>
				<Suspense fallback={<div>Loading...77777777777777777</div>}>
					<div className='forum-items'>
						{
							//renderThreads()

							//fff;
							resource &&
								resource.map((row, index) => (
									<ThreadListItem
										key={row.id}
										data={row}
										cls={index % 2 === 0 ? 'active' : ''}
									/>
								))
						}
					</div>
				</Suspense>
			</div>
		</>
	);
};

export default Homexx;
