import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class salesChannel1656949291839 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
