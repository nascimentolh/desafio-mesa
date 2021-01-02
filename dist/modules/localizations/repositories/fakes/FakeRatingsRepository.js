"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _Rating = _interopRequireDefault(require("../../infra/typeorm/entities/Rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeRatingsRepository {
  constructor() {
    this.ratings = [];
  }

  async create(data) {
    const ratingN = new _Rating.default();
    Object.assign(ratingN, {
      id: (0, _uuid.v4)()
    }, data);
    this.ratings.push(ratingN);
    return ratingN;
  }

}

var _default = FakeRatingsRepository;
exports.default = _default;