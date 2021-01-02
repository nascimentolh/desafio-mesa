import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddLocalizationIDColumnInRatings1609418915932
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ratings',
      new TableColumn({
        name: 'localization_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'ratings',
      new TableForeignKey({
        name: 'RatingsLocalization',
        columnNames: ['localization_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'localizations',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ratings', 'RatingsLocalization');
    await queryRunner.dropColumn('ratings', 'localization_id');
  }
}
