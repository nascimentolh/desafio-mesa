"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _Localization = _interopRequireDefault(require("../../infra/typeorm/entities/Localization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocalizationsRepository {
  constructor() {
    this.localizations = [];
  }

  async create({
    name,
    lng,
    lat
  }) {
    const localization = new _Localization.default();
    Object.assign(localization, {
      id: (0, _uuid.v4)(),
      name,
      lng,
      lat
    });
    this.localizations.push(localization);
    return localization;
  }

  async listAll() {
    return this.localizations;
  }

}

var _default = LocalizationsRepository;
exports.default = _default;