"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterLocalizations1609359977198 = void 0;

var _typeorm = require("typeorm");

class AlterLocalizations1609359977198 {
  async up(queryRunner) {
    await queryRunner.dropColumn('localizations', 'long');
    await queryRunner.dropColumn('localizations', 'lat');
    await queryRunner.addColumn('localizations', new _typeorm.TableColumn({
      name: 'lng',
      type: 'float',
      default: 0
    }));
    await queryRunner.addColumn('localizations', new _typeorm.TableColumn({
      name: 'lat',
      type: 'float',
      default: 0
    }));
  }

  async down(queryRunner) {}

}

exports.AlterLocalizations1609359977198 = AlterLocalizations1609359977198;