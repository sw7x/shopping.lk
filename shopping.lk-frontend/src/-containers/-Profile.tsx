import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import userImg from '@assets/user-2.png';
import { UserType } from '@shared/types/user.type';
import { ButtonLink } from '@components/ButtonLink';

type UsersDataResponseType = {
	status: 'Success' | 'Error';
	data?: UserType;
	message: string;
};

const Profile = () => {
	const [userDetails, setUserDetails] = useState<UserType | null>(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const { VITE_REST_API_URL } = import.meta.env;

	const { userId } = useParams();
	const user_Id = parseInt(userId as string);

	const fetchData = async (user_Id: number) => {
		setLoading(true);
		if (!isNaN(user_Id)) {
			let response = await axios<UsersDataResponseType>({
				method: 'get',
				url: VITE_REST_API_URL + '/users/' + user_Id,
			}).then(
				(response) => {
					return response;
				},
				(error) => {
					setError(error);
				},
			);

			let userDetails: UserType | null;
			userDetails = response?.data?.data ? response.data.data : null;
			setUserDetails(userDetails);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(user_Id);
	}, []);

	if (isLoading === true) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='row tbl-container'>
					<div className='col-md-12'>
						<div className='forum-title'>
							<h3>User123</h3>
						</div>

						<div className='btn-section-container clearfix'>
							<div className='pull-right'>
								<ButtonLink href='/edit-user-profile' text='Edit' />
								{/*<a href="" className="question-btn">Edit</a>*/}
							</div>
						</div>

						<div className='row tbl-container user_profile_details_container'>
							<div className='col-md-3 col-sm-3 mb-30 user_profile_image'>
								<img className='img-responsive' src={userImg} alt='' />
							</div>
							<div className='col-md-9 col-sm-9 user_profile_details'>
								{userDetails && (
									<table
										id=''
										className='table table-striped table-bordered dt-responsive nowrap'
									>
										<tbody>
											<tr>
												<td>Full name</td>
												<td>{userDetails?.fullname}</td>
											</tr>
											<tr>
												<td>Username</td>
												<td>{userDetails?.username}</td>
											</tr>
											<tr>
												<td>Gender</td>
												<td>{userDetails?.gender}</td>
											</tr>
											<tr>
												<td>Email</td>
												<td>{userDetails?.email}</td>
											</tr>
											<tr>
												<td>User account type</td>
												<td>{userDetails?.account_type}</td>
											</tr>
											<tr>
												<td>User badge</td>
												<td>{userDetails?.badge}</td>
											</tr>
										</tbody>
									</table>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
