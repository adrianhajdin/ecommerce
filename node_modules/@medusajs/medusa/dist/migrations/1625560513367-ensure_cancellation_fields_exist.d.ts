import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ensureCancellationFieldsExist1625560513367 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
