import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserType } from '@root/shared/types';
import axios from 'axios';
import type { RootState } from '@store';

export type AuthStateType = {
	user: null | UserType;
	token: null | string;
	status: 'idle' | 'loading' | 'success' | 'failed' | 'error';
	message: string;
	redirectUrl: string;
	isShowMessage: boolean;
};

const initialState: AuthStateType = {
	user: null,
	token: null,
	status: 'idle',
	message: '',
	redirectUrl: '',
	isShowMessage: false,
};

type LoginFailedResponseType = {
	status: 'error';
	message: string;
};
type LoginSuccessResponseType = {
	status: 'success';
	message: string;
	token: string;
	token_type: string;
	user: UserType;
	expires_in: number;
	redirectUrl?: string;
};
type LoginResponseType = LoginFailedResponseType | LoginSuccessResponseType;

type LogOutResponseType = {
	status: 'success' | 'error';
	message: string;
	message2?: string;
};

export const loginUser = createAsyncThunk<
	LoginResponseType,
	{ email: string; password: string },
	{ rejectValue: Error }
>('auth/loginUser', async (loginFormData, thunkAPI) => {
	try {
		const { VITE_REST_API_URL } = import.meta.env;
		let response = await axios.post<LoginResponseType>(
			`${VITE_REST_API_URL}/login`,
			loginFormData,
			{
				headers: { 'Content-Type': 'application/json' },
				withCredentials: true,
			},
		);

		return response.data;
	} catch (error: unknown) {
		if (axios.isAxiosError(error) && error.response) {
			return thunkAPI.rejectWithValue(error.response.data);
		} else {
			return thunkAPI.rejectWithValue(new Error('Failed to log in'));
		}
	}
});

export const logoutUser = createAsyncThunk<LogOutResponseType, void, { rejectValue: Error }>(
	'auth/logoutUser',
	async (_arg, thunkAPI) => {
		try {
			const { VITE_REST_API_URL } = import.meta.env;
			const state = thunkAPI.getState() as RootState;

			const authToken = state.auth.token;
			if (!authToken) {
				throw new Error('No token found');
			}

			let response = await axios.post<LogOutResponseType>(
				`${VITE_REST_API_URL}/logout`,
				null,
				{
					headers: {
						'Content-Type': 'application/json',
						//Authorization: `Bearer ${authToken}`,
					},
					withCredentials: true,
				},
			);

			//console.log(response.data);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			} else {
				return thunkAPI.rejectWithValue(new Error('Failed to logout'));
			}
		}
	},
);

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setCredentials: (state: AuthStateType, action) => {
			const { user, accessToken } = action.payload;
			state.user = user;
			state.token = accessToken;
			state.status = 'success';
			state.message = '';
			state.redirectUrl = '';
		},
		logOut: (
			state: AuthStateType,
			action: PayloadAction<{ redirectUrl?: string; responseMessage?: string } | undefined>,
		) => {
			const { redirectUrl = '/login', responseMessage = 'Logged out successfully' } =
				action?.payload || {};
			state.user = null;
			state.token = null;
			state.status = 'success';
			state.message = responseMessage;
			state.redirectUrl = redirectUrl;
			state.isShowMessage = true;
		},
		viewMessage: (state: AuthStateType, action: PayloadAction<boolean>) => {
			state.isShowMessage = action.payload;
		},
	},

	extraReducers(builder) {
		builder
			.addCase(loginUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				const { status } = action.payload;

				if (status === 'success') {
					const { token, user, redirectUrl = '', message = '' } = action.payload;
					state.user = user;
					state.token = token;
					state.status = 'success';
					state.redirectUrl = redirectUrl || '/';
					state.message = user.username !== '' ? `Welcome ${user.username} !` : message;
					state.isShowMessage = true;
				} else {
					//state.user = null;
					//state.token = null;
					state.status = 'failed';
					state.message = action.payload.message;
					state.isShowMessage = true;
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = 'error';
				state.message = action.payload?.message ?? '';
				state.isShowMessage = true;
			})

			// logout
			.addCase(logoutUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				const { status, message } = action.payload;
				if (status === 'success') {
					state.user = null;
					state.token = null;
					state.status = 'success';
					state.message = message ?? '';
					state.isShowMessage = true;
				} else {
					//state.user = null;
					//state.token = null;
					state.status = 'failed';
					state.message = message ?? '';
					state.isShowMessage = true;
				}
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.user = null;
				state.token = null;
				state.status = 'error';
				state.message = action.error.message ?? '';
				state.isShowMessage = true;
			});
	},
});

export const { setCredentials, logOut, viewMessage } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthUser = (state: { auth: AuthStateType }) => state.auth.user;
export const selectAuthToken = (state: { auth: AuthStateType }) => state.auth.token;
export const selectAuthStatus = (state: { auth: AuthStateType }) => state.auth.status;
export const selectAuthReredirectUrl = (state: { auth: AuthStateType }) => state.auth.redirectUrl;
export const selectAuthResponseMsg = (state: { auth: AuthStateType }) => state.auth.message;
export const selectAuthIsShowMessage = (state: { auth: AuthStateType }) => state.auth.isShowMessage;
