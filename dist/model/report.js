"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var reportSchema = new _mongoose["default"].Schema({
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
  },
  days: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  body: {
    hours: {
      type: String,
      required: true
    },
    module: {
      type: String,
      required: true
    },
    component: {
      type: String,
      required: true
    },
    activity: {
      type: String,
      required: true
    },
    lecturer: {
      type: String,
      required: true
    },
    observation: {
      type: String,
      required: true
    }
  },
  submittedAt: {
    type: Date,
    "default": Date.now
  }
});

var Report = _mongoose["default"].model('Report', reportSchema);

var _default = Report;
exports["default"] = _default;