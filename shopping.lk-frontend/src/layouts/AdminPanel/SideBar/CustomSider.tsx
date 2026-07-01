import { ThemedSiderV2 } from '@refinedev/antd';
import { CustomTitle } from '@layouts/AdminPanel/SideBar/CustomTitle';
import { useMenu } from '@refinedev/core';
//import { useMenu } from '@refinedev/core';
import { Menu } from 'antd';
export const CustomSider: React.FC = () => {
	//const { selectedKey, menuItems, defaultOpenKeys } = useMenu();
	//console.log('selectedKey - ' + selectedKey);
	//console.log('menuItems - ' + menuItems);
	//console.log('defaultOpenKeys - ' + defaultOpenKeys);
	const { selectedKey, menuItems, defaultOpenKeys } = useMenu();
	console.log('menuItems - ');
	console.log(menuItems);

	console.log('defaultOpenKeys - ');
	console.log(defaultOpenKeys);

	console.log('selectedKey - ');
	console.log(selectedKey);
	/* return (
		<Menu
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode='inline'
			theme='dark'
			//inlineCollapsed={collapsed}
			items={menuItems}
		/>
	); */

	return (
		<ThemedSiderV2
			fixed={false}
			Title={({ collapsed }) => <CustomTitle collapsed={collapsed} />}
			render={({ items, logout, collapsed, dashboard }) => {
				console.log('items', items);

				return (
					<>
						{items}
						{/* <CustomMenuItems /> */}
						{logout}
					</>
				);
			}}
		/>
	);
};
