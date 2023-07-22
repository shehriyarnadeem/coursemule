"use strict";
exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 3550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ post)
/* harmony export */ });
/* unused harmony export get */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_BASE_URL = 'http://localhost:5000/api';
const API_HEADERS = {
  'Content-Type': 'application/json'
};
const apiClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: API_BASE_URL,
  headers: API_HEADERS,
  withCredentials: true
});

const get = async (url, params = null) => {
  const response = await apiClient.get(url);
  return response.data;
};

const post = async (url, data) => {
  const response = await apiClient.post(url, data);
  console.log(response);
  return response.data;
};



/***/ }),

/***/ 2047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IF": () => (/* binding */ setAuthenticatedUser),
/* harmony export */   "EH": () => (/* binding */ setUserError),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState: {
    authenticatedUser: null,
    error: null
  },
  reducers: {
    setAuthenticatedUser: (state, action) => {
      state.authenticatedUser = action.payload;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    }
  }
});
const {
  setAuthenticatedUser,
  setUserError
} = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer); // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

/***/ })

};
;