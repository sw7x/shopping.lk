import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
//import { DefaultLayoutRouteList } from '@root/routes/DefaultLayoutRouteList';

import AppRouter from '@root/routes';

function App() {
	return <RouterProvider router={AppRouter} />;
}

export default App;

/*  
return (
		<BrowserRouter>
			<AntdApp>
				<DefaultLayoutRouteList />				
			</AntdApp>			
		</BrowserRouter>
	);
}
*/
