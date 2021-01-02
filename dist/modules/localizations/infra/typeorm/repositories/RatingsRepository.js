"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Rating = _interopRequireDefault(require("../entities/Rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Rating.default);
  }

  async create(data) {
    const rating = this.ormRepository.create(data);
    await this.ormRepository.save(rating);
    return rating;
  }

}

var _default = RatingsRepository;
exports.default = _default;