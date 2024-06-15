import React, { useEffect, useState } from 'react';
import classes from '@components/Form/Form.module.css';
import { FaInfoCircle } from 'react-icons/fa';

interface CheckBoxOption {
	value: string;
	label: string;
	desc: string;
}

//todo - required must impliment  in zod schema
type CheckboxGroupProps = {
	name: string;
	title: string;
	description?: string;
	options: CheckBoxOption[];
	onChange: (value: Record<string, boolean>, setToucheProperty?: boolean) => void;
	//onChange: React.ChangeEventHandler<HTMLInputElement>;
	errors: string[];
	//value?: string;
	value: Record<string, boolean>;
	selectedValues?: Record<string, boolean>;
	isTouched: boolean;
	required?: boolean;
	disabled?: boolean;
};

export const CheckBoxGroup: React.FC<
	CheckboxGroupProps & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>
> = ({
	name,
	title,
	description = '',
	options = [],
	onChange,
	errors,
	value,
	selectedValues = {},
	isTouched,
	required = false,
	disabled = false,
	...rest
}) => {
	/* 
	const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(() => {
		const initialCheckedItems: { [key: string]: boolean } = {};
		options.forEach((option) => {
			initialCheckedItems[option.value] = false;
		});
		return initialCheckedItems;
	}); 
	*/

	// for form reset and componenet initial loading
	useEffect(() => {
		let initialCheckedItems: { [key: string]: boolean } = {};
		if (Object.keys(value).length === 0) {
			options.forEach((option) => {
				initialCheckedItems[option.value] = false;
			});

			if (Object.keys(selectedValues).length > 0) {
				//let updatedCheckedItems: Record<string, boolean> = {};
				Object.keys(selectedValues).forEach((key) => {
					if (key in initialCheckedItems) {
						initialCheckedItems[key] = selectedValues[key];
					}
				});
				console.log(initialCheckedItems);
				//setCheckedItems({ ...checkedItems, ...updatedCheckedItems });
			}
			onChange(initialCheckedItems, false);
		}
	}, [value]);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(value);
		const val = value;
		const optVal = event.currentTarget.value;
		const checked = event.currentTarget.checked;

		if (optVal in val) {
			const updatedChecBoxVal = { ...val, [optVal]: checked };
			console.log(updatedChecBoxVal);
			onChange(updatedChecBoxVal);
		}

		//const updatedCheckedItems = { ...checkedItems, [val]: !checkedItems[val] };
		//setCheckedItems(updatedCheckedItems);

		// Callback to parent component with checked items
		//onChange(Object.keys(updatedCheckedItems).filter((item) => updatedCheckedItems[item]));
	};

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>
				<label htmlFor='text'>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>
			<div className='col-12 col-md-9'>
				<div className={classes['custom-checkbox-wrap']}>
					{options.length > 0 &&
						options.map((option, index) => (
							<div className={classes['form-group']} key={option.value}>
								<input
									type='checkbox'
									id={`${name}_${option.value}_${index}`}
									name={name}
									checked={value[option.value] || false}
									onChange={(e) => handleCheckboxChange(e)}
									value={option.value}
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
								{option.desc && (
									<span className={classes.tooltip} data-tooltip={option.desc}>
										<FaInfoCircle className={classes['info-hover-icon']} />
									</span>
								)}
							</div>
						))}
				</div>

				{/* [{JSON.stringify(isTouched, undefined, 2)}] <br /> */}
				{/* <div className={classes['error-text-label']}>
					Pre-compute complex query results and store them for faster access compute
				</div> */}
				{options.length > 0 &&
					isTouched &&
					errors &&
					errors.length > 0 &&
					errors.map((error, index) => (
						<div className={classes['error-text-label']} key={index}>
							{error} ooo
						</div>
					))}
				{options.length <= 0 && (
					<div className={classes['error-text-label']}>
						No Data available to show as checkboxes
					</div>
				)}
			</div>
		</div>
	);
};
