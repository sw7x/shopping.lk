export const capitalize = (str: string) => {
	const arr = str.trim().toLowerCase().split(' ');

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join(' ');
};

/* const capitalizeText = (text) => {
	return text.toLowerCase().replace(/(^|\s)\w/g, (c) => c.toUpperCase());
}; */

//capitalize('hello, world!');
// Expected output: "Hello, World!"

//snakeToCamel
//camelToSnake

export const getTruncateDescription = (description: string, maxLength: number) => {
	if (description.length <= maxLength) {
		return description;
	}

	const truncated = description.substring(0, maxLength - 3);
	return truncated + '...';
};

/*
let truncateDescription = getTruncateDescription(
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`,
	100,
);

console.log(truncateDescription);

*
 *
 * Output:
 *
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus torto...
 *
 */

//=========================================================
export const toHumanReadable = (str: string) => {
	return str
		.replace(/_/g, ' ')
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.toLowerCase()
		.replace(/(^|\s)\S/g, function (t) {
			return t.toUpperCase();
		});
};

/* 
import { toHumanReadable } from './utils';
const snake_case = 'snake_case';
const humanReadable = toHumanReadable(snake_case);
console.log(humanReadable); // Snake Case 
*/

export const hyphenToTitleCase = (str: string) => {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
};

/* 
const input2 = 'camp-on-fire';
const output2 = hyphenToTitleCase(input2);
console.log(output2); // Output: 'Camp On Fire'
*/
