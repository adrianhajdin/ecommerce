import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectOnboardingFields1690996567455 implements MigrationInterface {
    name = 'CorrectOnboardingFields1690996567455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "onboarding_state" ADD CONSTRAINT "PK_891b72628471aada55d7b8c9410" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "onboarding_state" ALTER COLUMN "is_complete" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "onboarding_state" ALTER COLUMN "is_complete" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "onboarding_state" DROP CONSTRAINT "PK_891b72628471aada55d7b8c9410"`);
    }

}
