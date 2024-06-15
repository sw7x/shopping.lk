export const fakeAPICall = (success: boolean, timeout: number, value: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve(value);
			} else {
				reject({ message: 'Error' });
			}
		}, timeout);
	});
};

async function loadPosts() {
	try {
		const { data } = await fakeAPICall(true, 2000, 'MOCK_POSTS_RESPONSE');
		return data.posts;
	} catch (error) {
		// Do what you need to do
	}
}

export const delay = (delayTime = 300): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, delayTime));
};
/* 
async function delayedAction() {
	console.log("Taking action!");
	await delay(500);
	console.log("Action taken!");
} 
*/
