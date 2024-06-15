import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import userImg from '@assets/user-2.png';
import axios from 'axios';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { ThreadType } from '@shared/types/thread.type';
import { ButtonLink } from '@components/ButtonLink';
import { Button } from '@components/Button';
import { Pagination, Pagination0 } from '@components/Pagination';
import { ErrorMessage } from '@root/components/Error';
import { Table, Table2 } from '@root/components/Table';
import { Alert } from '@root/components/Alert';

type ThreadListResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

const Home = () => {
	//export const Home = () => {
	const [threads, setThreads] = useState<ThreadType[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
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
			let response = await axios<ThreadListResponseType>({
				method: 'get',
				url: VITE_REST_API_URL + '/threads',
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
		fetchData();
	}, []);

	const forumItems = [];

	if (currentTableData.length > 0) {
		let cls = '';
		currentTableData.map((row) => {
			cls = cls == '' ? 'active' : '';
			console.log(row);
			forumItems.push(<ThreadListItem data={row} cls={cls} />);
		});
	} else {
		forumItems.push([<h3>No results</h3>]);
	}

	const data = [
		{
			kname: 'Cy Ganderton',
			job: 'Quality Control Specialist',
			location: 'Canada',
			country: 'USA',
		},
		{
			kname: 'Hart Hagerty',
			job: 'Desktop Support Technician',
			location: 'United States',
			country: 'USA',
		},
		{
			kname: 'Brice Swyre',
			job: 'Tax Accountant',
			location: 'China',
			country: 'USA',
		},
		{
			kname: 'Brice Swyre',
			job: 'Tax Accountant',
			location: 'China',
			country: 'USA',
		},
		{
			kname: 'Brice Swyre',
			job: 'Tax Accountant',
			location: 'China',
			country: 'USA',
		},
	];

	const columns = [
		{
			key: 'name',
			title: 'Name',
		},
		{
			key: 'job',
			title: 'Job',
		},
		{
			key: 'location',
			title: 'Color',
		},
		{
			key: 'country',
			title: 'Us',
		},
	];

	//type DataKeyType = (typeof columns)[number]['key'];
	type DataKeyType = 'name' | 'job' | 'location' | 'country' | 'jj';

	//type gg = typeof columns;

	/* type RemoveReadOnly<T> = {
		-readonly [K in keyof T]: T[K] extends ReadonlyArray<infer U> ? RemoveReadOnly<U>[] : T[K];
	};

	type Mutable<T> = T extends object ? RemoveReadOnly<T> : T;

	type MutableGg = Mutable<gg>; */

	return (
		<>
			<Table data={data} tableHeadings={columns} />
			<Alert type='danger'>Bootstrap does not have a component that allows filtering.</Alert>
			<Alert type='info'>Bootstrap does not have a component that allows filtering.</Alert>
			<Alert type='success'>Bootstrap does not have a component that allows filtering.</Alert>
			<Alert type='warning'>Bootstrap does not have a component that allows filtering.</Alert>
			<ErrorMessage>
				Bootstrap does not have a component that allows filtering. However, we can use
				jQuery to filter / search for elements. TableBody TableHead TableHeader TableRow
			</ErrorMessage>
			<Table2 headings={['aa', 'bb', 'cc']} text={'aaaaa'}></Table2>
			{/* 
			<Table<DataKeyType> data={data} tableHeadings={columns} />

			
			<TableHead><TableHeader>sssssss</TableHeader></TableHead>
			
			<Table>
				<TableHead>
					<TableRow>						
						<TableHeaderCell>sssssss</TableHeaderCell>
						<TableHeaderCell>sssssss</TableHeaderCell>
						<TableHeaderCell>sssssss</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>						
						<TableDataCell>sssssss</TableDataCell>
						<TableDataCell>sssssss</TableDataCell>
						<TableDataCell>sssssss</TableDataCell>
					</TableRow>
				</TableBody>
			</Table> */}
			<div className='btn-section-container clearfix'>
				<div className='pull-right'>
					<ButtonLink href='/ask-question' text='Ask Question' />
				</div>
			</div>
			<button type='button' className='btn'>
				Basic
			</button>
			<button type='button' className='btn btn-default'>
				Default
			</button>
			<button type='button' className='btn btn-primary'>
				Primary
			</button>
			<button type='button' className='btn btn-success'>
				Success
			</button>
			<button type='button' className='btn btn-info'>
				Info
			</button>
			<button type='button' className='btn btn-warning'>
				Warning
			</button>
			<button type='button' className='btn btn-danger'>
				Danger
			</button>
			<button type='button' className='btn btn-link'>
				Link
			</button>
			<p>
				<Button>Go Back</Button>&nbsp;
				<Button type='default'>Go Back</Button>&nbsp;
				<Button type='primary'>Go Back</Button>&nbsp;
				<Button type='success'>Go Back</Button>&nbsp;
				<Button type='info'>Go Back</Button>&nbsp;
				<Button type='warning'>Go Back</Button>&nbsp;
				<Button type='danger'>Go Back</Button>&nbsp;
			</p>
			<br />
			<div></div>
			<br />
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						<small>Total Threads: {threads.length}</small>
					</div>
					<h3>Questions</h3>
				</div>
				<div className='forum-items'>{forumItems}</div>
			</div>
			eee
			<h1 className='text-lg'>currentPage - {currentPage}</h1>
			<br />
			<Pagination
				currentPage={currentPage}
				totalCount={threads.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
				siblingCount={2}
			/>
			ggg
			{/*
                <div className="col-sm-12">
                    <div className="pagination-div pull-right clearfix">
                        <ul className="pagination">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                        </ul>
                    </div>
                </div>
            */}
		</>
	);
};

export default Home;
