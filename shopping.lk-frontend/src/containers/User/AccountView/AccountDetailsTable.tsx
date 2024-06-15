import React from 'react';

const AccountDetailsTable = () => {
	return (
		<>
			<h2 className='step-title mb-2'>Account Information</h2>
			<table className='ratings-table mb-2'>
				<tbody>
					<tr>
						<td>Full Name</td>
						<td>Mary Elizabeth Smith</td>
					</tr>
					<tr>
						<td>Email </td>
						<td>sample.email@gmail.com</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>+91234567890</td>
					</tr>
					<tr>
						<td>Username</td>
						<td>mary.elizabeth</td>
					</tr>
					<tr>
						<td>Gender</td>
						<td>Male</td>
					</tr>
					<tr>
						<td>Date of birth</td>
						<td>1992/02/03</td>
					</tr>
					<tr>
						<td>Street address</td>
						<td>123 Main Street, Anytown, USA 12345</td>
					</tr>
					<tr>
						<td>Zip code</td>
						<td>20655</td>
					</tr>
					<tr>
						<td>City</td>
						<td>Newyork</td>
					</tr>
					<tr>
						<td>Country</td>
						<td>USA</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default AccountDetailsTable;
