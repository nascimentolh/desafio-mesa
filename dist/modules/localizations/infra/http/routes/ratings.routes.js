"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/authenticated"));
var RatingsController_1 = __importDefault(require("../controllers/RatingsController"));
var ratingsRouter = express_1.Router();
var ratingsController = new RatingsController_1.default();
ratingsRouter.use(authenticated_1.default);
ratingsRouter.post('/', ratingsController.create);
exports.default = ratingsRouter;
