////////////////////////////////////////////////////////////////
export const slugify = (str: string, separator = '-') => {
	return str
		.toString() // Cast to string (optional)
		.toLowerCase() // Convert the string to lowercase letters
		.trim() // Remove whitespace from both sides of a string (optional)
		.replace(/\s+/g, separator) // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\_/g, separator) // Replace _ with -
		.replace(/\-\-+/g, separator) // Replace multiple - with single -
		.replace(/\-$/g, ''); // Remove trailing -
};

//slugify('Hello, World!');
// Expected output: "hello-world"

//slugify('Hello, Universe!', '_');
// Expected output: "hello_universe"

//======================================================
export const extractQueryParams = <T>(search: string, dry = false): T => {
	if (!search) return {} as T;

	return search
		.replace('?', '')
		.split('&')
		.reduce((data: T, item) => {
			const [k, v] = item.split('=');

			if (!k || !v) return data;

			if (dry) return { ...data, [k]: v };

			if (v.includes(',')) return { ...data, [k]: v.split(',') };

			if (['true', 'false'].includes(v)) return { ...data, [k]: v === 'true' };

			if (v === 'null') return { ...data, [k]: null };

			if (!Number.isNaN(+v)) return { ...data, [k]: +v };

			return { ...data, [k]: v };
		}, {} as T);
};

/* 
const search = '?code=12345&name=John&active=true';
const queryParams = extractQueryParams<{ code: number, name: string, active: boolean }>(search);
console.log(queryParams);
// Output: { code: 12345, name: 'John', active: true }

*/

export const splitUrlSegment = (urlSegment: string): string[] => {
	return urlSegment.split('/').filter((part) => part !== '');
};

/* 
// Example usage
let urlSegment = '/cart/checkout-1-shipping';
let parts = splitUrlSegment(urlSegment);
console.log(parts); // Output: ["cart", "checkout-1-shipping"] 
*/
