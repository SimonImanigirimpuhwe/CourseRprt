"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var userSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  regNumber: {
    type: String,
    required: true
  },
  address: {
    school: {
      type: String,
      required: true
    },
    faculty: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
  password: {
    type: String,
    required: true
  }
});

var User = _mongoose["default"].model('User', userSchema);

var _default = User;
exports["default"] = _default;