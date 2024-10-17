import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class test1659501357661 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
