"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserFormat = _interopRequireDefault(require("../../../helpers/UserFormat"));

var _ShowProfileService = _interopRequireDefault(require("../../../services/ShowProfileService"));

var _UpdateUserService = _interopRequireDefault(require("../../../services/UpdateUserService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileController {
  async show(request, response) {
    const user_id = request.user.id;

    const showProfile = _tsyringe.container.resolve(_ShowProfileService.default);

    const user = await showProfile.execute({
      user_id
    });
    const userFormat = new _UserFormat.default();
    const parsedUser = userFormat.userFormat(user);
    return response.json(parsedUser);
  }

  async update(request, response) {
    const user_id = request.user.id;
    const {
      name,
      email,
      old_password,
      password
    } = request.body;

    const updateProfile = _tsyringe.container.resolve(_UpdateUserService.default);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password
    });
    const userFormat = new _UserFormat.default();
    const parsedUser = userFormat.userFormat(user);
    return response.json(parsedUser);
  }

}

exports.default = ProfileController;