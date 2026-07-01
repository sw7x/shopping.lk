import { createBrowserRouter } from 'react-router-dom';
import routes from '@root/routes/routes';
import adminPanelRoutes from '@root/routes/adminPanelRoutes';

const AppRoutes = [routes, adminPanelRoutes];
const AppRouter = createBrowserRouter(AppRoutes);

export default AppRouter;
