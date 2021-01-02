"use strict";

var _tsyringe = require("tsyringe");

var _CacheRedisProvider = _interopRequireDefault(require("./implementations/CacheRedisProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  redis: _CacheRedisProvider.default
};

_tsyringe.container.registerSingleton('CacheProvider', providers.redis);