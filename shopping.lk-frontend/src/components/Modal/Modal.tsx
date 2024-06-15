import React, { ReactElement, useEffect, useRef } from 'react';

import classes from '@components/Modal/Modal.module.css';
import { RiCloseLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from '@shared/hooks/useOnClickOutside';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactElement | string;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const modalRoot = document.getElementById('modal-root') as HTMLElement;
	const ref = useRef(null);

	useOnClickOutside(ref, () => {
		onClose();
	});

	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};

	const handleTabKey = (event: KeyboardEvent) => {
		if (isOpen && event.key === 'Tab') {
			event.preventDefault();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		document.addEventListener('keydown', handleTabKey);
		return () => {
			document.removeEventListener('keydown', handleTabKey);
		};
	}, [isOpen]);

	if (!isOpen) return null;
	return createPortal(
		<>
			<div
				className={`${classes['modal-wapper']} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none`}
			>
				<div className='relative w-auto my-6 mx-auto max-w-4xl'>
					{/*content*/}
					<div
						className={`${classes['modal-dialog']} border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
						ref={ref}
					>
						{/*header*/}
						<div
							className={`${classes['modal-header']} flex items-start justify-between px-5 py-3 border-b border-solid border-blueGray-200 rounded-t`}
						>
							<h3 className='text-3xl font-semibold text-white'>{title}</h3>
							<button
								className='p-1 ml-auto bg-transparent border-0 text-black __opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
								onClick={onClose}
							>
								<span className='bg-transparent text-white opacity-80 h-6 w-6 text-3xl block outline-none focus:outline-none leading-none font-bold'>
									<RiCloseLine
										size={24}
										style={{ fontWeight: 'bold' }}
										className={classes.closeIcon}
									/>
								</span>
							</button>
						</div>

						{/*body*/}
						<div className='modal-body relative px-5 py-4 flex-auto text-2xl text-justify'>
							{children}
						</div>

						{/*footer*/}
						<div
							className={`${classes['modal-footer']} flex items-center justify-end px-5 py-3 border-t border-solid border-blueGray-200 rounded-b`}
						>
							<button
								className={`${classes['close-btn']} text-white font-bold capitalize text-sm px-9 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-0 my-1 ease-linear transition-all duration-150`}
								type='button'
								onClick={onClose}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${classes['modal-fade']} opacity-25 fixed inset-0 bg-black`}></div>
		</>,
		modalRoot,
	);
};
