import axios from 'axios';

// BASE URL TO CONNECT CLIENT TO SERVER
const BASE_URL = 'http://localhost:8080/api/';

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

////////////////////////////////////////////////////////////////////////

// import axios from 'axios';

// // BASE URL TO CONNECT CLIENT TO SERVER
// const BASE_URL = 'http://localhost:8080/api/';
// // USER ACCESS TOKEN
// const token = () => {
//   if (
//     JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//       .currentUser.accessToken
//   ) {
//     console.log(
//       'TOKEN: ',
//       JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//         .currentUser.accessToken
//     );
//     return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//       .currentUser.accessToken;
//   } else {
//     console.log(
//       'TOKEN: ',
//       JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//         .currentUser.accessToken
//     );
//     return '';
//   }
// };
// // PUBLIC REQUEST URL TO SERVER
// export const publicReq = axios.create({
//   baseURL: BASE_URL,
// });
// // USER REQUEST URL TO SERVER
// export const userReq = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${token}` },
// });
