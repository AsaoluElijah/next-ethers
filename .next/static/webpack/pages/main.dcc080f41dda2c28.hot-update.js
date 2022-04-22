"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sign */ \"./utils/sign.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), haveMetamask = ref[0], sethaveMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref1[0], setclient = ref1[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        sethaveMetamask(true);\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 9:\n                        {\n                            sethaveMetamask(false);\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        setclient({\n                            isConnected: true,\n                            address: accounts[0]\n                        });\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function connectWeb3() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: connectWeb3,\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: !haveMetamask && \"You have to download metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: _utils_sign__WEBPACK_IMPORTED_MODULE_3__.signMessage,\n                            type: \"button\",\n                            className: \"btn mint-btn\",\n                            children: \"Sign Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"btn connect-btn\",\n                            onClick: connectWeb3,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"qfoKW/OJEUbbtoN/AjapFSOFMsI=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt3R0FJckJOLENBQUc7c0hBQ0RJLENBQU07b0NBQUNMLFNBQVMsRUFBQyxDQUFZOzhDQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl0Q1EsQ0FBTztnQkFBQ1IsU0FBUyxFQUFDLENBQWtCO3NHQUNsQ1MsQ0FBSTs7b0dBQ0ZDLENBQUM7dUNBQUczQixZQUFZLElBQUksQ0FBK0I7Ozs7OztvR0FDbkQ0QixDQUFFOzRCQUFDWCxTQUFTLEVBQUMsQ0FBWTtzQ0FBQyxDQUFjOzs7Ozs7b0dBRXhDVSxDQUFDOzRCQUFDVixTQUFTLEVBQUMsQ0FBVzs7Z0NBQUMsQ0FFTTs0R0FBQ1ksQ0FBRTs7Ozs7Z0NBQUcsQ0FFckM7Ozs7Ozs7d0JBQ0MxQixNQUFNLENBQUNELFdBQVcsK0VBQ2hCb0IsQ0FBTTs0QkFDTEMsT0FBTyxFQUFFekIsb0RBQVc7NEJBQ3BCZ0MsSUFBSSxFQUFDLENBQVE7NEJBQ2JiLFNBQVMsRUFBQyxDQUFjO3NDQUN6QixDQUVEOzs7OztnSEFFQ0ssQ0FBTTs0QkFBQ0wsU0FBUyxFQUFDLENBQWlCOzRCQUFDTSxPQUFPLEVBQUVWLFdBQVc7c0NBQUUsQ0FFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBeEdLZCxJQUFJO0tBQUpBLElBQUk7QUEwR1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluLmpzP2FhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbk1lc3NhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvc2lnblwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbaGF2ZU1ldGFtYXNrLCBzZXRoYXZlTWV0YW1hc2tdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2NsaWVudCwgc2V0Y2xpZW50XSA9IHVzZVN0YXRlKHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSk7XG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXRjbGllbnQoe1xuICAgICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldGNsaWVudCh7XG4gICAgICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0aGF2ZU1ldGFtYXNrKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdlYjMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1ldGFtYXNrIG5vdCBkZXRlY3RlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgfSk7XG5cbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gbWV0YW1hc2tcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrQ29ubmVjdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmcmVuLW5hdiBkLWZsZXhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+TUVOVV88L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gY29ubmVjdC1idG5cIiBvbkNsaWNrPXtjb25uZWN0V2ViM30+XG4gICAgICAgICAgICAgIHtjbGllbnQuaXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtjbGllbnQuYWRkcmVzcy5zbGljZSgwLCA0KX0uLi5cbiAgICAgICAgICAgICAgICAgIHtjbGllbnQuYWRkcmVzcy5zbGljZSgzOCwgNDIpfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+Q29ubmVjdCBXYWxsZXQ8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB0dy1idG5cIj5UVzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleFwiPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8cD57IWhhdmVNZXRhbWFzayAmJiBcIllvdSBoYXZlIHRvIGRvd25sb2FkIG1ldGFtYXNrXCJ9PC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+QXdlc29tZSBEYXBwIPCfmoA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1kZXNjXCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXV0ZW1cbiAgICAgICAgICAgIHN1c2NpcGl0IHBlcmZlcmVuZGlzIHRlbXBvcmUgPGJyIC8+IGV2ZW5pZXQgaWQgcGFyaWF0dXIgZXJyb3JcbiAgICAgICAgICAgIGRlc2VydW50IHBsYWNlYXQgbGF1ZGFudGl1bSBkZWJpdGlzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7Y2xpZW50LmlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaWduTWVzc2FnZX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBtaW50LWJ0blwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCIgb25DbGljaz17Y29ubmVjdFdlYjN9PlxuICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNpZ25NZXNzYWdlIiwiTWFpbiIsImhhdmVNZXRhbWFzayIsInNldGhhdmVNZXRhbWFzayIsImlzQ29ubmVjdGVkIiwiY2xpZW50Iiwic2V0Y2xpZW50IiwiY2hlY2tDb25uZWN0aW9uIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsIndpbmRvdyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJhZGRyZXNzIiwiY29ubmVjdFdlYjMiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJidXR0b24iLCJvbkNsaWNrIiwic2xpY2UiLCJzZWN0aW9uIiwibWFpbiIsInAiLCJoMSIsImJyIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});