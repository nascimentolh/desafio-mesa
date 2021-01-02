"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/users/providers");

require("../container/providers");

var _LocalizationsRepository = _interopRequireDefault(require("../../modules/localizations/infra/typeorm/repositories/LocalizationsRepository"));

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _RatingsRepository = _interopRequireDefault(require("../../modules/localizations/infra/typeorm/repositories/RatingsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('LocalizationsRepository', _LocalizationsRepository.default);

_tsyringe.container.registerSingleton('RatingsRepository', _RatingsRepository.default);