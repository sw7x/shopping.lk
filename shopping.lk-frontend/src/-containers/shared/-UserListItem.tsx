import { Link } from 'react-router-dom';
import userImg from '@assets/user-2.png';
import { CategoryType } from '@shared/types/category.type';
import { UserType } from '@shared/types/user.type';
import React from 'react';

interface UserListItemProps {
	data: UserType;
}

export const UserListItem: React.FC<UserListItemProps> = ({ data }) => {
	return (
		<div className='user-profile-item col-md-6' key={data.id}>
			<div className='row'>
				<div className='col-md-2 px-1'>
					<Link to={'/profile/' + data.id} className='profile-link dropdown-toggle'>
						<img src={userImg} className='user-image' alt='User Image' />
					</Link>
					{/*
					<a href="#" className="profile-link dropdown-toggle">
						<img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
					</a>
					*/}
				</div>
				<div className='col-md-10'>
					<span className='username'>
						<Link to={'/profile/' + data.id}>
							{data.username} &nbsp;&nbsp;
							<span>({data.account_type})</span>
						</Link>
					</span>
					<div className='user-sub-title'>{data.fullname}</div>
					<div className='user-points-div'>
						<span className='points'>{data.points} Points</span>
					</div>
				</div>
			</div>
		</div>
	);
};
