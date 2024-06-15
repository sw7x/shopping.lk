import React, { useEffect, useState } from 'react';
import classes from '@components/Form/Form.module.css';

type TextBoxProps = {
	name: string;
	title: string;
	description?: string;
	//onChange: (value: string) => void;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
	errors: string[];
	isTouched: boolean;
	autoFocus?: boolean;
	value: string;
};

export const TextBox: React.FC<
	TextBoxProps & Omit<React.HTMLProps<HTMLTextAreaElement>, 'value' | 'onChange'>
> = ({
	name,
	title,
	description = '',
	onChange,
	errors,
	isTouched,
	autoFocus = false,
	value = '',
	...rest
}) => {
	//const [text, setText] = useState('');

	const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		//const txt = event.target.value;
		//setText(txt);
		onChange(event);
	};

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>
				<label className='control-label'>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>

			<div className='col-12 col-md-9'>
				<textarea
					name={name}
					rows={12}
					onChange={(e) => inputChangeHandler(e)}
					autoFocus={autoFocus}
					value={value}
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
