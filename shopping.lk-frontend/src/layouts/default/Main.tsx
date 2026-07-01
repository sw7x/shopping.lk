import { ReactNode } from 'react';

type MainProps = {
	children: ReactNode;
	className?: string;
};

export const Main: React.FC<MainProps> = ({ children, className = '' }) => {
	return (
		<main className={`main ${className !== '' ? ' ' + className : className}`}>{children}</main>
	);
};
