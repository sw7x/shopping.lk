import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { ThreadType } from '@shared/types/thread.type';
import { Pagination } from '@components/Pagination';

type ThreadListResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

const Home = () => {
	//export const Home = () => {
	const [threads, setThreads] = useState<ThreadType[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const PageSize = 10;

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		//return data.slice(firstPageIndex, lastPageIndex);
		return threads.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	const fetchData = async () => {
		const { VITE_REST_API_URL } = import.meta.env;

		try {
			let response = await axios.get<ThreadListResponseType>(`${VITE_REST_API_URL}/threads`);
			const threadArr = response?.data?.data ? response.data.data : [];
			console.log(threadArr.length);
			console.log('threadArr.length');

			setThreads(threadArr);
			//setCurrentPage(1);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderThreads = () => {
		if (currentTableData.length === 0) {
			return <h3>No results</h3>;
		}

		return currentTableData.map((row, index) => (
			<ThreadListItem key={index} data={row} cls={index % 2 === 0 ? 'active' : ''} />
		));
	};

	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						<small>Total Threads: {threads.length}</small>
					</div>
					<h3>Questions</h3>
				</div>
				<div className='forum-items'>{renderThreads()}</div>
			</div>

			<h1 className='text-lg'>currentPage - {currentPage}</h1>
			<br />
			<Pagination
				currentPage={currentPage}
				totalCount={threads.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
				siblingCount={2}
			/>
		</>
	);
};

export default Home;
