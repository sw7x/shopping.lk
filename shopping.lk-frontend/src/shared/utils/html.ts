export const sanitizeHTML = (str: string) => {
	const div = document.createElement('div');
	div.textContent = str;
	return div.innerHTML;
};

//sanitizeHTML('<h1>Hello, World!</h1>');
// Expected output: "&lt;h1&gt;Hello, World!&lt;/h1&gt;"
