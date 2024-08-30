//import { sum } from '../../src/utils/sum';
import { sum, subtraction, divide, multiply } from '@root/src/shared/utils/math';

describe('math file tests', () => {
	test('adds 1 + 2 to equal 3', () => {
		//debugger;

		expect(sum(1, 2)).toBe(3);
	});

	test('subtracts 3 - 1 to equal 2', () => {
		expect(subtraction(3, 1)).toBe(2);
	});

	test('divide 6 / 3 to equal 3', () => {
		expect(divide(6, 3)).toBe(2);
	});

	test('multiply 3 * 2 to equal 3', () => {
		expect(multiply(3, 2)).toBe(6);
	});
});
