"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  jwt: {
    secret: process.env.SECRET_KEY || 'default',
    expiresIn: process.env.JWT_EXPIRES_IN
  }
};
exports.default = _default;