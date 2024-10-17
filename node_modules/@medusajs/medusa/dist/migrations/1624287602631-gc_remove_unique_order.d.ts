import { MigrationInterface, QueryRunner } from "typeorm";
export declare class gcRemoveUniqueOrder1624287602631 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
