import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string;
export declare class addSalesChannelMetadata1680714052628 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
