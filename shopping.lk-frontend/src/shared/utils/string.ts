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

export const kebabCase = (str: string) => {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
};

/* 
console.log(kebabCase('Geeks For Geeks'));  // Output: geeks-for-geeks
console.log(kebabCase('GeeksForGeeks'));	// Output: geeks-for-geeks
console.log(kebabCase('Geeks_For_Geeks'));	// Output: geeks-for-geeks
*/

// Define the 'toSnakeCase' function.
export const toSnakeCase = (str: string) => {
	// Join words with underscores}

	if (!str) {
		return '';
	}
	return (
		str
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) // Match words
			?.map((x) => x.toLowerCase()) // Convert to lowercase
			?.join('_') ?? '' // Join words with underscores
	);
};
/*
// Test the 'toSnakeCase' function with sample inputs.
console.log(toSnakeCase('camelCase')); 		// Output: camel_case
console.log(toSnakeCase('some text')); 		// Output: some_text
console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens')); 	// Output: some_mixed_string_with_spaces_underscores_and_hyphens
console.log(toSnakeCase('AllThe-small Things')); 	// Output: all_the_small_things
console.log(
	toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'),
); 
// Output: i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html
*/
