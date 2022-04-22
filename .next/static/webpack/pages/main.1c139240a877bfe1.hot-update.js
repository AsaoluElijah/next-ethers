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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), haveMetamask = ref[0], sethaveMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref1[0], setclient = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), customMsg = ref2[0], setcustomMsg = ref2[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            sethaveMetamask(true);\n                        } else {\n                            sethaveMetamask(false);\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(provider) {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        setclient({\n                            isConnected: true,\n                            address: accounts[0]\n                        });\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function connectWeb3(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // if (window) {\n        //   const _provider = new ethers.providers.Web3Provider(window.ethereum);\n        //   setprovider(_provider);\n        // }\n        // setappIsReady(true);\n        // // const signer = _provider.getSigner();\n        // if (window.ethereum) {\n        //   sethaveMetamask(true);\n        // } else {\n        //   sethaveMetamask(false);\n        // }\n        // // window.ethereum.on(\"accountsChanged\", async () => {\n        // //   await checkConnection();\n        // // });\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: function() {\n                                        return connectWeb3(provider);\n                                    },\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: haveMetamask === false ? \"You have to download metamask\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: !haveMetamask && \"You have to download metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"vAGIaQIV8188Cz74TKGBqCK5rrY=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQ2lDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOztvQ0FDNUNBLEtBQUssRUFBRXBDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFHQSxTQUFTOzs7Ozs7NEdBRXZDMkIsQ0FBRTs7Ozs7NEdBQ0ZQLENBQU07b0NBQUNXLElBQUksRUFBQyxDQUFRO29DQUFDaEIsU0FBUyxFQUFDLENBQWM7OENBQUMsQ0FFL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBL0hLckIsSUFBSTtLQUFKQSxJQUFJO0FBaUlWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcz9hYTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW2hhdmVNZXRhbWFzaywgc2V0aGF2ZU1ldGFtYXNrXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2xpZW50LCBzZXRjbGllbnRdID0gdXNlU3RhdGUoe1xuICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgW2N1c3RvbU1zZywgc2V0Y3VzdG9tTXNnXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNoZWNrQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldGhhdmVNZXRhbWFzayhmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xuXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRjbGllbnQoe1xuICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdlYjMgPSBhc3luYyAocHJvdmlkZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YW1hc2sgbm90IGRldGVjdGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KTtcblxuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKHdpbmRvdykge1xuICAgIC8vICAgY29uc3QgX3Byb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgLy8gICBzZXRwcm92aWRlcihfcHJvdmlkZXIpO1xuICAgIC8vIH1cbiAgICAvLyBzZXRhcHBJc1JlYWR5KHRydWUpO1xuICAgIC8vIC8vIGNvbnN0IHNpZ25lciA9IF9wcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAvLyBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgLy8gICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHNldGhhdmVNZXRhbWFzayhmYWxzZSk7XG4gICAgLy8gfVxuICAgIC8vIC8vIHdpbmRvdy5ldGhlcmV1bS5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gLy8gICBhd2FpdCBjaGVja0Nvbm5lY3Rpb24oKTtcbiAgICAvLyAvLyB9KTtcbiAgICBjaGVja0Nvbm5lY3Rpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZnJlbi1uYXYgZC1mbGV4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk1FTlVfPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdlYjMocHJvdmlkZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2xpZW50LmlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMzgsIDQyKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PkNvbm5lY3QgV2FsbGV0PC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdHctYnRuXCI+VFc8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXhcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPHA+e2hhdmVNZXRhbWFzayA9PT0gZmFsc2UgPyBcIllvdSBoYXZlIHRvIGRvd25sb2FkIG1ldGFtYXNrXCIgOiBcIlwifTwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPkF3ZXNvbWUgRGFwcCDwn5qAPC9oMT5cblxuICAgICAgICAgIDxwPnshaGF2ZU1ldGFtYXNrICYmIFwiWW91IGhhdmUgdG8gZG93bmxvYWQgbWV0YW1hc2tcIn08L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cIm1pbnQtZm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW50LXZhbHVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXNzYWdlIHRvIHNpZ25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGN1c3RvbU1zZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21Nc2cgPT0gMCA/IFwiXCIgOiBjdXN0b21Nc2d9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbWludC1idG5cIj5cbiAgICAgICAgICAgICAgU2lnbiBNZXNzYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJNYWluIiwiaGF2ZU1ldGFtYXNrIiwic2V0aGF2ZU1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzZXRjbGllbnQiLCJjdXN0b21Nc2ciLCJzZXRjdXN0b21Nc2ciLCJjaGVja0Nvbm5lY3Rpb24iLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImFkZHJlc3MiLCJjb25uZWN0V2ViMyIsInByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwib25DbGljayIsInNsaWNlIiwic2VjdGlvbiIsIm1haW4iLCJwIiwiaDEiLCJiciIsImZvcm0iLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});