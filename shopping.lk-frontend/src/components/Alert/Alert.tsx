import React from 'react';
import classes from '@components/Alert/Alert.module.css';

interface AlertProps {
	type?: 'success' | 'warning' | 'danger' | 'info';
	children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type = 'info', children }) => {
	const alertCls = `alert-${type}`;
	return <div className={`${classes.alert} ${classes[alertCls]}`}>{children}</div>;
};
