import { type Configuration, type MigrationsOptions, type Transaction } from '@mikro-orm/core';
import type { AbstractSqlDriver } from '@mikro-orm/knex';
import type { Migration } from './Migration';
export declare class MigrationRunner {
    protected readonly driver: AbstractSqlDriver;
    protected readonly options: MigrationsOptions;
    protected readonly config: Configuration;
    private readonly connection;
    private readonly helper;
    private masterTransaction?;
    constructor(driver: AbstractSqlDriver, options: MigrationsOptions, config: Configuration);
    run(migration: Migration, method: 'up' | 'down'): Promise<void>;
    setMasterMigration(trx: Transaction): void;
    unsetMasterMigration(): void;
    private getQueries;
}
