"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/authenticated"));

var _LocalizationsController = _interopRequireDefault(require("../controllers/LocalizationsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localizationsRouter = (0, _express.Router)();
const localizationsController = new _LocalizationsController.default();
localizationsRouter.use(_authenticated.default);
localizationsRouter.get('/', localizationsController.index);
localizationsRouter.post('/', localizationsController.create);
var _default = localizationsRouter;
exports.default = _default;