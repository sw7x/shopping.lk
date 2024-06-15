import React, { useEffect, useState } from 'react';
import classes from '@components/Form/Form.module.css';

interface SelectOption {
	value: string;
	label: string;
}

interface DropDownListProps {
	name: string;
	title: string;
	description?: string;
	options: SelectOption[];
	//onChange: (value: string) => void;
	//onChange: React.ChangeEventHandler<HTMLSelectElement>;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>, setToucheProperty?: boolean) => void;
	reset: () => void;
	errors: string[];
	value: string;
	isTouched: boolean;
}
export const DropDownList: React.FC<
	DropDownListProps & Omit<React.HTMLProps<HTMLSelectElement>, 'value' | 'onChange'>
> = ({
	name,
	title,
	description = '',
	options = [],
	onChange,
	reset,
	errors,
	value = '',
	isTouched,
	...rest
}) => {
	const [selectedValue, setSelectedValue] = useState<string | null>(null);
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		setSelectedValue(selectedOption);
		onChange(event);
	};

	const handleReset = () => {
		setSelectedValue('');
		reset();
	};

	useEffect(() => {
		if (options.some((option) => option.value === value)) {
			setSelectedValue(value);
		} else {
			setSelectedValue('');
		}
	}, [value]);

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>
				<label className=''>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>

			<div className='col-12 col-md-9'>
				<div className={classes['select-help-wrapper']}>
					{options.length > 0 && selectedValue !== '' && (
						<div>
							<button className={classes['reset']} onClick={handleReset}>
								Reset
							</button>
						</div>
					)}
				</div>

				{options.length > 0 && (
					<label className={classes.select}>
						<select
							value={selectedValue || ''}
							onChange={handleSelectChange}
							name={name}
							{...rest}
						>
							<option value='' disabled>
								Select an option
							</option>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<svg>
							<use xlinkHref='#select-arrow-down'></use>
						</svg>
					</label>
				)}
				{/* <div className={classes['error-text-label']}>
					Pre-compute complex query results and store them for faster access compute
				</div> */}
				<div className={classes['select-error-wrap']}>
					{options.length > 0 &&
						isTouched &&
						errors &&
						errors.length > 0 &&
						errors.map((error, index) => (
							<div className={classes['error-text-label']} key={index}>
								{error}
							</div>
						))}

					{options.length <= 0 && (
						<div className={classes['error-text-label']}>
							No Data available to show as checkboxes
						</div>
					)}
				</div>
			</div>

			<svg className={classes.sprites}>
				<symbol id='select-arrow-down' viewBox='0 0 10 6'>
					<polyline points='1 1 5 5 9 1'></polyline>
				</symbol>
			</svg>
		</div>
	);
};
