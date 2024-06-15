import { useEffect, useState } from 'react';
import { wrapPromise, promiseWrapper } from '@shared/services/wrapPromise';
import { ThreadType } from '@shared/types/thread.type';
import axios from 'axios';

type ThreadsBelongsToCategoryResponseType = {
	status: 'Success' | 'Error';
	data?: ThreadType[];
	message: string;
};

export function useFetch(url: string) {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		setData(null);

		/*
		fetch(url)
		.then((response) => response.json())
		.then((result) => {
			setData(result);
		});
		*/

		const promise = axios
			.get<ThreadsBelongsToCategoryResponseType>(url)
			.then((response) => response.data.data)
			.catch((err) => {
				console.log(err);
				throw new Error('Failed to retrieve threads data');
			});

		//setData(promiseWrapper(promise));
		setData(wrapPromise(promise));
	}, [url]);

	return data;
}
