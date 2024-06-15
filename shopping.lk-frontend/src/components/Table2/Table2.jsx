import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem } from '`reactstrap`';
import Swal from 'sweetalert2';
//import 'sweetalert2/dist/sweetalert2.css'

import classes from './Table2.module.css';

import Pagination from 'rc-pagination';
//import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';

//import { withRouter, NavLink, Link } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';

//import TodoForm from 'Todo/TodoForm/TodoForm.js';
//import TodoItem from 'Todo/TodoItem/TodoItem.js';

//import axios from 'axios';

//import Row from 'components/Table/Row/Row.js';

export default class Table2 extends React.Component {
	//    state = {
	//
	//    }

	constructor(props) {
		super(props);

		this.state = {
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
			rowList: [
				{
					pid: 1,
					pname: 'zzz 1Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 800.0,
					pimg: 'https://www.recipetineats.com/wp-content/uploads/2014/06/Stir-Fried-Noodles-Build-Your-Own-1.jpg',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 2,
					pname: 'xxx 2Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 700.0,
					pimg: 'https://www.thespruceeats.com/thmb/Cm5ndEKKEbEQtGxMrOK0jnQjIYk=/1500x844/smart/filters:no_upscale()/shanghai-stir-fried-noodles-4118753-12_preview-5b2927ba43a103003791a8ce.jpeg',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 3,
					pname: 'yyy 3Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 545,
					pimg: 'https://www.eatperu.com/wp-content/uploads/2019/12/tallarin-saltado-recipe-peruvian-stirfry-noodles.jpg',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 4,
					pname: '4Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1200.0,
					pimg: 'https://i0.wp.com/eatwhattonight.com/wp-content/uploads/2016/10/Soy-Sauce-Noodles_3.jpg',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 5,
					pname: '5Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1000.0,
					pimg: 'https://omnivorescookbook.com/wp-content/uploads/2015/12/1512_15-Minute-Fried-Noodles_003-1.jpg',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 6,
					pname: '6Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1100.0,
					pimg: 'https://placeimg.com/602/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 7,
					pname: '7Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1020.0,
					pimg: 'https://placeimg.com/601/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 8,
					pname: '8Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 200.0,
					pimg: 'https://placeimg.com/606/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 9,
					pname: '9Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 100.0,
					pimg: 'https://placeimg.com/650/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 10,
					pname: '10Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 10.0,
					pimg: 'https://placeimg.com/651/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 11,
					pname: '11Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 900.0,
					pimg: 'https://placeimg.com/642/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 12,
					pname: '12Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 980.0,
					pimg: 'https://placeimg.com/643/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 13,
					pname: '13Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1500.0,
					pimg: 'https://placeimg.com/644/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 14,
					pname: '14Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 170.0,
					pimg: 'https://placeimg.com/645/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 15,
					pname: '15Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 888.0,
					pimg: 'https://placeimg.com/641/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 16,
					pname: '16Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 999.0,
					pimg: 'https://placeimg.com/630/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 17,
					pname: 'www 17Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 345.0,
					pimg: 'https://placeimg.com/620/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 18,
					pname: '18Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 534.0,
					pimg: 'https://placeimg.com/510/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 19,
					pname: '19Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 268.0,
					pimg: 'https://placeimg.com/600/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 20,
					pname: '20Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1250.0,
					pimg: 'https://placeimg.com/640/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
				{
					pid: 21,
					pname: '21Lorem ipsum',
					pdesc: 'dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					pprice: 1350.0,
					pimg: 'https://placeimg.com/350/480/any',
					pstore: 'Lorem ipsum',
					pcategory: 'ipsum dolor',
				},
			],

			pnameSort: '', //asc ,desc
			ppriceSort: '',
		};

		this.handleRowCountChange = this.handleRowCountChange.bind(this);
		this.handlepageChange = this.handlepageChange.bind(this);
		//this.pagination     = this.pagination.bind(this)
		this.handleSearch = this.handleSearch.bind(this);
		this.textItemRender = this.textItemRender.bind(this);
		this.handlePaginationChange = this.handlePaginationChange.bind(this);

		this.handleCharSorting = this.handleCharSorting.bind(this);
		this.handleNumSorting = this.handleNumSorting.bind(this);
		this.gotoAddnewForm = this.gotoAddnewForm.bind(this);

		this.handleRowDelete = this.handleRowDelete.bind(this);
	}

	handleRowDelete(event, index) {
		event.preventDefault();
		//event.stopPropagation();

		const value = event.target.value;
		//alert(value);
		//alert(index);

		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
			//backdrop:false,
		}).then((result) => {
			if (result.value) {
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

				let temArr = this.state.rowList;

				temArr.splice(index, 1);

				this.setState({ rowList: temArr });
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				// Swal.fire(
				//     'Cancelled',
				//     'Your imaginary file is safe :)',
				//     'error'
				//     );
			}
		});
	}

	handleSearch(event) {
		const value = event.target.value;
		console.log('search box value ==>' + value);

		let txt = document.getElementById('tr0').innerText;
		let idx = txt.indexOf(value);

		if (idx >= 0) {
			/* let newText = [
				txt.substring(0, idx),
				<strong>{txt.substring(idx, idx + value.length)}</strong>,
				txt.substring(idx + value.length),
			];
			this.setState({ text: newText }); */
			this.setState({ text: 'newText' });

			let xxc = {
				pid: 1,
				pname: 'newText',
				pdesc: '@@@ sit amet dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				pprice: 800.0,
				pimg: 'https://www.recipetineats.com/wp-content/uploads/2014/06/Stir-Fried-Noodles-Build-Your-Own-1.jpg',
				pstore: 'Lorem ipsum',
				pcategory: 'ipsum dolor',
			};

			//let nwArrt = this.state.rowList;
			//nwArrt[0] = xxc;

			this.setState({
				rowList: this.state.rowList.map((el) => (el.pid === 1 ? { ...el, xxc } : el)),
			});

			//console.log(nwArrt);
			//this.setState({rowList: nwArrt});
		} else {
			//this.setState({text: this.initialText});
		}

		this.setState({ searchBoxVal: value });
	}

	handleCharSorting(event) {
		event.preventDefault();
		event.stopPropagation();

		let sortVal;
		//sortVal = this.state.pnameSort == 'asc' ? 'desc' : 'asc' ;
		let newArr = this.state.rowList;

		//state change '' --> asc --> desc
		if (this.state.pnameSort == 'asc') {
			sortVal = 'desc';
			console.log(newArr);
			newArr.sort(function (a, b) {
				if (a.pname < b.pname) {
					return 1;
				}
				if (a.pname > b.pname) {
					return -1;
				}
				return 0;
			});
			console.log(newArr);
		} else if (this.state.pnameSort == 'desc') {
			sortVal = '';
			console.log(newArr);
			newArr.sort(function (a, b) {
				if (a.pid < b.pid) {
					return -1;
				}
				if (a.pid > b.pid) {
					return 1;
				}
				return 0;
			});
			console.log(newArr);
		} else {
			sortVal = 'asc';
			console.log(newArr);
			newArr.sort(function (a, b) {
				if (a.pname < b.pname) {
					return -1;
				}
				if (a.pname > b.pname) {
					return 1;
				}
				return 0;
			});
			console.log(newArr);
		}

		this.setState({ rowList: newArr });
		this.setState({ pnameSort: sortVal });
		this.setState({ ppriceSort: '' });

		console.log('ASC');
		//event.nativeEvent.stopImmediatePropagation();
	}

	handleNumSorting(event) {
		event.preventDefault();
		event.stopPropagation();

		let sortVal;
		let newArr = this.state.rowList;
		//sortVal = this.state.pnameSort == 'asc' ? 'desc' : 'asc' ;

		//state change '' --> asc --> desc
		if (this.state.ppriceSort == 'asc') {
			sortVal = 'desc';
			console.log(newArr);
			newArr.sort(function (a, b) {
				if (a.pprice < b.pprice) {
					return 1;
				}
				if (a.pprice > b.pprice) {
					return -1;
				}
				return 0;
			});
			console.log(newArr);
		} else if (this.state.ppriceSort == 'desc') {
			sortVal = '';
			console.log(newArr);
			newArr.sort(function (a, b) {
				if (a.pid < b.pid) {
					return -1;
				}
				if (a.pid > b.pid) {
					return 1;
				}
				return 0;
			});
			console.log(newArr);
		} else {
			sortVal = 'asc';
			console.log(newArr);
			newArr.sort(function (a, b) {
				if (a.pprice < b.pprice) {
					return -1;
				}
				if (a.pprice > b.pprice) {
					return 1;
				}
				return 0;
			});
			console.log(newArr);
		}

		this.setState({ rowList: newArr });
		this.setState({ ppriceSort: sortVal });
		this.setState({ pnameSort: '' });

		console.log('price Dsc ASC');
		//event.nativeEvent.stopImmediatePropagation();
	}

	pagination() {
		let rowCountPerPage = this.state.rowCountSelected;
		let selectPage = this.state.currentPage;
		let start;
		let end;

		start = (selectPage - 1) * rowCountPerPage;
		end = parseInt(start) + parseInt(rowCountPerPage);

		this.setState({ rowListStart: start });
		this.setState({ rowListEnd: end });
	}

	componentDidMount() {
		console.log('componentDidMount - ');
		let pages = Math.ceil(this.state.rowList.length / this.state.rowCountSelected);
		this.setState({ pageCount: pages });

		//this.setState({ rowCountSelected: this.state.rowCountArr[0]})

		// let url = 'https://backend.todolist.susnathaonline.com/index.php';
		// //let url = 'http://local.todolist.com/index.php';

		// axios.get(url)
		// .then(res => {
		//     console.log(res.data);
		//     this.setState({
		//         todolist: res.data
		//     })
		// });

		//console.log()
	}

	handlepageChange(event) {
		const value = event.target.value;
		console.log('page-Selected ===>' + value);
		this.setState({ currentPage: parseInt(value) }, () => {
			this.setState({ paginationSelectVal: parseInt(value) }, () => {
				this.pagination();
			});
		});
	}

	handleRowCountChange(event) {
		const value = event.target.value;
		this.setState({ paginationSelectVal: 1 });
		this.setState({ currentPage: 1 });

		this.setState({ rowCountSelected: parseInt(value) }, () => {
			//console.log("rowCountSelected ===>" + value);
			let pages = Math.ceil(this.state.rowList.length / this.state.rowCountSelected);
			this.setState({ pageCount: pages }, () => {
				console.log('page count ===>' + pages);
				this.pagination();
			});
		});

		//this.setState({ typeText:value });

		//console.log("dsdsdasdsad" + value);

		//console.log("rowList ===>" + this.state.rowList.length);
		//console.log("rowCountSelected ===>" + value);
		//console.log("page count ===>" + (this.state.rowList.length/this.state.rowCountSelected));
	}

	textItemRender(current, type, element) {
		// console.log(type);
		// console.log(element);

		if (type === 'jump-prev') {
			return <a>🠘</a>;
		}

		if (type === 'jump-next') {
			return <a>🠚</a>;
		}

		if (type === 'prev') {
			return <a>⯇</a>;
		}

		if (type === 'next') {
			return <a>⯈</a>;
		}

		return element;
	}

	handlePaginationChange(current, pageSize) {
		console.log('onChange:current=', current);
		console.log('onChange:pageSize=', pageSize);

		let selectPage = current;
		let rowCountPerPage = pageSize;
		let start;
		let end;

		start = (selectPage - 1) * rowCountPerPage;
		end = parseInt(start) + parseInt(rowCountPerPage);

		console.log('start---=', start);
		console.log('end-----=', end);

		this.setState({ rowListStart: start });
		this.setState({ rowListEnd: end });
		this.setState({ currentPage: current });
		this.setState({ paginationSelectVal: current });
	}

	gotoAddnewForm() {
		console.log('RRRRRR');

		//location: (object), the current location
		console.log(this.props.location);
		//The match object contains information about how a <Route path> matched the URL.
		console.log(this.props.match);
		//The history object allows you to manage and handle the browser history inside your views or components
		console.log(this.props.history);

		this.props.history.push('/admin/articles/add');
	}

	render() {
		console.log('rowCountSelected - ' + this.state.rowCountSelected);
		//this.setState({ pageSize: this.state.rowCountSelected});
		let list = 6666;

		return (
			<React.Fragment>
				<div className='clearfix'>
					<Breadcrumb>
						<BreadcrumbItem active>MANAGE ARTICLES</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<div className={classes['react-datatable-wrapper']}>
					{/*<!-- table title -->*/}
					<div className={classes['table-title']}>
						<div className={classes['title-div']}>
							<h2>{this.state.tableTitle}</h2>
						</div>
					</div>
					{/*<!-- end of table title -->*/}

					{/*<!-- table meta -->*/}
					<div className={classes['table-meta']}>
						{/*<!-- table meta form -->*/}
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
						{/*<!-- end of table meta form -->*/}

						{/*<!-- table meta btn -->*/}
						{/*<!--<a href="#" className="table-add-btn btn"><i className="fas fa-plus"></i> Add New Record</a>-->*/}
						<button
							className={`${classes['table-add-btn']} btn`}
							type='button'
							onClick={this.gotoAddnewForm}
						>
							<i className='fas fa-plus'></i> Add New Record
						</button>

						{/*<NavLink to="/add">nav</NavLink>*/}
						{/*<!-- end of table meta btn -->*/}
					</div>

					<div className={classes['search-form-wrapper']}>
						<form className={classes['search-form']} action='index.html' method='post'>
							<input
								className={classes['searchbox']}
								type='text'
								name='search_value'
								placeholder='Search'
								value={this.state.searchBoxVal}
								onChange={this.handleSearch}
							/>
							{/*<!-- <input className="table-search-btn btn" type="submit" name="search" value="Search"> -->*/}
						</form>
					</div>

					{/*<!-- end of table meta -->*/}

					{/*<!-- table -->*/}
					<div className={classes['table-figure']}>
						<table cellSpacing='0' cellPadding='0'>
							<thead>
								<tr>
									<th>
										Product Name{' '}
										<a
											onClick={this.handleCharSorting}
											className={(() => {
												let cls;

												if (this.state.pnameSort == 'asc') {
													cls = 'fas fa-sort-alpha-down asc-arrow';
												} else if (this.state.pnameSort == 'desc') {
													cls = 'fas fa-sort-alpha-up desc-arrow';
												} else {
													cls = 'fas fa-arrows-alt-v';
													cls = 'fas fa-align-justify';
													cls = 'fas fa-sort';
												}

												return cls;
											})()}
											href=''
										></a>
									</th>
									<th>Product Description</th>

									<th>
										Price(Rs){' '}
										<a
											onClick={this.handleNumSorting}
											className={(() => {
												let cls;

												if (this.state.ppriceSort == 'asc') {
													cls = 'fas fa-sort-numeric-down';
												} else if (this.state.ppriceSort == 'desc') {
													cls = 'fas fa-sort-numeric-up';
												} else {
													cls = 'fas fa-sort';
												}

												return cls;
											})()}
											href=''
										></a>
									</th>

									<th>Product Image</th>
									<th>Store</th>
									<th>Category</th>
									<th className='text-center'></th>
									<th className='text-center'></th>
								</tr>
							</thead>
							<tbody>
								{/*this.state.rowCountSelected*this.state.currentPage*/}
								{console.log('start --- ' + this.state.rowListStart)}
								{console.log('end --- ' + this.state.rowListEnd)}

								{this.state.rowList
									.slice(this.state.rowListStart, this.state.rowListEnd)
									.map((row, index) => {
										let trKey = this.state.rowListStart + index;
										return (
											<tr key={trKey} id={'tr_' + trKey}>
												<td className={classes['product-name']}>
													{row.pname}
												</td>
												<td className={classes['product-description']}>
													{row.pdesc}
												</td>
												<td className={classes['product-price']}>
													{row.pprice}
												</td>
												<td className={classes['product-image']}>
													<img src={row.pimg} alt='' />
												</td>
												<td className={classes['product-store']}>
													{row.pstore}
												</td>
												<td className={classes['product-category']}>
													{row.pcategory}
												</td>

												<td
													className={`${classes['product-edit']} text-center`}
												>
													<Link
														className='fas fa-edit'
														to='/admin/articles/edit'
													></Link>
												</td>
												<td
													className={`${classes['product-delete']} text-center`}
												>
													<a
														onClick={(event) =>
															this.handleRowDelete(event, trKey)
														}
														href='#'
														className='fas fa-trash-alt'
													></a>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
					{/*<!-- end of table -->*/}

					{/*<!-- table pagination -->*/}
					<div className={classes['table-pagination']}>
						<div className={classes['pagination-row']}>
							{/*<!-- pagination boxes -->*/}

							<Pagination
								className={classes['pagination-boxes']}
								locale={localeInfo}
								current={this.state.paginationSelectVal}
								onChange={this.handlePaginationChange}
								itemRender={this.textItemRender}
								pageSize={this.state.rowCountSelected}
								total={this.state.rowList.length}
							/>
							{/* */}

							{/*<div className="pagination-div">
                                <ul className="pagination-boxes">
                                    <li className="pagination-box">
                                        <a href=""><i className="fas fa-angle-double-left"></i></a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href=""><i className="fas fa-chevron-left"></i></a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href="">1</a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href="">2</a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href=""><i className="fas fa-ellipsis-h"></i></a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href="">24</a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href="">25</a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href=""><i className="fas fa-chevron-right"></i></a>
                                    </li>
                                    <li className="pagination-box">
                                        <a href=""><i className="fas fa-angle-double-right"></i></a>
                                    </li>
                                </ul>
                            </div>*/}

							{/*<!-- end of pagination boxes -->*/}

							{/*<!-- pagination filters -->*/}
							<div className={classes['pagination-filter']}>
								{this.state.pageCount > 0 ? (
									<div className='filter'>
										<form
											className={classes['filter-fowm']}
											action='index.html'
											method='post'
										>
											<label>Go to Page: </label>
											{this.state.pageCount > 0 ? (
												<select
													value={this.state.currentPage}
													onChange={this.handlepageChange}
												>
													{(() => {
														//console.log("ttttteee");
														const options = [];

														for (
															let i = 1;
															i <= this.state.pageCount;
															i++
														) {
															options.push(
																<option key={i} value={i}>
																	{i}
																</option>,
															);
														}

														return options;
													})()}
												</select>
											) : (
												''
											)}
										</form>
									</div>
								) : (
									''
								)}

								{this.state.rowCountArr.length > 0 ? (
									<div className='filter'>
										<form
											className={classes['filter-fowm']}
											action='index.html'
											method='post'
										>
											<label>Row Count: </label>
											{this.state.rowCountArr.length > 0 ? (
												<select
													value={this.state.rowCountSelected}
													onChange={this.handleRowCountChange}
												>
													{this.state.rowCountArr.map(
														(rowSize, index) => {
															return (
																<option key={index} value={rowSize}>
																	{rowSize}
																</option>
															);
														},
													)}
												</select>
											) : (
												''
											)}
										</form>
									</div>
								) : (
									''
								)}
							</div>

							<div className='clearfix'></div>
							{/*<!-- end of pagination filters -->*/}

							{/*<!-- pagination summary -->*/}
							<div className={classes['pagination-summery']}>
								Showing <span>{this.state.rowListStart + 1}</span> -
								<span>
									{(() => {
										var lastResultNumbery =
											this.state.rowListEnd > this.state.rowList.length
												? this.state.rowList.length
												: this.state.rowListEnd;
										return lastResultNumbery;
									})()}
								</span>{' '}
								of <span>{this.state.rowList.length}</span>
							</div>
							{/*<!-- end of pagination summary -->*/}
						</div>
					</div>
					{/*<!-- end of table pagination -->*/}
				</div>
				{/*<!-- end of table wrapper -->*/}

				{/*  (this.state.rowListEnd)

				{(() => {
					var y = this.state.rowListEnd > this.state.rowList.length ? this.state.rowList.length : this.state.rowListEnd;
				})()}
*/}

				{/*<Pagination prefixCls="pagination-box" itemRender={this.itemRender} className="ant-pagination ssss" defaultCurrent={3} total={450} />,
				 */}
			</React.Fragment>
		);
	}
}
