webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ChatRooms.js":
/*!*********************************!*\
  !*** ./components/ChatRooms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "C:\\Users\\harry\\Documents\\front_test\\chat\\components\\Rooms.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ChatRooms = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatRooms, _React$Component);

  var _super = _createSuper(ChatRooms);

  function ChatRooms() {
    Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ChatRooms);

    return _super.apply(this, arguments);
  }

  Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatRooms, [{
    key: "render",
    value: function render() {
      var _this = this;

      var rooms = this.props.rooms;

      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
        className: "list-group",
        children: rooms.map(function (room) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            className: "list-group-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Link, {
              href: "/d",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: room.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, _this)
          }, room.roomId, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res;
        return C_Users_harry_Documents_front_test_chat_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('http://localhost:8081/chat/rooms');

              case 3:
                res = _context.sent;
                console.log(res);
                return _context.abrupt("return", {
                  rooms: res.data
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ChatRooms;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChatRooms);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Rooms.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChatRooms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChatRooms */ "./components/ChatRooms.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\harry\\Documents\\front_test\\chat\\pages\\index.js",
    _this = undefined;






var Index = function Index(_ref) {
  var rooms = _ref.rooms;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('w-100', 'h-100', 'mx-auto'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('form-inline', 'center-block', 'mb-5'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('form-group', 'mr-2', 'mb-auto', 'center-block'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "",
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('form-control', 'w-100')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            onclick: "",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('btn', 'btn-primary', 'mb-2'),
            children: "\uBC29\uC0DD\uC131"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "\uCC44\uD305\uB8F8 \uBAA9\uB85D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChatRooms__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhdFJvb21zIiwicm9vbXMiLCJwcm9wcyIsIm1hcCIsInJvb20iLCJuYW1lIiwicm9vbUlkIiwicmVxIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5kZXgiLCJjbGFzc05hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7OzZCQVNPO0FBQUE7O0FBQUEsVUFFR0MsS0FGSCxHQUVhLEtBQUtDLEtBRmxCLENBRUdELEtBRkg7O0FBSUw7QUFBQTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUNLQSxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsOEJBQ1A7QUFBSSxxQkFBUyxFQUFDLGlCQUFkO0FBQUEsbUNBQ0EscUVBQUMsSUFBRDtBQUFNLGtCQUFJLEVBQUMsSUFBWDtBQUFBLHFDQUNJO0FBQUEsMEJBQUlBLElBQUksQ0FBQ0M7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLGFBQXFDRCxJQUFJLENBQUNFLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE87QUFBQSxTQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNIOzs7Ozs7Ozs7O0FBckI4QkMsbUIsUUFBQUEsRzs7dUJBQ1RDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxrQ0FBVixDOzs7QUFBWkMsbUI7QUFDTkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO2lEQUVPO0FBQUVULHVCQUFLLEVBQUVTLEdBQUcsQ0FBQ0c7QUFBYixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUxTQyw0Q0FBSyxDQUFDQyxTOztBQXlCZmYsd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1nQixLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUVmLEtBQUYsUUFBRUEsS0FBRjtBQUFBLHNCQUNWLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVnQixpREFBVSxDQUFDLGlCQUFELEVBQW9CLFFBQXBCLEVBQThCLE9BQTlCLEVBQXVDLE9BQXZDLEVBQWdELEtBQWhELEVBQXVELFNBQXZELEVBQWtFLGFBQWxFLENBQTFCO0FBQUEsNkJBQ0k7QUFBTyxpQkFBUyxFQUFFQSxpREFBVSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFNBQW5CLENBQTVCO0FBQUEsZ0NBQ0k7QUFBTSxtQkFBUyxFQUFFQSxpREFBVSxDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsRUFBZ0MsTUFBaEMsQ0FBM0I7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUVBLGlEQUFVLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsU0FBdkIsRUFBa0MsY0FBbEMsQ0FBMUI7QUFBQSxtQ0FDSTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBRSxFQUFDLEVBQXRCO0FBQXlCLHVCQUFTLEVBQUVBLGlEQUFVLENBQUMsY0FBRCxFQUFpQixPQUFqQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFPLEVBQUMsRUFBOUI7QUFBaUMscUJBQVMsRUFBRUEsaURBQVUsQ0FBQyxLQUFELEVBQVEsYUFBUixFQUF1QixNQUF2QixDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVFJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVTtBQUFBLENBQWQ7O0tBQU1ELEs7QUFpQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4MmZkNGM3ODYzOGMzYWE5MDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgQ2hhdFJvb21zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODEvY2hhdC9yb29tcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4geyByb29tczogcmVzLmRhdGEgfTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHJvb21zIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7cm9vbXMubWFwKChyb29tKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtyb29tLnJvb21JZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT57cm9vbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tczsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENoYXRSb29tcyBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRSb29tcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoe3Jvb21zfSkgPT4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnY292ZXItY29udGFpbmVyJywgJ2QtZmxleCcsICd3LTEwMCcsICdoLTEwMCcsICdwLTMnLCAnbXgtYXV0bycsICdmbGV4LWNvbHVtbicpfT5cclxuICAgICAgICAgICAgPG1haW4gIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndy0xMDAnLCAnaC0xMDAnLCAnbXgtYXV0bycpfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZm9ybS1pbmxpbmUnLCAnY2VudGVyLWJsb2NrJywgJ21iLTUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmb3JtLWdyb3VwJywgJ21yLTInLCAnbWItYXV0bycsICdjZW50ZXItYmxvY2snKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmb3JtLWNvbnRyb2wnLCAndy0xMDAnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdidG4nLCAnYnRuLXByaW1hcnknLCAnbWItMicpfT7rsKnsg53shLE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxoMz7ssYTtjIXro7gg66qp66GdPC9oMz5cclxuICAgICAgICAgICAgICAgIDxDaGF0Um9vbXMgLz5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9