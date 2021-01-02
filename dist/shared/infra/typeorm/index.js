"use strict";

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)({
  type: 'postgres',
  url: process.env.DATABASE_URL
});