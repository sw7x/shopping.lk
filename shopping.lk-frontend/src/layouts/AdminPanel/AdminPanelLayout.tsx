import React, { CSSProperties, useState } from 'react';
import {
	ErrorComponent,
	ThemedLayoutV2,
	ThemedSiderV2,
	useNotificationProvider,
	Sider,
	CreateButton,
} from '@refinedev/antd';

import { Header } from '../default/Header';
import { Footer } from '../default/Footer';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { RefineContext } from '@root/layouts/AdminPanel/RefineContext';
import { Button } from 'antd';

import '@layouts/AdminPanel/AdminpanelCssReset.css';
import '@layouts/AdminPanel/AdminPanelLayout.css';

import { useMenu, LayoutProps, ITreeMenu } from '@refinedev/core';
import { CustomSider } from '@layouts/AdminPanel/SideBar';

export const AdminPanelLayout = () => {
	//todo - delete
	const [showMobileMenu, setMobileMenu] = useState(false);

	//todo - delete
	const toggleMobileMenu = () => {
		setMobileMenu(!showMobileMenu);
	};

	return (
		<>
			<div className='page-wrapper'>
				<Header toggleMobileMenu={toggleMobileMenu} showMobileMenu={showMobileMenu} />
				<div className='admin-panel-wrapper'>
					{/* <Breadcrumb /> */}
					<RefineContext>
						<ThemedLayoutV2 Sider={() => <CustomSider />}>
							<Outlet />
						</ThemedLayoutV2>
					</RefineContext>
				</div>
				<Footer />
			</div>

			{/* 
			<RefineContext>
				<ThemedLayoutV2
					Header={() => (
						<Header
							toggleMobileMenu={toggleMobileMenu}
							showMobileMenu={showMobileMenu}
						/>
					)}
					Sider={(props) => <ThemedSiderV2 {...props} fixed />}
					Footer={() => <Footer />}
				>
					<Outlet />
				</ThemedLayoutV2>
			</RefineContext> 
			*/}
		</>
	);
};

/* 				
<div className={`${styles.scopedReset} admin-panel-wrapper`}>
 */
