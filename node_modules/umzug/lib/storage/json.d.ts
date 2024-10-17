import type { UmzugStorage } from './contract';
export declare type JSONStorageConstructorOptions = {
    /**
    Path to JSON file where the log is stored.

    @default './umzug.json'
    */
    readonly path?: string;
};
export declare class JSONStorage implements UmzugStorage {
    readonly path: string;
    constructor(options?: JSONStorageConstructorOptions);
    logMigration({ name: migrationName }: {
        name: string;
    }): Promise<void>;
    unlogMigration({ name: migrationName }: {
        name: string;
    }): Promise<void>;
    executed(): Promise<string[]>;
}
