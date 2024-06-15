import React, { useEffect, useState } from 'react';
import classes from '@components/Form/Form.module.css';

type CheckboxProps = {
	name: string;
	description: string;
	title?: string;
	selected?: boolean;
	value: string;
	errors: string[];
	onChange: (value: boolean) => void;
	isTouched: boolean;
	required?: boolean;
	disabled?: boolean;
};

export const CheckBox: React.FC<
	CheckboxProps & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>
> = ({
	name,
	description,
	title = '',
	selected = false,
	errors,
	value,
	onChange,
	isTouched,
	required = false,
	disabled = false,
	...rest
}) => {
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const optVal = event.currentTarget.value;
		const checked = event.currentTarget.checked;
		//console.log(optVal, checked);
		onChange(checked);
	};

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>{title && <label htmlFor='text'>{title}</label>}</div>

			<div className='col-12 offset-md-3 col-md-9 '>
				<div className={`${classes['custom-checkbox-wrap']} pl-0`}>
					<div className={classes['form-group']}>
						<input
							type='checkbox'
							id={`${name}_${value}`}
							name={name}
							checked={selected}
							onChange={(e) => handleCheckboxChange(e)}
							value={value}
							{...rest}
						/>
						<label
							className={`mr-3 ${disabled ? classes['disabled'] : ''}`}
							htmlFor={`${name}_${value}`}
						></label>

						<span
							className={`${classes['normal-text-label']} ${disabled ? classes['disabled'] : ''}`}
						>
							{description}
						</span>
					</div>
				</div>

				{/* [{JSON.stringify(isTouched, undefined, 2)}] <br /> */}
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
