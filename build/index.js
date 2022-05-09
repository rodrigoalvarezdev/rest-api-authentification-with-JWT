"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _database = _interopRequireDefault(require("./database"));

_app["default"].listen(3000, function (_) {
  console.log('server on port 3000');
});