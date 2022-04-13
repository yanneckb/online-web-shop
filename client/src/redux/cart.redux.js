import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { userReq } from '../helpers/requestMethods';

// GET CART FROM USER ID
export const getCart = createAsyncThunk(
  'carts/getCart',
  async (dispatch, getState) => {
    const res = await userReq.get(`carts/find/${dispatch}`);
    return res.data;
  }
);
// ADD ITEM TO USER CART
export const addToCart = createAsyncThunk(
  'carts/addToCart',
  async (dispatch, getState) => {
    const res = await userReq.post(`carts/${dispatch.userId}`, dispatch);
    return res.data;
  }
);
// UPDATES ITEM OF USER CART
export const updateCart = createAsyncThunk(
  'carts/updateCart',
  async (dispatch, getState) => {
    const res = await userReq.put(`carts/${dispatch.userId}`, dispatch);
    return { ...res.data, type: dispatch.type };
  }
);
// CLEARS USER CART
export const clearCart = createAsyncThunk(
  'carts/clearCart',
  async (dispatch, getState) => {
    const res = await userReq.put(`carts/clear/${dispatch}`);
    return res.data;
  }
);
// CLEARS USER CART (ONLY STATE)
export const clearCartState = createAsyncThunk(
  'carts/clearCartState',
  async (dispatch, getState) => {
    return dispatch;
  }
);

// CREATE CART AND REDUCER TO ADD PRODUCTS
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: {
      products: [],
      qty: 0,
      total: 0,
    },
    pending: null,
    error: false,
  },
  extraReducers: {
    // GET CART
    [getCart.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getCart.fulfilled]: (state, action) => {
      if (action.payload) {
        state.cartData.products = action.payload.products;
        state.cartData.qty = action.payload.qty;
        state.cartData.total = action.payload.total;
      }
      state.pending = false;
    },
    [getCart.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    // ADD ITEM TO CART
    [addToCart.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cartData.qty += 1;
      state.cartData.products = action.payload.products;
      state.cartData.total += action.payload.price * action.payload.qty;
      state.pending = false;
      window.location.reload();
    },
    [addToCart.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    // UPDATE ITEMS IN CART
    [updateCart.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateCart.fulfilled]: (state, action) => {
      if (action.payload.type === 'acs') {
        state.cartData.products[action.payload.index].qty =
          action.payload.updatedCart.products[action.payload.index].qty;
        state.cartData.total = action.payload.updatedCart.total;
        state.pending = false;
        window.location.reload();
      }
      if (action.payload.type === 'decs') {
        state.cartData.products[action.payload.index].qty =
          action.payload.updatedCart.products[action.payload.index].qty;
        state.cartData.total = action.payload.updatedCart.total;
        state.pending = false;
        window.location.reload();
      }
      if (action.payload.type === 'remove') {
        state.cartData.total = action.payload.total;
        state.cartData.qty = action.payload.qty;
        state.cartData.products = action.payload.products;
        state.pending = false;
        window.location.reload();
      }
    },
    [updateCart.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    // CLEAR CART
    [clearCart.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [clearCart.fulfilled]: (state) => {
      state.cartData.total = 0;
      state.cartData.qty = 0;
      state.cartData.products = [];
      state.pending = false;
      window.location.reload();
    },
    [clearCart.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    // CLEAR CART (ONLY STATE)
    [clearCartState.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [clearCartState.fulfilled]: (state) => {
      state.cartData.total = 0;
      state.cartData.qty = 0;
      state.cartData.products = [];
      state.pending = false;
      window.location.reload();
    },
    [clearCartState.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default cartSlice.reducer;
