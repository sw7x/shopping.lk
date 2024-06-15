import { useSelector, useDispatch } from 'react-redux';
import {
	selectAllPosts,
	getPostsStatus,
	getPostsError,
	fetchPosts,
} from '@store/slices/postsSlice';
import { useEffect } from 'react';
import { LoadingSpinner } from '@root/components/LoadingSpinner';
import { useAppDispatch, useAppSelector } from '@shared/hooks/useStore';
import { ErrorMessage } from '@root/components/Error';
import { Heading1 } from '@root/components/Headings';
import axios, { CancelTokenSource } from 'axios';

const Posts = () => {
	//const dispatch = useDispatch();
	const dispatch = useAppDispatch();
	const posts = useAppSelector(selectAllPosts);
	const postStatus = useAppSelector(getPostsStatus);
	const error = useAppSelector(getPostsError);

	const fetchData = async () => {
		const { VITE_REST_API_URL } = import.meta.env;

		try {
			let response = await axios.get(`${VITE_REST_API_URL}/refresh`, {
				headers: {
					//'Content-Type': 'application/json',
					//'Content-Type': 'text/plain',
					//Authorization: `Bearer hh`,
				},
				withCredentials: true,
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (postStatus === 'idle') dispatch(fetchPosts());
	}, [postStatus, dispatch]);

	let content;
	if (postStatus === 'loading') {
		content = <LoadingSpinner />;
	} else if (postStatus === 'succeeded') {
		const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
		content = orderedPosts.map((post) => (
			<div className='border mb-5 border-red-700 p-2' key={post.id}>
				<h3>
					<span className='text-red-600'>Title - </span>
					{post.title}
				</h3>
				<p>
					<span className='text-red-600'>Body - </span>
					{post.body.substring(0, 100)}
				</p>
				<div className='postCredit'>
					<p>
						<span className='text-red-600'>User id - </span>
						{post.userId}
					</p>
					<p>
						<span className='text-red-600'>Date - </span>
						{post.date}
					</p>
				</div>
				<div>
					<span className='text-red-600'>Reactions - </span>
					{JSON.stringify(post.reactions)}
				</div>
			</div>
		));
	} else if (postStatus === 'failed') {
		content = <ErrorMessage>{error}</ErrorMessage>;
	}

	return (
		<section>
			<Heading1>Posts</Heading1>
			<div className='mt-5'>{content}</div>
		</section>
	);
};

export default Posts;
