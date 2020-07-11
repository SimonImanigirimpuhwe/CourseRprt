"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var generateToken = function generateToken(info) {
  var secretKey = process.env.SECRET_KEY;

  try {
    var token = _jsonwebtoken["default"].sign({
      _id: info._id,
      username: info.username,
      isProfessional: info.isProfessional
    }, secretKey, {
      algorithm: 'HS256',
      expiresIn: '5d'
    });

    return token;
  } catch (error) {
    throw new Error({
      err: 'Internal error'
    });
  }
};

var _default = generateToken;
exports["default"] = _default;