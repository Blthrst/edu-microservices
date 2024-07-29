import { MigrationInterface, QueryRunner } from 'typeorm';

export class Projects1719029018763 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exists projects (
            id integer primary key not null,
            title varchar(255) not null,
            created_at date not null,
            user_id varchar(255) not null
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table if exists projects`);
  }
}
