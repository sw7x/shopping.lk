import React from 'react';

type CustomTitleProps = {
	collapsed: boolean;
};

export const CustomTitle: React.FC<CustomTitleProps> = ({ collapsed }) => {
	return (
		<div style={{ color: '#16a34a', margin: '0 auto' }}>
			{collapsed ? (
				<div className='text-2xl'>
					<div className='mb-0.5'>Admin</div>
					<div className=''>Panel</div>
				</div>
			) : (
				<div className='text-4xl font-bold'>Admin Panel</div> // Full title when expanded
			)}
		</div>
	);
};
