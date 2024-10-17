import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class DropNonNullConstraintPriceList1699371074198 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
