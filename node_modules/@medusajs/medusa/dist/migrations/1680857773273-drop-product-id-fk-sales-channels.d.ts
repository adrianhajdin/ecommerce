import { MigrationInterface, QueryRunner } from "typeorm";
export declare class dropProductIdFkSalesChannels1680857773273 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
