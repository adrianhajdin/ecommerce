import type { UmzugStorage } from './contract';
declare type AnyObject = Record<string, any>;
export declare type MongoDBConnectionOptions = {
    /**
    A connection to target database established with MongoDB Driver
    */
    readonly connection: AnyObject;
    /**
    The name of the migration collection in MongoDB

    @default 'migrations'
    */
    readonly collectionName?: string;
};
export declare type MongoDBCollectionOptions = {
    /**
    A reference to a MongoDB Driver collection
    */
    readonly collection: AnyObject;
};
export declare type MongoDBStorageConstructorOptions = MongoDBConnectionOptions | MongoDBCollectionOptions;
export declare class MongoDBStorage implements UmzugStorage {
    readonly collection: AnyObject;
    readonly connection: any;
    readonly collectionName: string;
    constructor(options: MongoDBStorageConstructorOptions);
    logMigration({ name: migrationName }: {
        name: string;
    }): Promise<void>;
    unlogMigration({ name: migrationName }: {
        name: string;
    }): Promise<void>;
    executed(): Promise<string[]>;
}
export {};
