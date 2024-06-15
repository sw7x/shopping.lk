import { useState, useEffect } from 'react';
import axios from 'axios';
import { ThreadType } from '@shared/types/thread.type';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { wrapPromise, promiseWrapper } from '@shared/services/wrapPromise';
import { Alert } from '@components/Alert';
import { ErrorMessage } from '@root/components/Error/ErrorMessage';
import { useHover } from '@shared/hooks/useHover';

type ThreadsBelongsToCategoryResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

const { VITE_REST_API_URL } = import.meta.env;

function useZZZ(url: string) {
	console.log('zzz');

	useEffect(() => {
		console.log('useEffect-zzz');
	}, [url]);
}

function useGetData(url: string) {
	const [resource, setResource] = useState(null);
	useEffect(() => {
		const promise = axios
			.get<ThreadsBelongsToCategoryResponseType>(url)
			.then((response) => response.data.data)
			.catch((err) => {
				console.log(err);
				throw new Error('Failed to retrieve threads data');
			});
		setResource(promiseWrapper(promise));
	}, [url]);
	return resource;
}

const fetchThreads = () => {
	let cid = 1;
	let url = VITE_REST_API_URL + '/categories/' + cid + '/threads';

	const promise = axios
		.get<ThreadsBelongsToCategoryResponseType>(url)
		.then((response) => response.data.data)
		.catch((err) => {
			console.log(err);
			throw new Error('Failed to retrieve threads data');
		});

	/* 
	const promise1 = new Promise<ThreadsBelongsToCategoryResponseType>((resolve, reject) => {
		setTimeout(() => {
			axios
				.get<ThreadsBelongsToCategoryResponseType>(url)
				.then((response) => {
					//resolve(response.data.data);
					//reject(new Error('ffffff'));
					reject('yyyyyyyyyyy');
				})
				//.catch((err) => {
					console.log(err)
					reject(err)
				});
		}, 1000);
	});
	*/
	return wrapPromise(promise);
};

const threadResouce = fetchThreads();

const ThreadList = ({ categoryId }: { categoryId: number }) => {
	const [val, setVal] = useState(0);
	const [hoverRef, isHovering] = useHover();

	//const [url, setUrl] = useState(VITE_REST_API_URL + '/categories/' + categoryId + '/threads');

	let url = VITE_REST_API_URL + '/categories/' + categoryId + '/threads';
	const data = useGetData(url);

	const x1 = useZZZ(url);
	//const x2 = useZZZ(url);
	//const x3 = useZZZ(url);
	//const x4 = useZZZ(url);
	//const x5 = useZZZ(url);

	//const data = threadResouce.read();
	console.log(data);

	const clickHandler = () => {
		setVal((prev) => prev + 1);
		//setUrl('jj');
	};

	return (
		<>
			<div></div>
			<div>{JSON.stringify(isHovering)}</div>

			<div ref={hoverRef}>value - {val}</div>
			<button onClick={clickHandler}>Clik</button>
			<br />
			<div className='forum-items'>
				{data && (data as ThreadType[]).length === 0 ? (
					<Alert>No Threads available for this category</Alert>
				) : (
					data &&
					(data as ThreadType[]).map((row: ThreadType, index: number) => (
						<ThreadListItem
							key={index}
							data={row}
							cls={index % 2 === 0 ? '' : 'active'}
						/>
					))
				)}

				{/*  
				<pre>{JSON.stringify(data, null, 2)}</pre>
				{posts.map((post) => (
					<li key={post.id}>{post.text}</li>
				))} 
				*/}
			</div>
		</>
	);
};

export default ThreadList;
