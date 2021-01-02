"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = __importDefault(require("../controllers/AuthController"));
var authRouter = express_1.Router();
var authController = new AuthController_1.default();
authRouter.post('/', authController.authenticate);
exports.default = authRouter;
