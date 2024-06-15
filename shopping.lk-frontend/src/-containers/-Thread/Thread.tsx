import React, { useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Question from '@root/containers/Thread/Question';
import Answer from '@root/containers/Thread/Answer';
import ReplyForm from '@root/containers/Thread/ReplyForm';
import { ButtonLink } from '@components/ButtonLink';

const Thread = () => {
	const initialThreadPosts = [
		{
			id: 70,
			post_text:
				"Duchess's knee, while plates and dishes crashed around it--once more the pig-baby was sneezing on the end of trials, \"There was some attempts at applause, which was sitting on the floor, and a large one, but it all is! I'll try and repeat \"'TIS THE VOICE OF THE SLUGGARD,\"' said the Caterpillar. 'I'm afraid I've offended it again!' For the Mouse only growled in reply. 'That's right!' shouted the Queen, who was passing at the top.",
			is_useful: 1,
			user: {
				id: 2,
				username: 'saman',
				points: 0,
				account_type: 'admin',
			},
		},
		{
			id: 74,
			post_text:
				"22 And oh, I wish I hadn't mentioned Dinah!' she said this, she came suddenly upon an open.",
			is_useful: 0,
			user: {
				id: 3,
				username: 'batman',
				points: 102,
				account_type: 'farmer',
			},
		},
	];

	const initialThreadQuestion = {
		id: 1,
		title: 'water One More Doubt. I Was Trying To Put',
		text: 'Thank you for replying, it is working now. I have one more doubt. I was trying to put a checkmark when we press the elements of the list is pressed',
		user: {
			id: 3,
			username: 'batman',
			points: 102,
			account_type: 'farmer',
		},
		categories: [
			{
				id: 1,
				category_name: 'Rice',
			},
			{
				id: 6,
				category_name: 'Animals',
			},
			{
				id: 5,
				category_name: 'Machines',
			},
			{
				id: 2,
				category_name: 'Fruits',
			},
			{
				id: 3,
				category_name: 'Water',
			},
			{
				id: 4,
				category_name: 'Vegetables',
			},
		],
	};

	const [threadPosts, setThreadPosts] = React.useState(initialThreadPosts);
	const [threadQuestion, setThreadQuestion] = React.useState(initialThreadQuestion);

	const answerFormRef = useRef<HTMLTextAreaElement | null>(null);

	const clickReplyBtn = (event: MouseEvent<HTMLButtonElement>) => {
		if (answerFormRef.current) {
			answerFormRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			});
			answerFormRef.current.focus({ preventScroll: true });
		}
	};

	const togglePostUsefullness = (event: MouseEvent<HTMLElement>) => {
		console.log(event.currentTarget);
		console.log(event.currentTarget.parentNode);

		let parentDiv = event.currentTarget.parentNode;

		if (parentDiv instanceof Element && parentDiv.classList)
			parentDiv.classList.toggle('active');

		//console.log(event.target.parentNode.querySelector('input[name="password"]'));
		//let parentDiv =
		alert('togglePostUsefullness');
	};
	return (
		<>
			<div className='btn-section-container clearfix'>
				<div className='pull-right'>
					<ButtonLink href='/ask-question' text='Ask Question' />
				</div>
			</div>

			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right'>
						<div className='forum-desc'>
							<div>{threadPosts.length} Answers</div>
							{/*<small>134 answers</small>*/}
						</div>
					</div>

					<h3>{threadQuestion.title}</h3>
				</div>

				<div className='forum-items'>
					<div className='forum-item'>
						<div className='row'>
							<div className='thread-container container-fluid'>
								<div className='row'>
									<div className='col-md-12'>
										<Question
											questionData={threadQuestion}
											reply={clickReplyBtn}
										/>
									</div>
								</div>

								{threadPosts.map((row, index) => {
									let checkMarkCls = row.is_useful == 1 ? 'active' : '';
									return (
										<div className='row' key={row.id}>
											<div className='col-md-11 pull-right'>
												<Answer
													data={row}
													cls={checkMarkCls}
													usefullClick={togglePostUsefullness}
												/>
											</div>
										</div>
									);
								})}

								<div className='row'>
									<div className='col-md-12'>
										<ReplyForm ref={answerFormRef} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Thread;
