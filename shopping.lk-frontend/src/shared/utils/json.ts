export const parse = <T>(value: string | undefined, def: T): T => {
	if (!value) return def;
	try {
		return JSON.parse(value) as T;
	} catch (e) {
		return def;
	}
};
/* 
const jsonString = '{"name": "John Doe", "age": 30}';
const parsedValue = parse<{name: string, age: number}>(jsonString, {name: '', age: 0});
console.log(parsedValue); // {name: 'John Doe', age: 30}
*/
