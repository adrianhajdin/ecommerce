import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOnboardingProduct1686062614694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "onboarding_state" ADD COLUMN "product_id" character varying NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "onboarding_state" DROP COLUMN "product_id"`
    );
  }
}
