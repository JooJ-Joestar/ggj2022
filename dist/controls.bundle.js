/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkthreejs_webpack"] = self["webpackChunkthreejs_webpack"] || []).push([["controls"],{

/***/ "./src/interfaces/controls.js":
/*!************************************!*\
  !*** ./src/interfaces/controls.js ***!
  \************************************/
/***/ (() => {

eval("const KEY_PLAYER1 = 1;\r\nconst KEY_PLAYER2 = 2;\r\nconst KEY_CAMERA = 3;\r\n\r\ndocument.addEventListener(\"keypress\", function (event) {\r\n  const increment = 0.05;\r\n  const keyName = event.key;\r\n  // console.log('keydown event\\n\\n' + 'key: ' + keyName);\r\n\r\n  switch (keyName) {\r\n    case 'w':\r\n      window.players[KEY_PLAYER1].accelX = increment;\r\n    break;\r\n    \r\n    case 'a':\r\n      window.players[KEY_PLAYER1].accelY = increment;\r\n    break;\r\n      \r\n    case 's':\r\n      window.players[KEY_PLAYER1].accelX = -increment;\r\n    break;\r\n\r\n    case 'd':\r\n      window.players[KEY_PLAYER1].accelY = -increment;\r\n    break;\r\n\r\n    case 'x':\r\n      window.players[KEY_PLAYER1].dropCube();\r\n    break;\r\n    \r\n    // PLAYER2\r\n    case 'i':\r\n      window.players[KEY_PLAYER2].accelX = increment;\r\n    break;\r\n    \r\n    case 'j':\r\n      window.players[KEY_PLAYER2].accelY = increment;\r\n    break;\r\n      \r\n    case 'k':\r\n      window.players[KEY_PLAYER2].accelX = -increment;\r\n    break;\r\n      \r\n    case 'l':\r\n      window.players[KEY_PLAYER2].accelY = -increment;\r\n    break;\r\n  }\r\n});\r\n\r\ndocument.addEventListener(\"keyup\", function (event) {\r\n  const keyName = event.key;\r\n  switch (keyName) {\r\n    case 'w': case 's':\r\n      window.players[KEY_PLAYER1].accelX = 0;\r\n    break;\r\n    \r\n    case 'a': case 'd':\r\n      window.players[KEY_PLAYER1].accelY = 0;\r\n    break;\r\n    \r\n    case 'i': case 'k':\r\n      window.players[KEY_PLAYER2].accelX = 0;\r\n    break;\r\n    \r\n    case 'j': case 'l':\r\n      window.players[KEY_PLAYER2].accelY = 0;\r\n    break;\r\n  }\r\n});\r\n\r\n\r\n// ************************* Camera *************************\r\ndocument.addEventListener(\"keydown\", function (event) {\r\n  const increment = 0.5;\r\n  const keyName = event.key;\r\n  // console.log('keydown event\\n\\n' + 'key: ' + keyName);\r\n\r\n  // console.log(event);\r\n  switch (keyName) {\r\n    case 't':\r\n      window.players[KEY_CAMERA].position.y += increment;\r\n    break;\r\n    \r\n    case 'f':\r\n      window.players[KEY_CAMERA].position.x -= increment;\r\n    break;\r\n      \r\n    case 'g':\r\n      window.players[KEY_CAMERA].position.y += -increment;\r\n    break;\r\n      \r\n    case 'h':\r\n      window.players[KEY_CAMERA].position.x -= -increment;\r\n    break;\r\n\r\n    case 'r':\r\n      window.players[KEY_CAMERA].rotateX(-0.05);\r\n    break;\r\n\r\n    case 'y':\r\n      window.players[KEY_CAMERA].rotateX(0.05);\r\n    break;\r\n\r\n    case '-':\r\n      window.players[KEY_CAMERA].position.z -= increment;\r\n    break;\r\n\r\n    case '=':\r\n      window.players[KEY_CAMERA].position.z += increment;\r\n    break;\r\n  }\r\n});\r\n\r\ndocument.addEventListener(\"keyup\", function (event) {\r\n  const keyName = event.key;\r\n  switch (keyName) {\r\n    case 't': case 'g':\r\n      window.players[KEY_PLAYER1].accelX = 0;\r\n    break;\r\n    \r\n    case 'f': case 'h':\r\n      window.players[KEY_PLAYER1].accelY = 0;\r\n    break;\r\n  }\r\n});\n\n//# sourceURL=webpack://threejs-webpack/./src/interfaces/controls.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["index","shared"], () => (__webpack_exec__("./src/interfaces/controls.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);