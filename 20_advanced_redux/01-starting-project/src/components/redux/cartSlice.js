import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  display: true,
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.display = !state.display;
    },
    addItem(state, action) {
      const { payload: newItem } = action;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex > -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const { payload: id } = action;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex > -1) {
        if (state.items[existingItemIndex].quantity == 1) {
          state.items.splice(existingItemIndex, 1);
        } else {
          state.items[existingItemIndex].quantity -= 1;
        }
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
