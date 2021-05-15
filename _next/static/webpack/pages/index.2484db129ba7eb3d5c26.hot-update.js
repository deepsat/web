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
  var locales = {
    pl: "",
    en: "en"
  };
  var curr = router.route.slice(-2);
  return locales.map(function (locale) {
    console.log(locale);
    return locale == curr ? undefined : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Link"], _objectSpread(_objectSpread({}, props), {}, {
      href: "/".concat(locale),
      display: "flex",
      alignItems: "center",
      locale: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        as: react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaGlobeAfrica"],
        mr: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), " ", locale.toLocaleUpperCase()]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this);
  });
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
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
            lineNumber: 103,
            columnNumber: 19
          }, _this),
          display: useBreakpoint(bp, "none"),
          color: isTop ? "white" : "brand.default",
          ml: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
              lineNumber: 144,
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
            lineNumber: 156,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsibG9nbyIsInJlcXVpcmUiLCJNZW51SXRlbSIsImhyZWYiLCJsb2NhbGUiLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvY2FsZXMiLCJwbCIsImVuIiwiY3VyciIsInJvdXRlIiwic2xpY2UiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiRmFHbG9iZUFmcmljYSIsInRvTG9jYWxlVXBwZXJDYXNlIiwidXNlQnJlYWtwb2ludCIsImJyZWFrcG9pbnQiLCJ2YWx1ZSIsIkhlYWRlciIsIm1lbnUiLCJ1c2VTdGF0ZSIsImlzVG9wIiwic2V0VG9wIiwiaXNPcGVuIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJ1c2VFZmZlY3QiLCJvbnNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnAiLCJiYXNlIiwibWQiLCJzcmNTZXQiLCJNZE1lbnUiLCJsYWJlbCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsaUVBQUQsQ0FBcEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEM7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUN6RCxzQkFDRSxxRUFBQyw2Q0FBRCxnREFBMkI7QUFBRUgsUUFBSSxFQUFKQSxJQUFGO0FBQVFDLFVBQU0sRUFBTkE7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QSxhLEVBU3ZCQSxhLEVBaUJDQSxhLEVBQ2dCQSxhLEVBR2JBLGE7OztNQTNHZkcsTTtBQXFIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQ4NGRiMTI5YmE3ZWIzZDVjMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgTGluayxcbiAgRmxleCxcbiAgU3BhY2VyLFxuICBJbWFnZSxcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZXNwb25zaXZlQ29udGFpbmVyIGZyb20gXCIuL3Jlc3BvbnNpdmVDb250YWluZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1kTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSBcIi4vbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBGYUdsb2JlQWZyaWNhIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5jb25zdCBsb2dvID0gcmVxdWlyZShcIi4uL2ltYWdlcy9sb2dvX3dlYl9icmFuZC5zdmdcIik7XG5cbmNvbnN0IE1lbnVJdGVtID0gKHsgaHJlZiwgbG9jYWxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDdXN0b21MaW5rIGtleT17aHJlZn0gey4uLnsgaHJlZiwgbG9jYWxlIH19IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DdXN0b21MaW5rPlxuICApO1xufTtcbk1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5jb25zdCBMYW5ndWFnZVN3aXRjaGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBsb2NhbGVzID0ge1xuICAgIHBsOiBcIlwiLFxuICAgIGVuOiBcImVuXCIsXG4gIH07XG4gIGNvbnN0IGN1cnIgPSByb3V0ZXIucm91dGUuc2xpY2UoLTIpO1xuICByZXR1cm4gbG9jYWxlcy5tYXAoKGxvY2FsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxvY2FsZSk7XG4gICAgcmV0dXJuIGxvY2FsZSA9PSBjdXJyID8gdW5kZWZpbmVkIDogKFxuICAgICAgPExpbmtcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBocmVmPXtgLyR7bG9jYWxlfWB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGxvY2FsZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxJY29uIGFzPXtGYUdsb2JlQWZyaWNhfSBtcj1cIjJcIiAvPiB7bG9jYWxlLnRvTG9jYWxlVXBwZXJDYXNlKCl9XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1c2VCcmVha3BvaW50ID0gKGJyZWFrcG9pbnQsIHZhbHVlKSA9PiB7XG4gIHJldHVybiB7IFticmVha3BvaW50XTogdmFsdWUgfTtcbn07XG5cbmNvbnN0IEhlYWRlciA9ICh7IG1lbnUgfSkgPT4ge1xuICBjb25zdCBbaXNUb3AsIHNldFRvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+IHNldE9wZW4oIWlzT3Blbik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gd2luZG93LnNjcm9sbFkgPCAxMDtcbiAgICAgIGlmIChjdXJyZW50ICE9PSBpc1RvcCkge1xuICAgICAgICBzZXRUb3AoY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uc2Nyb2xsKTtcbiAgICBvbnNjcm9sbCgpO1xuICB9KTtcbiAgY29uc3QgYnAgPSBcImxnXCI7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcG9zPVwiZml4ZWRcIlxuICAgICAgdG9wPVwiMFwiXG4gICAgICBpbnNldFg9XCIwXCJcbiAgICAgIGJnPXtpc1RvcCA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cbiAgICAgIHNoYWRvdz17aXNUb3AgPyB1bmRlZmluZWQgOiBcImxnXCJ9XG4gICAgICB0cmFuc2l0aW9uPVwiYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dCAyMDBtc1wiXG4gICAgICB6SW5kZXg9XCJzdGlja3lcIlxuICAgID5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICA8RmxleCBweD17eyBiYXNlOiA4LCBtZDogMTYgfX0gYWxpZ249XCJjZW50ZXJcIiBoPVwiMjRcIiBwb3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxDdXN0b21MaW5rXG4gICAgICAgICAgICBocmVmPVwiLyNoZXJvXCJcbiAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtcbiAgICAgICAgICAgICAgaXNUb3BcbiAgICAgICAgICAgICAgICA/IFwib3BhY2l0eSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAyMDBtc1wiXG4gICAgICAgICAgICAgICAgOiBcIm9wYWNpdHkgZWFzZS1pbi1vdXQgMjAwbXMsIHZpc2liaWxpdHkgMHMgMHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlzaWJpbGl0eT17aXNUb3AgPyBcImhpZGRlblwiIDogXCJ1bnNldFwifVxuICAgICAgICAgICAgb3BhY2l0eT17aXNUb3AgPyBcIjBcIiA6IFwidW5zZXRcIn1cbiAgICAgICAgICAgIGZsZXhTaHJpbms9XCIwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2UgaD1cIjEwXCIgc3JjPXtsb2dvfSBzcmNTZXQ9e2xvZ28uc3JjU2V0fSAvPlxuICAgICAgICAgIDwvQ3VzdG9tTGluaz5cbiAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG1pblc9XCJhdXRvXCJcbiAgICAgICAgICAgIG1pbkg9XCJhdXRvXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW59XG4gICAgICAgICAgICBpY29uPXs8SWNvbiBhcz17TWRNZW51fSB3PVwiNlwiIGg9XCI2XCIgLz59XG4gICAgICAgICAgICBkaXNwbGF5PXt1c2VCcmVha3BvaW50KGJwLCBcIm5vbmVcIil9XG4gICAgICAgICAgICBjb2xvcj17aXNUb3AgPyBcIndoaXRlXCIgOiBcImJyYW5kLmRlZmF1bHRcIn1cbiAgICAgICAgICAgIG1sPVwiNFwiXG4gICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgd3JhcD1cIndyYXBcIlxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17e1xuICAgICAgICAgICAgICBiYXNlOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCBcInJvd1wiKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwb3NpdGlvbj17eyBiYXNlOiBcImFic29sdXRlXCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwic3RhdGljXCIpIH19XG4gICAgICAgICAgICBsZWZ0PVwiMFwiXG4gICAgICAgICAgICByaWdodD1cIjBcIlxuICAgICAgICAgICAgdG9wPVwiMTAwJVwiXG4gICAgICAgICAgICBiZz17eyBiYXNlOiBcIndoaXRlXCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwibm9uZVwiKSB9fVxuICAgICAgICAgICAgb3ZlcmZsb3dZPXt7XG4gICAgICAgICAgICAgIGJhc2U6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIHVuZGVmaW5lZCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNmb3JtPXt7XG4gICAgICAgICAgICAgIGJhc2U6IGlzT3BlbiA/IG51bGwgOiBcInNjYWxlWSgwKVwiLFxuICAgICAgICAgICAgICAuLi51c2VCcmVha3BvaW50KGJwLCBcInVuc2V0XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj1cInRvcFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17IWlzT3Blbn1cbiAgICAgICAgICAgIGJveFNoYWRvdz17eyBiYXNlOiBcImxnXCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwibm9uZVwiKSB9fVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiYmFzZVwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtcbiAgICAgICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICAgICAgPyBcInRyYW5zZm9ybSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAwc1wiXG4gICAgICAgICAgICAgICAgOiBcInRyYW5zZm9ybSBlYXNlLWluLW91dCAyMDBtcywgdmlzaWJpbGl0eSAwcyAyMDBtc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aXNpYmlsaXR5PXt7XG4gICAgICAgICAgICAgIGJhc2U6IGlzT3BlbiA/IFwidW5zZXRcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwidW5zZXRcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51Lm1hcCgoeyBsYWJlbCwgLi4uaXRlbSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAgIG14PXt1c2VCcmVha3BvaW50KGJwLCBcIjRcIil9XG4gICAgICAgICAgICAgICAgcGw9e3sgYmFzZTogXCI4XCIsIC4uLnVzZUJyZWFrcG9pbnQoYnAsIFwiMFwiKSB9fVxuICAgICAgICAgICAgICAgIHB0PVwiNFwiXG4gICAgICAgICAgICAgICAgcGI9XCI0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj17dXNlQnJlYWtwb2ludChicCwgaXNUb3AgPyBcIndoaXRlXCIgOiB1bmRlZmluZWQpfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyXG4gICAgICAgICAgICAgIG14PXt1c2VCcmVha3BvaW50KGJwLCBcIjRcIil9XG4gICAgICAgICAgICAgIHBsPXt7IGJhc2U6IFwiOFwiLCAuLi51c2VCcmVha3BvaW50KGJwLCBcIjBcIikgfX1cbiAgICAgICAgICAgICAgcHQ9XCI0XCJcbiAgICAgICAgICAgICAgcGI9XCI0XCJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUJyZWFrcG9pbnQoYnAsIGlzVG9wID8gXCJ3aGl0ZVwiIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9