//import React, { useState } from 'react';
import classes from '@components/Form/Form.module.css';

type InutEmailProps = {
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

export const InutEmail: React.FC<
	InutEmailProps & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>
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
	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value;
		onChange(event);
		console.log(email);
	};

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-md-3'>
				<label htmlFor='text'>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>
			<div className='col-12 col-md-9'>
				<input
					name={name}
					type='email'
					className=''
					value={value}
					onChange={(e) => inputChangeHandler(e)}
					autoFocus={autoFocus}
					{...rest}
				/>
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
