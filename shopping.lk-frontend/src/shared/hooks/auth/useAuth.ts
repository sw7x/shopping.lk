import { useContext, useDebugValue } from 'react';
import AuthContext, { AuthContextProps } from '@context/AuthProvider';

/* 
const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;
*/

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	return context;
};
