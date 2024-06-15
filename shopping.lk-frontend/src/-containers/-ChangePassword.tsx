import React, { useState } from 'react';

const ChangePassword = () => {
	const [oldPasswordType, setOldPasswordType] = useState('password');
	const [passwordType, setPasswordType] = useState('password');
	const [confirmPasswordType, setConfirmPasswordType] = useState('password');

	const togglePassword = (setType: React.Dispatch<React.SetStateAction<string>>) => {
		setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
	};

	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<h3>Change password</h3>
				</div>

				<div className='question-form row'>
					<form className='change-pw-form col-md-9'>
						<div className='form-group'>
							<label htmlFor='text' className='control-label'>
								Old password
							</label>
							<input
								required
								id='old_pw'
								name='old_pw'
								type={oldPasswordType}
								className='form-control'
							/>
							<button
								onClick={() => togglePassword(setOldPasswordType)}
								type='button'
								id=''
								className={
									'eyeIcon fa fa-eye toggle ' +
									(oldPasswordType == 'password' ? 'fa-eye' : 'fa-eye-slash')
								}
							></button>
						</div>
						<div className='form-group'>
							<label htmlFor='text' className='control-label'>
								New password
							</label>
							<input
								required
								id='new_pw'
								name='new_pw'
								type={passwordType}
								className='form-control'
							/>
							<button
								onClick={() => togglePassword(setPasswordType)}
								type='button'
								id=''
								className={
									'eyeIcon fa fa-eye toggle ' +
									(passwordType == 'password' ? 'fa-eye' : 'fa-eye-slash')
								}
							></button>
						</div>
						<div className='form-group'>
							<label htmlFor='text' className='control-label'>
								Confirm new password
							</label>
							<input
								required
								id='confirm_new_pw'
								name='confirm_new_pw'
								type={confirmPasswordType}
								className='form-control'
							/>
							<button
								onClick={() => togglePassword(setConfirmPasswordType)}
								type='button'
								id=''
								className={
									'eyeIcon fa fa-eye toggle ' +
									(confirmPasswordType == 'password' ? 'fa-eye' : 'fa-eye-slash')
								}
							></button>
						</div>

						<div className='form-group'>
							<button name='submit' type='submit' className='btn btn-primary'>
								Submit
							</button>
							<button name='reset' type='reset' className='btn btn-danger'>
								Reset
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ChangePassword;
