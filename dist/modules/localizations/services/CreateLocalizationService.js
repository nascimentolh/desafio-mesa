"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ICacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/models/ICacheProvider"));

var _tsyringe = require("tsyringe");

var _ILocalizationsRepository = _interopRequireDefault(require("../repositories/ILocalizationsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateLocalizationService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LocalizationsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CacheProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ILocalizationsRepository.default === "undefined" ? Object : _ILocalizationsRepository.default, typeof _ICacheProvider.default === "undefined" ? Object : _ICacheProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateLocalizationService {
  constructor(localizationsRepository, cacheProvider) {
    this.localizationsRepository = localizationsRepository;
    this.cacheProvider = cacheProvider;
  }

  async execute({
    name,
    lng,
    lat
  }) {
    const localization = await this.localizationsRepository.create({
      name,
      lng,
      lat
    });
    await this.cacheProvider.invalidatePrefix(`geo-location`);
    await this.cacheProvider.invalidatePrefix(`list-localizations`);
    return localization;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateLocalizationService;
exports.default = _default;