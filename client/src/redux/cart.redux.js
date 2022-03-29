import { createSlice, current } from '@reduxjs/toolkit';

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
    increaseProduct: (state, action) => {
      if (state.products[action.payload.index].qty < 99) {
        state.products[action.payload.index].qty += 1;
        state.total += action.payload.product.price;
      }
    },
    decreaseProduct: (state, action) => {
      if (state.products[action.payload.index].qty > 0) {
        state.products[action.payload.index].qty -= 1;
        state.total -= action.payload.product.price;
      }
    },
    deleteProduct: (state, action) => {
      state.total -=
        state.products[action.payload.index].price *
        state.products[action.payload.index].qty;
      state.qty = state.qty - 1;
      current(state).products = state.products.splice(action.payload.index, 1);
    },
    clearCart: (state) => {
      state.total = 0;
      state.qty = 0;
      state.products = [];
      console.log(current(state));
    },
  },
});

export const {
  addProduct,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
