import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
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
    console.log('RES: ', res);
    return { ...res.data, type: dispatch.type };
  }
);
// CLEARS USER CART
export const clearCart = createAsyncThunk(
  'carts/clearCart',
  async (dispatch, getState) => {
    console.log('TARGET: ', product);
    const res = await userReq.delete(`carts/${dispatch}`);
    return { ...res.data, type };
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
    [getCart.pending]: (state, action) => {
      state.pending = true;
      state.error = false;
    },
    [getCart.fulfilled]: (state, action) => {
      state.cartData.products = action.payload.products;
      state.cartData.qty = action.payload.qty;
      state.cartData.total = action.payload.total;
      state.pending = false;
    },
    [getCart.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    // ADD ITEM TO CART
    [addToCart.pending]: (state, action) => {
      state.pending = true;
      state.error = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cartData.qty += 1;
      state.cartData.products.push(action.payload);
      state.cartData.total += action.payload.price * action.payload.qty;
      state.pending = false;
    },
    [addToCart.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    // UPDATE ITEMS IN CART
    [updateCart.pending]: (state, action) => {
      state.pending = true;
      state.error = false;
    },
    [updateCart.fulfilled]: (state, action) => {
      console.log('PAYLOAD: ', action.payload);
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
        state.cartData.total = action.payload.total;
        state.cartData.qty = action.payload.qty;
        state.cartData.products = action.payload.products;
      }
      state.pending = false;
    },
    [updateCart.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    // CLEAR CART
    [clearCart.pending]: (state, action) => {
      state.pending = true;
      state.error = false;
    },
    [clearCart.fulfilled]: (state, action) => {
      state.cartData.total = 0;
      state.cartData.qty = 0;
      state.cartData.products = [];
      state.pending = false;
    },
    [clearCart.rejected]: (state, action) => {
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
//     [getCart.fulfilled]: (state, action) => {
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
