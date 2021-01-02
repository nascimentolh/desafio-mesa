"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLocalizations1609334383850 = void 0;

var _typeorm = require("typeorm");

class CreateLocalizations1609334383850 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'localizations',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'long',
        type: 'varchar'
      }, {
        name: 'lat',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('localizations');
  }

}

exports.CreateLocalizations1609334383850 = CreateLocalizations1609334383850;