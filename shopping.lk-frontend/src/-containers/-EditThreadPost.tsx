import React from 'react';

const EditThreadPost = () => {
	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<h3>Edit thread post</h3>
				</div>

				<div className='question-form row'>
					<form className='ask-question-form col-md-9'>
						<div className='form-group'>
							<label htmlFor='textarea' className='control-label'>
								Answer
							</label>
							<textarea
								required
								id='post_text'
								name='post_text'
								cols={40}
								rows={8}
								className='form-control'
							>
								Include all the information someone would need to answer your
								question Include. all the information someone would need to answer
								your question
							</textarea>
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

export default EditThreadPost;
