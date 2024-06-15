// DataContext.js
//import React, { createContext, useContext, useState } from 'react';

//const DataContext = createContext({});

//export const useData = () => useContext(DataContext);

//export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	//const [data, setData] = useState({ username: 'aa' });
	//const updateData = (newData) => /* ... */;

	//return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
//};
//export default AuthContext;





////////////////

import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext({});
//export const useAuth = () => useContext(AuthContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	//const [auth, setAuth] = useState({});
	const [data, setData] = useState({ username: 'aa' });

	//const login = (credentials) => /* ... */;
	//const logout = () => /* ... */;
	return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export default DataContext;
