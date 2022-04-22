"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "utils_sign_js";
exports.ids = ["utils_sign_js"];
exports.modules = {

/***/ "./utils/sign.js":
/*!***********************!*\
  !*** ./utils/sign.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(window.ethereum);\nconst signer = provider.getSigner();\nconst signMessage = async (message)=>{\n    try {\n        signer.signMessage(\"Hello World\").then((result)=>{\n            console.log(result);\n        });\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signMessage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zaWduLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUMvQixLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNELGlFQUE2QixDQUFDSSxNQUFNLENBQUNDLFFBQVE7QUFDbEUsS0FBSyxDQUFDQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sU0FBUztBQUVqQyxLQUFLLENBQUNDLFdBQVcsVUFBVUMsT0FBTyxHQUFLLENBQUM7SUFDdEMsR0FBRyxDQUFDLENBQUM7UUFDSEgsTUFBTSxDQUFDRSxXQUFXLENBQUMsQ0FBYSxjQUFFRSxJQUFJLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1lBQ2xEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtRQUNwQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7UUFDZkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUs7SUFDbkIsQ0FBQztBQUNILENBQUM7QUFDRCxpRUFBZU4sV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ldGhlcnMuanMvLi91dGlscy9zaWduLmpzPzgyY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbmNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXG5jb25zdCBzaWduTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gIHRyeSB7XG4gICAgc2lnbmVyLnNpZ25NZXNzYWdlKFwiSGVsbG8gV29ybGRcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHNpZ25NZXNzYWdlO1xuIl0sIm5hbWVzIjpbImV0aGVycyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsIm1lc3NhZ2UiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/sign.js\n");

/***/ })

};
;