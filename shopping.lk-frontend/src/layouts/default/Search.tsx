import React from 'react';

export const Search = () => {
	return (
		<div className='header-search'>
			{/*<a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>*/}
			<form action='#' method='get'>
				<div className='header-search-wrapper'>
					<input
						type='search'
						className='form-control'
						name='q'
						id='q'
						placeholder='Search...'
						required
					/>
					<div className='select-custom'>
						<select id='cat' name='cat'>
							<option value=''>All Categories</option>
							<option value='4'>Fashion</option>
							<option value='12'>- Women</option>
							<option value='13'>- Men</option>
							<option value='66'>- Jewellery</option>
							<option value='67'>- Kids Fashion</option>
							<option value='5'>Electronics</option>
							<option value='21'>- Smart TVs</option>
							<option value='22'>- Cameras</option>
							<option value='63'>- Games</option>
							<option value='7'>Home &amp; Garden</option>
							<option value='11'>Motors</option>
							<option value='31'>- Cars and Trucks</option>
							<option value='32'>- Motorcycles &amp; Powersports</option>
							<option value='33'>- Parts &amp; Accessories</option>
							<option value='34'>- Boats</option>
							<option value='57'>- Auto Tools &amp; Supplies</option>
						</select>
					</div>
					<button className='btn' type='submit'>
						<i className='icon-magnifier'></i>
					</button>
				</div>
			</form>
		</div>
	);
};
