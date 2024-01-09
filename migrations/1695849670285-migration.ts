import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1695849670285 implements MigrationInterface {
  name = 'Migration1695849670285'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "book" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "author" character varying NOT NULL, "editorial" character varying NOT NULL, "pages" integer NOT NULL, "year" integer NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "book"`)
  }
}
