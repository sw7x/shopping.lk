import React, { FormEvent } from 'react';

//import AWN from 'awesome-notifications';
import { toast } from 'react-toastify';

const AskQuestion = () => {
	const askQuestionSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		var checkBoxes = document.getElementsByClassName('question_category');
		var isChecked = false;
		/* for (var i = 0; i < checkBoxes.length; i++) {
			if (checkBoxes[i].checked) {
				isChecked = true;
			}
		} */
		//alert(isChecked);
		if (isChecked) {
			//alert( 'ok' );
		} else {
			toast.error('Need to select atleast one category !', {
				//position: toast.POSITION.TOP_RIGHT,
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'colored',
			});

			/* new AWN().alert('Need to select atleast one category', {
				position: 'top-right',
				durations: { alert: 1500 },
			}); */
			//alert( 'Please, check at least one checkbox!' );
		}

		//alert("You are submitting ");
	};

	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<h3>Ask a question</h3>
				</div>

				<div className='question-form row'>
					<form
						className='ask-question-form col-md-9'
						onSubmit={askQuestionSubmitHandler}
					>
						<div className='form-group'>
							<label htmlFor='text' className='control-label'>
								Question Title
							</label>
							<div className='small-text-label'>
								Be specific and imagine you’re asking a question to another person
							</div>
							<input
								id='q_title'
								name='q_title'
								type='text'
								className='form-control'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='textarea' className='control-label'>
								Question text
							</label>
							<div className='small-text-label'>
								Include all the information someone would need to answer your
								question
							</div>
							<textarea
								id='q_text'
								name='q_text'
								cols={40}
								rows={12}
								className='form-control'
								required
							></textarea>
						</div>

						{/*
                        <div className="form-group">
                            <label htmlFor="select" className="control-label">Category</label> 
                            <div className="small-text-label">Select a category which is best suit for your question</div>
                            <select id="select" name="select" className="select form-control" required>
                                <option value="rabbit">Rabbit</option>
                                <option value="duck">Duck</option>
                            </select>
                        </div>
                        */}

						<div className='form-group'>
							<label className='control-label' htmlFor='checkbox'>
								Categories
							</label>
							<div className='small-text-label'>
								Select categories which is best suit for your question
							</div>
							<div>
								<label className='checkbox-inline'>
									<input
										type='checkbox'
										className='question_category'
										name='category[]'
										value='rabbit'
									/>
									Rabbit
								</label>
								<label className='checkbox-inline'>
									<input
										type='checkbox'
										className='question_category'
										name='category[]'
										value='duck'
									/>
									Duck
								</label>
								<label className='checkbox-inline'>
									<input
										type='checkbox'
										className='question_category'
										name='category[]'
										value='fish'
									/>
									Fish
								</label>
							</div>
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

export default AskQuestion;
