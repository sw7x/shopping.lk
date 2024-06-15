import React, { useState } from 'react';
import { z } from 'zod';

// Define a schema for validation
const loginFormSchema = z.object({
	username: z
		.string()
		.min(4)
		.max(10)
		.refine((value) => value !== 'aa', {
			message: 'Username cannot be "aa"',
		}),
	password: z.string().min(4).max(10),
});

const withFormHandling = (WrappedComponent) => {
	return (props) => {
		const formInitialValues = {
			username: '',
			password: '',
		};

		const errorInitialValues = {
			username: [],
			password: [],
		};

		const touchedFieldsInitialValues = {
			username: false,
			password: false,
		};

		const [formData, setFormData] = useState(formInitialValues);
		const [formErrors, setFormErrors] = useState(errorInitialValues);
		const [touchedFields, setTouchedFields] = useState(touchedFieldsInitialValues);

		const handleChange = (name, value) => {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));

			setTouchedFields((prevData) => ({
				...prevData,
				[name]: true,
			}));
		};

		const handleSubmit = async (event) => {
			event.preventDefault();

			setTouchedFields({ username: true, password: true });

			const errors = validate();
			setFormErrors(errors);

			const isValidForm = Object.values(errors).every(
				(value) => Array.isArray(value) && value.length === 0,
			);

			if (isValidForm) {
				// Perform form submission logic
				console.log('Form submitted:', formData);
				resetForm();
			} else {
				console.log('Form validation failed');
			}
		};

		const validate = () => {
			const result = loginFormSchema.safeParse(formData);
			const errObj = {
				username: [],
				password: [],
			};

			if (!result.success) {
				result.error.errors.map((err) => {
					const fieldname = err.path[0];
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

		return (
			<WrappedComponent
				{...props}
				formData={formData}
				formErrors={formErrors}
				touchedFields={touchedFields}
				onChange={handleChange}
				onSubmit={handleSubmit}
				onReset={resetForm}
			/>
		);
	};
};

export default withFormHandling;

//
//
//
//
//
//
//
//
//
//
//

import { InutPassword, InutText, ResetBtn, SubmitBtn } from '@root/components/Form';
import { Heading1 } from '@root/components/Headings';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';

const formInitialValues = {
	username: '',
	password: '',
};
const errorInitialValues = {
	username: [],
	password: [],
};

const touchedFieldsInitialValues = {
	username: false,
	password: false,
};

// creating a schema
const loginFormSchema = z.object({
	username: z
		.string()
		.min(4)
		.max(10)
		.refine((value) => value !== 'aa', {
			message: 'Username cannot be "aa"',
		}),
	password: z.string().min(4).max(10),
});

const Login = () => {
	const [formData, setFormData] = useState<{ [key: string]: string }>(formInitialValues);
	const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>(errorInitialValues);
	const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>(
		touchedFieldsInitialValues,
	);

	//------------------------------------
	useEffect(() => {
		const errors = validate();
		setFormErrors(errors);
	}, [formData.username, formData.password]);

	//======ok
	const handleChange = (name: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		setTouchedFields((prevData) => ({
			...prevData,
			[name]: true,
		}));
	};

	// This function will send our form data to
	// store function of PostContoller
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		console.log(formData);
		console.log(formData.entries());
		const data = Object.fromEntries(formData.entries());
		console.log(data);

		//validate();

		setTouchedFields({ username: true, password: true });

		const errors = validate();
		setFormErrors(errors);
		console.log(errors);
		const isValidForm = Object.values(errors).every(
			(value) => Array.isArray(value) && value.length === 0,
		);

		if (isValidForm === true) {
			alert('can submit');
			resetForm();

			const response = await new Promise<string>((resolve, reject) => {
				setTimeout(() => resolve('sss'), 2000);
			});
		} else {
			alert('no submit');
		}

		// if erors have  - not submit
		// if erors not have  - submit
	};

	const validate = () => {
		const result = loginFormSchema.safeParse(formData);
		const errObj: { [key: string]: string[] } = {
			username: [],
			password: [],
		};
		if (!result.success) {
			result.error.errors.map((err) => {
				let fieldname = err.path[0];
				errObj[fieldname].push(err.message);
			});
		} else {
			return errObj;
		}

		return errObj;
	};

	const resetForm = () => {
		setFormData(formInitialValues);
		setFormErrors(errorInitialValues);
		setTouchedFields(touchedFieldsInitialValues);
	};

	return (
		<div className='forum-section-container'>
			<div className='forum-title'>
				<Heading1>Login</Heading1>
				{canSubmit && '- CAN'}
				<>state - {JSON.stringify(formData)}</>
			</div>

			<div className='question-form row'>
				<form className='login-form col-md-9' onSubmit={handleSubmit}>
					<InutText
						nameAttr='username'
						title='Username'
						value={formData.username}
						onChange={(value: string) => handleChange('username', value)}
						errors={formErrors.username}
						isTouched={touchedFields.username}
						autoFocus={true}
						//key={formData.username}
					/>
					<InutPassword
						nameAttr='password'
						title='Password'
						value={formData.password}
						onChange={(value: string) => handleChange('password', value)}
						errors={formErrors.password}
						isTouched={touchedFields.password}
					/>
					<div className='form-group'>
						<SubmitBtn />
						<ResetBtn onClick={resetForm} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
