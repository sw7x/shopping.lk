import React, { useState, useEffect } from 'react';
import { usePageTop } from '@shared/hooks/usePageTop';
import classes from '@components/ScrollTopBtn/ScrollTopBtn.module.css';
type ScrollTopBtnProps = {};

export const ScrollTopBtn: React.FC<ScrollTopBtnProps> = () => {
	const [isPageTop, goToTop] = usePageTop();

	return (
		<>
			<a
				className={`${classes['modified-scroll-top']} ${isPageTop ? '' : 'fixed'}`}
				id='scroll-top'
				title='Top'
				role='button'
				onClick={goToTop}
			>
				<i className='icon-angle-up'></i>
			</a>
		</>
	);
};
