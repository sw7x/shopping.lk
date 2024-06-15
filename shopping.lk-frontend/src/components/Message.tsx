let count = 0;

export const Message = () => {
	console.log('Message called', count);
	count++;
	return <div>Message {count}</div>;
};
