import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addDiscountableToProduct1627995307200 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
