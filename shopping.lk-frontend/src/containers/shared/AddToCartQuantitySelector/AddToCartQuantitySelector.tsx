import React, { useState } from 'react';
import { PiMinus, PiPlus } from 'react-icons/pi';

import classes from '@containers/shared/AddToCartQuantitySelector/AddToCartQuantitySelector.module.css';

type AddToCartQuantitySelectorProps = {
	initialValue?: number;
	//onChange: (value: number) => void;
};

export const AddToCartQuantitySelector: React.FC<AddToCartQuantitySelectorProps> = ({
	initialValue = 1,
	//onChange,
}) => {
	const [count, setCount] = useState<number>(initialValue);

	const decreaseQuantity = () => {
		setCount((prev) => {
			if (prev - 1 <= 0) return 1;
			return prev - 1;
		});
	};

	const increaseQuantity = () => {
		setCount((prev) => prev + 1);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (Number.isNaN(Number(e.target.value))) return;
		if (Number(e.target.value) <= 0) return;
		setCount(Number(e.target.value));
	};

	return (
		<>
			<div
				className={`${classes['product-qty-selector']} flex mr-3`}
				style={{ height: '43px', margin: '0 1rem 0rem 0' }}
			>
				<button className='border _mt-4 pt-3 pb-3 pr-6 pl-6' onClick={decreaseQuantity}>
					<PiMinus />
				</button>

				{/* <span className='border _mt-4 pt-3 pb-3 pr-6 pl-6 count'>{count}</span> */}
				<input
					type='text'
					value={count}
					className='border _mt-4 pt-3 pb-3 pr-6 pl-6 count w-24'
					onChange={(e) => onChange(e)}
				/>
				<button className='border _mt-4 pt-3 pb-3 pr-6 pl-6' onClick={increaseQuantity}>
					<PiPlus />
				</button>
			</div>
		</>
	);
};
