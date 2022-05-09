"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  imgUrl: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('product', productSchema);

exports["default"] = _default;