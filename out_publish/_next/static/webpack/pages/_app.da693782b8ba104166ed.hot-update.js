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
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");


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
    // router.push('/api/cities')
    e.preventDefault();
    console.log(search);
  }

  function handleChange(text) {
    console.log("CHANGE", text);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "search__container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      className: "search-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: function onChange(e) {
          return setSearch(e.target.value);
        },
        type: "text",
        className: "searchTerm",
        placeholder: "Cari barang yang anda butuhkan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "searchButton",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineSearch"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURnQixrQkFHWUMsc0RBQVEsQ0FBQyxHQUFELENBSHBCO0FBQUEsTUFHVEMsTUFIUztBQUFBLE1BR0RDLFNBSEM7O0FBS2hCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQUEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFaO0FBQ0Q7O0FBRUQsV0FBU08sWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JFLElBQXRCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRU4sWUFBaEI7QUFBOEIsZUFBUyxFQUFDLGFBQXhDO0FBQUEsOEJBQ0U7QUFDRSxnQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsaUJBQU9GLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxTQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBUyxFQUFDLFlBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLGNBQWhDO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0EvQlFkLE07VUFDUUUscUQ7OztLQURSRixNO0FBaUNNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRhNjkzNzgyYjhiYTEwNDE2NmVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcImZcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgICAvLyByb3V0ZXIucHVzaCgnL2FwaS9jaXRpZXMnKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh0ZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNIQU5HRVwiLCB0ZXh0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9fY29udGFpbmVyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hUZXJtXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyaSBiYXJhbmcgeWFuZyBhbmRhIGJ1dHVoa2FuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaEJ1dHRvblwiPlxyXG4gICAgICAgICAgPEFpT3V0bGluZVNlYXJjaCAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=