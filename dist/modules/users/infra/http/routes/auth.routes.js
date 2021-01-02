"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthController = _interopRequireDefault(require("../controllers/AuthController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authRouter = (0, _express.Router)();
const authController = new _AuthController.default();
authRouter.post('/', authController.authenticate);
var _default = authRouter;
exports.default = _default;