"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ICacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/models/ICacheProvider"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _tsyringe = require("tsyringe");

var _IRatingsRepository = _interopRequireDefault(require("../repositories/IRatingsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateRatingsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('RatingsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CacheProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IRatingsRepository.default === "undefined" ? Object : _IRatingsRepository.default, typeof _ICacheProvider.default === "undefined" ? Object : _ICacheProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateRatingsService {
  constructor(ratingsRepository, cacheProvider) {
    this.ratingsRepository = ratingsRepository;
    this.cacheProvider = cacheProvider;
  }

  async execute({
    user_id,
    localization_id,
    rating,
    comment
  }) {
    if (rating > 5) {
      throw new _AppError.default('Please insert valid rating (0-5)');
    }

    const response = await this.ratingsRepository.create({
      user_id: user_id,
      localization_id: localization_id,
      rating: rating,
      comment: comment
    });
    await this.cacheProvider.invalidatePrefix(`geo-location`);
    await this.cacheProvider.invalidatePrefix(`list-localizations`);
    return response;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateRatingsService;
exports.default = _default;