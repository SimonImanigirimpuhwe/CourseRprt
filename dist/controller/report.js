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

var _report = _interopRequireDefault(require("../model/report"));

var ReportController = /*#__PURE__*/function () {
  function ReportController() {
    (0, _classCallCheck2["default"])(this, ReportController);
  }

  (0, _createClass2["default"])(ReportController, null, [{
    key: "submitReport",
    value: function () {
      var _submitReport = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var report, newReport, reported;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _report["default"].findOne({
                  days: req.body.days,
                  date: req.body.date,
                  faculty: req.body.faculty,
                  level: req.body.level
                });

              case 2:
                report = _context.sent;

                if (!report) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  error: 'The report have been sumbitted before'
                }));

              case 5:
                newReport = new _report["default"]({
                  school: req.body.school,
                  faculty: req.body.faculty,
                  level: req.body.level,
                  studentsNumber: req.body.studentsNumber,
                  days: req.body.days,
                  date: req.body.date,
                  body: {
                    hours: req.body.hours,
                    module: req.body.module,
                    component: req.body.component,
                    activity: req.body.activity,
                    lecturer: req.body.lecturer,
                    observation: req.body.observation
                  }
                });
                _context.prev = 6;
                _context.next = 9;
                return newReport.save();

              case 9:
                reported = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  msg: 'Report submitted successfully',
                  reported: reported
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

      function submitReport(_x, _x2) {
        return _submitReport.apply(this, arguments);
      }

      return submitReport;
    }()
  }, {
    key: "searchReport",
    value: function () {
      var _searchReport = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var searchedRprt;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _report["default"].find({
                  $or: [{
                    faculty: req.body.faculty
                  }, {
                    level: req.body.level
                  }]
                });

              case 3:
                searchedRprt = _context2.sent;

                if (!(searchedRprt.length === 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  error: 'No such report in DB'
                }));

              case 6:
                return _context2.abrupt("return", res.status(200).json({
                  searchedRprt: searchedRprt
                }));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  error: _context2.t0.message
                }));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function searchReport(_x3, _x4) {
        return _searchReport.apply(this, arguments);
      }

      return searchReport;
    }()
  }, {
    key: "viewReports",
    value: function () {
      var _viewReports = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var allReports;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _report["default"].find();

              case 3:
                allReports = _context3.sent;

                if (!(allReports.length === 0)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(400).send({
                  error: 'No reports found'
                }));

              case 6:
                res.status(200).json(allReports);
                _context3.next = 12;
                break;

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

      function viewReports(_x5, _x6) {
        return _viewReports.apply(this, arguments);
      }

      return viewReports;
    }()
  }]);
  return ReportController;
}();

var _default = ReportController;
exports["default"] = _default;