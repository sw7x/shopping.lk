import React from 'react';

const UserManage = () => {
	const tblRows = [];

	for (let i = 0; i <= 100; i++) {
		tblRows.push(
			<tr key={i}>
				<td>{'u-' + i}</td>
				<td>{'User-' + i}</td>
				<td>{'User-' + i}</td>
				<td align='center'>
					{/* <a
						href='#'
						data-toggle='modal'
						data-target='#editModal'
						className='btn btn-primary btn-xs proj-update'
						data-updateid=''
					>
						<span className='glyphicon glyphicon-pencil'></span>
					</a> */}
					<div className='btn-group'>
						<a href='' className='btn btn-default btn-sm'>
							View
						</a>

						<a href='' className='btn btn-primary btn-sm'>
							Edit
						</a>

						<a href='' className='btn-danger btn btn-sm'>
							Delete
						</a>
					</div>
				</td>

				{/* <td align='center'>
					<a
						href='#'
						data-toggle='modal'
						data-target='#deleteModal'
						className='btn btn btn-danger btn-xs proj-delete'
						data-title='Delete'
					>
						<span className='glyphicon glyphicon-remove-sign'></span>
					</a>
				</td> */}
			</tr>,
		);
	}
	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<h3>Manage Users</h3>
				</div>

				<div className='tbl-container'>
					<table
						id='categoryList'
						className='hover table table-striped table-bordered dt-responsive nowrap'
					>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Username</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>{tblRows}</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default UserManage;
