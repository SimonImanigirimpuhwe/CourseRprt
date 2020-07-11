"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controller/user"));

var _authenticate = _interopRequireDefault(require("../middleware/authenticate"));

var _validation = require("../middleware/validation");

var userRouter = new _express.Router();
userRouter.post('/register', _authenticate["default"], _validation.userValidation, _user["default"].addUser).post('/login', _validation.userLoginValidation, _user["default"].login).post('/search', _authenticate["default"], _user["default"].searchUser).put('/:id/edit', _authenticate["default"], _validation.editValidation, _user["default"].editUser)["delete"]('/:id/abolish', _authenticate["default"], _user["default"].deleteUser).get('/all', _authenticate["default"], _user["default"].usersList);
var _default = userRouter;
exports["default"] = _default;