import axios from 'axios';

import {
	sum,
	compileAndroidCode,
	fetchData,
	getAnimals,
	getForEach,
} from './utils';

describe('some unit testing', () => {
	beforeAll(() => {
		console.log('IT RUNS BEFORE ALL TESTS');
	});

	afterAll(() => {
		console.log('IT RUNS AFTER ALL TESTS');
	});

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
			expect(() => compileAndroidCode()).toThrow(Error);
		});
	});

	describe('asynchronous data', () => {
		it('should return the correct todo', async () => {
			const todo = await fetchData(1);

			expect(todo.id).toBe(1);
		});
	});

	describe('animals array', () => {
		beforeEach(() => {
			const animals = getAnimals();
			for (let i = 0; i < animals.length; i++) {
				animals.pop();
			}

			animals.push('elephant', 'zebra', 'bear', 'tiger');

			console.log('IT RUNS BEFORE EACH TESTS');
		});

		afterEach(() => {
			console.log('IT RUNS AFTER EACH TEST');
		});

		it('should add animal to end of array', () => {
			const animals = getAnimals();
			animals.push('alligator');

			expect(animals[animals.length - 1]).toContain('alligator');
		});
		it('should add animal to beginning of array', () => {
			const animals = getAnimals();
			animals.unshift('dog');

			expect(animals[0]).toContain('dog');
		});
		it('should have initial length of 4', () => {
			const animals = getAnimals();
			expect(animals.length).toBe(4);
		});
	});

	describe('testing something else', () => {
		it('should test that true is truthy', () => {
			expect(true).toBeTruthy();
		});
	});

	describe('mocking data', () => {
		it('should mock callback', () => {
			const mockCallback = jest.fn((x: number) => 42 + x);

			getForEach([0, 1], mockCallback);

			expect(mockCallback.mock.calls.length).toBe(2);
			expect(mockCallback.mock.calls[0][0]).toBe(0);
			expect(mockCallback.mock.calls[1][0]).toBe(1);
			expect(mockCallback.mock.results[0].value).toBe(42);
			expect(mockCallback.mock.results[1].value).toBe(43);
		});

		it('should return mock', () => {
			const mock = jest.fn();
			mock.mockReturnValueOnce(true).mockReturnValueOnce(false);

			const results = mock();
			const results2 = mock();

			expect(results).toBe(true);
			expect(results2).toBe(false);
		});
		it('should mock axios', async () => {
			const data = {
				userId: 1,
				id: 1,
				title: 'By milk',
				completed: true,
			};

			jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({ data }));
			const results = await fetchData(1);
			expect(results.title).toBe('By milk');
		});
	});
});
