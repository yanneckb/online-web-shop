import { createSlice } from '@reduxjs/toolkit';

// LOGIN REDUX
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // CLEAR ERRORS
    clearErrors: (state) => {
      state.error = false;
    },
    // REGISTER
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // LOGIN
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      window.location.reload();
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // LOGOUT
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.user = action.payload;
      window.location.reload();
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
    },
    deleteUserSuccess: (state) => {
      state.isFetching = false;
      state.currentUser.user = null;
      localStorage.clear();
      window.location.reload();
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  clearErrors,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
