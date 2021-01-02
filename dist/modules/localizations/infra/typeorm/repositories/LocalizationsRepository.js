"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Localization = _interopRequireDefault(require("../entities/Localization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocalizationsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Localization.default);
  }

  async create(data) {
    const localization = this.ormRepository.create(data);
    await this.ormRepository.save(localization);
    return localization;
  }

  async listAll() {
    return this.ormRepository.find({
      relations: ['ratings', 'ratings.user']
    });
  }

}

var _default = LocalizationsRepository;
exports.default = _default;