import { LOADING } from './types';

const initialState = {
	isLoading: false,
};

export default function General(state = initialState, action) {
	const { isLoading, type } = action;

	switch (type) {
		case LOADING:
			return { ...state, isLoading };
		default:
			return state;
	}
}
