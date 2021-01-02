"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/authenticated"));
var LocalizationsController_1 = __importDefault(require("../controllers/LocalizationsController"));
var localizationsRouter = express_1.Router();
var localizationsController = new LocalizationsController_1.default();
localizationsRouter.use(authenticated_1.default);
localizationsRouter.get('/', localizationsController.index);
localizationsRouter.post('/', localizationsController.create);
exports.default = localizationsRouter;
