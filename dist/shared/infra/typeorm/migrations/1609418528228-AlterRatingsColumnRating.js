"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterRatingsColumnRating1609418528228 = void 0;

var _typeorm = require("typeorm");

class AlterRatingsColumnRating1609418528228 {
  async up(queryRunner) {
    await queryRunner.dropColumn('ratings', 'rating');
    await queryRunner.addColumn('ratings', new _typeorm.TableColumn({
      name: 'rating',
      type: 'float',
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('ratings', 'rating');
    await queryRunner.addColumn('ratings', new _typeorm.TableColumn({
      name: 'rating',
      type: 'integer',
      isNullable: false
    }));
  }

}

exports.AlterRatingsColumnRating1609418528228 = AlterRatingsColumnRating1609418528228;