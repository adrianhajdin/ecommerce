import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RankColumnWithDefaultValue1631104895519 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
