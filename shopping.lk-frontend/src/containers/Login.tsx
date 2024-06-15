import {
	CheckBox,
	CheckBoxGroup,
	DropDownList,
	InutEmail,
	InutPassword,
	InutText,
	RadioBtnGroup,
	TextBox,
} from '@root/components/Form';
import ImageUpload from '@root/components/Form/ImageUpload';
import React, { useEffect, useState, useContext } from 'react';

import banner4Img from '@assets/images/banner4.png';
import { PageHeader } from '@containers/shared/PageHeader';
import { Breadcrumb } from '@containers/shared/Breadcrumb';

type RegFormState = {
	fullName: string;
	userName: string;
	gender: string;
	email: string;
	profile_img: null | File;
	password: string;
	confirm_password: string;
	account_type: string;
	farm_types: Record<string, boolean>;
	msg: string;
	rememberMe: boolean;
};
const formInitialValues = {
	fullName: '',
	userName: '',
	gender: '',
	email: '',
	profile_img: null,
	password: '',
	confirm_password: '',
	account_type: 'farmer',
	farm_types: {},
	msg: '',
	rememberMe: false,
};

const errorInitialValues = {
	fullName: [],
	userName: [],
	gender: [],
	email: [],
	profile_img: [],
	password: [],
	confirm_password: [],
	account_type: [],
	farm_types: [],
	msg: [],
	rememberMe: [],
};

const touchedFieldsInitialValues = {
	fullName: false,
	userName: false,
	gender: false,
	email: false,
	profile_img: false,
	password: false,
	confirm_password: false,
	account_type: false,
	farm_types: false,
	msg: false,
	rememberMe: false,
};

const Login = () => {
	const [formData, setFormData] = useState<RegFormState>(formInitialValues);
	const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>(errorInitialValues);
	const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>(
		touchedFieldsInitialValues,
	);

	const handleChange = (
		name: string,
		value: Record<string, boolean> | string | null | File | boolean,
		setFieldTochedProperty: boolean,
	) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		setTouchedFields((prevData) => ({
			...prevData,
			[name]: setFieldTochedProperty === true ? true : prevData[name],
		}));

		//setIsSubmit(false);
	};

	return (
		<>
			<PageHeader title='Login' />

			<Breadcrumb />

			<nav aria-label='breadcrumb' className='breadcrumb-nav'>
				<div className='container'>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<a href='index.html'>
								<i className='icon-home'></i>
							</a>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Login
						</li>
					</ol>
				</div>
			</nav>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='text-section mb-2'>
							<p className='lead'>If you have an account with us, please log in.</p>
						</div>

						<form action='#'>
							<div className='form-group row'>
								<label className='col-md-3 _col-form-label'>
									Email or Username
								</label>
								<div className='col-12 col-md-9'>
									<input
										id='text'
										name='text'
										type='text'
										className='form-control'
									/>
								</div>
							</div>

							<div className='form-group row'>
								<label className='col-md-3 _col-form-label'>Password</label>
								<div className='col-12 col-md-9'>
									<input
										id='text1'
										name='text1'
										type='password'
										className='form-control'
									/>
								</div>
							</div>
							<br />
							<hr />
							<br />

							<InutText
								name='fullName'
								title='full Name'
								description='Type your full name'
								value={formData.fullName}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>,
									setToucheProperty = true, //console.log(e.target.value)
								) => handleChange('fullName', e.target.value, setToucheProperty)}
								errors={formErrors.fullName}
								isTouched={touchedFields.fullName}
								autoFocus={true}
								placeholder='full Name'
								required={true}
								minLength={4}
								maxLength={50}
								//disabled={true}
							/>
							<InutText
								name='usernName'
								title='Username'
								description='Type your username'
								value={formData.userName}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>,
									setToucheProperty = true, //console.log(e.target.value)
								) => handleChange('userName', e.target.value, setToucheProperty)}
								errors={formErrors.userName}
								isTouched={touchedFields.userName}
								placeholder='Username'
								required={true}
								minLength={4}
								maxLength={20}
							/>
							<DropDownList
								name={'gender'}
								title='Gender'
								description='Select your gender'
								options={[
									{ label: 'Male', value: 'male' },
									{ label: 'Female', value: 'female' },
									{ label: 'Other', value: 'other' },
								]}
								onChange={(
									e: React.ChangeEvent<HTMLSelectElement>,
									setToucheProperty = true,
								) => {
									handleChange('gender', e.target.value, setToucheProperty);
									console.log(e);
								}}
								reset={() =>
									//console.log('reset')
									handleChange('gender', '', true)
								}
								errors={formErrors.gender}
								value={formData.gender}
								isTouched={touchedFields.gender}
								required={true}
								//disabled={true}
							/>
							<InutEmail
								name='email'
								title='Email'
								description='Type your email address'
								value={formData.email}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>,
									setToucheProperty = true, //console.log(e.target.value)
								) => handleChange('email', e.target.value, setToucheProperty)}
								errors={formErrors.email}
								isTouched={touchedFields.email}
								placeholder='Email'
								required={true}
								minLength={6}
								maxLength={50}
								//disabled={true}
							/>
							<ImageUpload
								name='profile_img'
								title='profile imge'
								description='Upload your profile image'
								accept='image/*'
								errors={formErrors.profile_img}
								isTouched={touchedFields.profile_img}
								onChange={(img: File | null, setToucheProperty = true) => {
									console.log(img);
									handleChange('profile_img', img, setToucheProperty);
								}}
								value={formData.profile_img}
								reset={() => {
									console.log('img');
									//handleChange('profile_img', null, true)
									return null;
								}}
								size={1024 * 1024}
								required={true}
								multiple={false}
								//disabled={true}
							/>
							<InutPassword
								name='password'
								title='Password'
								description='Type your password'
								value={formData.password}
								onChange={
									(
										e: React.ChangeEvent<HTMLInputElement>,
										setToucheProperty = true,
									) => handleChange('password', e.target.value, setToucheProperty)
									//console.log(e.target.value)
								}
								errors={formErrors.password}
								isTouched={touchedFields.password}
								placeholder='Type your password'
								required={true}
								minLength={4}
								maxLength={10}
								//disabled={true}
							/>
							<InutPassword
								name='confirm_password'
								title='Confirm password'
								description='Type your password again'
								value={formData.confirm_password}
								onChange={
									(
										e: React.ChangeEvent<HTMLInputElement>,
										setToucheProperty = true, //console.log(e.target.value)
									) =>
										handleChange(
											'confirm_password',
											e.target.value,
											setToucheProperty,
										) /* */
								}
								errors={formErrors.confirm_password}
								isTouched={touchedFields.confirm_password}
								placeholder='Confirm password'
								required={true}
								minLength={4}
								maxLength={10}
							/>
							<RadioBtnGroup
								name='account_type'
								options={[
									{ label: 'Farmer', value: 'farmer' },
									{ label: 'Expert', value: 'expert' },
								]}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>,
									setToucheProperty = true,
								) => {
									handleChange('account_type', e.target.value, setToucheProperty);
									//console.log(e);
								}}
								title='User Type'
								errors={formErrors.account_type}
								value={formData.account_type}
								isTouched={touchedFields.account_type}
								description='Select your user type'
								required={true}
								//disabled={true}
							/>
							<CheckBoxGroup
								name='farm_types'
								options={[
									{
										label: 'Crop farming',
										value: 'crop',
										desc: ' These farms grow plants and vegetables for food, fuel, or fiber. Examples include grain farms, fruit and vegetable farms, and nut farms',
									},
									{
										label: 'Livestock farming',
										value: 'livestock',
										desc: '  These farms raise animals for meat, dairy, wool, or other products. Examples include cattle farms, poultry farms, pig farms, and sheep farms.',
									},
									{
										label: 'Mixed farms',
										value: 'Mixed',
										desc: ' These farms combine crop and livestock production. They are often smaller and family-run, offering a diversified income stream',
									},
									{
										label: 'Aquaculture farms',
										value: 'aquaculture',
										desc: ' These farms raise fish, shellfish, or other aquatic organisms in water-based environments. Examples include fish farms, shrimp farms, and oyster farms',
									},
									{
										label: 'Other',
										value: 'other',
										desc: '',
									},
								]}
								onChange={(
									checkBoxState: Record<string, boolean>,
									setToucheProperty = true,
								) => {
									console.log(checkBoxState);
									handleChange('farm_types', checkBoxState, setToucheProperty);
								}}
								title='Type of Farming'
								value={formData.farm_types}
								errors={formErrors.farm_types}
								//selectedValues={{ crop: true, aquaculture: true }}
								isTouched={touchedFields.farm_types}
								description='Select the kind of farms that you work or involved in'
								required={true}
								//disabled={true}
							/>

							<TextBox
								isTouched={false}
								errors={[]}
								name='msg'
								title='User Type gg'
								description='Select your user type'
								className=''
								required={true}
								onChange={(
									e: React.ChangeEvent<HTMLTextAreaElement>,
									setToucheProperty = true,
								) => {
									handleChange('msg', e.target.value, setToucheProperty);
									//console.log(e);
								}}
								autoFocus={false}
								value={formData.msg}
								//disabled={true}
							/>

							<CheckBox
								name='remember_me'
								onChange={(checkBoxState: boolean) => {
									console.log(checkBoxState);
									handleChange('rememberMe', checkBoxState, true);
								}}
								//title='Remember me'
								description='Remember me on this device'
								value='rememberMe'
								errors={formErrors.rememberMe}
								isTouched={touchedFields.rememberMe}
								required={true}
								selected={formData.rememberMe}
								//disabled={true}
							/>

							<div className='form-group row'>
								<div className='offset-md-3 col-md-9'>
									<button type='reset' className='btn btn-sm btn-danger mr-5'>
										Reset
									</button>
									<button type='submit' className='btn  btn-sm btn-primary'>
										Login
									</button>
								</div>
								<div className='offset-md-3 col-md-9 mt-3'>
									<a href='#' className='forget-pass btn-link'>
										{' '}
										Forgot your password ?
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='mb-5'></div>
		</>
	);
};

export default Login;
