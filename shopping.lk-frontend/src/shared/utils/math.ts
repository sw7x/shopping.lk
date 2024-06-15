export const random = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//random(5, 10);
// 7
