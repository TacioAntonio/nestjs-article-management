import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1714067716158 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "user" (
            "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            "username" VARCHAR(8) NOT NULL CHECK (LENGTH("username") >= 3),
            "email" VARCHAR(50) NOT NULL,
            "password" VARCHAR(100) NOT NULL CHECK (LENGTH("password") >= 6),
            "isAdmin" BOOLEAN NOT NULL DEFAULT false
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
