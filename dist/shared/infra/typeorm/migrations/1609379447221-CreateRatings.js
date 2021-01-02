"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRatings1609379447221 = void 0;

var _typeorm = require("typeorm");

class CreateRatings1609379447221 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'ratings',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'user_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'rating',
        type: 'integer',
        isNullable: false
      }, {
        name: 'comment',
        type: 'text',
        isNullable: true
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
    await queryRunner.createForeignKey('ratings', new _typeorm.TableForeignKey({
      name: 'RatingUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('ratings', 'RatingUser');
    await queryRunner.dropTable('ratings');
  }

}

exports.CreateRatings1609379447221 = CreateRatings1609379447221;