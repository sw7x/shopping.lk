import axios from 'axios';

const { VITE_REST_API_URL } = import.meta.env;
//console.log(VITE_REST_API_URL);

export default axios.create({
	//baseURL: 'http://localhost:3500',
	baseURL: VITE_REST_API_URL,
});

export const axiosPrivate = axios.create({
	baseURL: VITE_REST_API_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});
