import React, { useState } from 'react';
import bodyShapeImg from '@assets/images/products/single/body-shape.png';

function ProductTabs() {
	const [selected, setSelected] = useState<number>(0);

	const handleChange = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
		setSelected(index);
		event.preventDefault();
	};

	return (
		<>
			<div className='product-single-tabs'>
				<ul className='nav nav-tabs' role='tablist'>
					<li className='nav-item'>
						<a
							className={`nav-link ${selected == 0 ? 'active' : ''}`}
							id='product-tab-desc'
							data-toggle='tab'
							href='#product-desc-content'
							role='tab'
							aria-controls='product-desc-content'
							aria-selected={selected == 0}
							onClick={(event) => handleChange(event, 0)}
						>
							Description
						</a>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link ${selected == 1 ? 'active' : ''}`}
							id='product-tab-size'
							data-toggle='tab'
							href='#product-size-content'
							role='tab'
							aria-controls='product-size-content'
							aria-selected={selected == 1}
							onClick={(event) => handleChange(event, 1)}
						>
							Size Guide
						</a>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link ${selected == 2 ? 'active' : ''}`}
							id='product-tab-tags'
							data-toggle='tab'
							href='#product-tags-content'
							role='tab'
							aria-controls='product-tags-content'
							aria-selected={selected == 2}
							onClick={(event) => handleChange(event, 2)}
						>
							Tags
						</a>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link ${selected == 3 ? 'active' : ''}`}
							id='product-tab-reviews'
							data-toggle='tab'
							href='#product-reviews-content'
							role='tab'
							aria-controls='product-reviews-content'
							aria-selected={selected == 3}
							onClick={(event) => handleChange(event, 3)}
						>
							Reviews
						</a>
					</li>
				</ul>
				<div className='tab-content'>
					<div
						className={`tab-pane _fade ${selected == 0 ? 'showx active' : ''}`}
						id='product-desc-content'
						role='tabpanel'
						aria-labelledby='product-tab-desc'
					>
						<div className='product-desc-content'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat.
							</p>
							<ul>
								<li>
									<i className='icon-ok'></i>Any Product types that You want -
									Simple, Configurable
								</li>
								<li>
									<i className='icon-ok'></i>Downloadable/Digital Products,
									Virtual Products
								</li>
								<li>
									<i className='icon-ok'></i>Inventory Management with Backordered
									items
								</li>
							</ul>
							<p>
								Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, <br />
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.{' '}
							</p>
						</div>
					</div>

					<div
						className={`tab-pane _fade ${selected == 1 ? 'showx active' : ''}`}
						id='product-size-content'
						role='tabpanel'
						aria-labelledby='product-tab-size'
					>
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
					</div>

					<div
						className={`tab-pane _fade ${selected == 2 ? 'showx active' : ''}`}
						id='product-tags-content'
						role='tabpanel'
						aria-labelledby='product-tab-tags'
					>
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
								Use spaces to separate tags. Use single quotes (') for phrases.
							</p>
						</div>
					</div>

					<div
						className={`tab-pane _fade ${selected == 3 ? 'showx active' : ''}`}
						id='product-reviews-content'
						role='tabpanel'
						aria-labelledby='product-tab-reviews'
					>
						<div className='product-reviews-content'>
							<div className='collateral-box'>
								<ul>
									<li>Be the first to review this product</li>
								</ul>
							</div>

							<div className='add-product-review'>
								<h3 className='text-uppercase heading-text-color font-weight-semibold'>
									WRITE YOUR OWN REVIEW
								</h3>
								<p>How do you rate this product? *</p>

								<form action='#'>
									<table className='ratings-table'>
										<thead>
											<tr>
												<th>&nbsp;</th>
												<th>1 star</th>
												<th>2 stars</th>
												<th>3 stars</th>
												<th>4 stars</th>
												<th>5 stars</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Quality</td>
												<td>
													<input
														type='radio'
														name='ratings[1]'
														id='Quality_1'
														value='1'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='ratings[1]'
														id='Quality_2'
														value='2'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='ratings[1]'
														id='Quality_3'
														value='3'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='ratings[1]'
														id='Quality_4'
														value='4'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='ratings[1]'
														id='Quality_5'
														value='5'
														className='radio'
													/>
												</td>
											</tr>
											<tr>
												<td>Value</td>
												<td>
													<input
														type='radio'
														name='value[1]'
														id='Value_1'
														value='1'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='value[1]'
														id='Value_2'
														value='2'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='value[1]'
														id='Value_3'
														value='3'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='value[1]'
														id='Value_4'
														value='4'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='value[1]'
														id='Value_5'
														value='5'
														className='radio'
													/>
												</td>
											</tr>
											<tr>
												<td>Price</td>
												<td>
													<input
														type='radio'
														name='price[1]'
														id='Price_1'
														value='1'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='price[1]'
														id='Price_2'
														value='2'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='price[1]'
														id='Price_3'
														value='3'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='price[1]'
														id='Price_4'
														value='4'
														className='radio'
													/>
												</td>
												<td>
													<input
														type='radio'
														name='price[1]'
														id='Price_5'
														value='5'
														className='radio'
													/>
												</td>
											</tr>
										</tbody>
									</table>

									<div className='form-group'>
										<label>
											Nickname <span className='required'>*</span>
										</label>
										<input
											type='text'
											className='form-control form-control-sm'
											required
										/>
									</div>
									<div className='form-group'>
										<label>
											Summary of Your Review{' '}
											<span className='required'>*</span>
										</label>
										<input
											type='text'
											className='form-control form-control-sm'
											required
										/>
									</div>
									<div className='form-group mb-2'>
										<label>
											Review <span className='required'>*</span>
										</label>
										<textarea
											cols={5}
											rows={6}
											className='form-control form-control-sm'
										></textarea>
									</div>

									<input
										type='submit'
										className='btn btn-primary'
										value='Submit Review'
									/>
								</form>
							</div>
						</div>
					</div>
					{/*  */}
				</div>
			</div>
		</>
	);
}

export default ProductTabs;
