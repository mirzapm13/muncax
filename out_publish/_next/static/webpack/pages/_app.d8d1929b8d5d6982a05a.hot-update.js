webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\USER\\Documents\\dev\\November\\muncax\\components\\Search.tsx",
    _s = $RefreshSig$();




function Search() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("f"),
      search = _useState[0],
      setSearch = _useState[1];

  function handleSubmit(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
      // router.push('/api/cities')
      console.log(search);
    }
  }

  function handleChange(text) {
    console.log("CHANGE", text);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit,
    "class": "search",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      "class": "searchTerm",
      placeholder: "What are you looking for?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "submit",
      className: "searchButton",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "fa fa-search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Search, "49U7/QBXqWxQR3fMjT6PMp13oDI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU3VibWl0IiwiZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGdCLGtCQUdZQyxzREFBUSxDQUFDLEdBQUQsQ0FIcEI7QUFBQSxNQUdUQyxNQUhTO0FBQUEsTUFHREMsU0FIQzs7QUFLaEIsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkI7QUFDQSxRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTTyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQkgsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkUsSUFBdEI7QUFDRDs7QUFFRCxzQkFDRTtBQUFNLFlBQVEsRUFBRU4sWUFBaEI7QUFBOEIsYUFBTSxRQUFwQztBQUFBLDRCQUNFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxlQUFNLFlBRlI7QUFHRSxpQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUMsY0FBaEM7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBN0JRTixNO1VBQ1FFLHFEOzs7S0FEUkYsTTtBQStCTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kOGQxOTI5YjhkNWQ2OTgyYTA1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJmXCIpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS5rZXkpO1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgLy8gcm91dGVyLnB1c2goJy9hcGkvY2l0aWVzJylcclxuICAgICAgY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh0ZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNIQU5HRVwiLCB0ZXh0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzcz1cInNlYXJjaFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWFyY2hUZXJtXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9cIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2hCdXR0b25cIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==