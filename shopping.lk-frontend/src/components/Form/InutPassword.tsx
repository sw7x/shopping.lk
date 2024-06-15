import React, { useState } from 'react';
import classes from '@components/Form/Form.module.css';
type InutPasswordProps = {
	name: string;
	title: string;
	description?: string;
	//onChange: React.ChangeEventHandler<HTMLInputElement>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>, setToucheProperty?: boolean) => void;
	errors: string[];
	value: string;
	isTouched: boolean;
	autoFocus?: boolean;
};

export const InutPassword: React.FC<
	InutPasswordProps & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>
> = ({
	name,
	title,
	description = '',
	onChange,
	errors,
	value,
	isTouched,
	autoFocus = false,
	...rest
}) => {
	const [passwordType, setPasswordType] = useState('password');
	//const [password, setPassword] = useState(value);
	console.log('rendered-pw');

	const togglePassword = () => {
		setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
	};

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event);
	};

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>
				<label htmlFor='text'>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>

			<div className='col-12 col-md-9'>
				<input
					name={name}
					type={passwordType}
					className='form-control'
					value={value}
					onChange={(e) => inputChangeHandler(e)}
					autoFocus={autoFocus}
					{...rest}
				/>
				<button
					onClick={togglePassword}
					type='button'
					className={`eyeIcon fa fa-eye ${classes['pw-filed-toggle-btn']} ${passwordType == 'password' ? ' fa-eye' : ' fa-eye-slash'}`}
				></button>
				{/* <div className={classes['error-text-label']}>
					Pre-compute complex query results and store them for faster access compute
				</div> */}
				{isTouched &&
					errors &&
					errors.length > 0 &&
					errors.map((error, index) => (
						<div className={classes['error-text-label']} key={index}>
							{error}
						</div>
					))}
			</div>
		</div>
	);
};
