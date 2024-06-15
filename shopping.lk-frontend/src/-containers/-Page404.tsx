import React, { MouseEvent } from 'react';
//import AWN from 'awesome-notifications';
//import AWN from 'awesome-notifications';
//import 'awesome-notifications/dist/style.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import pageNotFounImg from '@assets/images/404.png';

const { VITE_REST_API_URL } = import.meta.env;
console.log(VITE_REST_API_URL);

const Page404 = () => {
	const [show, setShow] = React.useState(false);
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	const toggleModal = () => {
		setShow(!show);
	};

	const notificationSuccess = (event: MouseEvent<HTMLElement>) => {
		//alert();
		//Action has been succeeded
		/* new AWN().success('Custom success message', {
			durations: { success: 1500 },
		}); */

		toast.success('Custom success message !', {
			//position: toast.POSITION.TOP_RIGHT,
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
		});
	};

	const notificationWarning = (event: MouseEvent<HTMLElement>) => {
		/* new AWN().warning('Custom warning message', {
			durations: { warning: 1500 },
		}); */
		toast.warning('Custom warning message !', {
			//position: toast.POSITION.TOP_RIGHT,
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
		});
	};

	const notificationError = (event: MouseEvent<HTMLElement>) => {
		//Action has been failed
		//new AWN().alert('Custom alert message', { durations: { alert: 1500 } });
		toast.error('Custom alert message !', {
			//position: toast.POSITION.TOP_RIGHT,
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
		});
	};

	return (
		<>
			<div className='col-md-3'>
				<img className='img-responsive wmx100' src={pageNotFounImg} alt='Page not found' />
			</div>

			<div className='col-md-9'>
				<div className='forum-title'>
					<h1>404 Page not found</h1>
				</div>
				<div className='subheading'>
					<h3>We could not find the page you were looking for.</h3>
				</div>
				<div className=''>
					<p>
						Try <a href='/search'>searching for similar questions</a>
					</p>
					<p>
						Goto <a href='/questions'>Home page</a>
					</p>
					<p>
						Browse <a href='/tags'>categories</a>
					</p>
					<button
						onClick={notificationSuccess}
						type='button'
						id='btnToggle'
						className='btn'
					>
						notificationSuccess
					</button>
					<br />
					<br />
					<button
						onClick={notificationWarning}
						type='button'
						id='btnToggle'
						className='btn'
					>
						notificationWarning
					</button>
					<br />
					<br />
					<button
						onClick={notificationError}
						type='button'
						id='btnToggle'
						className='btn'
					>
						notificationError
					</button>{' '}
					<br />
					<br />
				</div>
				<button className='btn btn-danger' onClick={goBack}>
					Go Back
				</button>
			</div>
		</>
	);
};

export default Page404;
