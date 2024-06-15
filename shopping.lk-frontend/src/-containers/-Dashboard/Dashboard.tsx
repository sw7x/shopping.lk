import React from 'react';

//import Table from 'react-bootstrap/Table';

import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import Dropdown from 'react-bootstrap/Dropdown';
//import Card from 'react-bootstrap/Card';
//import Placeholder from 'react-bootstrap/Placeholder';
//import { Alert } from '@components/Alert';
import { LoadingSpinner } from '@root/components/LoadingSpinner';
import { Modal } from '@root/components/Modal';

const Dashboard = () => {
	//const handleClose = () => setShow(false);
	//const handleShow = () => setShow(true);

	const [openModal, setOpenModal] = useState(false);
	const toggeleModal = () => {
		//alert();
		setOpenModal(true);
	};

	return (
		<>
			<LoadingSpinner />

			<Modal isOpen={openModal} onClose={() => setOpenModal(false)} title='Modal Header'>
				<p className=''>
					I always 111 felt like I could do anything. That’s the main thing people are
					controlled by! Thoughts- their perception of themselves! They're slowed down by
					their perception of themselves. If you're taught you can’t do anything, you
					won’t do anything. I was taught I could do everything.
				</p>
			</Modal>

			<button
				className="'daisy-ui-btn"
				onClick={toggeleModal}
				/* onClick={() => {
					if (document) {
						(document.getElementById('my_modal_1') as HTMLFormElement).showModal();
					}
				}} */
			>
				open modal ggg
			</button>

			<div className='forum-section-container clearfix'>
				<div className='row tbl-container'>
					<div className='col-md-9'>
						<div className='forum-title'>
							<h3>Summary</h3>
						</div>

						<table
							id=''
							className='table table-striped table-bordered dt-responsive nowrap'
						>
							<thead>
								<tr>
									<th>Attribute</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Categories</td>
									<td>23</td>
								</tr>
								<tr>
									<td>Threads</td>
									<td>45</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className='row tbl-container'>
					<div className='col-md-9'>
						<div className='forum-title'>
							<h3>Threads</h3>
						</div>

						<table
							id=''
							className='table table-striped table-bordered dt-responsive nowrap'
						>
							<thead>
								<tr>
									<th>Category</th>
									<th>Thread count</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Categories one</td>
									<td>23</td>
								</tr>
								<tr>
									<td>Rice</td>
									<td>5</td>
								</tr>
								<tr>
									<td>Vegetable</td>
									<td>3</td>
								</tr>
								<tr>
									<td>Fruits</td>
									<td>31</td>
								</tr>
								<tr>
									<td>Categories two</td>
									<td>17</td>
								</tr>
								<tr>
									<td>Categories three</td>
									<td>54</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className='row tbl-container'>
					<div className='col-md-9'>
						<div className='forum-title'>
							<h3>Users</h3>
						</div>

						<table
							id=''
							className='table table-striped table-bordered dt-responsive nowrap'
						>
							<thead>
								<tr>
									<th>Attribute</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Farmers</td>
									<td>12</td>
								</tr>
								<tr>
									<td>Experts</td>
									<td>11</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>Total Users</td>
									<td>21</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
