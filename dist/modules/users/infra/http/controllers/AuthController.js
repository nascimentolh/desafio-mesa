"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AuthenticateUserService = _interopRequireDefault(require("../../../services/AuthenticateUserService"));

var _UserFormat = _interopRequireDefault(require("../../../helpers/UserFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthController {
  async authenticate(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateUser = _tsyringe.container.resolve(_AuthenticateUserService.default);

    const {
      user,
      access_token
    } = await authenticateUser.execute({
      email,
      password
    });
    const userFormat = new _UserFormat.default();
    const parsedUser = userFormat.userFormat(user);
    return response.json({
      parsedUser,
      access_token
    });
  }

}

exports.default = AuthController;