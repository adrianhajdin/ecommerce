import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string[];
export declare class OrderSalesChannelLink1701860329931 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
