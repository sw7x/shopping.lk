import React, { useState } from 'react';
import { data } from '@components/AdminTable/AdminTable-Data';
export const AdminTable = () => {
	const [tableTitle, setTableTitle] = useState('Product Table');
	//const [rowCountArr, setRowCountArr] = useState([5, 10, 20, 25, 50, 100, 250, 500]);
	const [rowCountSelected, setRowCountSelected] = useState(5);
	const [pageCount, setPageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	//const [rowListStart, setRowListStart] = useState(0);
	//const [rowListEnd, setRowListEnd] = useState(5); // initial value = rowListStart + rowCountSelected
	const [paginationSelectVal, setPaginationSelectVal] = useState(1);
	const [searchBoxVal, setSearchBoxVal] = useState('');

	const [rowList, setRowList] = useState(data);

	/* this.state = {
		tableTitle: 'Product Table',
		rowCountArr: [5, 10, 20, 25, 50, 100, 250, 500],
		//rowCountArr : [],
		rowCountSelected: 5,
		pageCount: 0,
		currentPage: 1,

		rowListStart: 0,
		rowListEnd: 5, // initial value = rowListStart + rowCountSelected

		paginationSelectVal: 1,

		searchBoxVal: '',
		rowList: [],

		pnameSort: '', //asc ,desc
		ppriceSort: '',
	}; */
	//const [pnameSort, setPnameSort] = useState(''); // asc, desc
	//const [ppriceSort, setPpriceSort] = useState('');

	return (
		<>
			<div className='text-center mb-2 text-4xl font-semibold'>
				<h2>Each piece of state is initialized </h2>
			</div>
			<div className='btn-wrapper mb-2'>
				<div className='row'>
					<div className='col-12'>
						<a href='#' className='btn btn-primary btn-md'>
							Add New
						</a>
					</div>
				</div>
			</div>

			<nav className='toolbox _toolbox-pagination data-filter-toolbox'>
				<div className='toolbox-item _toolbox-show result-count'>
					<label>Show </label>
					<div className='select-custom mr-1'>
						<select name='count' className='form-control'>
							<option value='10'>10</option>
							<option value='20'>20</option>
							<option value='50'>50</option>
							<option value='100'>100</option>
						</select>
					</div>
					<label className='ml-3 mr-0'> entries</label>
				</div>

				<div className='col-12 col-sm-12 col-md-5 search'>
					<div className='label'>Search : </div>
					<form className='search-form' action='' method='post'>
						<input
							className='form-control'
							type='search'
							name='search_value'
							placeholder='Search here...'
							value=''
						/>
					</form>
				</div>
			</nav>

			<table className='admin-table'>
				<thead>
					<tr className=''>
						<th className='cell sort '>xFull Name</th>
						<th className='cell sort sort-asc'>Age</th>
						<th className='cell sort sort-desc'>Job Title</th>
						<th className='cell'>Location</th>
					</tr>
				</thead>

				<tbody>
					<tr className=''>
						<td data-title='Full Name'>Vincent Williamson</td>
						<td data-title='Age'>31</td>
						<td data-title='Job Title'>iOS Developer</td>
						<td data-title='Location'>Washington</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Joseph Smith</td>
						<td data-title='Age'>27</td>
						<td data-title='Job Title'>Project Manager</td>
						<td data-title='Location'>
							<div className='btn-group' role='group' aria-label='Basic example'>
								<button type='button' className='btn btn-sm btn-primary'>
									View
								</button>
								<button type='button' className='btn btn-sm btn-success'>
									Edit
								</button>
								<button type='button' className='btn btn-sm btn-danger'>
									Delete
								</button>
							</div>
						</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Justin Black</td>
						<td data-title='Age'>26</td>
						<td data-title='Job Title'>Front-End Developer</td>
						<td data-title='Location'>
							<div className='btn-group' role='group' aria-label='Basic example'>
								<button type='button' className='btn btn-sm btn-primary'>
									<i className='far fa-eye'></i>
								</button>
								<button type='button' className='btn btn-sm btn-success'>
									<i className='fas fa-edit'></i>
								</button>
								<button type='button' className='btn btn-sm btn-danger'>
									<i className='far fa-trash-alt'></i>
								</button>
							</div>
						</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Sean Guzman</td>
						<td data-title='Age'>25</td>
						<td data-title='Job Title'>Web Designer</td>
						<td data-title='Location'>San Francisco</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Keith Carter</td>
						<td data-title='Age'>20</td>
						<td data-title='Job Title'>Graphic Designer</td>
						<td data-title='Location'>New York, NY</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Austin Medina</td>
						<td data-title='Age'>32</td>
						<td data-title='Job Title'>Photographer</td>
						<td data-title='Location'>New York</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Vincent Williamson</td>
						<td data-title='Age'>31</td>
						<td data-title='Job Title'>iOS Developer</td>
						<td data-title='Location'>Washington</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Joseph Smith</td>
						<td data-title='Age'>27</td>
						<td data-title='Job Title'>Project Manager</td>
						<td data-title='Location'>Somerville, MA</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Vincent Williamson</td>
						<td data-title='Age'>31</td>
						<td data-title='Job Title'>iOS Developer</td>
						<td data-title='Location'>Washington</td>
					</tr>
					<tr className=''>
						<td data-title='Full Name'>Joseph Smith</td>
						<td data-title='Age'>27</td>
						<td data-title='Job Title'>Project Manager</td>
						<td data-title='Location'>Somerville, MA</td>
					</tr>
				</tbody>

				<tfoot>
					<tr className=''>
						<td className='cell'>xFull Name</td>
						<td className='cell'>Age</td>
						<td className='cell'>Job Title</td>
						<td className='cell'>Location</td>
					</tr>
				</tfoot>
			</table>

			<nav className='toolbox toolbox-pagination mt-1'>
				<div className='toolbox-item _toolbox-show result-summary'>
					<div>Showing 1 to 10 of 57 entries</div>
				</div>

				<ul className='pagination'>
					<li className='page-item disabled'>
						<a className='page-link page-link-btn' href='#'>
							<i className='icon-angle-left'></i>
						</a>
					</li>
					<li className='page-item active'>
						<a className='page-link' href='#'>
							1 <span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							2
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							3
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							4
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='#'>
							5
						</a>
					</li>
					<li className='page-item'>
						<span className='page-link'>...</span>
					</li>
					<li className='page-item'>
						<a className='page-link page-link-btn' href='#'>
							<i className='icon-angle-right'></i>
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

/* 
import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Swal from 'sweetalert2';
import classes from './Table2.module.css';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import { NavLink, useHistory } from 'react-router-dom';

const Table2 = () => {
	const [state, setState] = useState({
		tableTitle: 'Product Table',
		rowCountArr: [5, 10, 20, 25, 50, 100, 250, 500],
		rowCountSelected: 5,
		pageCount: 0,
		currentPage: 1,
		rowListStart: 0,
		rowListEnd: 5,
		paginationSelectVal: 1,
		searchBoxVal: '',
		rowList: [
			// ... (list of products)
		],
		pnameSort: '',
		ppriceSort: '',
	});
	const history = useHistory();

	useEffect(() => {
		let pages = Math.ceil(state.rowList.length / state.rowCountSelected);
		setState((prevState) => ({ ...prevState, pageCount: pages }));
	}, [state.rowList.length, state.rowCountSelected]);

	const handleRowDelete = (event, index) => {
		event.preventDefault();
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.value) {
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				let temArr = [...state.rowList];
				temArr.splice(index, 1);
				setState((prevState) => ({ ...prevState, rowList: temArr }));
			}
		});
	};

	const handleSearch = (event) => {
		const value = event.target.value;
		setState((prevState) => ({ ...prevState, searchBoxVal: value }));
	};

	const handleCharSorting = (event) => {
		event.preventDefault();
		let sortVal;
		let newArr = [...state.rowList];
		if (state.pnameSort === 'asc') {
			sortVal = 'desc';
			newArr.sort((a, b) => (a.pname < b.pname ? 1 : -1));
		} else if (state.pnameSort === 'desc') {
			sortVal = '';
			newArr.sort((a, b) => (a.pid < b.pid ? -1 : 1));
		} else {
			sortVal = 'asc';
			newArr.sort((a, b) => (a.pname < b.pname ? -1 : 1));
		}
		setState((prevState) => ({
			...prevState,
			rowList: newArr,
			pnameSort: sortVal,
			ppriceSort: '',
		}));
	};

	const handleNumSorting = (event) => {
		event.preventDefault();
		let sortVal;
		let newArr = [...state.rowList];
		if (state.ppriceSort === 'asc') {
			sortVal = 'desc';
			newArr.sort((a, b) => (a.pprice < b.pprice ? 1 : -1));
		} else if (state.ppriceSort === 'desc') {
			sortVal = '';
			newArr.sort((a, b) => (a.pid < b.pid ? -1 : 1));
		} else {
			sortVal = 'asc';
			newArr.sort((a, b) => (a.pprice < b.pprice ? -1 : 1));
		}
		setState((prevState) => ({
			...prevState,
			rowList: newArr,
			ppriceSort: sortVal,
			pnameSort: '',
		}));
	};

	const pagination = () => {
		let rowCountPerPage = state.rowCountSelected;
		let selectPage = state.currentPage;
		let start = (selectPage - 1) * rowCountPerPage;
		let end = start + rowCountPerPage;
		setState((prevState) => ({ ...prevState, rowListStart: start, rowListEnd: end }));
	};

	const handlePageChange = (event) => {
		const value = event.target.value;
		setState(
			(prevState) => ({
				...prevState,
				currentPage: parseInt(value),
				paginationSelectVal: parseInt(value),
			}),
			() => {
				pagination();
			},
		);
	};

	const handleRowCountChange = (event) => {
		const value = event.target.value;
		setState(
			(prevState) => ({
				...prevState,
				paginationSelectVal: 1,
				currentPage: 1,
				rowCountSelected: parseInt(value),
			}),
			() => {
				let pages = Math.ceil(state.rowList.length / state.rowCountSelected);
				setState(
					(prevState) => ({ ...prevState, pageCount: pages }),
					() => {
						pagination();
					},
				);
			},
		);
	};

	const handlePaginationChange = (current, pageSize) => {
		let start = (current - 1) * pageSize;
		let end = start + pageSize;
		setState((prevState) => ({
			...prevState,
			rowListStart: start,
			rowListEnd: end,
			currentPage: current,
			paginationSelectVal: current,
		}));
	};

	const gotoAddNewForm = () => {
		history.push('/admin/articles/add');
	};

	return (
		<React.Fragment>
			<div className='clearfix'>
				<Breadcrumb>
					<BreadcrumbItem active>MANAGE ARTICLES</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className={classes['react-datatable-wrapper']}>
				<div className={classes['table-title']}>
					<div className={classes['title-div']}>
						<h2>{state.tableTitle}</h2>
					</div>
				</div>
				<div className={classes['table-meta']}>
					<form className={classes['table-filter-seletor-form']}>
						<label>Select Store : </label>
						<select className={classes['table-filter-selector']} name=''>
							<option value='all_stores'>All Stores</option>
							<option value='store_1'>Store 1</option>
							<option value='store_2'>Store 2</option>
							<option value='store_3'>Store 3</option>
							<option value='store_4'>Store 4</option>
							<option value='store_5'>Store 5</option>
						</select>
						<button className='table-load-btn btn' type='button'>
							Load Products
						</button>
					</form>
					<button
						className={`${classes['table-add-btn']} btn`}
						type='button'
						onClick={gotoAddNewForm}
					>
						<i className='fas fa-plus'></i> Add New Record
					</button>
				</div>
				<div className={classes['search-form-wrapper']}>
					<form className={classes['search-form']} action='index.html' method='post'>
						<input
							className={classes['searchbox']}
							type='text'
							name='search_value'
							placeholder='Search'
							value={state.searchBoxVal}
							onChange={handleSearch}
						/>
					</form>
				</div>
				<div className={classes['table-figure']}>
					<table cellSpacing='0' cellPadding='0'>
						<thead>
							<tr>
								<th>
									Product Name{' '}
									<a
										onClick={handleCharSorting}
										className={(() => {
											let cls;
											if (state.pnameSort === 'asc') {
												cls = 'fas fa-sort-alpha-down asc-arrow';
											} else if (state.pnameSort === 'desc') {
												cls = 'fas fa-sort-alpha-up desc-arrow';
											} else {
												cls = 'fas fa-sort';
											}
											return cls;
										})()}
									></a>
								</th>
								// Other table headers 
							</tr>
						</thead>
						<tbody>
							{state.rowList
								.slice(state.rowListStart, state.rowListEnd)
								.map((row, index) => (
									<tr key={row.pid}>
										<td>{row.pname}</td>
										// Other table columns 
										<td>
											<button
												className='btn btn-danger'
												onClick={(event) => handleRowDelete(event, index)}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				<Pagination
					className='pagination'
					current={state.currentPage}
					total={state.rowList.length}
					pageSize={state.rowCountSelected}
					onChange={handlePaginationChange}
					itemRender={(current, type, element) => {
						if (type === 'jump-prev') {
							return <a>🠘</a>;
						}
						if (type === 'jump-next') {
							return <a>🠚</a>;
						}
						return element;
					}}
					showLessItems={true}
					locale={localeInfo}
				/>
				<div className='pagination-controls'>
					<select value={state.rowCountSelected} onChange={handleRowCountChange}>
						{state.rowCountArr.map((count) => (
							<option key={count} value={count}>
								{count}
							</option>
						))}
					</select>
					<label>Rows per page</label>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Table2;
 */
