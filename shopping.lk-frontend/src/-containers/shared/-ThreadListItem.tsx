import { Link } from 'react-router-dom';
import userImg from '@assets/user-2.png';
import { CategoryType } from '@shared/types/category.type';
import { ThreadType } from '@shared/types/thread.type';

type ThreadListItemProps = {
	data: ThreadType;
	cls: string;
};

export const ThreadListItem = ({ data, cls }: ThreadListItemProps) => {
	return (
		<div className={'forum-item ' + cls} key={data.id}>
			<div className='__row clearfix'>
				<div className='col-md-1 px-2 forum-info'>
					<span className='views-number'>{data.postCount}</span>
					<div>
						<small>Answers</small>
					</div>
				</div>

				<div className='col-md-8 px-3 __no-left-padding'>
					<Link to={'/thread/' + data.id} className='forum-item-title'>
						{data.title}
					</Link>
					<div className='forum-sub-title'>{data.text}</div>
					{data.categories &&
						data.categories.map((ctRecord: CategoryType) => {
							return (
								<div className='forum-category' key={ctRecord.id}>
									<Link to={'/category/' + ctRecord.id}>
										{ctRecord.category_name}
									</Link>
								</div>
							);
						})}
				</div>

				<div className='col-md-3 forum-item-author'>
					<div className='row clearfix'>
						<div className='col-md-3 px-1'>
							<Link
								to={'/profile/' + data.user.id}
								className='profile-link dropdown-toggle'
							>
								<img src={userImg} className='user-image' alt='User Image' />
							</Link>
						</div>

						<div className='col-md-9 pl-5 pr-2'>
							<span className='username'>
								<Link to={'/profile/' + data.user.id}>{data.user.username}</Link>
							</span>
							<div className='user-points-div'>
								<span className='points'>{data.user.points} Points</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
