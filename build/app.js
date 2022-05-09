"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _inicialSetup = require("./libs/inicial-setup");

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var app = (0, _express["default"])();
(0, _inicialSetup.createRoles)();
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/api/products', _products["default"]);
app.use('/api/auth', _auth["default"]);
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
var _default = app;
exports["default"] = _default;