import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableArticle1714068398803 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "article" (
                "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                "title" VARCHAR(15) NOT NULL CHECK (CHAR_LENGTH("title") >= 3),
                "content" TEXT NOT NULL CHECK (CHAR_LENGTH("content") >= 100),
                "userId" UUID,
                FOREIGN KEY ("userId") REFERENCES "user"("id")
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "article"`);
  }
}
