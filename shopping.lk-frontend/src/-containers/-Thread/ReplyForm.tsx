import { forwardRef } from 'react';

interface ReplyFormProps {}

const ReplyForm = forwardRef<HTMLTextAreaElement, ReplyFormProps>(({}, ref) => {
	return (
		<>
			<div className='thread-main-post col-md-12 question-form'>
				<div className='forum-title'>
					<h3>Your Answer</h3>
				</div>

				<form className='ask-question-form' id='reply_form'>
					<div className='form-group'>
						<textarea
							required
							id='reply_text'
							name='reply_text'
							cols={40}
							rows={10}
							className='form-control'
							ref={ref}
						></textarea>
					</div>
					<div className='form-group'>
						<button name='submit' type='submit' className='btn submit'>
							Submit
						</button>
						<button name='reset' type='reset' className='btn reset'>
							Reset
						</button>
					</div>
				</form>
			</div>
		</>
	);
});

export default ReplyForm;
