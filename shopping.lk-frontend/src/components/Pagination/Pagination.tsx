import React, { useState } from 'react';
import classes from '@components/Pagination/Pagination.module.css';
import { usePagination, DOTS } from '@shared/hooks/usePagination';

type PaginationProps = {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount: number;
	currentPage: number;
	pageSize: number;
};

export const Pagination: React.FC<PaginationProps> = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	}) as Array<typeof DOTS | number>;

	//if (paginationRange.length < 2) {
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
		/* return (
			<>
				<h1>currentPage - {currentPage}</h1>
				<h1>paginationRange.length - {paginationRange.length}</h1>
			</>
		); */
	}

	const onNext = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		if (currentPage < lastPage) {
			onPageChange(currentPage + 1);
		}
	};

	const onPrevious = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const pageChange = (event: React.MouseEvent<HTMLAnchorElement>, pgNumber: number) => {
		event.preventDefault();
		onPageChange(pgNumber);
	};

	let lastPage = paginationRange[paginationRange.length - 1] as number;
	return (
		<ul className={classes.pagination}>
			<li
				className={`${classes['page-item']} ${currentPage === 1 ? classes.disabled : ''}`}
				key={0}
			>
				<a
					className={`${classes['page-link']} ${classes['page-link-btn']}`}
					href=''
					onClick={(event) => onPrevious(event)}
				>
					<i className='icon-angle-left'></i>
				</a>
			</li>

			{paginationRange.map((pageNumber) => {
				if (pageNumber === DOTS) {
					return (
						<li className={`${classes['page-item']} ${classes['dots']}`} key={-1}>
							<span className={classes['page-link']}>...</span>
						</li>
					);
				}

				return (
					<li
						className={`${classes['page-item']} ${pageNumber === currentPage ? classes.active : ''}`}
						key={pageNumber}
					>
						<a
							href=''
							className={classes['page-link']}
							onClick={(event) => pageChange(event, pageNumber)}
						>
							{pageNumber}{' '}
							{pageNumber === currentPage && (
								<span className='sr-only'>(current)</span>
							)}
						</a>
					</li>
				);
			})}
			<li
				className={`${classes['page-item']} ${currentPage === lastPage ? classes.disabled : ''}`}
				key={lastPage + 1}
			>
				<a
					className={`${classes['page-link']} ${classes['page-link-btn']}`}
					href=''
					onClick={(event) => onNext(event)}
				>
					<i className='icon-angle-right'></i>
				</a>
			</li>
		</ul>
	);
};
