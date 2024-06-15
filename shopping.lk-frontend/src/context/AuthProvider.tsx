import React, { createContext, useContext, useState } from 'react';
import { UserType } from '@root/shared/types/user.type';

//type AuthType = Record<string, unknown>;
type AuthType = { accessToken: null | string; user: UserType | null };

export interface AuthContextProps {
	auth: AuthType;
	setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
}
const initialAuthVal = { accessToken: null, user: null };

const AuthContext = createContext<AuthContextProps>({ auth: initialAuthVal, setAuth: () => {} });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [auth, setAuth] = useState<AuthType>({ accessToken: null, user: null });
	const contextValue: AuthContextProps = { auth, setAuth };

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;

/* 
export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}; 
*/
