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
} from './user.redux';
import { publicReq } from '../helpers/requestMethods';

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

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};
