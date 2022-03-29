import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { userReq } from '../helpers/requestMethods';

// GET CART FROM USER ID
export const getCart = createAsyncThunk(
  'carts/get',
  async (dispatch, { getState }) => {
    const state = getState();
    const res = await userReq.get(`carts/find/${state.user.currentUser._id}`);
    console.log(res.data);
    return res.data;
  }
);
// ADD ITEM TO USER CART
export const addToCart = createAsyncThunk(
  'carts/add',
  async (dispatch, { getState }) => {
    const state = getState();
    const res = await userReq.post(
      `carts/${state.user.currentUser._id}`,
      dispatch
    );
    console.log('DISPATCH: ', dispatch);
    console.log('ID: ', state.user.currentUser._id);
    return res.data;
  }
);
// UPDATES ITEM OF USER CART
export const updateCart = createAsyncThunk(
  'carts/update',
  async (dispatch, { getState }) => {
    const state = getState();
    const res = await userReq.put(`carts/${state.user.currentUser._id}`);
    return res.data;
  }
);
// CLEARS USER CART
export const clearCart = createAsyncThunk(
  'carts/clear',
  async (dispatch, { getState }) => {
    const state = getState();
    const res = await userReq.delete(`carts/${state.user.currentUser._id}`);
    return res.data;
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
    [getCart.fullfilled]: (state, action) => {
      console.log('PAYLOAD: ', action.payload);
      state.cartData.products = action.payload.products;
      state.cartData.qty = action.payload.qty;
      state.cartData.total = action.payload.total;
      state.pending = true;
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
    [addToCart.fullfilled]: (state, action) => {
      state.pending = true;
      state.cartData.qty += 1;
      state.cartData.products.push(action.payload);
      state.cartData.total += action.payload.price * action.payload.qty;
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
    [updateCart.fullfilled]: (state, action) => {
      state.pending = true;
      if (action.payload.type === 'acs') {
        if (state.cartData.products[action.payload.index].qty < 99) {
          state.cartData.products[action.payload.index].qty += 1;
          state.cartData.total += action.payload.product.price;
        }
      }
      if (action.payload.type === 'decs') {
        if (state.cartData.products[action.payload.index].qty > 0) {
          state.cartData.products[action.payload.index].qty -= 1;
          state.cartData.total -= action.payload.product.price;
        }
      }
      if (action.payload.type === 'remove') {
        state.cartData.total -=
          state.cartData.products[action.payload.index].price *
          state.cartData.products[action.payload.index].qty;
        state.cartData.qty = state.cartData.qty - 1;
        current(state).cartData.products = state.cartData.products.splice(
          action.payload.index,
          1
        );
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
    [clearCart.fullfilled]: (state, action) => {
      state.pending = true;
      state.cartData.total = 0;
      state.cartData.qty = 0;
      state.cartData.products = [];
    },
    [clearCart.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default cartSlice.reducer;

////////////////////////////////////////////////////////////////////////////////////
// import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
// import { userReq } from '../helpers/requestMethods';

// export const getCart = createAsyncThunk('cart/get', async () => {
//   const res = await userReq.get(`cart/find/${user._id}`);
//   return res.data;
// });

// // CREATE CART AND REDUCER TO ADD PRODUCTS
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     products: [],
//     qty: 0,
//     total: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.qty += 1;
//       state.products.push(action.payload);
//       state.total += action.payload.price * action.payload.qty;
//     },
//     updateCart: (state, action) => {
//       console.log(action.payload.type);
//       if (action.payload.type === 'acs') {
//         if (state.products[action.payload.index].qty < 99) {
//           state.products[action.payload.index].qty += 1;
//           state.total += action.payload.product.price;
//         }
//       }
//       if (action.payload.type === 'decs') {
//         if (state.products[action.payload.index].qty > 0) {
//           state.products[action.payload.index].qty -= 1;
//           state.total -= action.payload.product.price;
//         }
//       }
//       if (action.payload.type === 'remove') {
//         state.total -=
//           state.products[action.payload.index].price *
//           state.products[action.payload.index].qty;
//         state.qty = state.qty - 1;
//         current(state).products = state.products.splice(
//           action.payload.index,
//           1
//         );
//       }
//     },
//     // increaseProduct: (state, action) => {
//     //   if (state.products[action.payload.index].qty < 99) {
//     //     state.products[action.payload.index].qty += 1;
//     //     state.total += action.payload.product.price;
//     //   }
//     // },
//     // decreaseProduct: (state, action) => {
//     //   if (state.products[action.payload.index].qty > 0) {
//     //     state.products[action.payload.index].qty -= 1;
//     //     state.total -= action.payload.product.price;
//     //   }
//     // },
//     // deleteProduct: (state, action) => {
//     //   state.total -=
//     //     state.products[action.payload.index].price *
//     //     state.products[action.payload.index].qty;
//     //   state.qty = state.qty - 1;
//     //   current(state).products = state.products.splice(action.payload.index, 1);
//     // },
//     clearCart: (state) => {
//       state.total = 0;
//       state.qty = 0;
//       state.products = [];
//       console.log(current(state));
//     },
//     // getCart: (state, action) => {
//     //   state.total =
//     //   state.qty =
//     //   state.products
//     // }
//   },
//   extraReducers: {
//     [getCart.pending]: (state) => {
//       state.pending = true;
//       state.error = false;
//     },
//     [getCart.fullfilled]: (state, action) => {
//       state.pending = true;
//       state.products = action.payload;
//     },
//     [getCart.rejected]: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export const {
//   addProduct,
//   increaseProduct,
//   decreaseProduct,
//   deleteProduct,
//   clearCart,
//   updateCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;
