import React from 'react';

import classes from '@components/StarRatings/StarRatings.module.css';

type ViewStarRatingsProps = {
	rating: number;
	totalRating?: number;
	fontSize?: number;
	displayTextInfo?: boolean;
};

export const ViewStarRatings: React.FC<ViewStarRatingsProps> = ({
	rating,
	totalRating = 100,
	fontSize = 20,
	displayTextInfo = false,
}) => {
	if (rating < 0 || rating > 100) {
		throw new Error('Rating must be between 0 and 100');
	}

	const starCount = 5;
	const ratingForOneStar = totalRating / starCount;
	const filledStarsCount = Math.floor(rating / ratingForOneStar);
	const remainingRating = rating - ratingForOneStar * filledStarsCount;

	let cls: string;
	let ratingFractionalStr = '';
	if (remainingRating >= 0 && remainingRating < (1 * ratingForOneStar) / 4) {
		cls = '';
		ratingFractionalStr = '';
	} else if (
		remainingRating >= (1 * ratingForOneStar) / 4 &&
		remainingRating < (2 * ratingForOneStar) / 4
	) {
		cls = 'quater';
		ratingFractionalStr = '.25';
	} else if (
		remainingRating >= (2 * ratingForOneStar) / 4 &&
		remainingRating < (3 * ratingForOneStar) / 4
	) {
		cls = 'half';
		ratingFractionalStr = '.5';
	} else if (
		remainingRating >= (3 * ratingForOneStar) / 4 &&
		remainingRating < (4 * ratingForOneStar) / 4
	) {
		cls = 'three-quater';
		ratingFractionalStr = '.75';
	}

	return (
		<>
			<span className={classes['star-ratings']} style={{ fontSize: `${fontSize}px` }}>
				{/*<span>rating : {rating}</span>  */}
				{[...Array(5).keys()].map((index) => {
					return (
						<span
							className={`${classes.star} 
								${filledStarsCount >= index + 1 ? classes.filled : ''} 
								${filledStarsCount + 1 == index + 1 ? classes[cls] : ''}`}
							key={index}
						>
							★
						</span>
					);
				})}
			</span>
			{displayTextInfo && (
				<span className='ml-2 mb-5' style={{ fontSize: '14px' }}>
					({filledStarsCount + ratingFractionalStr} out of 5)
				</span>
			)}
		</>
	);
};
