import React from 'react';
import { Link } from 'react-router-dom';
import { ThreadListItem } from '@containers/shared/ThreadListItem';
import { UserType } from '@shared/types';
import { ButtonLink } from '@components/ButtonLink';

const threadData = {
	id: 1,
	title: 'water One More Doubt. I Was Trying To Put',
	text: 'Thank you for replying, it is working now. I have one more doubt. I was trying to put a checkmark when we press the elements of the list is pressed',
	categories: [
		{
			id: 1,
			category_name: 'Rice',
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
	postCount: 0,
	user: {
		id: 3,
		fullname: 'bruce wayne',
		email: 'batman@gg.com',
		username: 'batman',
		gender: 'female' as 'male|female',
		badge: 'bg',
		points: 102,
		account_type: 'farmer' as 'super_admin|admin|expert|farmer',
	},
};

const ThreadSearch = () => {
	const forumItems = [];

	for (let i = 0; i <= 15; i++) {
		let cls = i % 2 == 0 ? 'active' : '';

		forumItems.push(<ThreadListItem data={threadData} cls={cls} />);
	}

	return (
		<>
			<div className='btn-section-container clearfix'>
				<div className='pull-right'>
					<ButtonLink href='/ask-question' text='Ask Question' />
				</div>
			</div>

			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<div className='pull-right forum-desc'>
						<small>1,309,625 results</small>
					</div>
					<h3>Search results</h3>
				</div>

				<div className='forum-items'>{forumItems}</div>
			</div>

			<div className='col-sm-12'>
				<div className='pagination-div pull-right clearfix'>
					<ul className='pagination'>
						<li>
							<a href='#'>1</a>
						</li>
						<li>
							<a href='#'>2</a>
						</li>
						<li>
							<a href='#'>3</a>
						</li>
						<li>
							<a href='#'>4</a>
						</li>
						<li>
							<a href='#'>5</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ThreadSearch;
