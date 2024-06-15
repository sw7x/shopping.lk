import { AxiosRequestConfig } from 'axios';
import axiosInstance, { axiosPrivate } from '@shared/services/api/axiosService';
import { setCredentials, logOut } from '@store/slices/authSlice';
import store from '@store';

export default class authApiService {
	private static instance: authApiService;
	private axiosPrivateInstance;
	private axiosPublicInstance;

	private constructor() {
		this.axiosPrivateInstance = axiosPrivate;
		this.axiosPublicInstance = axiosInstance;
		this._setRequestInterceptor();
		this._setResponseInterceptor();
	}

	public static getInstance(): authApiService {
		if (!authApiService.instance) {
			authApiService.instance = new authApiService();
		}
		return authApiService.instance;
	}

	// Add a request interceptor to attach the authorization header before each request
	private _setRequestInterceptor(): void {
		this.axiosPrivateInstance.interceptors.request.use(
			(config) => {
				const authState = store.getState()?.auth;

				if (authState?.token && !config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${authState?.token}`;
				}
				return config;
			},
			(error) => Promise.reject(error),
		);
	}

	// Add a response interceptor to handle token refresh logic
	private _setResponseInterceptor(): void {
		this.axiosPrivateInstance.interceptors.response.use(
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
					console.log('Sending refresh token');
					try {
						prevRequest.sent = true;
						alert('regenerate token');

						// Send refresh token to get a new access token
						const refreshResult = await this.axiosPublicInstance.get('/refresh', {
							withCredentials: true,
						});

						console.log(refreshResult);
						if (refreshResult.data) {
							const user = store.getState()?.auth?.user;
							const newAccessToken = refreshResult.data.access_token;

							// Store the new token
							store.dispatch(setCredentials({ accessToken: newAccessToken, user }));

							// Retry the original request with the new access token
							prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

							return this.axiosPrivateInstance.request(prevRequest);
						} else {
							// Logout if refresh token fails
							store.dispatch(
								logOut({
									responseMessage:
										'Invalid response recived when refreshing authentication token, logging out',
								}),
							);
						}
					} catch (refreshError) {
						// Handle refresh token request error
						console.error('Refresh token request failed:', refreshError);
						store.dispatch(
							logOut({
								responseMessage:
									'Authentication token has expired and failed to refresh, logging out',
							}),
						);
					}
				}
				return Promise.reject(error);
			},
		);
	}

	/* 	The config object allows you to provide additional or override default options 
		for the request, including the url and data.  */
	public get(url: string, config?: AxiosRequestConfig) {
		return this.axiosPrivateInstance.get(url, config);
	}

	/* 	The config object allows you to provide additional or override default options 
		for the request, including the url and data.  */
	public post<T>(url: string, data?: T, config?: AxiosRequestConfig) {
		return this.axiosPrivateInstance.post(url, data, config);
	}

	/* 	The config object allows you to provide additional or override default options 
		for the request, including the url and data.  */
	public put<T>(url: string, data?: T, config?: AxiosRequestConfig) {
		return this.axiosPrivateInstance.put(url, data, config);
	}

	/* 	The config object allows you to provide additional or override default options 
		for the request, including the url and data.  */
	public delete(url: string, config?: AxiosRequestConfig) {
		return this.axiosPrivateInstance.delete(url, config);
	}

	/* 	The config object allows you to provide additional or override default options 
		for the request, including the url and data.  */
	public patch<T>(url: string, data?: T, config?: AxiosRequestConfig) {
		return this.axiosPrivateInstance.patch(url, data, config);
	}
}
