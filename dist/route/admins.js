"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _admin = _interopRequireDefault(require("../controller/admin"));

var _validation = require("../middleware/validation");

var AdminRouter = new _express.Router();
AdminRouter.post('/signup', _validation.signupValidation, _admin["default"].signup).post('/login', _validation.loginValidation, _admin["default"].login);
var _default = AdminRouter;
exports["default"] = _default;