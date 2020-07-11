"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _compression = _interopRequireDefault(require("compression"));

var _admins = _interopRequireDefault(require("./route/admins"));

var _users = _interopRequireDefault(require("./route/users"));

var _reports = _interopRequireDefault(require("./route/reports"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _compression["default"])());
app.use(_express["default"].json());
app.use('/api/v1/admins', _admins["default"]);
app.use('/api/v1/users', _users["default"]);
app.use('/api/v1/report', _reports["default"]);
app.get('/', function (req, res) {
  res.status(200).json({
    msg: 'A warmth Welcome to daily courses report.'
  });
});
var port = process.env.PORT || 3000;
var url = process.env.DATABASE_URL;

_mongoose["default"].connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, function (error) {
  if (error) throw error;
  console.log('Connected to DB');
});

app.listen(port, function () {
  return console.log("App running on ".concat(port, "..."));
});