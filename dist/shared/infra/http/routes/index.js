"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_routes_1 = __importDefault(require("@modules/users/infra/http/routes/auth.routes"));
var localizations_routes_1 = __importDefault(require("@modules/localizations/infra/http/routes/localizations.routes"));
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var profile_routes_1 = __importDefault(require("@modules/users/infra/http/routes/profile.routes"));
var ratings_routes_1 = __importDefault(require("@modules/localizations/infra/http/routes/ratings.routes"));
var routes = express_1.Router();
routes.use('/auth', auth_routes_1.default);
routes.use('/localizations', localizations_routes_1.default);
routes.use('/profile', profile_routes_1.default);
routes.use('/ratings', ratings_routes_1.default);
routes.use('/users', users_routes_1.default);
exports.default = routes;
