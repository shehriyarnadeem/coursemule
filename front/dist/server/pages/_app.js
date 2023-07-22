"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/NavMenu/index.tsx



const content = [// { name: "Categories", link: "/blogs", key: 1 },
{
  name: "All Courses",
  link: "/courses",
  key: 4
}];

function NavMenu({
  open
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: open ? "justify-between w-full md:flex md:w-[50%]  md:order-1" : "hidden justify-between w-full md:flex md:w-[50%]  mt-[20px] md:order-1",
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "flex flex-col mb-3 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/allCourses`,
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "text-lg cursor-pointer font-poppins font-bold  ",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: " dark:text-dark text-light text-xl mb-4 dark:hover:text-white hover:text-blue-600",
            children: "All Courses"
          })
        })
      })
    })
  });
}

/* harmony default export */ const components_NavMenu = (NavMenu);
;// CONCATENATED MODULE: ./common/hooks.ts

function useDarkMode() {
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  (0,external_react_.useEffect)(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (false) {}
  }, [theme]);
  return {
    colorTheme,
    setTheme
  };
}
// EXTERNAL MODULE: ./components/UI/Button/index.js
var Button = __webpack_require__(855);
// EXTERNAL MODULE: ./features/user/userSlice.js
var userSlice = __webpack_require__(47);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./common/ApiClient.js
var ApiClient = __webpack_require__(550);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
;// CONCATENATED MODULE: ./components/Header/index.js








 // import Image from 'next/image';




function Header() {
  const {
    colorTheme,
    setTheme
  } = useDarkMode();
  const {
    0: openMobileMenu,
    1: setMobileMenu
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const user = (0,external_react_redux_.useSelector)(state => {
    var _state$user;

    return state === null || state === void 0 ? void 0 : (_state$user = state.user) === null || _state$user === void 0 ? void 0 : _state$user.authenticatedUser;
  });
  const isAuthenticated = user && user.isAuthenticated ? true : false; // Perform localStorage actio

  const dispatch = (0,external_react_redux_.useDispatch)();

  const logOut = async () => {
    try {
      var _response$data;

      debugger;
      const response = await (0,ApiClient/* post */.v)('/user/logout');

      if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.error) {
        var _res, _res$data;

        dispatch((0,userSlice/* setUserError */.EH)((_res = res) === null || _res === void 0 ? void 0 : (_res$data = _res.data) === null || _res$data === void 0 ? void 0 : _res$data.error));
        dispatch((0,userSlice/* setAuthenticatedUser */.IF)(null));
      } else {
        dispatch((0,userSlice/* setAuthenticatedUser */.IF)(null));
      }

      router.push('/');
    } catch (e) {
      return e;
    }
  };

  const DarkModeButton = () => {
    if (colorTheme === "light") {
      return /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: "btn btn-circle btn-lg",
        onClickHandler: () => setTheme('light'),
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          })
        })
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: "btn btn-circle bg-base-100",
        onClickHandler: () => setTheme('dark'),
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
            clipRule: "evenodd"
          })
        })
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "px-2 sm:px-4 rounded  lg:w-full md:w-full mt-[-70px]",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex justify-between justify-center items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/logo.png",
            alt: "Logo",
            width: 290,
            height: 270
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center md:order-2 mt-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(DarkModeButton, {}), isAuthenticated ? /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          className: "btn btn-circle btn-lg",
          onClickHandler: logOut,
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "SignOut"
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/login",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "cursor-pointer dark:text-white text-black",
            children: "Login"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
          onClickHandler: () => setMobileMenu(!openMobileMenu),
          className: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          "aria-controls": "mobile-menu-2",
          "aria-expanded": "false",
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: "w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
              clipRule: "evenodd"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: "hidden w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
              clipRule: "evenodd"
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_NavMenu, {
        open: openMobileMenu
      })]
    })
  });
}

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "p-10 footer  text-neutral-content h-[24rem]  dark:bg-footer bg-footer drop-shadow-2xl",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: " mx-auto justify-items-center space-y-7 max-w-[38rem]",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-semibold text-center",
        children: "Get in touch \uD83D\uDC4B"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-center text-[18px] dark:text-gray-300 text-gray-800 tracking-[1px]",
        children: "Feel free to email me about anything. Do you have some feedback or suggestions? You can join mme on twitter "
      })]
    })
  });
}

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(139);
// EXTERNAL MODULE: ./features/courses/coursesSlice.js
var coursesSlice = __webpack_require__(461);
;// CONCATENATED MODULE: ./store.js



const store = (0,toolkit_.configureStore)({
  reducer: {
    courses: coursesSlice/* default */.Z,
    user: userSlice/* default */.ZP
  }
});
;// CONCATENATED MODULE: ./common/Layout.js





function Layout({
  children
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    fetchData().then(res => {
      var _res$response, _res$response$data;

      if (res !== null && res !== void 0 && (_res$response = res.response) !== null && _res$response !== void 0 && (_res$response$data = _res$response.data) !== null && _res$response$data !== void 0 && _res$response$data.error) {
        var _res$data;

        dispatch((0,userSlice/* setUserError */.EH)(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.error));
        dispatch((0,userSlice/* setAuthenticatedUser */.IF)(null));
      } else {
        dispatch((0,userSlice/* setAuthenticatedUser */.IF)(res === null || res === void 0 ? void 0 : res.data));
      }
    });
  }, []);

  const fetchData = async () => {
    try {
      const response = await (0,ApiClient/* get */.U)('/user');
      return response;
    } catch (e) {
      return e;
    }
  };

  return children;
}

/* harmony default export */ const common_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(common_Layout, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,858,309], () => (__webpack_exec__(998)));
module.exports = __webpack_exports__;

})();