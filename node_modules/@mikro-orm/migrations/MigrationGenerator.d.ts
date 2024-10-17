import { type IMigrationGenerator, type MigrationsOptions, type NamingStrategy } from '@mikro-orm/core';
import type { AbstractSqlDriver } from '@mikro-orm/knex';
export declare abstract class MigrationGenerator implements IMigrationGenerator {
    protected readonly driver: AbstractSqlDriver;
    protected readonly namingStrategy: NamingStrategy;
    protected readonly options: MigrationsOptions;
    constructor(driver: AbstractSqlDriver, namingStrategy: NamingStrategy, options: MigrationsOptions);
    /**
     * @inheritDoc
     */
    generate(diff: {
        up: string[];
        down: string[];
    }, path?: string, name?: string): Promise<[string, string]>;
    /**
     * @inheritDoc
     */
    createStatement(sql: string, padLeft: number): string;
    /**
     * @inheritDoc
     */
    abstract generateMigrationFile(className: string, diff: {
        up: string[];
        down: string[];
    }): string;
}
