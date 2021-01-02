"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwt: {
        secret: process.env.SECRET_KEY || 'default',
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
};
