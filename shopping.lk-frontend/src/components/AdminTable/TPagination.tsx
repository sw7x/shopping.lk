import React from 'react';

type TPaginationProps = {
	range: { start: number; end: number };
	total: number;
};

export const TPagination: React.FC<TPaginationProps> = ({ range, total }) => {
	return (
		<nav className='toolbox toolbox-pagination mt-1'>
			<div className='toolbox-item _toolbox-show result-summary'>
				<div>
					Showing {range.start + 1} to {range.end} of {total} entries
				</div>
			</div>

			<ul className='pagination'>
				<li className='page-item disabled'>
					<a className='page-link page-link-btn' href='#'>
						<i className='icon-angle-left'></i>
					</a>
				</li>
				<li className='page-item active'>
					<a className='page-link' href='#'>
						1 <span className='sr-only'>(current)</span>
					</a>
				</li>
				<li className='page-item'>
					<a className='page-link' href='#'>
						2
					</a>
				</li>
				<li className='page-item'>
					<a className='page-link' href='#'>
						3
					</a>
				</li>
				<li className='page-item'>
					<a className='page-link' href='#'>
						4
					</a>
				</li>
				<li className='page-item'>
					<a className='page-link' href='#'>
						5
					</a>
				</li>
				<li className='page-item'>
					<span className='page-link'>...</span>
				</li>
				<li className='page-item'>
					<a className='page-link page-link-btn' href='#'>
						<i className='icon-angle-right'></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};
