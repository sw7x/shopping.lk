import { PageSliderArrowRight } from './PageSliderArrowRight';
import { PageSliderArrowLeft } from './PageSliderArrowLeft';
import type { LazyLoadTypes } from 'react-slick';

export const slideSettings = {
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	//prevArrow: <BiChevronLeft />,
	//nextArrow: <BiChevronRight />,
	prevArrow: <PageSliderArrowLeft />,
	nextArrow: <PageSliderArrowRight />,
	lazyLoad: 'ondemand' as LazyLoadTypes,
	//fade: true,
};
