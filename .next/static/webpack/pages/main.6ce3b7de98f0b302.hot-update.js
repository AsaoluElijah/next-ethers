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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider1 = ref5[0], setprovider = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), appIsReady = ref1[0], setappIsReady = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), haveMetamask = ref2[0], sethaveMetamask = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref3[0], setclient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), customMsg = ref4[0], setcustomMsg = ref4[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(provider) {\n            var accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return provider.listAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(provider) {\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx1.next = 3;\n                            break;\n                        }\n                        _ctx1.next = 3;\n                        return provider.send(\"eth_requestAccounts\", []).then(_asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var ref, chainId, networkName;\n                            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return provider.getNetwork();\n                                    case 2:\n                                        ref = _ctx.sent;\n                                        chainId = ref.chainId;\n                                        networkName = ref.networkName;\n                                        // Misc. Check if user is not connected to a particular network\n                                        if (networkName !== \"matic\" && chainId !== 137) {}\n                                        checkConnection(provider);\n                                    case 7:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })));\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function connectWeb3(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const signMessage = (signer) => {\n    //   signer.signMessage(\"Hello World\").then((result) => {\n    //     console.log(result);\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var _provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n        setprovider(_provider);\n        setappIsReady(true);\n        var signer = _provider.getSigner();\n        if (window.ethereum) {\n            sethaveMetamask(true);\n        } else {\n            sethaveMetamask(false);\n        }\n        // window.ethereum.on(\"accountsChanged\", async () => {\n        //   await checkConnection();\n        // });\n        checkConnection(_provider);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: haveMetamask === false ? \"You have to download metamask\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"tqVtCU+UgdyhAxDEs3m1S8QzGZ4=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFeEMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUdBLFNBQVM7Ozs7Ozs0R0FFdkMrQixDQUFFOzs7Ozs0R0FDRkwsQ0FBTTtvQ0FBQ1MsSUFBSSxFQUFDLENBQVE7b0NBQUNkLFNBQVMsRUFBQyxDQUFjOzhDQUFDLENBRS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztHQXBISy9CLElBQUk7S0FBSkEsSUFBSTtBQXNIViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4uanM/YWE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0cHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcHBJc1JlYWR5LCBzZXRhcHBJc1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaGF2ZU1ldGFtYXNrLCBzZXRoYXZlTWV0YW1hc2tdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjbGllbnQsIHNldGNsaWVudF0gPSB1c2VTdGF0ZSh7XG4gICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBbY3VzdG9tTXNnLCBzZXRjdXN0b21Nc2ddID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2hlY2tDb25uZWN0aW9uID0gYXN5bmMgKHByb3ZpZGVyKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5saXN0QWNjb3VudHMoKTtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2ViMyA9IGFzeW5jIChwcm92aWRlcikgPT4ge1xuICAgIGlmIChwcm92aWRlcikge1xuICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoYWluSWQsIG5ldHdvcmtOYW1lIH0gPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XG5cbiAgICAgICAgLy8gTWlzYy4gQ2hlY2sgaWYgdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIGEgcGFydGljdWxhciBuZXR3b3JrXG4gICAgICAgIGlmIChuZXR3b3JrTmFtZSAhPT0gXCJtYXRpY1wiICYmIGNoYWluSWQgIT09IDEzNykge1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tDb25uZWN0aW9uKHByb3ZpZGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCBzaWduTWVzc2FnZSA9IChzaWduZXIpID0+IHtcbiAgLy8gICBzaWduZXIuc2lnbk1lc3NhZ2UoXCJIZWxsbyBXb3JsZFwiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBfcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBzZXRwcm92aWRlcihfcHJvdmlkZXIpO1xuICAgIHNldGFwcElzUmVhZHkodHJ1ZSk7XG5cbiAgICBjb25zdCBzaWduZXIgPSBfcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldGhhdmVNZXRhbWFzayhmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gd2luZG93LmV0aGVyZXVtLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcbiAgICAvLyAgIGF3YWl0IGNoZWNrQ29ubmVjdGlvbigpO1xuICAgIC8vIH0pO1xuXG4gICAgY2hlY2tDb25uZWN0aW9uKF9wcm92aWRlcik7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZnJlbi1uYXYgZC1mbGV4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk1FTlVfPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBjb25uZWN0LWJ0blwiIG9uQ2xpY2s9e2Nvbm5lY3RXZWIzKHByb3ZpZGVyKX0+XG4gICAgICAgICAgICAgIHtjbGllbnQuaXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtjbGllbnQuYWRkcmVzcy5zbGljZSgwLCA0KX0uLi5cbiAgICAgICAgICAgICAgICAgIHtjbGllbnQuYWRkcmVzcy5zbGljZSgzOCwgNDIpfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+Q29ubmVjdCBXYWxsZXQ8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdHctYnRuXCI+VFc8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXhcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPHA+e2hhdmVNZXRhbWFzayA9PT0gZmFsc2UgPyBcIllvdSBoYXZlIHRvIGRvd25sb2FkIG1ldGFtYXNrXCIgOiBcIlwifTwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPkF3ZXNvbWUgRGFwcCDwn5qAPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHsvKiA8cD5CYWxhbmNlIGlzIHtiYWxhbmNlfTwvcD4gKi99XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cIm1pbnQtZm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW50LXZhbHVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXNzYWdlIHRvIHNpZ25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGN1c3RvbU1zZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21Nc2cgPT0gMCA/IFwiXCIgOiBjdXN0b21Nc2d9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbWludC1idG5cIj5cbiAgICAgICAgICAgICAgU2lnbiBNZXNzYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJNYWluIiwicHJvdmlkZXIiLCJzZXRwcm92aWRlciIsImFwcElzUmVhZHkiLCJzZXRhcHBJc1JlYWR5IiwiaGF2ZU1ldGFtYXNrIiwic2V0aGF2ZU1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzZXRjbGllbnQiLCJjdXN0b21Nc2ciLCJzZXRjdXN0b21Nc2ciLCJjaGVja0Nvbm5lY3Rpb24iLCJhY2NvdW50cyIsImxpc3RBY2NvdW50cyIsImxlbmd0aCIsImFkZHJlc3MiLCJjb25uZWN0V2ViMyIsInNlbmQiLCJ0aGVuIiwiY2hhaW5JZCIsIm5ldHdvcmtOYW1lIiwiZ2V0TmV0d29yayIsIl9wcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJidXR0b24iLCJzZWN0aW9uIiwibWFpbiIsInAiLCJoMSIsImJyIiwiZm9ybSIsImFjdGlvbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});