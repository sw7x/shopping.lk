export function memoize(cb) {
	const cache = new Map();
	return (...args) => {
		const key = JSON.stringify(args);
		if (cache.has(key)) return cache.get(key);

		const result = cb(...args);
		cache.set(key, result);
		return result;
	};
}
