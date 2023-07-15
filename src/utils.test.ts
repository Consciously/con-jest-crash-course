import { sum, compileAndroidCode } from './utils';

describe('example tests', () => {
	it('should add 1 + 2 to equal 3', () => {
		const result = sum(1, 2);
		expect(result).toBe(3);
	});
	it('object assignment', () => {
		const obj = {};
		expect(obj).toEqual({});
	});
});

describe('truthy or falsey', () => {
	it('null', () => {});
	const n = 0;
	expect(n).toBeFalsy();
	expect(n).not.toBeTruthy;
	// expect(n).toBeNull;
	// expect(n).not.toBeUndefined;
});

describe('numbers', () => {
	it('two plus two', () => {
		const value = 2 + 2;
		expect(value).toBe(4);
		expect(value).toBeGreaterThan(3);
	});

	it('adding floats', () => {
		const value = 0.1 + 0.2;
		expect(value).toBeCloseTo(0.3);
	});
});

describe('strings', () => {
	it('there is no I in team', () => {
		expect('team').not.toMatch(/I/);
	});
});

describe('arrays', () => {
	it('should have milk in array', () => {
		const shoppingLists = [
			'diapers',
			'kleenex',
			'trash bag',
			'paper towels',
			'milk',
		];
		expect(shoppingLists).toContain('milk');
	});
});

describe('exception', () => {
	it('compiling android goes as expected', () => {
		expect(() => compileAndroidCode()).toThrow();
	});
});
