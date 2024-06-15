import type { CustomArrowProps } from 'react-slick';
import { BiChevronRight } from 'react-icons/bi';

export const PageSliderArrowRight = ({
	currentSlide,
	slideCount = 0,
	...props
}: CustomArrowProps) => (
	<BiChevronRight
		{...props}
		className={
			'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
		}
		aria-hidden='true'
		aria-disabled={currentSlide === slideCount - 1 ? true : false}
	/>
);
