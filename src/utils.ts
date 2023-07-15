import axios from 'axios';

export const sum = (sum1: number, sum2: number) => {
	return sum1 + sum2;
};

export const compileAndroidCode = () => {
	throw new Error('you are using the wrong JDK');
};

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const fetchData = async (id: number): Promise<ITodo> => {
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
	);

	return results.data;
};

export const getAnimals = () => {
	const animals = ['elephant', 'zebra', 'bear', 'tiger'];
	return animals;
};

export const getForEach = (
	items: number[],
	callback: (num: number) => number,
) => {
	for (let i = 0; i < items.length; i++) {
		callback(items[i]);
	}
};
