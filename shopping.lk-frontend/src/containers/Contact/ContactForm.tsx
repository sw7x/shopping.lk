import React from 'react';

export const ContactForm = () => {
	return (
		<>
			<h2 className='step-title mb-2'>Contact Form</h2>

			<form action='#'>
				<div className='form-group row required-field'>
					<label className='col-md-3'>Name</label>
					<div className='col-md-9'>
						<input
							type='text'
							className='form-control'
							required={true}
							name='full_name'
						/>
					</div>
				</div>

				<div className='form-group row'>
					<label className='col-md-3'>Email</label>
					<div className='col-md-9'>
						<input type='email' className='form-control' required={true} name='email' />
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Phone Number</label>
					<div className='col-md-9'>
						<input type='email' className='form-control' required={true} name='phone' />
					</div>
				</div>

				<div className='form-group row'>
					<label className='col-md-3'>Subject</label>
					<div className='col-md-9'>
						<input
							type='email'
							className='form-control'
							required={true}
							name='subject'
						/>
					</div>
				</div>

				<div className='form-group row required-field'>
					<label className='col-md-3'>Message</label>
					<div className='col-md-9'>
						<textarea
							cols={30}
							rows={7}
							id='message'
							className='form-control'
							name='message'
							required
						></textarea>
					</div>
				</div>

				<input type='hidden' name='user_id' value='7' />

				<div className='form-footer form-group row'>
					<div className='offset-md-3 col-9'>
						<div className='required text-left mb-1'>* Required Field</div>
					</div>

					<div className='offset-md-3 col-md-9'>
						<button type='reset' className='btn btn-sm btn-danger'>
							Reset
						</button>
						<button type='submit' className='btn btn-sm btn-primary'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
