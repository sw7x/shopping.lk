// authService.js
const TOKEN_KEY = 'auth_token';

export const login = (token) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);
export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const signIn = (body) => {
	return fetch({
		method: 'POST',
		url: `${API}/sign-in`,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
};
