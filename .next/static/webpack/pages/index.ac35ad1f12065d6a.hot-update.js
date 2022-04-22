"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sign */ \"./utils/sign.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), haveMetamask = ref[0], sethaveMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref1[0], setclient = ref1[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        sethaveMetamask(true);\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 9:\n                        {\n                            sethaveMetamask(false);\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        setclient({\n                            isConnected: true,\n                            address: accounts[0]\n                        });\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function connectWeb3() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: connectWeb3,\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: !haveMetamask && \"You have to download metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                    children: \"You're connected ✅\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: _utils_sign__WEBPACK_IMPORTED_MODULE_3__.signMessage,\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"btn connect-btn\",\n                            onClick: connectWeb3,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Index, \"qfoKW/OJEUbbtoN/AjapFSOFMsI=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7d0dBSXJCTixDQUFHO3NIQUNESSxDQUFNO29DQUFDTCxTQUFTLEVBQUMsQ0FBWTs4Q0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJdENRLENBQU87Z0JBQUNSLFNBQVMsRUFBQyxDQUFrQjtzR0FDbENTLENBQUk7O29HQUNGQyxDQUFDO3VDQUFHM0IsWUFBWSxJQUFJLENBQStCOzs7Ozs7b0dBQ25ENEIsQ0FBRTs0QkFBQ1gsU0FBUyxFQUFDLENBQVk7c0NBQUMsQ0FBYzs7Ozs7O29HQUVyQ1UsQ0FBRjs0QkFBQ1YsU0FBUyxFQUFDLENBQVc7O2dDQUFDLENBRU07NEdBQUNZLENBQUU7Ozs7O2dDQUFHLENBRXJDOzs7Ozs7O3dCQUNDMUIsTUFBTSxDQUFDRCxXQUFXOzs0R0FFZDRCLENBQUU7OENBQUMsQ0FBa0I7Ozs7Ozs0R0FDckJSLENBQU07b0NBQ0xDLE9BQU8sRUFBRXpCLG9EQUFXO29DQUNwQmlDLElBQUksRUFBQyxDQUFRO29DQUNiZCxTQUFTLEVBQUMsQ0FBYzs4Q0FDekIsQ0FFRDs7Ozs7Ozt1SEFHREssQ0FBTTs0QkFBQ0wsU0FBUyxFQUFDLENBQWlCOzRCQUFDTSxPQUFPLEVBQUVWLFdBQVc7c0NBQUUsQ0FFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBM0dLZCxLQUFLO0tBQUxBLEtBQUs7QUE2R1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25NZXNzYWdlIH0gZnJvbSBcIi4uL3V0aWxzL3NpZ25cIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtoYXZlTWV0YW1hc2ssIHNldGhhdmVNZXRhbWFza10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbY2xpZW50LCBzZXRjbGllbnRdID0gdXNlU3RhdGUoe1xuICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgY2hlY2tDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIHNldGhhdmVNZXRhbWFzayh0cnVlKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldGNsaWVudCh7XG4gICAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2soZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2ViMyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KTtcblxuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tDb25uZWN0aW9uKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZyZW4tbmF2IGQtZmxleFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5NRU5VXzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBjb25uZWN0LWJ0blwiIG9uQ2xpY2s9e2Nvbm5lY3RXZWIzfT5cbiAgICAgICAgICAgICAge2NsaWVudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDAsIDQpfS4uLlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDM4LCA0Mil9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5Db25uZWN0IFdhbGxldDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3LWJ0blwiPlRXPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4XCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxwPnshaGF2ZU1ldGFtYXNrICYmIFwiWW91IGhhdmUgdG8gZG93bmxvYWQgbWV0YW1hc2tcIn08L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Bd2Vzb21lIERhcHAg8J+agDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtjbGllbnQuaXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDQ+WW91J3JlIGNvbm5lY3RlZCDinIU8L2g0PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG1pbnQtYnRuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBjb25uZWN0LWJ0blwiIG9uQ2xpY2s9e2Nvbm5lY3RXZWIzfT5cbiAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2lnbk1lc3NhZ2UiLCJJbmRleCIsImhhdmVNZXRhbWFzayIsInNldGhhdmVNZXRhbWFzayIsImlzQ29ubmVjdGVkIiwiY2xpZW50Iiwic2V0Y2xpZW50IiwiY2hlY2tDb25uZWN0aW9uIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsIndpbmRvdyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJhZGRyZXNzIiwiY29ubmVjdFdlYjMiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJidXR0b24iLCJvbkNsaWNrIiwic2xpY2UiLCJzZWN0aW9uIiwibWFpbiIsInAiLCJoMSIsImJyIiwiaDQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});