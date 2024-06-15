import { InutPassword, InutText, ResetBtn, SubmitBtn, CheckBox } from '@root/components/Form';
import { Heading1 } from '@root/components/Headings';
import React, { useEffect, useState, useContext } from 'react';
import { number, z } from 'zod';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { UserType } from '@root/shared/types/user.type';
import { ErrorMessageList } from '@components/Error/ErrorMessageList';

//import { useAuth } from '@shared/hooks/auth/useAuth';
//import { useSelector, useDispatch } from 'react-redux';
import {
	selectAuthUser,
	selectAuthToken,
	loginUser,
	selectAuthStatus,
	selectAuthReredirectUrl,
} from '@store/slices/authSlice';
import { ProcessingAnimation } from '@components/ProcessingAnimation';
import { FaCheckCircle } from 'react-icons/fa';
import { Alert } from '@root/components/Alert';
import { useAppDispatch, useAppSelector } from '@shared/hooks/useStore';

//import { LoadingSpinner } from '@components/LoadingSpinner';
//import axios, { CancelTokenSource } from 'axios';
//import AuthContext from '@context/AuthProvider';
//import DataContext from '@context/DataProvider';

type LoginResponseType = {
	token: string;
	token_type: string;
	user: UserType;
	expires_in: number;
	message: string;
	status: string;
};

const formInitialValues = {
	username: '',
	password: '',
	rememberMe: false,
};
const errorInitialValues = {
	username: [],
	password: [],
	rememberMe: [],
};

const touchedFieldsInitialValues = {
	username: false,
	password: false,
	rememberMe: false,
};

// creating a schema
const loginFormSchema = z.object({
	username: z
		.string()
		.min(4)
		//.max(10)
		.refine((value) => value !== 'aa', {
			message: 'Username cannot be "aa"',
		}),
	password: z.string().min(4), //.max(10)
	rememberMe: z.boolean(),
});

const Login = () => {
	const [formData, setFormData] = useState(formInitialValues);
	const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>(errorInitialValues);
	const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>(
		touchedFieldsInitialValues,
	);

	const [serverErrMsg, setServerErrMsg] = useState('');
	const [serverErrList, setServerErrList] = useState<React.ReactElement | null>(null);
	const [isSubmit, setIsSubmit] = useState(false);
	//const { auth, setAuth } = useContext(AuthContext);
	//const { data, setData } = useContext(DataContext);
	//const { auth: authx, setAuth: setAuthx } = useAuth();
	//console.log(authx);
	//console.log(setAuthx);

	//const navigateTo = useNavigate();
	//const location = useLocation();

	const authState = useAppSelector((state) => state.auth);

	const authUser = useAppSelector(selectAuthUser);
	const authStatus = useAppSelector(selectAuthStatus);
	//const redirectUrl = useAppSelector(selectAuthReredirectUrl);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const errors = validate();
		setFormErrors(errors);
	}, [formData.username, formData.password]);

	//const from = location.state?.from || redirectUrl || '/empty';
	const from = '/empty';

	/* useEffect(() => {
		if (authUser !== null && authStatus === 'success') {
			setTimeout(() => {
				navigateTo(from, { replace: true });
			}, 3000);
		}
	}, [authUser]); */

	const handleChange = (
		name: string,
		value: string | boolean,
		//setFieldTochedProperty: boolean,
	) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		setTouchedFields((prevData) => ({
			...prevData,
			//[name]: setFieldTochedProperty === true ? true : prevData[name],
			[name]: true,
		}));

		setIsSubmit(false);
	};

	// This function will send our form data to
	// store function of PostContoller
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTouchedFields({ username: true, password: true, rememberMe: true });

		const errors = validate();
		setFormErrors(errors);
		console.log(errors);
		const isValidForm = Object.values(errors).every(
			(value) => Array.isArray(value) && value.length === 0,
		);

		if (isValidForm === true) {
			alert('can submit');

			let loginFormData = { email: formData.username, password: formData.password };
			dispatch(loginUser(loginFormData));

			/*
			const { VITE_REST_API_URL } = import.meta.env;

			try {
				setIsSubmit(true);
				let response = await axios.post<LoginResponseType>(
					`${VITE_REST_API_URL}/login`,
					{ email: formData.username, password: formData.password },
					{
						headers: { 'Content-Type': 'application/json' },
						//withCredentials: true,  // TODO
					},
				);
				const accessToken = response.data.token;
				const user = response.data.user;

				if (accessToken === undefined || user === undefined) {
					throw new Error('No accessToken or user');
				}

				setAuth({ accessToken, user });
				setServerErrMsg('');
				setServerErrList(null);

				resetForm(); //===> todo
				//navigateTo('/'); //===> todo
				//navigateTo(from, { replace: true });
			} catch (error: unknown) {
				console.log(error);
				console.log('error');

				if (error instanceof Error) {
					if (axios.isAxiosError(error)) {
						const errResponse = error?.response;

						if (!errResponse) {
							setServerErrMsg('No Server Response');
							setServerErrList(null);
						} else if (errResponse?.status === 422) {
							setServerErrMsg(
								errResponse?.data?.message ?? 'Missing Username or Password',
							);
							setServerErrList(
								<ErrorMessageList errors={errResponse?.data?.errors} />,
							);
						} else if (errResponse?.status === 401) {
							setServerErrMsg(errResponse?.data?.message ?? 'Unauthorized');
							setServerErrList(null);
						}
					} else {
						setServerErrMsg(error.message ?? 'Login Failed due to server error');
						setServerErrList(null);
					}
				} else {
					setServerErrMsg('Login Failed due to unknown error');
					setServerErrList(null);
				}
			}*/
		} else {
			alert('no submit'); //===> todo
		}

		// if erors have  - not submit
		// if erors not have  - submit
	};

	const validate = () => {
		const result = loginFormSchema.safeParse(formData);
		let errObj: { [key: string]: string[] } = { username: [], password: [], rememberMe: [] };

		if (!result.success) {
			result.error.errors.map((err) => {
				let fieldname = err.path[0];
				errObj[fieldname].push(err.message);
			});
		}
		return errObj;
	};

	const resetForm = () => {
		setFormData(formInitialValues);
		setFormErrors(errorInitialValues);
		setTouchedFields(touchedFieldsInitialValues);
	};

	const aaa = () => {
		setFormData((prevData) => ({
			...prevData,
			username: 'student@gg.com',
			password: 'Pa$$w0rd!',
			rememberMe: true,
			//username: Math.random().toString(),
			//password: Math.random().toString(),
		}));

		//console.log(auth);
		//setData({ username: 'bb' + Math.random().toString() });
		//navigateTo('/');
		//navigateTo(0); // - refresh
	};

	return (
		<div className='forum-section-container clearfix'>
			<div className='forum-title row'>
				<Heading1>Login</Heading1>

				<pre className='bg-green-700'>{JSON.stringify(authState, undefined, 2)}</pre>
				<br />
				<br />

				{/* <pre className='bg-green-200'>{JSON.stringify(auth, undefined, 2)}</pre> */}
				<pre className='bg-cyan-500'>{JSON.stringify(from, undefined, 2)}</pre>
				<pre className='bg-red-200'>{JSON.stringify(formErrors, undefined, 2)}</pre>
				{
					//Object.keys(formErrors).every((key) => formErrors[key].length === 0) &&
					isSubmit ? (
						<div className='ui message success'>Signed in successfully</div>
					) : (
						<pre>{JSON.stringify(formData, undefined, 2)}</pre>
					)
				}
				<button onClick={aaa}>ddd</button>
			</div>
			<hr />
			<br />

			<div className='question-form row'>
				<div className='col-md-12'>
					{authStatus === 'loading' && <ProcessingAnimation />}

					{authUser === null && authStatus !== 'loading' && (
						<>
							{isSubmit && (
								<>
									{serverErrMsg && (
										<p className='text-red-600 mb-2'>{serverErrMsg}</p>
									)}
									{serverErrList && (
										<div className='text-red-600 text-sm ml-5'>
											{serverErrList}
										</div>
									)}
								</>
							)}

							<form className='login-form mt-5' onSubmit={handleSubmit}>
								<InutText
									name='username'
									title='Username'
									value={formData.username}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										handleChange('username', e.target.value)
									}
									errors={formErrors.username}
									isTouched={touchedFields.username}
									autoFocus={true}
									placeholder='Type your username'
									required={true}
									minLength={4}
									maxLength={50}
								/>
								<InutPassword
									name='password'
									title='Password'
									value={formData.password}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										handleChange('password', e.target.value)
									}
									errors={formErrors.password}
									isTouched={touchedFields.password}
									placeholder='Type your password'
									required={true}
									minLength={4}
									maxLength={10}
								/>

								<CheckBox
									name='remember_me'
									onChange={(
										checkBoxState: boolean,
										//setToucheProperty = true,
									) => {
										console.log(checkBoxState);
										handleChange('rememberMe', checkBoxState);
									}}
									title='Remember me on this device'
									value='rememberMe'
									errors={formErrors.rememberMe}
									isTouched={touchedFields.rememberMe}
									required={true}
									selected={formData.rememberMe}
								/>

								<div className='form-group'>
									<SubmitBtn />
									<ResetBtn onClick={resetForm} />
								</div>
							</form>
						</>
					)}

					{authStatus === 'success' && authUser && (
						<Alert type='success'>
							<FaCheckCircle
								size={22}
								style={{ strokeWidth: '1' }}
								className='inline-block	mr-5'
							/>
							<span className='text-xl ui message success'>
								Signed in successfully and redirecting to home
							</span>
						</Alert>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
