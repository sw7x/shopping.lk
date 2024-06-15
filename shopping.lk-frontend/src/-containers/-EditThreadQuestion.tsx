import React from 'react';

const EditThreadQuestion = () => {
	return (
		<>
			<div className='forum-section-container clearfix'>
				<div className='forum-title'>
					<h3>Edit thread question</h3>
				</div>

				<div className='question-form row'>
					<form className='ask-question-form col-md-9'>
						<div className='form-group'>
							<label htmlFor='text' className='control-label'>
								Question Title
							</label>
							<input
								required
								id='q_title'
								name='q_title'
								type='text'
								className='form-control'
								value='Thread title'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='textarea' className='control-label'>
								Question text
							</label>
							<textarea
								required
								id='q_text'
								name='q_text'
								cols={40}
								rows={8}
								className='form-control'
							>
								Include all the information someone would need to answer your
								question Include. all the information someone would need to answer
								your question
							</textarea>
						</div>

						{/*<div className="form-group">
                                    <label htmlFor="select" className="control-label">Category</label> 
                                    <select id="select" name="select" className="select form-control">
                                        <option value="rabbit">Rabbit</option>
                                        <option value="duck">Duck</option>
                                    </select>
                                </div>*/}

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
										name='category'
										defaultChecked={true}
										value='rabbit'
									/>
									Rabbit
								</label>
								<label className='checkbox-inline'>
									<input type='checkbox' name='category' value='duck' />
									Duck
								</label>
								<label className='checkbox-inline'>
									<input type='checkbox' name='category' value='fish' />
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

export default EditThreadQuestion;
