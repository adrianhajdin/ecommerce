import { MigrationInterface, QueryRunner } from "typeorm";
export declare class swapFulfillmentStatusRequiresAction1661863940645 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
