// wrapPromise.js
/**
 * Wraps a promise so it can be used with React Suspense
 * @param {Promise} promise The promise to process
 * @returns {Object} A response object compatible with Suspense
*/
export function wrapPromise(promise) {
	let status = 'pending';
	let response;
	console.log(promise);
	console.log('wrapPromise-0');

	const suspender = promise.then(
		(res) => {
			status = 'success';
			response = res;
		},
		(err) => {
			status = 'error';
			response = err;
		},
	);

	const handler = {
		pending: () => {
			throw suspender;
		},
		error: () => {
			throw response;
		},
		default: () => response,
	};

	const read = () => {
		const result = handler[status] ? handler[status]() : handler.default();
		return result;
	};

	return { read };
}



export const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};





/////
/////
/////
/////
type Resource<K> = {
	read: () => never | K;
};

export const wrapPromise0 = <T>(promise: Promise<T>) => {
	let result: 'pending' | Error | T = 'pending';
	console.log('wrapPromise');
	const setResult = (newResult: typeof result) => {
		result = newResult;
	};

	const suspender = promise.then(setResult).catch(setResult);

	const resource: Resource<T> = {
		read() {
			if (result === 'pending') {
				throw suspender;
			} else if (result instanceof Error) {
				console.log('result instanceof Error');
				throw result;
			} else {
				return result;
			}
		},
	};

	return resource;
};
