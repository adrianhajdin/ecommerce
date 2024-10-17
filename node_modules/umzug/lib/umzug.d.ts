import type { CommandLineParserOptions } from './cli';
import { UmzugCLI } from './cli';
import emittery = require('emittery');
import errorCause = require('pony-cause');
import type { MigrateDownOptions, MigrateUpOptions, MigrationMeta, MigrationParams, Resolver, RunnableMigration, UmzugEvents, UmzugOptions } from './types';
declare type MigrationErrorParams = {
    direction: 'up' | 'down';
} & MigrationParams<unknown>;
export declare class MigrationError extends errorCause.ErrorWithCause<unknown> {
    name: string;
    migration: MigrationErrorParams;
    jse_cause: unknown;
    constructor(migration: MigrationErrorParams, original: unknown);
    get info(): MigrationErrorParams;
    private static errorString;
}
export declare class Umzug<Ctx extends object = object> extends emittery<UmzugEvents<Ctx>> {
    readonly options: UmzugOptions<Ctx>;
    private readonly storage;
    readonly migrations: (ctx: Ctx) => Promise<ReadonlyArray<RunnableMigration<Ctx>>>;
    /**
     * Compile-time only property for type inference. After creating an Umzug instance, it can be used as type alias for
     * a user-defined migration. The function receives a migration name, path and the context for an umzug instance
     * @example
     * ```
     * // migrator.ts
     * import { Umzug } from 'umzug'
     *
     * const umzug = new Umzug({...})
     * export type Migration = typeof umzug._types.migration;
     *
     * umzug.up();
     * ```
     * ___
     *
     * ```
     * // migration-1.ts
     * import type { Migration } from '../migrator'
     *
     * // name and context will now be strongly-typed
     * export const up: Migration = ({name, context}) => context.query(...)
     * export const down: Migration = ({name, context}) => context.query(...)
     * ```
     */
    readonly _types: {
        migration: (params: MigrationParams<Ctx>) => Promise<unknown>;
        context: Ctx;
    };
    /** creates a new Umzug instance */
    constructor(options: UmzugOptions<Ctx>);
    private logging;
    static defaultResolver: Resolver<unknown>;
    /**
     * Get an UmzugCLI instance. This can be overriden in a subclass to add/remove commands - only use if you really know you need this,
     * and are OK to learn about/interact with the API of @rushstack/ts-command-line.
     */
    protected getCli(options?: CommandLineParserOptions): UmzugCLI;
    /**
     * 'Run' an umzug instance as a CLI. This will read `process.argv`, execute commands based on that, and call
     * `process.exit` after running. If that isn't what you want, stick to the programmatic API.
     * You probably want to run only if a file is executed as the process's 'main' module with something like:
     * @example
     * if (require.main === module) {
     *   myUmzugInstance.runAsCLI()
     * }
     */
    runAsCLI(argv?: string[]): Promise<boolean>;
    /** Get the list of migrations which have already been applied */
    executed(): Promise<MigrationMeta[]>;
    /** Get the list of migrations which have already been applied */
    private _executed;
    /** Get the list of migrations which are yet to be applied */
    pending(): Promise<MigrationMeta[]>;
    private _pending;
    protected runCommand<T>(command: string, cb: (commandParams: {
        context: Ctx;
    }) => Promise<T>): Promise<T>;
    /**
     * Apply migrations. By default, runs all pending migrations.
     * @see MigrateUpOptions for other use cases using `to`, `migrations` and `rerun`.
     */
    up(options?: MigrateUpOptions): Promise<MigrationMeta[]>;
    /**
     * Revert migrations. By default, the last executed migration is reverted.
     * @see MigrateDownOptions for other use cases using `to`, `migrations` and `rerun`.
     */
    down(options?: MigrateDownOptions): Promise<MigrationMeta[]>;
    create(options: {
        name: string;
        folder?: string;
        prefix?: 'TIMESTAMP' | 'DATE' | 'NONE';
        allowExtension?: string;
        allowConfusingOrdering?: boolean;
        skipVerify?: boolean;
    }): Promise<void>;
    private static defaultCreationTemplate;
    private findNameIndex;
    private findMigrations;
    private getContext;
    /** helper for parsing input migrations into a callback returning a list of ready-to-run migrations */
    private getMigrationsResolver;
}
export {};
