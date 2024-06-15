import { ChangeEvent, useEffect, useRef, useState } from 'react';
import classes from '@components/Form/Form.module.css';
import { FiXCircle } from 'react-icons/fi';

type ImageUploadProps = {
	name: string;
	title: string;
	description?: string;
	//onChange: (value: string) => void;
	//onChange: React.ChangeEventHandler<HTMLInputElement>;
	onChange: (value: File | null, setToucheProperty?: boolean) => void;
	errors: string[];
	isTouched: boolean;
	reset: () => void;
	value: null | File;
};
//accept = 'image/jpeg, image/png';

const ImageUpload: React.FC<
	ImageUploadProps & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>
	//ImageUploadProps & Omit<React.ComponentProps<'input'>, 'value' | 'onChange'>
> = ({ name, title, description = '', onChange, errors, isTouched, reset, value, ...rest }) => {
	//const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const inputFile = useRef<HTMLInputElement>(null);

	// Function to reset the input element
	const handleReset = () => {
		console.log(value);
		if (value !== null) {
			if (inputFile.current) {
				inputFile.current.value = '';
				//inputFile.current.type = 'text';
				//inputFile.current.type = 'file';
			}
			//setSelectedImage(null);
			reset();
		}
	};

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
		//console.log(event.currentTarget.files[0]);
		if (event.currentTarget.files && event.currentTarget.files.length > 0) {
			//setSelectedImage(event.currentTarget.files[0]);
			onChange(event.currentTarget.files[0]);
			console.log(event.currentTarget.files[0]);
		}
	};

	useEffect(() => {
		//onChange(null);
		/* if (value === '' || options.some((option) => option.value === value)) {
			setSelectedValue(value);
		} else {
			setSelectedValue('');
		} */
	}, []);

	useEffect(() => {
		if (value === null) {
			if (inputFile.current) {
				inputFile.current.value = '';
			}
			onChange(null, false);
		}
	}, [value]);

	return (
		<div className={`${classes['form-group']} row`}>
			<div className='col-12 col-md-3'>
				<label htmlFor='text'>{title}</label>
				{description && <div className={classes['small-text-label']}>{description}</div>}
			</div>
			<div className='col-12 col-md-9 bbcenter'>
				{/* [{JSON.stringify(value)}] */}

				<div className={`form-group ${classes.imageUpload} mb-0`}>
					<div className='input-group'>
						<input
							className={`form-control ${classes['input-file']}  ${
								value ? classes.haveFile : ''
							}`}
							type='file'
							name={name}
							ref={inputFile}
							onChange={handleImageChange}
							/* onChange={(event) => {
									//console.log(event.currentTarget.files[0]);
									setSelectedImage(event.currentTarget.files[0]);
								}} */
							{...rest}
						/>
						<span
							className={`${classes['input-group-btn']} ${value === null ? '' : classes.enabled}`}
						>
							<FiXCircle
								className={`${classes['reset-img']}`}
								onClick={handleReset}
							/>
						</span>
					</div>

					<div className={`${classes['imagebg']}`}>
						{value && (
							<img className='img-responsive' src={URL.createObjectURL(value)} />
						)}
					</div>
				</div>
				{isTouched &&
					errors &&
					errors.length > 0 &&
					errors.map((error, index) => (
						<div className={classes['error-text-label']} key={index}>
							{error}
						</div>
					))}
				{/* 
				<div className={`${classes['error-text-label']} mt-2`}>
					Include all the information someone would need to answer your question
				</div>
				*/}
			</div>
		</div>
	);
};

export default ImageUpload;
