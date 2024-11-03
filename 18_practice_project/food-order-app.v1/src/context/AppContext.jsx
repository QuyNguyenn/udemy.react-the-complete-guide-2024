import { createContext, useReducer, useCallback } from 'react';

export const AppContext = createContext({
	meals: [],
	cart: [],
	addToCart: () => {},
	setMeals: () => {},
	removeFromCart: () => {},
	clearCart: () => {}
});

function appReducer(state, action) {
	const reducer = {
		ADD_TO_CART: () => {
			const mealItem = state.cart.find((item) => action.mealId === item.mealId);
			return {
				...state,
				cart: [
					...state.cart.filter((item) => item.mealId !== action.mealId),
					{
						mealId: action.mealId,
						quantity: mealItem ? mealItem.quantity + 1 : 1
					}
				]
			};
		},
		REMOVE_FROM_CART: () => {
			const mealItem = state.cart.find((item) => action.mealId === item.mealId);

			if (mealItem) {
				if (mealItem.quantity > 1) {
					return {
						...state,
						cart: [
							...state.cart.filter((item) => item.mealId !== action.mealId),
							{
								mealId: action.mealId,
								quantity: mealItem.quantity - 1
							}
						]
					};
				} else {
					return {
						...state,
						cart: [...state.cart.filter((item) => item.mealId !== action.mealId)]
					};
				}
			}

			return state;
		},
		CLEAR_CART: () => {
			return {
				...state,
				cart: []
			};
		},
		SET_MEALS: () => {
			return {
				...state,
				meals: action.meals
			};
		}
	};

	return reducer[action.type]();
}

export default function AppContextProvider({ children }) {
	const [appState, appStateDispatch] = useReducer(appReducer, {
		meals: [],
		cart: []
	});

	const addToCart = useCallback((mealId) => {
		appStateDispatch({
			type: 'ADD_TO_CART',
			mealId
		});
	}, []);

	const removeFromCart = useCallback(
		(mealId) => {
			appStateDispatch({
				type: 'REMOVE_FROM_CART',
				mealId
			});
		},
		[appStateDispatch]
	);

	const setMeals = useCallback((meals) => {
		appStateDispatch({
			type: 'SET_MEALS',
			meals
		});
	}, []);

	const clearCart = useCallback(() => {
		appStateDispatch({ type: 'CLEAR_CART' });
	}, []);

	const ctxValue = {
		...appState,
		addToCart,
		setMeals,
		removeFromCart,
		clearCart
	};

	return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
