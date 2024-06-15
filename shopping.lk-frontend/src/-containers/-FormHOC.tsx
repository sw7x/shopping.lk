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

	const [canSubmit, setCanSubmit] = useState(false);

	useEffect(() => {
		const canFormSubmit = Object.keys(formErrors).every((key) => formErrors[key].length === 0);
		//setCanSubmit(canFormSubmit);
	}, [formErrors]);

	useEffect(() => {
		const errors = validate();
		setFormErrors(errors);
	}, [formData.username, formData.password]);

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
};

export default Login;
