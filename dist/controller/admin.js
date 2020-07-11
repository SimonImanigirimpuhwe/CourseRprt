"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _admin = _interopRequireDefault(require("../model/admin"));

var _createToken = _interopRequireDefault(require("../helper/createToken"));

var AdminController = /*#__PURE__*/function () {
  function AdminController() {
    (0, _classCallCheck2["default"])(this, AdminController);
  }

  (0, _createClass2["default"])(AdminController, null, [{
    key: "signup",
    value: function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var emailExist, salt, hashPassword, admin, savedAdmin, token, firstName, lastName, username, email, _id;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _admin["default"].findOne({
                  email: req.body.email
                });

              case 2:
                emailExist = _context.sent;

                if (!emailExist) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  msg: "".concat(emailExist.username, " Already registered")
                }));

              case 5:
                _context.next = 7;
                return _bcryptjs["default"].genSalt(10);

              case 7:
                salt = _context.sent;
                _context.next = 10;
                return _bcryptjs["default"].hash(req.body.password, salt);

              case 10:
                hashPassword = _context.sent;
                admin = new _admin["default"]({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  username: req.body.username,
                  email: req.body.email,
                  password: hashPassword,
                  isProfessional: req.body.isProfessional
                });
                _context.prev = 12;
                _context.next = 15;
                return admin.save();

              case 15:
                savedAdmin = _context.sent;
                token = (0, _createToken["default"])(savedAdmin);
                firstName = savedAdmin.firstName, lastName = savedAdmin.lastName, username = savedAdmin.username, email = savedAdmin.email, _id = savedAdmin._id;
                return _context.abrupt("return", res.send({
                  token: token,
                  body: {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    _id: _id
                  }
                }));

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](12);
                return _context.abrupt("return", res.status(500).send({
                  error: _context.t0.message
                }));

              case 24:
                ;

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[12, 21]]);
      }));

      function signup(_x, _x2) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var admin, validPass, token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _admin["default"].findOne({
                  username: req.body.username
                });

              case 2:
                admin = _context2.sent;

                if (admin) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  msg: 'Invalid username or password'
                }));

              case 5:
                _context2.prev = 5;
                _context2.next = 8;
                return _bcryptjs["default"].compare(req.body.password, admin.password);

              case 8:
                validPass = _context2.sent;

                if (validPass) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", res.status(403).json({
                  msg: 'Invalid Password'
                }));

              case 11:
                token = (0, _createToken["default"])(admin);
                res.status(200).json({
                  msg: 'Logged in successfully',
                  token: token
                });
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](5);
                return _context2.abrupt("return", res.status(500).send({
                  error: _context2.t0.message
                }));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 15]]);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return AdminController;
}();

var _default = AdminController;
exports["default"] = _default;