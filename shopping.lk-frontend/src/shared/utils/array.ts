//=======================

export const none = (predicate, array) => {
	return array.reduce((acc, value) => !acc && !predicate(value), false);
};
/* 
const isEven = (x) => x % 2 === 0;

none(isEven, [1, 3, 5]); // true
none(isEven, [1, 3, 4]); // false
none(equals3, [1, 2, 4]); // true
none(equals3, [1, 2, 3]); // false
*/
//=======================

//=================

export function first<T>(array: T[], n = 1): T {
	if (n === 1) return array[0];
	return array.filter((_, index) => index < n);
}

export function last(array, n = 1) {
	if (n === 1) return array[array.length - 1];
	return array.filter((_, index) => array.length - index <= n);
}

export function pluck(array, key) {
	return array.map((element) => element[key]);
}

export function groupBy(array, key) {
	return array.reduce((group, element) => {
		const keyValue = element[key];
		return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
	}, {});
}

export const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};
