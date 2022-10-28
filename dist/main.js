/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  background-color: green;\\n}\\n\\nbody {\\n  font-family: \\\"Heebo\\\", sans-serif;\\n  padding: 0px 20px;\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.content-contain {\\n  margin: 0 auto;\\n  max-width: 1200px;\\n  width: 100%;\\n}\\n\\n#boards-contain {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 2%;\\n}\\n\\n.board {\\n  width: 49%;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  border: 1px solid #000;\\n}\\n.board .board-cell {\\n  padding-bottom: 100%;\\n  border: 1px solid #000;\\n}\\n.board .board-cell.ship {\\n  background-color: wheat;\\n}\\n.board .board-cell.miss {\\n  background-color: rgba(0, 0, 0, 0.6);\\n}\\n.board .board-cell.hit {\\n  background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/assets/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/assets/scss/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/styles.scss */ \"./src/assets/scss/styles.scss\");\n/* harmony import */ var _modules_gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameloop */ \"./src/modules/gameloop.js\");\n/* harmony import */ var _modules_domStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domStuff */ \"./src/modules/domStuff.js\");\n/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pubsub */ \"./src/modules/pubsub.js\");\n\n\n\n\n\n\nconsole.log(\"test log\");\n\nconst game = (0,_modules_gameloop__WEBPACK_IMPORTED_MODULE_1__.Gameloop)();\ngame.addPlayer();\ngame.addPlayer(true);\n\nconst player1 = game.getPlayers()[0];\nconst player2 = game.getPlayers()[1];\n\nconst player1Board = player1.getPlayerBoard();\n\nplayer1Board.placeShip([4, 4], \"vert\", 5);\nplayer1Board.placeShip([0, 3], \"vert\", 4);\nplayer1Board.placeShip([2, 2], \"hori\", 3);\nplayer1Board.placeShip([6, 9], \"hori\", 3);\nplayer1Board.placeShip([0, 0], \"hori\", 2);\n\nplayer2.attack(player1, [9, 9]);\nplayer2.attack(player1, [0, 0]);\nplayer2.attack(player1, [1, 0]);\nplayer2.attack(player1, [3, 0]);\nplayer2.attack(player1, [4, 0]);\nplayer2.attack(player1, [5, 0]);\nplayer2.attack(player1, [6, 0]);\n\n/*\n\nCREATE SOME SORT OF SHARED METHODS AREA\n    BOTH PLAYER AND GAMEBOARD USE A METHOD NAMED _genRandomCoordinates()\n\n*/\n\n// const testShip = Ship(4, \"Destroyer\");\n\n// testShip.hit();\n\n// console.log(testShip._getHits());\n\n// console.log(testShip.testMethod(1, 2));\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/domStuff.js":
/*!*********************************!*\
  !*** ./src/modules/domStuff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domFunctions\": () => (/* binding */ domFunctions)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\n\nconst domFunctions = (() => {\n    const _determineCellClass = (cellValue) => {\n        if (cellValue === \"s\") {\n            return \"ship\";\n        }\n\n        if (cellValue === \"x\") {\n            return \"miss\";\n        }\n\n        if (cellValue === \"h\") {\n            return \"hit\";\n        }\n\n        return \"empty\";\n    };\n\n    // Will need to pass ID into this\n    // Which means player needs to pass ID into board\n    const renderBoard = (data) => {\n        if (!data.board) {\n            console.log(\"missing board\");\n            return;\n        }\n\n        const boardArray = data.board;\n        const boardID = data.id;\n\n        console.log(boardArray);\n\n        const boardsContain = document.querySelector(\"#boards-contain\");\n\n        const board = document.createElement(\"div\");\n        board.classList.add(\"board\");\n        board.setAttribute(\"data-id\", boardID);\n\n        for (let i = 0; i < boardArray.length; i++) {\n            const subArray = boardArray[i];\n            for (let y = 0; y < subArray.length; y++) {\n                const cellValue = subArray[y];\n\n                const cellClass = _determineCellClass(cellValue);\n\n                const cell = document.createElement(\"div\");\n                cell.classList.add(\"board-cell\", cellClass);\n                cell.setAttribute(\"data-coord-x\", i);\n                cell.setAttribute(\"data-coord-y\", y);\n\n                board.appendChild(cell);\n            }\n        }\n\n        boardsContain.appendChild(board);\n    };\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe(\"renderBoard\", renderBoard);\n\n    // Will need a board id and the coords\n    const renderAttack = (data) => {\n        console.log(\"is this running?\");\n        if (!data.coords || !data.mark) {\n            console.log(\"missing attack data\");\n            return;\n        }\n\n        const posX = data.coords[0];\n        const posY = data.coords[1];\n\n        console.log(`coords: ${posX}, ${posY} : mark: ${data.mark}`);\n\n        const boardID = data.id;\n\n        const newCellClass = _determineCellClass(data.mark);\n\n        const cell = document.querySelector(\n            `.board[data-id=\"${boardID}\"] .board-cell[data-coord-x=\"${posX}\"][data-coord-y=\"${posY}\"]`\n        );\n\n        console.log(cell);\n        cell.classList.add(newCellClass);\n    };\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe(\"renderAttack\", renderAttack);\n\n    return {};\n})();\n\n\n//# sourceURL=webpack://battleship/./src/modules/domStuff.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n/*\n\nThe board will be visible on the front end\n    Should this be private?\n    Need to know where to show ships\n    Markers\n        use \"s\" in array for ship\n        \"h\" for hit ship\n        \"x\" for miss\n\nplaceShip will take in coordinates (Array) and orientation (vert or hori)\n    Would also need to pass length\n    Will need to call Ship factory to generate ship\n        Should this be handled by another step and have the value passed in?\n        Store Ships in an array/object in Gameboard?\n    Will have to pass coords to ship after placing\n    TWO STEPS, FIRST CREATE SHIP AND THEN PLACE\n\nplaceShips step by step\n    ***if base coordinates are valid\n        ***generate all coordinates\n            if all generated coordinates are valid (_verifyCoords)\n            AND NOT OCCUPIED BY OTHER SHIP!!!!\n                ***create ship with length and all coordinates passed in\n                ***Add marks to _board where ship is\n            ***if all generated coordinates are not valid\n                ***return error message\n    ***if base coordinates are not valid\n        ***return error message\n\nIMPLEMENT PUBSUB WHERE POSSIBLE\n\nreceiveAttack step by step\n    if base coords are valid\n        if spot is empty then change spot to x\n            record misses\n        if spot is ship then change to h\n            Add hit to ship in question\n    if base coordinates are not valid\n        return error message\n\n*/\nconst Gameboard = (id = 0) => {\n    const _board = [\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    ];\n\n    const _boardID = id;\n\n    let _missedAttacks = 0;\n\n    const _ships = [];\n\n    const getBoard = () => _board;\n\n    const _getBoardID = () => _boardID;\n\n    const getMissedAttacks = () => _missedAttacks;\n\n    const getShips = () => _ships;\n\n    const _genRandomCoordinates = () => {\n        const x = Math.floor(Math.random() * 10);\n        const y = Math.floor(Math.random() * 10);\n\n        return [x, y];\n    };\n\n    const _genRandomOrientation = () => {\n        const rand = Math.random();\n\n        if (rand < 0.5) {\n            return \"vert\";\n        }\n        return \"hori\";\n    };\n\n    // Check if all ships are sunken\n    const allShipsSunk = () => {\n        const ships = getShips();\n\n        for (let i = 0; i < ships.length; i++) {\n            const shipSunk = ships[i].isSunk();\n\n            if (!shipSunk) {\n                return false;\n            }\n        }\n\n        return true;\n    };\n\n    const _addShipToBoard = (coordsArray) => {\n        for (let i = 0; i < coordsArray.length; i++) {\n            const posX = coordsArray[i][0];\n            const posY = coordsArray[i][1];\n\n            // posY needs to come first due to how array data is accessed\n            // y value comes first in the array\n            _board[posY][posX] = \"s\";\n        }\n    };\n\n    const _generateAllShipCoordinates = (startCoords, orientation, length) => {\n        const finalCoords = [];\n\n        finalCoords.push(startCoords);\n\n        for (let i = 0; i < length - 1; i++) {\n            let coord;\n            if (orientation === \"vert\") {\n                coord = [startCoords[0], startCoords[1] + (i + 1)];\n            } else {\n                coord = [startCoords[0] + (i + 1), startCoords[1]];\n            }\n            finalCoords.push(coord);\n        }\n\n        return finalCoords;\n    };\n\n    const _validPlaceCoords = (coordsArray) => {\n        let valid = true;\n\n        for (let i = 0; i < coordsArray.length; i++) {\n            const posX = coordsArray[i][0];\n            const posY = coordsArray[i][1];\n\n            if (\n                _board[posX] === undefined ||\n                _board[posY] === undefined ||\n                _board[posY][posX] !== \"\"\n            ) {\n                valid = false;\n            }\n        }\n\n        return valid;\n    };\n\n    // startCoords take an array with an x and y value\n    // values for orientation are 'vert' or 'hori'\n    const placeShip = (startPos, orientation, length) => {\n        const finalCoords = _generateAllShipCoordinates(startPos, orientation, length);\n\n        if (!_validPlaceCoords(finalCoords)) {\n            console.error(\"Some of the coordinates are not valid\");\n            return;\n        }\n\n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(length, finalCoords);\n        _ships.push(ship);\n\n        _addShipToBoard(ship.getCoords());\n\n        console.log(getShips().length);\n\n        if (getShips().length === 5) {\n            console.log(\"test\");\n            const data = {};\n\n            data.board = getBoard();\n            data.id = _getBoardID();\n\n            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish(\"renderBoard\", data);\n        }\n    };\n\n    const _placeCompShip = (startPos, orientation, length) => {\n        const finalCoords = _generateAllShipCoordinates(startPos, orientation, length);\n\n        if (!_validPlaceCoords(finalCoords)) {\n            console.error(\"Some of the random comp place coordinates are not valid\");\n            const randomCoords = _genRandomCoordinates();\n            _placeCompShip(randomCoords, orientation, length);\n            return;\n        }\n\n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(length, finalCoords);\n        _ships.push(ship);\n\n        _addShipToBoard(ship.getCoords());\n    };\n\n    // Will place all of the computer ships on the board\n    const placeAllComputerShips = () => {\n        const shipLengths = [5, 4, 3, 3, 2];\n\n        for (let i = 0; i < shipLengths.length; i++) {\n            const startPos = _genRandomCoordinates();\n            const orientation = _genRandomOrientation();\n            _placeCompShip(startPos, orientation, shipLengths[i]);\n        }\n    };\n\n    const _determineBoardMark = (coords) => {\n        const posX = coords[0];\n        const posY = coords[1];\n\n        if (_board[posY][posX] === \"\" || _board[posY][posX] === \"x\") {\n            return \"x\";\n        }\n        return \"h\";\n    };\n\n    const _getHitShip = (coords) => {\n        let hitShip;\n\n        const ships = getShips();\n\n        const posX = coords[0];\n        const posY = coords[1];\n\n        for (let i = 0; i < ships.length; i++) {\n            const shipCoords = ships[i].getCoords();\n\n            if (hitShip !== undefined) {\n                break;\n            }\n\n            for (let z = 0; z < shipCoords.length; z++) {\n                const currentPosX = shipCoords[z][0];\n                const currentPosY = shipCoords[z][1];\n\n                if (posX === currentPosX && posY === currentPosY) {\n                    hitShip = ships[i];\n                    break;\n                }\n            }\n        }\n\n        return hitShip;\n    };\n\n    const _addHitToShip = (coords) => {\n        const hitShip = _getHitShip(coords);\n        hitShip.hit();\n    };\n\n    const _missedAttack = (prevMark, currentMark) => {\n        if (prevMark === \"s\" && currentMark === \"h\") {\n            return false;\n        }\n        return true;\n    };\n\n    const validAttackCoords = (coordsArray) => {\n        let valid = true;\n\n        const posX = coordsArray[0];\n        const posY = coordsArray[1];\n\n        if (\n            _board[posX] === undefined ||\n            _board[posY] === undefined ||\n            _board[posY][posX] === \"x\" ||\n            _board[posY][posX] === \"h\"\n        ) {\n            valid = false;\n        }\n\n        return valid;\n    };\n\n    const receiveAttack = (coords) => {\n        const posX = coords[0];\n        const posY = coords[1];\n\n        const prevMark = _board[posY][posX];\n\n        const currentMark = _determineBoardMark(coords);\n        // console.log(currentMark);\n        _board[posY][posX] = currentMark;\n\n        const data = {};\n\n        data.mark = currentMark;\n        data.coords = coords;\n        data.id = _getBoardID();\n\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish(\"renderAttack\", data);\n\n        if (_missedAttack(prevMark, currentMark)) {\n            _missedAttacks++;\n            return;\n        }\n\n        _addHitToShip(coords);\n        // _checkForGameOver();\n    };\n\n    return {\n        getBoard,\n        getMissedAttacks,\n        getShips,\n        allShipsSunk,\n        placeShip,\n        placeAllComputerShips,\n        receiveAttack,\n        validAttackCoords,\n    };\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/gameloop.js":
/*!*********************************!*\
  !*** ./src/modules/gameloop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameloop\": () => (/* binding */ Gameloop)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\n\n\n/*\n\nHow to Start game?\n    Create game\n    Add both players\n        How to go about adding the ships?\n        How to tell when to render the board?\n        Need method to randomly place ships\n            placeRandomShip()?\n                recurisve call similar to _genComputerAttackCoords\n        Once all ships are placed on a board render the board in the DOM\n            loop through board and add a grid for each item.\n\n*/\n\nconst Gameloop = () => {\n    const _players = [];\n\n    const getPlayers = () => _players;\n\n    const addPlayer = (botMode = false) => {\n        const id = _players.length;\n\n        let activePlayer = false;\n\n        if (id === 0) {\n            activePlayer = true;\n        }\n\n        const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(id, activePlayer, getPlayers, botMode);\n\n        _players.push(player);\n    };\n\n    return {\n        addPlayer,\n        getPlayers,\n    };\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameloop.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n/*\n\n***How do I communicate that one player attacked another?\n    ***From the player level that is, receiveAttack handles it on a board level\n    ***Something with communicating via the ID (array position)\n\n***Set player mode for computer?\n    ***Have boolean to indicate if player is bot or not\n\nHow do I switch between players after attack?\n    May have to wait until Gameloop is made to do that\n    Gameloop holds array of players?\n\nSteps on Attack\n    ***If cooordinates are NOT valid\n        ***return\n\n    ***Initiate receiveAttack on board\n\n    ***Check if game over has occurred\n\n    ***Toggle active status on player1 (ADD THIS PROPERTY TO PLAYER)\n    ***Toggle active status on player2\n\n    If active player is bot then gen random coordinates and attack with those.\n        Make special function to run computer move\n        Confirm compter move is valid\n*/\nconst Player = (id, activePlayer = false, getPlayersFunc = () => null, botMode = false) => {\n    let _isActivePlayer = activePlayer;\n\n    const _isPlayerBot = botMode;\n\n    const _playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(id);\n\n    const _playerID = id;\n\n    const getAllPlayers = () => getPlayersFunc();\n\n    const getPlayerBoard = () => _playerBoard;\n\n    const getPlayerActiveStatus = () => _isActivePlayer;\n\n    const getPlayerBotStatus = () => _isPlayerBot;\n\n    const getPlayerID = () => _playerID;\n\n    const toggleActiveStatus = () => {\n        _isActivePlayer = _isActivePlayer !== true;\n    };\n\n    const _genRandomCoordinates = () => {\n        const x = Math.floor(Math.random() * 10);\n        const y = Math.floor(Math.random() * 10);\n\n        return [x, y];\n    };\n\n    const _genComputerAttackCoords = (playerObject) => {\n        const randomCoords = _genRandomCoordinates();\n\n        const playerBoard = playerObject.getPlayerBoard();\n\n        if (!playerBoard.validAttackCoords(randomCoords)) {\n            return _genComputerAttackCoords(playerObject);\n        }\n\n        return randomCoords;\n    };\n\n    const attack = (playerObject, coords) => {\n        const board = playerObject.getPlayerBoard();\n\n        if (!board.validAttackCoords(coords)) {\n            console.error(\"The attack coordinates are not valid\");\n            return;\n        }\n\n        board.receiveAttack(coords);\n\n        if (board.allShipsSunk()) {\n            console.log(\"all ships are sunken, game over\");\n            return;\n        }\n\n        toggleActiveStatus();\n        playerObject.toggleActiveStatus();\n\n        // If playerObject is active and a bot\n        if (playerObject.getPlayerActiveStatus() && playerObject.getPlayerBotStatus()) {\n            const players = getAllPlayers();\n            const player1 = players[0];\n\n            const attackCoords = _genComputerAttackCoords(player1);\n\n            // Create recurive method to gen/check attack coords, if invalid gen new coords\n\n            playerObject.attack(player1, attackCoords);\n        }\n    };\n\n    return {\n        attack,\n        getAllPlayers,\n        getPlayerActiveStatus,\n        getPlayerBotStatus,\n        getPlayerBoard,\n        getPlayerID,\n        toggleActiveStatus,\n    };\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pubsub\": () => (/* binding */ pubsub)\n/* harmony export */ });\nconst pubsub = {\n    events: {},\n    subscribe(eventName, fn) {\n        this.events[eventName] = this.events[eventName] || [];\n        this.events[eventName].push(fn);\n    },\n    unsubscribe(eventName, fn) {\n        if (this.events[eventName]) {\n            for (let i = 0; i < this.events[eventName].length; i++) {\n                if (this.events[eventName][i] === fn) {\n                    this.events[eventName].splice(i, 1);\n                    break;\n                }\n            }\n        }\n    },\n    publish(eventName, data) {\n        if (this.events[eventName]) {\n            this.events[eventName].forEach((fn) => {\n                fn(data);\n            });\n        }\n    },\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/pubsub.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n/*\n\nNeed to add coordinates var (array) to Ship to store where the ship is placed\n\n*/\nconst Ship = (shipLength, coords) => {\n    let _hits = 0;\n    const _length = shipLength;\n    const _coords = coords;\n\n    const getHits = () => _hits;\n\n    const getCoords = () => _coords;\n\n    const hit = () => {\n        _hits++;\n    };\n\n    const isSunk = () => {\n        if (_hits === _length) {\n            return true;\n        }\n        return false;\n    };\n\n    return {\n        getCoords,\n        getHits,\n        hit,\n        isSunk,\n    };\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;