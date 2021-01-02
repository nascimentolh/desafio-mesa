"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserFormat = /** @class */ (function () {
    function UserFormat() {
    }
    UserFormat.prototype.userFormat = function (user) {
        var parsed = user;
        delete parsed.password;
        return parsed;
    };
    return UserFormat;
}());
exports.default = UserFormat;
