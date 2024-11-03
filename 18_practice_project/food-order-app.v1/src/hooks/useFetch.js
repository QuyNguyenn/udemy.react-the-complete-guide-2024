import { useState, useCallback } from 'react';

export function useFetch(fetchFn, callBack) {
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState();

	const fetch = useCallback(
		async function fetch(props) {
			try {
				setIsFetching(true);
				const resData = await fetchFn(props);
				callBack(resData);
				setIsFetching(false);
			} catch (error) {
				setIsFetching(false);
				setError({
					message: error.message || 'Fetch data fail',
					error
				});
			}
		},
		[fetchFn, callBack]
	);

	return {
		isFetching,
		fetch,
		error
	};
}
