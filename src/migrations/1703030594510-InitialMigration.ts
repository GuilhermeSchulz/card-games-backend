import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1703030594510 implements MigrationInterface {
    name = 'InitialMigration1703030594510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "deck_card_cards" ("deckId" uuid NOT NULL, "cardsId" uuid NOT NULL, CONSTRAINT "PK_ca44cac3e16b06df46cee5f6f35" PRIMARY KEY ("deckId", "cardsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e4620d8ac1a867b1b33b75c9dc" ON "deck_card_cards" ("deckId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0f002ebfda4cbf094730d36ced" ON "deck_card_cards" ("cardsId") `);
        await queryRunner.query(`ALTER TABLE "deck_card_cards" ADD CONSTRAINT "FK_e4620d8ac1a867b1b33b75c9dc9" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "deck_card_cards" ADD CONSTRAINT "FK_0f002ebfda4cbf094730d36cedb" FOREIGN KEY ("cardsId") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deck_card_cards" DROP CONSTRAINT "FK_0f002ebfda4cbf094730d36cedb"`);
        await queryRunner.query(`ALTER TABLE "deck_card_cards" DROP CONSTRAINT "FK_e4620d8ac1a867b1b33b75c9dc9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0f002ebfda4cbf094730d36ced"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e4620d8ac1a867b1b33b75c9dc"`);
        await queryRunner.query(`DROP TABLE "deck_card_cards"`);
    }

}
