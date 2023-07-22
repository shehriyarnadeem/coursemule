exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Button({
  className,
  title,
  children,
  onClickHandler
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      className: `${className}`,
      onClick: onClickHandler,
      children: [title ? title : '', children]
    })
  });
}

/***/ }),

/***/ 461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ fetchCourses),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  courses: [],
  status: 'idle',
  error: null
};
const courseSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'courses',
  initialState,
  reducers: {
    fetchCoursesStart(state, action) {
      state.status = "loading";
      state.error = null; // ...
    },

    fetchCoursesSuccess(state, action) {
      state.courses = action.payload.result;
      state.status = "idle"; // ...
    },

    fetchCoursesFailure(state, action) {
      state.status = "failed"; // ...
    }

  }
});
const fetchCourses = async dispatch => {
  dispatch(courseSlice.actions.fetchCoursesStart());

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:5000/api/course');
    dispatch(courseSlice.actions.fetchCoursesSuccess(response.data));
  } catch (error) {
    dispatch(courseSlice.actions.fetchCoursesFailure(error.message));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courseSlice.reducer); // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;