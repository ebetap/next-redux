import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import General from './general/reducer';

const reducers = combineReducers({
	General,
});

const initialState = {};
const middleware = [thunk];
const compose =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middleware))
		: applyMiddleware(...middleware);

const store = createStore(reducers, initialState, compose);

export default store;
