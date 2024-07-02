import React from 'react';
//import product1Img from '@assets/images/products/product-1.jpg';
import useDynamicFontSize from '@shared/hooks/useDynamicFontSize';

export type GridItemPropsType = {
	data: {
		image: string;
		title?: string;
	};
	className?: string;
};

export const GridItem: React.FC<GridItemPropsType> = ({ data, className = '' }) => {
	const { ref: divRef, fontSize } = useDynamicFontSize(16); // Default font size 16px
	const { image, title = '' } = data;

	return (
		<>
			<div className={className}>
				<div className='featured-grid-item'>
					<figure>
						<a href='product.html'>
							{/* <img src={product1Img} /> */}
							<img src={image} />
						</a>
					</figure>
					<div
						className='grid-item-details'
						//ref={index === 0 ? divRef : null}
						ref={divRef}
						style={{
							fontSize: `${fontSize}px`,
							textTransform: 'uppercase',
							fontWeight: `${fontSize > 16 ? 'bold' : 'normal'}`,
						}}
					>
						{title && (
							<h2 className='grid-item-title'>
								<a href='product.html'>{title}</a>
							</h2>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
