"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authenticated;

var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../../../config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.default('JWT token not found', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = (0, _jsonwebtoken.verify)(token, _auth.default.jwt.secret);
    const {
      sub
    } = decoded;
    request.user = {
      id: sub
    };
    return next();
  } catch {
    throw new _AppError.default('Invalid JWT Token', 403);
  }
}