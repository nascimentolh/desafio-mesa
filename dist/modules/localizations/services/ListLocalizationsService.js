"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ILocalizationsRepository = _interopRequireDefault(require("../repositories/ILocalizationsRepository"));

var _axios = _interopRequireDefault(require("axios"));

var _ICacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/models/ICacheProvider"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListLocalizationsService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LocalizationsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CacheProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ILocalizationsRepository.default === "undefined" ? Object : _ILocalizationsRepository.default, typeof _ICacheProvider.default === "undefined" ? Object : _ICacheProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListLocalizationsService {
  constructor(localizationsRepository, cacheProvider) {
    this.localizationsRepository = localizationsRepository;
    this.cacheProvider = cacheProvider;
  }

  async list({
    user_id,
    query
  }) {
    let localizations = await this.cacheProvider.recover(`list-localizations:${user_id}`);
    let ipData = await this.cacheProvider.recover(`ip-data:${user_id}`);

    if (!ipData) {
      ipData = {
        latitude: -18.7907,
        longitude: -41.9902
      };
      const {
        data
      } = await (0, _axios.default)({
        url: 'https://api.ipdata.co?api-key=52a01d116c430d88fb99028ba593eedd4d5e5418d67c6c6504288b54',
        method: 'get'
      });
      await this.cacheProvider.save(`ip-data:${user_id}`, data);
    }

    if (!localizations) {
      localizations = await this.localizationsRepository.listAll();
      await this.cacheProvider.save(`list-localizations:${user_id}`, localizations);
      localizations.map(async localization => {
        await this.cacheProvider.geoSave(`geo-location:${user_id}`, localization.lng, localization.lat, localization.id);
      });
    }

    if (query === 'map') {
      const geoLocs = await this.cacheProvider.geoLocsPerProximity(`geo-location:${user_id}`, ipData.longitude, ipData.latitude, 5000);
      let mapped = [];
      geoLocs?.forEach(key => {
        let found = false;
        localizations?.filter(item => {
          if (!found && item.id == key) {
            mapped.push(item);
            found = true;
            return false;
          } else {
            return true;
          }
        });
      });
      return mapped;
    }

    return localizations;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = ListLocalizationsService;
exports.default = _default;