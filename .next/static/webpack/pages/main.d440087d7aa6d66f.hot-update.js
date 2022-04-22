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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider1 = ref[0], setprovider = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), appIsReady = ref1[0], setappIsReady = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), haveMetamask = ref2[0], sethaveMetamask = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref3[0], setclient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), customMsg = ref4[0], setcustomMsg = ref4[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_provider) {\n            var accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _provider.listAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection(_provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(provider) {\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx1.next = 3;\n                            break;\n                        }\n                        _ctx1.next = 3;\n                        return provider.send(\"eth_requestAccounts\", []).then(_asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        checkConnection(provider);\n                                    case 1:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })));\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function connectWeb3(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const signMessage = (signer) => {\n    //   signer.signMessage(\"Hello World\").then((result) => {\n    //     console.log(result);\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // const _provider = new ethers.providers.Web3Provider(window.ethereum);\n    // setprovider(_provider);\n    // setappIsReady(true);\n    // const signer = _provider.getSigner();\n    // if (window.ethereum) {\n    //   sethaveMetamask(true);\n    // } else {\n    //   sethaveMetamask(false);\n    // }\n    // // window.ethereum.on(\"accountsChanged\", async () => {\n    // //   await checkConnection();\n    // // });\n    // checkConnection(_provider);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: function() {\n                                        return connectWeb3(provider1);\n                                    },\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: haveMetamask === false ? \"You have to download metamask\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"tqVtCU+UgdyhAxDEs3m1S8QzGZ4=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBN0dLdEIsSUFBSTtLQUFKQSxJQUFJO0FBK0dWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcz9hYTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRwcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FwcElzUmVhZHksIHNldGFwcElzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtoYXZlTWV0YW1hc2ssIHNldGhhdmVNZXRhbWFza10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NsaWVudCwgc2V0Y2xpZW50XSA9IHVzZVN0YXRlKHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IFtjdXN0b21Nc2csIHNldGN1c3RvbU1zZ10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjaGVja0Nvbm5lY3Rpb24gPSBhc3luYyAoX3Byb3ZpZGVyKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBfcHJvdmlkZXIubGlzdEFjY291bnRzKCk7XG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRjbGllbnQoe1xuICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdlYjMgPSBhc3luYyAocHJvdmlkZXIpID0+IHtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgY2hlY2tDb25uZWN0aW9uKHByb3ZpZGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCBzaWduTWVzc2FnZSA9IChzaWduZXIpID0+IHtcbiAgLy8gICBzaWduZXIuc2lnbk1lc3NhZ2UoXCJIZWxsbyBXb3JsZFwiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCBfcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAvLyBzZXRwcm92aWRlcihfcHJvdmlkZXIpO1xuICAgIC8vIHNldGFwcElzUmVhZHkodHJ1ZSk7XG4gICAgLy8gY29uc3Qgc2lnbmVyID0gX3Byb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIC8vIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAvLyAgIHNldGhhdmVNZXRhbWFzayh0cnVlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgc2V0aGF2ZU1ldGFtYXNrKGZhbHNlKTtcbiAgICAvLyB9XG4gICAgLy8gLy8gd2luZG93LmV0aGVyZXVtLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcbiAgICAvLyAvLyAgIGF3YWl0IGNoZWNrQ29ubmVjdGlvbigpO1xuICAgIC8vIC8vIH0pO1xuICAgIC8vIGNoZWNrQ29ubmVjdGlvbihfcHJvdmlkZXIpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZyZW4tbmF2IGQtZmxleFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5NRU5VXzwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb25uZWN0LWJ0blwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbm5lY3RXZWIzKHByb3ZpZGVyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NsaWVudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDAsIDQpfS4uLlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDM4LCA0Mil9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5Db25uZWN0IFdhbGxldDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHR3LWJ0blwiPlRXPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4XCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxwPntoYXZlTWV0YW1hc2sgPT09IGZhbHNlID8gXCJZb3UgaGF2ZSB0byBkb3dubG9hZCBtZXRhbWFza1wiIDogXCJcIn08L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Bd2Vzb21lIERhcHAg8J+agDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1kZXNjXCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXV0ZW1cbiAgICAgICAgICAgIHN1c2NpcGl0IHBlcmZlcmVuZGlzIHRlbXBvcmUgPGJyIC8+IGV2ZW5pZXQgaWQgcGFyaWF0dXIgZXJyb3JcbiAgICAgICAgICAgIGRlc2VydW50IHBsYWNlYXQgbGF1ZGFudGl1bSBkZWJpdGlzLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJtaW50LWZvcm1cIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWludC12YWx1ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWVzc2FnZSB0byBzaWduXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRjdXN0b21Nc2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tTXNnID09IDAgPyBcIlwiIDogY3VzdG9tTXNnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIG1pbnQtYnRuXCI+XG4gICAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiTWFpbiIsInByb3ZpZGVyIiwic2V0cHJvdmlkZXIiLCJhcHBJc1JlYWR5Iiwic2V0YXBwSXNSZWFkeSIsImhhdmVNZXRhbWFzayIsInNldGhhdmVNZXRhbWFzayIsImlzQ29ubmVjdGVkIiwiY2xpZW50Iiwic2V0Y2xpZW50IiwiY3VzdG9tTXNnIiwic2V0Y3VzdG9tTXNnIiwiY2hlY2tDb25uZWN0aW9uIiwiX3Byb3ZpZGVyIiwiYWNjb3VudHMiLCJsaXN0QWNjb3VudHMiLCJsZW5ndGgiLCJhZGRyZXNzIiwiY29ubmVjdFdlYjMiLCJzZW5kIiwidGhlbiIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwib25DbGljayIsInNsaWNlIiwic2VjdGlvbiIsIm1haW4iLCJwIiwiaDEiLCJiciIsImZvcm0iLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});