export const random = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* 
random(5, 10); // result - 7 
*/

/* 
check if a value is a number 
*/
export function isNumeric(str: any) {
	if (typeof str === 'symbol') return false;
	if (typeof str === 'bigint') return false;
	if (typeof str === 'undefined') return false;

	return !isNaN(parseFloat(str)) && isFinite(str);
}
/*  
console.log(isNumeric("123"));     // true
console.log(isNumeric("123.45"));  // true
console.log(isNumeric("abc"));     // false
console.log(isNumeric(""));        // false
console.log(isNumeric("123abc"));  // false
console.log(isNumeric(" "));       // false
console.log(isNumeric([1,2]]));     // false
console.log(isNumeric({a:1}));     // false
console.log(isNumeric(null));     // false
console.log(isNumeric(undefined));     // false

const fruits1 = new Set(["apples", "bananas", "oranges"]);
console.log(isNumeric(fruits1));     // false



console.log(isNumeric(
		new Map([ ["apples", 500],  ["bananas", 300] ])
	)
);    
// false

*/
