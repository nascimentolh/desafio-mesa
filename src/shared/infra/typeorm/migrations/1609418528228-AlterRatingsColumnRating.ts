import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterRatingsColumnRating1609418528228
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('ratings', 'rating');
    await queryRunner.addColumn(
      'ratings',
      new TableColumn({ name: 'rating', type: 'float', isNullable: false }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('ratings', 'rating');
    await queryRunner.addColumn(
      'ratings',
      new TableColumn({ name: 'rating', type: 'integer', isNullable: false }),
    );
  }
}
