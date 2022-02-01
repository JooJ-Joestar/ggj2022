"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkthreejs_webpack"] = self["webpackChunkthreejs_webpack"] || []).push([["three"],{

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/models/BlockSpawner.class.js":
/*!******************************************!*\
  !*** ./src/models/BlockSpawner.class.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlockSpawner\": () => (/* binding */ BlockSpawner)\n/* harmony export */ });\n/* harmony import */ var _Cube_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cube.class.js */ \"./src/models/Cube.class.js\");\n/* harmony import */ var _Plane_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plane.class.js */ \"./src/models/Plane.class.js\");\n\r\n\r\n\r\n\r\nclass BlockSpawner {\r\n  blocks = [];\r\n  pos = { posx: 0, posy: 0, posz: 0.5 };\r\n  size = { width: 24, depth: 12 };\r\n  cubeSize = { width: 1, height: 1, depth: 1 };\r\n  amount = 15;\r\n  refreshEveryNSeconds = 10;\r\n\r\n  constructor(pos, size, color = 0xff0000) {\r\n    this.pos = pos;\r\n    this.size = size;\r\n    // var plane = new Plane({width: this.size.width, depth: this.size.depth}, {x: this.pos.posx + this.size.width / 2, y: this.pos.posy + this.size.depth / 2, z: this.pos.posz}, color);\r\n    // plane.addToScene(window.scene);\r\n\r\n    for (var i = 1; i <= this.amount; i++) {\r\n      console.log(i);\r\n      var x = this.pos.posx + Math.round(Math.random() * this.size.width);\r\n      var y = this.pos.posy + Math.round(Math.random() * this.size.depth);\r\n      var colorIndex = Math.ceil(Math.random() * 3);\r\n      var cube = new _Cube_class_js__WEBPACK_IMPORTED_MODULE_0__.Cube({'width': this.cubeSize.width, 'height': this.cubeSize.height, 'depth': this.cubeSize.depth},{'posx': x,'posy': y,'posz': this.pos.posz}, window.colors[colorIndex]);\r\n      cube.missingIndex = colorIndex;\r\n      window.buildObjects.unshift(cube.object);\r\n      window.pickableEntities.unshift(cube);\r\n    }\r\n  }\r\n\r\n  update() {\r\n    // this.object.rotation.x += 0.01;\r\n    // this.object.rotation.y += 0.01;\r\n  }\r\n}\n\n//# sourceURL=webpack://threejs-webpack/./src/models/BlockSpawner.class.js?");

/***/ }),

/***/ "./src/models/Building.class.js":
/*!**************************************!*\
  !*** ./src/models/Building.class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Building\": () => (/* binding */ Building)\n/* harmony export */ });\n/* harmony import */ var _Object_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.class.js */ \"./src/models/Object.class.js\");\n/* harmony import */ var _resources_img_grass_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/img/grass.jpg */ \"./src/resources/img/grass.jpg\");\n/* harmony import */ var _Cube_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cube.class.js */ \"./src/models/Cube.class.js\");\n\r\n\r\n\r\n\r\n\r\nclass Building {\r\n  blocks = [];\r\n  pos = {posx: 0, posy: 0, posz: 0};\r\n  size = {width: 3, height: 3};\r\n  cubeSize = {width: 1, height: 1, depth: 1};\r\n  ownership = null;\r\n\r\n  constructor(pos, size, ownership) {\r\n    if(pos.posx) this.pos.posx = pos.posx;\r\n    if(pos.posy) this.pos.posy = pos.posy;\r\n\r\n    for(var y = 1; y <= this.size.height; y++){\r\n      var numDisabled = Math.ceil((Math.random() + 0.0000001) * 3);\r\n      // console.log(numDisabled);\r\n      for(var x = 1; x <= this.size.width; x++){\r\n        var cube = new _Cube_class_js__WEBPACK_IMPORTED_MODULE_2__.Cube(\r\n          {'width': this.cubeSize.width, 'height': this.cubeSize.height, 'depth': this.cubeSize.depth},\r\n          {\r\n            'posx': this.pos.posx + (x * this.cubeSize.width),\r\n            'posy': this.pos.posy,\r\n            'posz': this.pos.posz + (y * this.cubeSize.height) - (this.cubeSize.height / 2)\r\n          },\r\n          // (numDisabled === x ? 0x000000 : window.colors[y])\r\n          window.colors[y]\r\n        );\r\n        if(numDisabled === x){\r\n          cube.material.color.setHex(0x000000);\r\n          cube.lineIndex = y;\r\n        }\r\n        window.buildObjects.unshift(cube.object);\r\n      }\r\n    }\r\n  }\r\n\r\n  update() {\r\n    // this.object.rotation.x += 0.01;\r\n    // this.object.rotation.y += 0.01;\r\n  }\r\n}\n\n//# sourceURL=webpack://threejs-webpack/./src/models/Building.class.js?");

/***/ }),

/***/ "./src/models/Cube.class.js":
/*!**********************************!*\
  !*** ./src/models/Cube.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cube\": () => (/* binding */ Cube)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Object_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.class.js */ \"./src/models/Object.class.js\");\n\r\n\r\n\r\nclass Cube extends _Object_class_js__WEBPACK_IMPORTED_MODULE_0__.Object {\r\n  pos = { posx: 0, posy: 0, posz: 0 };\r\n  size = { width: 1, height: 1, depth: 1 };\r\n  disabled = false;\r\n  lineIndex = null;\r\n\r\n  constructor(size, pos, color = 0x00ff00) {\r\n    super();\r\n    if (pos.posx) this.pos.posx = pos.posx;\r\n    if (pos.posy) this.pos.posy = pos.posy;\r\n    if (pos.posz) this.pos.posz = pos.posz;\r\n\r\n    if (size.width) this.size.width = size.width;\r\n    if (size.height) this.size.height = size.height;\r\n    if (size.depth) this.size.depth = size.depth;\r\n\r\n    // console.log(this.size);  \r\n\r\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(this.size.width, this.size.height, this.size.depth);\r\n    this.material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: color });\r\n    this.object = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(this.geometry, this.material);\r\n\r\n    this.object.position.x = this.pos.posx;\r\n    this.object.position.y = this.pos.posy;\r\n    this.object.position.z = this.pos.posz;\r\n\r\n    window.objects.unshift(this);\r\n  }\r\n}\n\n//# sourceURL=webpack://threejs-webpack/./src/models/Cube.class.js?");

/***/ }),

/***/ "./src/models/Object.class.js":
/*!************************************!*\
  !*** ./src/models/Object.class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Object\": () => (/* binding */ Object)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\nclass Object extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D{\r\n    geometry = null;\r\n    material = null;\r\n    texture = null;\r\n    object = null;\r\n\r\n    accelX = 0;\r\n    accelY = 0;\r\n\r\n  constructor(){\r\n    super();\r\n    this.castShadow = true; //default is false\r\n    this.receiveShadow = true; //default  \r\n  }\r\n\r\n  update(){\r\n    this.object.position.y += this.accelX;\r\n    this.object.position.x -= this.accelY;\r\n  }\r\n\r\n  addToScene(scene){\r\n    scene.add(this.object);\r\n  }\r\n\r\n  test(){\r\n    console.log('Hello world!');\r\n  }\r\n}\n\n//# sourceURL=webpack://threejs-webpack/./src/models/Object.class.js?");

/***/ }),

/***/ "./src/models/Plane.class.js":
/*!***********************************!*\
  !*** ./src/models/Plane.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Plane\": () => (/* binding */ Plane)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Object_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.class.js */ \"./src/models/Object.class.js\");\n/* harmony import */ var _resources_img_grass_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/img/grass.jpg */ \"./src/resources/img/grass.jpg\");\n\r\n\r\n\r\n\r\nclass Plane extends _Object_class_js__WEBPACK_IMPORTED_MODULE_0__.Object {\r\n    constructor(size = {width: 10, depth: 10}, pos = {x: 0, y: 0, z: 0}, color){\r\n        console.log('=================' + color);\r\n        super();\r\n        this.castShadow = false;\r\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(size.width, size.depth);\r\n\r\n        this.texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load( _resources_img_grass_jpg__WEBPACK_IMPORTED_MODULE_1__ );\r\n        this.texture.wrapS = three__WEBPACK_IMPORTED_MODULE_2__.RepeatWrapping;\r\n        this.texture.wrapT = three__WEBPACK_IMPORTED_MODULE_2__.RepeatWrapping;\r\n        this.texture.repeat.set( 8, 8 );\r\n\r\n        this.material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial( { color: color/*, map: this.texture*/ } );\r\n        this.object = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh( this.geometry, this.material );\r\n\r\n        this.object.position.x = pos.x;\r\n        this.object.position.y = pos.y;\r\n        this.object.position.z = pos.z;\r\n\r\n        window.objects.unshift(this);\r\n    }\r\n\r\n    update(){\r\n        // this.object.rotation.x += 0.01;\r\n        // this.object.rotation.y += 0.01;\r\n    }\r\n  }\n\n//# sourceURL=webpack://threejs-webpack/./src/models/Plane.class.js?");

/***/ }),

/***/ "./src/models/Player.class.js":
/*!************************************!*\
  !*** ./src/models/Player.class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _TestCube_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestCube.class.js */ \"./src/models/TestCube.class.js\");\n\r\n\r\n\r\nclass Player extends _TestCube_class_js__WEBPACK_IMPORTED_MODULE_0__.TestCube {\r\n  corOriginal = null;\r\n  corObjeto = null;\r\n  objetoCarregado = null;\r\n\r\n  constructor(pos = null, color = 0x00ff00) {\r\n    super(pos, color);\r\n    this.corOriginal = color;\r\n\r\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry();\r\n    this.material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: color });\r\n    this.object = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(this.geometry, this.material);\r\n\r\n    this.object.position.x += pos.posx;\r\n    this.object.position.y += pos.posy;\r\n    this.object.position.z += pos.posz;\r\n\r\n    window.objects.unshift(this);\r\n  }\r\n\r\n  update() {\r\n    _TestCube_class_js__WEBPACK_IMPORTED_MODULE_0__.TestCube.prototype.update.call(this);\r\n    this.testCollisions();\r\n  }\r\n\r\n  testCollisions() {\r\n    this.collectCube();\r\n    this.depositCube();\r\n  }\r\n\r\n  collectCube(){\r\n    window.pickableEntities.forEach((entity, key) => {\r\n      if(this.objetoCarregado != null) return;\r\n      if(Math.round(entity.object.position.x) == Math.round(this.object.position.x) && Math.round(entity.object.position.y) == Math.round(this.object.position.y)){\r\n        this.objetoCarregado = entity;\r\n        window.scene.remove(entity.object);\r\n        window.pickableEntities.splice(key, 1);\r\n        console.log(this.objetoCarregado);\r\n      }\r\n    });\r\n  }\r\n\r\n  depositCube(){\r\n    if(this.objetoCarregado == null){\r\n      // console.log('Falhou 1');\r\n      return;\r\n    }\r\n    \r\n    window.buildings.forEach((building, key) => {\r\n      if(this.objetoCarregado == null) return; // Necessário checar aqui e antes do foreach, por questão de lógica. Estou com preguiça de explicar, qualquer coisa me pergunte\r\n        // no meu email jorge@jooj.dev\r\n      if(Math.round(building.pos.posx) == Math.round(this.object.position.x) && Math.round(building.pos.posy) == Math.round(this.object.position.y)){\r\n        building.blocks.forEach(block => {\r\n          if(block.missingIndex == null) return;\r\n          if(block.missingIndex != this.objetoCarregado.object.missingIndex) return;\r\n          block.material.color.sethex(window.colors[block.missingIndex]);\r\n          this.objetoCarregado = null;\r\n          console.log('Cubo depositado');\r\n        });\r\n      }\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://threejs-webpack/./src/models/Player.class.js?");

/***/ }),

/***/ "./src/models/TestCube.class.js":
/*!**************************************!*\
  !*** ./src/models/TestCube.class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestCube\": () => (/* binding */ TestCube)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Object_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object.class.js */ \"./src/models/Object.class.js\");\n\r\n\r\n\r\nclass TestCube extends _Object_class_js__WEBPACK_IMPORTED_MODULE_0__.Object {\r\n\r\n    constructor(pos = null, color = 0x00ff00){\r\n        super();\r\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry();\r\n        this.material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial( { color: color } );\r\n        this.object = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh( this.geometry, this.material );\r\n\r\n        this.object.position.x += pos.posx;\r\n        this.object.position.y += pos.posy;\r\n        this.object.position.z += pos.posz;\r\n\r\n        window.objects.unshift(this);\r\n    }\r\n    \r\n    update(){\r\n        _Object_class_js__WEBPACK_IMPORTED_MODULE_0__.Object.prototype.update.call(this);\r\n        this.object.rotation.x += 0.01;\r\n        this.object.rotation.y += 0.01;\r\n    }\r\n  }\n\n//# sourceURL=webpack://threejs-webpack/./src/models/TestCube.class.js?");

/***/ }),

/***/ "./src/three.js":
/*!**********************!*\
  !*** ./src/three.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _models_Plane_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Plane.class */ \"./src/models/Plane.class.js\");\n/* harmony import */ var _models_TestCube_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/TestCube.class */ \"./src/models/TestCube.class.js\");\n/* harmony import */ var _models_Player_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Player.class */ \"./src/models/Player.class.js\");\n/* harmony import */ var _models_BlockSpawner_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/BlockSpawner.class */ \"./src/models/BlockSpawner.class.js\");\n/* harmony import */ var _models_Cube_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Cube.class */ \"./src/models/Cube.class.js\");\n/* harmony import */ var _models_Building_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Building.class */ \"./src/models/Building.class.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_constants_js__WEBPACK_IMPORTED_MODULE_6__);\n// Option 1: Import the entire three.js core library.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Lista dos objetos ativos. Atualizada antes do render.\r\nwindow.objects = [];\r\n\r\n// Objetos a serem construídos via parâmetro\r\nwindow.buildObjects = [];\r\n\r\n// Objetos a serem construídos via parâmetro\r\nwindow.pickableEntities = [];\r\n\r\n// Lista de elementos necessários para os controles funcionarem.\r\nwindow.players = [];\r\n\r\n// Lista das construções\r\nwindow.buildings = [];\r\n\r\n// Lista de cores por andar do edifício\r\nwindow.colors = {1: 0xff0000, 2: 0x00ff00, 3: 0x0000ff};\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();\r\nwindow.scene = scene;\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_7__.WebGLRenderer();\r\n\r\nrenderer.shadowMap.enabled = true;\r\nrenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_7__.PCFSoftShadowMap; // default THREE.PCFShadowMap\r\n\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\nvar ground = new _models_Plane_class__WEBPACK_IMPORTED_MODULE_0__.Plane({width: 100, depth: 100}, {x: 0, y: 0, z: 0}, 0xffffff);\r\nground.addToScene(scene);\r\n\r\nvar Player1 = new _models_Player_class__WEBPACK_IMPORTED_MODULE_2__.Player({posx: -10, posy: -2, posz: 0.5}, 0x000000);\r\nvar Player2 = new _models_Player_class__WEBPACK_IMPORTED_MODULE_2__.Player({posx:  12, posy: -2, posz: 0.5}, 0xffffff);\r\nPlayer1.addToScene(scene);\r\nPlayer2.addToScene(scene);\r\n\r\nwindow.players[1] = Player1;\r\nwindow.players[2] = Player2;\r\nwindow.players[3] = camera;\r\n\r\ncamera.position.y = -25;\r\ncamera.position.z = 20;\r\ncamera.rotateX(0.75);\r\n\r\n// camera.position.y = -5;\r\n// camera.position.z = 4;\r\n// camera.rotateX(0.75);\r\n\r\nconst light = new three__WEBPACK_IMPORTED_MODULE_7__.PointLight( 0xffffff, 1.5, 50 );\r\nlight.position.set( 0, -15, 25 );\r\nlight.castShadow = true; // default false\r\n\r\n//Set up shadow properties for the light\r\nlight.shadow.mapSize.width = 512; // default\r\nlight.shadow.mapSize.height = 512; // default\r\nlight.shadow.camera.near = 0.5; // default\r\nlight.shadow.camera.far = 500; // default\r\n\r\nscene.add( light );\r\n\r\n// const helper = new THREE.CameraHelper( light.shadow.camera );\r\n// scene.add( helper );\r\n\r\nconst building1 = new _models_Building_class__WEBPACK_IMPORTED_MODULE_5__.Building({posx: -12, posy: 0});\r\nconst building2 = new _models_Building_class__WEBPACK_IMPORTED_MODULE_5__.Building({posx: 10, posy: 0});\r\nwindow.buildings.unshift(building1, building2);\r\nconst blockSpawner = new _models_BlockSpawner_class__WEBPACK_IMPORTED_MODULE_3__.BlockSpawner({ posx: -11, posy: -16, posz: 0.5 }, { width: 24, depth: 12 });\r\n\r\nwindow.buildObjects.forEach(object => {\r\n  console.log(object);\r\n  scene.add(object);\r\n});\r\n\r\n// console.log(window.objects);\r\n// console.log(window.pickableEntities);\r\nconsole.log(window.buildings);\r\n\r\nfunction animate() {\r\n  requestAnimationFrame(animate);\r\n\r\n  window.objects.forEach(object => {\r\n    object.update();\r\n  });\r\n\r\n  renderer.render(scene, camera);\r\n}\r\nanimate();\n\n//# sourceURL=webpack://threejs-webpack/./src/three.js?");

/***/ }),

/***/ "./src/resources/img/grass.jpg":
/*!*************************************!*\
  !*** ./src/resources/img/grass.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d966d98d9d037771591.jpg\";\n\n//# sourceURL=webpack://threejs-webpack/./src/resources/img/grass.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/three.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);