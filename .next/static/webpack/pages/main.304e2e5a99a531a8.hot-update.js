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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider1 = ref5[0], setprovider = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), appIsReady = ref1[0], setappIsReady = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), haveMetamask = ref2[0], sethaveMetamask = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref3[0], setclient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), customMsg = ref4[0], setcustomMsg = ref4[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(provider) {\n            var accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return provider.listAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(provider) {\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx1.next = 3;\n                            break;\n                        }\n                        _ctx1.next = 3;\n                        return provider.send(\"eth_requestAccounts\", []).then(_asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var ref, chainId, networkName;\n                            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return provider.getNetwork();\n                                    case 2:\n                                        ref = _ctx.sent;\n                                        chainId = ref.chainId;\n                                        networkName = ref.networkName;\n                                        // Misc. Check if user is not connected to a particular network\n                                        if (networkName !== \"matic\" && chainId !== 137) {}\n                                        checkConnection(provider);\n                                    case 7:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })));\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function connectWeb3(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const signMessage = (signer) => {\n    //   signer.signMessage(\"Hello World\").then((result) => {\n    //     console.log(result);\n    //   });\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // const _provider = new ethers.providers.Web3Provider(window.ethereum);\n    // setprovider(_provider);\n    // setappIsReady(true);\n    // const signer = _provider.getSigner();\n    // if (window.ethereum) {\n    //   sethaveMetamask(true);\n    // } else {\n    //   sethaveMetamask(false);\n    // }\n    // // window.ethereum.on(\"accountsChanged\", async () => {\n    // //   await checkConnection();\n    // // });\n    // checkConnection(_provider);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: haveMetamask === false ? \"You have to download metamask\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"tqVtCU+UgdyhAxDEs3m1S8QzGZ4=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUpBLElBQUk7QUFrSFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluLmpzP2FhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbcHJvdmlkZXIsIHNldHByb3ZpZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXBwSXNSZWFkeSwgc2V0YXBwSXNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2hhdmVNZXRhbWFzaywgc2V0aGF2ZU1ldGFtYXNrXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2xpZW50LCBzZXRjbGllbnRdID0gdXNlU3RhdGUoe1xuICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgW2N1c3RvbU1zZywgc2V0Y3VzdG9tTXNnXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNoZWNrQ29ubmVjdGlvbiA9IGFzeW5jIChwcm92aWRlcikgPT4ge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgcHJvdmlkZXIubGlzdEFjY291bnRzKCk7XG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRjbGllbnQoe1xuICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdlYjMgPSBhc3luYyAocHJvdmlkZXIpID0+IHtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFpbklkLCBuZXR3b3JrTmFtZSB9ID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuXG4gICAgICAgIC8vIE1pc2MuIENoZWNrIGlmIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byBhIHBhcnRpY3VsYXIgbmV0d29ya1xuICAgICAgICBpZiAobmV0d29ya05hbWUgIT09IFwibWF0aWNcIiAmJiBjaGFpbklkICE9PSAxMzcpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrQ29ubmVjdGlvbihwcm92aWRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3Qgc2lnbk1lc3NhZ2UgPSAoc2lnbmVyKSA9PiB7XG4gIC8vICAgc2lnbmVyLnNpZ25NZXNzYWdlKFwiSGVsbG8gV29ybGRcIikudGhlbigocmVzdWx0KSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgX3Byb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgLy8gc2V0cHJvdmlkZXIoX3Byb3ZpZGVyKTtcbiAgICAvLyBzZXRhcHBJc1JlYWR5KHRydWUpO1xuICAgIC8vIGNvbnN0IHNpZ25lciA9IF9wcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAvLyBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgLy8gICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHNldGhhdmVNZXRhbWFzayhmYWxzZSk7XG4gICAgLy8gfVxuICAgIC8vIC8vIHdpbmRvdy5ldGhlcmV1bS5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gLy8gICBhd2FpdCBjaGVja0Nvbm5lY3Rpb24oKTtcbiAgICAvLyAvLyB9KTtcbiAgICAvLyBjaGVja0Nvbm5lY3Rpb24oX3Byb3ZpZGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmcmVuLW5hdiBkLWZsZXhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+TUVOVV88L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCIgb25DbGljaz17Y29ubmVjdFdlYjMocHJvdmlkZXIpfT5cbiAgICAgICAgICAgICAge2NsaWVudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDAsIDQpfS4uLlxuICAgICAgICAgICAgICAgICAge2NsaWVudC5hZGRyZXNzLnNsaWNlKDM4LCA0Mil9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5Db25uZWN0IFdhbGxldDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB0dy1idG5cIj5UVzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleFwiPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8cD57aGF2ZU1ldGFtYXNrID09PSBmYWxzZSA/IFwiWW91IGhhdmUgdG8gZG93bmxvYWQgbWV0YW1hc2tcIiA6IFwiXCJ9PC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+QXdlc29tZSBEYXBwIPCfmoA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tZGVzY1wiPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF1dGVtXG4gICAgICAgICAgICBzdXNjaXBpdCBwZXJmZXJlbmRpcyB0ZW1wb3JlIDxiciAvPiBldmVuaWV0IGlkIHBhcmlhdHVyIGVycm9yXG4gICAgICAgICAgICBkZXNlcnVudCBwbGFjZWF0IGxhdWRhbnRpdW0gZGViaXRpcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgey8qIDxwPkJhbGFuY2UgaXMge2JhbGFuY2V9PC9wPiAqL31cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPVwibWludC1mb3JtXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnQtdmFsdWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1lc3NhZ2UgdG8gc2lnblwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Y3VzdG9tTXNnKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbU1zZyA9PSAwID8gXCJcIiA6IGN1c3RvbU1zZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBtaW50LWJ0blwiPlxuICAgICAgICAgICAgICBTaWduIE1lc3NhZ2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIk1haW4iLCJwcm92aWRlciIsInNldHByb3ZpZGVyIiwiYXBwSXNSZWFkeSIsInNldGFwcElzUmVhZHkiLCJoYXZlTWV0YW1hc2siLCJzZXRoYXZlTWV0YW1hc2siLCJpc0Nvbm5lY3RlZCIsImNsaWVudCIsInNldGNsaWVudCIsImN1c3RvbU1zZyIsInNldGN1c3RvbU1zZyIsImNoZWNrQ29ubmVjdGlvbiIsImFjY291bnRzIiwibGlzdEFjY291bnRzIiwibGVuZ3RoIiwiYWRkcmVzcyIsImNvbm5lY3RXZWIzIiwic2VuZCIsInRoZW4iLCJjaGFpbklkIiwibmV0d29ya05hbWUiLCJnZXROZXR3b3JrIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJidXR0b24iLCJzZWN0aW9uIiwibWFpbiIsInAiLCJoMSIsImJyIiwiZm9ybSIsImFjdGlvbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});