import React, { useMemo, useState } from 'react';
import data from '@root/data/mock-data.json';
import { Pagination } from '@root/components/Pagination';

const CategoryManage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const PageSize = 10;

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	const tblRows = [];

	for (let i = 0; i <= 30; i++) {
		tblRows.push(
			<tr key={i}>
				<td>{'Category-' + i}</td>
				<td align='center'>
					<a
						href='#'
						data-toggle='modal'
						data-target='#editModal'
						className='btn btn-primary btn-xs proj-update'
						data-updateid=''
					>
						<span className='glyphicon glyphicon-pencil'></span>
					</a>
				</td>
				<td align='center'>
					<a
						href='#'
						data-toggle='modal'
						data-target='#deleteModal'
						className='btn btn btn-danger btn-xs proj-delete'
						data-title='Delete'
					>
						<span className='glyphicon glyphicon-remove-sign'></span>
					</a>
				</td>
			</tr>,
		);
	}

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>FIRST NAME</th>
						<th>LAST NAME</th>
						<th>EMAIL</th>
						<th>PHONE</th>
					</tr>
				</thead>
				<tbody>
					{currentTableData.map((item) => {
						return (
							<tr>
								<td>{item.id}</td>
								<td>{item.first_name}</td>
								<td>{item.last_name}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				totalCount={data.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
				siblingCount={2}
			/>
			<hr></hr>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<h3>Manage Category</h3>
				</div>

				<div className='tbl-container'>
					<table
						id='categoryList'
						className='hover table table-striped table-bordered dt-responsive nowrap'
					>
						<thead>
							<tr>
								<th>Category name</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>{tblRows}</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default CategoryManage;
