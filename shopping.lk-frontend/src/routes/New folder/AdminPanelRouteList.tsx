import { Outlet, Route, Routes } from 'react-router-dom';

//import { ErrorComponent } from '@refinedev/antd';
import { NavigateToResource } from '@refinedev/react-router-v6';

import { ProductList } from '@containers/Admin/Products/ProductList';
import { RefineContext } from '@root/layouts/AdminPanel/RefineContext';

export const AdminPanelRouteList = () => {
	return (
		<Routes>
			<Route
				path='/admin'
				element={
					<RefineContext>
						<Outlet />
					</RefineContext>
				}
			>
				<Route index element={<NavigateToResource />} />
				<Route path='products' element={<ProductList />} />
				{/* <Route path='*' element={<ErrorComponent />} /> 
				<Route path='*' element={<>ffff</>} />*/}
			</Route>
		</Routes>
	);
};
