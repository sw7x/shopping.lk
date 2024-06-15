import { SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import userImg from '@assets/user-2.png';
import { UserType } from '@shared/types/user.type';
import { UserListItem } from '@containers/shared/UserListItem';
import { ButtonLink } from '@components/ButtonLink';

type UsersListResponseType = {
	status: 'Success' | 'Error';
	data?: UserType[];
	message: string;
};

const AllUsers = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const { VITE_REST_API_URL } = import.meta.env;

	const fetchData = async () => {
		let response = await axios<UsersListResponseType>({
			method: 'get',
			url: VITE_REST_API_URL + '/users',
		}).then(
			(response) => {
				return response;
			},
			(error) => {
				console.log(error);
			},
		);

		let usersArr: UserType[];
		usersArr = response?.data?.data ? response.data.data : [];
		setUsers(usersArr);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const userProfiles = [];

	if (users.length > 0) {
		users.map((row) => {
			userProfiles.push(<UserListItem data={row} />);
		});
	} else {
		userProfiles.push([<h3>No results</h3>]);
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
						<small>{users.length} Users</small>
					</div>
					<h3>All Users</h3>
				</div>

				<div className='user-profile-items'>{userProfiles}</div>
			</div>

			{/*
                    <div className="col-sm-12">
                        <div className="pagination-div pull-right clearfix">
                            <ul className="pagination">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                            </ul>
                        </div>
                    </div>
                    */}
		</>
	);
};

export default AllUsers;
