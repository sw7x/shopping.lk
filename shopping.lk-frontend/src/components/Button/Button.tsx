import React from 'react';
import classes from '@components/Button/Button.module.css';

type ButtonProps = {
	children: string;
	type?: 'success' | 'warning' | 'danger' | 'info' | 'default' | 'primary';
	onClick?: () => void;
	className?: string;
};

export const Button: React.FC<ButtonProps> = ({
	type = 'default',
	children,
	onClick = () => {},
	className = '',
}) => {
	const typeCls = `btn-${type}`;
	return (
		<button
			className={`${classes.btn} ${classes[typeCls]} __btn ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
