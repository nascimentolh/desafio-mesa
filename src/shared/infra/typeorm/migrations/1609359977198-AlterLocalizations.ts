import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterLocalizations1609359977198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('localizations', 'long');
    await queryRunner.dropColumn('localizations', 'lat');
    await queryRunner.addColumn(
      'localizations',
      new TableColumn({ name: 'lng', type: 'float', default: 0 }),
    );
    await queryRunner.addColumn(
      'localizations',
      new TableColumn({ name: 'lat', type: 'float', default: 0 }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
