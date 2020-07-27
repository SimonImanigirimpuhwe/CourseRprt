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

var _user = _interopRequireDefault(require("../model/user"));

var _createToken = _interopRequireDefault(require("../helper/createToken"));

var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var user, cp, savedCp;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user["default"].findOne({
                  regNumber: req.body.regNumber
                });

              case 2:
                user = _context.sent;

                if (!user) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  error: "User with regNumber ".concat(user.regNumber, " was registered before")
                }));

              case 5:
                cp = new _user["default"]({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  regNumber: req.body.regNumber,
                  address: {
                    school: req.body.school,
                    faculty: req.body.faculty,
                    level: req.body.level
                  }
                });
                _context.prev = 6;
                _context.next = 9;
                return cp.save();

              case 9:
                savedCp = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  msg: 'Class Representative added successfully',
                  savedCp: savedCp
                }));

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                return _context.abrupt("return", res.status(400).json({
                  error: _context.t0.message
                }));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 13]]);
      }));

      function addUser(_x, _x2) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var user, token;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user["default"].findOne({
                  regNumber: req.body.regNumber
                });

              case 2:
                user = _context2.sent;

                if (user) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status(401).json({
                  error: 'Unauthorized'
                }));

              case 5:
                _context2.prev = 5;
                token = (0, _createToken["default"])(user);
                return _context2.abrupt("return", res.status(200).json({
                  msg: 'Logged in successfully',
                  token: token
                }));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](5);
                return _context2.abrupt("return", res.status(500).json({
                  error: 'Internal error'
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 10]]);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "editUser",
    value: function () {
      var _editUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var newUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _user["default"].findByIdAndUpdate(req.params.id, {
                  $set: {
                    address: {
                      school: req.body.school,
                      faculty: req.body.faculty,
                      level: req.body.level
                    }
                  }
                }, {
                  "new": true
                });

              case 3:
                newUser = _context3.sent;

                if (newUser) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  error: "User with given regNumber is not found"
                }));

              case 6:
                return _context3.abrupt("return", res.status(200).json({
                  msg: 'User updated successfully',
                  newUser: newUser
                }));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  error: _context3.t0.message
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function editUser(_x5, _x6) {
        return _editUser.apply(this, arguments);
      }

      return editUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _user["default"].findByIdAndRemove(req.params.id, {
                  "new": true
                });

              case 3:
                user = _context4.sent;

                if (user) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  error: "Class Representative with given regNumber  is not found"
                }));

              case 6:
                return _context4.abrupt("return", res.status(200).json(user));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(500).json({
                  error: _context4.t0.message
                }));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function deleteUser(_x7, _x8) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }, {
    key: "searchUser",
    value: function () {
      var _searchUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var searchedUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _user["default"].find({
                  $or: [{
                    firstName: req.body.firstName
                  }, {
                    lastName: req.body.lastName
                  }, {
                    regNumber: req.body.regNumber
                  }]
                });

              case 3:
                searchedUser = _context5.sent;

                if (!(searchedUser.length === 0)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", res.status(400).json({
                  error: 'No such user in database'
                }));

              case 6:
                return _context5.abrupt("return", res.status(200).json({
                  searchedUser: searchedUser
                }));

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).json({
                  error: _context5.t0.message
                }));

              case 12:
                ;

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function searchUser(_x9, _x10) {
        return _searchUser.apply(this, arguments);
      }

      return searchUser;
    }()
  }, {
    key: "usersList",
    value: function () {
      var _usersList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _user["default"].find().sort('school');

              case 3:
                user = _context6.sent;

                if (user) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", res.status(400).json({
                  error: 'No users in DB yet'
                }));

              case 6:
                return _context6.abrupt("return", res.status(200).json(user));

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                res.status(400).json({
                  error: _context6.t0.message
                });

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }));

      function usersList(_x11, _x12) {
        return _usersList.apply(this, arguments);
      }

      return usersList;
    }()
  }]);
  return UserController;
}();

;
var _default = UserController;
exports["default"] = _default;