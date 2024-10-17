import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class addAnalyticsConfig1666173221888 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
