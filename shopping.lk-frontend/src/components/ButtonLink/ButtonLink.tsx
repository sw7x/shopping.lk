import React from 'react';
import { Link } from 'react-router-dom';
import classes from '@components/ButtonLink/ButtonLink.module.css';

type ButtonLinkProps = {
	href?: string;
	text?: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href = '#', text = '' }) => {
	return (
		<Link to={href} className={classes.btnLink}>
			{text}
		</Link>
	);
};
