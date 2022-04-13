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
import { publicReq, userReq } from '../helpers/requestMethods';

// GET DATA FROM REGISTER FORM AND POST TO AUTH BACKEND
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicReq.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// GET DATA FROM LOGIN FORM AND POST TO AUTH BACKEND
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// UPDATE USER DATA
export const updateUserData = async (dispatch, updatedUser) => {
  dispatch(updateUserStart());
  try {
    const res = await userReq.put(`/users/${updatedUser._id}`, updatedUser);
    dispatch(updateUserSuccess(res.data));
    console.log('DISPATCH', dispatch);
    console.log('RES', res.data);
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

// DELETE USER
export const deleteUser = async (dispatch, userId) => {
  dispatch(deleteUserStart());
  try {
    const res = await userReq.delete(`/users/${userId._id}`);
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

// LOGOUT USER
export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};
