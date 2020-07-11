"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportValidation = exports.editValidation = exports.userLoginValidation = exports.userValidation = exports.loginValidation = exports.signupValidation = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var signupValidation = function signupValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    firstName: _joi["default"].string().required(),
    lastName: _joi["default"].string().required(),
    username: _joi["default"].string().min(5).max(50).required(),
    email: _joi["default"].string().required().email(),
    password: _joi["default"].string().min(8).max(1500).required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  next();
};

exports.signupValidation = signupValidation;

var loginValidation = function loginValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    username: _joi["default"].string().min(5).max(50).required(),
    password: _joi["default"].string().min(8).max(1500).required()
  });

  var _schema$validate2 = schema.validate(req.body),
      error = _schema$validate2.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  next();
};

exports.loginValidation = loginValidation;

var userValidation = function userValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    firstName: _joi["default"].string().required(),
    lastName: _joi["default"].string().required(),
    regNumber: _joi["default"].string().required(),
    school: _joi["default"].string().required(),
    faculty: _joi["default"].string().required(),
    level: _joi["default"].string().required()
  });

  var _schema$validate3 = schema.validate(req.body),
      error = _schema$validate3.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  next();
};

exports.userValidation = userValidation;

var userLoginValidation = function userLoginValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    regNumber: _joi["default"].string().required()
  });

  var _schema$validate4 = schema.validate(req.body),
      error = _schema$validate4.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  next();
};

exports.userLoginValidation = userLoginValidation;

var editValidation = function editValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    school: _joi["default"].string().required(),
    faculty: _joi["default"].string().required(),
    level: _joi["default"].string().required()
  });

  var _schema$validate5 = schema.validate(req.body),
      error = _schema$validate5.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  next();
};

exports.editValidation = editValidation;

var reportValidation = function reportValidation(req, res, next) {
  var schema = _joi["default"].object().keys({
    school: _joi["default"].string().required(),
    faculty: _joi["default"].string().required(),
    level: _joi["default"].string().required(),
    studentsNumber: _joi["default"].string().required(),
    days: _joi["default"].string().required(),
    date: _joi["default"].string().required(),
    hours: _joi["default"].string().required(),
    module: _joi["default"].string().required(),
    component: _joi["default"].string().required(),
    activity: _joi["default"].string().max(50).required(),
    lecturer: _joi["default"].string().min(4).max(50).required(),
    observation: _joi["default"].string().max(50).required()
  });

  var _schema$validate6 = schema.validate(req.body),
      error = _schema$validate6.error;

  if (error) return res.status(400).send({
    error: error.details[0].message
  });
  next();
};

exports.reportValidation = reportValidation;