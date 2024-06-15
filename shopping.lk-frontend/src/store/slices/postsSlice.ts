import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

type PostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
	date: string;
	reactions: {
		thumbsUp: number;
		wow: number;
		heart: number;
		rocket: number;
		coffee: number;
	};
};

type PostResp = {
	date: string;
	userId: number;
	id: number;
	title: string;
	body: string;
};

type PostsStateType = {
	posts: PostType[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: null | string;
};

const initialState: PostsStateType = {
	posts: [],
	status: 'idle',
	error: null,
};

export const fetchPosts = createAsyncThunk<PostResp[], void, { rejectValue: Error }>(
	'posts/fetchPosts',
	async () => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const response = await axios.get(POSTS_URL);
			console.log(response.data);
			return response.data;
		} catch (error) {
			throw new Error('Failed to fetch posts');
		}
	},
);

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
	const response = await axios.post(POSTS_URL, initialPost);
	return response.data;
});

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			// prepare callback allows you to customize the action payload before it is passed to the reducer.
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				};
			},
		},
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.find((post) => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading';
			}) /* : PayloadAction<PostType[]> */
			.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostResp[]>) => {
				state.status = 'succeeded';

				// Adding date and reactions
				const loadedPosts = action.payload.map((post) => {
					let tempObj = {
						...post,
						date: new Date().toISOString(),
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					};
					return tempObj;
				});

				state.posts = loadedPosts;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message ?? 'Something went wrong when fetching posts';
			});
		/* 
			.addCase(addNewPost.fulfilled, (state: PostsStateType, action) => {
				// Fix for API post IDs:
				// Creating sortedPosts & assigning the id
				// would be not be needed if the fake API
				// returned accurate new post IDs
				const sortedPosts = state.sort((a, b) => {
					if (a.id > b.id) return 1;
					if (a.id < b.id) return -1;
					return 0;
				});
				action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
				// End fix for fake API post IDs

				action.payload.userId = Number(action.payload.userId);
				action.payload.date = new Date().toISOString();
				action.payload.reactions = {
					thumbsUp: 0,
					hooray: 0,
					heart: 0,
					rocket: 0,
					eyes: 0,
				};
				console.log(action.payload);
				state.posts.push(action.payload);
			}); 
		*/
	},
});

export const selectAllPosts = (state: { posts: PostsStateType }) => {
	//console.log(state);
	return state.posts.posts;
};

export const getPostsStatus = (state: { posts: PostsStateType }) => {
	//console.log(state);
	return state.posts.status;
};

export const getPostsError = (state: { posts: PostsStateType }) => {
	//console.log(state);
	return state.posts.error;
};

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
