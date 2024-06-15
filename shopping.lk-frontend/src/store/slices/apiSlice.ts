import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { setCredentials, logOut } from '../../features/auth/authSlice';

// Create an Axios instance with base URL and default configuration
const axiosPrivate = axios.create({
	baseURL: 'http://localhost:3500',
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true, // Include credentials with cross-origin requests
});

// Add a request interceptor to attach the authorization header before each request
axiosPrivate.interceptors.request.use(
	(config) => {
		const token = store.getState().auth.token;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Add a response interceptor to handle token refresh logic
axiosPrivate.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		if (error.response && error.response.status === 403) {
			console.log('Sending refresh token');
			try {
				// Send refresh token to get a new access token
				const refreshResult = await axiosPrivate.get('/refresh');
				console.log(refreshResult);
				if (refreshResult.data) {
					const user = store.getState().auth.user;
					// Store the new token
					store.dispatch(setCredentials({ ...refreshResult.data, user }));
					// Retry the original request with the new access token
					return axiosPrivate.request(error.config);
				} else {
					// Logout if refresh token fails
					store.dispatch(logOut());
				}
			} catch (refreshError) {
				// Handle refresh token request error
				console.error('Refresh token request failed:', refreshError);
				store.dispatch(logOut());
			}
		}
		return Promise.reject(error);
	},
);

////////////////
////////////////
// Create API slice using Axios instance
export const apiSlice = createApi({
	baseQuery: async (args, api, extraOptions) => {
		try {
			const response = await axiosPrivate.request({
				...args,
				...extraOptions,
			});
			return { data: response.data };
		} catch (error) {
			return { error: error.response.data };
		}
	},
	endpoints: (builder) => ({}),
});
