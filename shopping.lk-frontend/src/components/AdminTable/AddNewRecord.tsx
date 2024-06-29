import React from 'react';
import { Link } from 'react-router-dom';

type AddNewRecordProps = {
	url: string;
};

export const AddNewRecord: React.FC<AddNewRecordProps> = ({ url }) => {
	return (
		<div className='btn-wrapper mb-2'>
			<div className='row'>
				<div className='col-12'>
					<Link to={url} className='btn btn-primary btn-md'>
						Add New
					</Link>
				</div>
			</div>
		</div>
	);
};
