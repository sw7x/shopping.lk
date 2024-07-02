import React from 'react';
import defaultPageHeaderImg from '@assets/images/page-headers/default-header.png';

import '@containers/shared/PageHeader/PageHeader.css';

type PageHeaderProps = {
	backgroundImage?: string;
	title?: string;
	subtitle?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
	backgroundImage = defaultPageHeaderImg,
	title = '',
	subtitle = '',
}) => {
	return (
		<>
			<div
				className='page-header page-header-bg'
				//style={{ backgroundImage: `url(${banner4Img})` }}
				//style={backgroundImage && { backgroundImage: `url(${backgroundImage})` }}
				style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
			>
				<div className='container'>
					{subtitle || title ? (
						<h1>
							{subtitle && <span>{subtitle}</span>}
							{title}
						</h1>
					) : null}
				</div>
			</div>
		</>
	);
};
