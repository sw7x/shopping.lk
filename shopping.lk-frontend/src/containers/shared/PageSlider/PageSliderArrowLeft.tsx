import type { CustomArrowProps } from 'react-slick';
import { BiChevronLeft } from 'react-icons/bi';

export const PageSliderArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
	<BiChevronLeft
		{...props}
		className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
		aria-hidden='true'
		aria-disabled={currentSlide === 0 ? true : false}
	/>
);
