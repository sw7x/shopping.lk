//import { sum } from '../../src/utils/sum';
import { sum, subtraction, divide, multiply } from '@root/src/shared/utils/math';

describe('math file tests', () => {
	test('adds 1 + 2 to equal 3', () => {
		//debugger;

		const x = sum(1, 2);
		const y = 3;
		const z = Math.floor(Math.random() * 100);
		expect(x).toBe(y);
	});

	test('subtracts 3 - 1 to equal 2', () => {
		expect(subtraction(3, 1)).toBe(2);
	});

	test('divide 6 / 3 to equal 3', () => {
		expect(divide(6, 3)).toBe(2);
	});

	test('multiply 3 * 2 to equal 6', () => {
		expect(multiply(3, 2)).toBe(6);
	});

	test('multiply 6 * 2 to equal 12', () => {
		expect(multiply(6, 2)).toBe(12);
	});
});
