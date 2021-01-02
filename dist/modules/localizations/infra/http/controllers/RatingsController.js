"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateRatingsService = _interopRequireDefault(require("../../../services/CreateRatingsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingsController {
  async create(request, response) {
    const user_id = request.user.id;
    const {
      localization_id,
      rating,
      comment
    } = request.body;

    const createRating = _tsyringe.container.resolve(_CreateRatingsService.default);

    const resRating = await createRating.execute({
      user_id,
      localization_id,
      rating,
      comment
    });
    return response.json(resRating);
  }

}

exports.default = RatingsController;