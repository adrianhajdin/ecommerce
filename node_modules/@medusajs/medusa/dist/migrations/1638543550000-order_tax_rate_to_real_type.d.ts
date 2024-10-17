import { MigrationInterface, QueryRunner } from "typeorm";
export declare class orderTaxRateToRealType1638543550000 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
