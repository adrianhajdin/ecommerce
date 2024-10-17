import { MigrationInterface, QueryRunner } from "typeorm";
export declare class allowBackorderSwaps1630505790603 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
