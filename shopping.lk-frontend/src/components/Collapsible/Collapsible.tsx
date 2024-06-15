import React, { useEffect, useRef, useState } from 'react';
import classes from '@components/Collapsible/Collapsible.module.css';
import { useWindowSize } from '@root/shared/hooks/UseWindowSize';
interface IProps {
	open?: boolean;
	header: string | React.ReactNode;
	/* headerClassName?: string;
	titleClassName?: string;
	iconButtonClassName?: string;
	contentClassName?: string;
	contentContainerClassName?: string;
	collapsibleClassName?: string; */
	children?: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({
	open,
	/* collapsibleClassName = 'collapsible-card-edonec',
	headerClassName = 'collapsible-header-edonec',
	titleClassName = 'title-text-edonec',
	iconButtonClassName = 'collapsible-icon-button-edonec',
	contentClassName = 'collapsible-content-edonec',
	contentContainerClassName = 'collapsible-content-padding-edonec', */
	children,
	header,
}) => {
	const [isOpen, setIsOpen] = useState(open);
	const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);
	const { width } = useWindowSize();

	const ref = useRef<HTMLDivElement>(null);
	const handleFilterOpening = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		if (!height || !isOpen || !ref.current) return undefined;
		// @ts-ignore
		const resizeObserver = new ResizeObserver((el) => {
			setHeight(el[0].contentRect.height);
		});
		resizeObserver.observe(ref.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, [height, isOpen]);

	useEffect(() => {
		if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
		else setHeight(0);
	}, [isOpen]);

	/* to main open/close state of the collpasible componenet when screen resize */
	useEffect(() => {
		if (width > 991) {
			if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
			else setHeight(0);
		}
	}, [width]);

	return (
		<>
			<div className={classes['collapsible-card-edonec']}>
				<div
					onClick={handleFilterOpening}
					className={classes['collapsible-header-wrapper-edonec']}
				>
					<div className={classes['collapsible-header-edonec']}>
						<div className={classes['title-text-edonec']}>{header}</div>
						<button
							type='button'
							className={classes['collapsible-icon-button-edonec']}
							//onClick={handleFilterOpening}
						>
							<i
								className={`fa fa-chevron-down ${classes['rotate-center-edonec']} ${isOpen ? classes.down : classes.up}`}
							/>
						</button>
					</div>
				</div>
				<div className={classes['collapsible-content-edonec']} style={{ height }}>
					<div ref={ref}>
						<div className={classes['collapsible-content-padding-edonec']}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Collapsible;
