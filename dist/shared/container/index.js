"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("@modules/users/providers");
require("../container/providers");
var LocalizationsRepository_1 = __importDefault(require("@modules/localizations/infra/typeorm/repositories/LocalizationsRepository"));
var UsersRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsersRepository"));
var RatingsRepository_1 = __importDefault(require("@modules/localizations/infra/typeorm/repositories/RatingsRepository"));
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
tsyringe_1.container.registerSingleton('LocalizationsRepository', LocalizationsRepository_1.default);
tsyringe_1.container.registerSingleton('RatingsRepository', RatingsRepository_1.default);
