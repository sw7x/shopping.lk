export const signUp = (body) => {
	return fetch({
		method: 'POST',
		url: `${API}/sign-up`,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
};
