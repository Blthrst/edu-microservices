"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1721886668812 = void 0;
class Users1721886668812 {
    async up(queryRunner) {
        await queryRunner.query(`
            create table if not exists users (
                id varchar(255) primary key not null,
                email varchar(255) not null,
                password varchar(255) not null
            );
            `);
    }
    async down(queryRunner) {
        await queryRunner.query(`drop table if exists users`);
    }
}
exports.Users1721886668812 = Users1721886668812;
//# sourceMappingURL=1721886668812-users.js.map