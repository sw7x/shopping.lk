import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks/useStore';

export const PrivateRoute = ({ allowedRoles = [] }: { allowedRoles?: string[] }) => {
	const authState = useAppSelector((state) => state.auth);
	const location = useLocation();

	console.log(authState?.user);

	return !authState?.user ? (
		<Navigate to='/login' state={{ from: location }} replace />
	) : allowedRoles.length === 0 || allowedRoles.includes(authState.user.account_type || '') ? (
		<Outlet />
	) : (
		<Navigate to='/permission-denied' state={{ from: location }} replace />
	);
};
