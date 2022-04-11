import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from './user.redux';
import { clearCart } from './cart.redux';
import { publicReq, userReq } from '../helpers/requestMethods';

// // GETS DATA FROM REGISTER FORM AND POST TO AUTH BACKEND
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicReq.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// GETS DATA FROM LOGIN FORM AND POST TO AUTH BACKEND
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const updateUserData = async (dispatch, updatedUser) => {
  dispatch(updateUserStart());
  try {
    const res = await userReq.put(`/users/${updatedUser._id}`, updatedUser);
    console.log('RES: ', res);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const deleteUser = async (dispatch, userId) => {
  dispatch(deleteUserStart());
  try {
    console.log('userId: ', userId);
    const res = await userReq.delete(`/users/${userId._id}`);
    console.log('RES: ', res);
    dispatch(deleteUserSuccess());
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    dispatch(clearCart());
  } catch (err) {
    dispatch(logoutFailure());
  }
};
