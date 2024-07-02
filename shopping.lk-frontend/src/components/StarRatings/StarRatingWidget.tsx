import React, { useEffect, useState } from 'react';

import classes from '@components/StarRatings/StarRatings.module.css';

type StarRatingWidgetPropsType = {
	starCount?: number;
	title?: string;
	fontSize?: number;
	displayTextInfo?: boolean;
};

export const StarRatingWidget: React.FC<StarRatingWidgetPropsType> = ({
	starCount = 5,
	title = '',
	fontSize = 20,
	displayTextInfo = false,
}) => {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number | null>(null);
	const [animationTrigger, setAnimationTrigger] = useState(false);

	/* 
	Once an animation is applied and completed, it does not re-run 
	unless the class is removed and re-applied 
	*/
	useEffect(() => {
		setAnimationTrigger(true);
		const timer = setTimeout(() => setAnimationTrigger(false), 1000); // duration of the animation
		return () => clearTimeout(timer);
	}, [rating]);

	const handleRatingChange = (rating: number) => {
		setRating(rating);
		setHover(null);
	};

	return (
		<div className={classes['star-rating-widget']}>
			{title && (
				<h2 style={{ fontSize: `${fontSize / 2}px` }} className='px-0'>
					{title}
				</h2>
			)}
			{[...Array(starCount)].map((star, index) => {
				const currentRating = index + 1;
				const isActive = rating >= currentRating;

				return (
					<label key={index}>
						<input
							key={star}
							type='radio'
							name='rating'
							value={currentRating}
							onChange={() => handleRatingChange(currentRating)}
						/>
						<span
							title={currentRating == 1 ? '1 star' : currentRating + ' stars'}
							className={`${classes['rating-star']} ${
								isActive && animationTrigger ? classes.active : ''
							}`}
							style={{
								fontSize: `${fontSize}px`,
								color:
									currentRating <= (hover ?? rating ?? 0) ? '#ffc107' : '#ababab',
							}}
							onMouseEnter={() => setHover(currentRating)}
							onMouseLeave={() => setHover(null)}
						>
							&#9733;
						</span>
					</label>
				);
			})}
			{displayTextInfo && (
				<p style={{ fontSize: `${fontSize / 3}px` }} className='-mt-10 px-3'>
					Your rating is: {rating}
				</p>
			)}
		</div>
	);
};
