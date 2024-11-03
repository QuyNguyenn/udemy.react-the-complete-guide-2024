import { createStore } from 'redux';

const counterInitialState = {
	count: 0
};

function reducer(state = counterInitialState, action) {
	const reducers = {
		increment: () => {
			return {
				...state,
				count: (state.count += 1)
			};
		},
		decrement: () => {
			return {
				...state,
				count: (state.count -= 1)
			};
		},
		increase: () => {
			return {
				...state,
				count: (state.count += action.payload)
			};
		}
	};

	return reducers?.[action.type] ? reducers[action.type]() : state;
}

const store = createStore(reducer);

export default store;
