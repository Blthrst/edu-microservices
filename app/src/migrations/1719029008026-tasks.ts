import { MigrationInterface, QueryRunner } from 'typeorm';

export class Tasks1719029008026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exists tasks (
            id integer primary key not null,
            number integer not null,
            title varchar(255) not null,
            description varchar(255) not null,
            created_at timestamp not null,
            project_id integer not null,
            column_id integer not null
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table if exists tasks`);
  }
}
