import type { MigrationParams } from '../types';
export declare type UmzugStorage<Ctx = unknown> = {
    /**
     * Logs migration to be considered as executed.
     */
    logMigration: (params: MigrationParams<Ctx>) => Promise<void>;
    /**
     * Unlogs migration (makes it to be considered as pending).
     */
    unlogMigration: (params: MigrationParams<Ctx>) => Promise<void>;
    /**
     * Gets list of executed migrations.
     */
    executed: (meta: Pick<MigrationParams<Ctx>, 'context'>) => Promise<string[]>;
};
export declare function isUmzugStorage(arg: Partial<UmzugStorage>): arg is UmzugStorage;
export declare const verifyUmzugStorage: (arg: Partial<UmzugStorage>) => UmzugStorage;
