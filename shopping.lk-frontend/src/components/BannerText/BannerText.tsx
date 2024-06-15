import { Link, useNavigate } from 'react-router-dom';
import deniedImg from '@assets/images/denied.png';
import classes from '@components/BannerText/BannerText.css';
import { VscClose } from 'react-icons/vsc';
import { useState } from 'react';
import bannerImg from '@assets/images/banner.png';

type BannerTextProps = {
	title?: string;
	image?: string;
	children: React.ReactNode;
};

export const BannerText: React.FC<BannerTextProps> = ({
	title = '',
	image = bannerImg,
	children,
}) => {
	const [show, setShow] = useState(true);

	const closeBanner = () => {
		setShow(false);
	};

	return (
		show && (
			<div className=' container mb-12 clearfix border-2 border-green-700 rounded-md py-2.5 relative'>
				<div className='row'>
					<div className='col-md-2 py-2 border-orange-700'>
						<div className='border px-1'>
							<img
								className='img-responsive wmx100'
								src={image}
								alt='Page not found'
							/>
						</div>
					</div>

					<div className='col-md-10'>
						{title && (
							<div className='mt-1 mb-1'>
								<h3 className='text-3xl font-semibold'>{title}</h3>
							</div>
						)}
						<>{children}</>
					</div>
					<div
						className='absolute top-1 right-1 font-bold cursor-pointer text-green-700'
						onClick={closeBanner}
					>
						<VscClose size={22} style={{ strokeWidth: '1' }} />
					</div>
				</div>
			</div>
		)
	);
};

/* 
//how to call

<BannerText title='Protect your personal information' image={halfBgImg}>
	<div className='subheading mb-2'>
		<p>
			Limit the personal information that you make available to others. For
			example, your social media profile should not contain your full name, date
			of birth, or reflect your relationship with others. Protect yourself further
			by not using location check-ins and limiting location-specific information.
		</p>
	</div>
	<div className='mb-1 text-green-700'>
		<Link to='/before-post' className='font-medium'>
			Get early access
		</Link>
	</div>
</BannerText>

*/
