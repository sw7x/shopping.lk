import { Link, useLocation } from 'react-router-dom';
import { useMenu, ITreeMenu } from '@refinedev/core';

export const CustomMenuItems: React.FC = () => {
	const location = useLocation();
	const { selectedKey, menuItems, defaultOpenKeys } = useMenu();
	console.log('menuItems', menuItems);
	console.log('defaultOpenKeys', defaultOpenKeys);
	console.log('selectedKey', selectedKey);

	const renderMenuItems = (items: ITreeMenu[]) => {
		return (
			<>
				{items.map(({ key, name, label, icon, route, children, list }) => {
					if (!list) {
						return (
							<li key={label}>
								<span>{label ?? name}</span>
								{children ? renderMenuItems(children) : null}
							</li>
						);
					}

					const isSelected = key === selectedKey;

					return (
						<li key={label}>
							<Link
								to={route ?? ''}
								style={{
									fontWeight: isSelected ? 'bold' : 'normal',
								}}
							>
								{icon}
								<span>{label ?? name}</span>
							</Link>
						</li>
					);
				})}
			</>
		);
	};

	return <ul>{renderMenuItems(menuItems)}</ul>;

	/* 
	return (
		<>
			<li
				className={`${location.pathname === '/admin/cc' ? 'ant-menu-item-selected' : ''} ant-menu-item`}
			>
				<span className='ant-menu-title-content'>
					<Link to='/admin/cc'>👋 Navigation Link</Link>
				</span>
			</li>
		</>
	); 
	*/
};
