"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cache = _interopRequireDefault(require("../../../../../config/cache"));

var _ioredis = _interopRequireDefault(require("ioredis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CacheRedisProvider {
  constructor() {
    this.client = void 0;
    this.client = new _ioredis.default(_cache.default.config.redis);
  }

  async save(key, value) {
    await this.client.set(key, JSON.stringify(value));
  }

  async recover(key) {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parsed = JSON.parse(data);
    return parsed;
  }

  async geoSave(key, lng, lat, name) {
    await this.client.geoadd(key, lng, lat, name);
  }

  async geoLocsPerProximity(key, lng, lat, radius) {
    const data = await this.client.georadius(key, lng, lat, radius, 'km', 'ASC');
    return data;
  }

  async invalidate(key) {}

  async invalidatePrefix(prefix) {
    const keys = await this.client.keys(`${prefix}:*`);
    const pipeline = this.client.pipeline();
    keys.forEach(key => {
      pipeline.del(key);
    });
    await pipeline.exec();
  }

}

exports.default = CacheRedisProvider;