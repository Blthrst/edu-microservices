import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1721886668812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            create table if not exists users (
                id varchar(255) primary key not null,
                email varchar(255) not null,
                password varchar(255) not null
            );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table if exists users`);
  }
}
