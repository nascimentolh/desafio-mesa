"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddLocalizationIDColumnInRatings1609418915932 = void 0;

var _typeorm = require("typeorm");

class AddLocalizationIDColumnInRatings1609418915932 {
  async up(queryRunner) {
    await queryRunner.addColumn('ratings', new _typeorm.TableColumn({
      name: 'localization_id',
      type: 'uuid',
      isNullable: false
    }));
    await queryRunner.createForeignKey('ratings', new _typeorm.TableForeignKey({
      name: 'RatingsLocalization',
      columnNames: ['localization_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'localizations',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('ratings', 'RatingsLocalization');
    await queryRunner.dropColumn('ratings', 'localization_id');
  }

}

exports.AddLocalizationIDColumnInRatings1609418915932 = AddLocalizationIDColumnInRatings1609418915932;