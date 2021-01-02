"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UserFormat {
  userFormat(user) {
    const parsed = user;
    delete parsed.password;
    return parsed;
  }

}

exports.default = UserFormat;