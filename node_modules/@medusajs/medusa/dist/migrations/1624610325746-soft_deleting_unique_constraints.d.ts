import { MigrationInterface, QueryRunner } from "typeorm";
export declare class softDeletingUniqueConstraints1624610325746 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
