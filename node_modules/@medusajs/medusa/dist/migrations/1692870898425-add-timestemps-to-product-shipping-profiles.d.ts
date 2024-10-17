import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class AddTimestempsToProductShippingProfiles1692870898425 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
