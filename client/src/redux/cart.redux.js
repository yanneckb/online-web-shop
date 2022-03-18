import { createSlice } from '@reduxjs/toolkit';

// CREATE CART AND REDUCER TO ADD PRODUCTS
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.qty += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qty;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
