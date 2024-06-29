import { AdminTable } from '@root/components/AdminTable';
import React from 'react';
import { PageHeader } from './shared/PageHeader';
import banner4Img from '@assets/images/banner4.png';
import { Breadcrumb } from '@containers/shared/Breadcrumb';
import bodyShapeImg from '@assets/images/products/single/body-shape.png';

import { Tabs } from '@components/Tabs';
import { TblData } from '@components/AdminTable/AdminTable-Data';

import { useTest } from '@shared/hooks/useTest';

const Test = () => {
	const { char, setChar, int, setInt, randStrHandler } = useTest('aa', 5);

	const headers1 = [
		{ key: 'pid', title: 'ID' },
		//{ key: 'yyy', title: 'YYY' },
		{
			key: 'pname',
			title: 'Name',
			isSortable: true,
			//isImage: false,
		},
		{
			key: 'pdesc',
			title: 'Description',
		},
		//{ key: 'pid', title: 'ID' },
		{
			key: 'pstore',
			title: 'Store',
			isSearchable: false,
		},
		{
			key: 'pcategory',
			title: 'Item Category',
		},
		{
			key: 'pprice',
			title: 'Price',
			isSortable: true,
		},
		/* {
			key: 'pimg',
			title: 'Image',
			isImage: true,
		}, */
	];

	const aaa = () => {
		console.log('aaa');
		setChar((prev: string) => prev + '_');
		setInt((prev: number) => prev + 1);
		alert('aaa');
	};
	const bbb = () => {
		console.log('bbb');
		let result = randStrHandler('sus');
		console.log(result);
		alert('bbb');
	};

	return (
		<>
			<div onClick={aaa} className='border w-50'>
				onClick
			</div>
			<div onClick={bbb} className='border w-50'>
				hook given fn call
			</div>
			<div>char - {char}</div>
			<div>int - {int}</div>

			<PageHeader title='Test' />

			<Breadcrumb />
			<div className='history-section'>
				<div className='container'>
					<div className='mt-5 mb-5'>
						<AdminTable
							title='Product Manage Table'
							canAddRecs={true}
							//data={[{ aa: 1 }, { bb: 2 }]}
							//data={[]}
							data={TblData}
							//headers={[]}
							//headers={['pname', 'pdesc', 'pstore', 'pcategory']}
							headers={headers1}
						/>
					</div>

					<a href='' className='text-4xl'>
						<i className='text-4xl fa fa-yarn'></i>
					</a>
					<br />
				</div>
			</div>

			<div className='history-section'>
				<div className='container'>
					<Tabs>
						<Tabs.TabList>
							<Tabs.Tab>Title 1</Tabs.Tab>
							<Tabs.Tab>Title 2</Tabs.Tab>
							<Tabs.Tab>Title 3</Tabs.Tab>
							<Tabs.Tab>Title 4</Tabs.Tab>
							<Tabs.Tab>bbb</Tabs.Tab>
						</Tabs.TabList>

						<Tabs.TabPanelList>
							<Tabs.TabPanel>
								<div className='product-desc-content'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat.
									</p>
									<ul>
										<li>
											<i className='icon-ok'></i>Any Product types that You
											want - Simple, Configurable
										</li>
										<li>
											<i className='icon-ok'></i>Downloadable/Digital
											Products, Virtual Products
										</li>
										<li>
											<i className='icon-ok'></i>Inventory Management with
											Backordered items
										</li>
									</ul>
									<p>
										Sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, <br />
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex
										ea commodo consequat.{' '}
									</p>
								</div>
							</Tabs.TabPanel>

							<Tabs.TabPanel>
								<div className='product-tags-content'>
									<form action='#'>
										<h4>Add Your Tags:</h4>
										<div className='form-group'>
											<input
												type='text'
												className='form-control form-control-sm'
												required
											/>
											<input
												type='submit'
												className='btn btn-primary'
												value='Add Tags'
											/>
										</div>
									</form>
									<p className='note'>
										Use spaces to separate tags. Use single quotes (') for
										phrases.
									</p>
								</div>
							</Tabs.TabPanel>

							<Tabs.TabPanel>
								<div className='product-size-content'>
									<div className='row'>
										<div className='col-md-4'>
											<img src={bodyShapeImg} alt='body shape' />
										</div>

										<div className='col-md-8'>
											<table className='table table-size'>
												<thead>
													<tr>
														<th>SIZE</th>
														<th>CHEST (in.)</th>
														<th>WAIST (in.)</th>
														<th>HIPS (in.)</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>XS</td>
														<td>34-36</td>
														<td>27-29</td>
														<td>34.5-36.5</td>
													</tr>
													<tr>
														<td>S</td>
														<td>36-38</td>
														<td>29-31</td>
														<td>36.5-38.5</td>
													</tr>
													<tr>
														<td>M</td>
														<td>38-40</td>
														<td>31-33</td>
														<td>38.5-40.5</td>
													</tr>
													<tr>
														<td>L</td>
														<td>40-42</td>
														<td>33-36</td>
														<td>40.5-43.5</td>
													</tr>
													<tr>
														<td>XL</td>
														<td>42-45</td>
														<td>36-40</td>
														<td>43.5-47.5</td>
													</tr>
													<tr>
														<td>XLL</td>
														<td>45-48</td>
														<td>40-44</td>
														<td>47.5-51.5</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</Tabs.TabPanel>

							<Tabs.TabPanel>
								<h1> Tab 3 </h1>
							</Tabs.TabPanel>
						</Tabs.TabPanelList>
					</Tabs>
				</div>
			</div>

			<div className='features-section'>
				<div className='container'>
					<h2 className='subtitle'>OUR FEATURES</h2>

					<div className='row'>
						<div className='col-md-4'>
							<div className='feature-box'>
								<i className='icon-star'></i>

								<div className='feature-box-content'>
									<h3>Dedicated Service</h3>
									<p>
										Consult our specialists for help with an order,
										customization, or design advice
									</p>
								</div>
							</div>
						</div>

						<div className='col-md-4'>
							<div className='feature-box'>
								<i className='icon-reply'></i>

								<div className='feature-box-content'>
									<h3>Free returns</h3>
									<p>
										We stand behind our goods and services and want you to be
										satisfied with them.
									</p>
								</div>
							</div>
						</div>

						<div className='col-md-4'>
							<div className='feature-box'>
								<i className='icon-paper-plane'></i>

								<div className='feature-box-content'>
									<h3>international shipping</h3>
									<p>
										Currently over 50 countries qualify for express
										international shipping.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Test;
