import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import deniedImg from '@assets/images/denied.png';
import { Heading1, Heading2, Heading3 } from '@components/Headings';
import { Button } from '@components/Button';

const UnAuthorized = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	const goHome = () => navigate('/');

	return (
		<>
			<div className=''>
				<div className='forum-title'>
					<Heading1>Permission denied</Heading1>
				</div>

				<div className='col-md-6 clearfix my-5'>
					<img className='img-responsive wmx100' src={deniedImg} alt='Page not found' />
				</div>

				<div className='subheading'>
					<Heading3>you dont have permission to access this requested page.</Heading3>
				</div>

				{/* <button className='btn btn-danger' onClick={goHome}>
					Goto Home
				</button>
				<button className='btn btn-danger' onClick={goBack}>
					Go Back
				</button> */}
				<div className='mt-5 flex'>
					<div className='mr-5'>
						<Button onClick={goHome} type='success'>
							Goto Home
						</Button>
					</div>
					<div>
						<Button onClick={goBack} type='warning'>
							Go Back
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default UnAuthorized;
