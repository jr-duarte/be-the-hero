// import { Api } from 'api-client';
// import axios from 'axios';
// import store from '@/store';
// import { loginReturn } from 'api-client';
// // import router from '@/router';

// const axiosInstance = axios.create({
//   baseURL: process.env.VUE_APP_API_ENDPOINT
// });

// axiosInstance.interceptors.request.use(
//   function(config) {
//     const state: any = store.state;

//     const authToken =
//       state && state.login && state.login.user && state.login.user.accessToken;

//     if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

// // axiosInstance.interceptors.response.use(
// //   function(response) {
// //     return response;
// //   },
// //   function(error) {
// //     if (
// //       error.response.config.url.indexOf('/user/login') == -1 &&
// //       error.response.status == 401
// //     ) {
// //       router.push('/logout');
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// const Api: Api = {
//   async registerCostumer(obj) {
//     const res = await axiosInstance.post('/customer', obj);
//     return res.data;
//   },
//   async loginWithPassword(obj) {
//     const res = await axiosInstance.post('/customer/login', obj);
//     return res.data;
//   },
//   async loginWithFacebook(obj) {
//     const res = await axiosInstance.post('/customer/login/facebook', obj);
//     return res.data;
//   },
//   async checkToken() {
//     const res = await axiosInstance.post('/customer/check-token');
//     return res.data;
//   },
//   async resetPassword(obj) {
//     const res = await axiosInstance.post('/customer/reset-password', obj);
//     return res.data;
//   },
//   async redefinePasswordWithToken(obj) {
//     const res = await axiosInstance.post('/customer/redefine-password', obj);
//     return res.data;
//   },
//   async getProfile() {
//     const res = await axiosInstance.get('/customer');
//     return res.data;
//   },
//   async editProfile(obj) {
//     const res = await axiosInstance.put('/customer', obj);
//     return res.data;
//   },
//   async registerCoupon(obj) {
//     const res = await axiosInstance.post('/coupon', obj);
//     return res.data;
//   },
//   async getFaq() {
//     const res = await axiosInstance.get('/faq');
//     return res.data;
//   }
// };

// export default Api;
