import type { MigrationsOptions, Transaction } from '@mikro-orm/core';
import type { AbstractSqlDriver } from '@mikro-orm/knex';
import type { MigrationParams, UmzugStorage } from 'umzug';
import type { MigrationRow } from './typings';
export declare class MigrationStorage implements UmzugStorage {
    protected readonly driver: AbstractSqlDriver;
    protected readonly options: MigrationsOptions;
    private readonly connection;
    private readonly helper;
    private masterTransaction?;
    constructor(driver: AbstractSqlDriver, options: MigrationsOptions);
    executed(): Promise<string[]>;
    logMigration(params: MigrationParams<any>): Promise<void>;
    unlogMigration(params: MigrationParams<any>): Promise<void>;
    getExecutedMigrations(): Promise<MigrationRow[]>;
    ensureTable(): Promise<void>;
    setMasterMigration(trx: Transaction): void;
    unsetMasterMigration(): void;
    /**
     * @internal
     */
    getMigrationName(name: string): string;
    /**
     * @internal
     */
    getTableName(): {
        tableName: string;
        schemaName: string;
    };
    private get knex();
}
