/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	addItem: (_item) => {},
	removeItem: (_id) => {},
	clearCart: () => {}
});

function cartReducer(state, action) {
	const reducer = {
		ADD_ITEM: () => {
			const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

			const updatedItems = [...state.items];

			if (existingCartItemIndex > -1) {
				const existingItem = state.items[existingCartItemIndex];
				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity + 1
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems.push({
					...action.item,
					quantity: 1
				});
			}

			return {
				...state,
				items: updatedItems
			};
		},
		REMOVE_ITEM: () => {
			const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
			const existingItem = state.items[existingCartItemIndex];
			const updatedItems = [...state.items];

			if (existingItem.quantity === 1) {
				updatedItems.splice(existingCartItemIndex, 1);
			} else {
				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity - 1
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			}

			return {
				...state,
				items: updatedItems
			};
		},
		CLEAR_CART: () => {
			return {
				...state,
				items: []
			};
		}
	};

	return reducer[action.type]();
}

export function CartContextProvider({ children }) {
	const [cart, dispatchCartAction] = useReducer(cartReducer, {
		items: []
	});

	function addItem(item) {
		dispatchCartAction({
			type: 'ADD_ITEM',
			item
		});
	}

	function removeItem(id) {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			id
		});
	}

	function clearCart() {
		dispatchCartAction({
			type: 'CLEAR_CART'
		});
	}

	return (
		<CartContext.Provider value={{ ...cart, addItem, removeItem, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
