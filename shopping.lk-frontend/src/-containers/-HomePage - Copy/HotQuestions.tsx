import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

export const HotQuestions = () => {
	const threadTitles = [
		'How to use React Hooks?',
		'Best practices for responsive web design',
		'Introduction to Node.js',
		'Favorite programming languages',
		'Tips for efficient coding',
		'First cohomology of free groups elements of the list is pressed',
		'Groups elements of the list is pressed',
		'Water One More Doubt. I Was Trying To Put',
		'Thank you for replying, it is working now. I have one more doubt. I was trying to put a checkmark',
		'How to set focus on an input field after rendering',
	];

	useEffect(() => {}, []);

	return (
		<div className='category-div mb-10'>
			<h2 className='font-bold mb-5 text-base text-yellow-100 bg-red bg-orange-800 p-4 rounded-md'>
				Hot Questions
			</h2>
			<ul className=''>
				{threadTitles.map((_row, index) => (
					<li key={index}>
						<Link to={'#'}>{_row}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
