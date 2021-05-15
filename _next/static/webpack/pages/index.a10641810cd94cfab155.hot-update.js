webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _responsiveContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveContainer */ "./components/responsiveContainer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link */ "./components/link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




var _jsxFileName = "/home/pitek/projects/deepsat/web/components/header.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var logo = __webpack_require__(/*! ../images/logo_web_brand.svg */ "./images/logo_web_brand.svg");

var MenuItem = function MenuItem(_ref) {
  var href = _ref.href,
      locale = _ref.locale,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["href", "locale", "children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_link__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread(_objectSpread({}, {
    href: href,
    locale: locale
  }), props), {}, {
    children: children
  }), href, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = MenuItem;
MenuItem.defaultProps = {};

var LanguageSwitcher = function LanguageSwitcher(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  return router.locales.map(function (locale) {
    return locale == router.locale ? undefined : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Link"], _objectSpread(_objectSpread({}, props), {}, {
      href: "/".concat(locale),
      display: "flex",
      alignItems: "center",
      locale: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        as: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaGlobeAfrica"],
        mr: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), " ", locale.toLocaleUpperCase()]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: "\"XD\""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 10
  }, _this);
};

_s(LanguageSwitcher, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c2 = LanguageSwitcher;

var useBreakpoint = function useBreakpoint(breakpoint, value) {
  return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, breakpoint, value);
};

var Header = function Header(_ref3) {
  _s3();

  var _s2 = $RefreshSig$();

  var menu = _ref3.menu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isTop = _useState[0],
      setTop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpen = function toggleOpen() {
    return setOpen(!isOpen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var onscroll = function onscroll() {
      var current = window.scrollY < 10;

      if (current !== isTop) {
        setTop(current);
      }
    };

    document.addEventListener("scroll", onscroll);
    onscroll();
  });
  var bp = "lg";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    pos: "fixed",
    top: "0",
    insetX: "0",
    bg: isTop ? "transparent" : "white",
    shadow: isTop ? undefined : "lg",
    transition: "background-color ease-in-out 200ms",
    zIndex: "sticky",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_responsiveContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        px: {
          base: 8,
          md: 16
        },
        align: "center",
        h: "24",
        pos: "relative",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          href: "/#hero",
          passHref: true,
          transition: isTop ? "opacity ease-in-out 200ms, visibility 0s 200ms" : "opacity ease-in-out 200ms, visibility 0s 0s",
          visibility: isTop ? "hidden" : "unset",
          opacity: isTop ? "0" : "unset",
          flexShrink: "0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
            h: "10",
            src: logo,
            srcSet: logo.srcSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
          minW: "auto",
          minH: "auto",
          variant: "link",
          onClick: toggleOpen,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            as: react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdMenu"],
            w: "6",
            h: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 19
          }, _this),
          display: useBreakpoint(bp, "none"),
          color: isTop ? "white" : "brand.default",
          ml: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
          wrap: "wrap",
          justify: "flex-end",
          as: "nav",
          direction: _objectSpread({
            base: "column"
          }, useBreakpoint(bp, "row")),
          position: _objectSpread({
            base: "absolute"
          }, useBreakpoint(bp, "static")),
          left: "0",
          right: "0",
          top: "100%",
          bg: _objectSpread({
            base: "white"
          }, useBreakpoint(bp, "none")),
          overflowY: _objectSpread({
            base: "hidden"
          }, useBreakpoint(bp, undefined)),
          transform: _objectSpread({
            base: isOpen ? null : "scaleY(0)"
          }, useBreakpoint(bp, "unset")),
          transformOrigin: "top",
          "aria-hidden": !isOpen,
          boxShadow: _objectSpread({
            base: "lg"
          }, useBreakpoint(bp, "none")),
          borderRadius: "base",
          transition: isOpen ? "transform ease-in-out 200ms, visibility 0s 0s" : "transform ease-in-out 200ms, visibility 0s 200ms",
          visibility: _objectSpread({
            base: isOpen ? "unset" : "hidden"
          }, useBreakpoint(bp, "unset")),
          children: [menu.map(_s2(function (_ref4) {
            _s2();

            var label = _ref4.label,
                item = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, ["label"]);

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MenuItem, _objectSpread(_objectSpread({}, item), {}, {
              mx: useBreakpoint(bp, "4"),
              pl: _objectSpread({
                base: "8"
              }, useBreakpoint(bp, "0")),
              pt: "4",
              pb: "4",
              color: useBreakpoint(bp, isTop ? "white" : undefined),
              display: "block",
              children: label
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this);
          }, "8gwVeJznUSXJoaFZ53fzyIELE5w=", false, function () {
            return [useBreakpoint, useBreakpoint, useBreakpoint];
          })), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LanguageSwitcher, {
            mx: useBreakpoint(bp, "4"),
            pl: _objectSpread({
              base: "8"
            }, useBreakpoint(bp, "0")),
            pt: "4",
            pb: "4",
            color: useBreakpoint(bp, isTop ? "white" : undefined),
            display: "block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s3(Header, "iSfnn4JXO0R+qwZnvglg0i8r77U=", false, function () {
  return [useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint, useBreakpoint];
});

_c3 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "MenuItem");
$RefreshReg$(_c2, "LanguageSwitcher");
$RefreshReg$(_c3, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsibG9nbyIsInJlcXVpcmUiLCJNZW51SXRlbSIsImhyZWYiLCJsb2NhbGUiLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsZXMiLCJtYXAiLCJ1bmRlZmluZWQiLCJGYUdsb2JlQWZyaWNhIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJ1c2VCcmVha3BvaW50IiwiYnJlYWtwb2ludCIsInZhbHVlIiwiSGVhZGVyIiwibWVudSIsInVzZVN0YXRlIiwiaXNUb3AiLCJzZXRUb3AiLCJpc09wZW4iLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsInVzZUVmZmVjdCIsIm9uc2Nyb2xsIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJicCIsImJhc2UiLCJtZCIsInNyY1NldCIsIk1kTWVudSIsImxhYmVsIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUFwQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEwQztBQUFBLE1BQXZDQyxJQUF1QyxRQUF2Q0EsSUFBdUM7QUFBQSxNQUFqQ0MsTUFBaUMsUUFBakNBLE1BQWlDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ3pELHNCQUNFLHFFQUFDLDZDQUFELGdEQUEyQjtBQUFFSCxRQUFJLEVBQUpBLElBQUY7QUFBUUMsVUFBTSxFQUFOQTtBQUFSLEdBQTNCLEdBQWlERSxLQUFqRDtBQUFBLGNBQ0dEO0FBREgsTUFBaUJGLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1ELFE7QUFPTkEsUUFBUSxDQUFDSyxZQUFULEdBQXdCLEVBQXhCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsS0FBRCxFQUFXO0FBQUE7O0FBQ2xDLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUFPRCxNQUFNLENBQUNFLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixVQUFDUixNQUFELEVBQVk7QUFDcEMsV0FBT0EsTUFBTSxJQUFJSyxNQUFNLENBQUNMLE1BQWpCLEdBQTBCUyxTQUExQixnQkFDTCxxRUFBQyxxREFBRCxrQ0FDTVAsS0FETjtBQUVFLFVBQUksYUFBTUYsTUFBTixDQUZOO0FBR0UsYUFBTyxFQUFDLE1BSFY7QUFJRSxnQkFBVSxFQUFDLFFBSmI7QUFLRSxZQUFNLEVBQUUsS0FMVjtBQUFBLDhCQU9FLHFFQUFDLHFEQUFEO0FBQU0sVUFBRSxFQUFFVSw0REFBVjtBQUF5QixVQUFFLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLE9BT3NDVixNQUFNLENBQUNXLGlCQUFQLEVBUHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBV0QsR0FaTSxDQUFQO0FBYUEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBaEJEOztHQUFNUCxnQjtVQUNXRSxxRDs7O01BRFhGLGdCOztBQWtCTixJQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQsRUFBYUMsS0FBYixFQUF1QjtBQUMzQyx1R0FBVUQsVUFBVixFQUF1QkMsS0FBdkI7QUFDRCxDQUZEOztBQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLFFBQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDcEJDLEtBRG9CO0FBQUEsTUFDYkMsTUFEYTs7QUFBQSxtQkFHREYsc0RBQVEsQ0FBQyxLQUFELENBSFA7QUFBQSxNQUdwQkcsTUFIb0I7QUFBQSxNQUdaQyxPQUhZOztBQUkzQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELE9BQU8sQ0FBQyxDQUFDRCxNQUFGLENBQWI7QUFBQSxHQUFuQjs7QUFFQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixVQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFqQzs7QUFDQSxVQUFJRixPQUFPLEtBQUtQLEtBQWhCLEVBQXVCO0FBQ3JCQyxjQUFNLENBQUNNLE9BQUQsQ0FBTjtBQUNEO0FBQ0YsS0FMRDs7QUFNQUcsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0wsUUFBcEM7QUFDQUEsWUFBUTtBQUNULEdBVFEsQ0FBVDtBQVVBLE1BQU1NLEVBQUUsR0FBRyxJQUFYO0FBQ0Esc0JBQ0UscUVBQUMsb0RBQUQ7QUFDRSxPQUFHLEVBQUMsT0FETjtBQUVFLE9BQUcsRUFBQyxHQUZOO0FBR0UsVUFBTSxFQUFDLEdBSFQ7QUFJRSxNQUFFLEVBQUVaLEtBQUssR0FBRyxhQUFILEdBQW1CLE9BSjlCO0FBS0UsVUFBTSxFQUFFQSxLQUFLLEdBQUdULFNBQUgsR0FBZSxJQUw5QjtBQU1FLGNBQVUsRUFBQyxvQ0FOYjtBQU9FLFVBQU0sRUFBQyxRQVBUO0FBQUEsMkJBU0UscUVBQUMsNERBQUQ7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBRTtBQUFFc0IsY0FBSSxFQUFFLENBQVI7QUFBV0MsWUFBRSxFQUFFO0FBQWYsU0FBVjtBQUErQixhQUFLLEVBQUMsUUFBckM7QUFBOEMsU0FBQyxFQUFDLElBQWhEO0FBQXFELFdBQUcsRUFBQyxVQUF6RDtBQUFBLGdDQUNFLHFFQUFDLDZDQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxrQkFBUSxNQUZWO0FBR0Usb0JBQVUsRUFDUmQsS0FBSyxHQUNELGdEQURDLEdBRUQsNkNBTlI7QUFRRSxvQkFBVSxFQUFFQSxLQUFLLEdBQUcsUUFBSCxHQUFjLE9BUmpDO0FBU0UsaUJBQU8sRUFBRUEsS0FBSyxHQUFHLEdBQUgsR0FBUyxPQVR6QjtBQVVFLG9CQUFVLEVBQUMsR0FWYjtBQUFBLGlDQVlFLHFFQUFDLHNEQUFEO0FBQU8sYUFBQyxFQUFDLElBQVQ7QUFBYyxlQUFHLEVBQUV0QixJQUFuQjtBQUF5QixrQkFBTSxFQUFFQSxJQUFJLENBQUNxQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWVFLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFnQkUscUVBQUMsMkRBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsaUJBQU8sRUFBQyxNQUhWO0FBSUUsaUJBQU8sRUFBRVgsVUFKWDtBQUtFLGNBQUksZUFBRSxxRUFBQyxxREFBRDtBQUFNLGNBQUUsRUFBRVkscURBQVY7QUFBa0IsYUFBQyxFQUFDLEdBQXBCO0FBQXdCLGFBQUMsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxSO0FBTUUsaUJBQU8sRUFBRXRCLGFBQWEsQ0FBQ2tCLEVBQUQsRUFBSyxNQUFMLENBTnhCO0FBT0UsZUFBSyxFQUFFWixLQUFLLEdBQUcsT0FBSCxHQUFhLGVBUDNCO0FBUUUsWUFBRSxFQUFDO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUEwQkUscUVBQUMscURBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFPLEVBQUMsVUFGVjtBQUdFLFlBQUUsRUFBQyxLQUhMO0FBSUUsbUJBQVM7QUFDUGEsZ0JBQUksRUFBRTtBQURDLGFBRUpuQixhQUFhLENBQUNrQixFQUFELEVBQUssS0FBTCxDQUZULENBSlg7QUFRRSxrQkFBUTtBQUFJQyxnQkFBSSxFQUFFO0FBQVYsYUFBeUJuQixhQUFhLENBQUNrQixFQUFELEVBQUssUUFBTCxDQUF0QyxDQVJWO0FBU0UsY0FBSSxFQUFDLEdBVFA7QUFVRSxlQUFLLEVBQUMsR0FWUjtBQVdFLGFBQUcsRUFBQyxNQVhOO0FBWUUsWUFBRTtBQUFJQyxnQkFBSSxFQUFFO0FBQVYsYUFBc0JuQixhQUFhLENBQUNrQixFQUFELEVBQUssTUFBTCxDQUFuQyxDQVpKO0FBYUUsbUJBQVM7QUFDUEMsZ0JBQUksRUFBRTtBQURDLGFBRUpuQixhQUFhLENBQUNrQixFQUFELEVBQUtyQixTQUFMLENBRlQsQ0FiWDtBQWlCRSxtQkFBUztBQUNQc0IsZ0JBQUksRUFBRVgsTUFBTSxHQUFHLElBQUgsR0FBVTtBQURmLGFBRUpSLGFBQWEsQ0FBQ2tCLEVBQUQsRUFBSyxPQUFMLENBRlQsQ0FqQlg7QUFxQkUseUJBQWUsRUFBQyxLQXJCbEI7QUFzQkUseUJBQWEsQ0FBQ1YsTUF0QmhCO0FBdUJFLG1CQUFTO0FBQUlXLGdCQUFJLEVBQUU7QUFBVixhQUFtQm5CLGFBQWEsQ0FBQ2tCLEVBQUQsRUFBSyxNQUFMLENBQWhDLENBdkJYO0FBd0JFLHNCQUFZLEVBQUMsTUF4QmY7QUF5QkUsb0JBQVUsRUFDUlYsTUFBTSxHQUNGLCtDQURFLEdBRUYsa0RBNUJSO0FBOEJFLG9CQUFVO0FBQ1JXLGdCQUFJLEVBQUVYLE1BQU0sR0FBRyxPQUFILEdBQWE7QUFEakIsYUFFTFIsYUFBYSxDQUFDa0IsRUFBRCxFQUFLLE9BQUwsQ0FGUixDQTlCWjtBQUFBLHFCQW1DR2QsSUFBSSxDQUFDUixHQUFMLEtBQVM7QUFBQTs7QUFBQSxnQkFBRzJCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGdCQUFhQyxJQUFiOztBQUFBLGdDQUNSLHFFQUFDLFFBQUQsa0NBQ01BLElBRE47QUFFRSxnQkFBRSxFQUFFeEIsYUFBYSxDQUFDa0IsRUFBRCxFQUFLLEdBQUwsQ0FGbkI7QUFHRSxnQkFBRTtBQUFJQyxvQkFBSSxFQUFFO0FBQVYsaUJBQWtCbkIsYUFBYSxDQUFDa0IsRUFBRCxFQUFLLEdBQUwsQ0FBL0IsQ0FISjtBQUlFLGdCQUFFLEVBQUMsR0FKTDtBQUtFLGdCQUFFLEVBQUMsR0FMTDtBQU1FLG1CQUFLLEVBQUVsQixhQUFhLENBQUNrQixFQUFELEVBQUtaLEtBQUssR0FBRyxPQUFILEdBQWFULFNBQXZCLENBTnRCO0FBT0UscUJBQU8sRUFBQyxPQVBWO0FBQUEsd0JBU0cwQjtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFUO0FBQUEsb0JBR092QixhQUhQLEVBSXVCQSxhQUp2QixFQU9VQSxhQVBWO0FBQUEsYUFuQ0gsZUFnREUscUVBQUMsZ0JBQUQ7QUFDRSxjQUFFLEVBQUVBLGFBQWEsQ0FBQ2tCLEVBQUQsRUFBSyxHQUFMLENBRG5CO0FBRUUsY0FBRTtBQUFJQyxrQkFBSSxFQUFFO0FBQVYsZUFBa0JuQixhQUFhLENBQUNrQixFQUFELEVBQUssR0FBTCxDQUEvQixDQUZKO0FBR0UsY0FBRSxFQUFDLEdBSEw7QUFJRSxjQUFFLEVBQUMsR0FKTDtBQUtFLGlCQUFLLEVBQUVsQixhQUFhLENBQUNrQixFQUFELEVBQUtaLEtBQUssR0FBRyxPQUFILEdBQWFULFNBQXZCLENBTHRCO0FBTUUsbUJBQU8sRUFBQztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtHRCxDQW5IRDs7SUFBTU0sTTtVQWtEZUgsYSxFQVVKQSxhLEVBRTRCQSxhLEVBSVRBLGEsRUFHbkJBLGEsRUFJQUEsYSxFQUl1QkEsYSxFQVN2QkEsYSxFQWlCQ0EsYSxFQUNnQkEsYSxFQUdiQSxhOzs7TUEzR2ZHLE07QUFxSFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExMDY0MTgxMGNkOTRjZmFiMTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIExpbmssXG4gIEZsZXgsXG4gIFNwYWNlcixcbiAgSW1hZ2UsXG4gIEljb24sXG4gIEljb25CdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRhaW5lciBmcm9tIFwiLi9yZXNwb25zaXZlQ29udGFpbmVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZE1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRmFHbG9iZUFmcmljYSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuY29uc3QgbG9nbyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbG9nb193ZWJfYnJhbmQuc3ZnXCIpO1xuXG5jb25zdCBNZW51SXRlbSA9ICh7IGhyZWYsIGxvY2FsZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tTGluayBrZXk9e2hyZWZ9IHsuLi57IGhyZWYsIGxvY2FsZSB9fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ3VzdG9tTGluaz5cbiAgKTtcbn07XG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuY29uc3QgTGFuZ3VhZ2VTd2l0Y2hlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIHJvdXRlci5sb2NhbGVzLm1hcCgobG9jYWxlKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsZSA9PSByb3V0ZXIubG9jYWxlID8gdW5kZWZpbmVkIDogKFxuICAgICAgPExpbmtcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBocmVmPXtgLyR7bG9jYWxlfWB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGxvY2FsZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxJY29uIGFzPXtGYUdsb2JlQWZyaWNhfSBtcj1cIjJcIiAvPiB7bG9jYWxlLnRvTG9jYWxlVXBwZXJDYXNlKCl9XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiA8cD5cIlhEXCI8L3A+O1xufTtcblxuY29uc3QgdXNlQnJlYWtwb2ludCA9IChicmVha3BvaW50LCB2YWx1ZSkgPT4ge1xuICByZXR1cm4geyBbYnJlYWtwb2ludF06IHZhbHVlIH07XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyBtZW51IH0pID0+IHtcbiAgY29uc3QgW2lzVG9wLCBzZXRUb3BdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKCFpc09wZW4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IHdpbmRvdy5zY3JvbGxZIDwgMTA7XG4gICAgICBpZiAoY3VycmVudCAhPT0gaXNUb3ApIHtcbiAgICAgICAgc2V0VG9wKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbnNjcm9sbCk7XG4gICAgb25zY3JvbGwoKTtcbiAgfSk7XG4gIGNvbnN0IGJwID0gXCJsZ1wiO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHBvcz1cImZpeGVkXCJcbiAgICAgIHRvcD1cIjBcIlxuICAgICAgaW5zZXRYPVwiMFwiXG4gICAgICBiZz17aXNUb3AgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XG4gICAgICBzaGFkb3c9e2lzVG9wID8gdW5kZWZpbmVkIDogXCJsZ1wifVxuICAgICAgdHJhbnNpdGlvbj1cImJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgMjAwbXNcIlxuICAgICAgekluZGV4PVwic3RpY2t5XCJcbiAgICA+XG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgPEZsZXggcHg9e3sgYmFzZTogOCwgbWQ6IDE2IH19IGFsaWduPVwiY2VudGVyXCIgaD1cIjI0XCIgcG9zPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8Q3VzdG9tTGlua1xuICAgICAgICAgICAgaHJlZj1cIi8jaGVyb1wiXG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17XG4gICAgICAgICAgICAgIGlzVG9wXG4gICAgICAgICAgICAgICAgPyBcIm9wYWNpdHkgZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMjAwbXNcIlxuICAgICAgICAgICAgICAgIDogXCJvcGFjaXR5IGVhc2UtaW4tb3V0IDIwMG1zLCB2aXNpYmlsaXR5IDBzIDBzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpc2liaWxpdHk9e2lzVG9wID8gXCJoaWRkZW5cIiA6IFwidW5zZXRcIn1cbiAgICAgICAgICAgIG9wYWNpdHk9e2lzVG9wID8gXCIwXCIgOiBcInVuc2V0XCJ9XG4gICAgICAgICAgICBmbGV4U2hyaW5rPVwiMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIGg9XCIxMFwiIHNyYz17bG9nb30gc3JjU2V0PXtsb2dvLnNyY1NldH0gLz5cbiAgICAgICAgICA8L0N1c3RvbUxpbms+XG4gICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBtaW5XPVwiYXV0b1wiXG4gICAgICAgICAgICBtaW5IPVwiYXV0b1wiXG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVufVxuICAgICAgICAgICAgaWNvbj17PEljb24gYXM9e01kTWVudX0gdz1cIjZcIiBoPVwiNlwiIC8+fVxuICAgICAgICAgICAgZGlzcGxheT17dXNlQnJlYWtwb2ludChicCwgXCJub25lXCIpfVxuICAgICAgICAgICAgY29sb3I9e2lzVG9wID8gXCJ3aGl0ZVwiIDogXCJicmFuZC5kZWZhdWx0XCJ9XG4gICAgICAgICAgICBtbD1cIjRcIlxuICAgICAgICAgID48L0ljb25CdXR0b24+XG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICBkaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgYmFzZTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgXCJyb3dcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcG9zaXRpb249e3sgYmFzZTogXCJhYnNvbHV0ZVwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcInN0YXRpY1wiKSB9fVxuICAgICAgICAgICAgbGVmdD1cIjBcIlxuICAgICAgICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgICAgICAgIHRvcD1cIjEwMCVcIlxuICAgICAgICAgICAgYmc9e3sgYmFzZTogXCJ3aGl0ZVwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIm5vbmVcIikgfX1cbiAgICAgICAgICAgIG92ZXJmbG93WT17e1xuICAgICAgICAgICAgICBiYXNlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zZm9ybT17e1xuICAgICAgICAgICAgICBiYXNlOiBpc09wZW4gPyBudWxsIDogXCJzY2FsZVkoMClcIixcbiAgICAgICAgICAgICAgLi4udXNlQnJlYWtwb2ludChicCwgXCJ1bnNldFwiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49XCJ0b3BcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFpc09wZW59XG4gICAgICAgICAgICBib3hTaGFkb3c9e3sgYmFzZTogXCJsZ1wiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIm5vbmVcIikgfX1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImJhc2VcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17XG4gICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMHNcIlxuICAgICAgICAgICAgICAgIDogXCJ0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMjAwbXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlzaWJpbGl0eT17e1xuICAgICAgICAgICAgICBiYXNlOiBpc09wZW4gPyBcInVuc2V0XCIgOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCBcInVuc2V0XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVudS5tYXAoKHsgbGFiZWwsIC4uLml0ZW0gfSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBteD17dXNlQnJlYWtwb2ludChicCwgXCI0XCIpfVxuICAgICAgICAgICAgICAgIHBsPXt7IGJhc2U6IFwiOFwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIjBcIikgfX1cbiAgICAgICAgICAgICAgICBwdD1cIjRcIlxuICAgICAgICAgICAgICAgIHBiPVwiNFwiXG4gICAgICAgICAgICAgICAgY29sb3I9e3VzZUJyZWFrcG9pbnQoYnAsIGlzVG9wID8gXCJ3aGl0ZVwiIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlclxuICAgICAgICAgICAgICBteD17dXNlQnJlYWtwb2ludChicCwgXCI0XCIpfVxuICAgICAgICAgICAgICBwbD17eyBiYXNlOiBcIjhcIiwgLi4udXNlQnJlYWtwb2ludChicCwgXCIwXCIpIH19XG4gICAgICAgICAgICAgIHB0PVwiNFwiXG4gICAgICAgICAgICAgIHBiPVwiNFwiXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VCcmVha3BvaW50KGJwLCBpc1RvcCA/IFwid2hpdGVcIiA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==