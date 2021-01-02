"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/authenticated"));

var _RatingsController = _interopRequireDefault(require("../controllers/RatingsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ratingsRouter = (0, _express.Router)();
const ratingsController = new _RatingsController.default();
ratingsRouter.use(_authenticated.default);
ratingsRouter.post('/', ratingsController.create);
var _default = ratingsRouter;
exports.default = _default;