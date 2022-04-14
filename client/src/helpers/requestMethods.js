import axios from 'axios';

// BASE URL TO CONNECT CLIENT TO SERVER
const BASE_URL = 'https://shoop-dev-oop.herokuapp.com/api/';
const OLD_URL = 'http://localhost:8080/api/';

// USER ACCESS TOKEN
const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// PUBLIC REQUEST URL TO SERVER
export const publicReq = axios.create({
  baseURL: BASE_URL,
});

// USER REQUEST URL TO SERVER
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
