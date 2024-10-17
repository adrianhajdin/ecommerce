import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addTaxRateToGiftCards1670855241304 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
