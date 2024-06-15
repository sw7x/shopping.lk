import React, { useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import userImg from '@assets/user-2.png';

interface QuestionProps {
	questionData: {
		id: number;
		title: string;
		text: string;
		user: {
			id: number;
			username: string;
			points: number;
			account_type: string;
		};
		categories: {
			id: number;
			category_name: string;
		}[];
	};
	reply: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Question: React.FC<QuestionProps> = ({ questionData, reply }) => {
	return (
		<>
			<div className='thread-main-post mb-4'>
				<div className='thread-main-post-header'>
					<div className='user-details flex-wrap w-100 align-items-center'>
						<div className='user-details-img'>
							<img src={userImg} className='d-block ui-w-40 rounded-circle' alt='' />
						</div>
						<div className='user-details-txt ml-3'>
							<Link to={'/profile/' + questionData.user.id}>
								{questionData.user.username}
								&nbsp;&nbsp;
								<span>({questionData.user.account_type})</span>
							</Link>
							<div className='text-muted small'>13 days ago</div>
							<div className='text-muted small'>
								{questionData.user.points} points
							</div>
						</div>
						<div className='text-muted small ml-3'>
							{questionData.categories.map((ctRecord, ctindex) => {
								return (
									<div className='forum-category' key={ctindex}>
										<Link to={'/category/' + ctRecord.id}>
											{ctRecord.category_name}
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className='thread-main-post-body'>
					<p>{questionData.text}</p>
				</div>
				<div className='thread-main-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3'>
					<div className='px-4 pt-3'>
						<Link
							className='d-inline-flex align-items-center align-middle'
							to='/edit-thread-question'
						>
							<i className='fas fa-edit'></i>
							&nbsp; <span className='align-middle'>Edit</span>
						</Link>

						<a href='' className='d-inline-flex align-items-center align-middle ml-4'>
							<i className='fa fa-trash text-danger' aria-hidden='true'></i>
							&nbsp; <span className='align-middle'>Delete</span>
						</a>
					</div>
					<div className='px-4 pt-3'>
						{' '}
						<button
							type='button'
							className='thread_reply_btn btn btn-primary'
							onClick={reply}
						>
							<i className='ion ion-md-create'></i>
							&nbsp; Reply
						</button>{' '}
					</div>
				</div>
			</div>
		</>
	);
};

export default Question;
