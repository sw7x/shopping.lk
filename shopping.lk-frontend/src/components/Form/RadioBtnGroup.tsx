import React, { useEffect, useState } from 'react';
import classes from '@components/Form/Form.module.css';
import { Alert } from '../Alert';

interface RadioOption {
	value: string;
	label: string;
}

interface RadioBtnGroupProps {
	name: string;
	title: string;
	description?: string;
	options: RadioOption[];
	//onChange: (value: string) => void;
	//onChange: React.ChangeEventHandler<HTMLInputElement>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>, setToucheProperty?: boolean) => void;
	errors: string[];
	value: string;
	isTouched: boolean;
	disabled?: boolean;
	required?: boolean;
}
export const RadioBtnGroup: React.FC<
	RadioBtnGroupProps & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>
> = ({
	name,
	title,
	description = '',
	options = [],
	onChange,
	errors,
	value,
	isTouched,
	required = false,
	disabled = false,
	...rest
}) => {
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.currentTarget.value);
		console.log(event.currentTarget);
		//onChange(value);
		onChange(event);
	};

	useEffect(() => {
		if (options.some((option) => option.value === value)) {
			setSelectedValue(value);
		} else {
			setSelectedValue('');
		}
	}, [value]);

	console.log(rest);

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>
				<label htmlFor='text'>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>
			<div className='col-12 col-md-9'>
				<div className={classes['custom-radio-wrap']}>
					{options.length > 0 &&
						options.map((option, index) => (
							<div className={classes['form-group']} key={option.value}>
								<input
									type='radio'
									id={`${name}_${option.value}_${index}`}
									name={name}
									checked={selectedValue === option.value}
									onChange={(e) => handleRadioChange(e)}
									value={option.value}
									{...(index === 0 && required === true
										? { required: true }
										: {})}
									{...(disabled && { disabled: true })}
									{...rest}
								/>
								<label
									className={disabled ? classes['disabled'] : ''}
									htmlFor={`${name}_${option.value}_${index}`}
								></label>
								<span
									className={`${classes['label-text']} ${disabled ? classes['disabled'] : ''}`}
								>
									{option.label}
								</span>
							</div>
						))}

					{/* <div className={classes['error-text-label']}>
						Pre-compute complex query results and store them for faster access compute
					</div> */}

					{options.length > 0 &&
						isTouched &&
						errors &&
						errors.length > 0 &&
						errors.map((error, index) => (
							<div className={`${classes['error-text-label']} mt-1`} key={index}>
								{error}
							</div>
						))}

					{options.length <= 0 && (
						<div className={`${classes['error-text-label']} mt-1`}>
							No Data available to show as Radio buttons
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
