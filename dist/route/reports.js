"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _report = _interopRequireDefault(require("../controller/report"));

var _userAuth = _interopRequireDefault(require("../middleware/userAuth"));

var _authenticate = _interopRequireDefault(require("../middleware/authenticate"));

var _validation = require("../middleware/validation");

var reportRouter = new _express.Router();
reportRouter.post('/', _userAuth["default"], _validation.reportValidation, _report["default"].submitReport).post('/search', _authenticate["default"], _report["default"].searchReport).get('/all', _authenticate["default"], _report["default"].viewReports);
var _default = reportRouter;
exports["default"] = _default;