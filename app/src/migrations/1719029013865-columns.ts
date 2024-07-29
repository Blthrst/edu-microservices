import { MigrationInterface, QueryRunner } from 'typeorm';

export class Columns1719029013865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exists columns (
            id integer primary key not null,
            number integer not null,
            title varchar(255) not null,
            project_id integer not null
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table if exists columns`);
  }
}
