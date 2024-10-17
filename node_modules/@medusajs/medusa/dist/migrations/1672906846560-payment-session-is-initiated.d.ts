import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PaymentSessionIsInitiated1672906846560 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
