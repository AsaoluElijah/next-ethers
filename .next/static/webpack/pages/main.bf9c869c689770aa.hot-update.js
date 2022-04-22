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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider1 = ref5[0], setprovider = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), appIsReady = ref1[0], setappIsReady = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), haveMetamask = ref2[0], sethaveMetamask = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref3[0], setclient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), customMsg = ref4[0], setcustomMsg = ref4[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(provider) {\n            var accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return provider.listAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(provider) {\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx1.next = 3;\n                            break;\n                        }\n                        _ctx1.next = 3;\n                        return provider.send(\"eth_requestAccounts\", []).then(_asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var ref, chainId, networkName;\n                            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return provider.getNetwork();\n                                    case 2:\n                                        ref = _ctx.sent;\n                                        chainId = ref.chainId;\n                                        networkName = ref.networkName;\n                                        // Misc. Check if user is not connected to a particular network\n                                        if (networkName !== \"matic\" && chainId !== 137) {}\n                                        checkConnection(provider);\n                                    case 7:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })));\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function connectWeb3(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const signMessage = (signer) => {\n    //   signer.signMessage(\"Hello World\").then((result) => {\n    //     console.log(result);\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // const _provider = new ethers.providers.Web3Provider(window.ethereum);\n    // setprovider(_provider);\n    // setappIsReady(true);\n    // const signer = _provider.getSigner();\n    // if (window.ethereum) {\n    //   sethaveMetamask(true);\n    // } else {\n    //   sethaveMetamask(false);\n    // }\n    // // window.ethereum.on(\"accountsChanged\", async () => {\n    // //   await checkConnection();\n    // // });\n    // checkConnection(_provider);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: function() {\n                                        return connectWeb3(provider1);\n                                    },\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: haveMetamask === false ? \"You have to download metamask\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"tqVtCU+UgdyhAxDEs3m1S8QzGZ4=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVBDLENBQUM7d0NBQUtoQyxNQUFNLENBQU5BLFlBQVksQ0FBQ2dDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOztvQ0FDNUNBLEtBQUssRUFBRW5DLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFHQSxTQUFTOzs7Ozs7NEdBRXZDMEIsQ0FBRTs7Ozs7NEdBQ0ZQLENBQU07b0NBQUNXLElBQUksRUFBQyxDQUFRO29DQUFDaEIsU0FBUyxFQUFDLENBQWM7OENBQUMsQ0FFL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBbkhLeEIsSUFBSTtLQUFKQSxJQUFJO0FBcUhWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcz9hYTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRwcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FwcElzUmVhZHksIHNldGFwcElzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtoYXZlTWV0YW1hc2ssIHNldGhhdmVNZXRhbWFza10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NsaWVudCwgc2V0Y2xpZW50XSA9IHVzZVN0YXRlKHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IFtjdXN0b21Nc2csIHNldGN1c3RvbU1zZ10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjaGVja0Nvbm5lY3Rpb24gPSBhc3luYyAocHJvdmlkZXIpID0+IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByb3ZpZGVyLmxpc3RBY2NvdW50cygpO1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRjbGllbnQoe1xuICAgICAgICBpc0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXZWIzID0gYXN5bmMgKHByb3ZpZGVyKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhaW5JZCwgbmV0d29ya05hbWUgfSA9IGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKTtcblxuICAgICAgICAvLyBNaXNjLiBDaGVjayBpZiB1c2VyIGlzIG5vdCBjb25uZWN0ZWQgdG8gYSBwYXJ0aWN1bGFyIG5ldHdvcmtcbiAgICAgICAgaWYgKG5ldHdvcmtOYW1lICE9PSBcIm1hdGljXCIgJiYgY2hhaW5JZCAhPT0gMTM3KSB7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja0Nvbm5lY3Rpb24ocHJvdmlkZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNvbnN0IHNpZ25NZXNzYWdlID0gKHNpZ25lcikgPT4ge1xuICAvLyAgIHNpZ25lci5zaWduTWVzc2FnZShcIkhlbGxvIFdvcmxkXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnN0IF9wcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIC8vIHNldHByb3ZpZGVyKF9wcm92aWRlcik7XG4gICAgLy8gc2V0YXBwSXNSZWFkeSh0cnVlKTtcbiAgICAvLyBjb25zdCBzaWduZXIgPSBfcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgLy8gaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgIC8vICAgc2V0aGF2ZU1ldGFtYXNrKHRydWUpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzZXRoYXZlTWV0YW1hc2soZmFsc2UpO1xuICAgIC8vIH1cbiAgICAvLyAvLyB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIC8vIC8vICAgYXdhaXQgY2hlY2tDb25uZWN0aW9uKCk7XG4gICAgLy8gLy8gfSk7XG4gICAgLy8gY2hlY2tDb25uZWN0aW9uKF9wcm92aWRlcik7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZnJlbi1uYXYgZC1mbGV4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk1FTlVfPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdlYjMocHJvdmlkZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2xpZW50LmlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMzgsIDQyKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PkNvbm5lY3QgV2FsbGV0PC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdHctYnRuXCI+VFc8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXhcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPHA+e2hhdmVNZXRhbWFzayA9PT0gZmFsc2UgPyBcIllvdSBoYXZlIHRvIGRvd25sb2FkIG1ldGFtYXNrXCIgOiBcIlwifTwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPkF3ZXNvbWUgRGFwcCDwn5qAPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cIm1pbnQtZm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW50LXZhbHVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXNzYWdlIHRvIHNpZ25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGN1c3RvbU1zZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21Nc2cgPT0gMCA/IFwiXCIgOiBjdXN0b21Nc2d9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbWludC1idG5cIj5cbiAgICAgICAgICAgICAgU2lnbiBNZXNzYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJNYWluIiwicHJvdmlkZXIiLCJzZXRwcm92aWRlciIsImFwcElzUmVhZHkiLCJzZXRhcHBJc1JlYWR5IiwiaGF2ZU1ldGFtYXNrIiwic2V0aGF2ZU1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzZXRjbGllbnQiLCJjdXN0b21Nc2ciLCJzZXRjdXN0b21Nc2ciLCJjaGVja0Nvbm5lY3Rpb24iLCJhY2NvdW50cyIsImxpc3RBY2NvdW50cyIsImxlbmd0aCIsImFkZHJlc3MiLCJjb25uZWN0V2ViMyIsInNlbmQiLCJ0aGVuIiwiY2hhaW5JZCIsIm5ldHdvcmtOYW1lIiwiZ2V0TmV0d29yayIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwib25DbGljayIsInNsaWNlIiwic2VjdGlvbiIsIm1haW4iLCJwIiwiaDEiLCJiciIsImZvcm0iLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});