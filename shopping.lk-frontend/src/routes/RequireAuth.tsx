import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
	const auth = false; // determine if authorized, from context or however you're doing it
	const location = useLocation();

	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to login page
	return auth ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />;
};
