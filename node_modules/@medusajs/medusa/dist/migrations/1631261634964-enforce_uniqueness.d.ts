import { MigrationInterface, QueryRunner } from "typeorm";
export declare class enforceUniqueness1631261634964 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
