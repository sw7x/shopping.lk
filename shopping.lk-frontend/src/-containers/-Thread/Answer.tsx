import React, { useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import userImg from '@assets/user-2.png';

const Answer = ({ data, cls, usefullClick }) => {
	return (
		<>
			<div className='thread-post mb-4'>
				<div className='thread-post-header'>
					<div className='user-details flex-wrap w-100 align-items-center'>
						<div className='user-details-img'>
							<img src={userImg} className='d-block ui-w-40 rounded-circle' alt='' />
						</div>
						<div className='user-details-txt ml-3'>
							<Link to={'/profile/' + data.user.id}>
								{data.user.username}
								&nbsp;&nbsp;
								<span>({data.user.account_type})</span>
							</Link>
							<div className='text-muted small'>13 days ago</div>
							<div className='text-muted small'>{data.user.points} points</div>
						</div>

						<div className={'ml-3 check-mark-div ' + cls}>
							<i
								className='fa fa-check-circle'
								aria-hidden='true'
								onClick={usefullClick}
							></i>
						</div>
					</div>
				</div>
				<div className='thread-post-body'>
					<p>{data.post_text}</p>
				</div>
				<div className='thread-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3'>
					<div className='px-4 pt-3'>
						<Link
							className='d-inline-flex align-items-center align-middle'
							to={'/edit-thread-post/' + data.id}
						>
							<i className='fas fa-edit'></i>
							&nbsp; <span className='align-middle'>Edit</span>
						</Link>
						<Link
							className='d-inline-flex align-items-center align-middle ml-4'
							to={'/delete-thread-post/' + data.id}
						>
							<i className='fa fa-trash text-danger' aria-hidden='true'></i>
							&nbsp; <span className='align-middle'>Delete</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Answer;
