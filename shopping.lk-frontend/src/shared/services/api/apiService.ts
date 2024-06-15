// apiService.js
import { AxiosRequestConfig } from 'axios';
import axiosInstance, { axiosPrivate } from '@shared/services/api/axiosService';
import { setCredentials, logOut } from '@store/slices/authSlice';
import store from '@store';

export default class ApiService {
	constructor() {}
	_setInterceptors() {}
	_handleResponse_() {}
	_handleError_() {}
	get() {}
	post() {}
	put() {}
	delete() {}
	patch() {}
	getAll() {}
}

// Add a request interceptor to attach the authorization header before each request
axiosPrivate.interceptors.request.use(
	(config) => {
		//const authState = useAppSelector((state) => state.auth);
		const authState = store.getState()?.auth;

		if (authState?.token && !config.headers['Authorization']) {
			config.headers['Authorization'] = `Bearer ${authState?.token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

/* 
axiosPrivate.interceptors.response.use(
	(response) => response,
	async (error) => {
		const prevRequest = error?.config;
		if (error?.response?.status === 403 && !prevRequest?.sent) {
			console.log('Sending refresh token');
			prevRequest.sent = true;

			//const newAccessToken = await refresh();
			const newAccessToken = await axiosPrivate.get('/refresh');

			prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
			//return axiosPrivate(prevRequest);
			return axiosPrivate.request(prevRequest);
		}
		return Promise.reject(error);
	},
); 
*/

/* 
//prevRequest?.sent
//refreshResult

//new access token is set to store
//next - request goes
//authorization header in next request

//logout when  - /refresh not gives data
//logout when  - error occured
*/

// Add a response interceptor to handle token refresh logic
axiosPrivate.interceptors.response.use(
	(response) => response,
	async (error) => {
		console.log(error);
		console.log(error.message);
		console.log('====error====');

		const prevRequest = error?.config;

		if (
			prevRequest.headers['Authorization'] &&
			error?.response?.status === 401 &&
			!prevRequest?.sent
		) {
			//if (error?.response?.status === 403 && !prevRequest?.sent) {
			console.log('Sending refresh token');
			//const dispatch = useAppDispatch();
			try {
				prevRequest.sent = true;
				alert('regenerate token');

				// Send refresh token to get a new access token
				//const refreshResult = await axiosPrivate.get('/refresh');
				const refreshResult = await axiosInstance.get('/refresh', {
					withCredentials: true,
				});

				console.log(refreshResult);
				if (refreshResult.data) {
					const user = store.getState()?.auth?.user;
					//const authState = useAppSelector((state) => state.auth);
					//const user = authState?.user;

					const newAccessToken = refreshResult.data.access_token;

					// Store the new token
					store.dispatch(setCredentials({ accessToken: newAccessToken, user }));

					// Retry the original request with the new access token

					prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

					//return axiosPrivate.request(error.config);
					return axiosPrivate.request(prevRequest);
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

/* 
The config object allows you to provide additional or override default options for the request, 
including the url and data.
*/
export const apiRequest = {
	get: (url: string, config?: AxiosRequestConfig) => {
		return axiosPrivate.get(url, config);
	},
	post: <T>(url: string, data?: T, config?: AxiosRequestConfig) => {
		return axiosPrivate.post(url, data, config);
	},
	put: <T>(url: string, data?: T, config?: AxiosRequestConfig) => {
		return axiosPrivate.put(url, data, config);
	},
	delete: (url: string, config?: AxiosRequestConfig) => {
		return axiosPrivate.delete(url, config);
	},
	patch: <T>(url: string, data?: T, config?: AxiosRequestConfig) => {
		return axiosPrivate.patch(url, data, config);
	},
};
