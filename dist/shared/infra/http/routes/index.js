"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/auth.routes"));

var _localizations = _interopRequireDefault(require("../../../../modules/localizations/infra/http/routes/localizations.routes"));

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));

var _profile = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/profile.routes"));

var _ratings = _interopRequireDefault(require("../../../../modules/localizations/infra/http/routes/ratings.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/auth', _auth.default);
routes.use('/localizations', _localizations.default);
routes.use('/profile', _profile.default);
routes.use('/ratings', _ratings.default);
routes.use('/users', _users.default);
var _default = routes;
exports.default = _default;