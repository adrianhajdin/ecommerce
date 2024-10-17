import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class dropFksIsolatedProducts1694602553610 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
