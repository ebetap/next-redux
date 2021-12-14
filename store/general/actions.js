import { LOADING } from './types';

const loading = (isLoading = true) => ({ type: LOADING, isLoading });

export const fetchData = () => (dispatch) => {
	setTimeout(() => {
		dispatch(loading());
	}, 3000);
};
